import React, { useEffect, useState } from "react";
import style from "./ConfirmStudentAdmisionModal.module.css";
import { Dialog } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";
import { payment_initiating_set } from "../../../../../Decrypt/razorPaymentInitiating";
import {
  usePaymentCheckoutMutation,
  useRenderPaymentAPIKeysQuery,
} from "../../../../../services/RazorPay/paymentConfigure";
import { useOneApplicationDetail } from "../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../Loader/QLoader";
import { useMerchantId } from "../../../../../hooks/member_tab/finance-api";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import CashProcess from "./GatewayProcess/CashProcess";
import UPIProcess from "./GatewayProcess/UPIProcess";
import NEFTProcess from "./GatewayProcess/NEFTProcess";
import ChequeProcess from "./GatewayProcess/ChequeProcess";
import DemandProcess from "./GatewayProcess/DemandProcess";
import { Notfication } from "../../../../../validation/Snackbar";
import { useConfirmHostelApplicationByStudent } from "../../../../../hooks/member_tab/hostel-api";
import AdmissionApplicationDetail from "../../../../staff/Mainbody/StaffAdmisionAdmin/AdmissionApplicationRequest/OngoingApplication/AdmissionApplicationDetail";
import PaymentGatewayConfig from "../../../../../PaymentGateway/PaymentGatewayConfig";
import { get_initiate_paytm } from "../../../../../Decrypt/paytmUpiInitiative";
import { useParams } from "react-router-dom";
const label = { inputProps: { "aria-label": "Switch demo" } };

