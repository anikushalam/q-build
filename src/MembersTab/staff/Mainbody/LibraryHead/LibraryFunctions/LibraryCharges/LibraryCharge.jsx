import React from "react";
import style from "../LibraryFunctions.module.css";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import UniversalTab from "../../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import LibraryOutstanding from "./LibraryOutstanding";
import LibraryReceived from "./LibraryReceived";

const LibraryCharge = ({ carryParentState }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const tabList = [
    {
      name: t("outstanding"),
      id: 0,
      url: "member/library?a=charge",
    },
    {
      name: t("received"),
      id: 1,
      url: "member/library?a=charge&collect",
    },
  ];

  // console.info("nbhjfhsdj", getQuery);
  return (
    <>
      <h6 className={style.fine_heading}>{t("fine_history")}</h6>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.2rem",
        }}
      />
      <UniversalTab
        tabList={tabList}
        showAs
        carryParentState={carryParentState}
        activeIndexTab={getQuery.search?.substring(3) === "charge" ? 0 : 1}
        customStyleLink={{
          width: "50%",
        }}
        customStyleTab={{
          width: "100%",
        }}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "1rem",
        }}
      />

      {getQuery.search?.substring(3) === "charge" ? (
        <LibraryOutstanding lid={getQuery.state?.onClickValue?._id} />
      ) : (
        <LibraryReceived lid={getQuery.state?.onClickValue?._id} />
      )}
    </>
  );
};

export default LibraryCharge;
