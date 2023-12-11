import React, { useState } from "react";
import style from "./StudentProfileModal.module.css";
import { Dialog } from "@mui/material";
import { imageShowUrl } from "../services/BaseUrl";
import Tabs from "./Tabs";
import { useTranslation } from "react-i18next";
import StudentProfileAbout from "./StudentProfileAbout/StudentProfileAbout";
// import FeesData from "../StaffTab/StudentTab/MainContent/StudentAProfile/FeesData";
import ExtraSkills from "../MembersTab/student/Mainbody/ViewProfile/ExtraSkills/ExtraSkills";
import { useOneStudentProfile } from "../hooks/institute/institute-staff-student-api";
import { useEffect } from "react";

function StudentProfileModal({
  openModal,
  hideModal,
  sid,
  onAdmissionDetailRefetch,
  viewAs,
}) {
  const { t } = useTranslation();
  const { oneStudentProfile, oneStudentProfileRefetch } = useOneStudentProfile({
    sid: sid,
    skip: !sid,
  });
  useEffect(() => {
    if (sid) oneStudentProfileRefetch();
  }, [sid, oneStudentProfileRefetch]);

  const [activeIndex, setActiveIndex] = useState(0);
  // console.info("oneStudentProfile", oneStudentProfile);
  return (
    <Dialog open={openModal} onClose={() => hideModal(false)}>
      <div className={style.studentProfileModal}>
        <div className={`${style.heading} ${style.headingborder}`}>
          {t("profile_in_institute")}
        </div>
        <div className={style.profileDetail}>
          <img
            src={
              oneStudentProfile?.student?.photoId !== "1"
                ? `${imageShowUrl}/${oneStudentProfile?.student?.studentProfilePhoto}`
                : "/images/ins_default_profile.svg"
            }
            style={{ borderRadius: "50%" }}
            alt="Staff Profile"
          />
          <div className={style.profileDesig}>
            <p className={style.profileName}>
              {`${oneStudentProfile?.student?.studentFirstName} ${
                oneStudentProfile?.student?.studentMiddleName
                  ? oneStudentProfile?.student?.studentMiddleName
                  : ""
              } ${oneStudentProfile?.student?.studentLastName}`}
            </p>

            <p className={style.profileIndex}>
              {t("roll_no")} {oneStudentProfile?.student?.studentROLLNO}
            </p>
            <p className={style.profileDesignation}>
              {t("active_class")}:
              <span>
                {oneStudentProfile?.student?.studentClass &&
                  oneStudentProfile?.student?.studentClass.className}
              </span>
            </p>
          </div>
        </div>
        <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

        {activeIndex === 0 && (
          <StudentProfileAbout tabDetail={oneStudentProfile?.student} />
        )}
        {activeIndex === 1 && (
          <ExtraSkills sid={sid} status="studentProfileModal" />
        )}
        {/* {activeIndex === 2 && (
          <FeesData
            studentId={sid}
            onAdmissionDetailRefetch={onAdmissionDetailRefetch}
            viewAs={viewAs}
          />
        )} */}
      </div>
    </Dialog>
  );
}

export default StudentProfileModal;
