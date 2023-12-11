import React, { useEffect, useState } from "react";
import {
  useSubjectAllExam,
  useSubjectMcqTestsetTakenList,
} from "../../../../../hooks/member_tab/subject-api";
import { FileNotUpload } from "../../../../../validation/Snackbar";
import MarkDetails from "../MarkDetails/MarkDetails";
import McqMarkDetails from "../MarkDetails/McqMarkDetail";
import style from "../SubjectTeacher.module.css";
import McqWrapper from "../SubjectTeacherMCQ/McqWrapper";
import { useTranslation } from "react-i18next";
import Item from "./Item";
// import { dateTimeComparison, timeComparison } from "./time_comparison";

function SubjectMarks({ sid, isDepartment }) {
  const { t } = useTranslation();
  const [markindex, setMarkIndex] = React.useState(0);
  const [examView, setExamView] = useState(null);
  const [run, setRun] = useState(false);
  const [msg, setMsg] = useState("");
  const { subjectAllExam, subjectAllExamRefetch } = useSubjectAllExam({
    data: { sid: sid, page: 1, limit: 50 },
    skip: !sid,
  });
  const { subjectMcqTestsetTakenList, subjectMcqTestsetTakenListRefetch } =
    useSubjectMcqTestsetTakenList({
      data: { sid: sid, page: 1, limit: 50 },
      skip: !sid,
    });

  useEffect(() => {
    if (sid) {
      subjectAllExamRefetch();
      subjectMcqTestsetTakenListRefetch();
    }
  }, [sid, subjectAllExamRefetch, subjectMcqTestsetTakenListRefetch]);

  // console.info("This is all exam", subjectMcqTestsetTakenList);
  const onExamView = (val) => {
    setMarkIndex(1);
    setExamView(val);
  };

  const onMcqExamView = (val) => {
    // const currentDate = new Date();
    // console.info(val);
    // dateTimeComparison();
    // const examTime = `${val?.testDate}T${val?.testStart}`;
    // const entryTime = dateTimeComparison(JSON.stringify(currentDate), examTime);
    // const exitTime = timeComparison(
    //   JSON.stringify(currentDate),
    //   testset?.testEnd
    // );
    // const toIso = event.toISOString();
    // if (
    //   val?.testDate ===
    //   `${toIso.substr(8, 2)}/${toIso.substr(5, 2)}/${toIso.substr(0, 4)}`
    // ){

    // }
    // console.info(toIso);
    // setMsg("Mcq test is not over till date and time");
    // setRun(true);
    setMarkIndex(2);
    setExamView(val);
  };
  return (
    <>
      {markindex === 0 && (
        <div className={style.exam_tab_space}>
          <McqWrapper isDepartment={isDepartment}>
            <div className={style.all_exam_main_container}>
              <div className={style.exam_container}>
                <h4 className={style.exam_heading}>{t("exams")}</h4>
                {subjectAllExam?.subject?.map((exam) => (
                  <Item exam={exam} key={exam?._id} onExamView={onExamView} />
                ))}
              </div>
              <div className={style.exam_container}>
                <h4 className={style.exam_heading}>{t("mcq_mock_test")}</h4>

                {subjectMcqTestsetTakenList?.allotedTestSet?.map((testset) => (
                  <div
                    className={style.sidebarheader}
                    onClick={() => onMcqExamView(testset)}
                    key={testset?._id}
                  >
                    <img src="/images/members/mcq-exam-icon1.svg" alt="" />
                    <div className={style.text}>
                      <div className={style.insName}>
                        <h6>{testset?.testExamName}</h6>
                        <p
                          className={style.exam_mcq_date}
                          style={{ marginTop: "0.1vw" }}
                        >
                          {testset?.testDate}
                        </p>
                      </div>
                    </div>
                    <div className={style.date}>
                      <h6>{testset?.testTotalNumber}</h6>

                      <p>
                        {`${testset?.testStart?.substr(
                          0,
                          5
                        )} ${testset?.testStart?.substr(9)}`}{" "}
                        to{" "}
                        {`${testset?.testEnd?.substr(
                          0,
                          5
                        )} ${testset?.testEnd?.substr(9)}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </McqWrapper>
        </div>
      )}

      {markindex === 1 && (
        <MarkDetails
          examView={examView}
          sid={sid}
          isDepartment={isDepartment}
        />
      )}
      {markindex === 2 && <McqMarkDetails examView={examView} />}
      <FileNotUpload msg={msg} run={run} setRun={setRun} />
    </>
  );
}

export default SubjectMarks;
