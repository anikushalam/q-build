import React from "react";
import style from "./VacancyDetails.module.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { tenderChangeAction } from "../redux/store/tender-slice";
import { fileShowUrl } from "../services/BaseUrl";

function BiderItem({ setStatus, bid, tid }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className={style.oneRow}>
      <div className={style.oneRowDate}>
        <p className={style.oneRowDateText}>17-08- 2015</p>
      </div>
      <div className={style.oneRowName}>
        <div className={style.oneRowNameImage}>
          <img
            src="/images/ins_default_profile.svg"
            //   {
            //     row?.photoId !== "1"
            //       ? `${imageShowUrl}/${row?.staffProfilePhoto}`
            //       : "/images/ins_default_profile.svg"
            //   }
            loading="lazy"
            alt=""
          />
        </div>
        <div>
          <p className={style.oneRowNameText}>{bid?.bidder_name}</p>
          <p className={style.oneRowNamePlaceholder}>
            {t("address")}: {bid?.bidder_address}
          </p>
          {bid?.order_detail ? (
            <p className={style.interview}>{t("order_details")}</p>
          ) : (
            <p
              className={style.schedule}
              onClick={() => {
                dispatch(
                  tenderChangeAction.tenderQuery({
                    bid: bid?._id,
                    tid: tid,
                  })
                );
                setStatus("placeOrder");
              }}
            >
              {t("select_bid")}
            </p>
          )}
          {/* <p className={style.interview}>{t("order_details")}</p> */}

          {/* <p className={style.date}> {t("date")}: 17-08- 2015</p> */}
          {bid?.order_detail && (
            <div>
              <p className={style.date}> {t("expense_amount")}: Rs. 10000</p>
              <p className={style.date}>{t("purchase_order")}: Chicago, IL</p>
              <p className={`${style.date}`}>
                {" "}
                {t("purchase_order")}:
                <a
                  href={`${fileShowUrl}/${bid?.purchase_order}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={` ${style.download}`}>
                    {" "}
                    {t("download_order")}
                  </span>
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={style.oneRowContact}>
        <div className={style.oneRowContactEmailIcon}>
          <img src="/images/admin/mail-dark-icon.svg" alt="gender icon" />
          <p className={style.oneRowContactEmail}>{bid?.bidder_email}</p>
        </div>
        <div className={style.oneRowContactEmailIcon}>
          <img src="/images/phone-white.svg" alt="" />
          <p className={style.oneRowContactNumber}>
            {bid?.bidder_phone_number}
          </p>
        </div>
      </div>

      <div className={`${style.oneRowIndex} ${style.oneRowwIndex}`}>
        <a
          href={`${fileShowUrl}/${bid?.bidder_quotation}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/career/insCareer/file_download.svg" />
        </a>
      </div>
    </div>
  );
}

export default BiderItem;
