import React, { useEffect, useState } from "react";
import StanderdItem from "./StanderdItem";
import style from "./Standerds.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useDepartmentBacklogClassMaster } from "../../../../../../hooks/member_tab/department-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTab from "../../Competetions/CompetitionTab/UniversalTab";
import ExamFees from "./ExamFees";
import ExamList from "./ExamList";
import { useParams, useLocation } from "react-router-dom";

function Standerds({ did, carryParentState, viewAs }) {
  const { t } = useTranslation();
  const params = useParams();
  const getQuery = useLocation();
  const tabList = [
    {
      name: t("stands"),
      id: 0,
      url:
        viewAs === "EXAMINATION_SECTION"
          ? `member/exam?a=department&n=backlog&standard`
          : `member/department/${params.deptname}?a=backlog&standard`,
    },
    {
      name: t("exam_fees"),
      id: 1,
      url:
        viewAs === "EXAMINATION_SECTION"
          ? `member/exam?a=department&n=backlog&fees`
          : `member/department/${params.deptname}?a=backlog&fees`,
    },
    {
      name: t("exams"),
      id: 2,
      url:
        viewAs === "EXAMINATION_SECTION"
          ? `member/exam?a=department&n=backlog&exam`
          : `member/department/${params.deptname}?a=backlog&exam`,
    },
  ];
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [classMasterList, setClassMasterList] = useState([]);

  const { backlogClassMaster, backlogClassMasterRefetch } =
    useDepartmentBacklogClassMaster({
      data: {
        did: did,
        page: page,
        limit: 10,
      },
      skip: !did,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (did) {
      setShowingDataLoading(true);
      backlogClassMasterRefetch();
    }
  }, [page, did, backlogClassMasterRefetch]);

  useEffect(() => {
    if (backlogClassMaster?.masters) {
      const uniquePost = [...classMasterList, ...backlogClassMaster?.masters];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setClassMasterList(uniqueRefind);
      setShowingDataLoading(false);
    } else if (backlogClassMaster?.masters?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (backlogClassMaster?.masters?.length === 10) setState(true);
    else setState(false);
  }, [backlogClassMaster?.masters]);

  // console.info("this is standard", backlogClassMaster);
  return (
    <div className={style.standerds}>
      <h6 className={style.standerdsheading}>{t("stands")}</h6>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={
          getQuery.search?.substring(3) === "backlog&standard" ||
          getQuery.search?.substring(3) === "department&n=backlog&standard"
            ? 0
            : getQuery.search?.substring(3) === "backlog&fees" ||
              getQuery.search?.substring(3) === "department&n=backlog&fees"
            ? 1
            : 2
        }
        showAs={true}
        customStyleLink={{
          width: "33.3%",
        }}
        carryParentState={carryParentState}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.7rem",
        }}
      />
      {(getQuery.search?.substring(3) === "backlog&standard" ||
        getQuery.search?.substring(3) === "department&n=backlog&standard") && (
        <>
          {classMasterList?.map((classMaster, index) =>
            classMasterList?.length === index + 1 ? (
              <div ref={ref} key={classMaster?._id}>
                <StanderdItem
                  classMaster={classMaster}
                  carryParentState={carryParentState}
                  viewAs={viewAs}
                />
              </div>
            ) : (
              <StanderdItem
                key={classMaster?._id}
                classMaster={classMaster}
                viewAs={viewAs}
                carryParentState={carryParentState}
              />
            )
          )}
          {showingDataLoading && <QvipleLoading />}
        </>
      )}
      {(getQuery.search?.substring(3) === "backlog&fees" ||
        getQuery.search?.substring(3) === "department&n=backlog&fees") && (
        <ExamFees did={did} />
      )}
      {(getQuery.search?.substring(3) === "backlog&exam" ||
        getQuery.search?.substring(3) === "department&n=backlog&exam") && (
        <ExamList
          did={did}
          viewAs={viewAs}
          carryParentState={carryParentState}
        />
      )}
    </div>
  );
}

export default Standerds;
