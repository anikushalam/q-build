import style from "./Item.module.css";
import React, { useState } from "react";
// import { useMarkStarAnnouncementMutation } from "../../../../../../../services/qvipleAPI";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import moment from "moment";
import { Link } from "react-router-dom";

function Item({ data, Switch, setAnnId }) {
  const [starred, setStarred] = useState(false);

  return (
    <div className={style.item}>
      <div
        className={style.head}
        onClick={() => {
          setAnnId(data && data._id);
          Switch(true);
        }}
      >
        <Link to={`/q/${data?.institute?.name}/profile`}>
          <img
            alt="Announcement"
            src={
              data?.institute?.photoId !== "1"
                ? `${imageShowUrl}/${data?.institute.insProfilePhoto}`
                : "/images/ins_default_profile.svg"
            }
          />
        </Link>
        <div className={style.text}>
          <h6>{data && data?.institute.name}</h6>
          <p>
            {moment(data?.createdAt).format("MMM Do YY")} |{" "}
            {moment(data?.createdAt).format("LT")}
          </p>
        </div>
      </div>

      <div className={style.content}>
        <p>
          <span
            onClick={() => {
              setAnnId(data && data._id);
              Switch(true);
            }}
          >
            {data?.insAnnTitle?.substr(0, 130)}
          </span>
        </p>
      </div>

      {starred ? (
        <img
          className={style.bookmark}
          src="/images/bookmark-yellow.svg"
          onClick={() => setStarred(!starred)}
          alt=""
        />
      ) : (
        <img
          className={style.bookmark}
          src="/images/bookmark-post.svg"
          onClick={() => setStarred(!starred)}
          alt=""
        />
      )}

      {/* {data && data.starList && data.starList.includes(id && `${id}`) ? 
      (
        <img
          className={style.bookmark}
          src="/images/bookmark-yellow.svg"
          // onClick={() => MarkStar(data?._id)}
        />
      ) : ( */}
      {/* <img
        className={style.bookmark}
        src="/images/bookmark-post.svg"
        // onClick={() => MarkStar(data?._id)}
      /> */}
      {/* )
     } */}
    </div>
  );
}

export default Item;
