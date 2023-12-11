import React from "react";
import style from "./SubmitExamModal.module.css";
import { Link, useParams } from "react-router-dom";
import { useStudentMcqTestsetPreviewDetail } from "../../../../../../../hooks/member_tab/student-api";

const MODAL_STYLES = {
  position: "absolute",
  left: "35%",
  top: "10%",
  zIndex: 10,
};

const TEXT_MODAL_STYLES = {
  position: "absolute",
  left: "35%",
  top: "80%",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  //   display: "grid",
  //   placeItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 10,
};

function SubmitExamModal({ open, onClose, tsid }) {
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

  // console.info("this is modal open", studentMcqTestsetPreviewDetail);
  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div className={style.startModal} style={MODAL_STYLES}>
        <div className={style.startModalTop} onClick={onClose}>
          <h6>{studentMcqTestsetPreviewDetail?.testsets?.testExamName}</h6>
          <img src="/images/close-post-icon.svg" alt="" />
        </div>

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

      <div className={style.textModal} style={TEXT_MODAL_STYLES}>
        You can view test only after test time is over
      </div>
    </>
  );
}

export default SubmitExamModal;
