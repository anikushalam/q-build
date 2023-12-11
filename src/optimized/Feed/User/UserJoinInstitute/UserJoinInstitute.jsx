import {
  assestsFeedUrl,
  assestsUtilityUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import style from "../UserFeed.module.css";
import { useTranslation } from "react-i18next";
import { Suspense, lazy, memo, useState } from "react";
import { imageShowUrl } from "@/Services/UrlConfig/BaseUrl";
import QvipleLoader from "@/Loader/QvipleLoader";
import { useNavigate, useParams } from "react-router-dom";
const UserAllInstituteAccount = lazy(() => import("./UserAllInstituteAccount"));

const UserJoinInstitute = ({
  instituteName,
  institutePhoto,
  alias,
  rollNumber,
  isApproved,
  isStudent,
  onRefetch,
  sid,
}) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const [switchAccount, setSwithcAccount] = useState(false);

  const onNavigate = (e) => {
    e.stopPropogation();
    if (isStudent) {
      navigate(`/${params.username}/student/profile`, {
        state: {
          studentId: sid,
          openAs: "STUDENT",
        },
      });
    }
  };
  const onToggle = (e) => {
    if (e) e.preventDefault();
    setSwithcAccount((pre) => !pre);
  };
  return (
    <>
      <div className={style.ufu_application} onClick={onNavigate}>
        <div className={style.ufu_your_application}>
          <img
            src={
              isApproved === "Approved"
                ? `${assestsFeedUrl}/feed-user-avatar.svg`
                : institutePhoto
                ? `${imageShowUrl}/${institutePhoto}`
                : `${assestsFeedUrl}/feed-user-avatar.svg`
            }
            alt="your icon"
          />
          <div className={style.ufu_your_application_inner}>
            <h6>{instituteName ?? ""}</h6>
            <div className={style.ufu_ji_staff}>
              <p>({t(isStudent ? "student" : "staff")})</p>
              <div className={style.ufu_ji_swtich} onClick={onToggle}>
                <img
                  src={`${assestsFeedUrl}/switch.svg`}
                  alt="sticth account icon"
                />
                <p>{t("swtich_institute")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.ufu_ji_bottom}>
          <h6>
            {alias} {" : "}
            {rollNumber}
            {" | "} {t("profile_and_more")}
          </h6>
          <img src={`${assestsUtilityUrl}/next.svg`} alt="more icon" />
        </div>
      </div>
      {switchAccount && (
        <Suspense fallback={<QvipleLoader />}>
          <UserAllInstituteAccount onClose={onToggle} onRefetch={onRefetch} />
        </Suspense>
      )}
    </>
  );
};

export default memo(UserJoinInstitute);
