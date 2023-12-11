import React from "react";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./Item.module.css";
import { FileNotUpload } from "../../../validation/Snackbar";

function Item({ staff, status, presentTabHandler }) {
  const [clickedStatus, setClickedStatus] = React.useState(status);
  const [run, setRun] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  const present = () => {
    if (!staff?.staffLeave?.length) {
      if (status === "present") {
      } else {
        if (clickedStatus === "present") {
          setClickedStatus("");
          presentTabHandler(staff._id);
        } else {
          setClickedStatus("present");
          presentTabHandler(staff._id);
        }
      }
    } else {
      setMsg("You can not mark attendence untill its granted leave over");
      setRun(true);
    }
  };

  return (
    <>
      <div className={style.listItem} onClick={present}>
        <div className={style.listItemLeft}>
          <p>{staff?.staffROLLNO}.</p>
          <img
            src={
              staff?.photoId !== "1"
                ? `${imageShowUrl}/${staff?.staffProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            loading="lazy"
            alt=""
          />
          <p>{`${staff?.staffFirstName} ${
            staff.staffMiddleName ? staff.staffMiddleName : ""
          } ${staff?.staffLastName}`}</p>
        </div>
        <div className={style.listItemRight}>
          {!staff?.staffLeave?.length ? (
            clickedStatus === "present" ? (
              <img src="/images/members/radio-btn-green.svg" alt="" />
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
