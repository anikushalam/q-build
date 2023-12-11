import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import style from "./Hashtag.module.css";

const HashtagCard = ({ hashtag }) => {
  const params = useParams();
  return (
    <>
      <Link
        to={`/q/${params?.username}/hashtag/${hashtag?.hashtag_name?.substring(
          1
        )}`}
        state={{
          hid: hashtag?._id,
        }}
      >
        <div className={style.hashtag_card} title="View Hashtag profile">
          <img
            src={
              hashtag?.hashtag_profile_photo
                ? `${imageShowUrl}/${hashtag?.hashtag_profile_photo}`
                : "/images/user-icon.svg"
            }
            loading="lazy"
            alt="bg-card icon"
          />
          <h6>{hashtag?.hashtag_name}</h6>
        </div>
      </Link>
    </>
  );
};

export default HashtagCard;
