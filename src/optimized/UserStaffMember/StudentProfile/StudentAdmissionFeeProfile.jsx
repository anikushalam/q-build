import { useOneStudentProfile } from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import StaffMemberConfig from "../Config/StaffMemberConfig";
import BorderBottom from "@/Ui/Border/BorderBottom";
import UserMemberContentWrapper from "@/Ui/UserMember/UserMemberContentWrapper";
import StudentProfileHeader from "./StudentProfileHeader";
import style from "./StudentProfile.module.css";
import StudentAdmissionFees from "./StudentFees/StudentAdmissionFees";

const StudentAdmissionFeeProfile = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const { oneStudentProfile } = useOneStudentProfile({
    sid: getQuery?.state?.studentId,
    skip: !getQuery?.state?.studentId,
  });
  // console.info("getQuery", getQuery.state);
  return (
    <StaffMemberConfig>
      <div className={style.sp_main}>
        <div className={style.sp_main_head}>
          <h6>{t("student_admission_fees")} </h6>
          <div className={style.sp_main_other}>
            <div className={style.spmo_allow}>
              <h6>{t("allow_installment_payment")}</h6>
            </div>
          </div>
        </div>
        <BorderBottom
          customStyleBorder={{
            marginTop: "0",
          }}
        />
        <UserMemberContentWrapper
          customStyle={{
            marginBottom: "1rem",
          }}
        >
          <StudentProfileHeader
            profilePhoto={oneStudentProfile?.student?.studentProfilePhoto}
            name={`${oneStudentProfile?.student?.studentFirstName ?? ""} ${
              oneStudentProfile?.student?.studentMiddleName ?? ""
            } ${oneStudentProfile?.student?.studentLastName ?? ""}`}
            grNumber={oneStudentProfile?.student?.studentGRNO}
            rollNumber={oneStudentProfile?.student?.studentROLLNO}
            classTitle={oneStudentProfile?.student?.studentClass?.classTitle}
            isAdmission
          />
        </UserMemberContentWrapper>
        <BorderBottom />
        <UserMemberContentWrapper
          customStyle={{
            marginBottom: "1rem",
          }}
        >
          <StudentAdmissionFees sid={getQuery?.state?.studentId} />
        </UserMemberContentWrapper>
      </div>
    </StaffMemberConfig>
  );
};

export default StudentAdmissionFeeProfile;
