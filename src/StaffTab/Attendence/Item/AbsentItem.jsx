import React from "react";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./Item.module.css";
import { FileNotUpload } from "../../../validation/Snackbar";
function Item({ staff, status, absentTabHandler }) {
  const [clickedStatus, setClickedStatus] = React.useState(status);
  const [run, setRun] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  const absent = () => {
    if (!staff?.staffLeave?.length) {
      if (status === "absent") {
      } else {
        if (clickedStatus === "absent") {
          setClickedStatus("");
          absentTabHandler(staff._id);
        } else {
          setClickedStatus("absent");
          absentTabHandler(staff._id);
        }
      }
    } else {
      setMsg("You can not mark attendence untill its granted leave over");
      setRun(true);
    }
  };
  return (
    <>
      <div className={style.listItem} onClick={() => absent(staff._id)}>
        <div className={style.listItemLeft}>
          <p>{staff?.staffROLLNO}.</p>
          <img
            src={
              staff?.photoId !== "1"
                ? `${imageShowUrl}/${staff?.staffProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt=""
            loading="lazy"
          />
          <p>{`${staff?.staffFirstName} ${
            staff.staffMiddleName ? staff.staffMiddleName : ""
          } ${staff?.staffLastName}`}</p>
        </div>
        <div className={style.listItemRight}>
          {!staff?.staffLeave?.length ? (
            clickedStatus === "absent" ? (
              <img src="/images/members/radio-btn-red.svg" alt="" />
            ) : (
              <img src="/images/members/radio-btn.svg" alt="" />
            )
          ) : (
            <img src="/images/members/radio-btn.svg" alt="" />
          )}
        </div>
      </div>

      <FileNotUpload msg={msg} run={run} setRun={setRun} />
    </>
  );
}

export default Item;
