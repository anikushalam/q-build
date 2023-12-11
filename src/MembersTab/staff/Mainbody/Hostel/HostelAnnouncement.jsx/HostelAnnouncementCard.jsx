import React from "react";
import style from "../Hostel.module.css";

const HostelAnnouncementCard = ({ announcement }) => {
  return (
    <div className={style.announcement_card}>
      {/* <div className={style.head}>
        <div className={style.text}>
          <h6>{?.institute.name}</h6>
          <p>
            {moment(data?.createdAt).format("MMM Do YY")} |{" "}
            {moment(data?.createdAt).format("LT")}
          </p>
        </div>
      </div> */}
      {/* <div className={style.content}>
        <p>
          <span
            onClick={() => {
              setAnnId(data && data._id);
              Switch(true);
            }}
          >
            {announcement?.insAnnTitle?.substr(0, 130)}
          </span>
        </p>
      </div> */}
      <h6>{announcement?.insAnnTitle ?? ""}</h6>
      <p>{announcement?.insAnnDescription?.substring(0, 200)}</p>
    </div>
  );
};

export default HostelAnnouncementCard;
