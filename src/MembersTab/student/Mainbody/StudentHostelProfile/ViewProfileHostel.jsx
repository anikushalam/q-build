import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import StudentFormPhoto from "../ViewProfile/StudentFormPhoto";
import HostelTab from "../ViewProfile/Tabs/HostelTab";
import style from "../ViewProfile/ViewProfile.module.css";
import StudentProfileAbout from "../../../../StaffTab/StudentTab/MainContent/StudentAProfile/StudentProfileAbout";
import StudentHostelAllFeesData from "../StudentClass/StudentAllFeesData/StudentHostelAllFeesData";
import StudentHostelRenewal from "../StudentHostel/StudentHostelRenewal";
const ViewProfileHostel = ({ student }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={style.topHeading}>Profile In Hostel</div>
      <div
        className={style.toprow}
        style={{
          position: "relative",
        }}
      >
        <div className={style.imgcontainer}>
          <StudentFormPhoto
            photoKey={student?.studentProfilePhoto}
            photoId={student?.photoId}
            sid={student?._id}
          />
        </div>

        <div className={style.textcontainer}>
          <h6>
            {student?.studentFirstName}{" "}
            {student?.studentMiddleName ? student?.studentMiddleName : ""}{" "}
            {student?.studentLastName}
          </h6>
          <p>
            {t("unit_name")} {student?.student_unit?.hostel_unit_name ?? ""}
          </p>
          <p>
            {t("room_name")}
            {": "} {student?.student_bed_number?.hostelRoom?.room_name ?? ""}
          </p>
          <p>
            {t("bed_number")}
            {": "} {student?.student_bed_number?.bed_number ?? ""}
          </p>
        </div>
        {/* <Link
          to={`/q/${params.username}/student/profile/admission`}
          state={{ sid: studentData, viewAs: "STUDENT" }}
        >
          <div className={style.link_hold_container}>
            <img src="/images/link-forword-icon.svg" alt="forword link" />
            <h6>{t("admission_fees")}</h6>
          </div>
        </Link> */}
      </div>
      <div className={style.tabs}>
        <HostelTab activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      {activeIndex === 0 && <StudentProfileAbout student={student} />}
      {activeIndex === 1 && (
        <StudentHostelAllFeesData sid={student?._id} viewAs={"STUDENT"} />
      )}
      {activeIndex === 2 && (
        <div
          style={{
            padding: "1rem",
          }}
        >
          <StudentHostelRenewal sid={student?._id} isProfile={"VIEW_PROFILE"} />
        </div>
      )}
    </>
  );
};

export default ViewProfileHostel;
