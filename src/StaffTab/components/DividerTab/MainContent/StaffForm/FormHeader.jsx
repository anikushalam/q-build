import React from "react";
import BorderBottom from "../StaffAProfile/BorderBottom";
import style from "./UniversalForm.module.css";
import { useTranslation } from "react-i18next";
import Switch from "@mui/material/Switch";
import CustomSelectDepartment from "../../../../../JoiningForm/Student/Form/CustomSelectDepartment";
const label = { inputProps: { "aria-label": "Switch demo" } };
const FormHeader = ({
  RefreshCodeHandler,
  staffJoinCode,
  setStaffSetting,
  asStaff,
  availableCode,
  is_install,
  installTitle,
  onInstallTitle,
  installmentEdit,
  onTextCaseFormat,
  textCase,
}) => {
  const { t } = useTranslation();
  return (
    <div className={style.staff_form_header_container}>
      <div className={style.staff_form_header_container_actions}>
        <div className={style.form_header_container}>
          <img
            src="/images/profile-prev.svg"
            alt="previous icon"
            onClick={() => setStaffSetting((pre) => !pre)}
          />
          <h6>{t("joining_process")}</h6>
        </div>
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
      </div>
      <BorderBottom />
      <div className={style.form_header_content}>
        <ul className={style.form_header_list}>
          <li>
            {" "}
            {t("must_be_existing")} {asStaff} {t("of_ins")}{" "}
          </li>
          <li>{availableCode}</li>
          <li>{t("fill_join_form")}</li>
          <li>{t("wait_for_approval")}</li>
        </ul>
        {asStaff !== "student" && (
          <div className={style.form_header_code}>
            <img
              src="/images/refresh-icon.svg"
              title="Refresh"
              alt="Refresh"
              onClick={RefreshCodeHandler}
            />
            <h6>{t("institute_code")}</h6>
            <h6>{staffJoinCode}</h6>
          </div>
        )}
      </div>
      {asStaff === "student" ? (
        <CustomSelectDepartment
          selectLabel={t("student_profile_text_format")}
          selectedValue={t("select_student_profile_text_format")}
          options={["Capital case", "Small case", "Title case"]}
          onClick={onTextCaseFormat}
          viewAs="NORMAL_FILTER"
          defalutValue={textCase}
          customStyleContainer={{
            margin: "auto",
            marginBottom: "1rem",
            marginTop: "-1.5rem",
            width: "78%",
          }}
        />
      ) : null}
    </div>
  );
};

export default FormHeader;
