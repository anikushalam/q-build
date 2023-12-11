import React, { useEffect, useState } from "react";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useTranslation } from "react-i18next";
import style from "../../Exminations/SeatingArrangement/SeatingArrangement.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";

const ChecklistFormInfo = ({ checklistInfo, onGrabInfo, is_edit }) => {
  const { t } = useTranslation();
  const [createFees, setCreateFees] = useState({
    checklistName: "",
    checklistAmount: "",
    checklistFees: "",
  });
  const [filled, setFilled] = useState("");

  useEffect(() => {
    if (checklistInfo) {
      setCreateFees((prev) => ({
        ...prev,
        ...checklistInfo,
      }));
    }
  }, [checklistInfo]);
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (obj === "checklistAmount") {
        if (data["checklistFees"] === "Yes") {
          if (!data[obj]) errors[obj] = `${obj} is required!`;
        } else {
        }
      } else {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };

  const onInputChange = (e) => {
    if (e.target.name === "checklistAmount") {
      setCreateFees((prev) => ({
        ...prev,
        checklistAmount: +e.target.value,
      }));
    } else {
      setCreateFees((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
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

  // console.info("checklistInfo", checklistInfo);
  return (
    <div
      className={style.seating_modal}
      style={{
        minHeight: "17rem",
      }}
    >
      <section
        className={style.seating_modal_title_left}
        style={{
          position: "relative",
        }}
      >
        <h6>{t("create_checklist")}</h6>
        {is_edit ? (
          <button
            className={style.next_btn}
            title="Update Checklist"
            onClick={onAddInfo}
          >
            {t("update")}
          </button>
        ) : (
          <button className={style.next_btn} title="Next" onClick={onAddInfo}>
            {t("next")}
          </button>
        )}
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
        }}
      />
      <JoinFormInput
        labelText={t("department_checklist_name")}
        placeholder={t("enter_checklist_name")}
        name={"checklistName"}
        value={createFees.checklistName}
        type={"text"}
        onChange={onInputChange}
        errorShow={filled["checklistName"]}
      />
      <CustomNormalSelectInput
        selectLabel={t("select_fees")}
        selectedValue={t("select_fess_yes_no")}
        name={"checklistFees"}
        value={createFees.checklistFees}
        onClick={(value) =>
          setCreateFees((prev) => ({
            ...prev,
            checklistFees: value,
          }))
        }
        errorShow={filled["checklistFees"]}
        options={["Yes", "No"]}
      />
      {createFees.checklistFees === "Yes" ? (
        <JoinFormInput
          labelText={t("amount")}
          placeholder={t("enter_fees_amount")}
          name={"checklistAmount"}
          value={createFees.checklistAmount}
          type={"number"}
          onChange={onInputChange}
          errorShow={filled["checklistAmount"]}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ChecklistFormInfo;
