import React, { useEffect } from "react";
import style from "./SidebarTop.module.css";
import { Link } from "react-router-dom";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useOneInstituteDashboard } from "../../../../../../hooks/dashboard/dashboard-api";

function SidebarTop() {
  const id = useSelector((state) => state.idChange.id);
  const { t } = useTranslation();
  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: id,
      skip: !id,
    });
  useEffect(() => {
    if (id) oneInstituteDashboardRefetch();
  }, [id, oneInstituteDashboardRefetch]);

  const oneliner = "rthgr gkr grsigjr tgrw gjigj iowerjgesnkg ksrngk sg";

  return (
    <>
      <div className={style.sidebartopp}>
        <div className={style.sidebartoppHead}>
          {oneInstituteDashboard?.institute?.coverId !== "2" ? (
            <div className={style.defaultcover}>
              <img
                src={`${imageShowUrl}/${oneInstituteDashboard?.institute?.insProfileCoverPhoto}`}
              />
            </div>
          ) : (
            <div className={style.defaultcoverr}>
              <img
                className={style.defaultcoverwaveleft}
                src="/images/profile/cover-wave-2.svg"
                alt=""
              />
              <img
                className={style.defaultcoverwaveright}
                src="/images/profile/cover-wave.svg"
                alt=""
              />
            </div>
          )}

          <div className={`${style.imgcontainer} ${style.imgposition}`}>
            <img
              alt="not found"
              src={
                oneInstituteDashboard?.institute?.photoId !== "1"
                  ? `${imageShowUrl}/${oneInstituteDashboard?.institute?.insProfilePhoto}`
                  : "/images/ins_default_profile.svg"
              }
            />
          </div>

          <div className={style.textContainer}>
            <Link
              to={`/q/${oneInstituteDashboard?.institute?.name}/profile`}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <h6>{oneInstituteDashboard?.institute?.insName}</h6>
              <p className={style.username}>
                @{oneInstituteDashboard?.institute?.name}
              </p>

              {oneInstituteDashboard?.institute?.followersCount < 2 ? (
                <p className={style.followers}>
                  {oneInstituteDashboard?.institute?.followersCount}{" "}
                  {t("follower")}
                </p>
              ) : (
                <p className={style.followers}>
                  {" "}
                  {oneInstituteDashboard?.institute?.followersCount}{" "}
                  {t("followers_")}
                </p>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarTop;
