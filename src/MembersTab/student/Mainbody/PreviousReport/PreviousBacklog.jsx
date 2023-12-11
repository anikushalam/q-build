import React, { useState, useEffect } from "react";
import { useAllBacklogList } from "../../../../hooks/member_tab/student-api";
import style from "./PreviousReport.module.css";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../Loader/QvipleLoading";
const PreviousBacklog = ({ studentId }) => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [backlogList, setBacklogList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { allBacklogList, allBacklogListRefetch } = useAllBacklogList({
    data: {
      sid: studentId,
      page: page,
      limit: 10,
    },
    skip: !studentId,
  });
  useEffect(() => {
    if (studentId) {
      setShowingDataLoading(true);
      allBacklogListRefetch();
    }
  }, [studentId, page, allBacklogListRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (allBacklogList?.subjects) {
      setBacklogList((prevState) =>
        [
          ...new Set(
            [...prevState, ...allBacklogList?.subjects]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (allBacklogList?.subjects?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (allBacklogList?.subjects?.length === 10) setState(true);
    else setState(false);
  }, [allBacklogList?.subjects]);

  //   console.info("this is studnt ,mnsns", allBacklogList);
  return (
    <div className={style.previousReport}>
      {backlogList?.map((backlog, index) =>
        backlogList?.lenght === index + 1 ? (
          <div ref={ref} key={backlog?._id}>
            <section
              className={style.backlog_card}
              style={{
                marginBottom: "0.8rem",
              }}
            >
              <img
                src="/images/department/subjectIcon.svg"
                alt="subject icon"
              />
              <div className={style.backlog_card_text_container}>
                <div className={style.backlog_card_text}>
                  <h6>{backlog?.backlog_subject?.subjectName ?? ""}</h6>
                  <p>{backlog?.backlog_batch?.batchName ?? ""}</p>
                  <p>
                    {backlog?.backlog_class?.className ?? ""}{" "}
                    {backlog?.backlog_class?.classTitle ?? ""}
                  </p>
                </div>
                {backlog?.backlog_symbol === "Dropout" && (
                  <img
                    src="/images/dropout-backlog-icon.svg"
                    alt="dropout icon"
                  />
                )}
                {backlog?.backlog_symbol === "Clear" && (
                  <img src="/images/clear-backlog-icon.svg" alt="clear icon" />
                )}
              </div>
            </section>
          </div>
        ) : (
          <section
            className={style.backlog_card}
            key={backlog?._id}
            style={{
              marginBottom: "0.8rem",
            }}
          >
            <img src="/images/department/subjectIcon.svg" alt="subject icon" />
            <div className={style.backlog_card_text_container}>
              <div className={style.backlog_card_text}>
                <h6>{backlog?.backlog_subject?.subjectName ?? ""}</h6>
                <p>{backlog?.backlog_batch?.batchName ?? ""}</p>
                <p>
                  {backlog?.backlog_class?.className ?? ""}{" "}
                  {backlog?.backlog_class?.classTitle ?? ""}
                </p>
              </div>
              {backlog?.backlog_symbol === "Dropout" && (
                <img
                  src="/images/dropout-backlog-icon.svg"
                  alt="dropout icon"
                />
              )}
              {backlog?.backlog_symbol === "Clear" && (
                <img src="/images/clear-backlog-icon.svg" alt="clear icon" />
              )}
            </div>
          </section>
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default PreviousBacklog;
