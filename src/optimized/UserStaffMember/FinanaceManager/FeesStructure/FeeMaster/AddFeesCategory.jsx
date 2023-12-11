import { useTranslation } from "react-i18next";
import style from "../FeesStructure.module.css";
import UserMemberContentWrapper from "../../../../Ui/UserMember/UserMemberContentWrapper";
import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import Modal from "../../../../Ui/Modal/Modal";
import { useState } from "react";
import CreateButton from "../../../../Ui/Button/CreateButton";
import QvipleLoader from "../../../../Loader/QvipleLoader";
import { useFinanceAddFeesCategory } from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import BorderBottom from "../../../../Ui/Border/BorderBottom";
import FormInput from "../../../../Ui/Input/FormInput";

const AddFeesCategory = ({ onClose, fid }) => {
  const { t } = useTranslation();
  const [categoryName, setCategoryName] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState("");

  const [financeAddFeesCategory] = useFinanceAddFeesCategory();
  const onChange = (e) => {
    if (e.target.value?.length <= 30) {
      setCategoryName(e.target.value);
    }
  };
  const onAddCategory = () => {
    if (categoryName && fid) {
      setDisabled((pre) => !pre);
      financeAddFeesCategory({
        fid: fid,
        createCategory: {
          category_name: categoryName,
        },
      })
        .then(() => {
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch(() => {
          setDisabled((pre) => !pre);
        });
    } else {
      setErrorField({
        categoryName: "* required",
      });
    }
  };
  return (
    <Modal onClose={onClose}>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <h6>{t("add_new_category")}</h6>
            </div>
            <img
              src={`${assestsUserFinanceUrl}/close.svg`}
              alt="close icon"
              onClick={onClose}
            />
          </div>
        </UserMemberContentWrapper>
        <BorderBottom />
        <UserMemberContentWrapper
          customStyle={{
            paddingTop: "0",
          }}
        >
          <FormInput
            label={t("category_name")}
            placeholder={t("category_name_placeholder")}
            name={"category"}
            value={categoryName}
            type={"text"}
            onChange={onChange}
            errorShow={errorField["categoryName"]}
          />

          <CreateButton label="create" onAction={onAddCategory} />
        </UserMemberContentWrapper>
        {disabled && <QvipleLoader />}
      </div>
    </Modal>
  );
};

export default AddFeesCategory;
