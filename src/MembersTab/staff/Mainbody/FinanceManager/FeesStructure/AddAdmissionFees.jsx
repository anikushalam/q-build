import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { validatePreviousDate } from "../../../../../Functions/timeComparison/timeComparison";
import CustomNormalSelectInput from "../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import JoinFormCalender from "../../../../../JoiningForm/Student/Form/JoinFormCalender";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import style from "./FeesStructure.module.css";

const AddAdmissionFees = ({
  setFeesStructure,
  onSetNewIndex,
  setAllInstallment,
  feesStructure,
  allInstallment,
  flowAs,
}) => {
  const { t } = useTranslation();
  const [installmentCount, setInstallmentCount] = useState(
    feesStructure?.total_installments ?? ""
  );
  const [installmentList, setInstallmentList] = useState(allInstallment ?? []);
  const [admissionFees, setAdmissionFees] = useState({
    // due_date: feesStructure?.due_date ?? "",
    total_admission_fees: feesStructure?.total_admission_fees ?? "",
    applicable_fees: feesStructure?.applicable_fees ?? "",
  });
  const [filled, setFilled] = useState("");

  const onInstallmentChange = (val) => {
    setInstallmentCount(val);
    const arr = [];
    for (let inst = 1; inst <= val; inst++) {
      arr.push({ fees: "" });
      // arr.push({ fees: "", dueDate: "" });
    }
    setInstallmentList(arr);
  };

  const onInstallmentInputAmountHander = (e, index) => {
    const inputarr = [...installmentList];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].fees = +e.target.value;
      }
    }
    setInstallmentList(inputarr);
  };

  // const onInstallmentInputDateHander = (val, index) => {
  //   const onDateValidate = validatePreviousDate(val);
  //   if (onDateValidate?.status) {
  //     const inputarr = [...installmentList];
  //     for (let inp = 0; inp < inputarr?.length; inp++) {
  //       if (inp === index) {
  //         inputarr[inp].dueDate = onDateValidate?.value;
  //       }
  //     }
  //     setInstallmentList(inputarr);
  //   }
  // };

  // const onDateFunction = (val) => {
  //   const onDateValidate = validatePreviousDate(val);
  //   if (onDateValidate?.status) {
  //     setAdmissionFees((prevState) => ({
  //       ...prevState,
  //       due_date: onDateValidate?.value,
  //     }));
  //   } else {
  //     setAdmissionFees((prevState) => ({
  //       ...prevState,
  //       due_date: "",
  //     }));
  //   }
  // };

  const onTotalFees = (e) => {
    // if (+e.target.value)
    setAdmissionFees((prevState) => ({
      ...prevState,
      total_admission_fees: +e.target.value,
    }));
  };

  const onTotalApplicable = (e) => {
    // if (+e.target.value)
    setAdmissionFees((prevState) => ({
      ...prevState,
      applicable_fees: +e.target.value,
    }));
  };
  const onValidation = (count, admission, installments) => {
    const errors = {};
    if (!count) errors["installmentCount"] = `installmentCount is required!`;
    for (let obj in admission) {
      if (obj === "due_date") {
      } else if (flowAs === "Transport_Manager" && obj === "applicable_fees") {
      } else {
        if (!admission[obj]) errors[obj] = `${obj} is required!`;
      }
    }

    for (let inst = 0; inst < installments?.length; inst++) {
      for (let obj in installments[inst]) {
        if (!installments[inst][obj])
          errors[`${obj}${inst}`] = `${obj} is required!`;
      }
    }
    let installValue = 0;
    for (let inst = 0; inst < installments?.length; inst++) {
      installValue += installments[inst]["fees"];
    }
    if (installValue < admission["total_admission_fees"])
      errors[`total_install_value`] = `* is required!`;
    // for (let fee of installments) {
    //     for (let obj in fee) {
    //       if (!admission[obj]) errors[obj] = `${obj} is required!`;
    //     }
    //   }

    return errors;
  };

  const onAddInstallment = (installments) => {
    const obj = {};
    for (let inst = 0; inst < installments?.length; inst++) {
      if (inst === 0) obj["one_installments"] = installments[inst];
      else if (inst === 1) obj["two_installments"] = installments[inst];
      else if (inst === 2) obj["three_installments"] = installments[inst];
      else if (inst === 3) obj["four_installments"] = installments[inst];
      else if (inst === 4) obj["five_installments"] = installments[inst];
      else if (inst === 5) obj["six_installments"] = installments[inst];
      else if (inst === 6) obj["seven_installments"] = installments[inst];
      else if (inst === 7) obj["eight_installments"] = installments[inst];
      else if (inst === 8) obj["nine_installments"] = installments[inst];
      else if (inst === 9) obj["ten_installments"] = installments[inst];
      else if (inst === 10) obj["eleven_installments"] = installments[inst];
      else if (inst === 11) obj["tweleve_installments"] = installments[inst];
      else {
      }
    }
    return obj;
  };
  const onMoveNextStep = () => {
    const validation = onValidation(
      installmentCount,
      admissionFees,
      installmentList
    );
    let flag = false;
    for (let errField in validation) {
      flag = true;
      break;
    }
    if (flag) {
      setFilled(validation);
    } else {
      const installment = onAddInstallment(installmentList);
      setFeesStructure((prevState) => ({
        ...prevState,
        // due_date: admissionFees.due_date,
        total_admission_fees: +admissionFees.total_admission_fees,
        applicable_fees:
          flowAs === "Transport_Manager" ? 0 : +admissionFees.applicable_fees,
        total_installments: +installmentCount,
        ...installment,
      }));
      setAllInstallment(installmentList);
      onSetNewIndex(2);
    }
  };
  return (
    <>
      <JoinFormInput
        labelText={t("total_fees")}
        placeholder={t("enter_one_time_payment")}
        name={"totalfees"}
        value={admissionFees?.total_admission_fees}
        type={"tel"}
        onChange={onTotalFees}
        errorShow={filled["total_admission_fees"]}
      />
      {flowAs === "Transport_Manager" ? null : (
        <JoinFormInput
          labelText={t("applicable_fees")}
          placeholder={t("applicable_fees_placeholder")}
          name={"applicable_fees"}
          value={admissionFees?.applicable_fees}
          type={"tel"}
          onChange={onTotalApplicable}
          errorShow={filled["applicable_fees"]}
        />
      )}
      {/* 
      <JoinFormCalender
        labelText={t("due_last_date_optional")}
        placeholder={t("please_select_the_date")}
        name={"dueDate"}
        value={admissionFees?.due_date}
        onDateFunction={onDateFunction}
        customStyleContainer={{ position: "relative" }}
        datePickerPosition={{
          top: "6rem",
          left: "1rem",
          borderRadius: "0.375rem",
          paddingBottom: "0",
        }}
      /> */}

      <CustomNormalSelectInput
        selectLabel={t("total_installment")}
        selectedValue={t("select_installment")}
        value={installmentCount}
        onClick={onInstallmentChange}
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        errorShow={filled["installmentCount"]}
      />

      {installmentList?.map((installment, index) => (
        <div className={style.installment_list}>
          <JoinFormInput
            labelText={`${t("installment")} ${index + 1}`}
            placeholder={t("Amount")}
            name={`amount${index}`}
            value={installment.fees}
            type={"tel"}
            onChange={(e) => onInstallmentInputAmountHander(e, index)}
            customStyleContainer={{
              width: "100%",
            }}
            errorShow={filled[`fees${index}`]}
            key={index}
          />
          {/* <JoinFormCalender
            labelText={t("due_last_date")}
            placeholder={t("please_select_the_date")}
            name={`duedate${index}`}
            value={installment.dueDate}
            onDateFunction={(val) => onInstallmentInputDateHander(val, index)}
            errorShow={filled[`dueDate${index}`]}
            customStyleContainer={{ position: "relative" }}
            datePickerPosition={{
              top: "6rem",
              left: "-5rem",
              borderRadius: "0.375rem",
              paddingBottom: "0",
            }}
          /> */}
        </div>
      ))}
      {filled["total_install_value"] && (
        <p
          style={{
            color: "red",
            marginLeft: "15px",
            marginBottom: "0.3rem !important",
            marginTop: "0.4rem",
          }}
        >
          Installments Fees Must be Equal or Greater than Total Admission Fees
        </p>
      )}
      <button
        className={style.set_fees_structure_btn}
        title="Next Step"
        onClick={onMoveNextStep}
      >
        <div>{t("set_fee_heads")}</div>
        <img src="/images/forward-right-icon.svg" alt="next step" />
      </button>
    </>
  );
};

export default AddAdmissionFees;
