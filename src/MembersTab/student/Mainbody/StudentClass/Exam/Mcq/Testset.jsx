import React from "react";
import style from "../Exam.module.css";
import Modal from "../../../../../../Modal/Modal";
import McqStartTestset from "./McqStartTestset";
import ViewResultPop from "./ViewResultPop";
// import moment from "moment"
function Testset({ testset }) {
  const [open, setOpen] = React.useState(false);

  // console.info(testset);
  return (
    <>
      <div className={style.subject} onClick={() => setOpen(true)}>
        <div className={style.subjectLeft}>
          <img src="/images/mcq-exam-icon.svg" alt="mcq exam icon related" />
          <div className={style.text}>
            <h6>{testset?.testExamName}</h6>
            <p>{testset?.testSubject}</p>
          </div>
        </div>
        <div className={style.subjectRight}>
          <h6>{testset?.testDate}</h6>
          {/* <h6>{moment(testset?.testDate).format("DD MMM yyyy")}</h6> */}

          <p>
            {`${testset?.testStart?.substr(0, 5)} ${testset?.testStart?.substr(
              9
            )}`}{" "}
            to{" "}
            {`${testset?.testEnd?.substr(0, 5)} ${testset?.testEnd?.substr(9)}`}
          </p>
        </div>
      </div>
      {!testset?.testSetComplete && (
        <Modal
          open={open}
          setOpen={setOpen}
          modalTitle={testset?.testExamName}
          button="no"
        >
          <McqStartTestset tsid={testset?._id} />
        </Modal>
      )}

      {open && testset?.testSetComplete && (
        <Modal
          open={open}
          setOpen={setOpen}
          modalTitle={testset?.testExamName}
          button="no"
        >
          <ViewResultPop tsid={testset?._id} />
        </Modal>
      )}
    </>
  );
}

export default Testset;
