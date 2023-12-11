import React from "react";
import Overlay from "../Search/Overlay";
import SearchModalWrapper from "../Search/SearchModalWrapper";
import style from "../Department/Institute/AssignStaff/AssignStaffModal.module.css";

const UiniversalModal = ({
  onClose,
  customStyle,
  searchHandler,
  title,
  searchShow,
  children,
}) => {
  return (
    <>
      <SearchModalWrapper onClose={onClose} />
      <Overlay>
        <div className={style.universal_modal} style={{ ...customStyle }}>
          <div className={style.assign_title}>
            <h5>{title}</h5>
            <img
              src="/images/close-post-icon.svg"
              onClick={onClose}
              alt="staff assign pop close icon"
            />
          </div>
          {searchShow && (
            <div className={style.assign_search_container}>
              <input
                type="text"
                placeholder="Search"
                className={style.assign_search_input}
                // value={search}
                onChange={(e) => searchHandler(e.target.value)}
              />
              <img src="/images/search-dash-icon.svg" alt="search icon" />
            </div>
          )}
          <div
            className={style.assign_show_list}
            style={searchShow ? { overflowY: "auto" } : { overflowY: "hidden" }}
          >
            {children}
          </div>
        </div>
      </Overlay>
    </>
  );
};

export default UiniversalModal;
