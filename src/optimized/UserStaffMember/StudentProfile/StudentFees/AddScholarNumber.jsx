import { useFinanceAddScholarNumber } from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";
import Modal from "@/Ui/Modal/Modal";
import UserMemberContentWrapper from "@/Ui/UserMember/UserMemberContentWrapper";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../FinanaceManager/FeesStructure/FeesStructure.module.css";
import { assestsUserFinanceUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "@/Ui/Border/BorderBottom";
import CreateButton from "@/Ui/Button/CreateButton";
import QvipleLoader from "@/Loader/QvipleLoader";
import FormInput from "@/Ui/Input/FormInput";

const AddScholarNumber = ({
  onClose,
  setScholarNumber,
  filledNumber,
  rcid,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [scholar, setScholar] = useState(filledNumber ?? "");
  const [errorField, setErrorField] = useState(false);
  const [financeAddScholarNumber] = useFinanceAddScholarNumber();
  const onUpdate = () => {
    if (scholar) {
      if (scholar !== filledNumber && rcid) {
        setDisabled((pre) => !pre);
        financeAddScholarNumber({
          rcid: rcid,
          scholarData: {
            scholar_ship_number: scholar,
          },
        })
          .then(() => {
            onClose();
            setScholarNumber(scholar);
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    } else {
      setErrorField({ c_number: "* required" });
    }
  };
  return (
    <>
      <Modal>
        <div className={style.modal_container}>
          <UserMemberContentWrapper>
            <div className={style.modal_container_outer_header}>
              <div className={style.modal_container_header}>
                <h6>{t("scholarship_application_no")}</h6>
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
              placeholder={t("scholarship_application_no_placeholder")}
              name={"scholar"}
              value={scholar}
              type={"text"}
              onChange={(e) => setScholar(e.target.value)}
              errorShow={errorField["query_gr"]}
            />

            <CreateButton label="update" onAction={onUpdate} />
          </UserMemberContentWrapper>
        </div>
      </Modal>
      {disabled && <QvipleLoader />}
    </>
  );
};

export default AddScholarNumber;
