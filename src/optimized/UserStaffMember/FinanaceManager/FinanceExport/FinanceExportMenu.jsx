import { useState } from "react";
import FinanceExportEdit from "./FinanceExportEdit";
import ModalMenu from "../../../Ui/Modal/ModalMenu";
import {
  useFinanceDeleteExcel,
  useFinanceUpdateExcel,
} from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { useTranslation } from "react-i18next";

const FinanceExportMenu = ({ onClose, xlsxId, instituteId }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [financeDeleteExcel] = useFinanceDeleteExcel();
  const [financeUpdateExcel] = useFinanceUpdateExcel();

  const onDelete = () => {
    if (instituteId && xlsxId?._id) {
      setDisabled((pre) => !pre);
      financeDeleteExcel({
        id: instituteId,
        xlsxId: xlsxId?._id,
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
    if (instituteId && xlsxId?._id) {
      setDisabled((pre) => !pre);
      financeUpdateExcel({
        id: instituteId,
        xlsxId: xlsxId?._id,
        excelUpdate: {
          excel_file_name: val,
        },
      })
        .then(() => {
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    }
  };
  return edit ? (
    <FinanceExportEdit
      onClose={onOpenEdit}
      onEditAction={onEdit}
      xlsxId={xlsxId}
    />
  ) : (
    <ModalMenu onClose={onClose} disabled={disabled}>
      <h6 onClick={onOpenEdit}>{t("edit")}</h6>
      <h6 onClick={onDelete}>{t("delete")}</h6>
    </ModalMenu>
  );
};

export default FinanceExportMenu;
