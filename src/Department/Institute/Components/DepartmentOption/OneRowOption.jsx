import React from "react";
import { useOneSubjectDelete } from "../DepartmentApi/depart-api";
import { useTranslation } from "react-i18next";
import OptionWrapper from "../OptionWrapper";

const OneRowOption = ({ onId, setClick, status, onReftech, onEdit }) => {
  const { t } = useTranslation();
  const selectoptions =
    status !== "subject" ? [t("delete")] : [t("edit_"), t("delete")];
  const [subjectDelete] = useOneSubjectDelete();

  const selectBatchHandler = (option) => {
    if (status === "subject") {
      if (option === "Edit") {
        onEdit(onId);
        setClick(false);
      } else {
        subjectDelete({
          sid: onId,
        })
          .then(() => {
            onReftech();
            setClick(false);
          })
          .catch({});
      }
    }
  };
  return (
    <OptionWrapper
      selectOptions={selectoptions}
      onClickOptionHandler={selectBatchHandler}
    />
  );
};

export default OneRowOption;
