import { useTranslation } from "react-i18next";
import style from "../FinanaceManager/FeesStructure/FeesStructure.module.css";
import { useEffect, useState } from "react";
import { useFinanceStudentGrChange } from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";
import {
  existingRequiredField,
  requiredField,
} from "@/Validation/functions/checkingRequiredField";
import QvipleLoader from "@/Loader/QvipleLoader";
import { assestsUserFinanceUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import UserMemberContentWrapper from "@/Ui/UserMember/UserMemberContentWrapper";
import Modal from "@/Ui/Modal/Modal";
import BorderBottom from "@/Ui/Border/BorderBottom";
import FormInput from "@/Ui/Input/FormInput";
import FormTextarea from "@/Ui/Input/FormTextarea";
import CreateButton from "@/Ui/Button/CreateButton";
const StudentEditGr = ({ uniqueGr, onClose, studentId }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState(false);
  const [editStudentGrNumber] = useFinanceStudentGrChange();
  const [state, setState] = useState({
    query_content: "",
    query_gr: uniqueGr ?? "",
  });

  useEffect(() => {
    if (uniqueGr) {
      setState((prev) => ({
        ...prev,
        query_gr: uniqueGr ?? "",
      }));
    }
  }, [uniqueGr]);

  const onAction = () => {
    let validation = requiredField(state);
    if (existingRequiredField(validation)) {
      setDisabled((pre) => !pre);
      editStudentGrNumber({
        sid: studentId,
        grNumberContent: state,
      })
        .then(() => {
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    } else {
      setErrorField(validation);
    }
  };
  return (
    <>
      <Modal>
        <div className={style.modal_container}>
          <UserMemberContentWrapper>
            <div className={style.modal_container_outer_header}>
              <div className={style.modal_container_header}>
                <h6>{t("update_student_gr_number")}</h6>
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
            <FormInput
              label={t("student_gr")}
              placeholder={t("student_gr_placeholder")}
              name={"query_gr"}
              value={state?.query_gr}
              type={"text"}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  query_gr: e.target.value,
                }))
              }
              errorShow={errorField["query_gr"]}
            />

            <FormTextarea
              label={t("gr_student_message_label")}
              placeholder={t("gr_student_message_label_placeholder")}
              name={"query_content"}
              value={state.query_content}
              type={"text"}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  query_content: e.target.value,
                }))
              }
              errorShow={errorField["query_content"]}
            />

            <CreateButton label="update" onAction={onAction} />
          </UserMemberContentWrapper>
        </div>
      </Modal>
      {disabled && <QvipleLoader />}
    </>
  );
};

export default StudentEditGr;
