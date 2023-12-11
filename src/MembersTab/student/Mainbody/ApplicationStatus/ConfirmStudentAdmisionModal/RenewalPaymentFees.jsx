import React, { useEffect, useState } from "react";
import style from "./ConfirmStudentAdmisionModal.module.css";
import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";
import { payment_initiating_set } from "../../../../../Decrypt/razorPaymentInitiating";
import {
  usePaymentCheckoutMutation,
  useRenderPaymentAPIKeysQuery,
} from "../../../../../services/RazorPay/paymentConfigure";
import QLoader from "../../../../../Loader/QLoader";
import { useMerchantId } from "../../../../../hooks/member_tab/finance-api";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import CashProcess from "./GatewayProcess/CashProcess";
import UPIProcess from "./GatewayProcess/UPIProcess";
import NEFTProcess from "./GatewayProcess/NEFTProcess";
import ChequeProcess from "./GatewayProcess/ChequeProcess";
import DemandProcess from "./GatewayProcess/DemandProcess";
import { Notfication } from "../../../../../validation/Snackbar";
import StudentPaymentGateway from "./StudentPaymentGateway";
import { useSelectRenewalByStudent } from "../../../../../hooks/member_tab/hostel-api";
import PaymentGatewayConfig from "../../../../../PaymentGateway/PaymentGatewayConfig";
import {
  get_initiate_paytm,
  paytmPostInfo,
} from "../../../../../Decrypt/paytmUpiInitiative";
import { paytmActionUrl } from "../../../../../services/BaseUrl";
import { useParams } from "react-router-dom";
import PopupWrapper from "../../../../staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
const label = { inputPxrops: { "aria-label": "Switch demo" } };

