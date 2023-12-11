import React from "react";
import PopupWrapper from "../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
const ConfirmDialogWithCount = ({
  isWrapper,
  onClose,
  title,
  firstMessage,
  spanMessage,
  outerSpanMessage,
  lastMessage,
  buttonLabel,
  onHandler,
  buttonStyle,
  messageStyle,
}) => {
  return (
    <>
      {isWrapper ? (
        <PopupWrapper onClose={onClose}>
          <div className={style.admission_modal}>
            <h6 className={style.admission_modal_heading}>{title}</h6>

            <BorderBottom
              customStyle={{
                width: "100%",
                margin: "0.7rem 0",
              }}
            />

            <div className={style.admission_class_confirm} style={messageStyle}>
              {firstMessage}{" "}
              <span
                style={{
                  fontWeight: "600",
                }}
              >
                {spanMessage}
              </span>{" "}
              {outerSpanMessage}
              <span
                style={{
                  fontWeight: "600",
                }}
              >
                {lastMessage}
              </span>
            </div>
            <div
              className={style.confirm_btn}
              onClick={onHandler}
              style={buttonStyle}
            >
              {buttonLabel}
            </div>
          </div>
        </PopupWrapper>
      ) : (
        <>
          <h6 className={style.admission_modal_heading}>{title}</h6>

          <BorderBottom
            customStyle={{
              width: "100%",
              margin: "0.7rem 0",
            }}
          />

          <div className={style.admission_class_confirm} style={messageStyle}>
            {firstMessage}{" "}
            <span
              style={{
                fontWeight: "600",
              }}
            >
              {spanMessage}
            </span>{" "}
            {outerSpanMessage}
            <span
              style={{
                fontWeight: "600",
              }}
            >
              {lastMessage}
            </span>
          </div>
          <div
            className={style.confirm_btn}
            onClick={onHandler}
            style={buttonStyle}
          >
            {buttonLabel}
          </div>
        </>
      )}
    </>
  );
};

export default ConfirmDialogWithCount;
