import React from "react";
import style from "../Auth.module.css";
import { assestsFeedUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import { imageShowUrl } from "@/Services/UrlConfig/BaseUrl";
import { useLogin } from "../hooks/use-login";

const AuthExistingAccountCard = ({ account }) => {
  const { existingAccountLogin } = useLogin();
  const onClick = () => {
    existingAccountLogin(account);
  };
  return (
    <div className={style.aea_card} onClick={onClick}>
      <img
        src={
          account?.user?.profilePhoto
            ? `${imageShowUrl}/${account?.user?.profilePhoto}`
            : `${assestsFeedUrl}/feed-user-avatar.svg`
        }
        alt="avatar icon"
      />
      <div className={style.aea_card_inner}>
        <h6>{account?.user?.userLegalName ?? ""}</h6>
        <p>{account?.user?.username ?? ""}</p>
      </div>
    </div>
  );
};

export default AuthExistingAccountCard;
