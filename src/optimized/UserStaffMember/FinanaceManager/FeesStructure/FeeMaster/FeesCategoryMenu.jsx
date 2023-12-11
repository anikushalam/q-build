import {
  useFinanceDeleteFeesCategory,
  useFinanceMarkAsSecondaryCategory,
} from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import ModalMenu from "../../../../Ui/Modal/ModalMenu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SelectFeesCategoryList from "./SelectFeesCategoryList";

const FeesCategoryMenu = ({ fid, openCategoryMenu, onClose }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [financeDeleteFeesCategory] = useFinanceDeleteFeesCategory();
  const [financeMarkAsSecondaryCategory] = useFinanceMarkAsSecondaryCategory();
  const [isSecondary, setIsSecondary] = useState(false);

  const onDelete = () => {
    if (openCategoryMenu) {
      setDisabled((pre) => !pre);
      financeDeleteFeesCategory({
        cid: openCategoryMenu,
      })
        .then(() => {
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  const onSecondaryList = () => {
    setIsSecondary((pre) => !pre);
  };
  const onSecondary = (value) => {
    if (fid && openCategoryMenu) {
      setIsSecondary(false);
      setDisabled((pre) => !pre);
      financeMarkAsSecondaryCategory({
        fid: fid,
        secondaryData: {
          old_category: openCategoryMenu,
          fee_category: value,
        },
      })
        .then(() => {
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <>
      {!isSecondary ? (
        <ModalMenu onClose={onClose} disabled={disabled}>
          <h6 onClick={onSecondaryList}>{t("mark_as_secondary")}</h6>
          <h6 onClick={onDelete}>{t("delete")}</h6>
        </ModalMenu>
      ) : (
        <SelectFeesCategoryList
          selectedId={openCategoryMenu}
          fid={fid}
          onSecondary={onSecondary}
          onClose={() => setIsSecondary(false)}
        />
      )}
    </>
  );
};

export default FeesCategoryMenu;
