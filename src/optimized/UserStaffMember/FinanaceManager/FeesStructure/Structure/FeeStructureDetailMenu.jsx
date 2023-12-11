import {
  useFinanceDeleteFeesStructure,
  useFinanceUpdateFeesStructure,
  useFinanceUpdateRetroFeesStructure,
} from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import QvipleLoader from "../../../../Loader/QvipleLoader";
import ModalMenu from "../../../../Ui/Modal/ModalMenu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AddFeeStructure from "./AddFeeStructure";

const FeeStructureDetailMenu = ({
  fid,
  instituteId,
  did,
  openMenu,
  onClose,
  flowAs,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [financeDeleteFeesStructure] = useFinanceDeleteFeesStructure();
  const [financeUpdateFeesStructure] = useFinanceUpdateFeesStructure();
  const [financeUpdateRetroFeesStructure] =
    useFinanceUpdateRetroFeesStructure();
  const [edit, setEdit] = useState(false);

  const onDelete = () => {
    if (openMenu?._id && flowAs) {
      setDisabled((pre) => !pre);
      financeDeleteFeesStructure({
        flow: "Finance_Manager",
        sid: openMenu?._id,
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
  const onEdit = (val, asEdit) => {
    if (openMenu?._id) {
      setDisabled((pre) => !pre);
      setEdit(false);
      if (asEdit === "RETRO") {
        financeUpdateRetroFeesStructure({
          sid: openMenu?._id,
          flow: flowAs,
          updateStructure: {
            ...val,
            department: did,
          },
        })
          .then(() => {
            onClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      } else {
        financeUpdateFeesStructure({
          sid: openMenu?._id,
          flow: "Finance_Manager",
          updateStructure: val,
        })
          .then(() => {
            onClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
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
        <AddFeeStructure
          onClose={onOpenEdit}
          fid={fid}
          openAs="EDIT"
          openStructureMenu={openMenu}
          onEdit={onEdit}
          did={did}
          instituteId={instituteId}
        />
      )}
      {disabled && <QvipleLoader />}
    </>
  );
};

export default FeeStructureDetailMenu;
