import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AddBankDetail from "../AddBankDetail";
import {
  useFinanceDeleteBank,
  useFinanceUpdateBank,
} from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import ModalMenu from "../../../../Ui/Modal/ModalMenu";

const OneBankMenu = ({ onToggle, setBankEdit, openBankMenu }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [financeDeleteBank] = useFinanceDeleteBank();
  const [financeUpdateBank] = useFinanceUpdateBank();

  const onEdit = () => {
    setBankEdit((pre) => !pre);
    setEdit((pre) => !pre);
  };
  const onDelete = () => {
    if (openBankMenu?._id) {
      setDisabled((pre) => !pre);
      financeDeleteBank(openBankMenu?._id)
        .then(() => {
          onToggle();
          setDisabled((pre) => !pre);
          navigate(-1);
        })
        .catch({});
    }
  };
  const onUpdateData = (val) => {
    if (openBankMenu?._id) {
      setDisabled((pre) => !pre);
      setEdit(false);
      financeUpdateBank({
        bid: openBankMenu?._id,
        bankDetails: val,
        // delete_pic: prev,
      })
        .then(() => {
          setDisabled((pre) => !pre);
          onToggle();
          setBankEdit((pre) => !pre);
        })
        .catch({});
    }
  };
  return edit ? (
    <AddBankDetail
      onClose={onEdit}
      openAs="EDIT"
      onEditAction={onUpdateData}
      openBankMenu={openBankMenu}
    />
  ) : (
    <ModalMenu onClose={onToggle} disabled={disabled}>
      <h6 onClick={onEdit}>{t("edit")}</h6>
      <h6 onClick={onDelete}>{t("delete")}</h6>
    </ModalMenu>
  );
};

export default OneBankMenu;
