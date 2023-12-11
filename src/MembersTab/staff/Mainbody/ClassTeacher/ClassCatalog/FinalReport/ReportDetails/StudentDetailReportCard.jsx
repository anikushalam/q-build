import React, { useEffect, useState } from "react";
import style from "./StudentDetailReportCard.module.css";
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
import { useNavigate } from "react-router-dom";
import StudentReportCard from "../../../../../../../pdf/reportcard/StudentReportCard";
import { useTranslation } from "react-i18next";
const StudentDetailReportCard = ({
  oneStudentDetail,
  onRefetch,
  finalReportsSettings,
}) => {
  const { t } = useTranslation();
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
    <div className={style.s_detail_report}>
      <FileNotUpload run={run} msg={msg} setRun={setRun} />

      <h6 className={style.s_detail_report_heading}>
        {t("statement_of_grade")}
      </h6>

      <section className={style.srd_container}>
        <div className={style.srd_container_header}>
          <h6>
            STUDENT'S NAME: {oneStudentDetail?.studentFirstName}{" "}
            {oneStudentDetail?.studentMiddleName
              ? oneStudentDetail?.studentMiddleName
              : " "}{" "}
            {oneStudentDetail?.studentLastName}
          </h6>
          <h6>REGISTRATION ID: </h6>
          <h6>
            PROGRAMME:{" "}
            {classStudentReportCardNecessary?.student?.department?.dName ?? ""}
          </h6>
          <div className={style.srd_container_header_inner}>
            <h6>
              CLASS/SEMESTER:{" "}
              {`${classStudentReportCardNecessary?.student?.studentClass?.className} - ${classStudentReportCardNecessary?.student?.studentClass?.classTitle}`}
            </h6>
            <h6>
              MONTH & YEAR OF EXAMINATION:{" "}
              {classStudentReportCardNecessary?.student?.batches?.batchName ??
                ""}
            </h6>
          </div>
        </div>

        <img
          src={
            oneStudentDetail?.studentProfilePhoto
              ? `${imageShowUrl}/${oneStudentDetail?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          alt="profile photo"
        />
      </section>
      <div className={style.srd_column}>
        <h6
          style={{
            borderRight: "none",
          }}
        >
          SR. NO.
        </h6>
        <h6>
          COURSE
          <br />
          CODE
        </h6>
        <h6>COURSE</h6>
        <h6>CREDIT</h6>
        <h6>GRADES</h6>
        <h6>REMARKS</h6>
      </div>
      <div className={style.srd_column}>
        <h6>THEORY</h6>
      </div>
      {classStudentReportCard?.subjects?.map((subject, index) => (
        <div className={style.srd_column}>
          <h6
            style={{
              borderRight: "none",
            }}
          >
            {index + 1}
          </h6>
          <h6>{subject?.course_code ?? ""}</h6>
          <h6>{subject?.subjectName}</h6>
          <h6>{subject?.course_credit}</h6>
          <h6>
            {
              // finalReportsSettings?.gradeMarks
              //   ?
              subject?.showGrade
              // : subject?.subjectWiseTotal.toFixed(2)
            }
          </h6>
          <h6></h6>
        </div>
      ))}

      <div
        className={style.srd_column}
        style={{
          borderBottom: "1px solid black",
        }}
      >
        <h6
          style={{
            borderRight: "none",
            flex: "4.66",
          }}
        >
          TOTAL CREDITS
        </h6>

        <h6
          style={{
            flex: "0.9",
          }}
        ></h6>
        <h6
          style={{
            flex: "0.9",
          }}
        ></h6>
        <h6
          style={{
            flex: "0.9",
            borderRight: "1px solid black",
          }}
        ></h6>
      </div>
      <h6 className={style.srd_pre}>
        PRE = CANDIDATE HAS PASSED IN RE-EXAMINATION WITH NUMBER OF ATTEMPT
      </h6>
      <div className={style.srd_column}>
        <h6>SEMESTER PERFORMANCE INDEX</h6>
      </div>
      <div className={style.srd_spi_container}>
        <div className={style.srd_spi_container_column}>
          <div className={style.srd_column}>
            <h6
              style={{
                borderRight: "none",
                flex: "1",
              }}
            >
              EARNED GRADE POINTS
            </h6>

            <h6
              style={{
                flex: "1",
                borderRight: "1px solid black",
              }}
            >
              SPI
            </h6>
          </div>
          <div className={style.srd_column}>
            <h6
              style={{
                borderRight: "none",
                flex: "1",
              }}
            ></h6>

            <h6
              style={{
                flex: "1",
                borderRight: "1px solid black",
              }}
            ></h6>
          </div>
        </div>
        <div className={style.srd_spi_container_result}>
          <h6>RESULT:</h6>
        </div>
      </div>
      <div className={style.srd_column}>
        <h6>CUMULATIVE PERFORMANCE INDEX</h6>
      </div>
      <div className={style.srd_column}>
        <h6
          style={{
            borderRight: "none",
            flex: "2",
          }}
        >
          TOTAL CREDITS
        </h6>

        <h6
          style={{
            flex: "3",
          }}
        >
          TOTAL EARNED GRADE POINTS
        </h6>
        <h6
          style={{
            flex: "1",
            borderRight: "1px solid black",
          }}
        >
          CPI
        </h6>
      </div>
      <div
        className={style.srd_column}
        style={{
          borderBottom: "1px solid black",
        }}
      >
        <h6
          style={{
            borderRight: "none",
            flex: "2",
          }}
        ></h6>

        <h6
          style={{
            flex: "3",
          }}
        ></h6>
        <h6
          style={{
            flex: "1",
            borderRight: "1px solid black",
          }}
        ></h6>
      </div>
      {oneStudentDetail?.finalReportStatus === "No" && !finalize ? (
        <div className={style.srd_button_group}>
          <div onClick={onSubmitFinalize} className={style.srd_send}>
            {t("finalize")}
          </div>
          {/* {!edit ? (
            <div className={style.download} onClick={() => setEdit(true)}>
              {t("edit_")}
            </div>
          ) : (
            <div className={style.download} onClick={onSubmitBeforeGraceUpdate}>
              {t("update")}
            </div>
          )} */}
        </div>
      ) : (
        <div className={style.srd_button_group}>
          {!edit ? (
            <>
              {/* <div className={style.download} onClick={() => setEdit(true)}>
                {t("edit_")}
              </div> */}
              <div className={style.srd_send} onClick={handleDownload}>
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
};

export default StudentDetailReportCard;
