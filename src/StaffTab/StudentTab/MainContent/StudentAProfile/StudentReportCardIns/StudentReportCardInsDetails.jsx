import React from "react";
import style from "./StudentReportCardInsDetails.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./StudentReportCardInsDetails.css";
import { useStudentPreviousReportCardQuery } from "../../../../../services/student_members_ab/studentMembersTabApi";
import { useTranslation } from "react-i18next";

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

function ReportDetails({ yearId, setYearId }) {
  const { t } = useTranslation();
  const { data } = useStudentPreviousReportCardQuery({
    pid: yearId,
  });

  const starArray = [];

  for (let i = 0; i < data?.finalReport[0]?.behaviourStar; i++) {
    starArray.push("/images/bookmark-yellow.svg");
  }

  return (
    <div className={style.reportDetails}>
      <div className={style.header}>
        <img
          className={style.closeIcon}
          src="/images/close-post-icon.svg"
          onClick={() => setYearId("")}
        />
        <CustomTextProgressbar
          percentage={data?.finalReport[0]?.totalPercentage.toFixed(2)}
        >
          <div className={style.progressFont}>
            <strong>{data?.finalReport[0]?.totalPercentage.toFixed(2)}%</strong>
          </div>
          <div className={style.grade}>A</div>
        </CustomTextProgressbar>

        <div className={style.text}>
          <div className={style.name}>
            <p>{t("name")}</p>
            <h6>
              {data?.finalReport[0]?.student?.studentFirstName}{" "}
              {data?.finalReport[0]?.student?.studentMiddleName}{" "}
              {data?.finalReport[0]?.student?.studentLastName}
            </h6>
          </div>
          <div className={`${style.name} ${style.roll}`}>
            <p>{t("roll_no")}</p>
            <h6>{data?.studentROLLNO}</h6>
          </div>
        </div>
      </div>

      <table className={style.table}>
        <thead>
          <tr className={style.tr}>
            <th className={style.th}>{t("subject")}</th>
            <th className={style.th}>{t("final_exam_marks")}</th>
            <th className={style.th}>{t("other")}</th>
            <th className={style.th}>{t("grace_marks")}</th>
            <th className={style.th}>{t("total")}</th>
          </tr>
        </thead>
        <tbody>
          {data?.finalReport[0]?.subjects?.map((sub) => (
            <tr className={style.tr} key={sub?._id}>
              <td className={style.td}>{sub?.subjectName}</td>
              <td className={style.td}>
                {sub?.finalExamObtain}/{sub?.finalExamTotal}
              </td>
              <td className={style.td}>
                {sub?.otherExamObtain}/{sub?.otherExamTotal}
              </td>
              <td className={style.td}>{sub?.graceMarks}</td>

              <td className={style.td}>
                {sub?.obtainTotalMarks}/{sub?.totalMarks}
              </td>
            </tr>
          ))}
          <tr className={`${style.tr} ${style.trBottom}`}>
            <td className={`${style.td} ${style.total}`}>{t("total")}</td>
            <td className={`${style.td} ${style.total}`}>
              {data?.finalReport[0]?.totalFinalExam}
            </td>
            <td className={`${style.td} ${style.total}`}>
              {data?.finalReport[0]?.totalOtherExam}
            </td>
            <td className={`${style.td} ${style.total}`}>
              {data?.finalReport[0]?.totalGraceExam}
            </td>
            <td className={`${style.td} ${style.total}`}>
              {data?.finalReport[0]?.totalTotalExam}
            </td>
          </tr>
        </tbody>
      </table>

      <div className={style.attbehave}>
        <div className={style.attendence}>
          <p>
            {t("attendance")} :{" "}
            <span>
              {data?.finalReport[0]?.attendance}/{" "}
              {data?.finalReport[0]?.attendanceTotal}
            </span>
          </p>

          <h5>{data?.finalReport[0]?.attendancePercentage} %</h5>

          <div />
        </div>
        <div className={style.attendence}>
          {starArray.length === 1 ? (
            <p>
              {t("behaviour")} : <span>{t("very_bad")}</span>
            </p>
          ) : starArray.length === 2 ? (
            <p>
              {t("behaviour")} : <span>{t("bad")}</span>{" "}
            </p>
          ) : starArray.length === 3 ? (
            <p>
              {t("behaviour")} : <span>{t("good")}</span>{" "}
            </p>
          ) : starArray.length === 4 ? (
            <p>
              {t("behaviour")} : <span>{t("very_good")}</span>{" "}
            </p>
          ) : starArray.length === 4 ? (
            <p>
              {t("behaviour")} : <span>{t("excellent")}</span>
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
          <span>• {t("improvements")} - </span>
          {data?.finalReport[0]?.behaviourImprovement}
        </li>
        <li className={style.improve}>
          <span>• {t("lack_in")} - </span> {data?.finalReport[0]?.behaviourLack}
        </li>
      </ul>
    </div>
  );
}

export default ReportDetails;
