import { memo } from "react";
import style from "./UserMember.module.css";
import { assestsUtilityUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import UserMemberProfileInnerWrapper from "@/Layout/UserMemberTab/UserMemberProfileInnerWrapper";
const UserMemberHeaderWrapper = ({ coverUrl, isAuthor, children }) => {
  return (
    <UserMemberProfileInnerWrapper>
      <div className={style.user_member_header_wrapper}>
        <div className={style.umhw_cover}>
          <img
            className={style.umhw_cover_photo}
            src={coverUrl}
            alt="designation cover"
          />
          {isAuthor ? (
            <label htmlFor="authorCover" className={style.umhw_cover_label}>
              <img
                className={style.umhw_cover_camera}
                src={`${assestsUtilityUrl}/camera.svg`}
                alt="camera icon"
              />
            </label>
          ) : null}
        </div>
        <input
          id="authorCover"
          name="file"
          onChange={() => {}}
          type="file"
          style={{ display: "none" }}
          accept="image/gif, image/jpeg, image/png"
        />
      </div>
      <div className={style.uf_link}>
        <h6>
          Go to{"  "}
          <a
            href="https://qviple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://qviple.com
          </a>
        </h6>
      </div>
      {children}
    </UserMemberProfileInnerWrapper>
  );
};

export default memo(UserMemberHeaderWrapper);

{
  /* <div className={style.user_member_header_wrapper}>
        <div className={style.umhw_cover}>
          <img
            className={style.umhw_cover_photo}
            src={coverUrl}
            alt="designation cover"
          />
          {isAuthor ? (
            <label htmlFor="authorCover" className={style.umhw_cover_label}>
              <img
                className={style.umhw_cover_camera}
                src={`${assestsUserMemberUrl}/hamburger.svg`}
                alt="camera icon"
              />
            </label>
          ) : null}
        </div>
        <div className={style.umhw_info_container}>
          <div className={style.umhw_info_container_header}>
            <h6>{title ?? ""}</h6>
            <p>{subTitle ?? ""}</p>
          </div>
          <div className={style.umhw_info_container_footer}>{children}</div>
        </div>
        <input
          id="authorCover"
          name="file"
          onChange={() => {}}
          type="file"
          style={{ display: "none" }}
          accept="image/gif, image/jpeg, image/png"
        />
      </div> */
}
