import React from "react";
import style from "./PaymentGatewayConfig.module.css";
import PopupWrapper from "../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import { useTranslation } from "react-i18next";
import LoaderButton from "../Loader/LoaderButton";

const PaymentGatewayCharges = ({
  // isNext,
  onClose,
  allContent,
  // checkoutHandler,
  // checkoutAdmissionHandler,
  // checkoutParticipate,
  // checkoutBacklogHandler,
  // checkoutAdmissionDirectHandler,
  // checkoutLibraryHandler,
  onNext,
  isLoading,
  selected,
}) => {
  const { t } = useTranslation();
  // const [isLoading, setIsLoading] = useState(false);
  let gatewayCharges = (+allContent?.amount * 2.1) / 100;
  let gst = (+gatewayCharges * 18) / 100;
  let withGst = gatewayCharges + gst;
  const data = parseInt(allContent?.amount);
  var total = Math.ceil(data + +withGst.toFixed(2));

  //  paytm
  var g_charges = (parseInt(allContent?.amount) * 1) / 100;
  var valid_charge = g_charges >= 100 ? 100 : g_charges;
  let pay_gst = (+valid_charge * 18) / 100;
  var paytm_paylable = Math.ceil(
    parseInt(allContent?.amount) + parseInt(valid_charge) + parseInt(pay_gst)
  );

  // const onPaymentInitiative = () => {
  //   setIsLoading(true);
  //   if (allContent.type === "Fees") {
  //     checkoutHandler("RAZOR");
  //   } else if (allContent.type === "Admission") {
  //     checkoutAdmissionHandler("RAZOR");
  //   } else if (allContent.type === "Participate") {
  //     checkoutParticipate("RAZOR");
  //   } else if (allContent.type === "Backlog") {
  //     checkoutBacklogHandler("RAZOR");
  //   } else if (allContent.type === "Library Fees") {
  //     checkoutLibraryHandler("RAZOR");
  //   } else if (allContent.type === "ADMISSION_DIRECT_APPLY") {
  //     checkoutAdmissionDirectHandler("RAZOR");
  //   } else {
  //   }
  // };

  // // const onPaymentInitiative = () => {
  // //   setIsLoading(true);
  // //   if (allContent.type === "Fees") {
  // //     checkoutHandler(isNext);
  // //   } else if (allContent.type === "Admission") {
  // //     checkoutAdmissionHandler(isNext);
  // //   } else if (allContent.type === "Participate") {
  // //     checkoutParticipate(isNext);
  // //   } else if (allContent.type === "Backlog") {
  // //     checkoutBacklogHandler(isNext);
  // //   } else if (allContent.type === "Library Fees") {
  // //     checkoutLibraryHandler(isNext);
  // //   } else if (allContent.type === "ADMISSION_DIRECT_APPLY") {
  // //     checkoutAdmissionDirectHandler(isNext);
  // //   } else {
  // //   }
  // // };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.gateway_container}>
        <div className={style.gateway_border}>
          <img
            src="/images/member_tab/gateway/gateway-border-icon.svg"
            alt="gateway icon"
          />
        </div>
        <h6>{t("Payment_Summary")}</h6>

        <section className={style.gateway_summary}>
          <div className={style.gateway_summary_text}>
            <h6
              style={{
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {t("pg_convenience")}
            </h6>
            {/* <h6>{t("amount")}</h6>
            <h6>
              {t("rs")}. {allContent?.amount}
            </h6> */}
          </div>
          <div className={style.gateway_summary_text}>
            <p>{t("pg_convenience_note")}</p>
            {/* <p>{t("PG_Charges")}</p> */}
            {/* <p>
              +
              {selected === 0
                ? valid_charge?.toFixed(2)
                : gatewayCharges?.toFixed(2)}
            </p> */}
          </div>
          <div className={style.gateway_summary_text}>
            <p
              style={{
                fontSize: "12px",
              }}
            >
              <img
                src="/images/checkbox-icon.svg"
                alt="icon"
                style={{
                  height: "0.8rem",
                  marginRight: "0.5rem",
                }}
              />

              {t("pg_convenience_forward")}
            </p>
            {/* <p>{t("gateway_GST")}</p> */}
            {/* <p>+{selected === 0 ? pay_gst?.toFixed(2) : gst?.toFixed(2)}</p> */}
          </div>
          {/* <div className={style.gateway_summary_text}>
            <h6>{t("Amount_Payable")}</h6>
            <h6>
              {t("rs")}.{" "}
              {selected === 0 ? paytm_paylable?.toFixed(2) : total?.toFixed(2)}
            </h6>
          </div> */}
          <button
            onClick={onNext}
            // onClick={onPaymentInitiative}
            className={style.gateway_btn}
            style={{
              marginTop: "1rem",
            }}
          >
            {t("Make_Payment")}
            {isLoading && (
              <span
                style={{
                  marginLeft: "10px",
                  marginTop: "13px",
                }}
              >
                <LoaderButton />
              </span>
            )}
          </button>
        </section>
      </div>
    </PopupWrapper>
  );
};

export default PaymentGatewayCharges;
