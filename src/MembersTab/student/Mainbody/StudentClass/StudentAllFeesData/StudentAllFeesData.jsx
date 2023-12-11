import React, { useEffect, useState } from "react";
import style from "./StudentAllFeesData.module.css";
import StudentFeesHeader from "./StudentFeesHeader";
import { useGetStudentFeesArrayQuery } from "../../../../../services/qvipleAPI";
import {
  usePaymentCheckoutMutation,
  useRenderPaymentAPIKeysQuery,
} from "../../../../../services/RazorPay/paymentConfigure";
import { useRenderStudentAdmissionFees } from "../../../../../hooks/member_tab/admission-api";
import { useMerchantId } from "../../../../../hooks/member_tab/finance-api";
import { payment_initiating_set } from "../../../../../Decrypt/razorPaymentInitiating";
import StudentAdmissionFees from "./StudentAdmissionFees";
import StudentInternalFees from "./StudentInternalFees";
import PaymentGatewayConfig from "../../../../../PaymentGateway/PaymentGatewayConfig";
import {
  get_initiate_paytm,
  paytmPostInfo,
  getData,
  post,
} from "../../../../../Decrypt/paytmUpiInitiative";
import { paytmActionUrl } from "../../../../../services/BaseUrl";
import { useParams } from "react-router-dom";
const StudentAllFeesData = ({ viewAs, sid, isFeesEditable }) => {
  const params = useParams();
  const [value, setValue] = useState(0);
  const [charges, setCharges] = useState(false);
  const [allContent, setAllContent] = useState({
    amount: 0,
    feesId: "",
    insId: "",
    type: "",
    bookId: "",
  });
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { data: feesQuery, refetch: feesQueryRefetch } =
    useGetStudentFeesArrayQuery(`${sid}`, { skip: !sid });
  const { data: getKeys } = useRenderPaymentAPIKeysQuery();
  const [checkout] = usePaymentCheckoutMutation();
  const { sudentAdmissionFeesList, sudentAdmissionFeesListRefetch } =
    useRenderStudentAdmissionFees({
      sid: sid,
      skip: !sid,
    });

  const { merchantId, merchantIdRefetch } = useMerchantId({
    id: feesQuery?.student?.institute?._id,
    skip: !feesQuery?.student?.institute?._id,
  });

  useEffect(() => {
    if (sid) {
      feesQueryRefetch();
      sudentAdmissionFeesListRefetch();
      setShowingDataLoading(true);
    }
  }, [sid, sudentAdmissionFeesListRefetch, feesQueryRefetch]);
  useEffect(() => {
    if (feesQuery?.student?.institute?._id) merchantIdRefetch();
  }, [feesQuery?.student?.institute?._id, merchantIdRefetch]);

  useEffect(() => {
    if (sudentAdmissionFeesList?.array) {
      setShowingDataLoading(false);
    } else if (sudentAdmissionFeesList?.array?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [sudentAdmissionFeesList?.array]);
  useEffect(() => {
    if (feesQuery?.mergePay) {
      setShowingDataLoading(false);
    } else if (feesQuery?.mergePay?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [feesQuery?.mergePay]);

  const onTabHandler = (val) => {
    setValue(val);
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
        type: "Fees",
        paidBy: `${feesQuery?.student?._id}`,
        paidTo: `${feesQuery?.student?.institute?._id}`,
        moduleId: `${allContent?.feesId}`,
        ad_status_id: null,
        payment_installment: null,
        ad_install: null,
        month: null,
        payment_remain_1: null,
        payment_card_type: null,
        payment_book_id: null,
        name: params.username,
        isApk: "web",
        payment_card_id: null,
      })
        .then((data) => {
          // console.info("befor");

          window.onScriptLoad(
            data?.response?.body?.txnToken,
            data?.order,
            data?.amount
          );
          // console.info("befafteror");

          // paytmPostInfo(information);
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
                type: "Fees",
                pay_by: `${feesQuery?.student?._id}`,
                pay_to: `${feesQuery?.student?.institute?._id}`,
                mid: `${allContent?.feesId}`,
                razor_key: merchantId?.key,
                razor_author: merchantId?.bool,
                status: null,
                installment_type: null,
                is_install: null,
                h_month: null,
              });
            } else {
              // console.log("data error");
            }
          })
          .catch((e) => {
            // console.log(e);
          });
      } else {
        console.log("error");
      }
    }
  };
  const addTotal = (arg1, arg2, arg3) => {
    return arg1 + arg2 + arg3;
  };
  const checkoutBacklogHandler = (is_paytm) => {
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
        type: "Backlog",
        paidBy: `${feesQuery?.student?._id}`,
        paidTo: `${feesQuery?.student?.institute?._id}`,
        moduleId: `${allContent?.feesId}`,
        ad_status_id: null,
        payment_installment: null,
        ad_install: null,
        month: null,
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
                type: "Backlog",
                pay_by: `${feesQuery?.student?._id}`,
                pay_to: `${feesQuery?.student?.institute?._id}`,
                mid: `${allContent?.feesId}`,
                razor_key: merchantId?.key,
                razor_author: merchantId?.bool,
                status: null,
                installment_type: null,
                is_install: null,
                h_month: null,
              });
            } else {
              // console.log("data error");
            }
          })
          .catch((e) => {
            // console.log(e);
          });
      } else {
        console.log("error");
      }
    }
  };

  const checkoutLibraryHandler = (is_paytm) => {
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
        type: "Library Fees",
        paidBy: `${feesQuery?.student?._id}`,
        paidTo: `${feesQuery?.student?.institute?._id}`,
        moduleId: `${allContent?.feesId}`,
        ad_status_id: null,
        payment_installment: null,
        ad_install: null,
        month: null,
        payment_remain_1: null,
        payment_card_type: null,
        payment_book_id: allContent?.bookId,
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
                type: "Library Fees",
                pay_by: `${feesQuery?.student?._id}`,
                pay_to: `${feesQuery?.student?.institute?._id}`,
                mid: `${allContent?.feesId}`,
                razor_key: merchantId?.key,
                razor_author: merchantId?.bool,
                status: null,
                installment_type: null,
                is_install: null,
                h_month: null,
                book_id: allContent?.bookId,
              });
            } else {
              // console.log("data error");
            }
          })
          .catch((e) => {
            // console.log(e);
          });
      } else {
        console.log("error");
      }
    }
  };

  return (
    <div className={style.student_alll_fees_data}>
      <StudentFeesHeader
        onTabHandler={onTabHandler}
        value={value}
        padiFees={addTotal(
          feesQuery?.student?.studentPaidFeeCount || 0,
          feesQuery?.student?.admissionPaidFeeCount || 0,
          feesQuery?.student?.hostelPaidFeeCount || 0
        )}
        remainingFees={addTotal(
          feesQuery?.student?.studentRemainingFeeCount || 0,
          feesQuery?.student?.admissionRemainFeeCount || 0,
          feesQuery?.student?.hostelRemainFeeCount || 0
        )}
        applicableRemainingFees={feesQuery?.student?.applicable_fees_pending}
        scholarshipFees={feesQuery?.paid_by_government ?? 0}
      />
      {value === 0 && (
        <StudentAdmissionFees
          viewAs={viewAs}
          sudentAdmissionFeesList={sudentAdmissionFeesList}
          sudentAdmissionFeesListRefetch={sudentAdmissionFeesListRefetch}
          feesQueryRefetch={feesQueryRefetch}
          showingDataLoading={showingDataLoading}
          isFeesEditable={isFeesEditable}
        />
      )}
      {value === 1 && (
        <StudentInternalFees
          setAllContent={setAllContent}
          setCharges={setCharges}
          showingDataLoading={showingDataLoading}
          sid={sid}
          viewAs={viewAs}
        />
      )}
      {charges && (
        <PaymentGatewayConfig
          onClose={() => setCharges(false)}
          allContent={allContent}
          checkoutHandler={checkoutHandler}
          checkoutBacklogHandler={checkoutBacklogHandler}
          checkoutLibraryHandler={checkoutLibraryHandler}
        />
      )}
    </div>
  );
};

export default StudentAllFeesData;
