import React from "react";
import style from "./CommonSidebar.module.css";
import { Link, useParams } from "react-router-dom";

const siteInfoAccess = [
  "DEPARTMENT",
  "ADMISSION",
  "HOSTEL",
  "LIBRARY",
  "TRANSPORT",
];
const CommonSidebarBackground = ({
  dynamicImage,
  customStyleBackground,
  customStyleImage,
  edit,
  onEditAction,
  isView,
  isSiteInfo,
  redirectUrl,
  carryParentState,
}) => {
  const params = useParams();

  return (
    <div
      className={style.common_sidebar_background_container}
      style={{ ...customStyleBackground }}
    >
      <img
        className={style.common_sidebar_background_image}
        style={{ ...customStyleImage }}
        src={dynamicImage}
        alt="backgroud avatar"
      />
      {isView === "DEPARTMENT" ? (
        <Link to={`/q/${params.username}/viewdept?a=setting`}>
          <img
            className={style.common_sidebar_setting}
            src="/images/profile/profile-menu.svg"
            alt="edit icon"
          />
        </Link>
      ) : null}
      {siteInfoAccess?.includes(isSiteInfo) ? (
        <Link
          to={`${redirectUrl}`}
          state={{
            ...carryParentState,
          }}
          style={{ textDecoration: "none" }}
        >
          <img
            className={style.common_sidebar_site_info}
            src="/images/profile/site-globe-icon.svg"
            alt="edit icon"
          />
        </Link>
      ) : null}
      {edit && (
        <img
          className={style.common_sidebar_edit}
          src="/images/user-pencil-edit.svg"
          alt="edit icon"
          onClick={onEditAction}
        />
      )}
    </div>
  );
};

export default CommonSidebarBackground;
