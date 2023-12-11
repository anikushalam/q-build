import React, { useEffect, useState } from "react";
import { useOneDepartmentAllSubjectMaster } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { useTranslation } from "react-i18next";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import style from "../../DepartmentHead/Exminations/Exminations.module.css";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import SubjectCreditCard from "./SubjectCreditCard";
const SubjectCredit = ({ did, instituteId }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [subject, setSubject] = useState([]);
  const [noAnySearch, setNoAnySearch] = useState(false);
  const { allSubjectMaster, allSubjectMasterRefetch } =
    useOneDepartmentAllSubjectMaster({
      data: {
        id: instituteId,
        did: did,
      },
      skip: !instituteId,
    });
  useEffect(() => {
    if (instituteId && did) {
      allSubjectMasterRefetch();
      setShowingDataLoading(true);
    }
  }, [did, instituteId, allSubjectMasterRefetch]);

  useEffect(() => {
    if (allSubjectMaster?.subjectMaster?.length) {
      setSubject(allSubjectMaster?.subjectMaster);
      setShowingDataLoading(false);
    } else if (allSubjectMaster?.subjectMaster?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [allSubjectMaster?.subjectMaster]);

  const onSearchEvent = (e) => {
    if (e.target.value) {
      const filterFees = allSubjectMaster?.subjectMaster?.filter((sub) => {
        if (
          sub?.subjectName
            ?.toLowerCase()
            ?.includes(e.target.value?.toLowerCase())
        ) {
          return sub;
        } else {
          return null;
        }
      });
      if (filterFees?.length === 0) {
        setNoAnySearch(true);
      } else {
        setNoAnySearch(false);
      }
      setSubject(filterFees);
    } else {
      setNoAnySearch(false);
      setSubject(allSubjectMaster?.subjectMaster);
    }
  };
  return (
    <>
      <div className={style.exam_container}>
        <div className={style.with_search}>
          <h6>{t("subject_master_list")}</h6>
          <section className={style.search_container}>
            <div className={style.search_container_input}>
              <img
                className={style.searchIcon}
                alt="search icon"
                src="/images/search-dash-icon.svg"
              />
              <input
                type="text"
                placeholder="Search subjects..."
                onChange={onSearchEvent}
              />
            </div>
          </section>
        </div>
        <BorderBottom
          customStyle={{
            marginTop: "0.5rem",
            marginBottom: "0.6rem",
            width: "100%",
          }}
        />

        {subject?.map((sub) => (
          <SubjectCreditCard sub={sub} onRefetch={allSubjectMasterRefetch} />
        ))}
        {!showingDataLoading && !allSubjectMaster?.subjectMaster?.length && (
          <EmptyInfo
            customStyleContainer={{
              marginTop: "9rem",
            }}
            title={"No any subject master found."}
            subtitle={"Please make sure you have created subject master."}
          />
        )}
        {noAnySearch && (
          <EmptyInfo
            customStyleContainer={{
              marginTop: "9rem",
            }}
            title={"No search found!"}
          />
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </>
  );
};

export default SubjectCredit;
