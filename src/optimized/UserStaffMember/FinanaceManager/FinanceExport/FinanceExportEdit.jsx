import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import CreateButton from "../../../Ui/Button/CreateButton";
import FormInput from "../../../Ui/Input/FormInput";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../Income/Income.module.css";
import Modal from "../../../Ui/Modal/Modal";
const AdmissionExportEdit = ({ onEditAction, onClose, xlsxId }) => {
  const { t } = useTranslation();
  const [excelName, setExcelName] = useState(xlsxId?.excel_file_name ?? "");
  const [errorField, setErrorField] = useState("");
  useEffect(() => {
    setExcelName(xlsxId?.excel_file_name ?? "");
  }, [xlsxId?.excel_file_name]);

  const onInputChange = (e) => {
    setExcelName(e.target.value);
  };
  const onUpdateXlsx = () => {
    if (!excelName) {
      setErrorField({
        excelName: "excelName is required",
      });
    } else {
      onEditAction(excelName);
    }
  };
  return (
    <Modal onClose={onClose}>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <h6>{t("update_excel_name")}</h6>
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
            label={t("excel_name")}
            placeholder={t("excel_name_plcaeholder")}
            name={"excelName"}
            value={excelName}
            type={"text"}
            onChange={onInputChange}
            errorShow={errorField["excelName"]}
          />
          <CreateButton label="update" onAction={onUpdateXlsx} />
        </UserMemberContentWrapper>
      </div>
    </Modal>
  );
};

export default AdmissionExportEdit;
