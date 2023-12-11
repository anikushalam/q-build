import React, { useState } from "react";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import style from "./FeesStructure.module.css";
import PopupWrapper from "./PopupWrapper";
import { useTranslation } from "react-i18next";
import StringLength from "../../../../../Custom/Validation/StringLength";
import QLoader from "../../../../../Loader/QLoader";
import { useAddFeesCategory } from "../../../../../hooks/member_tab/finance-api";
import ButtonWithAction from "../../../../../Custom/Button/ButtonWithAction";

const AddFeesCategory = ({ onClose, financeId, onRefetch }) => {
  const { t } = useTranslation();
  const [categoryName, setCategoryName] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [addFeesCategory] = useAddFeesCategory();
  const onChange = (e) => {
    if (e.target.value?.length <= 30) {
      setCategoryName(e.target.value);
    }
  };
  const onAddCategory = () => {
    if (categoryName) {
      setDisabled((pre) => !pre);
      addFeesCategory({
        fid: financeId,
        createCategory: {
          category_name: categoryName,
        },
      })
        .then(() => {
          // console.info("this is add", res);
          onRefetch();
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch(() => {
          setDisabled((pre) => !pre);
        });
    }
  };
  return (
    <PopupWrapper>
      <div className={style.add_category_modal}>
        <div className={style.add_category_modal_title}>
          <h6>{t("add_new_category")}</h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <JoinFormInput
          labelText={t("category_name")}
          placeholder={t("category_example")}
          name={"category"}
          value={categoryName}
          type={"text"}
          onChange={onChange}
          customStyleContainer={{
            width: "100%",
          }}
        />
        <StringLength maxLength={30} valueLength={categoryName} />

        <ButtonWithAction
          type={"button"}
          buttonText={t("create")}
          shwoLoader={false}
          onAction={onAddCategory}
          customStyleButton={
            !categoryName
              ? {
                  backgroundColor: "rgb(228, 224, 224)",
                  marginTop: "2rem",
                }
              : { marginTop: "2rem" }
          }
          customStyleButtonText={
            !categoryName
              ? {
                  color: "rgba(18, 18, 18, 0.8)",
                }
              : {}
          }
        />
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default AddFeesCategory;
