import React, { useEffect, useState } from "react";
import style from "../Standerds/Standerds.module.css";
import SubjectItem from "./SubjectItem";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useDepartmentBacklogSubjectMaster } from "../../../../../../hooks/member_tab/department-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { useLocation } from "react-router-dom";

function Subjects({ carryParentState, viewAs }) {
  const { t } = useTranslation();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [subjectMasterList, setSubjectMasterList] = useState([]);
  const getQuery = useLocation();
  const { backlogSubjectMaster, backlogSubjectMasterRefetch } =
    useDepartmentBacklogSubjectMaster({
      data: {
        cmid: getQuery.state?.clsId,
        page: page,
        limit: 10,
      },
      skip: !getQuery.state?.clsId,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getQuery.state?.clsId) {
      setShowingDataLoading(true);
      backlogSubjectMasterRefetch();
    }
  }, [page, getQuery.state?.clsId, backlogSubjectMasterRefetch]);

  useEffect(() => {
    if (backlogSubjectMaster?.subjects) {
      const uniquePost = [
        ...subjectMasterList,
        ...backlogSubjectMaster?.subjects,
      ];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setSubjectMasterList(uniqueRefind);
      setShowingDataLoading(false);
    } else if (backlogSubjectMaster?.subjects?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (backlogSubjectMaster?.subjects?.length === 10) setState(true);
    else setState(false);
  }, [backlogSubjectMaster?.subjects]);
  // console.info("thisnbfsdvmfsdf", backlogSubjectMaster);
  return (
    <div className={style.standerds}>
      <h6 className={style.standerdsheading}>{t("subjects")}</h6>

      {subjectMasterList?.map((subMaster, index) =>
        subjectMasterList?.length === index + 1 ? (
          <div ref={ref} key={subMaster?._id}>
            <SubjectItem
              carryParentState={carryParentState}
              subMaster={subMaster}
              viewAs={viewAs}
            />
          </div>
        ) : (
          <SubjectItem
            key={subMaster?._id}
            carryParentState={carryParentState}
            subMaster={subMaster}
            viewAs={viewAs}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
}

export default Subjects;
