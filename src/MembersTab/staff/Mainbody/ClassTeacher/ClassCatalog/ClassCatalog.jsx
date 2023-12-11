import React from "react";
import style from "./ClassCatalog.module.css";
import "./ClassCatalog.css";

import Catalog from "./Catalog/Catalog";
import { useLocation } from "react-router-dom";
import UnapprovedCatalog from "./Catalog/UnapprovedCatalog";

function ClassCatalog({ cid, instituteId, carryParentState }) {
  const getQuery = useLocation();

  return (
    <div className={style.exminationsContainer}>
      {getQuery.search?.substring(3) === "catalog" ? (
        <Catalog
          cid={cid}
          instituteId={instituteId}
          carryParentState={carryParentState}
        />
      ) : (
        <UnapprovedCatalog
          cid={cid}
          instituteId={instituteId}
          carryParentState={carryParentState}
        />
      )}
    </div>
  );
}

export default ClassCatalog;
