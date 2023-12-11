import React, { useState } from "react";
import PopupWrapper from "../FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useTranslation } from "react-i18next";
import style from "../../FinanceManager/FeesStructure/FeesStructure.module.css";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../../Loader/QLoader";
import {
  useSendMessageToOneStudent,
  useSendMessageToSelectStudent,
} from "../../../../../hooks/institute/institute-staff-student-api";
import { useNavigate } from "react-router-dom";

const SendFilterStudentMessage = ({
  onClose,
  messageId,
  headId,
  viewAs,
  sendStudentList,
  isInstitute,
  isStudentProfile,
  carryParentState,
  toRedirectUrl,
  instituteId,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState(false);
  const [sendMessageToSelectStudent] = useSendMessageToSelectStudent();
  const [sendMessageToOneStudent] = useSendMessageToOneStudent();
  const [sendNotify, setSendNotify] = useState({
    alarm_mode: "APP_NOTIFICATION",
    content: "",
  });

  const navigate = useNavigate();
  const onAction = () => {
    if (!sendNotify.content) {
      setFilled(true);
    } else {
      if (isStudentProfile) {
        if (
          messageId &&
          sendNotify.alarm_mode &&
          sendStudentList?.length > 0 &&
          instituteId
        ) {
          setDisabled((pre) => !pre);
          sendMessageToOneStudent({
            sendMessage: {
              message: sendNotify.content,
              from: headId ?? "",
              type:
                viewAs === "ADMISSION_ADMIN"
                  ? "Admission Head"
                  : viewAs === "FINANCE_MANAGER"
                  ? "Finance Head"
                  : viewAs === "CERTIFICATE_AUTHORITY"
                  ? "Certificate Authority"
                  : viewAs === "STUDENT_SECTION"
                  ? "Student Section"
                  : viewAs === "ID_CARD_SECTION"
                  ? "Id Card Authority"
                  : "Institute Admin",
              fid: messageId ?? "",
              alarm_mode: sendNotify.alarm_mode,
              sid: sendStudentList,
              flow: isInstitute ? "INSTITUTE_ADMIN" : "Other",
            },
            id: instituteId,
          })
            .then(() => {
              onClose();
              setDisabled((pre) => !pre);
              // navigate(toRedirectUrl, {
              //   state: carryParentState,
              // });
            })
            .catch({});
        }
      } else {
        if (
          messageId &&
          sendNotify.alarm_mode &&
          sendStudentList?.length > 0 &&
          instituteId
        ) {
          setDisabled((pre) => !pre);
          sendMessageToSelectStudent({
            sendMessage: {
              message: sendNotify.content,
              from: headId ?? "",
              type:
                viewAs === "ADMISSION_ADMIN"
                  ? "Admission Head"
                  : viewAs === "FINANCE_MANAGER"
                  ? "Finance Head"
                  : viewAs === "CERTIFICATE_AUTHORITY"
                  ? "Certificate Authority"
                  : viewAs === "STUDENT_SECTION"
                  ? "Student Section"
                  : viewAs === "ID_CARD_SECTION"
                  ? "Id Card Authority"
                  : "Institute Admin",
              fid: messageId ?? "",
              alarm_mode: sendNotify.alarm_mode,
              filtered_arr: sendStudentList,
              flow: isInstitute ? "INSTITUTE_ADMIN" : "Other",
            },
            id: instituteId,
          })
            .then(() => {
              onClose();
              navigate(toRedirectUrl, {
                state: carryParentState,
              });
              setDisabled((pre) => !pre);
            })
            .catch({});
        }
      }
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "30rem",
          minHeight: "10rem",
          height: "fit-content",
          maxHeight: "35rem",
          overflowX: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        <section
          className={style.fee_middle_section_container}
          style={{ marginBottom: "1.2rem" }}
        >
          <h6
            style={{
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {t("student_message")}
          </h6>

          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "0.7rem",
              marginBottom: "1rem",
            }}
          />

          <section
            className={style.notify_container}
            onClick={() =>
              setSendNotify((prev) => ({
                ...prev,
                alarm_mode: "APP_NOTIFICATION",
              }))
            }
          >
            <img
              src={
                sendNotify.alarm_mode === "APP_NOTIFICATION"
                  ? "/images/department/radio-blue-icon.svg"
                  : "/images/department/radio-gray-icon.svg"
              }
              alt="icon"
            />
            <div className={style.notify_text}>
              <h6>{t("Notify_with_In_app_Notification")}</h6>
              <p>{t("Notify_with_In_app_Notification_note")}</p>
            </div>
          </section>
          <section
            className={style.notify_container}
            // onClick={() =>
            //   setSendNotify((prev) => ({
            //     ...prev,
            //     alarm_mode: "EMAIL_NOTIFICATION",
            //   }))
            // }
          >
            <img
              src={
                sendNotify.alarm_mode === "EMAIL_NOTIFICATION"
                  ? "/images/department/radio-blue-icon.svg"
                  : "/images/department/radio-gray-icon.svg"
              }
              alt="icon"
            />
            <div className={style.notify_text}>
              <h6>{t("Notify_On_Email_and_SMS")}</h6>
              <p>{t("Notify_On_Email_and_SMS_note")}</p>
            </div>
          </section>
          {sendNotify.alarm_mode === "APP_NOTIFICATION" && (
            <JoinFormTextArea
              labelText={t("student_message_label")}
              placeholder={t("student_message_label_placeholder")}
              name={"content"}
              value={sendNotify.content}
              type={"text"}
              onChange={(e) =>
                setSendNotify((prev) => ({
                  ...prev,
                  content: e.target.value,
                }))
              }
              errorShow={filled}
            />
          )}
          <button
            onClick={onAction}
            className={style.fee_middle_confirm_button}
            style={{
              marginTop: "4rem",
            }}
          >
            {t("confirm")}
          </button>
        </section>
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default SendFilterStudentMessage;
