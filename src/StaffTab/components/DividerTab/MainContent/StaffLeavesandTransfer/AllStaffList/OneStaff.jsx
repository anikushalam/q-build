import React from "react";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "./AllStaffList.module.css";

const OneStaff = ({ val, setReplacedStaff, replacedStaff }) => {
  return (
    <>
      <div
        className={style.item}
        onClick={() => {
          setReplacedStaff(val);
        }}
        style={{
          backgroundColor:
            replacedStaff?._id === val?._id
              ? "rgba(75, 26, 133, 0.1)"
              : "inherit",
        }}
      >
        <img
          src={
            val?.photoId !== ""
              ? `${imageShowUrl}/${val?.staffProfilePhoto}`
              : "/images/demo_users/user3.svg"
          }
          alt=""
        />
        <div className={style.text}>
          <h6>{`${val?.staffFirstName} ${
            val?.staffMiddleName ? val?.staffMiddleName : ""
          } ${val?.staffLastName}`}</h6>
          <p>{val?.staffROLLNO}</p>
        </div>
      </div>
      <div className={style.divider} />
    </>
  );
};

export default OneStaff;
