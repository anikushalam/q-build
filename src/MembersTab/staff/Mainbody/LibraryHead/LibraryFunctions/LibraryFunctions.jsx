import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import AllBooks from "./AllBooks/AllBooks";
import CollectedLogs from "./CollectedLogs/CollectedLogs";
import IssuedBooks from "./IssuedBooks/IssuedBooks";
import style from "./LibraryFunctions.module.css";
import LibraryMembers from "./LibraryMembers/LibraryMembers";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import LibraryCharge from "./LibraryCharges/LibraryCharge";

const notInclude = ["add", "detail", "edit"];
function LibraryFunctions({ insId, carryParentState }) {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const tabList = [
    {
      name: t("all_books"),
      id: 0,
      url: "member/library?a=book",
    },
    {
      name: t("issued_books"),
      id: 1,
      url: "member/library?a=issue",
    },
    {
      name: t("collected_logs"),
      id: 2,
      url: "member/library?a=collect",
    },
    {
      name: t("members"),
      id: 3,
      url: "member/library?a=member",
    },
    {
      name: t("library_fine"),
      id: 4,
      url: "member/library?a=charge",
    },
  ];
  return (
    <div className={style.admisionApplication}>
      {!notInclude.includes(getQuery.search?.substring(10)) && (
        <UniversalTab
          tabList={tabList}
          showAs
          carryParentState={carryParentState}
          activeIndexTab={
            getQuery.search?.substring(3, 7) === "book"
              ? 0
              : getQuery.search?.substring(3) === "issue"
              ? 1
              : getQuery.search?.substring(3) === "collect"
              ? 2
              : getQuery.search?.substring(3) === "member"
              ? 3
              : 4
          }
          customStyleLink={{
            width: "20%",
          }}
          customStyleTab={{
            width: "100%",
          }}
        />
      )}
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "1rem",
        }}
      />
      <div className={style.applicationBody}>
        {getQuery.search?.substring(3, 7) === "book" && (
          <AllBooks getQuery={getQuery} carryParentState={carryParentState} />
        )}
        {getQuery.search?.substring(3) === "issue" && (
          <IssuedBooks insId={insId} />
        )}
        {getQuery.search?.substring(3) === "collect" && <CollectedLogs />}
        {getQuery.search?.substring(3) === "member" && <LibraryMembers />}
        {getQuery.search?.substring(3, 9) === "charge" && (
          <LibraryCharge carryParentState={carryParentState} />
        )}
      </div>
    </div>
  );
}

export default LibraryFunctions;
