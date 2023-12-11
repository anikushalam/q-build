import React, { useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import StudentPaymentGateway from "../../ApplicationStatus/ConfirmStudentAdmisionModal/StudentPaymentGateway";
import QLoader from "../../../../../Loader/QLoader";
import UPIProcess from "../../ApplicationStatus/ConfirmStudentAdmisionModal/GatewayProcess/UPIProcess";
import NEFTProcess from "../../ApplicationStatus/ConfirmStudentAdmisionModal/GatewayProcess/NEFTProcess";
import ChequeProcess from "../../ApplicationStatus/ConfirmStudentAdmisionModal/GatewayProcess/ChequeProcess";
import DemandProcess from "../../ApplicationStatus/ConfirmStudentAdmisionModal/GatewayProcess/DemandProcess";
import { Notfication } from "../../../../../validation/Snackbar";
import {
  useGetFeeReceiptDetail,
  usePayAdmissionFeeByStudent,
  useReApplyReceiptByStudent,
} from "../../../../../hooks/member_tab/admission-api";
import {
  usePaymentCheckoutMutation,
  useRenderPaymentAPIKeysQuery,
} from "../../../../../services/RazorPay/paymentConfigure";
import { useMerchantId } from "../../../../../hooks/member_tab/finance-api";
import style from "../../ApplicationStatus/ConfirmStudentAdmisionModal/ConfirmStudentAdmisionModal.module.css";
import { payment_initiating_set } from "../../../../../Decrypt/razorPaymentInitiating";
import PaymentForm from "../../ApplicationStatus/ConfirmStudentAdmisionModal/GatewayProcess/PaymentForm";
import {
  useOneReceiptReApplyByStudent,
  usePaymentOfflineFeeHostelByStudent,
} from "../../../../../hooks/member_tab/hostel-api";
import PaymentGatewayConfig from "../../../../../PaymentGateway/PaymentGatewayConfig";
import { get_initiate_paytm } from "../../../../../Decrypt/paytmUpiInitiative";
import { useParams } from "react-router-dom";
import { useStudentDesignationDataQuery } from "../../../../../services/joining/joinApi";
const StudentAdmissionPayFees = ({
  installment,
  onAdmissionFeesRefetch,
  onFeesRefetch,
  hideModal,
  addDisplay,
}) => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [charges, setCharges] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const params = useParams();
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
    fee_payment_type: installment?.install?.installmentValue ?? "",
    transaction_date: "",
    fee_bank_name: "",
    fee_bank_holder: "",
    fee_utr_reference: "",
    fee_payment_acknowledge: "",
  });

  const { data: getKeys } = useRenderPaymentAPIKeysQuery();
  const [checkout] = usePaymentCheckoutMutation();
  const [payAdmissionFeeByStudent] = usePayAdmissionFeeByStudent();
  const [paymentOfflineFeeHostelByStudent] =
    usePaymentOfflineFeeHostelByStudent();
  const { merchantId, merchantIdRefetch } = useMerchantId({
    id: installment?.install?.instituteId,
    skip: !installment?.install?.instituteId,
  });

  const {
    data: studentDesignationData,
    refetch: studentDesignationDataRefetch,
  } = useStudentDesignationDataQuery(installment?.studentId, {
    skip: !installment?.studentId,
  });

  useEffect(() => {
    if (installment?.studentId) {
      studentDesignationDataRefetch();
    }
  }, [installment?.studentId, studentDesignationDataRefetch]);
  const { getFeeReceiptDetail, getFeeReceiptDetailRefetch } =
    useGetFeeReceiptDetail({
      rid: installment?.install?.fee_receipt?._id,
      skip: !installment?.install?.fee_receipt?._id,
    });
  const [reApplyReceiptByStudent] = useReApplyReceiptByStudent();
  const [oneReceiptReApplyByStudent] = useOneReceiptReApplyByStudent();

  useEffect(() => {
    if (installment?.install?.instituteId) merchantIdRefetch();
  }, [installment?.install?.instituteId, merchantIdRefetch]);

  useEffect(() => {
    if (installment?.install?.fee_receipt?._id) getFeeReceiptDetailRefetch();
  }, [installment?.install?.fee_receipt?._id, getFeeReceiptDetailRefetch]);
  useEffect(() => {
    setAllContent((prev) => ({
      ...prev,
      amount:
        installment?.install?.remainAmount > installment?.studentApplicableFees
          ? installment?.studentApplicableFees
          : installment?.install?.remainAmount,
      // amount: installment?.install?.remainAmount,
    }));
    if (installment?.install?.installmentValue) {
      setPayData((prev) => ({
        ...prev,
        fee_payment_type: installment?.install?.installmentValue,
      }));
    }
  }, [
    installment?.studentApplicableFees,
    installment?.install?.installmentValue,
  ]);

  useEffect(() => {
    if (getFeeReceiptDetail?.receipt) {
      setPayData({
        fee_payment_mode: getFeeReceiptDetail?.receipt?.fee_payment_mode,
        fee_payment_amount: getFeeReceiptDetail?.receipt?.fee_payment_amount,
        transaction_date:
          getFeeReceiptDetail?.receipt?.fee_transaction_date?.substr(0, 10),
        fee_bank_name: getFeeReceiptDetail?.receipt?.fee_bank_name,
        fee_bank_holder: getFeeReceiptDetail?.receipt?.fee_bank_holder,
        fee_utr_reference: getFeeReceiptDetail?.receipt?.fee_utr_reference,
        fee_payment_acknowledge:
          getFeeReceiptDetail?.receipt?.fee_payment_acknowledge,
        fee_payment_type: getFeeReceiptDetail?.receipt?.fee_payment_type,
      });
    }
  }, [getFeeReceiptDetail?.receipt]);

  const onAmountChange = (e) => {
    setAllContent((prev) => ({
      ...prev,
      amount: e.target.value,
    }));
  };
  const ConfirmOffline = () => {
    setDisabled(true);
    if (installment?.studentId !== "" && installment?.install?.appId !== "") {
      // const obj = {
      //   sid: installment?.studentId,
      //   appId: installment?.install?.appId,
      //   offlinePay: {
      //     ...payData,
      //     rid: installment?.rid,
      //     raid: installment?.install?._id,
      //   },
      // };
      if (installment?.collectFlow === "Hostel Application") {
        paymentOfflineFeeHostelByStudent({
          sid: installment?.studentId,
          appId: installment?.install?.appId,
          offlinePay: {
            ...payData,
            rid: installment?.rid,
            raid: installment?.install?._id,
          },
        })
          .then(() => {
            onAdmissionFeesRefetch();
            onFeesRefetch();
            setDisabled(false);
            hideModal(false);
          })
          .catch({});
      } else {
        payAdmissionFeeByStudent({
          sid: installment?.studentId,
          appId: installment?.install?.appId,
          offlinePay: {
            ...payData,
            rid: installment?.rid,
            raid: installment?.install?._id,
          },
        })
          .then(() => {
            onAdmissionFeesRefetch();
            onFeesRefetch();
            setDisabled(false);
            hideModal(false);
          })
          .catch({});
      }
      // console.info("this is payload", obj);
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
      if (installment?.collectFlow === "Transport Application") {
        get_initiate_paytm({
          amount: +allContent?.amount,
          amount_nocharges: +paymentData.amount,
          type: "Transport",
          paidBy: `${installment?.studentId}`,
          paidTo: `${installment?.install?.instituteId}`,
          moduleId: `${installment?.install?.vehicleId}`,
          ad_status_id: null,
          payment_installment: allContent.installmentType,
          ad_install: null,
          month: null,
          payment_remain_1: installment?.rid,
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
      } else if (installment?.collectFlow === "Hostel Application") {
        get_initiate_paytm({
          amount: +allContent?.amount,
          amount_nocharges: +paymentData.amount,
          type: "Hostel",
          paidBy: `${installment?.studentId}`,
          paidTo: `${installment?.install?.instituteId}`,
          moduleId: `${installment?.install?.appId}`,
          ad_status_id: null,
          payment_installment: allContent.installmentType,
          ad_install: null,
          month: null,
          payment_remain_1: installment?.rid,
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
        get_initiate_paytm({
          amount: +allContent?.amount ?? 10,
          amount_nocharges: +paymentData.amount ?? 12,
          type: "Admission",
          paidBy: `${installment?.studentId}`,
          paidTo: `${installment?.install?.instituteId}`,
          moduleId: `${installment?.install?.appId}`,
          ad_status_id: null,
          payment_installment: allContent.installmentType,
          ad_install: null,
          month: null,
          payment_remain_1: installment?.install?._id,
          payment_card_type:
            installment?.is_promote || installment?.is_already_made
              ? "Promote"
              : null,
          payment_book_id: null,
          name: params.username,
          isApk: "web",
          payment_card_id: installment?.rid ?? null,
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
      }
    } else {
      if (getKeys?.Key && paymentData?.amount) {
        if (installment?.collectFlow === "Hostel Application") {
          checkout({ amount: paymentData?.amount })
            .then((res) => {
              if (res.data?.success) {
                payment_initiating_set({
                  key: getKeys?.Key,
                  oid: res.data?.order.id,
                  amount_nocharge: allContent?.amount * 100,
                  amount: res.data?.order.amount,
                  type: "Hostel",
                  pay_by: `${installment?.studentId}`,
                  pay_to: `${installment?.install?.instituteId}`,
                  mid: `${installment?.install?.appId}`,
                  razor_key: merchantId?.key,
                  razor_author: merchantId?.bool,
                  status: "",
                  installment_type: allContent.installmentType,
                  is_install: null,
                  h_month: null,
                  is_remain_payment: installment?.rid,
                  payment_card_id: null,
                });
              } else {
                console.log("data error");
              }
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          checkout({ amount: paymentData?.amount })
            .then((res) => {
              if (res.data?.success) {
                payment_initiating_set({
                  key: getKeys?.Key,
                  oid: res.data?.order.id,
                  amount_nocharge: allContent?.amount * 100,
                  amount: res.data?.order.amount,
                  type: "Admission",
                  pay_by: `${installment?.studentId}`,
                  pay_to: `${installment?.install?.instituteId}`,
                  mid: `${installment?.install?.appId}`,
                  razor_key: merchantId?.key,
                  razor_author: merchantId?.bool,
                  status: "",
                  installment_type: allContent.installmentType,
                  is_install: null,
                  h_month: null,
                  payment_type_as:
                    installment?.is_promote ?? installment?.is_already_made
                      ? "Promote"
                      : null,
                  is_remain_payment: installment?.install?._id,
                  payment_card_id: installment?.rid,
                });
              } else {
                console.log("data error");
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }
      } else {
        console.log("error");
      }
    }
  };

  const onRepayHandler = () => {
    setDisabled((pre) => !pre);
    if (installment?.collectFlow === "Hostel Application") {
      oneReceiptReApplyByStudent({
        rid: getFeeReceiptDetail?.receipt?._id,
        sid: installment?.install?.fee_receipt?.student,
        receiptReapply: payData,
      })
        .then(() => {
          onAdmissionFeesRefetch();
          onFeesRefetch();
          hideModal(false);
          setDisabled((pre) => !pre);
        })
        .catch({});
    } else {
      reApplyReceiptByStudent({
        rid: getFeeReceiptDetail?.receipt?._id,
        sid: installment?.install?.fee_receipt?.student,
        receiptReapply: payData,
      })
        .then(() => {
          onAdmissionFeesRefetch();
          onFeesRefetch();
          hideModal(false);
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  // console.info("this is intsallment", installment);
  return (
    <>
      {!disabled && !charges && (
        <Dialog open={addDisplay} onClose={() => hideModal(false)}>
          {installment?.openAs === "RE_PAY" ? (
            <div
              style={{
                padding: "0.9rem",
              }}
            >
              <PaymentForm
                payData={payData}
                setPayData={setPayData}
                ConfirmOffline={onRepayHandler}
                setOpenForm={hideModal}
              />
            </div>
          ) : (
            (index === 0 || index === 1) && (
              <div className={style.addDisplay}>
                <div className={style.title}>
                  <div></div>
                  <h6>{t("pay_admission_fees")}</h6>
                  <img
                    src="/images/close-post-icon.svg"
                    onClick={() => hideModal(false)}
                    alt=""
                  />
                </div>
                <div className={style.content}>
                  <div
                    className={style.tabsss}
                    style={{
                      marginTop: "0",
                    }}
                  >
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
                      // onClick={() =>
                      //   installment?.collectFlow === "Hostel Application"
                      //     ? {}
                      //     : setIndex(1)
                      // }
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
                          {installment?.feeStructure?.total_admission_fees || 0}
                        </h6>
                        {/* <h6>Rs. {installment?.install?.remainAmount || 0}</h6> */}
                      </div>
                      <div className={style.singlerow}>
                        <h6>{t("applicable_pendig_fees_only")}</h6>
                        <h6>Rs. {installment?.studentApplicableFees || 0}</h6>
                      </div>
                      <div className={style.singlerow}>
                        <h6>
                          {t("fees_category")} {" : "}
                          {installment?.feeStructure?.category_master
                            ?.category_name ?? ""}
                        </h6>
                      </div>
                      {/* <h6 className={style.fee_structure_note}>
                        {t("fee_structure_note")}
                      </h6> */}

                      <JoinFormInput
                        labelText={t("enter_amount_to_be_paid")}
                        name={"amount"}
                        type={"tel"}
                        value={allContent.amount}
                        onChange={onAmountChange}
                        placeholder={t("please_enter_amount_paid")}
                        disabled={
                          studentDesignationData?.student
                            ?.online_amount_edit_access === "Granted"
                            ? false
                            : true
                        }
                      />
                      <div className={style.payandconfirmContainer}>
                        <p className={style.payandconfirm}>
                          {t("pay_and_confirm")}
                        </p>
                      </div>

                      <div
                        className={style.btn}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          // if (
                          //   +allContent.amount <=
                          //   installment?.install?.remainAmount
                          // ) {
                          setAllContent({
                            ...allContent,
                            type: "Admission",
                            installmentType:
                              installment?.install?.installmentValue,
                          });
                          setCharges(true);
                          // } else {
                          //   setNotificationState({
                          //     msg: `Enter amount is greater than ${installment?.install?.remainAmount}`,
                          //     run: true,
                          //   });
                          // }
                        }}
                      >
                        {t("pay_confirm")}
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div>
                      <div className={style.singlerow}>
                        <h6>{t("admission_fees")}</h6>
                        <h6>Rs. {installment?.install?.remainAmount || 0}</h6>
                      </div>
                      <div className={style.singlerow}>
                        <h6>
                          {t("fees_category")} {" : "}
                          {installment?.feeStructure?.category_master
                            ?.category_name ?? ""}
                        </h6>
                      </div>
                      {/* <h6 className={style.fee_structure_note}>
                        {t("fee_structure_note")}
                      </h6> */}
                      <div className={style.borderr}></div>
                      <StudentPaymentGateway
                        financeId={installment?.financeId ?? ""}
                        setIndex={setIndex}
                        viewAs="STUDENT"
                        departmentId={installment?.departmentId ?? ""}
                        flowAs={
                          installment?.collectFlow === "Hostel Application"
                            ? "Hostel"
                            : // : installment?.collectFlow
                              "Department"
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          )}

          {index === 3 && (
            <UPIProcess
              financeId={installment?.financeId ?? ""}
              setIndex={setIndex}
              setPayData={setPayData}
              payData={payData}
              ConfirmOffline={ConfirmOffline}
              ExceedAmount={installment?.install?.remainAmount ?? 0}
              viewAs="STUDENT"
              flowAs={
                installment?.collectFlow === "Hostel Application"
                  ? "Hostel"
                  : // : installment?.collectFlow
                    "Department"
              }
              departmentId={installment?.departmentId ?? ""}
            />
          )}
          {index === 4 && (
            <NEFTProcess
              financeId={installment?.financeId ?? ""}
              setIndex={setIndex}
              setPayData={setPayData}
              payData={payData}
              ConfirmOffline={ConfirmOffline}
              ExceedAmount={installment?.install?.remainAmount ?? 0}
              viewAs="STUDENT"
              flowAs={
                installment?.collectFlow === "Hostel Application"
                  ? "Hostel"
                  : // : installment?.collectFlow
                    "Department"
              }
              departmentId={installment?.departmentId ?? ""}
            />
          )}
          {index === 5 && (
            <ChequeProcess
              financeId={installment?.financeId ?? ""}
              setIndex={setIndex}
              setPayData={setPayData}
              payData={payData}
              ConfirmOffline={ConfirmOffline}
              ExceedAmount={installment?.install?.remainAmount ?? 0}
              viewAs="STUDENT"
              flowAs={
                installment?.collectFlow === "Hostel Application"
                  ? "Hostel"
                  : // : installment?.collectFlow
                    "Department"
              }
              departmentId={installment?.departmentId ?? ""}
            />
          )}
          {index === 6 && (
            <DemandProcess
              financeId={installment?.financeId ?? ""}
              setIndex={setIndex}
              setPayData={setPayData}
              payData={payData}
              ConfirmOffline={ConfirmOffline}
              ExceedAmount={installment?.install?.remainAmount ?? 0}
              viewAs="STUDENT"
              flowAs={
                installment?.collectFlow === "Hostel Application"
                  ? "Hostel"
                  : // : installment?.collectFlow
                    "Department"
              }
              departmentId={installment?.departmentId ?? ""}
            />
          )}
        </Dialog>
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
      {disabled && <QLoader />}
    </>
  );
};

export default StudentAdmissionPayFees;
