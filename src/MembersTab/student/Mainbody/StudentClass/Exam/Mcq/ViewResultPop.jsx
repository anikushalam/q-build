import React from "react";
import { useStudentMcqTestsetPreviewDetail } from "../../../../../../hooks/member_tab/student-api";
import style from "./SubmitExamModal/SubmitExamModal.module.css";
import { Link, useParams } from "react-router-dom";
const ViewResultPop = ({ tsid }) => {
  const {
    studentMcqTestsetPreviewDetail,
    studentMcqTestsetPreviewDetailRefetch,
  } = useStudentMcqTestsetPreviewDetail({
    tsid: tsid,
    skip: !tsid,
  });

  const params = useParams();
  React.useEffect(() => {
    if (tsid) studentMcqTestsetPreviewDetailRefetch();
  }, [tsid, studentMcqTestsetPreviewDetailRefetch]);

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
              {" "}
              {studentMcqTestsetPreviewDetail?.testsets?.testSubject}
            </p>
          </div>
          <div className={style.row}>
            <p>Marks :</p>
            <p className={style.span}>
              {" "}
              {studentMcqTestsetPreviewDetail?.testsets?.testTotalNumber}
            </p>
          </div>
          <div className={style.row}>
            <p>Date :</p>
            <p className={style.span}>
              {" "}
              {studentMcqTestsetPreviewDetail?.testsets?.testDate}
            </p>
          </div>
          <div className={style.row}>
            <p>Duration :</p>
            <p className={style.span}>
              {studentMcqTestsetPreviewDetail?.testsets?.testDuration} Min
            </p>
          </div>
          <div className={style.row}>
            <p>Marks obtained :</p>
            <div className={style.pentagonContainer}>
              <img
                className={style.pentagon1}
                src="/images/mcq/Polygon1.svg"
                alt=""
              />
              <img
                className={style.pentagon2}
                src="/images/mcq/Polygon2.svg"
                alt=""
              />
              <p className={`${style.mark}`}>
                {studentMcqTestsetPreviewDetail?.testsets?.testObtainMarks}
              </p>
            </div>
          </div>
          {/* {timing.hrs === 0 && timing.mins === 0 && timing.secs === 0 ? ( */}
          <Link
            to={`/q/${params.username}/student/${studentMcqTestsetPreviewDetail?.testsets?.testSubject}/mcq/test/result`}
            state={{ tsid: tsid, username: params.username }}
          >
            <div className={`${style.viewTestbtn} ${style.viewTestbtnActive}`}>
              View Test
            </div>
          </Link>
          {/* // ) : ( // <div className={style.viewTestbtn}>View Test</div>
          // )} */}
        </div>
      </div>

      <div className={style.textModal}>
        You can view test only after test time is over
      </div>
    </>
  );
};

export default ViewResultPop;
