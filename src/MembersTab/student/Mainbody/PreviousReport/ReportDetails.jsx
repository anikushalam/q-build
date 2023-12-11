import React, { useEffect, useState } from "react";
import style from "./ReportDetails.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ReportDetails.css";
import { useStudentPreviousReportCardQuery } from "../../../../services/student_members_ab/studentMembersTabApi";

function CustomTextProgressbar(props) {
  const { children, ...otherProps } = props;
  // console.info("this is info of percentage circular", otherProps.percentage);

  return (
    <div
      style={{
        position: "relative",
        width: "5vw",
        height: "5vw",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      >
        <CircularProgressbar
          {...otherProps}
          value={otherProps.percentage}
          styles={{
            path: {
              stroke:
                otherProps?.percentage >= 75.0
                  ? "green"
                  : otherProps.percentage >=
                      otherProps?.aggregatePassingMarks &&
                    otherProps.percentage < 75.0
                  ? "#FF7D05"
                  : "rgba(206, 206, 206, 0.76)",
            },
          }}
          // text={`${otherProps.percentage}%`}
        />
      </div>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

function ReportDetails({ yearId }) {
  const { data, refetch: dataRefetch } = useStudentPreviousReportCardQuery(
    {
      pid: yearId,
    },
    { skip: !yearId }
  );

  const starArray = [];

  useEffect(() => {
    if (yearId) dataRefetch();
  }, [yearId]);

  for (let i = 0; i < data?.finalReport?.behaviourStar; i++) {
    starArray.push("/images/bookmark-yellow.svg");
  }

  // console.info(data);
  return (
    <div className={style.reportDetails}>
      <div className={style.header}>
        <CustomTextProgressbar
          percentage={data?.finalReport?.totalPercentage?.toFixed(2) ?? 0}
        >
          <div className={style.progressFont}>
            <strong>
              {data?.finalReport?.is_grade
                ? data?.finalReport?.total?.spi
                : `${data?.finalReport?.totalPercentage?.toFixed(2) ?? 0}%`}
            </strong>
          </div>
          <div className={style.grade}>
            {data?.finalReport?.total?.showGradeTotal ?? ""}
          </div>
        </CustomTextProgressbar>

        <div className={style.text}>
          <div className={style.name}>
            <p>Name</p>
            <h6>
              {data?.student?.studentFirstName}{" "}
              {data?.student?.studentMiddleName}{" "}
              {data?.student?.studentLastName}
            </h6>
          </div>
          <div className={`${style.name} ${style.roll}`}>
            <p>Roll No.</p>
            <h6>{data?.student?.studentROLLNO}</h6>
          </div>
        </div>
      </div>

      <table className={style.table}>
        <thead>
          <tr className={style.tr}>
            <th className={style.th}>Subject</th>
            <th className={style.th}>Final Exam Marks</th>
            <th className={style.th}>Other</th>
            <th className={style.th}>Grace Marks</th>
            <th className={style.th}>Total</th>
          </tr>
        </thead>
        <tbody>
          {data?.finalReport?.subjects?.map((sub) => (
            <tr className={style.tr} key={sub?._id}>
              <td className={style.td}>{sub?.subjectName}</td>
              <td className={style.td}>
                {sub?.finalObtainMarks}/{sub?.finalTotalMarks}
              </td>
              <td className={style.td}>
                {sub?.otherObtainMarks}/{sub?.otherTotalMarks}
              </td>
              <td className={style.td}>{sub?.graceMarks}</td>

              <td className={style.td}>
                {data?.finalReport?.is_grade
                  ? sub?.showGrade
                  : `${sub?.subjectWiseTotal}/${sub?.totalMarks}`}
              </td>
            </tr>
          ))}
          <tr className={`${style.tr} ${style.trBottom}`}>
            <td className={`${style.td} ${style.total}`}>Total</td>
            <td className={`${style.td} ${style.total}`}>
              {data?.finalReport?.total?.finalTotal}
            </td>
            <td className={`${style.td} ${style.total}`}>
              {data?.finalReport?.total?.otherTotal}
            </td>
            <td className={`${style.td} ${style.total}`}>
              {data?.finalReport?.total?.graceTotal}
            </td>
            <td className={`${style.td} ${style.total}`}>
              {data?.finalReport?.is_grade
                ? data?.finalReport?.total?.showGradeTotal
                : `${data?.finalReport?.total?.allSubjectTotal}`}
            </td>
          </tr>
        </tbody>
      </table>

      <div className={style.attbehave}>
        <div className={style.attendence}>
          <p>
            Attendance :{" "}
            <span>
              {data?.finalReport?.attendance}/{" "}
              {data?.finalReport?.attendanceTotal}
            </span>
          </p>

          <h5>{data?.finalReport?.attendancePercentage} %</h5>

          <div />
        </div>
        <div className={style.attendence}>
          {starArray.length === 1 ? (
            <p>
              Behaviour : <span>Very Bad</span>
            </p>
          ) : starArray.length === 2 ? (
            <p>
              Behaviour : <span>Bad</span>{" "}
            </p>
          ) : starArray.length === 3 ? (
            <p>
              Behaviour : <span>Good</span>{" "}
            </p>
          ) : starArray.length === 4 ? (
            <p>
              Behaviour : <span>Very Good</span>{" "}
            </p>
          ) : starArray.length === 4 ? (
            <p>
              Behaviour : <span>Excellent</span>
            </p>
          ) : (
            <p></p>
          )}
          <div className={style.stars}>
            {starArray?.map((val) => (
              <img src={val} alt="" />
            ))}
          </div>
          <div />
        </div>
      </div>

      <ul className={style.improvelack}>
        <li className={style.improve}>
          <span>• Improvements - </span>
          {data?.finalReport?.behaviourImprovement}
        </li>
        <li className={style.improve}>
          <span>• Lack in - </span> {data?.finalReport?.behaviourLack}
        </li>
      </ul>
    </div>
  );
}

export default ReportDetails;
