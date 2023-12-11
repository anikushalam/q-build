import {
  useFinanceDeleteFeesHead,
  useFinanceUpdateFeeHeadMaster,
} from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import ModalMenu from "../../../../Ui/Modal/ModalMenu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AddFeesHead from "./AddFeesHead";

const FeesCategoryMenu = ({ fid, openFeeHeadMenu, onClose }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [financeDeleteFeesHead] = useFinanceDeleteFeesHead();
  const [financeUpdateFeeHeadMaster] = useFinanceUpdateFeeHeadMaster();
  const [edit, setEdit] = useState(false);

  const onDelete = () => {
    if (openFeeHeadMenu?._id && fid) {
      setDisabled((pre) => !pre);
      financeDeleteFeesHead({
        fhid: openFeeHeadMenu?._id,
        fid: fid,
      })
        .then(() => {
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  const onOpenEdit = () => {
    setEdit((pre) => !pre);
  };
  const onEdit = (val) => {
    if (openFeeHeadMenu?._id) {
      setDisabled((pre) => !pre);
      setEdit(false);
      onClose();
      financeUpdateFeeHeadMaster({
        fmid: openFeeHeadMenu?._id,
        updateFeeHead: val,
      })
        .then(() => {
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <>
      {!edit ? (
        <ModalMenu onClose={onClose} disabled={disabled}>
          <h6 onClick={onOpenEdit}>{t("edit")}</h6>
          <h6 onClick={onDelete}>{t("delete")}</h6>
        </ModalMenu>
      ) : (
        <AddFeesHead
          onClose={onOpenEdit}
          openFeeHeadMenu={openFeeHeadMenu}
          openAs="EDIT"
          onEdit={onEdit}
        />
      )}
    </>
  );
};

export default FeesCategoryMenu;
