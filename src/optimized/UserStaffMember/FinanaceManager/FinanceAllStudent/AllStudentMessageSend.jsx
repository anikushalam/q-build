import {
  useFinanceSendAllStudentMessage,
  useFinanceSendOneStudentMessage,
  useInstituteAllStudentIdList,
} from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import QvipleLoader from "../../../Loader/QvipleLoader";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import FormTextarea from "../../../Ui/Input/FormTextarea";
import Modal from "../../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import style from "../FeesStructure/FeesStructure.module.css";
import {
  assestsUserFinanceUrl,
  assestsUtilityUrl,
} from "../../../Services/UrlConfig/AssestsBaseUrl";
import CreateButton from "../../../Ui/Button/CreateButton";
const AllStudentMessageSend = ({
  onClose,
  sendStudentList,
  messageId,
  instituteId,
  headId,
  viewAs,
  isStudentProfile,
  toRedirectUrl,
  parentState,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState(false);
  const [financeSendAllStudentMessage] = useFinanceSendAllStudentMessage();
  const [financeSendOneStudentMessage] = useFinanceSendOneStudentMessage();
  const [sendNotify, setSendNotify] = useState({
    alarm_mode: "APP_NOTIFICATION",
    content: "",
  });
  const navigate = useNavigate();
  const { instituteAllStudentIdList } = useInstituteAllStudentIdList({
    id: instituteId,
    skip: !instituteId ? !instituteId : isStudentProfile,
  });

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
          financeSendOneStudentMessage({
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
              flow: viewAs === "INSTITUTE_ADMIN" ? "INSTITUTE_ADMIN" : "Other",
            },
            id: instituteId,
          })
            .then(() => {
              onClose();
              setDisabled((pre) => !pre);
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
          financeSendAllStudentMessage({
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
              flow: viewAs === "INSTITUTE_ADMIN" ? "INSTITUTE_ADMIN" : "Other",
            },
            id: instituteId,
          })
            .then(() => {
              onClose();
              navigate(toRedirectUrl, {
                state: parentState,
              });
              setDisabled((pre) => !pre);
            })
            .catch({});
        }
      }
    }
  };

  console.info("instituteAllStudentIdList", instituteAllStudentIdList);
  return (
    <>
      <Modal>
        <div className={style.modal_container}>
          <UserMemberContentWrapper>
            <div className={style.modal_container_outer_header}>
              <div className={style.modal_container_header}>
                <h6>{t("student_message")}</h6>
              </div>
              <img
                src={`${assestsUserFinanceUrl}/close.svg`}
                alt="close icon"
                onClick={onClose}
              />
            </div>
          </UserMemberContentWrapper>
          <BorderBottom />
          <UserMemberContentWrapper
            customStyle={{
              paddingTop: "0",
            }}
          >
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
                    ? `${assestsUtilityUrl}/radio-blue.svg`
                    : `${assestsUtilityUrl}/radio-grey.svg`
                }
                alt="icon"
              />
              <div className={style.notify_text}>
                <h6>{t("Notify_with_In_app_Notification")}</h6>
                <p>{t("Notify_with_In_app_Notification_note")}</p>
              </div>
            </section>
            <section className={style.notify_container}>
              <img
                src={
                  sendNotify.alarm_mode === "EMAIL_NOTIFICATION"
                    ? `${assestsUtilityUrl}/radio-blue.svg`
                    : `${assestsUtilityUrl}/radio-grey.svg`
                }
                alt="icon"
              />
              <div className={style.notify_text}>
                <h6>{t("Notify_On_Email_and_SMS")}</h6>
                <p>{t("Notify_On_Email_and_SMS_note")}</p>
              </div>
            </section>
            {sendNotify.alarm_mode === "APP_NOTIFICATION" && (
              <FormTextarea
                label={t("student_message_label")}
                placeholder={t("student_message_label_placeholder")}
                name="content"
                value={sendNotify.content}
                type="text"
                onChange={(e) =>
                  setSendNotify((prev) => ({
                    ...prev,
                    content: e.target.value,
                  }))
                }
                errorShow={filled}
              />
            )}
            <CreateButton label="confirm" onAction={onAction} />
          </UserMemberContentWrapper>
        </div>
      </Modal>
      {disabled && <QvipleLoader />}
    </>
  );
};

export default AllStudentMessageSend;
