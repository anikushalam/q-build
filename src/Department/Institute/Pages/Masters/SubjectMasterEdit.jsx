import React, { useEffect, useState } from "react";
import PopupWrapper from "../../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import JoinFormInput from "../../../../JoiningForm/Student/Form/JoinFormInput";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../../../MembersTab/staff/Mainbody/Hostel/HostelFeeStructure/HostelFeeStructure.module.css";
import StringLength from "../../../../Custom/Validation/StringLength";
import { useTranslation } from "react-i18next";
import CustomSelectDepartment from "../../../../JoiningForm/Student/Form/CustomSelectDepartment";
const SubjectMasterEdit = ({ onClose, onEdit, subjectMenu }) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [state, setState] = useState({
    subjectName: subjectMenu?.subjectName ?? "",
    subjectType: subjectMenu?.subjectType ?? "",
  });

  useEffect(() => {
    if (subjectMenu) {
      setState((prev) => ({
        ...prev,
        subjectName: subjectMenu?.subjectName,
        subjectType: subjectMenu?.subjectType ?? "",
      }));
    }
  }, [subjectMenu]);

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };

  const onEditMaster = () => {
    const validation = onValidation(state);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      onEdit(state);
    }
  };
  const switchSubjectType = (option) => {
    setState((prev) => ({ ...prev, subjectType: option }));
  };

  console.info("shfghsd", subjectMenu);
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "30rem",
        }}
      >
        <div className={style.add_category_modal_title}>
          <h6>{t("update_subject_master")}</h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.6rem",
            marginBottom: "0.6rem",
          }}
        />
        <CustomSelectDepartment
          selectLabel="Subject Type"
          selectedValue="Please Select Subject Type"
          options={["Mandatory", "Optional"]}
          onClick={switchSubjectType}
          viewAs="NORMAL_FILTER"
          defalutValue={state.subjectType}
          errorShow={filled["subjectType"]}
        />
        <JoinFormInput
          labelText={t("create_master_header_2")}
          placeholder={t("e.g. 6th Class/ FYJC")}
          name={"className"}
          value={state?.subjectName}
          type={"text"}
          onChange={(e) => {
            if (e.target.value?.length <= 40) {
              setState((prev) => ({
                ...prev,
                subjectName: e.target.value,
              }));
            }
          }}
          errorShow={filled}
        />
        <StringLength maxLength={40} valueLength={state.subjectName} />

        <button
          className={style.set_fees_structure_btn}
          onClick={onEditMaster}
          style={{ justifyContent: "center" }}
        >
          {t("update")}
        </button>
      </div>
    </PopupWrapper>
  );
};

export default SubjectMasterEdit;
