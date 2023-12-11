import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import PopupWrapper from "../../../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import style from "./AdmissionFeesApplicationWise.module.css";

const AddRemark = ({ onClose, onUpdateRemark, alreadyRemark }) => {
  const { t } = useTranslation();
  const [remark, setRemark] = useState("");

  useEffect(() => {
    if (alreadyRemark) {
      setRemark(alreadyRemark);
    }
  }, [alreadyRemark]);
  const onChange = (e) => {
    setRemark(e.target.value);
  };
  const onUpdate = () => {
    onUpdateRemark(remark);
    setRemark("");
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.remark_modal}
        style={{
          width: "25rem",
          minHeight: "10rem",
          height: "fit-content",
        }}
      >
        <h6 className={style.remark_modal_title}>{t("remark_title")}</h6>
        <JoinFormTextArea
          labelText={t("enter_remark")}
          placeholder={t("please_enter_remark")}
          value={remark}
          onChange={onChange}
          type={"text"}
          name="remark"
        />
        <button className={style.save_remark} onClick={onUpdate}>
          {t("save_remark")}
        </button>
      </div>
    </PopupWrapper>
  );
};

export default AddRemark;