function RenewalPaymentFees({ hideModal, statusQuery, onRefetchApplication }) {
  const { t } = useTranslation();
  const params = useParams();
  const [install, setInstall] = useState(false);
  const [index, setIndex] = useState(0);
  const [charges, setCharges] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState("");
  const [allContent, setAllContent] = useState({
    amount: 0,
    feesId: "",
    insId: "",
    type: "",
    installmentType: "",
  });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [payData, setPayData] = useState({
    fee_payment_mode: "",
    fee_payment_amount: "",
    transaction_date: "",
    fee_bank_name: "",
    fee_bank_holder: "",
    fee_utr_reference: "",
    fee_payment_acknowledge: "",
    month: "",
  });

  const { data: getKeys } = useRenderPaymentAPIKeysQuery();
  const [checkout] = usePaymentCheckoutMutation();
  const [selectRenewalByStudent] = useSelectRenewalByStudent();

  const { merchantId, merchantIdRefetch } = useMerchantId({
    id: statusQuery?.renewal_hostel?.institute?._id,
    skip: !statusQuery?.renewal_hostel?.institute?._id,
  });

  useEffect(() => {
    if (statusQuery?.renewal_hostel?.institute?._id) merchantIdRefetch();
  }, [statusQuery?.renewal_hostel?.institute?._id, merchantIdRefetch]);

  useEffect(() => {
    setAllContent((prev) => ({
      ...prev,
      amount:
        statusQuery?.renewal_student?.hostel_fee_structure?.one_installments
          ?.fees,
    }));
  }, []);
  const onInstallMentToggle = () => {
    setInstall((prev) => !prev);
  };
  const onAmountChange = (e) => {
    setAllContent((prev) => ({
      ...prev,
      amount: e.target.value,
    }));
  };

  const onValidation = (data) => {
    const errors = {};
    if (!data) errors["month_re"] = `is required!`;
    return errors;
  };

  const ConfirmOffline = () => {
    const validation = onValidation(payData.month);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      setDisabled(true);
      // this is only for the pay in cash mode not other mode
      var data = {
        sid: statusQuery?.renewal_student?._id,
        rid: statusQuery?._id,
        selectRenewal:
          index !== 2
            ? payData
            : {
                fee_payment_mode: "By Cash",
                month: payData.month,
              },
      };
      if (statusQuery?.renewal_student?._id !== "" && statusQuery?._id !== "") {
        selectRenewalByStudent(data)
          .then((res) => {
            if (res.data.status) {
              onRefetchApplication();
              setDisabled(false);
              hideModal(false);
            }
          })
          .catch({});
      }
    }
  };

  const checkoutHandler = (is_paytm) => {
    let gatewayCharges = (+allContent?.amount * 2.1) / 100;
    let gst = (+gatewayCharges * 18) / 100;
    let withGst = gatewayCharges + gst;
    const data = parseInt(allContent?.amount);
    var paymentData = {
      amount: Math.ceil(data + +withGst.toFixed(2)),
    };
    if (is_paytm === "PAYTM") {
      get_initiate_paytm({
        amount: +allContent?.amount,
        amount_nocharges: +paymentData.amount,
        type: "Hostel",
        paidBy: `${statusQuery?.renewal_student?._id}`,
        paidTo: `${statusQuery?.renewal_hostel?.institute?._id}`,
        moduleId: `${statusQuery?.renewal_application?._id}`,
        ad_status_id: `${statusQuery?._id}`,
        payment_installment: allContent.installmentType,
        ad_install: install,
        month: payData.month,
        payment_remain_1: null,
        payment_card_type: null,
        payment_book_id: null,
        name: params.username,
        isApk: "web",
        payment_card_id: null,
      })
        .then((data) => {
          // var information = {
          //   action: paytmActionUrl,
          //   params: response,
          // };
          // paytmPostInfo(information);
          window.onScriptLoad(
            data?.response?.body?.txnToken,
            data?.order,
            data?.amount
          );
        })
        .catch((e) => {
          console.info(e);
        });
    } else {
      if (getKeys?.Key && paymentData?.amount) {
        checkout({ amount: paymentData?.amount })
          .then((res) => {
            if (res.data?.success) {
              payment_initiating_set({
                key: getKeys?.Key,
                oid: res.data?.order.id,
                amount_nocharge: allContent?.amount * 100,
                amount: res.data?.order.amount,
                type: "Hostel",
                pay_by: `${statusQuery?.renewal_student?._id}`,
                pay_to: `${statusQuery?.renewal_hostel?.institute?._id}`,
                mid: `${statusQuery?.renewal_application?._id}`,
                razor_key: merchantId?.key,
                razor_author: merchantId?.bool,
                status: `${statusQuery?._id}`,
                installment_type: allContent.installmentType,
                is_install: install,
                h_month: payData.month,
              });
            } else {
              console.log("data error");
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        console.log("error");
      }
    }
  };

  const onConfirmFeeStrucutre = (structure) => {
    const validation = onValidation(payData.month);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }

    if (flag) {
      setFilled(validation);
    } else {
      if (
        +allContent.amount >= structure?.one_installments?.fees &&
        +allContent.amount <= structure?.total_admission_fees
      ) {
        setAllContent({
          ...allContent,
          type: "Admission",
          installmentType: install ? "one_installments" : "",
        });
        setCharges(true);
      } else {
        setNotificationState({
          msg: `Enter amount is not less than ${structure?.one_installments?.fees} or greater than ${structure?.total_admission_fees}`,
          run: true,
        });
      }
    }
  };
  //   console.info("this is stats", statusQuery);

  const onSelectIndex = (val) => {
    const validation = onValidation(payData.month);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }

    if (flag) {
      setFilled(validation);
    } else {
      setIndex(val);
    }
  };
  return (
    <>
      {!charges && (
        <PopupWrapper onClose={() => hideModal(false)}>
          {(index === 0 || index === 1) && (
            <div className={style.addDisplay}>
              <div className={style.title}>
                <div></div>
                <h6>{t("confirm_renewal")}</h6>
                <img
                  src="/images/close-post-icon.svg"
                  onClick={() => hideModal(false)}
                  alt=""
                />
              </div>
              <div className={style.content}>
                <JoinFormInput
                  labelText={t("stay_for_month")}
                  placeholder={t("total_months_placeholder")}
                  name={"month_re"}
                  value={payData?.month}
                  type={"text"}
                  onChange={(e) =>
                    setPayData((prev) => ({
                      ...prev,
                      month: e.target.value,
                    }))
                  }
                  errorShow={filled["month_re"]}
                />
                <div className={style.tabsss}>
                  <div
                    className={
                      index === 0
                        ? `${style.singletab} ${style.singletabActive}`
                        : style.singletab
                    }
                    onClick={() => setIndex(0)}
                  >
                    {t("pay_online")}
                  </div>

                  <div
                    className={
                      index === 1
                        ? `${style.singletab} ${style.singletabActive}`
                        : style.singletab
                    }
                    onClick={() => setIndex(1)}
                  >
                    {t("pay_offline")}
                  </div>
                </div>

                {index === 0 && (
                  <div>
                    <div className={style.singlerow}>
                      <h6>{t("admission_fees")}</h6>
                      <h6>
                        Rs.{" "}
                        {statusQuery?.renewal_student?.hostel_fee_structure
                          ?.total_admission_fees ?? 0}
                      </h6>
                    </div>
                    <div
                      className={style.singlerow}
                      style={{
                        marginTop: "1rem",
                      }}
                    >
                      <h6>{t("applicable_fees_only")}</h6>
                      <h6>
                        Rs.{" "}
                        {statusQuery?.renewal_student?.hostel_fee_structure
                          ?.applicable_fees ?? 0}
                      </h6>
                    </div>
                    <div className={style.singlerow}>
                      <h6>
                        {t("fees_category")} {" : "}
                        {statusQuery?.renewal_student?.hostel_fee_structure
                          ?.category_master?.category_name ?? ""}
                      </h6>
                    </div>
                    <h6 className={style.fee_structure_note}>
                      {t("fee_structure_note")}
                    </h6>
                    <div className={style.singlerow1}>
                      <h6>{t("pay_in_installment")}</h6>
                      <Switch {...label} onChange={onInstallMentToggle} />
                    </div>

                    {install && (
                      <div>
                        <div className={style.borderr}></div>

                        <div className={style.singlerow1}>
                          <h6>{t("first_install")}</h6>
                          <h6>
                            Rs.{" "}
                            {statusQuery?.renewal_student?.hostel_fee_structure
                              ?.one_installments?.fees ?? 0}
                          </h6>
                        </div>
                      </div>
                    )}

                    <JoinFormInput
                      labelText={t("enter_amount_to_be_paid")}
                      name={"amount"}
                      type={"tel"}
                      value={allContent.amount}
                      // value={payData.amount}
                      onChange={onAmountChange}
                      placeholder={t("please_enter_amount_paid")}
                      // errorShow={filled["fee_payment_amount"]}
                    />
                    <div className={style.payandconfirmContainer}>
                      <p className={style.payandconfirm}>
                        {t("pay_and_confirm")}
                      </p>
                    </div>

                    <div
                      className={style.btn}
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        onConfirmFeeStrucutre(
                          statusQuery?.renewal_student?.hostel_fee_structure
                        )
                      }
                    >
                      {t("pay_confirm")}
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div>
                    <div className={style.singlerow}>
                      <h6>{t("admission_fees")}</h6>
                      <h6>
                        Rs.{" "}
                        {statusQuery?.renewal_student?.hostel_fee_structure
                          ?.total_admission_fees ?? 0}
                      </h6>
                    </div>
                    <div
                      className={style.singlerow}
                      style={{
                        marginTop: "1rem",
                      }}
                    >
                      <h6>{t("applicable_fees_only")}</h6>
                      <h6>
                        Rs.{" "}
                        {statusQuery?.renewal_student?.hostel_fee_structure
                          ?.applicable_fees ?? 0}
                      </h6>
                    </div>
                    <div className={style.singlerow}>
                      <h6>
                        {t("fees_category")} {" : "}
                        {statusQuery?.renewal_student?.hostel_fee_structure
                          ?.category_master?.category_name ?? ""}
                      </h6>
                    </div>
                    <h6 className={style.fee_structure_note}>
                      {t("fee_structure_note")}
                    </h6>
                    {statusQuery?.renewal_student?.hostel_fee_structure
                      ?.one_installments?.fees && (
                      <div className={style.singlerow1}>
                        <h6>{t("first_install")}</h6>
                        <h6>
                          Rs.{" "}
                          {statusQuery?.renewal_student?.hostel_fee_structure
                            ?.one_installments?.fees ?? 0}
                        </h6>
                      </div>
                    )}

                    <div className={style.borderr}></div>

                    <div className={style.adholdcontainer}>
                      <p className={style.payandconfirm}>
                        {t("admission_hold")}
                      </p>
                    </div>
                    <StudentPaymentGateway
                      financeId={
                        statusQuery?.renewal_hostel?.institute
                          ?.financeDepart?.[0] ?? ""
                      }
                      setIndex={onSelectIndex}
                      departmentId={statusQuery?.renewal_hostel?._id ?? ""}
                      flowAs={"Hostel"}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {index === 2 && (
            <CashProcess setIndex={setIndex} ConfirmOffline={ConfirmOffline} />
          )}
          {index === 3 && (
            <UPIProcess
              financeId={
                statusQuery?.renewal_hostel?.institute?.financeDepart?.[0] ?? ""
              }
              setIndex={setIndex}
              setPayData={setPayData}
              payData={payData}
              ConfirmOffline={ConfirmOffline}
              departmentId={statusQuery?.renewal_hostel?._id ?? ""}
              flowAs={"Hostel"}
              viewAs="HOSTEL_RENEWAL"
            />
          )}
          {index === 4 && (
            <NEFTProcess
              financeId={
                statusQuery?.renewal_hostel?.institute?.financeDepart?.[0] ?? ""
              }
              setIndex={setIndex}
              setPayData={setPayData}
              payData={payData}
              ConfirmOffline={ConfirmOffline}
              departmentId={statusQuery?.renewal_hostel?._id ?? ""}
              flowAs={"Hostel"}
              viewAs="HOSTEL_RENEWAL"
            />
          )}
          {index === 5 && (
            <ChequeProcess
              financeId={
                statusQuery?.renewal_hostel?.institute?.financeDepart?.[0] ?? ""
              }
              setIndex={setIndex}
              setPayData={setPayData}
              payData={payData}
              ConfirmOffline={ConfirmOffline}
              departmentId={statusQuery?.renewal_hostel?._id ?? ""}
              flowAs={"Hostel"}
              viewAs="HOSTEL_RENEWAL"
            />
          )}
          {index === 6 && (
            <DemandProcess
              financeId={
                statusQuery?.renewal_hostel?.institute?.financeDepart?.[0] ?? ""
              }
              setIndex={setIndex}
              setPayData={setPayData}
              payData={payData}
              ConfirmOffline={ConfirmOffline}
              departmentId={statusQuery?.renewal_hostel?._id ?? ""}
              flowAs={"Hostel"}
              viewAs="HOSTEL_RENEWAL"
            />
          )}
          {disabled && <QLoader />}
        </PopupWrapper>
      )}

      {charges && (
        <PaymentGatewayConfig
          onClose={() => setCharges(false)}
          allContent={allContent}
          checkoutAdmissionHandler={checkoutHandler}
        />
      )}
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
    </>
  );
}

export default RenewalPaymentFees;
