import React from "react";
import style from "../../../Home/components/Header/NewHeader/HeaderIns.module.css";
import { useLogin } from "../../Login/Components/use-login";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function AccountItem({
  name,
  username,
  profileimg,
  defaultImg,
  userAccount,
  Access,
  isLandingAccount,
}) {
  const { existingAccountLogin, existingLandingAccountLogin } = useLogin();
  const getQuery = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const onExitingAccountLogin = () => {
    if (isLandingAccount?.type) {
      existingLandingAccountLogin({
        token: userAccount?.token,
        _id: userAccount?.user?._id,
        username: userAccount?.user?.username,
      });
      if (searchParams?.get("gov") === "hostel") {
        navigate("/q/hostel/joining", {
          state: {
            formAs: "STUDENT",
            openAs: "landing_page_and_existing",
            appId: searchParams?.get("goaid"),
            hostelId: searchParams?.get("gohid"),
            userId: userAccount?.user?._id,
            username: userAccount?.user?.username,
          },
        });
      } else {
        navigate("/q/joining", {
          state: {
            formAs: "STUDENT",
            openAs: "landing_page_and_existing",
            appId: searchParams?.get("goaid"),
            instituteId: searchParams?.get("goid"),
            departmentId: searchParams?.get("godid"),
            applicationName: searchParams?.get("gon"),
            whichFormShow: "DEPARTMENT",
            userId: userAccount?.user?._id,
            username: userAccount?.user?.username,
          },
        });
      }
    } else if (!Access) {
      existingAccountLogin({
        token: userAccount?.token,
        _id: userAccount?.user?._id,
        username: userAccount?.user?.username,
      });
    } else {
    }
  };
  return (
    <div
      className={style.item}
      style={{ cursor: "pointer" }}
      onClick={onExitingAccountLogin}
    >
      <img
        className={
          profileimg
            ? style.profile_img
            : `${style.profile_img} ${style.profile_imgpadding}`
        }
        src={profileimg ? profileimg : defaultImg}
        alt="Profile Img"
      />

      <div className={style.text_container}>
        <h6 className={style.hname}>{name}</h6>
        <p className={style.pusername}>{username}</p>
      </div>
    </div>
  );
}

export default AccountItem;
