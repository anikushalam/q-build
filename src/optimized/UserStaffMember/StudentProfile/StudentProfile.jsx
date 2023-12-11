import { useTranslation } from "react-i18next";
import style from "./StudentProfile.module.css";
import BorderBottom from "@/Ui/Border/BorderBottom";
import StudentProfileHeader from "./StudentProfileHeader";
import HorizontalTabWrapper from "@/Ui/Tab/Horizontal/HorizontalTabWrapper";
import HorizontalTabCard from "@/Ui/Tab/Horizontal/HorizontalTabCard";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import StudentProfileAbout from "./StudentProfileAbout";
import StudentFees from "./StudentFees/StudentFees";
import { useOneStudentProfile } from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";
import StaffMemberConfig from "../Config/StaffMemberConfig";
import UserMemberContentWrapper from "@/Ui/UserMember/UserMemberContentWrapper";
import AllStudentMessageSend from "../FinanaceManager/FinanceAllStudent/AllStudentMessageSend";
import { useState } from "react";

const tabList = [
  {
    label: "about",
    id: "about",
    urlKey: "",
  },
  {
    label: "fees_data",
    id: "fees",
    urlKey: "?type=fees",
  },
];

const StudentProfile = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  const { oneStudentProfile } = useOneStudentProfile({
    sid: getQuery?.state?.studentId,
    skip: !getQuery?.state?.studentId,
  });

  const onToggle = () => {
    setOpen((pre) => !pre);
  };

  // console.info("oneStudentProfile", getQuery.state);
  return (
    <>
      <StaffMemberConfig>
        <div className={style.sp_main}>
          <div className={style.sp_main_head}>
            <h6>
              {t("student_profile")}{" "}
              <span className={style.sp_main_head_span}>
                (
                {oneStudentProfile?.student?.profile_percentage?.toFixed(2) ??
                  0}{" "}
                {t("profile_completed")})
              </span>
            </h6>
            <div className={style.sp_main_other}>
              <div className={style.spmo_allow}>
                <h6 onClick={onToggle}>{t("student_message")}</h6>
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
              isGr={oneStudentProfile?.student?.query_lock_status}
            />
          </UserMemberContentWrapper>

          <HorizontalTabWrapper>
            {tabList.map((tab) => (
              <HorizontalTabCard
                key={tab?.id}
                tab={tab}
                isLink
                isActive={
                  tab.id === "about" && !searchParams.get("type")
                    ? true
                    : searchParams.get("type") === tab.id
                    ? true
                    : false
                }
                parentState={getQuery.state}
                url={`/${params.username}/student/profile${tab.urlKey}`}
              />
            ))}
          </HorizontalTabWrapper>
          <BorderBottom
            customStyleBorder={{
              marginTop: "0",
            }}
          />
          {!searchParams.get("type") && (
            <StudentProfileAbout student={oneStudentProfile?.student} />
          )}
          {searchParams.get("type") === "fees" && (
            <StudentFees sid={getQuery?.state?.studentId} isFeesData />
          )}
        </div>
      </StaffMemberConfig>
      {open && (
        <AllStudentMessageSend
          onClose={onToggle}
          messageId={getQuery.state?.messageId}
          instituteId={getQuery.state?.instituteId}
          headId={getQuery.state?.headId}
          isStudentProfile
          viewAs="FINANCE_MANAGER"
          sendStudentList={[getQuery.state?.studentId]}
        />
      )}
    </>
  );
};

export default StudentProfile;
