import React from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import style from "./History.module.css";

function HistoryRight({ detailview, setDetailView, onClickValue }) {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.incomeRightt}>
        {detailview ? (
          <div className={style.detail}>
            <div className={style.detailTop}>
              <div className={style.detailTopLeft}>
                <h6 onClick={() => setDetailView(false)}>{t("back")}</h6>
              </div>
              <div className={style.detailTopMid}>
                <h6>
                  {onClickValue?.payment_by_end_user_id?.userLegalName ??
                    onClickValue?.payment_by_end_user_id_name}
                </h6>
              </div>
              <div className={style.detailTopRight}>
                Rs. {onClickValue?.payment_amount}
              </div>
            </div>
            <div className={style.detailContent}>
              <p>{t("transaction_mode")}</p>
              <h6>{onClickValue?.payment_mode}</h6>
            </div>
            {/* <div className={style.detailContent}>
              <p>Reason</p>
              <h6>Refund</h6>
            </div> */}
            {/* <div className={style.detailContent}>
              <p>Description</p>
              <h6>Hurry Up</h6>
            </div> */}
            <div className={style.detailContent}>
              <p>{t("day_date")}</p>
              <h6>
                {moment(onClickValue?.created_at).format("DD MMM yyyy")}{" "}
                {moment(onClickValue?.created_at).format("LT")}
              </h6>
            </div>
            {/* <div className={style.detailContent}>
              <p>Acknowlegement / Reciept</p>
              <div className={style.imagediv}>
                <img src="/images/image-icon.svg" alt="" />

                <p>img07.png</p>
              </div>
            </div> */}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default HistoryRight;