function StudentHostelApplicationPayment({
  addDisplay,
  hideModal,
  statusQuery,
  onRefetchApplication,
  isFeesEditable,
}) {
  const { t } = useTranslation();
  const params = useParams();
  const [install, setInstall] = useState(false);
  const [index, setIndex] = useState(0);
  const [applicationId, setApplicationId] = useState("");
  const [charges, setCharges] = useState(false);
  const [disabled, setDisabled] = useState(false);
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
  });

  const { data: getKeys } = useRenderPaymentAPIKeysQuery();
  const [checkout] = usePaymentCheckoutMutation();

  const [confirmHostelApplicationByStudent] =
    useConfirmHostelApplicationByStudent();

  const { oneApplicationDetail, oneApplicationDetailRefetch } =
    useOneApplicationDetail({
      apid: statusQuery?.applicationId?._id,
      skip: !statusQuery?.applicationId?._id,
    });

  const { merchantId, merchantIdRefetch } = useMerchantId({
    id: oneApplicationDetail?.oneApply?.hostelAdmin?.institute?._id,
    skip: !oneApplicationDetail?.oneApply?.hostelAdmin?.institute?._id,
  });

  useEffect(() => {
    if (statusQuery?.applicationId?._id) oneApplicationDetailRefetch();
  }, [statusQuery?.applicationId?._id, oneApplicationDetailRefetch]);

  useEffect(() => {
    if (oneApplicationDetail?.oneApply?.hostelAdmin?.institute?._id)
      merchantIdRefetch();
  }, [
    oneApplicationDetail?.oneApply?.hostelAdmin?.institute?._id,
    merchantIdRefetch,
  ]);

  useEffect(() => {
    setAllContent((prev) => ({
      ...prev,
      amount: statusQuery?.hostel_fee_structure?.applicable_fees,
    }));
  }, [statusQuery?.hostel_fee_structure?.applicable_fees]);

  const onInstallMentToggle = () => {
    setAllContent((prev) => ({
      ...prev,
      amount: statusQuery?.hostel_fee_structure?.one_installments?.fees,
    }));
    setInstall((prev) => !prev);
  };

  const onAmountChange = (e) => {
    setAllContent((prev) => ({
      ...prev,
      amount: e.target.value,
    }));
  };

  const onViewApplication = () => {
    setApplicationId(statusQuery?.applicationId?._id);
  };

  const onCloseViewApplication = () => {
    setApplicationId("");
  };

  const ConfirmOffline = () => {
    setDisabled(true);

    // this is only for the pay in cash mode not other mode
    var data = {
      sid: statusQuery?.studentId,
      aid: statusQuery?.applicationId?._id,
      statusId: statusQuery?._id,
      confirmPayload:
        index !== 2
          ? payData
          : {
              fee_payment_mode: "By Cash",
            },
    };
    if (data?.sid !== "" && data?.aid !== "" && data?.statusId !== "") {
      confirmHostelApplicationByStudent(data)
        .then((res) => {
          if (res.data.status) {
            onRefetchApplication();
            setDisabled(false);
            hideModal(false);
          }
        })
        .catch({});
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
        paidBy: `${statusQuery?.studentId}`,
        paidTo: `${statusQuery?.instituteId?._id}`,
        moduleId: `${statusQuery?.applicationId?._id}`,
        ad_status_id: statusQuery?._id,
        payment_installment:
          allContent.installmentType === "" ? null : allContent.installmentType,
        ad_install: install,
        month: null,
        payment_remain_1: null,
        payment_card_type: null,
        payment_book_id: null,
        name: params.username,
        isApk: "web",
        payment_card_id: null,
      })
        .then((data) => {
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
                pay_by: `${statusQuery?.studentId}`,
                pay_to: `${statusQuery?.instituteId?._id}`,
                mid: `${statusQuery?.applicationId?._id}`,
                razor_key: merchantId?.key,
                razor_author: merchantId?.bool,
                status: statusQuery?._id,
                installment_type: allContent.installmentType,
                is_install: install,
                h_month: null,
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
    // if (
    //   // +allContent.amount >= structure?.one_installments?.fees &&
    //   +allContent.amount <= structure?.total_admission_fees
    // ) {
    setAllContent({
      ...allContent,
      type: "Admission",
      installmentType: install ? "one_installments" : "",
    });
    setCharges(true);
    // } else {
    //   setNotificationState({
    //     msg: `Enter amount is not less than ${structure?.one_installments?.fees} or greater than ${structure?.total_admission_fees}`,
    //     run: true,
    //   });
    // }
  };
  // console.info("this is stats", statusQuery);

  return (
    <>
      <>
        {!applicationId && !charges && (
          <Dialog open={addDisplay} onClose={() => hideModal(false)}>
            {(index === 0 || index === 1) && (
              <div className={style.addDisplay}>
                <div className={style.title}>
                  <div></div>
                  <h6>{t("confirm_addmission")}</h6>
                  <img
                    src="/images/close-post-icon.svg"
                    onClick={() => hideModal(false)}
                    alt=""
                  />
                </div>
                <div className={style.content}>
                  <div
                    className={style.appdetailrow}
                    style={{ cursor: "pointer" }}
                    onClick={onViewApplication}
                  >
                    <h6>{t("view_app_details")}</h6>
                    <img
                      src="/images/admidion_department/right_arrow.svg"
                      alt=""
                    />
                  </div>

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
                      // onClick={() => setIndex(1)}
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
                          {statusQuery?.hostel_fee_structure
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
                          {statusQuery?.hostel_fee_structure?.applicable_fees ??
                            0}
                        </h6>
                      </div>
                      <div className={style.singlerow}>
                        <h6>
                          {t("fees_category")} {" : "}
                          {statusQuery?.hostel_fee_structure?.category_master
                            ?.category_name ?? ""}
                        </h6>
                      </div>
                      {/* <h6 className={style.fee_structure_note}>
                        {t("fee_structure_note")}
                      </h6> */}
                      <div className={style.singlerow1}>
                        <h6>{t("application_total_installment")}</h6>
                        <Switch {...label} onChange={onInstallMentToggle} />
                      </div>

                      {install && (
                        <div>
                          <div className={style.borderr}></div>

                          <div className={style.singlerow1}>
                            <h6>{t("first_install")}</h6>
                            <h6>
                              Rs.{" "}
                              {statusQuery?.hostel_fee_structure
                                ?.one_installments?.fees ?? 0}
                            </h6>
                          </div>
                          {statusQuery?.hostel_fee_structure?.two_installments
                            ?.fees ? (
                            <div className={style.singlerow1}>
                              <h6>{t("two_installments")}</h6>
                              <h6>
                                Rs.{" "}
                                {statusQuery?.hostel_fee_structure
                                  ?.two_installments?.fees ?? 0}
                              </h6>
                            </div>
                          ) : (
                            ""
                          )}
                          {statusQuery?.hostel_fee_structure?.three_installments
                            ?.fees ? (
                            <div className={style.singlerow1}>
                              <h6>{t("three_installments")}</h6>
                              <h6>
                                Rs.{" "}
                                {statusQuery?.hostel_fee_structure
                                  ?.three_installments?.fees ?? 0}
                              </h6>
                            </div>
                          ) : (
                            ""
                          )}
                          {statusQuery?.hostel_fee_structure?.four_installments
                            ?.fees ? (
                            <div className={style.singlerow1}>
                              <h6>{t("four_installments")}</h6>
                              <h6>
                                Rs.{" "}
                                {statusQuery?.hostel_fee_structure
                                  ?.four_installments?.fees ?? 0}
                              </h6>
                            </div>
                          ) : (
                            ""
                          )}
                          {statusQuery?.hostel_fee_structure?.five_installments
                            ?.fees ? (
                            <div className={style.singlerow1}>
                              <h6>{t("five_installments")}</h6>
                              <h6>
                                Rs.{" "}
                                {statusQuery?.hostel_fee_structure
                                  ?.five_installments?.fees ?? 0}
                              </h6>
                            </div>
                          ) : (
                            ""
                          )}
                          {statusQuery?.hostel_fee_structure?.six_installments
                            ?.fees ? (
                            <div className={style.singlerow1}>
                              <h6>{t("six_installments")}</h6>
                              <h6>
                                Rs.{" "}
                                {statusQuery?.hostel_fee_structure
                                  ?.six_installments?.fees ?? 0}
                              </h6>
                            </div>
                          ) : (
                            ""
                          )}
                          {statusQuery?.hostel_fee_structure?.seven_installments
                            ?.fees ? (
                            <div className={style.singlerow1}>
                              <h6>{t("seven_installments")}</h6>
                              <h6>
                                Rs.{" "}
                                {statusQuery?.hostel_fee_structure
                                  ?.seven_installments?.fees ?? 0}
                              </h6>
                            </div>
                          ) : (
                            ""
                          )}
                          {statusQuery?.hostel_fee_structure?.eight_installments
                            ?.fees ? (
                            <div className={style.singlerow1}>
                              <h6>{t("eight_installments")}</h6>
                              <h6>
                                Rs.{" "}
                                {statusQuery?.hostel_fee_structure
                                  ?.eight_installments?.fees ?? 0}
                              </h6>
                            </div>
                          ) : (
                            ""
                          )}
                          {statusQuery?.hostel_fee_structure?.nine_installments
                            ?.fees ? (
                            <div className={style.singlerow1}>
                              <h6>{t("nine_installments")}</h6>
                              <h6>
                                Rs.{" "}
                                {statusQuery?.hostel_fee_structure
                                  ?.nine_installments?.fees ?? 0}
                              </h6>
                            </div>
                          ) : (
                            ""
                          )}
                          {statusQuery?.hostel_fee_structure?.ten_installments
                            ?.fees ? (
                            <div className={style.singlerow1}>
                              <h6>{t("ten_installments")}</h6>
                              <h6>
                                Rs.{" "}
                                {statusQuery?.hostel_fee_structure
                                  ?.ten_installments?.fees ?? 0}
                              </h6>
                            </div>
                          ) : (
                            ""
                          )}
                          {statusQuery?.hostel_fee_structure
                            ?.eleven_installments?.fees ? (
                            <div className={style.singlerow1}>
                              <h6>{t("eleven_installments")}</h6>
                              <h6>
                                Rs.{" "}
                                {statusQuery?.hostel_fee_structure
                                  ?.eleven_installments?.fees ?? 0}
                              </h6>
                            </div>
                          ) : (
                            ""
                          )}
                          {statusQuery?.hostel_fee_structure
                            ?.tweleve_installments?.fees ? (
                            <div className={style.singlerow1}>
                              <h6>{t("tweleve_installments")}</h6>
                              <h6>
                                Rs.{" "}
                                {statusQuery?.hostel_fee_structure
                                  ?.tweleve_installments?.fees ?? 0}
                              </h6>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      )}

                      <JoinFormInput
                        labelText={t("enter_amount_to_be_paid")}
                        name={"amount"}
                        type={"tel"}
                        value={allContent.amount}
                        onChange={onAmountChange}
                        placeholder={t("please_enter_amount_paid")}
                        disabled={isFeesEditable}
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
                            statusQuery?.hostel_fee_structure,
                            statusQuery?.flow_status
                          )
                        }
                      >
                        {t("pay_confirm")}
                      </div>
                    </div>
                  )}

                  {/* {index === 1 && (
                    <div>
                      <div className={style.singlerow}>
                        <h6>{t("admission_fees")}</h6>
                        <h6>
                          Rs.{" "}
                          {statusQuery?.hostel_fee_structure
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
                          {statusQuery?.hostel_fee_structure?.applicable_fees ??
                            0}
                        </h6>
                      </div>
                      <div className={style.singlerow}>
                        <h6>
                          {t("fees_category")} {" : "}
                          {statusQuery?.hostel_fee_structure?.category_master
                            ?.category_name ?? ""}
                        </h6>
                      </div>

                      {statusQuery?.hostel_fee_structure?.one_installments
                        ?.fees ? (
                        <div className={style.singlerow1}>
                          <h6>{t("first_install")}</h6>
                          <h6>
                            Rs.{" "}
                            {statusQuery?.hostel_fee_structure?.one_installments
                              ?.fees ?? 0}
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}
                      {statusQuery?.hostel_fee_structure?.two_installments
                        ?.fees ? (
                        <div className={style.singlerow1}>
                          <h6>{t("two_installments")}</h6>
                          <h6>
                            Rs.{" "}
                            {statusQuery?.hostel_fee_structure?.two_installments
                              ?.fees ?? 0}
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}
                      {statusQuery?.hostel_fee_structure?.three_installments
                        ?.fees ? (
                        <div className={style.singlerow1}>
                          <h6>{t("three_installments")}</h6>
                          <h6>
                            Rs.{" "}
                            {statusQuery?.hostel_fee_structure
                              ?.three_installments?.fees ?? 0}
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}
                      {statusQuery?.hostel_fee_structure?.four_installments
                        ?.fees ? (
                        <div className={style.singlerow1}>
                          <h6>{t("four_installments")}</h6>
                          <h6>
                            Rs.{" "}
                            {statusQuery?.hostel_fee_structure
                              ?.four_installments?.fees ?? 0}
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}
                      {statusQuery?.hostel_fee_structure?.five_installments
                        ?.fees ? (
                        <div className={style.singlerow1}>
                          <h6>{t("five_installments")}</h6>
                          <h6>
                            Rs.{" "}
                            {statusQuery?.hostel_fee_structure
                              ?.five_installments?.fees ?? 0}
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}
                      {statusQuery?.hostel_fee_structure?.six_installments
                        ?.fees ? (
                        <div className={style.singlerow1}>
                          <h6>{t("six_installments")}</h6>
                          <h6>
                            Rs.{" "}
                            {statusQuery?.hostel_fee_structure?.six_installments
                              ?.fees ?? 0}
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}
                      {statusQuery?.hostel_fee_structure?.seven_installments
                        ?.fees ? (
                        <div className={style.singlerow1}>
                          <h6>{t("seven_installments")}</h6>
                          <h6>
                            Rs.{" "}
                            {statusQuery?.hostel_fee_structure
                              ?.seven_installments?.fees ?? 0}
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}
                      {statusQuery?.hostel_fee_structure?.eight_installments
                        ?.fees ? (
                        <div className={style.singlerow1}>
                          <h6>{t("eight_installments")}</h6>
                          <h6>
                            Rs.{" "}
                            {statusQuery?.hostel_fee_structure
                              ?.eight_installments?.fees ?? 0}
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}
                      {statusQuery?.hostel_fee_structure?.nine_installments
                        ?.fees ? (
                        <div className={style.singlerow1}>
                          <h6>{t("nine_installments")}</h6>
                          <h6>
                            Rs.{" "}
                            {statusQuery?.hostel_fee_structure
                              ?.nine_installments?.fees ?? 0}
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}
                      {statusQuery?.hostel_fee_structure?.ten_installments
                        ?.fees ? (
                        <div className={style.singlerow1}>
                          <h6>{t("ten_installments")}</h6>
                          <h6>
                            Rs.{" "}
                            {statusQuery?.hostel_fee_structure?.ten_installments
                              ?.fees ?? 0}
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}
                      {statusQuery?.hostel_fee_structure?.eleven_installments
                        ?.fees ? (
                        <div className={style.singlerow1}>
                          <h6>{t("eleven_installments")}</h6>
                          <h6>
                            Rs.{" "}
                            {statusQuery?.hostel_fee_structure
                              ?.eleven_installments?.fees ?? 0}
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}
                      {statusQuery?.hostel_fee_structure?.tweleve_installments
                        ?.fees ? (
                        <div className={style.singlerow1}>
                          <h6>{t("tweleve_installments")}</h6>
                          <h6>
                            Rs.{" "}
                            {statusQuery?.hostel_fee_structure
                              ?.tweleve_installments?.fees ?? 0}
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}

                      <div className={style.borderr}></div>

                      <div className={style.adholdcontainer}>
                        <p className={style.payandconfirm}>
                          {t("admission_hold")}
                        </p>
                      </div>
                      <StudentPaymentGateway
                        financeId={statusQuery?.finance ?? ""}
                        setIndex={setIndex}
                        departmentId={
                          statusQuery?.applicationId?.applicationUnit?.hostel
                            ?._id ?? ""
                        }
                        flowAs="Hostel"
                      />
                    </div>
                  )} */}
                </div>
              </div>
            )}

            {index === 2 && (
              <CashProcess
                setIndex={setIndex}
                ConfirmOffline={ConfirmOffline}
              />
            )}

            {index === 3 && (
              <UPIProcess
                financeId={statusQuery?.finance ?? ""}
                setIndex={setIndex}
                setPayData={setPayData}
                payData={payData}
                ConfirmOffline={ConfirmOffline}
                departmentId={
                  statusQuery?.applicationId?.applicationUnit?.hostel?._id ?? ""
                }
                flowAs="Hostel"
              />
            )}
            {index === 4 && (
              <NEFTProcess
                financeId={statusQuery?.finance ?? ""}
                setIndex={setIndex}
                setPayData={setPayData}
                payData={payData}
                ConfirmOffline={ConfirmOffline}
                departmentId={
                  statusQuery?.applicationId?.applicationUnit?.hostel?._id ?? ""
                }
                flowAs="Hostel"
              />
            )}
            {index === 5 && (
              <ChequeProcess
                financeId={statusQuery?.finance ?? ""}
                setIndex={setIndex}
                setPayData={setPayData}
                payData={payData}
                ConfirmOffline={ConfirmOffline}
                departmentId={
                  statusQuery?.applicationId?.applicationUnit?.hostel?._id ?? ""
                }
                flowAs="Hostel"
              />
            )}
            {index === 6 && (
              <DemandProcess
                financeId={statusQuery?.finance ?? ""}
                setIndex={setIndex}
                setPayData={setPayData}
                payData={payData}
                ConfirmOffline={ConfirmOffline}
                departmentId={
                  statusQuery?.applicationId?.applicationUnit?.hostel?._id ?? ""
                }
                flowAs="Hostel"
              />
            )}
            {disabled && <QLoader />}
          </Dialog>
        )}

        {charges && (
          <PaymentGatewayConfig
            onClose={() => setCharges(false)}
            allContent={allContent}
            checkoutAdmissionHandler={checkoutHandler}
          />
        )}

        {applicationId && (
          <AdmissionApplicationDetail
            viewDetail={applicationId ? true : false}
            hideModal={onCloseViewApplication}
            applicationId={applicationId}
            completeApplication={false}
          />
        )}
      </>

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

export default StudentHostelApplicationPayment;
