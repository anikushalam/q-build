import React, { useEffect } from "react";
import style from "./AdmissionEnquiry.module.css";
import { useTranslation } from "react-i18next";
import { useGetOneEnquiry } from "../../../../../hooks/member_tab/admission-api";
import moment from "moment";
function ReviewDetail({ reviewedId, setReviewedId }) {
  const { t } = useTranslation();
  const { oneEnquiryDetail, oneEnquiryDetailRefetch } = useGetOneEnquiry({
    eid: reviewedId,
    skip: !reviewedId,
  });

  useEffect(() => {
    if (reviewedId) oneEnquiryDetailRefetch();
  }, [reviewedId, oneEnquiryDetailRefetch]);
  // console.info("shgfsdsdbs d dshg sdnmsdnb", oneEnquiryDetail);
  return (
    <>
      <div className={style.enquiryDetail}>
        <div className={style.enquiryDetailtop}>
          <img
            className={style.enquiryDetailtopimg}
            src="/images/back.svg"
            alt="back"
            onClick={() => setReviewedId("")}
          />
          <h6 className={style.enquiryDetailtoph6}>
            {oneEnquiryDetail?.one_inquiry?.one_inquiry?.inquiry_application
              ?.applicationName || ""}
          </h6>
          <div />
        </div>
        <div className={style.enquiryDetailbody}>
          <div className={style.itemrow}>
            <p className={style.enquiryDetailbodyp}>
              <span
                className={`${style.enquiryDetailbodyp} ${style.enquiryDetailbodyspan}`}
              >
                {t("name")}: &nbsp;
              </span>
              {oneEnquiryDetail?.one_inquiry?.one_inquiry
                ?.inquiry_student_name || ""}
            </p>
          </div>
          <div className={style.itemrow}>
            <p className={style.enquiryDetailbodyp}>
              <span
                className={`${style.enquiryDetailbodyp} ${style.enquiryDetailbodyspan}`}
              >
                {t("mobile_bumber")}: &nbsp;
              </span>
              {oneEnquiryDetail?.one_inquiry?.one_inquiry
                ?.inquiry_student_mobileNo || ""}
            </p>
          </div>
          <div className={style.itemrow}>
            <p className={style.enquiryDetailbodyp}>
              <span
                className={`${style.enquiryDetailbodyp} ${style.enquiryDetailbodyspan}`}
              >
                {t("dob")}: &nbsp;
              </span>
              {moment(
                oneEnquiryDetail?.one_inquiry?.one_inquiry?.inquiry_student_dob
              ).format("DD MMM yyyy")}
            </p>
          </div>
          <div className={style.itemrow}>
            <p className={style.enquiryDetailbodyp}>
              <span
                className={`${style.enquiryDetailbodyp} ${style.enquiryDetailbodyspan}`}
              >
                {t("age")}: &nbsp;
              </span>
              {oneEnquiryDetail?.one_inquiry?.custom_dob || ""}
            </p>
          </div>
          <div className={style.itemrow}>
            <p className={style.enquiryDetailbodyp}>
              <span
                className={`${style.enquiryDetailbodyp} ${style.enquiryDetailbodyspan}`}
              >
                {t("prev_school")}: &nbsp;
              </span>
              {oneEnquiryDetail?.one_inquiry?.one_inquiry
                ?.inquiry_student_previous || ""}
            </p>
          </div>
          <div className={style.itemrow}>
            <p className={style.enquiryDetailbodyp}>{t("address")} &nbsp; </p>
            <p className={style.enquiryDetailbodyplight}>
              {oneEnquiryDetail?.one_inquiry?.one_inquiry
                ?.inquiry_student_address || ""}
            </p>
          </div>

          <div className={style.itemrow}>
            <p className={style.enquiryDetailbodyp}>
              {t("remark")} &nbsp;
              <span
                className={`${style.enquiryDetailbodyp} ${style.enquiryDetailbodyspan}`}
              >
                {`(At
                ${moment(
                  oneEnquiryDetail?.one_inquiry?.one_inquiry?.reviewAt
                ).format("LT")}
                , 
                ${moment(
                  oneEnquiryDetail?.one_inquiry?.one_inquiry?.reviewAt
                ).format("DD MMM yyyy")}
                )`}
              </span>
            </p>
            <p className={style.enquiryDetailbodyplight}>
              {oneEnquiryDetail?.one_inquiry?.one_inquiry
                ?.inquiry_student_remark || ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewDetail;
