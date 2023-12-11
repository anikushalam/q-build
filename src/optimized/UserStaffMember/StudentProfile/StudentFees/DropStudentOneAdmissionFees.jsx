import {
  existingRequiredField,
  requiredField,
} from "@/Validation/functions/checkingRequiredField";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../FinanaceManager/FeesStructure/FeesStructure.module.css";
import Modal from "@/Ui/Modal/Modal";
import UserMemberContentWrapper from "@/Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "@/Ui/Border/BorderBottom";
import { assestsUserFinanceUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import FormInput from "@/Ui/Input/FormInput";
import CreateButton from "@/Ui/Button/CreateButton";
import QvipleLoader from "@/Loader/QvipleLoader";
import { useFinanceDropStudentOneAdmissionFees } from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";

const DropStudentOneAdmissionFees = ({ onClose, rid, sid, onParentClose }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState(false);
  const [state, setState] = useState({
    verify: "",
  });
  const [financeDropStudentOneAdmissionFees] =
    useFinanceDropStudentOneAdmissionFees();

  const onAction = () => {
    let validation = requiredField(state);
    if (existingRequiredField(validation) && state.verify === "Confirm") {
      setDisabled((pre) => !pre);
      financeDropStudentOneAdmissionFees({
        rid: rid,
        sid: sid,
      })
        .then(() => {
          onParentClose();
          setDisabled((pre) => !pre);
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
                <h6>{t("confirm_drop_admission_fees")}</h6>
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
              label={t("type_confirm_to_continue")}
              placeholder={t("type_confirm_to_continue")}
              name={"verify"}
              value={state?.verify}
              type={"text"}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  verify: e.target.value,
                }))
              }
              errorShow={errorField["verify"]}
            />

            <CreateButton label="confirm" onAction={onAction} />
          </UserMemberContentWrapper>
        </div>
      </Modal>
      {disabled && <QvipleLoader />}
    </>
  );
};

export default DropStudentOneAdmissionFees;
