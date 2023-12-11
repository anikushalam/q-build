import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";

const IdCardExportEdit = ({ onEdit, xlsxId }) => {
  const { t } = useTranslation();
  const [excelName, setExcelName] = useState(xlsxId?.excel_file_name ?? "");
  const [filled, setFilled] = useState("");
  useEffect(() => {
    setExcelName(xlsxId?.excel_file_name ?? "");
  }, [xlsxId?.excel_file_name]);

  const onUpdateXlsx = () => {
    if (!excelName) {
      setFilled({
        excelName: "excelName is required",
      });
    } else {
      onEdit(excelName);
    }
  };
  return (
    <div
      style={{
        width: "20rem",
        minHeight: "10rem",
        padding: "1rem",
      }}
    >
      <h6>{t("update_excel_name")}</h6>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <JoinFormInput
        labelText={t("excel_name")}
        placeholder={t("excel_name_plcaeholder")}
        value={excelName}
        name="excelName"
        type={"text"}
        onChange={(e) => setExcelName(e.target.value)}
        errorShow={filled["excelName"]}
      />

      <button
        className={style.xlsx_update_btn}
        title="Add fees head"
        onClick={onUpdateXlsx}
        style={{ justifyContent: "center", marginTop: "1rem" }}
      >
        {t("update")}
      </button>
    </div>
  );
};

export default IdCardExportEdit;
