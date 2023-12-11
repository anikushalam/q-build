import React from "react";
import style from "./StaffRequestProfile.module.css";
import QLoader from "../../../../../Loader/QLoader";
import { useTranslation } from "react-i18next";

const StaffRequestAction = ({
  staff,
  AcceptHandler,
  RejectHandler,
  disabled,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.StaffRequestContainer}>
        <div
          className={style.requestBtn}
          onClick={() => {
            AcceptHandler(staff?._id, staff?.user._id);
          }}
        >
          {t("accept")}
        </div>
        <div
          className={style.requestBtn}
          onClick={() => {
            RejectHandler(staff?._id, staff?.user._id);
          }}
          style={{
            backgroundColor: "rgba(75, 26, 133, 0.1)",
            color: "rgba(18, 18, 18, 0.8)",
          }}
        >
          {t("reject")}
        </div>
      </div>
      {disabled && <QLoader />}
    </>
  );
};

export default StaffRequestAction;
