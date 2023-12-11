import React from "react";
import style from "./LibraryHead.module.css";
import LibraryFunctions from "./LibraryFunctions/LibraryFunctions";
import LibraryProfile from "./LibraryProfile";
import { useLocation } from "react-router-dom";

function LibraryHead({ onClickValue, carryParentState }) {
  const getQuery = useLocation();

  return (
    <div className={style.departmenthead}>
      {!getQuery.search && (
        <LibraryProfile carryParentState={carryParentState} />
      )}

      {getQuery.search && (
        <LibraryFunctions
          carryParentState={carryParentState}
          insId={onClickValue?.institute}
        />
      )}
    </div>
  );
}

export default LibraryHead;
