import React, { useEffect } from "react";
import style from "./ViewProfile.module.css";
import Tabs from "./Tabs/Tabs";
// import FeesData from "./FeesData/FeesData";
import ExtraSkills from "./ExtraSkills/ExtraSkills";
import { useState } from "react";
import StudentFormPhoto from "./StudentFormPhoto";
import { useStudentDesignationDataQuery } from "../../../../services/joining/joinApi";
import StudentProfileAbout from "../../../../StaffTab/StudentTab/MainContent/StudentAProfile/StudentProfileAbout";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useParams } from "react-router-dom";
import StudentAllFeesData from "../StudentClass/StudentAllFeesData/StudentAllFeesData";
import ViewProfileHostel from "../StudentHostelProfile/ViewProfileHostel";
function ViewProfile({ studentData }) {
  const { t } = useTranslation();
  const params = useParams();
  const getQuery = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: oneStudent, refetch: oneStudentRefetch } =
    useStudentDesignationDataQuery(studentData, { skip: !studentData });
  useEffect(() => {
    if (studentData) oneStudentRefetch();
  }, [studentData, oneStudentRefetch]);
  // console.info("this is view profile", oneStudent);
  return (
    <div className={style.studentForm}>
      {getQuery.state?.is_profile === "HOSTEL" ? (
        <ViewProfileHostel student={oneStudent?.student} />
      ) : (
        <>
          <div className={style.topHeading}>
            Profile In Institute{" "}
            <span
              style={{
                color: "#0000ff",
                fontSize: "12px",
              }}
            >
              ({oneStudent?.student?.profile_percentage ?? 0}% profile
              completed)
            </span>
          </div>
          <div
            className={style.toprow}
            style={{
              position: "relative",
            }}
          >
            <div className={style.imgcontainer}>
              <StudentFormPhoto
                photoKey={oneStudent?.student?.studentProfilePhoto}
                photoId={oneStudent?.student?.photoId}
                sid={oneStudent?.student?._id}
              />
            </div>

            <div className={style.textcontainer}>
              <h6>
                {oneStudent?.student?.studentFirstName}{" "}
                {oneStudent?.student?.studentMiddleName
                  ? oneStudent?.student?.studentMiddleName
                  : ""}{" "}
                {oneStudent?.student?.studentLastName}
              </h6>
              <p>Roll No. {oneStudent?.student?.studentROLLNO}</p>
              <p>
                {t("gr_number")} {oneStudent?.student?.studentGRNO}
              </p>
              <p>
                Active Class: {oneStudent?.student?.studentClass?.className}
              </p>
            </div>
            <Link
              to={`/q/${params.username}/student/profile/admission`}
              state={{ sid: studentData, viewAs: "STUDENT" }}
            >
              <div className={style.link_hold_container}>
                <img src="/images/link-forword-icon.svg" alt="forword link" />
                <h6>{t("admission_fees")}</h6>
              </div>
            </Link>
          </div>
          <div className={style.tabs}>
            <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          </div>

          {activeIndex === 0 && (
            <StudentProfileAbout student={oneStudent?.student} />
          )}

          {activeIndex === 1 && (
            <ExtraSkills
              sid={studentData}
              avgpoints={oneStudent?.average_points}
              extraPoints={oneStudent?.student?.extraPoints}
            />
          )}
          {activeIndex === 2 && (
            <StudentAllFeesData sid={studentData} viewAs={"STUDENT"} />
          )}
        </>
      )}
    </div>
  );
}

export default ViewProfile;
