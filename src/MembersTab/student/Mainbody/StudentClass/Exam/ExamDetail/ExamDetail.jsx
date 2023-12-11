import React from "react";
import style from "../Exam.module.css";
import { useSubjectListQuery } from "../../../../../../services/joining/joinApi";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

function Item({
  name,
  date,
  startTime,
  endTime,
  obtainedMarks,
  totalMarks,
  seating,
}) {
  const { t } = useTranslation();
  const splitDate = date?.split("/");
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <div
        className={style.subject}
        style={{ ...BUTTON_WRAPPER_STYLES, flexDirection: "column" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className={style.subjectLeft}>
            <img src="/images/members/exam-icon.svg" alt="" />
            <div className={style.text}>
              <h6>{name}</h6>
              <p>
                {splitDate[0]}{" "}
                {splitDate[1] < "10"
                  ? months[splitDate[1]?.split("")[1] - 1]
                  : months[splitDate[1] - 1]}{" "}
                {splitDate[2]}
              </p>
            </div>
          </div>
          <div className={style.subjectRight}>
            <h6>
              {obtainedMarks}/{totalMarks}
            </h6>
            <p>
              {startTime} to {endTime}
            </p>
          </div>
        </div>
        <div className={style.seating}>
          <h6 className={style._arrangements}>
            {t("seating_arrangements")} :{" "}
          </h6>
          <p>{seating?.[0]?.seat_block_name ?? ""}</p>
          <p>{seating?.[0]?.seat_block_class?.classTitle ?? ""}</p>
        </div>
      </div>
    </>
  );
}

function ExamDetail({ setViewDetail, studentId, examDetail }) {
  const { t } = useTranslation();
  const { data } = useSubjectListQuery({
    sid: studentId,
    eid: examDetail?._id,
  });
  const [subjectList, setSubjectList] = useState([]);
  const [timeeout, setTimeeout] = useState(false);

  useEffect(() => {
    if (data) {
      setSubjectList(data?.subjects);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeout(!timeeout);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={style.examDetail}>
        <div className={style.detailTop}>
          <h6>{examDetail?.examName}</h6>
          <img
            src="/images/close-post-icon.svg"
            alt=""
            onClick={() => {
              setViewDetail("");
            }}
          />
        </div>
        <div className={style.detailTop2}>
          {/* <p>
            {" "}
            {t("weightage")} {examDetail?.examWeight}%
          </p> */}
          <p>
            {examDetail?.examType} {t("exam")}{" "}
          </p>
        </div>

        <div className={style.items}>
          {subjectList?.length > 0 ? (
            subjectList?.map((subject, index) => (
              <Item
                key={index}
                name={subject?.subjectName}
                date={subject?.date}
                endTime={subject?.endTime}
                startTime={subject?.startTime}
                obtainedMarks={subject?.obtainMarks}
                totalMarks={subject?.totalMarks}
                seating={subject?.seating}
              />
            ))
          ) : subjectList.length === 0 && timeeout === true ? (
            <div className={style.noData}>
              <img src="/images/nodata.jpg" alt="" />
            </div>
          ) : (
            <div className={style.loader2}>
              <img src="/images/loader/loader-bg-white.gif" alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ExamDetail;
