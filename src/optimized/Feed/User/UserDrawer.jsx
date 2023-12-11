import DashboardDrawer from "@/Layout/Dashboard/DashboardDrawer";
import DashboardDrawerCard from "@/Layout/Dashboard/DashboardDrawerCard";
import {
  assestsFeedUrl,
  assestsNavbarUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import style from "./UserFeed.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { imageShowUrl } from "@/Services/UrlConfig/BaseUrl";
import { useState } from "react";
import Logout from "./Logout";

const UserDrawer = ({ activeTab }) => {
  const params = useParams();
  const currentAccount = useSelector((state) => state.baseChange.currentLogin);
  const [logout, setLogout] = useState(false);
  const onLogoutToggle = () => {
    setLogout((pre) => !pre);
  };
  return (
    <>
      <DashboardDrawer>
        {userDrawerList.map((drawer) =>
          drawer.key === "notification" ? (
            <div key={drawer?.id}>
              <DashboardDrawerCard
                drawer={drawer}
                url={`/${params.username}/${drawer.urlKey}`}
                isActive={activeTab === drawer.key ? true : false}
              />
              <div className={style.user_feed_drawer_inner}>
                {userNotificationList?.map((noti) => (
                  <DashboardDrawerCard
                    drawer={noti}
                    key={noti?.id}
                    customStyleContainer={{
                      padding: "0.5rem 0.3rem",
                    }}
                    customStyleIcon={{
                      height: "1.1rem",
                    }}
                    customStylelabel={{
                      fontSize: "11px",
                    }}
                    isActive={activeTab === drawer.key ? true : false}
                  />
                ))}
              </div>
            </div>
          ) : (
            <DashboardDrawerCard
              url={`/${params.username}/${drawer.urlKey}`}
              drawer={drawer}
              key={drawer?.id}
              isActive={activeTab === drawer.key ? true : false}
              onAction={onLogoutToggle}
            />
          )
        )}
        <DashboardDrawerCard
          drawer={{
            label: "profile",
            outline: currentAccount?.profilePhoto
              ? `${imageShowUrl}/${currentAccount?.profilePhoto}`
              : `${assestsFeedUrl}/feed-user-avatar.svg`,
            urlKey: "",
            key: "profile",
          }}
          customStyleIcon={{
            borderRadius: "50%",
            height: "2rem",
          }}
          isActive={activeTab === "profile" ? true : false}
        />
      </DashboardDrawer>
      {logout && <Logout onClose={onLogoutToggle} />}
    </>
  );
};

export default UserDrawer;

const userDrawerList = [
  {
    label: "dashboard",
    outline: `${assestsNavbarUrl}/navbar-home.svg`,
    fill: `${assestsNavbarUrl}/navbar-home-fill.svg`,
    urlKey: "feed",
    key: "dashboard",
    id: 1,
    isLink: true,
  },
  // {
  //   label: "member",
  //   outline: `${assestsNavbarUrl}/navbar-member.svg`,
  //   fill: `${assestsNavbarUrl}/navbar-member-fill.svg`,
  //   urlKey: "member/staff",
  //   key: "member",
  //   id: 2,
  //   isLink: true,
  // },
  {
    label: "notification",
    outline: `${assestsNavbarUrl}/navbar-notification.svg`,
    fill: `${assestsNavbarUrl}/navbar-notification-fill.svg`,
    urlKey: "notification",
    key: "notification",
    id: 3,
    isLink: true,
  },

  // {
  //   label: "go_anonymous",
  //   outline: `${assestsFeedUrl}/anonymous.svg`,
  //   fill: `${assestsFeedUrl}/anonymous-fill.svg`,
  //   urlKey: "",
  //   key: "",
  //   id: 4,
  //   isLink: true,
  // },
  {
    label: "switch_account",
    outline: `${assestsFeedUrl}/switch.svg`,
    fill: `${assestsFeedUrl}/switch-fill.svg`,
    urlKey: "",
    key: "",
    id: 5,
    isLink: true,
  },
  // {
  //   label: "tutorials",
  //   outline: `${assestsFeedUrl}/tutorial.svg`,
  //   fill: `${assestsFeedUrl}/tutorial-fill.svg`,
  //   urlKey: "",
  //   key: "",
  //   id: 6,
  //   isLink: true,
  // },
  {
    label: "transaction_history",
    outline: `${assestsFeedUrl}/history.svg`,
    fill: `${assestsFeedUrl}/history-fill.svg`,
    urlKey: "",
    key: "",
    id: 7,
    isLink: true,
  },
  {
    label: "support",
    outline: `${assestsFeedUrl}/support.svg`,
    fill: `${assestsFeedUrl}/support-fill.svg`,
    urlKey: "",
    key: "",
    id: 8,
    isLink: true,
  },

  {
    label: "setting",
    outline: `${assestsFeedUrl}/setting.svg`,
    fill: `${assestsFeedUrl}/setting-fill.svg`,
    urlKey: "",
    key: "",
    id: 9,
    isLink: true,
  },
  {
    label: "logout",
    outline: `${assestsFeedUrl}/logout.svg`,
    fill: `${assestsFeedUrl}/logout-fill.svg`,
    urlKey: "",
    key: "",
    id: 10,
  },
];

const userNotificationList = [
  {
    label: "social",
    outline: `${assestsFeedUrl}/social.svg`,
    fill: `${assestsFeedUrl}/social-fill.svg`,
    urlKey: "",
    key: "social",
    id: 11,
    isLink: true,
  },
  {
    label: "activity",
    outline: `${assestsFeedUrl}/activity.svg`,
    fill: `${assestsFeedUrl}/activity-fill.svg`,
    urlKey: "",
    key: "activity",
    id: 12,
    isLink: true,
  },
  {
    label: "alert",
    outline: `${assestsFeedUrl}/alert.svg`,
    fill: `${assestsFeedUrl}/alert-fill.svg`,
    urlKey: "",
    key: "alert",
    id: 13,
    isLink: true,
  },
  {
    label: "announcement",
    outline: `${assestsFeedUrl}/announcement.svg`,
    fill: `${assestsFeedUrl}/announcement-fill.svg`,
    urlKey: "",
    key: "announcement",
    id: 14,
    isLink: true,
  },
];
