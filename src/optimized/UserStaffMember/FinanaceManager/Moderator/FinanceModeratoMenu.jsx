import ModalMenu from "../../../Ui/Modal/ModalMenu";
import AddFinanceModerator from "./AddFinanceModerator";
import {
  useFinanceDeleteModerator,
  useFinanceUpdateModerator,
} from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const FinanceModeratoMenu = ({
  onClose,
  financeId,
  openModeratorMenu,
  instituteId,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [financeDeleteModerator] = useFinanceDeleteModerator();
  const [financeUpdateModerator] = useFinanceUpdateModerator();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    financeDeleteModerator({
      fid: financeId,
      modId: openModeratorMenu?._id,
    })
      .then(() => {
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onEdit = (val) => {
    setDisabled((pre) => !pre);
    onOpenEdit();
    financeUpdateModerator({
      modId: openModeratorMenu?._id,
      updateModerator: {
        role: val?.mod_role,
        staffId: val?.sid,
      },
    })
      .then(() => {
        setDisabled((pre) => !pre);
        onClose();
      })
      .catch({});
  };
  const onOpenEdit = () => {
    setEdit((pre) => !pre);
  };

  return (
    <>
      {edit ? (
        <AddFinanceModerator
          onClose={onOpenEdit}
          onEdit={onEdit}
          openModeratorMenu={openModeratorMenu}
          openAs="EDIT"
          fid={financeId}
          instituteId={instituteId}
        />
      ) : (
        <ModalMenu onClose={onClose} disabled={disabled}>
          <h6 onClick={onOpenEdit}>{t("edit")}</h6>
          <h6 onClick={onDelete}>{t("delete")}</h6>
        </ModalMenu>
      )}
    </>
  );
};

export default FinanceModeratoMenu;
