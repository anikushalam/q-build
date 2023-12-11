import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  useOneClassDelete,
  useOneViewDepartment,
} from "../DepartmentApi/depart-api";
import { useTranslation } from "react-i18next";
import OptionWrapper from "../OptionWrapper";

const OneRowClassOption = ({ cid, setClick, editOneClass }) => {
  const { t } = useTranslation();
  const selectoptions = [t("edit_"), t("delete")];
  const ids = useSelector((state) => state.idChange);
  const [disabled, setDisabled] = useState(false);
  const [classDelete] = useOneClassDelete();
  const { oneDepartmentRefetch } = useOneViewDepartment({
    did: ids?.did,
    skip: false,
  });
  const selectClassHandler = (option) => {
    if (option === "Edit") {
      editOneClass(cid);
      setClick(false);
    } else if (option === "Delete") {
      setDisabled((pre) => !pre);
      classDelete({
        cid: cid,
      })
        .then(() => {
          oneDepartmentRefetch();
          setDisabled((pre) => !pre);
          setClick(false);
        })
        .catch({});
    } else {
    }
  };
  return (
    <OptionWrapper
      selectOptions={selectoptions}
      onClickOptionHandler={selectClassHandler}
    />
  );
};

export default OneRowClassOption;
