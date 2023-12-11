import React, { useState } from "react";
import style from "./StaffProfile.module.css";
import { useTranslation } from "react-i18next";
import Switch from "@mui/material/Switch";
import SendFilterStudentMessage from "../../../../../MembersTab/staff/Mainbody/FinanceManager/AllStudent/SendFilterStudentMessage";
import { useLocation, useParams } from "react-router-dom";
const label = { inputProps: { "aria-label": "Switch demo" } };
const StaffHeader = ({
  textLevel,
  onPrevious,
  onNext,
  onClose,
  viewAs,
  is_admission,
  admissionTitle,
  onAdmissionTitle,
  is_install,
  installTitle,
  onInstallTitle,
  installmentEdit,
  sid,
  instituteId,
  textLevelInner,
  onConfig,
  configTitle,
  onConfig1,
  configTitle1,
  isStaff,
}) => {
  const { t } = useTranslation();
  const [isMessage, setIsMessage] = useState(false);
  const getQuery = useLocation();
  const params = useParams();
  return (
    <>
      <div className={style.staff_header_container}>
        <h6 className={style.staff_header_text}>
          {textLevel}
          {textLevelInner ? (
            <span
              style={{
                color: "#0000ff",
                fontSize: "12px",
              }}
            >
              {textLevelInner}
            </span>
          ) : (
            ""
          )}
        </h6>
        {viewAs === "DEPARTMENT_HEAD" ? (
          <div className={style.staff_header_function}>
            <p
              className={style.staff_header_text}
              onClick={onConfig}
              style={{
                color: "#0000ff",
              }}
            >
              {configTitle}
            </p>
            <p
              className={style.staff_header_text}
              onClick={onConfig1}
              style={{
                color: "#0000ff",
              }}
            >
              {configTitle1}
            </p>
          </div>
        ) : null}

        {!viewAs && (
          <div className={style.staff_header_function}>
            <div className={style.staff_header_prev} onClick={onPrevious}>
              <img src="/images/profile-prev.svg" alt="previous icon" />
              <span>{t("prev")}</span>
            </div>
            <div className={style.staff_header_next} onClick={onNext}>
              <span>{t("next")}</span>
              <img src="/images/profile-next.svg" alt="next icon" />
            </div>
            <p className={style.staff_header_close} onClick={onClose}>
              {t("close_")}
            </p>
          </div>
        )}
        {viewAs === "INSTITUTE_LOGIN_DETAILS" && (
          <div className={style.staff_header_function}>
            <p
              className={style.staff_header_text}
              onClick={onAdmissionTitle}
              style={{
                color: "#0000ff",
              }}
            >
              {admissionTitle}
            </p>
            {isStaff ? (
              ""
            ) : (
              <p
                className={style.staff_header_text}
                onClick={() => setIsMessage(true)}
                style={{
                  color: "#0000ff",
                }}
              >
                {t("student_message")}
              </p>
            )}

            <p className={style.staff_header_close} onClick={onClose}>
              {t("close_")}
            </p>
          </div>
        )}

        {getQuery.state?.studentMessaageView === "STUDENT_MESSAGE" &&
          getQuery.state?.viewAs !== "STUDENT_SECTION" && (
            <div className={style.staff_header_function}>
              <p
                className={style.staff_header_text}
                onClick={() => setIsMessage(true)}
                style={{
                  color: "#0000ff",
                }}
              >
                {t("student_message")}
              </p>
            </div>
          )}

        {is_admission ? (
          <div className={style.admission_actions}>
            {is_install && (
              <p
                className={style.staff_header_text}
                style={{
                  color: "#0000ff",
                }}
              >
                {installTitle}

                <Switch
                  {...label}
                  checked={installmentEdit}
                  onChange={onInstallTitle}
                />
              </p>
            )}
            {getQuery.state?.viewAs === "STUDENT_SECTION" && (
              <p
                className={style.staff_header_text}
                onClick={() => setIsMessage(true)}
                style={{
                  color: "#0000ff",
                }}
              >
                {t("student_message")}
              </p>
            )}
            <p
              className={style.staff_header_text}
              onClick={onAdmissionTitle}
              style={{
                color: "#0000ff",
              }}
            >
              {admissionTitle}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      {isMessage && (
        <SendFilterStudentMessage
          onClose={() => setIsMessage(false)}
          isStudentProfile
          viewAs={getQuery.state?.viewAs ?? "INSTITUTE_ADMIN"}
          headId={getQuery.state?.headId ?? instituteId}
          messageId={getQuery.state?.messageId ?? instituteId}
          sendStudentList={getQuery.state?.sid ?? sid}
          isInstitute={
            getQuery.state?.studentMessaageView === "STUDENT_MESSAGE"
              ? false
              : true
          }
          toRedirectUrl={
            getQuery.state?.studentMessaageView === "STUDENT_MESSAGE"
              ? getQuery.state?.viewAs === "FINANCE_MANAGER"
                ? `/q/${params.username}/member/finance?a=student-message`
                : getQuery.state?.viewAs === "ADMISSION_ADMIN"
                ? `/q/${params.username}/member/admission?a=student-message`
                : getQuery.state?.viewAs === "ID_CARD_SECTION"
                ? `/q/${params.username}/member/idcard?a=student-message`
                : getQuery.state?.viewAs === "CERTIFICATE_AUTHORITY"
                ? `/q/${params.username}/member/certificate?a=student-message`
                : getQuery.state?.viewAs === "STUDENT_SECTION"
                ? `/q/${params.username}/member/promote?a=student-message`
                : `/q/${params.username}/student?a=student-message`
              : `/q/${params.username}/student?a=student-message`
          }
          carryParentState={getQuery.state}
          instituteId={getQuery.state?.instituteId ?? instituteId}
        />
      )}
    </>
  );
};

export default StaffHeader;
