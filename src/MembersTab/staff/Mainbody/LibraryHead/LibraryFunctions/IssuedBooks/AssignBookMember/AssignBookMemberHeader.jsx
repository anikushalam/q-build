import React, { useCallback, useState } from "react";
import style from "./AssignBookMember.module.css";
import { debounce } from "lodash";
import { useTranslation } from "react-i18next";
const AssignBookMemberHeader = ({ onSearch, onBack, step }) => {
  const { t } = useTranslation();
  const [openSearch, setOpenSearch] = useState(false);

  const searchToggle = () => {
    setOpenSearch((pre) => !pre);
  };

  const searchToggleClose = () => {
    onSearch("");
    setOpenSearch((pre) => !pre);
  };
  const onDebounce = useCallback(
    debounce((val) => onSearch(val), 500),
    []
  );
  const searchHandler = (e) => {
    onDebounce(e.target.value);
  };
  return (
    <div className={style.issueModaltop}>
      {openSearch ? (
        <div className={style.searchContainerr}>
          <div className={style.searchContainer}>
            <img alt="" src="/images/search-dept-icon.svg" />
            <input
              type="text"
              placeholder={t("search-label")}
              onChange={searchHandler}
            />
          </div>
          <div className={style.closeIconContainer}>
            <img
              onClick={searchToggleClose}
              className={style.closeIcon}
              src="/images/user_signup/close.svg"
              alt=""
            />
          </div>
        </div>
      ) : (
        <>
          <img
            className={style.issueModaltopback}
            src="/images/back.svg"
            alt=""
            onClick={onBack}
          />
          <h6 className={style.issueModaltoph6}>
            {t(
              step === 0
                ? "select_member"
                : step === 1
                ? "select_book"
                : "issued_preview"
            )}
          </h6>
          {step !== 2 && (
            <img
              onClick={searchToggle}
              className={style.issueModaltopsearch}
              src="/images/search-icon.svg"
              alt=""
            />
          )}
        </>
      )}
    </div>
  );
};

export default AssignBookMemberHeader;
