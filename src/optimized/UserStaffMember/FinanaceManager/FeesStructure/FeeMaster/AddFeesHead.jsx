import { useTranslation } from "react-i18next";
import style from "../FeesStructure.module.css";
import UserMemberContentWrapper from "../../../../Ui/UserMember/UserMemberContentWrapper";
import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import Modal from "../../../../Ui/Modal/Modal";
import { useEffect, useState } from "react";
import CreateButton from "../../../../Ui/Button/CreateButton";
import QvipleLoader from "../../../../Loader/QvipleLoader";
import { useFinanceAddFeeHeadMaster } from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import BorderBottom from "../../../../Ui/Border/BorderBottom";
import FormInput from "../../../../Ui/Input/FormInput";
import {
  existingRequiredField,
  requiredField,
} from "../../../../Validation/functions/checkingRequiredField";

const AddFeesHead = ({ onClose, fid, openFeeHeadMenu, openAs, onEdit }) => {
  const { t } = useTranslation();
  const [addFee, setAddFee] = useState({
    master_name: openAs === "EDIT" ? openFeeHeadMenu?.master_name : "",
    master_amount: openAs === "EDIT" ? openFeeHeadMenu?.master_amount : "",
  });
  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState("");

  const [financeAddFeeHeadMaste] = useFinanceAddFeeHeadMaster();
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
  const onAddHead = () => {
    if (fid) {
      let validation = requiredField(addFee, ["master_amount"]);
      if (existingRequiredField(validation)) {
        if (openAs === "EDIT") {
          onEdit(addFee);
        } else {
          setDisabled((pre) => !pre);
          financeAddFeeHeadMaste({
            fid: fid,
            addFeeHead: addFee,
          })
            .then(() => {
              onClose();
              setDisabled((pre) => !pre);
            })
            .catch(() => {
              setDisabled((pre) => !pre);
            });
        }
      } else {
        setErrorField(validation);
      }
    }
  };
  return (
    <Modal onClose={onClose}>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <h6>
                {t(openAs === "EDIT" ? "edit_fee_head" : "add_new_fee_head")}
              </h6>
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
            label={t("head_name")}
            placeholder={t("head_name_placeholder")}
            name={"master_name"}
            value={addFee.master_name}
            type={"text"}
            onChange={onFeeHeadChange}
            errorShow={errorField["master_name"]}
          />
          <FormInput
            label={t("amount")}
            placeholder={t("amount_placeholder")}
            name={"master_amount"}
            value={addFee.master_amount}
            type={"tel"}
            onChange={onFeeHeadChange}
          />

          <CreateButton
            label={openAs === "EDIT" ? "update" : "create"}
            onAction={onAddHead}
          />
        </UserMemberContentWrapper>
        {disabled && <QvipleLoader />}
      </div>
    </Modal>
  );
};

export default AddFeesHead;
