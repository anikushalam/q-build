import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { idChangeAction } from "../../../../../../redux/store/department-slice";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "./PostContainer.module.css";

const PostContainer = ({
  author,
  authorPhotoId,
  authorProfilePhoto,
  postStatus,
  authorUserName,
  createdAt,
  setDotsClicked,
  children,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={style.eachpost}>
      <div className={style.eachposthead}>
        <div className={style.imgcontainer}>
          <Link
            to={`/q/${authorUserName}/profile`}
            onClick={() => {
              dispatch(
                idChangeAction.searchId({
                  id: author,
                  type: "ID",
                })
              );
            }}
          >
            <img
              alt="not found"
              src={
                authorPhotoId !== "1"
                  ? `${imageShowUrl}/${authorProfilePhoto}`
                  : "/images/ins_default_profile.svg"
              }
              className={authorPhotoId !== "1" ? "" : style.iimg}
              style={
                postStatus === "Anyone"
                  ? { offset: "none" }
                  : {
                      outline: "2px solid #010447",
                      outlineOffset: "1px",
                    }
              }
            />
          </Link>
        </div>
        <div className={style.eachpostUserName}>
          <Link
            to={`/q/${authorUserName}/profile`}
            onClick={() => {
              dispatch(
                idChangeAction.searchId({
                  id: author,
                  type: "ID",
                })
              );
            }}
          >
            <h6>{authorUserName}</h6>
          </Link>

          <div
            className={style.eachpostUserTime}
            style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}
          >
            <p>{format(createdAt)}</p>
          </div>
        </div>
      </div>
      <img
        src="/images/menu-dots-icon.svg"
        alt=""
        className={style.menu}
        onClick={() => setDotsClicked((dotsClicked) => !dotsClicked)}
      />
      {children}
    </div>
  );
};

export default PostContainer;
