import React from "react";
import style from "./StudentExplore.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams, useSearchParams } from "react-router-dom";

const StudentExplore = () => {
  const { t } = useTranslation();
  const params = useParams();
  const [searchParams] = useSearchParams();
  return (
    <>
      <div className={style.parentExplore}>
        <Link
          to={`/q/${params.username}/student`}
          style={{
            width: "18vw",
          }}
        >
          <div
            className={
              !searchParams.get("a")
                ? `${style.allStaffExplore} ${style.allExploreActive}`
                : style.allStaffExplore
            }
          >
            {!searchParams.get("a") ? (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/allstudent_white.svg"
                  className="mx-1"
                  alt="Id Card"
                />
                <p className={style.tabtextactive}>{t("all_students")}</p>
              </div>
            ) : (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/allstudent.svg"
                  className="mx-1"
                  alt="Id Card"
                />
                <p className={style.tabtext}>{t("all_students")}</p>
              </div>
            )}
          </div>
        </Link>

        <Link
          to={`/q/${params.username}/student?a=unapproved`}
          style={{
            width: "21vw",
          }}
        >
          <div
            className={
              searchParams.get("a") === "unapproved"
                ? `${style.allStaffExplore} ${style.allExploreActive}`
                : style.allStaffExplore
            }
          >
            {searchParams.get("a") === "unapproved" ? (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/allstudent_white.svg"
                  className="mx-1"
                  alt="Id Card"
                />
                <p className={style.tabtextactive}>
                  {t("unapproved_students")}
                </p>
              </div>
            ) : (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/allstudent.svg"
                  className="mx-1"
                  alt="Id Card"
                />
                <p className={style.tabtext}>{t("unapproved_students")}</p>
              </div>
            )}
          </div>
        </Link>

        <Link
          to={`/q/${params.username}/student?a=certificate`}
          style={{
            width: "18vw",
          }}
        >
          <div
            className={
              searchParams.get("a") === "certificate"
                ? `${style.allStaffExplore} ${style.allExploreActive}`
                : style.allStaffExplore
            }
          >
            {searchParams.get("a") === "certificate" ? (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/certificate_white.svg"
                  className="mx-1"
                  alt="Id Card"
                />
                <p className={style.tabtextactive}>{t("certificates_")}</p>
              </div>
            ) : (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/certificate.svg"
                  className="mx-1"
                  alt="Id Card"
                />
                <p className={style.tabtext}>{t("certificates_")}</p>
              </div>
            )}
          </div>
        </Link>

        <Link
          to={`/q/${params.username}/student?a=complaint`}
          style={{
            width: "18vw",
          }}
        >
          <div
            className={
              searchParams.get("a") === "complaint"
                ? `${style.allStaffExplore} ${style.allExploreActive}`
                : style.allStaffExplore
            }
          >
            {searchParams.get("a") === "complaint" ? (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/complaint_white.svg"
                  className="mx-1"
                  alt="Id Card"
                />
                <p className={style.tabtextactive}>{t("complaints")}</p>
              </div>
            ) : (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/complaint.svg"
                  className="mx-1"
                  alt="Id Card"
                />
                <p className={style.tabtext}>{t("complaints")}</p>
              </div>
            )}
          </div>
        </Link>

        <Link
          to={`/q/${params.username}/student?a=idcard`}
          style={{
            width: "18vw",
          }}
        >
          <div
            className={
              searchParams.get("a") === "idcard"
                ? `${style.allStaffExplore} ${style.allExploreActive}`
                : style.allStaffExplore
            }
          >
            {searchParams.get("a") === "idcard" ? (
              <div className={style.idCard}>
                <img
                  src="/images/idcard-whitee.svg"
                  className="mx-1"
                  alt="Id Card"
                />
                <p className={style.tabtextactive}>{t("id_cards")}</p>
              </div>
            ) : (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/idcard.svg"
                  className="mx-1"
                  alt="Id Card"
                />
                <p className={style.tabtext}>{t("id_cards")}</p>
              </div>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default StudentExplore;
