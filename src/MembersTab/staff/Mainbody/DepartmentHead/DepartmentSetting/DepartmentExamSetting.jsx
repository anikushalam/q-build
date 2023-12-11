import React, { useEffect, useState } from "react";
import style from "./DepartmentSetting.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../Loader/QLoader";
import { useDepartmentCopoSettingUpdate } from "../../../../../hooks/member_tab/department-api";

const DepartmentExamSetting = ({ did, ia, ea }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState("");
  const [state, setState] = useState({
    internal_assesment: "",
    external_assesment: "",
  });
  const [departmentCopoSettingUpdate] = useDepartmentCopoSettingUpdate();

  useEffect(() => {
    if (ea || ia) {
      setState({
        internal_assesment: ia ?? "",
        external_assesment: ea ?? "",
      });
    }
  }, [ea, ia]);
  const onInputChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: +e.target.value,
    }));
  };

  const onUpdate = () => {
    if (did) {
      setDisabled((pre) => !pre);
      departmentCopoSettingUpdate({
        did: did,
        copoSetting: state,
      })
        .then(() => {
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <>
      <div className={style.department_container}>
        <h6>{t("setting")}</h6>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />

        <JoinFormInput
          labelText={t("internal_assesment")}
          placeholder={t("internal_assesment_placeholder")}
          name={"internal_assesment"}
          value={state.internal_assesment}
          type={"number"}
          onChange={onInputChange}
        />
        <JoinFormInput
          labelText={t("external_assesment")}
          placeholder={t("external_assesment_placeholder")}
          name={"external_assesment"}
          value={state.external_assesment}
          type={"number"}
          onChange={onInputChange}
        />

        <button className={style.department_setting_btn} onClick={onUpdate}>
          {t("update")}
        </button>
      </div>
      {disabled && <QLoader />}
    </>
  );
};

export default DepartmentExamSetting;
