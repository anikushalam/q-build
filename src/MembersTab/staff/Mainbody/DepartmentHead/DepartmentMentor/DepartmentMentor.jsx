import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import UniversalTab from "../Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../Hostel/Hostel.module.css";
import DepartmentMentorDetail from "./DepartmentMentorDetail/DepartmentMentorDetail";
import Mentor from "./Mentor/Mentor";
import QueryDetail from "./DepartmentQueries/QueryDetail";
import DepartmentQueries from "./DepartmentQueries/DepartmentQueries";
// import DepartmentFeedback from "./DepartmentFeedback/DepartmentFeedback";
// import FeedbackQuestion from "./DepartmentFeedback/FeedbackQuestion";
// import FeedbackMonthDetail from "./DepartmentFeedback/FeedbackMonthDetail";
// import FeedbackMentor from "./DepartmentFeedback/FeedbackMentor";
const DepartmentMentor = ({ carryParentState, did, instituteId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const params = useParams();

  const tabList = [
    {
      name: t("mentors"),
      id: 0,
      url: `member/department/${params.deptname}?a=mentor`,
    },
    {
      name: t("queries"),
      id: 1,
      url: `member/department/${params.deptname}?a=mentor&n=queries`,
    },
    // {
    //   name: t("feedback"),
    //   id: 2,
    //   url: `member/department/${params.deptname}?a=mentor&n=feedback`,
    // },
  ];

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  return (
    <>
      {(getQuery.search?.substring(3) === "mentor" ||
        getQuery.search?.substring(3) === "mentor&n=queries") && (
        <>
          <div
            className={style.with_search}
            style={{
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <img
              src="/images/arrow-left-fees-icon.svg"
              onClick={onBackWithArrowLeft}
              alt="go to previous tab"
              title="Go Back"
              style={{
                cursor: "pointer",
              }}
            />
            <h6>{t("mentoring")}</h6>
          </div>

          <UniversalTab
            tabList={tabList}
            activeIndexTab={
              getQuery.search?.substring(3) === "mentor"
                ? 0
                : getQuery.search?.substring(3) === "mentor&n=queries"
                ? 1
                : 2
            }
            showAs={true}
            customStyleLink={{
              width: "50%",
            }}
            carryParentState={carryParentState}
          />
          <BorderBottom
            customStyle={{
              width: "100%",
              marginBottom: "0.5rem",
            }}
          />
          {getQuery.search?.substring(3) === "mentor" && (
            <Mentor
              instituteId={instituteId}
              did={did}
              carryParentState={carryParentState}
            />
          )}
          {getQuery.search?.substring(3) === "mentor&n=queries" && (
            <DepartmentQueries
              did={did}
              carryParentState={carryParentState}
              queryFlow="By_Department_Head"
            />
          )}
          {/* {getQuery.search?.substring(3) === "mentor&n=feedback" && <DepartmentFeedback />} */}
        </>
      )}
      {getQuery.search?.substring(3) === "mentor&n=detail" && (
        <DepartmentMentorDetail did={did} />
      )}
      {getQuery.search?.substring(3) === "mentor&n=queries&query" && (
        <QueryDetail queryFlow="By_Department_Head" />
      )}
      {/* {getQuery.search?.substring(3) === "mentor&n=feedback&question" && <FeedbackQuestion />} */}
      {/* {getQuery.search?.substring(3) === "mentor&n=feedback&month" && <FeedbackMonthDetail />} */}
      {/* {getQuery.search?.substring(3) === "mentor&n=feedback&mentor" && (
        <FeedbackMentor />
      )} */}
    </>
  );
};

export default DepartmentMentor;
