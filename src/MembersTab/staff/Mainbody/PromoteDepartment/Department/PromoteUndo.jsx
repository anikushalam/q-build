import React, { useState } from "react";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import UndoPromote from "../Promote/UndoPromote";
const PromoteUndo = ({ cid, onRefetch }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onUndoEventFire = (e) => {
    e.stopPropagation();
    setIsOpen((pre) => !pre);
  };
  return (
    <>
      <button
        className={style.select_application_btn}
        onClick={onUndoEventFire}
        title="Undo Promote Studens"
        style={{
          width: "25%",
        }}
      >
        <div>{t("undo_student")}</div>
        <img
          src="/images/member_tab/admission/admission-undo-icon.svg"
          alt="undo icon"
          style={{
            cursor: "pointer",
            width: "30px",
          }}
        />
      </button>

      {isOpen && (
        <UndoPromote
          onClose={() => setIsOpen(false)}
          classId={cid}
          onRefetchParent={onRefetch}
        />
      )}
    </>
  );
};

export default PromoteUndo;
