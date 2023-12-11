import React, { useState } from "react";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import ExamFormInfo from "./ExamFormInfo";
import ExamScheduleSubject from "./ExamScheduleSubject";

const ExamFrom = ({
  onClose,
  bid,
  did,
  onRefetch,
  openAs,
  createdBy,
  sid,
  smid,
}) => {
  const [activeStep, setActiveStep] = useState("EXAM_INFO");
  const [createExam, setCreateExam] = useState({
    examName: "",
    // examType: "",
    // examMode: "Offline",
    examWeight: "",
    copo_attainment: "NO",
    copo_attainment_type: "INTERNAL",
  });

  const onGrabInfo = (val) => {
    setCreateExam((prevState) => ({
      ...prevState,
      ...val,
    }));
    setActiveStep("SCHEDULE_SUBJECT");
  };

  const onResetAfterCreate = () => {
    onRefetch();
    onClose();
    setCreateExam({
      examName: "",
      // examType: "",
      // examMode: "Offline",
      examWeight: 0,
    });
    setActiveStep("EXAM_INFO");
  };

  const onClosePopup = () => {
    if (activeStep === "EXAM_INFO") {
      onClose();
    } else if (activeStep === "SCHEDULE_SUBJECT") {
      setActiveStep("EXAM_INFO");
    } else {
    }
  };
  return (
    <>
      {activeStep === "EXAM_INFO" && (
        <PopupWrapper onClose={onClosePopup}>
          <ExamFormInfo
            onClose={onClose}
            onGrabInfo={onGrabInfo}
            examInfo={createExam}
            openAs={openAs}
          />
        </PopupWrapper>
      )}
      {activeStep === "SCHEDULE_SUBJECT" && (
        <ExamScheduleSubject
          onClose={() => setActiveStep("EXAM_INFO")}
          did={did}
          bid={bid}
          createExam={createExam}
          onResetAfterCreate={onResetAfterCreate}
          openAs={openAs}
          createdBy={createdBy}
          sid={sid}
          smid={smid}
        />
      )}
    </>
  );
};

export default ExamFrom;
