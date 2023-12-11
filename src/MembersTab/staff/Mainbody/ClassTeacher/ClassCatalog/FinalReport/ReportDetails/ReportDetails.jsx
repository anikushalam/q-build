import React, { useEffect, useState } from "react";
import style from "./ReportDetails.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ReportDetails.css";
// import reportCardPdf from "../../../../../../../pdf/PdfReportCard";

import {
  useClassStudentBehavour,
  useClassStudentReportCard,
  useClassStudentReportCardAttendance,
  useClassStudentReportCardFinalize,
  useClassStudentReportCardFinalizeGrace,
  useClassStudentReportCardBeforeGrace,
  useClassStudentReportCardNecessary,
} from "../../../../../../../hooks/member_tab/class-api";
import { FileNotUpload } from "../../../../../../../validation/Snackbar";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
// import { Grade } from "./GradeSystem";
import QLoader from "../../../../../../../Loader/QLoader";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import StudentReportCard from "../../../../../../../pdf/reportcard/StudentReportCard";
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

function ReportDetails({ oneStudentDetail, onRefetch, finalReportsSettings }) {
  const navigate = useNavigate();
  const [run, setRun] = useState(false);
  const [msg, setMsg] = useState(null);
  const [finalize, setFinalize] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [downloadReport, setDownloadReport] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const { classStudentBehavour, classStudentBehavourRefetch } =
    useClassStudentBehavour({
      data: {
        sid: oneStudentDetail?._id,
      },
      skip:
        !finalReportsSettings?.behaviour || !oneStudentDetail?.studentBehaviour,
    });

  const { classStudentReportCard, classStudentReportCardRefetch } =
    useClassStudentReportCard({
      data: {
        sid: oneStudentDetail?._id,
      },
      skip: !oneStudentDetail?._id,
    });

  const {
    classStudentReportCardAttendance,
    classStudentReportCardAttendanceRefetch,
  } = useClassStudentReportCardAttendance({
    data: {
      sid: oneStudentDetail?._id,
    },
    skip: !finalReportsSettings?.attendance || !oneStudentDetail?._id,
  });

  const {
    classStudentReportCardNecessary,
    classStudentReportCardNecessaryRefetch,
  } = useClassStudentReportCardNecessary({
    data: {
      sid: oneStudentDetail?._id,
    },
    skip: !oneStudentDetail?._id,
  });

  useEffect(() => {
    if (oneStudentDetail?._id) {
      classStudentReportCardRefetch();
      classStudentReportCardAttendanceRefetch();
      classStudentReportCardNecessaryRefetch();
    }
  }, [
    oneStudentDetail?._id,
    classStudentReportCardRefetch,
    classStudentReportCardAttendanceRefetch,
    classStudentReportCardNecessaryRefetch,
  ]);

  useEffect(() => {
    if (oneStudentDetail?.studentBehaviour) classStudentBehavourRefetch();
  }, [oneStudentDetail?.studentBehaviour, classStudentBehavourRefetch]);

  // console.info("this is one student report card data", oneStudentDetail);
  // console.info(
  //   "this is one student report classStudentReportCardNecessary data",
  //   classStudentReportCardNecessary
  // );
  // console.info(
  //   "this is one student report card Attendance",
  //   classStudentReportCardAttendance
  // );

  // console.info("this is one student data", finalReportsSettings);

  const starArray = [];

  for (let i = 0; i < classStudentBehavour?.student?.ratings; i++) {
    starArray.push("/images/bookmark-yellow.svg");
  }

  const [classStudentReportCardFinalize] = useClassStudentReportCardFinalize();

  const onSubmitFinalize = () => {
    setDisabled((pre) => !pre);

    const reportCardFinalize = {
      totalFinalExam: parseFloat(
        classStudentReportCard?.total?.finalTotal?.toFixed(2)
      ),
      totalOtherExam: parseFloat(
        classStudentReportCard?.total?.otherTotal?.toFixed(2)
      ),
      totalGraceExam: parseFloat(
        classStudentReportCard?.total?.graceTotal?.toFixed(2)
      ),
      totalTotalExam: parseFloat(
        classStudentReportCard?.total?.allSubjectTotal?.toFixed(2)
      ),
      totalPercentage: parseFloat(
        classStudentReportCard?.totalPercantage?.toFixed(2)
      ),
      attendance: classStudentReportCardAttendance?.attendance?.totalPresent,
      attendanceTotal:
        classStudentReportCardAttendance?.attendance?.totalAttendance,
      attendancePercentage: parseFloat(
        classStudentReportCardAttendance?.attendance?.attendancePercentage
      ),
      behaviourStar: classStudentBehavour?.student?.ratings,
      behaviourImprovement: classStudentBehavour?.student?.improvements,
      behaviourLack: classStudentBehavour?.student?.lackIn,
      totalCutoff: classStudentReportCard?.total?.totalCutoff,
      subjects: [],
    };
    classStudentReportCard?.subjects?.map((sub) =>
      reportCardFinalize.subjects.push({
        _id: sub?._id,
        subjectName: sub?.subjectName,
        finalExamTotal: sub?.finalTotalMarks,
        finalExamObtain: parseFloat(sub?.finalObtainMarks?.toFixed(2)),
        otherExamTotal: sub?.otherTotalMarks,
        otherExamObtain: parseFloat(sub?.otherObtainMarks?.toFixed(2)),
        graceMarks: sub?.graceMarks,
        totalMarks: 100,
        obtainTotalMarks: parseFloat(sub?.subjectWiseTotal?.toFixed(2)),
        subjectCutoff: sub?.subjectCutoff,
      })
    );
    // console.info("This is final daa", reportCardFinalize);
    classStudentReportCardFinalize({
      sid: oneStudentDetail?._id,
      reportCardFinalize: reportCardFinalize,
    })
      .then((res) => {
        if (res.data.message === "All Final Exam Marks is not updated") {
          setRun(true);
          setMsg(res.data.message);
        } else {
          setFinalize(true);
          onRefetch();
          navigate(-1);
        }
        setDisabled((pre) => !pre);
      })
      .catch({});
  };

  const [classStudentReportCardFinalizeGrace] =
    useClassStudentReportCardFinalizeGrace();
  const [classStudentReportCardBeforeGrace] =
    useClassStudentReportCardBeforeGrace();

  const onInputClick = (val) => {
    if (edit) {
      if (subjects?.length) {
        const allIds = [];
        for (let sub of subjects) {
          allIds.push(sub._id);
        }
        if (!allIds?.includes(val)) {
          setSubjects([
            ...subjects,
            {
              _id: val,
              graceMarks: 0,
            },
          ]);
        }
      } else {
        setSubjects([
          ...subjects,
          {
            _id: val,
            graceMarks: 0,
          },
        ]);
      }
    }
  };

  const onInputChange = (e) => {
    for (let sub of subjects) {
      if (sub._id === e.target.name) {
        sub.graceMarks = parseInt(e.target.value);
      }
    }
  };

  const onSubmitGraceUpdate = () => {
    setDisabled((pre) => !pre);

    classStudentReportCardFinalizeGrace({
      sid: oneStudentDetail?._id,
      graceMarksUpdate: {
        subjects: subjects,
      },
    })
      .then(() => {
        // console.info(res);
        classStudentReportCardRefetch();
        setEdit(false);
        setSubjects([]);
        setDisabled((pre) => !pre);
      })
      .catch({});
    // console.info("THis is onlick", subjects);
  };

  const onSubmitBeforeGraceUpdate = () => {
    setDisabled((pre) => !pre);
    classStudentReportCardBeforeGrace({
      sid: oneStudentDetail?._id,
      graceMarksUpdate: {
        subjects: subjects,
      },
    })
      .then(() => {
        // console.info(res);
        classStudentReportCardRefetch();
        setEdit(false);
        setSubjects([]);
        setDisabled((pre) => !pre);
      })
      .catch({});
    // console.info("THis is onlick", subjects);
  };

  useEffect(() => {
    if (downloadReport) {
      const imgData = classStudentReportCardNecessary.student.institute
        .insProfilePhoto
        ? `${imageShowUrl}/${classStudentReportCardNecessary.student.institute.insProfilePhoto}`
        : "/images/certificate/logodemo.jpg";
      const imgAffliated = classStudentReportCardNecessary?.student?.institute
        ?.affliatedLogo
        ? `${imageShowUrl}/${classStudentReportCardNecessary?.student?.institute?.affliatedLogo}`
        : "/images/certificate/logodemo.jpg";
      const studentImg = classStudentReportCardNecessary?.student
        ?.studentProfilePhoto
        ? `${imageShowUrl}/${classStudentReportCardNecessary?.student?.studentProfilePhoto}`
        : "/images/member_tab/class/default_avatar.svg";
      // const remarks =
      //   classStudentReportCard?.totalPercantage?.toFixed(2) >= 75.0
      //     ? "Pass With Distinction"
      //     : classStudentReportCard?.totalPercantage?.toFixed(2) >= 65.0 &&
      //       classStudentReportCard?.totalPercantage?.toFixed(2) < 75.0
      //     ? "Pass Wtih First Class"
      //     : classStudentReportCard?.totalPercantage?.toFixed(2) >= 50.0 &&
      //       classStudentReportCard?.totalPercantage?.toFixed(2) < 65.0
      //     ? "Pass With Second Class"
      //     : classStudentReportCard?.totalPercantage?.toFixed(2) >=
      //         finalReportsSettings?.aggregatePassingPercentage &&
      //       classStudentReportCard?.totalPercantage?.toFixed(2) < 50.0
      //     ? "Pass With Third Class"
      //     : "FAIL";
      // const studentBehaviour =
      //   classStudentBehavour?.student?.ratings === 5
      //     ? "Excellent"
      //     : classStudentBehavour?.student?.ratings === 4
      //     ? "Very Good"
      //     : classStudentBehavour?.student?.ratings === 3
      //     ? "Good"
      //     : classStudentBehavour?.student?.ratings === 2
      //     ? "Bad"
      //     : classStudentBehavour?.student?.ratings === 1
      //     ? "Very Bad"
      //     : "";

      // const studentBehaviourImprovements = classStudentBehavour?.student
      //   ?.improvements
      //   ? classStudentBehavour.student.improvements
      //   : "";
      // const studentBehaviourLackIn = classStudentBehavour?.student?.lackIn
      //   ? classStudentBehavour.student.lackIn
      //   : "";
      // reportCardPdf(
      //   imgData,
      //   remarks,
      //   oneStudentDetail,
      //   classStudentReportCard,
      //   studentBehaviour,
      //   studentBehaviourImprovements,
      //   studentBehaviourLackIn,
      //   classStudentReportCardAttendance,
      //   classStudentReportCardNecessary,
      //   finalReportsSettings?.gradeMarks
      // );
      StudentReportCard(
        imgData,
        imgAffliated,
        studentImg,
        oneStudentDetail,
        classStudentReportCard,
        classStudentReportCardNecessary,
        finalReportsSettings?.gradeMarks
      );
      setDisabled((pre) => !pre);
      window.location.reload();
    }
  }, [downloadReport]);
  const handleDownload = () => {
    setDisabled((pre) => !pre);
    setDownloadReport(true);
    // setTimeout(() => {
    // }, 2000);
    // console.info("THis is click");
  };

  // console.info(classStudentReportCardNecessary?.student);

  return (
    <div className={style.reportDetails}>
      <FileNotUpload run={run} msg={msg} setRun={setRun} />
      <div className={style.header}>
        <CustomTextProgressbar
          percentage={classStudentReportCard?.totalPercantage?.toFixed(2)}
          aggregatePassingMarks={classStudentReportCard?.total?.totalCutoff}
          gradeShow={classStudentReportCard?.total?.showGradeTotal}
        >
          <div className={style.progressFont}>
            <strong>
              {finalReportsSettings?.gradeMarks
                ? classStudentReportCard?.total?.spi ?? 0
                : `${
                    classStudentReportCard?.totalPercantage?.toFixed(2) ?? 0
                  }%`}
            </strong>
          </div>
          <div className={style.grade}>
            {classStudentReportCard?.total?.showGradeTotal ?? ""}
          </div>
        </CustomTextProgressbar>

        <div className={style.text}>
          <div className={style.name}>
            <p>{t("name")}</p>
            <h6>
              {" "}
              {oneStudentDetail?.studentFirstName}{" "}
              {oneStudentDetail?.studentMiddleName
                ? oneStudentDetail?.studentMiddleName
                : " "}{" "}
              {oneStudentDetail?.studentLastName}
            </h6>
          </div>
          <div className={`${style.name} ${style.roll}`}>
            <p>{t("roll_no")}</p>
            <h6>
              {oneStudentDetail?.studentROLLNO > 9
                ? oneStudentDetail?.studentROLLNO
                : `0${oneStudentDetail?.studentROLLNO}`}
            </h6>
          </div>
        </div>
      </div>

      <table className={style.tableMain}>
        <thead className={style.tableMainThead}>
          <tr className={style.tableHead}>
            <th>{t("subject")}</th>
            <th>{t("final_exam_marks")}</th>
            <th>{t("other")}</th>
            <th>{t("grace_marks")}</th>
            <th>{t("total")}</th>
          </tr>
        </thead>
        <tbody>
          {classStudentReportCard?.subjects?.map((sub) => (
            <tr className={style.tableBodySubject} key={sub?._id}>
              <td>{sub?.subjectName}</td>
              <td>
                {sub?.finalObtainMarks?.toFixed(2)}/{sub?.finalTotalMarks}
              </td>
              <td>
                {sub?.otherObtainMarks?.toFixed(2)}/{sub?.otherTotalMarks}
              </td>
              <input
                type="number"
                name={sub?._id}
                defaultValue={sub?.graceMarks}
                onClick={() => onInputClick(sub?._id)}
                onChange={onInputChange}
                readOnly={!edit}
              />
              <td
                className={
                  sub?.subjectCutoff >
                  Math.round(sub?.subjectWiseTotal?.toFixed(2))
                    ? style.report_fail_color
                    : ""
                }
              >
                {sub?.showGrade
                  ? sub?.showGrade
                  : // ? Grade(sub?.subjectWiseTotal?.toFixed(2), sub?.subjectCutoff)
                    `${sub?.subjectWiseTotal?.toFixed(2)}
                /100`}
              </td>
            </tr>
          ))}
          <tr className={style.tableBodyTotal}>
            <td>{t("total")}</td>
            <td>{classStudentReportCard?.total?.finalTotal?.toFixed(2)}</td>
            <td>{classStudentReportCard?.total?.otherTotal?.toFixed(2)}</td>
            <td>{classStudentReportCard?.total?.graceTotal?.toFixed(2)}</td>
            <td>
              {finalReportsSettings?.gradeMarks
                ? classStudentReportCard?.total?.showGradeTotal
                : classStudentReportCard?.total?.allSubjectTotal?.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      <div className={style.attbehave}>
        <div className={style.attendence}>
          <p>
            {t("attendance")} :{" "}
            <span>
              {classStudentReportCardAttendance?.attendance?.totalPresent}/
              {classStudentReportCardAttendance?.attendance?.totalAttendance}
            </span>
          </p>
          <h5>
            {classStudentReportCardAttendance?.attendance
              ?.attendancePercentage !== "NaN"
              ? classStudentReportCardAttendance?.attendance
                  ?.attendancePercentage
              : 0}
            %
          </h5>
          <div />
        </div>
        <div className={style.attendence}>
          <p>
            {t("behaviour")} :
            <span>
              {classStudentBehavour?.student?.ratings === 5
                ? "Excellent"
                : classStudentBehavour?.student?.ratings === 4
                ? "Very Good"
                : classStudentBehavour?.student?.ratings === 3
                ? "Good"
                : classStudentBehavour?.student?.ratings === 2
                ? "Bad"
                : classStudentBehavour?.student?.ratings === 1
                ? "Very Bad"
                : ""}
            </span>
          </p>
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
          <span>{t("improvements")} - </span>
          {classStudentBehavour?.student?.improvements}
        </li>
        <li className={style.improve}>
          <span>{t("lack_in")} - </span>
          {classStudentBehavour?.student?.lackIn}
        </li>
      </ul>

      {oneStudentDetail?.finalReportStatus === "No" && !finalize ? (
        <div className={style.buttons}>
          <div onClick={onSubmitFinalize} className={style.send}>
            {t("finalize")}
          </div>
          {!edit ? (
            <div className={style.download} onClick={() => setEdit(true)}>
              {t("edit_")}
            </div>
          ) : (
            <div className={style.download} onClick={onSubmitBeforeGraceUpdate}>
              {t("update")}
            </div>
          )}
        </div>
      ) : (
        <div className={style.buttons}>
          {!edit ? (
            <>
              <div className={style.download} onClick={() => setEdit(true)}>
                {t("edit_")}
              </div>
              <div className={style.send} onClick={handleDownload}>
                {t("download")}
              </div>
            </>
          ) : (
            <div className={style.download} onClick={onSubmitGraceUpdate}>
              {t("update")}
            </div>
          )}
        </div>
      )}

      {disabled && <QLoader />}
    </div>
  );
}

export default ReportDetails;
