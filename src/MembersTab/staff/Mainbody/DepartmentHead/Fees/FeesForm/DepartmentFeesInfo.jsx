import React, { useEffect, useState } from "react";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useTranslation } from "react-i18next";
import style from "../../Exminations/SeatingArrangement/SeatingArrangement.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import { withCurrentDate } from "../../../../../../Functions/timeComparison/timeComparison";

const DepartmentFeesInfo = ({ feesInfo, onGrabInfo }) => {
  const { t } = useTranslation();
  const [createFees, setCreateFees] = useState({
    feeName: "",
    feeAmount: "",
    feeDate: "",
  });
  const [filled, setFilled] = useState("");
  useEffect(() => {
    if (feesInfo) {
      setCreateFees((prev) => ({
        ...prev,
        ...feesInfo,
      }));
    }
  }, [feesInfo]);
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      //   if (obj === "feeDate") {
      //   } else {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
      //   }
    }
    return errors;
  };

  const onInputChange = (e) => {
    if (e.target.name === "feeAmount") {
      setCreateFees((prev) => ({
        ...prev,
        feeAmount: +e.target.value,
      }));
    } else {
      setCreateFees((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onSelectDate = (val) => {
    const dobCorrect = withCurrentDate(val);
    if (!dobCorrect) {
      let splitDate = val?.split("/");
      let dob = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
      setCreateFees((prevState) => ({
        ...prevState,
        feeDate: dob,
      }));
    }
  };
  const onAddInfo = () => {
    const validation = onValidation(createFees);
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
      onGrabInfo(createFees);
    }
  };

  return (
    <div
      className={style.seating_modal}
      style={{
        minHeight: "23rem",
      }}
    >
      <section
        className={style.seating_modal_title_left}
        style={{
          position: "relative",
        }}
      >
        <h6>{t("create_fees")}</h6>
        <button className={style.next_btn} title="Next" onClick={onAddInfo}>
          {t("next")}
        </button>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
        }}
      />
      <JoinFormInput
        labelText={t("department_fees_name")}
        placeholder={t("enter_fee_purpose")}
        name={"feeName"}
        value={createFees.feeName}
        type={"text"}
        onChange={onInputChange}
        errorShow={filled["feeName"]}
      />

      <JoinFormInput
        labelText={t("amount")}
        placeholder={t("enter_fees_amount")}
        name={"feeAmount"}
        value={createFees.feeAmount}
        type={"number"}
        onChange={onInputChange}
        errorShow={filled["feeAmount"]}
      />
      <JoinFormCalender
        labelText={t("due_date")}
        placeholder={t("enter_fees_date")}
        name={"feeDate"}
        value={createFees.feeDate}
        onDateFunction={onSelectDate}
        customStyleContainer={{
          position: "relative",
          width: "100%",
        }}
        datePickerPosition={{
          top: "-13rem",
          left: "2rem",
        }}
        errorShow={filled["feeDate"]}
      />
    </div>
  );
};

export default DepartmentFeesInfo;
