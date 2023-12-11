import React, { useState } from "react";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../../Loader/QLoader";
import PopupWrapper from "../../FeesStructure/PopupWrapper";
import style from "../../FeesStructure/FeesStructure.module.css";
import { useAddPayrollHead } from "../../../../../../hooks/member_tab/finance-api";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
const AddSalaryHead = ({ onClose, onRefetch }) => {
  const { t } = useTranslation();
  const fid = useSelector((state) => state.financeChange.fid);
  const [salaryhead, setSalaryhead] = useState({
    payroll_head_name: "",
    payroll_head_type: "",
  });

  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [addPayrollHead] = useAddPayrollHead();
  const onInputChange = (e) => {
    setSalaryhead((prev) => ({
      ...prev,
      payroll_head_name: e.target.value,
    }));
  };
  const onTypeSelect = (val) => {
    setSalaryhead((prev) => ({
      ...prev,
      payroll_head_type: val,
    }));
  };

  const onValidation = (head) => {
    const errors = {};
    for (let obj in head) {
      if (!head[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };

  const oneSalaryHead = () => {
    const validation = onValidation(salaryhead);
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
      setDisabled((pre) => !pre);
      addPayrollHead({
        fid: fid,
        addPayroll: salaryhead,
      })
        .then(() => {
          onRefetch();
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.add_category_modal}>
        <div className={style.add_category_modal_title}>
          <h6>{t("salary_heads")}</h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <JoinFormInput
          labelText={t("head_name")}
          placeholder={t("salary_head_name_placeholder")}
          name={"payroll_head_name"}
          value={salaryhead?.payroll_head_name}
          type={"text"}
          onChange={onInputChange}
          errorShow={filled["payroll_head_name"]}
        />
        <CustomNormalSelectInput
          selectLabel={t("head_type")}
          selectedValue={t("head_type_placeholder")}
          value={salaryhead?.payroll_head_type}
          onClick={onTypeSelect}
          errorShow={filled["payroll_head_type"]}
          options={["Particular", "Deduction"]}
        />
        <button
          className={style.set_fees_structure_btn}
          title="Add fees head"
          onClick={oneSalaryHead}
          style={{ justifyContent: "center" }}
        >
          {t("create")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AddSalaryHead;
