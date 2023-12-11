import React from "react";
import style from "./Item.module.css";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

const QvipleRepaymentNotify = ({ notification }) => {
  const params = useParams();
  return (
    <Link to={`/q/${params?.username}/memberstab`} style={{ width: "100%" }}>
      <div className={style.eachItem}>
        <div className={style.eachItemleft}>
          <img
            src={
              notification?.notifyBySuperAdminPhoto
                ? notification?.notifyBySuperAdminPhoto
                : "/images/ins_default_profile.svg"
            }
            alt=""
          />
          <p>{notification?.notifyContent}</p>
        </div>
        <div className={style.text}>
          <p>{moment(notification?.notifyTime).format("LT")}</p>
        </div>
      </div>
    </Link>
  );
};

export default QvipleRepaymentNotify;
