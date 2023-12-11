import { useTranslation } from "react-i18next";
import style from "../../../UserStaffMember/PlateformUser/PlateformUser.module.css";
import { imageShowUrl } from "@/Services/UrlConfig/BaseUrl";
import { assestsFeedUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "@/Ui/Border/BorderBottom";
import { useSelector } from "react-redux";
import { useUserActivatedMember } from "@/Hooks/ApiHooks/UserMember/user-member-api";
import { memo, useEffect, useState } from "react";
import QvipleLoader from "@/Loader/QvipleLoader";

const UserAllInstituteAccountCard = ({ account, onClose, onRefetch }) => {
  const { t } = useTranslation();
  const uid = useSelector((state) => state.baseChange.id);
  const [selected, setSelected] = useState("");
  const [disabled, setDiasbled] = useState(false);
  const { userActivatedMember } = useUserActivatedMember({
    data: {
      uid: uid,
      role: selected ?? "",
    },
    skip: !selected,
  });

  useEffect(() => {
    if (selected) {
      if (userActivatedMember) {
        onRefetch();
        setDiasbled((pre) => !pre);
        onClose();
      }
    }
  }, [selected, userActivatedMember]);

  const onAccount = () => {
    setDiasbled((pre) => !pre);
    setSelected(() => account?._id);
  };
  return (
    <>
      {account?.staffFirstName ? (
        <div className={style.assign_show_list_each} onClick={onAccount}>
          <img
            src={
              account?.institute
                ? account?.institute?.insProfilePhoto
                  ? `${imageShowUrl}/${account?.institute?.insProfilePhoto}`
                  : `${assestsFeedUrl}/feed-staff-avatar.svg`
                : account?.institute?.staffProfilePhoto
                ? `${imageShowUrl}/${account?.institute?.staffProfilePhoto}`
                : `${assestsFeedUrl}/feed-user-avatar.svg`
            }
            loading="lazy"
            alt="profile avatar"
          />
          <div className={style.assign_each_paragraph}>
            <h6>{account?.institute?.insName ?? ""}</h6>
            <p>
              {`${account?.staffFirstName ?? ""} ${
                account?.staffLastName ?? ""
              } ${account?.staffMiddleName ?? ""}`}{" "}
              ({t("staff")})
            </p>
          </div>
        </div>
      ) : (
        <div className={style.assign_show_list_each} onClick={onAccount}>
          <img
            src={
              account?.institute
                ? account?.institute?.insProfilePhoto
                  ? `${imageShowUrl}/${account?.institute?.insProfilePhoto}`
                  : `${assestsFeedUrl}/feed-staff-avatar.svg`
                : account?.institute?.studentProfilePhoto
                ? `${imageShowUrl}/${account?.institute?.studentProfilePhoto}`
                : `${assestsFeedUrl}/feed-user-avatar.svg`
            }
            loading="lazy"
            alt="profile avatar"
          />
          <div className={style.assign_each_paragraph}>
            <h6>{account?.institute?.insName ?? ""}</h6>
            <p>
              {`${account?.studentFirstName ?? ""} ${
                account?.studentLastName ?? ""
              } ${account?.studentMiddleName ?? ""}`}{" "}
              ({t("student")})
            </p>
          </div>
        </div>
      )}
      <BorderBottom
        customStyleBorder={{
          margin: "0",
        }}
      />
      {disabled && <QvipleLoader />}
    </>
  );
};

export default memo(UserAllInstituteAccountCard);
