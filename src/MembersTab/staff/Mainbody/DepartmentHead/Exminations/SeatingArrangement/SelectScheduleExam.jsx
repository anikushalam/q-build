import React, { useEffect, useState } from "react";
import style from "./SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useLocation } from "react-router-dom";
import { useDepartmentExamDetail } from "../../../../../../hooks/member_tab/department-api";
import SubjectCard from "./SubjectCard";

const SelectScheduleExam = ({ onClose, onCurrentSubject }) => {
  const { t } = useTranslation();
  const [subjectList, setSubjectList] = React.useState([]);
  const [search, setSearch] = useState("");
  const [showingDataLoading, setShowingDataLoading] = React.useState(true);
  const getQuery = useLocation();
  const { departmentExamDetail, departmentExamDetailRefetch } =
    useDepartmentExamDetail({
      eid: getQuery.state?.examId,
      skip: !getQuery.state?.examId,
    });

  useEffect(() => {
    if (getQuery.state?.examId) departmentExamDetailRefetch();
  }, [getQuery.state?.examId]);

  useEffect(() => {
    if (departmentExamDetail?.oneExamDetail) {
      setSubjectList(departmentExamDetail?.oneExamDetail ?? []);
      setShowingDataLoading(false);
    } else if (departmentExamDetail?.oneExamDetail?.length === 0)
      setShowingDataLoading(false);
    else {
    }
  }, [departmentExamDetail?.oneExamDetail]);

  const onSearchEvent = (e) => {
    setSearch(e.target.value);
    // if (e.target.value) {
    //   const filterSubject = departmentExamDetail?.oneExamDetail?.filter(
    //     (subWithClass) => {
    //       let uniqueSubject = subWithClass?.subject?.filter((subject) => {
    //         if (
    // subject?.subjectName
    //   ?.toLowerCase()
    //   ?.includes(e.target.value?.toLowerCase())
    //         ) {
    //           return subject;
    //         } else {
    //           return null;
    //         }
    //       });
    //       console.info("uniqueSubject", uniqueSubject);
    //       if (uniqueSubject?.length) {
    //         return "ram";
    //       } else {
    //         return null;
    //       }
    //     }
    //   );
    //   console.info("filterSubject", filterSubject);
    //   setSubjectList(filterSubject);
    // } else {
    //   setSubjectList(departmentExamDetail?.oneExamDetail);
    // }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.seating_modal}>
        <section
          className={style.seating_modal_title_left}
          style={{
            position: "relative",
          }}
        >
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt=""
          />
          <h6>{t("select_scheduled_exam")}</h6>
          {/* <button className={style.select_select_btn} title="Select">
            {t("select")}
          </button> */}
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginBottom: "1rem",
          }}
        />

        <div
          className={style.search_container}
          style={{
            marginBottom: "0.5rem",
          }}
        >
          <div
            className={style.search_container_input}
            style={{
              width: "100%",
            }}
          >
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input
              type="text"
              placeholder={t("search-label")}
              style={{
                width: "100%",
              }}
              onChange={onSearchEvent}
              // onClick={onClick}
            />
          </div>
        </div>
        {subjectList?.map((subWithClass) =>
          subWithClass?.subject?.map((subject) =>
            search ? (
              subject?.subjectName
                ?.toLowerCase()
                ?.includes(search?.toLowerCase()) ? (
                <SubjectCard
                  key={subject?._id}
                  classMaster={subWithClass?.className}
                  subject={subject}
                  customCardStyle={{
                    width: "100%%",
                    cursor: "pointer",
                  }}
                  viewAs="SEATING"
                  onCurrentSubject={onCurrentSubject}
                />
              ) : (
                ""
              )
            ) : (
              <SubjectCard
                key={subject?._id}
                classMaster={subWithClass?.className}
                subject={subject}
                customCardStyle={{
                  width: "100%%",
                  cursor: "pointer",
                }}
                viewAs="SEATING"
                onCurrentSubject={onCurrentSubject}
              />
            )
          )
        )}
      </div>
    </PopupWrapper>
  );
};

export default SelectScheduleExam;
