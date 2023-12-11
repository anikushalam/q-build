import React, { useEffect, useState } from "react";
import { useUpdateExamFeeStructure } from "../../../../../../hooks/member_tab/department-api";
import QLoader from "../../../../../../Loader/QLoader";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useTranslation } from "react-i18next";
import style from "../../Exminations/SeatingArrangement/SeatingArrangement.module.css";
const UpdateExamFees = ({ onClose, examFees, onRefetch }) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [update, setUpdate] = useState({
    exam_fee_type: "",
    exam_fee_amount: 0,
  });
  const [updateExamFeeStructure] = useUpdateExamFeeStructure();
  useEffect(() => {
    if (examFees) {
      setUpdate((prev) => ({
        ...prev,
        exam_fee_type: examFees?.exam_fee_type ?? "",
        exam_fee_amount: examFees?.exam_fee_amount ?? 0,
      }));
    }
  }, [examFees]);

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (obj === "exam_fee_amount") {
      } else {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };

  const onInputChange = (e) => {
    setUpdate((prev) => ({
      ...prev,
      exam_fee_amount: +e.target.value,
    }));
  };

  const onSelectFeesType = (val) => {
    setUpdate((prev) => ({
      ...prev,
      exam_fee_type: val,
    }));
  };
  const onAddInfo = () => {
    const validation = onValidation(update);
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
      updateExamFeeStructure({
        efid: examFees?._id,
        updateFee: update,
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
      <div className={style.seating_modal}>
        <section
          className={style.seating_modal_title_left}
          style={{
            position: "relative",
          }}
        >
          <h6>{t("exam_fees_update")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.5rem",
          }}
        />
        <CustomNormalSelectInput
          selectLabel={t("fees_type")}
          selectedValue={t("fees_type_placeholder")}
          options={["Per student", "Per Backlog paper"]}
          value={update.exam_fee_type}
          onClick={onSelectFeesType}
          errorShow={filled["examType"]}
        />

        <JoinFormInput
          labelText={t("fee_amount")}
          placeholder={t("fee_amount_placeholder")}
          name={"examWeight"}
          value={update.exam_fee_amount}
          type={"number"}
          onChange={onInputChange}
        />
        <button className={style.update_btn} title="update" onClick={onAddInfo}>
          {t("update")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default UpdateExamFees;
