import React, { useState } from "react";
import style from "./ChargesModal.module.css";
import { Dialog } from "@mui/material";
import LoaderButton from "../../Loader/LoaderButton";

function ChargesModal({
  chargesOpen,
  onCharges,
  allContent,
  checkoutHandler,
  checkoutAdmissionHandler,
  checkoutParticipate,
  checkoutBacklogHandler,
  checkoutAdmissionDirectHandler,
  checkoutLibraryHandler,
}) {
  let gatewayCharges = (+allContent?.amount * 2.1) / 100;
  let gst = (+gatewayCharges * 18) / 100;
  let withGst = gatewayCharges + gst;
  const data = parseInt(allContent?.amount);
  var total = Math.ceil(data + +withGst.toFixed(2));
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Dialog open={chargesOpen} onClose={() => onCharges(false)}>
      <div className={`${style.addDisplay} ${style.cancelModal}`}>
        <div className={style.title}>Payments Summary</div>
        <div className={style.content}>
          <div className={style.payCard}>
            <p className={style.payAmount}>
              <span>Amount</span>
              <span>Rs. {allContent?.amount}</span>
            </p>
            <p className={style.payAmount}>
              <span>PG Charges</span>
              <span>+{gatewayCharges?.toFixed(2)}</span>
            </p>
            <p className={style.payAmount}>
              <span>GST</span>
              <span>+{gst?.toFixed(2)}</span>
            </p>
            <p className={style.payAmount}>
              <span>Amount Payable</span>
              <span>Rs. {total?.toFixed(2)}</span>
            </p>
            {allContent.type === "Fees" ? (
              <div
                className={style.btn}
                onClick={() => {
                  setIsLoading(true);
                  checkoutHandler();
                }}
              >
                <div className={style.btn_inner}>
                  Make Payment
                  {isLoading && <LoaderButton />}
                </div>
              </div>
            ) : allContent.type === "Admission" ? (
              <div
                className={style.btn}
                onClick={() => {
                  setIsLoading(true);
                  checkoutAdmissionHandler();
                }}
              >
                <div className={style.btn_inner}>
                  Make Payment
                  {isLoading && <LoaderButton />}
                </div>
              </div>
            ) : allContent.type === "Participate" ? (
              <div
                className={style.btn}
                onClick={() => {
                  setIsLoading(true);
                  checkoutParticipate();
                }}
              >
                <div className={style.btn_inner}>
                  Make Payment
                  {isLoading && <LoaderButton />}
                </div>
              </div>
            ) : allContent.type === "Backlog" ? (
              <div
                className={style.btn}
                onClick={() => {
                  setIsLoading(true);
                  checkoutBacklogHandler();
                }}
              >
                <div className={style.btn_inner}>
                  Make Payment
                  {isLoading && <LoaderButton />}
                </div>
              </div>
            ) : allContent.type === "Library Fees" ? (
              <div
                className={style.btn}
                onClick={() => {
                  setIsLoading(true);
                  checkoutLibraryHandler();
                }}
              >
                <div className={style.btn_inner}>
                  Make Payment
                  {isLoading && <LoaderButton />}
                </div>
              </div>
            ) : allContent.type === "ADMISSION_DIRECT_APPLY" ? (
              <div
                className={style.btn}
                onClick={() => {
                  setIsLoading(true);
                  checkoutAdmissionDirectHandler();
                }}
              >
                <div className={style.btn_inner}>
                  Make Payment
                  {isLoading && <LoaderButton />}
                </div>
              </div>
            ) : allContent.type === "ADMISSION_DIRECT_APPLY" ? (
              <div
                className={style.btn}
                onClick={checkoutAdmissionDirectHandler}
              >
                Pay & Continue{" - "}
                {total?.toFixed(2)}
              </div>
            ) : (
              <div className={style.btn2}>Cancel</div>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ChargesModal;
