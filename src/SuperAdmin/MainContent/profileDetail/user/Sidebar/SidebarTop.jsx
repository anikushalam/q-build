import React from "react";
import style from "./SidebarTop.module.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useGetAdminOneUserBlockMutation } from "../../../../../services/superAdminAPI";
import { FileNotUpload } from "../../../../../validation/Snackbar";
import { useState } from "react";

function SidebarTop({ data, status, topData, fetch }) {
  const [blockedStatusUser] = useGetAdminOneUserBlockMutation();
  const [message, setMessage] = useState("");
  const [run, setRun] = useState(false);
  const BlockedUser = (userId) => {
    if (userId !== "") {
      blockedStatusUser(userId).then((res) => {
        if (res.data.status) {
          fetch();
          setMessage(`${topData?.blockStatus} successfully`);
          setRun(true);
        }
      });
    }
  };

  return (
    <>
      {message && <FileNotUpload run={run} setRun={setRun} message={message} />}
      <div className={style.sidebartop}>
        <div
          className={style.imgcontainer}
          // style={{ backgroundImage: "" }}
        >
          <img
            alt="User Avatar"
            src={
              topData?.photoId !== "1"
                ? `${imageShowUrl}/${topData?.profilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
          />
        </div>
        <div className={style.textContainer}>
          <h6>{topData?.username}</h6>

          <p>{topData?.userLegalName}</p>
        </div>

        <div
          className={style.btn}
          onClick={() => {
            BlockedUser(topData?._id);
          }}
        >
          {"Block"}
        </div>
      </div>
    </>
  );
}

export default SidebarTop;
