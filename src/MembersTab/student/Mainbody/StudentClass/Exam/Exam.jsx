import React, { useState } from "react";
import style from "./Exam.module.css";
import ExamDetail from "./ExamDetail/ExamDetail";
import { useStudentExamListQuery } from "../../../../../services/joining/joinApi";
import { useEffect } from "react";
import ExamListItem from "./ExamListItem/ExamListItem";
import McqList from "./Mcq/McqList";

function Exam({ setIndex, studentId }) {
  const [viewDetail, setViewDetail] = useState("");
  const { data } = useStudentExamListQuery(studentId);
  const [examDetail, setExamDetail] = useState({});
  const [examList, setExamList] = useState([]);
  const [timeeout, setTimeeout] = useState(false);

  useEffect(() => {
    if (data) {
      setExamList([...examList, ...data?.exams]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeout(!timeeout);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.info(viewDetail);

  return (
    <>
      {viewDetail === "examDetail" && (
        <ExamDetail
          setViewDetail={setViewDetail}
          setIndex={setIndex}
          examDetail={examDetail}
          studentId={studentId}
        />
      )}
      {viewDetail === "" && examList?.length > 0 ? (
        <div className={style.assignment}>
          <div className={style.examList}>
            {examList?.map((exam, index) => (
              <ExamListItem
                setIndex={setIndex}
                setViewDetail={setViewDetail}
                examData={exam}
                clickExamDetail={() => setExamDetail(exam)}
                key={index}
              />
            ))}
          </div>
        </div>
      ) : viewDetail === "" && examList.length === 0 && timeeout === true ? (
        <div className={style.assignment}>
          <div className={style.noData}>
            <img src="/images/nodata.jpg" alt="" />
          </div>
        </div>
      ) : (
        viewDetail === "" && (
          <div className={style.loader}>
            <img src="/images/loader/loader-bg-white.gif" alt="" />
          </div>
        )
      )}
    </>
  );
}

export default Exam;
