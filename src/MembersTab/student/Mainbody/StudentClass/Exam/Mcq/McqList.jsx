import React, { useEffect, useState } from "react";
import { useStudentMcqAllTestset } from "../../../../../../hooks/member_tab/student-api";
import style from "../Exam.module.css";
import Testset from "./Testset";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";

const McqList = ({ sid }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [testsetList, setTestsetList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { studentMcqAllTestset, studentMcqAllTestsetRefetch } =
    useStudentMcqAllTestset({
      data: {
        sid: sid,
        page: page,
        limit: 10,
      },
      skip: !sid,
    });

  React.useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      studentMcqAllTestsetRefetch();
    }
  }, [sid, page, studentMcqAllTestsetRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (studentMcqAllTestset?.testsets) {
      setTestsetList([
        ...new Set([...testsetList, ...studentMcqAllTestset?.testsets]),
      ]);
      setShowingDataLoading(false);
    } else if (studentMcqAllTestset?.testsets?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
    if (studentMcqAllTestset?.testsets?.length === 10) setState(true);
    else setState(false);
  }, [studentMcqAllTestset?.testsets]);

  return (
    <div className={style.examDetail} style={{ border: "none" }}>
      <div className={style.detailTop}>
        <h6>{t("mcq_")}</h6>
      </div>
      <div className={style.items}>
        {testsetList?.map((testset, index) =>
          testsetList?.length === index + 1 ? (
            <div ref={ref} key={index} className={style.itemref}>
              <Testset testset={testset} key={testset?._id} />
            </div>
          ) : (
            <div key={index} className={style.itemref}>
              <Testset testset={testset} key={testset?._id} />
            </div>
          )
        )}
        {showingDataLoading && <QvipleLoading />}
        {!showingDataLoading && testsetList?.length === 0 && (
          <div className={style.noData}>
            <img src="/images/nodata.jpg" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default McqList;
