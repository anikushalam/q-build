import React, { useState } from "react";
import style from "./PaymentGatewayConfig.module.css";
import PopupWrapper from "../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import { useTranslation } from "react-i18next";
import PaymentGatewayCharges from "./PaymentGatewayCharges";
// import LoaderButton from "../Loader/LoaderButton";
const PaymentGatewayConfig = ({
  onClose,
  allContent,
  checkoutHandler,
  checkoutAdmissionHandler,
  checkoutParticipate,
  checkoutBacklogHandler,
  checkoutAdmissionDirectHandler,
  checkoutLibraryHandler,
}) => {
  const { t } = useTranslation();
  // const [selected, setSelected] = useState("");
  // const [isNext, setIsNext] = useState("");
  const [selected, setSelected] = useState(0);
  const [isNext, setIsNext] = useState("PAYTM");
  const [isLoading, setIsLoading] = useState(false);
  // let gatewayCharges = (+allContent?.amount * 2.1) / 100;
  // let gst = (+gatewayCharges * 18) / 100;
  // let withGst = gatewayCharges + gst;
  // const data = parseInt(allContent?.amount);
  // var total = Math.ceil(data + +withGst.toFixed(2));
  // const onSwitch = (value) => {
  //   setSelected(value);
  // };

  const onCharges = (inde) => {
    setSelected(inde);
    setIsNext(inde === 0 ? "PAYTM" : "RAZOR");
  };
  const onNext = () => {
    setIsLoading(true);
    if (allContent.type === "Fees") {
      checkoutHandler(selected === 0 ? "PAYTM" : "RAZOR");
    } else if (allContent.type === "Admission") {
      checkoutAdmissionHandler(selected === 0 ? "PAYTM" : "RAZOR");
    } else if (allContent.type === "Participate") {
      checkoutParticipate(selected === 0 ? "PAYTM" : "RAZOR");
    } else if (allContent.type === "Backlog") {
      checkoutBacklogHandler(selected === 0 ? "PAYTM" : "RAZOR");
    } else if (allContent.type === "Library Fees") {
      checkoutLibraryHandler(selected === 0 ? "PAYTM" : "RAZOR");
    } else if (allContent.type === "ADMISSION_DIRECT_APPLY") {
      checkoutAdmissionDirectHandler(selected === 0 ? "PAYTM" : "RAZOR");
    } else {
    }
  };
  return (
    <>
      {/* <PaymentGatewayCharges
        onClose={onClose}
        allContent={allContent}
        checkoutHandler={checkoutHandler}
        checkoutAdmissionHandler={checkoutAdmissionHandler}
        checkoutParticipate={checkoutParticipate}
        checkoutBacklogHandler={checkoutBacklogHandler}
        checkoutAdmissionDirectHandler={checkoutAdmissionDirectHandler}
        checkoutLibraryHandler={checkoutLibraryHandler}
        // isNext={isNext}
      /> */}

      {isNext ? (
        <PaymentGatewayCharges
          onClose={onClose}
          // onClose={() => setIsNext("")}
          allContent={allContent}
          // checkoutHandler={checkoutHandler}
          // checkoutAdmissionHandler={checkoutAdmissionHandler}
          // checkoutParticipate={checkoutParticipate}
          // checkoutBacklogHandler={checkoutBacklogHandler}
          // checkoutAdmissionDirectHandler={checkoutAdmissionDirectHandler}
          // checkoutLibraryHandler={checkoutLibraryHandler}
          // isNext={isNext}
          onNext={onNext}
          isLoading={isLoading}
          selected={selected}
        />
      ) : (
        <PopupWrapper onClose={onClose}>
          <div className={style.gateway_container}>
            <div className={style.gateway_border}>
              <img
                src="/images/member_tab/gateway/gateway-border-icon.svg"
                alt="gateway icon"
              />
            </div>
            <h6>{t("Payment_Mode")}</h6>
            <p>
              {t("Pay_via_UPI_Less_transaction_charges_by_Payment_Gateway")}
            </p>
            <section
              className={style.gateway_upi}
              // onClick={() => onSwitch(0)}
              onClick={() => onCharges(0)}
              style={{
                boxShadow: selected === 0 && "0px 4px 4px 0px #00000040",
                backgroundColor: selected === 0 && "rgb(156 136 179 / 10%)",
              }}
            >
              <div className={style.gateway_upi_text}>
                <img
                  src="/images/member_tab/gateway/gateway-bheem-icon.svg"
                  alt="gateway icon"
                />
                <div className={style.gateway_upi_text_inner}>
                  <p>{t("Payment_Mode")}</p>
                  <h6>{t("payment_upi")}</h6>
                </div>
              </div>
              <div className={style.gateway_upi_icons}>
                <img
                  src="/images/member_tab/gateway/gateway-recomended-icon.svg"
                  alt="gateway icon"
                />
                <div className={style.gateway_upi_icons_inner}>
                  <img
                    src="/images/member_tab/gateway/gateway-phone-icon.svg"
                    alt="gateway icon"
                  />
                  <img
                    src="/images/member_tab/gateway/gateway-paytm-icon.svg"
                    alt="gateway icon"
                  />
                  <img
                    src="/images/member_tab/gateway/gateway-google-icon.svg"
                    alt="gateway icon"
                  />
                </div>
              </div>
            </section>
            <section
              className={style.gateway_other}
              // onClick={() => onSwitch(1)}
              onClick={() => onCharges(1)}
              style={{
                boxShadow: selected === 1 && "0px 4px 4px 0px #00000040",
                backgroundColor: selected === 1 && "rgb(156 136 179 / 10%)",
              }}
            >
              <div className={style.gateway_other_text}>
                <img
                  src="/images/member_tab/gateway/gateway-other-icon.svg"
                  alt="gateway icon"
                />
                <div className={style.gateway_other_text_inner}>
                  <p>{t("Payment_Mode")}</p>
                  <h6>{t("payment_other")}</h6>
                </div>
              </div>
              <div className={style.gateway_other_icons}>
                <div className={style.gateway_other_icons_inner}>
                  <img
                    src="/images/member_tab/gateway/gateway-debit-icon.svg"
                    alt="gateway icon"
                  />
                  <p>
                    {t("debit_credit")}
                    <br />
                    {t("cards")}
                  </p>
                </div>
                <div className={style.gateway_other_icons_inner}>
                  <img
                    src="/images/member_tab/gateway/gateway-bank-icon.svg"
                    alt="gateway icon"
                  />
                  <p>{t("net_banking")}</p>
                </div>
              </div>
            </section>
            {/* <button
              onClick={onCharges}
              className={style.gateway_btn}
              style={{
                marginTop: "2rem",
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
            </button> */}
          </div>
        </PopupWrapper>
      )}
    </>
  );
};

export default PaymentGatewayConfig;
