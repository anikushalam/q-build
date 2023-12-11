import React from "react";
import { useStudentMcqTestsetPreviewDetail } from "../../../../../../hooks/member_tab/student-api";
import style from "../Exam.module.css";
import { Link, useParams } from "react-router-dom";

const McqStartTestset = ({ tsid }) => {
  const params = useParams();
  const {
    studentMcqTestsetPreviewDetail,
    studentMcqTestsetPreviewDetailRefetch,
  } = useStudentMcqTestsetPreviewDetail({
    tsid: tsid,
    skip: !tsid,
  });

  React.useEffect(() => {
    if (tsid) studentMcqTestsetPreviewDetailRefetch();
  }, [tsid, studentMcqTestsetPreviewDetailRefetch]);
  // console.info("this sdhfsdh eysrdts", studentMcqTestsetPreviewDetail);
  return (
    <>
      <div className={style.startModal}>
        <div className={style.startModalBody}>
          <div className={style.row}>
            <p>Test Name :</p>
            <p className={style.span}>
              {studentMcqTestsetPreviewDetail?.testsets?.testExamName}
            </p>
          </div>

          <div className={style.row}>
            <p>Subject :</p>
            <p className={style.span}>
              {studentMcqTestsetPreviewDetail?.testsets?.testSubject}
            </p>
          </div>

          <div className={style.row}>
            <p>Marks :</p>
            <p className={style.span}>
              {studentMcqTestsetPreviewDetail?.testsets?.testTotalNumber}
            </p>
          </div>

          <div className={style.row}>
            <p>Date :</p>
            <p className={style.span}>
              {studentMcqTestsetPreviewDetail?.testsets?.testDate}
            </p>
          </div>

          <div className={style.row}>
            <p>From :</p>
            <p className={style.span}>
              {`${studentMcqTestsetPreviewDetail?.testsets?.testStart?.substr(
                0,
                5
              )} ${studentMcqTestsetPreviewDetail?.testsets?.testStart?.substr(
                9
              )}`}
            </p>
            <p>To :</p>
            <p className={style.span}>
              {`${studentMcqTestsetPreviewDetail?.testsets?.testEnd?.substr(
                0,
                5
              )} ${studentMcqTestsetPreviewDetail?.testsets?.testEnd?.substr(
                9
              )}`}
            </p>
          </div>
          <div className={style.row}>
            <p>Duration :</p>
            <p className={style.span}>
              {studentMcqTestsetPreviewDetail?.testsets?.testDuration} Min
            </p>
          </div>

          {!studentMcqTestsetPreviewDetail?.startExamTime && (
            <div className={style.mcqModalbtn1}>Start Exam</div>
          )}
          {studentMcqTestsetPreviewDetail?.startExamTime && (
            <Link
              to={`/q/${params.username}/student/${studentMcqTestsetPreviewDetail?.testsets?.testSubject}/mcq/test`}
              state={{ tsid: studentMcqTestsetPreviewDetail?.testsets?._id }}
            >
              <div className={style.mcqModalbtn}>Start Exam</div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default McqStartTestset;
