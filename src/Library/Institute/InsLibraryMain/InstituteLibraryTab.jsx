import React from "react";
import style from "../../../Finance/Institute/Mainbody/Main.module.css";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import CommonLinkTab from "../../../Sidebar/CommonLinkTab";
import Funds from "../Funds/Funds";

const InstituteLibraryTab = ({ carryParentState, library }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  return (
    <>
      <div className={style.finance_tab_tabs}>
        <CommonLinkTab
          tabLevel={t("all_books")}
          customStyleContainer={{
            width: "50%",
            marginRight: "2px",
            borderTopLeftRadius: "6px",
          }}
          customStyleLevel={{ borderTopLeftRadius: "6px" }}
          tabValue="book"
          currentValue={searchParams?.get("a") === "book" ? "book" : "other"}
          carryParentState={carryParentState}
          activeUrl="library?a=book"
        />

        <CommonLinkTab
          tabLevel={t("funds")}
          customStyleContainer={{
            width: "50%",
            borderTopRightRadius: "6px",
          }}
          customStyleLevel={{ borderTopLeftRadius: "6px" }}
          tabValue="fund"
          currentValue={searchParams?.get("a") === "fund" ? "fund" : "other"}
          carryParentState={carryParentState}
          activeUrl="library?a=fund"
        />
      </div>
      {searchParams?.get("a") === "fund" ? <Funds library={library} /> : null}
    </>
  );
};

export default InstituteLibraryTab;
