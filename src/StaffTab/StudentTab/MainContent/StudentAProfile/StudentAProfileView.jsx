import { useEffect } from "react";
import { useOneStudentProfile } from "../../../../hooks/institute/institute-staff-student-api";
import { imageShowUrl } from "../../../../services/BaseUrl";
import style from "./StudentAProfileView.module.css";
import BasicTabs from "./Tab";

const StudentAProfileView = ({ setReportCard, setYearId, sid }) => {
  const { oneStudentProfile, oneStudentProfileRefetch } = useOneStudentProfile({
    sid: sid,
    skip: !sid,
  });
  useEffect(() => {
    if (sid) oneStudentProfileRefetch();
  }, [sid, oneStudentProfileRefetch]);
  return (
    <>
      <div className={`${style.heading} ${style.headingborder}`}>
        Student Profile Institute
      </div>
      <div className={style.profileDetail}>
        <img
          src={
            oneStudentProfile?.student?.photoId !== "1"
              ? `${imageShowUrl}/${oneStudentProfile?.student?.studentProfilePhoto}`
              : "/images/ins_default_profile.svg"
          }
          style={{ borderRadius: "50%" }}
          alt="Student avatar"
        />
        <div className={style.profileDesig}>
          <p className={style.profileName}>
            {`${oneStudentProfile?.student.studentFirstName} ${
              oneStudentProfile?.student.studentMiddleName
                ? oneStudentProfile?.student.studentMiddleName
                : ""
            } ${oneStudentProfile?.student.studentLastName}`}
          </p>

          <p className={style.profileIndex}>
            Roll No. {oneStudentProfile?.student.studentROLLNO}
          </p>
          <p className={style.profileDesignation}>
            Active Class:
            <span>{oneStudentProfile?.student.studentClass.className}</span>
          </p>
        </div>
      </div>
      <BasicTabs
        tabData={oneStudentProfile?.student}
        setReportCard={setReportCard}
        studentId={oneStudentProfile?.student?._id}
        setYearId={setYearId}
      />
    </>
  );
};

export default StudentAProfileView;
