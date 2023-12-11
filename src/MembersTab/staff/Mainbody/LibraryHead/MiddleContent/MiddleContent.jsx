import React, { useState } from "react";
import style from "./MiddleContent.module.css";
import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";
import Funds from "./Funds/Funds";
import LibraryTabChnageLink from "../LibraryTabChnageLink";

function MiddleContent({ library, getLibraryDetailRefetch, carryParentState }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>

        {activeIndex === 0 && (
          <div className={style.item}>
            <LibraryTabChnageLink
              carryParentState={carryParentState}
              activeTab="book"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/library/library-allbook-icon.svg"
                  alt="Class Catalog"
                />
                <p>{t("all_books")}</p>
              </div>
            </LibraryTabChnageLink>
            <LibraryTabChnageLink
              carryParentState={carryParentState}
              activeTab="issue"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/library/library-issue-icon.svg"
                  alt="issued books"
                />
                <p>{t("issued_books")}</p>
              </div>
            </LibraryTabChnageLink>
            <LibraryTabChnageLink
              carryParentState={carryParentState}
              activeTab="collect"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/library/library-collect-icon.svg"
                  alt="collected logs"
                />
                <p>{t("collected_logs")}</p>
              </div>
            </LibraryTabChnageLink>

            <LibraryTabChnageLink
              carryParentState={carryParentState}
              activeTab="charge"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/library/library-fine-icon.svg"
                  alt="members"
                />
                <p>{t("library_fine")}</p>
              </div>
            </LibraryTabChnageLink>
            <LibraryTabChnageLink
              carryParentState={carryParentState}
              activeTab="member"
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/member_tab/library/library-member-icon.svg"
                  alt="members"
                />
                <p>{t("members")}</p>
              </div>
            </LibraryTabChnageLink>
          </div>
        )}
        {activeIndex === 1 && (
          <div className={style.classList}>
            <Funds
              library={library}
              carryParentState={carryParentState}
              getLibraryDetailRefetch={getLibraryDetailRefetch}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MiddleContent;
