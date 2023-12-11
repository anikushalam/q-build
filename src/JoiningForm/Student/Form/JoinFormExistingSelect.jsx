import React from "react";
import { useTranslation } from "react-i18next";
// import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./JoinForm.module.css";

const JoinFormExistingSelect = ({
  selectLabel,
  value,
  name,
  onChange,
  selectedValue,
  options,
  errorShow,
  customStyleContainer,
}) => {
  const { t } = useTranslation();
  // console.info("dgfsdfndas", optionsValue);
  return (
    <div
      className={style.join_form_container}
      style={{ ...customStyleContainer }}
    >
      <p className={style.join_form_select_paragraph}>
        {selectLabel}{" "}
        {errorShow && (
          <span style={{ color: "red", marginLeft: "15px" }}>
            * {t("form_require_label")}
          </span>
        )}
      </p>
      <select
        className={style.join_form_select}
        value={value}
        onChange={onChange}
        name={name}
      >
        <option selected>{selectedValue}</option>
        {options?.map((opt, index) => (
          <option key={index} value={opt?._id}>
            {/* <img
              src={
                opt?.profilePhoto
                  ? `${imageShowUrl}/${opt?.profilePhoto}`
                  : "/images/user.svg"
              }
              alt="user profile icon"
            /> */}
            <div>
              <span>{opt?.userLegalName}</span>
              <span>{` - (${opt?.username})`}</span>
            </div>
          </option>
        ))}
      </select>
    </div>
  );
};

export default JoinFormExistingSelect;
