import React from "react";
import style from "./McqWrapper.module.css";

const McqCommonHeader = ({
  topLevelIndex,
  tabHandler,
  name,
  tabEventName,
  backIndex,
  editType,
}) => {
  return (
    <div className={style.create_set_header}>
      <img
        src="/images/members/arrow-left.svg"
        alt=""
        onClick={() => {
          tabHandler(tabEventName);
          topLevelIndex(backIndex);
        }}
      />
      <h6>{name}</h6>
      {editType && (
        <img
          className={style.create_set_header_edit}
          src="/images/members/edit-icon.svg"
          alt="edit test set icon"
          onClick={() => {
            tabHandler("EDIT_TEST");
          }}
        />
      )}
      {!editType && <div />}
    </div>
  );
};

export default McqCommonHeader;
