import React, { useState } from "react";
import style from "../../../../staff/Mainbody/FinanceManager/FeesStructure/FeesStructure.module.css";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../../../staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useAdmissionDocsActionByStudent } from "../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../Loader/QLoader";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
const StudentConfirmDocs = ({
  actionStep,
  applicationId,
  statusId,
  onClose,
  studentId,
  onRefetchApplication,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState(false);
  const [verify, setVerify] = useState("");

  const [admissionDocsActionByStudent] = useAdmissionDocsActionByStudent();

  const onAction = () => {
    if (studentId && statusId && applicationId && actionStep) {
      if (actionStep !== "CONFIRM_QUERY") {
        if (verify === "Confirm") {
          setDisabled(true);
          admissionDocsActionByStudent({
            sid: studentId,
            aid: applicationId,
            stId: statusId,
            flow: actionStep,
          })
            .then(() => {
              onRefetchApplication();
              setDisabled(false);
              onClose();
            })
            .catch({});
        } else {
          setFilled(true);
        }
      } else {
        setDisabled(true);
        admissionDocsActionByStudent({
          sid: studentId,
          aid: applicationId,
          stId: statusId,
          flow: actionStep,
        })
          .then(() => {
            onRefetchApplication();
            setDisabled(false);
            onClose();
          })
          .catch({});
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
            {t(
              actionStep === "CONFIRM_QUERY"
                ? "confirm_document_verification"
                : "cancel_document_verification"
            )}
          </h6>

          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "0.7rem",
            }}
          />

          {actionStep !== "CONFIRM_QUERY" && (
            <JoinFormInput
              labelText={t("type_confirm_to_continue")}
              placeholder={t("type_confirm_to_continue")}
              name={"verification"}
              value={verify}
              type={"text"}
              onChange={(e) => setVerify(e.target.value)}
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

        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default StudentConfirmDocs;
