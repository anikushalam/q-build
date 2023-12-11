import React, { useEffect } from "react";
import style from "./AdmissionEnquiry.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ButtonWithAction from "../../../../../Custom/Button/ButtonWithAction";
import {
  useGetOneEnquiry,
  useOneEnquiryAction,
} from "../../../../../hooks/member_tab/admission-api";
import moment from "moment";
import QLoader from "../../../../../Loader/QLoader";
import { useScrollbar } from "../../../../../Scroll/use-scroll";

function EnquiryDetail({ enquiryId, setEnquiryId, setReftechWhenMark }) {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [disable, setDisabled] = useState(false);

  const { oneEnquiryDetail, oneEnquiryDetailRefetch } = useGetOneEnquiry({
    eid: enquiryId,
    skip: !enquiryId,
  });
  const [oneEnquiryAction] = useOneEnquiryAction();
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (enquiryId) oneEnquiryDetailRefetch();
  }, [enquiryId, oneEnquiryDetailRefetch]);

  const textArea = document.querySelector("textarea");

  textArea?.addEventListener("keyup", (e) => {
    textArea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textArea.style.height = `${scHeight}px`;
  });

  const onRemarkEnquiry = () => {
    if (enquiryId) {
      setDisabled((pre) => !pre);
      oneEnquiryAction({
        eid: enquiryId,
        enquiryRemark: {
          remark: text,
        },
      })
        .then((res) => {
          console.info(res);
          setReftechWhenMark(true);
          setEnquiryId("");
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <>
      <div className={style.enquiryDetail}>
        <div className={style.enquiryDetailtop}>
          <img
            className={style.enquiryDetailtopimg}
            src="/images/back.svg"
            alt="back"
            onClick={() => setEnquiryId("")}
          />
          <h6 className={style.enquiryDetailtoph6}>
            {" "}
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
            <p className={style.enquiryDetailbodyp}>
              <span
                className={`${style.enquiryDetailbodyp} ${style.enquiryDetailbodyspan}`}
              >
                {t("address_")} &nbsp;
              </span>
              {oneEnquiryDetail?.one_inquiry?.one_inquiry
                ?.inquiry_student_address || ""}
            </p>
          </div>

          <div className={style.itemrow}>
            <p className={style.enquiryDetailbodyp}>{t("remark")} &nbsp;</p>

            <textarea
              className={style.pollTextarea}
              id="pollTextArea"
              type="text"
              required
              // maxlength="94"
              placeholder={t("followup_")}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <ButtonWithAction
            disabled={disable}
            buttonText={t("save")}
            customStyleButton={{
              minHeight: "2.3rem",

              marginBottom: "1rem",
            }}
            customStyleButtonText={{
              fontSize: "1rem",
            }}
            onAction={onRemarkEnquiry}
          />
        </div>
      </div>
      {disable && <QLoader />}
    </>
  );
}

export default EnquiryDetail;
