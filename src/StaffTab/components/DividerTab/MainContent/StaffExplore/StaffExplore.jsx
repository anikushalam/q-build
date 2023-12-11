import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import style from "./StaffExplore.module.css";
import { useTranslation } from "react-i18next";

const StaffExplore = () => {
  const { t } = useTranslation();
  const params = useParams();
  const [searchParams] = useSearchParams();
  return (
    <>
      <div className={style.parentExplore}>
        <Link
          to={`/q/${params.username}/staff`}
          style={{
            width: "19.327vw",
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
                  alt="All Staff"
                />
                <p className={style.tabtextactive}>{t("all_staff")}</p>
              </div>
            ) : (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/allstudent.svg"
                  className="mx-1"
                  alt="All Staff"
                />
                <p className={style.tabtext}>{t("all_staff")}</p>
              </div>
            )}
          </div>
        </Link>

        <Link
          to={`/q/${params.username}/staff?a=request`}
          style={{
            width: "19.327vw",
          }}
        >
          <div
            className={
              searchParams.get("a") === "request"
                ? `${style.allStaffRequestExplore} ${style.allExploreActive}`
                : style.allStaffRequestExplore
            }
          >
            {searchParams.get("a") === "request" ? (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/request_white.svg"
                  className="mx-1"
                  alt="All Staff"
                />
                <p className={style.tabtextactive}>{t("request")}</p>
              </div>
            ) : (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/request.svg"
                  className="mx-1"
                  alt="Id Card"
                />
                <p className={style.tabtext}>{t("request")}</p>
              </div>
            )}
          </div>
        </Link>

        <Link
          to={`/q/${params.username}/staff?a=attendance`}
          style={{
            width: "19.327vw",
          }}
        >
          <div
            className={
              searchParams.get("a") === "attendance"
                ? `${style.allStaffRequestExplore} ${style.allExploreActive}`
                : style.allStaffRequestExplore
            }
          >
            {searchParams.get("a") === "attendance" ? (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/attendence_white.svg"
                  className="mx-1"
                  alt="attendance"
                />
                <p className={style.tabtextactive}>{t("attendance")}</p>
              </div>
            ) : (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/attendence.svg"
                  className="mx-1"
                  alt="attendance"
                />
                <p className={style.tabtext}>{t("attendance")}</p>
              </div>
            )}
          </div>
        </Link>

        <Link
          to={`/q/${params.username}/staff?a=leave`}
          style={{
            width: "19.327vw",
          }}
        >
          <div
            className={
              searchParams.get("a") === "leave"
                ? `${style.allStaffExplore} ${style.allExploreActive}`
                : style.allStaffExplore
            }
          >
            {searchParams.get("a") === "leave" ? (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/leaves_transfer_white.svg"
                  className="mx-1"
                  alt="leaves_transfer"
                />
                <p className={style.tabtextactive}>{t("leaves_transfer")}</p>
              </div>
            ) : (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/leaves_transfer.svg"
                  className="mx-1"
                  alt="leaves_transfer"
                />
                <p className={style.tabtext}>{t("leaves_transfer")}</p>
              </div>
            )}
          </div>
        </Link>

        <Link
          to={`/q/${params.username}/staff?a=complaint`}
          style={{
            width: "19.327vw",
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
                  alt="complaint"
                />
                <p className={style.tabtextactive}>{t("complaint")}</p>
              </div>
            ) : (
              <div className={style.idCard}>
                <img
                  src="/images/stafftab/complaint.svg"
                  className="mx-1"
                  alt="complaint"
                />
                <p className={style.tabtext}>{t("complaint")}</p>
              </div>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default StaffExplore;
