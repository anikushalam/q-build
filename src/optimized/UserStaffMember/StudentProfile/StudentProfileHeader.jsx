import { useTranslation } from "react-i18next";
import style from "./StudentProfile.module.css";
import {
  assestsFeedUrl,
  assestsUtilityUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import { imageShowUrl } from "@/Services/UrlConfig/BaseUrl";
import { Link, useLocation, useParams } from "react-router-dom";
import StudentAdmissionFeesStat from "./StudentFees/StudentAdmissionFeesStat";
import { useState } from "react";
import StudentEditGr from "./StudentEditGr";
// import StudentProfileAttendance from "./StudentProfileAttendance";

const StudentProfileHeader = ({
  profilePhoto,
  name,
  grNumber,
  rollNumber,
  classTitle,
  isAdmission,
  isGr,
}) => {
  const { t } = useTranslation();
  const params = useParams();
  const getQuery = useLocation();
  const [editgr, setEditgr] = useState(false);

  const onGrToggle = () => {
    setEditgr((pre) => !pre);
  };
  return (
    <>
      <div className={style.sph_main}>
        <div className={style.sph_main_info}>
          <img
            src={
              profilePhoto
                ? `${imageShowUrl}/${profilePhoto}`
                : `${assestsFeedUrl}/feed-user-avatar.svg`
            }
            alt="user icon"
          />
          <div className={style.sph_main_info_inner}>
            <h6>{name ?? ""}</h6>
            <p>
              {t("roll_no")} {" : "}
              {rollNumber ?? ""}
            </p>
            <p>
              {t("gr_number")} {" : "}
              {grNumber ?? ""} {"  "}
              {isGr === "Locked" ? (
                <span className={style.sp_main_head_span_requested}>
                  ({t("reuqtested")})
                </span>
              ) : (
                <span className={style.sp_main_head_span} onClick={onGrToggle}>
                  ({t("edit")})
                </span>
              )}
            </p>
            <p>
              {t("active_class")} {" : "} {classTitle ?? ""}
            </p>
          </div>
        </div>
        <div>
          {isAdmission ? (
            <StudentAdmissionFeesStat />
          ) : (
            <Link
              to={`/${params.username}/student/profile/admission`}
              state={getQuery.state}
            >
              <div
                className={style.link_hold_container}
                style={{
                  right: "35%",
                  // right: admissionButton ? "40%" : "35%",
                }}
              >
                <img
                  src={`${assestsUtilityUrl}/link-forward.svg`}
                  alt="forword link"
                />
                <h6>{t("admission_fees")}</h6>
              </div>
            </Link>
          )}
          {/* <StudentProfileAttendance
          studentId={getQuery?.state?.sid}
          // openAs={openAs}
          // editAs={editAs}
        /> */}
        </div>
      </div>
      {editgr && (
        <StudentEditGr
          onClose={onGrToggle}
          uniqueGr={grNumber}
          studentId={getQuery.state?.studentId}
        />
      )}
    </>
  );
};

export default StudentProfileHeader;
