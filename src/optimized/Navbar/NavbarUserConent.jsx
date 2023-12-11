import React, { memo } from "react";
import style from "./Navbar.module.css";
import { assestsNavbarUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import NavbarIcon from "./NavbarIcon";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const userIcon = [
  {
    name: "home",
    outline: `${assestsNavbarUrl}/navbar-home.svg`,
    fill: `${assestsNavbarUrl}/navbar-home-fill.svg`,
    urlKey: "feed",
  },
  {
    name: "members",
    outline: `${assestsNavbarUrl}/navbar-member.svg`,
    fill: `${assestsNavbarUrl}/navbar-member-fill.svg`,
    urlKey: "member-tab",
  },
  {
    name: "notifications",
    outline: `${assestsNavbarUrl}/navbar-notification.svg`,
    fill: `${assestsNavbarUrl}/navbar-notification-fill.svg`,
    urlKey: "notification",
  },
];
const NavbarUserConent = () => {
  const params = useParams();
  return (
    <div className={style.navbar_content}>
      {userIcon.map((icon) => (
        <Link to={`/${params.username}/member/staff`} key={icon.urlKey}>
          <NavbarIcon
            name={icon.name}
            iconOutline={icon.outline}
            iconFill={icon.fill}
          />
        </Link>
      ))}
      <NavbarIcon
        name="profile"
        iconOutline={`${assestsNavbarUrl}/navbar-profile.svg`}
        iconFill={`${assestsNavbarUrl}/navbar-profile-fill.svg`}
      />
    </div>
  );
};

export default memo(NavbarUserConent);
