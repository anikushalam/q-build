import React from "react";
import style from "./ParticipateEventActivity.module.css";
import { useTranslation } from "react-i18next";
import {
  useParticipateEventDetails,
  useWithoutPaymentParticipateApply,
} from "../../../../hooks/member_tab/department-api";
import moment from "moment";
import { payment_initiating_set } from "../../../../Decrypt/razorPaymentInitiating";
import {
  useRenderPaymentAPIKeysQuery,
  usePaymentCheckoutMutation,
} from "../../../../services/RazorPay/paymentConfigure";
import { useState } from "react";
import { useMerchantId } from "../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../Loader/QLoader";
import PaymentGatewayConfig from "../../../../PaymentGateway/PaymentGatewayConfig";
import {
  get_initiate_paytm,
  paytmPostInfo,
} from "../../../../Decrypt/paytmUpiInitiative";
import { paytmActionUrl } from "../../../../services/BaseUrl";
import { useParams } from "react-router-dom";
import { SignalCellularNullTwoTone } from "@mui/icons-material";

function ParticipateEventActivity({ pid, studentId, activity }) {
  const { t } = useTranslation();
  const params = useParams();
  const [charges, setCharges] = useState(false);
  const [participateId, setParticipateId] = useState(pid);
  const { data: getKeys } = useRenderPaymentAPIKeysQuery();
  const [checkout] = usePaymentCheckoutMutation();
  const [disabled, setDisabled] = useState(false);
  const [allContent, setAllContent] = useState({
    amount: 0,
    type: "",
  });
  const [withoutPaymentParticipateApply] = useWithoutPaymentParticipateApply();
  const { participativeEventDetails, participativeEventDetailsRefetch } =
    useParticipateEventDetails({
      pid: pid,
      skip: !pid,
    });

  const { merchantId, merchantIdRefetch } = useMerchantId({
    id: participativeEventDetails?.part?.department?.institute,
    skip: !participativeEventDetails?.part?.department?.institute,
  });

  const onWithoutPayment = () => {
    setDisabled((pre) => !pre);
    withoutPaymentParticipateApply({
      pid: pid,
      sid: studentId,
      statusId: activity?._id,
    })
      .then(() => {
        setDisabled((pre) => !pre);
      })
      .catch({});
  };

  const checkoutParticipate = (is_paytm) => {
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
        type: "Participate",
        paidBy: `${studentId}`,
        paidTo: `${participativeEventDetails?.part?.department?.institute}`,
        moduleId: `${participateId}`,
        ad_status_id: activity?._id,
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
                type: "Participate",
                pay_by: `${studentId}`,
                pay_to: `${participativeEventDetails?.part?.department?.institute}`,
                mid: `${participateId}`,
                razor_key: merchantId?.key,
                razor_author: merchantId?.bool,
                status: activity?._id,
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

  // console.info(activity);

  return (
    <div className={style.partactivityCard}>
      <div className={style.partactivityCardtop}>
        <div>
          <h6>{participativeEventDetails?.part?.event_name}</h6>
          <p>
            {" "}
            {t("evetDate")}{" "}
            {moment(participativeEventDetails?.part?.event_date).format(
              "Do MMM YYYY"
            )}{" "}
          </p>
        </div>
        {activity?.event_payment_status === "Paid" ? (
          <div
            className={`${style.partactivityCardtopbtn} ${style.applied}`}
            // onClick={() => {
            //   setAllContent({
            //     ...allContent,
            //     amount: participativeEventDetails?.part?.event_fee,

            //     type: "Participate",
            //   });
            //   setCharges(true);
            //   // checkoutHandler(ele?.feeAmount, ele?._id);
            // }}
          >
            {t("applied")}
          </div>
        ) : (
          <div
            className={style.partactivityCardtopbtn}
            onClick={() => {
              if (participativeEventDetails?.part?.event_fee) {
                setAllContent({
                  ...allContent,
                  amount: participativeEventDetails?.part?.event_fee,

                  type: "Participate",
                });
                setCharges(true);
              } else {
                onWithoutPayment();
              }

              // checkoutHandler(ele?.feeAmount, ele?._id);
            }}
          >
            {t("apply")}
          </div>
        )}
      </div>
      <div className={style.partactivityCardBody}>
        <h6>{t("more_details")}</h6>

        <h6>
          <span> {t("last_date_to_application")} :</span>{" "}
          {moment(participativeEventDetails?.part?.event_app_last_date).format(
            "Do MMM YYYY"
          )}{" "}
        </h6>

        <h6>
          <span> {t("fees")} :</span>{" "}
          {participativeEventDetails?.part?.event_fee
            ? `Rs. ${participativeEventDetails?.part?.event_fee}`
            : `Rs. 0`}{" "}
          <span> {t("per_person")} :</span>{" "}
        </h6>

        <p>
          <span> {t("about")} :</span>{" "}
          {participativeEventDetails?.part?.event_about}
        </p>
      </div>
      {charges && (
        <PaymentGatewayConfig
          onClose={() => setCharges(false)}
          allContent={allContent}
          checkoutParticipate={checkoutParticipate}
        />
      )}
      {disabled && <QLoader />}
    </div>
  );
}

export default ParticipateEventActivity;
