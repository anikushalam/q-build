import React from "react";
import { useState } from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useGetAdminOneInstituteBlockMutation } from "../../../../../services/superAdminAPI";
import { FileNotUpload } from "../../../../../validation/Snackbar";
import style from "./SidebarTop.module.css";

function SidebarTop({ data, status, topData, fetch }) {
  const [blockedStatus] = useGetAdminOneInstituteBlockMutation();
  const [message, setMessage] = useState("");
  const [run, setRun] = useState(false);

  const BlockedInstitute = (insId) => {
    if (insId !== "") {
      blockedStatus(insId).then((res) => {
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
            alt="Institute Avatar"
            src={
              topData?.photoId !== "1"
                ? `${imageShowUrl}/${topData?.insProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
          />
        </div>
        <div className={style.textContainer}>
          <h6>{topData?.name}</h6>

          <p>{topData?.insName}</p>
        </div>

        <div
          className={style.btn}
          onClick={() => {
            BlockedInstitute(topData?._id);
          }}
        >
          {"Block"}
        </div>
      </div>
    </>
  );
}

export default SidebarTop;
