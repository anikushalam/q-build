import React, { useState } from "react";
import { Link } from "react-router-dom";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import style from "../EachPost/EachPost.module.css";
import { format } from "timeago.js";
import { useTranslation } from "react-i18next";
import { idChangeAction } from "../../../../../../../redux/store/department-slice";
import { useDispatch, useSelector } from "react-redux";

function ReadMore({ text, parentStyle }) {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(true);
  const result = showMore ? text?.substr(0, 200) : text;

  return (
    <p className={parentStyle}>
      {result}
      {showMore && text?.length > 200 ? (
        <span className={style.showMore} onClick={() => setShowMore(!showMore)}>
          {t("show_more_")}
        </span>
      ) : (
        ""
      )}
    </p>
  );
}

const PostApplication = ({ post, profileData }) => {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const onPostSearchProfile = (saerchId, searchAs) => {
    dispatch(
      idChangeAction.searchId({
        id: saerchId,
        type: "ID",
        searchAs: searchAs,
      })
    );
  };
  return (
    <div className={style.eachpost}>
      <div className={style.eachposthead}>
        <div className={style.imgcontainer}>
          {post?.author === ids?.id ? (
            <Link to={`/q/${profileData?.name}/profile`}>
              <img
                alt=""
                src={
                  post.authorPhotoId !== "1"
                    ? `${imageShowUrl}/${post.authorProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
                className={post.authorPhotoId !== "1" ? "" : style.iimg}
                style={
                  post?.postStatus === "Anyone"
                    ? { offset: "none" }
                    : {
                        outline: "2px solid #010447",
                        outlineOffset: "1px",
                      }
                }
              />
            </Link>
          ) : (
            <Link
              to={`/q/${post?.authorUserName}/profile`}
              onClick={() =>
                onPostSearchProfile(
                  post?.author,
                  post?.isInstitute || post?.isUser
                )
              }
            >
              <img
                alt=""
                src={
                  post.authorPhotoId !== "1"
                    ? `${imageShowUrl}/${post.authorProfilePhoto}`
                    : "/images/ins_default_profile.svg"
                }
                className={post.authorPhotoId !== "1" ? "" : style.iimg}
                style={
                  post?.postStatus === "Anyone"
                    ? { offset: "none" }
                    : {
                        outline: "2px solid #010447",
                        outlineOffset: "1px",
                      }
                }
              />
            </Link>
          )}
        </div>
        <div className={style.eachpostUserName}>
          {post?.author === ids?.id ? (
            <Link to={`/q/${profileData?.name}/profile`}>
              <h6>{post.authorUserName}</h6>
            </Link>
          ) : (
            <Link
              to={`/q/${post?.authorUserName}/profile`}
              onClick={() =>
                onPostSearchProfile(
                  post?.author,
                  post?.isInstitute || post?.isUser
                )
              }
            >
              <h6>{post.authorUserName}</h6>
            </Link>
          )}
          <div
            className={style.eachpostUserTime}
            style={{ display: "flex", gap: "0.5vw", alignItems: "center" }}
          >
            <p>{format(post?.createdAt)}</p>
          </div>
        </div>
      </div>

      <div className={style.admissionOpening}>
        <p className={style.admissionOpeningTitle}>
          {t("new_admission_opening_for")}
        </p>
        <ReadMore
          text={post?.new_application?.applicationDepartment?.dName}
          stat="title"
          parentStyle={style.applicationText}
        />
      </div>

      <div className={style.admissionCountEach}>
        <div className={style.admissionCountEachOne}>
          <p>{t("available_sets")}</p>
          <p>{post?.new_application?.applicationSeats}</p>
        </div>
        <div className={style.admissionCountEachOne}>
          <p>{t("admission_fees")}</p>
          <p>{post?.new_application?.admissionFee}/-</p>
        </div>
      </div>
      <div className={style.admissionCountEach1}>
        <div className={style.admissionCountEachOne}>
          <p>{t("starting_date")}</p>
          <p>{post?.new_application?.applicationStartDate}</p>
        </div>
        <div className={style.admissionCountEachOne}>
          <p>{t("last_date")}</p>
          <p>{post?.new_application?.applicationEndDate}</p>
        </div>
      </div>

      <div className={style.postText}>
        <p className={style.applicationInfo}>{t("application_info")}</p>
        <ReadMore
          text={post?.new_application?.applicationAbout}
          stat="description"
          parentStyle={style.textDes}
        />
      </div>
      {post?.new_application?.applicationPhoto && (
        <div className={style.postImg}>
          <img
            src={`${imageShowUrl}/${post?.new_application?.applicationPhoto}`}
            alt="post img"
            loading="lazy"
          />
        </div>
      )}

      <div className={style.applicationViewDetails}>{t("view_details")}</div>
    </div>
  );
};

export default PostApplication;
