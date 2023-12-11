import React, { useEffect, useState } from "react";
import PopupWrapper from "./PopupWrapper";
import style from "./FeesStructure.module.css";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import StringLength from "../../../../../Custom/Validation/StringLength";
import { useTranslation } from "react-i18next";
import { useAddFeeHeadMaster } from "../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../Loader/QLoader";

const AddFeeHeadMaster = ({
  onClose,
  financeId,
  onRefetch,
  openAs,
  openFeeHeadMenu,
  onEdit,
}) => {
  const { t } = useTranslation();
  const [addFee, setAddFee] = useState({
    master_name: openAs === "EDIT" ? openFeeHeadMenu?.master_name : "",
    master_amount: openAs === "EDIT" ? openFeeHeadMenu?.master_amount : "",
  });
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [addFeeHeadMaster] = useAddFeeHeadMaster();

  useEffect(() => {
    if (openAs === "EDIT") {
      setAddFee({
        master_name: openFeeHeadMenu?.master_name,
        master_amount: openFeeHeadMenu?.master_amount,
      });
    }
  }, [openAs]);
  const onFeeHeadChange = (e) => {
    if (e.target.name === "master_name") {
      if (e.target.value?.length <= 30)
        setAddFee((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
    } else {
      setAddFee((prev) => ({
        ...prev,
        [e.target.name]: +e.target.value,
      }));
    }
  };
  const onValidation = (fees) => {
    const errors = {};
    for (let obj in fees) {
      if (!fees[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };

  const onFeesHeadAdd = () => {
    const validation = onValidation(addFee);
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
      if (openAs === "EDIT") {
        onEdit(addFee);
      } else {
        setDisabled((pre) => !pre);
        addFeeHeadMaster({
          fid: financeId,
          addFeeHead: addFee,
        })
          .then(() => {
            onRefetch();
            onClose();
            setDisabled((pre) => !pre);

            setAddFee({
              master_name: "",
              master_amount: "",
            });
          })
          .catch({});
      }
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.add_category_modal}>
        <div className={style.add_category_modal_title}>
          <h6>
            {openAs === "EDIT" ? t("edit_fee_head") : t("add_new_fee_head")}
          </h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <JoinFormInput
          labelText={t("head_name")}
          placeholder={t("head_name_placeholder")}
          name={"master_name"}
          value={addFee?.master_name}
          type={"text"}
          onChange={onFeeHeadChange}
          errorShow={filled["master_name"]}
        />
        <StringLength maxLength={30} valueLength={addFee?.master_name} />
        <JoinFormInput
          labelText={t("amount")}
          placeholder={t("enter_amount")}
          name={"master_amount"}
          value={addFee?.master_amount}
          type={"tel"}
          onChange={onFeeHeadChange}
          errorShow={filled["master_amount"]}
        />
        <button
          className={style.set_fees_structure_btn}
          title="Add fees head"
          onClick={onFeesHeadAdd}
          style={{ justifyContent: "center" }}
        >
          {openAs === "EDIT" ? t("update") : t("create")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AddFeeHeadMaster;
