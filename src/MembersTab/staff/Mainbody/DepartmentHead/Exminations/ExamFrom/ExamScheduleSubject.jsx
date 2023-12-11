import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../SeatingArrangement/SeatingArrangement.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import SelectExamStandard from "./SelectExamStandard";
import SelectExamStandardBacklog from "./SelectExamStandardBacklog";
import SelectExamSubject from "./SelectExamSubject";
import SelectExamSubjectBacklog from "./SelectExamSubjectBacklog";
import AddSubjectInExam from "./AddSubjectInExam";
import SubjectCard from "../SeatingArrangement/SubjectCard";
import QLoader from "../../../../../../Loader/QLoader";
import {
  useCreateBacklogExam,
  useCreateSubjectExam,
  useDepartmentCreateExam,
} from "../../../../../../hooks/member_tab/department-api";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import AddAttainmentInSubject from "./AddAttainmentInSubject";

const ExamScheduleSubject = ({
  onClose,
  bid,
  did,
  createExam,
  onResetAfterCreate,
  openAs,
  createdBy,
  sid,
  smid,
}) => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState("");
  const [clsId, setClsId] = useState([]);
  const [selectSubject, setSelectedSubject] = useState([]);
  const [showSubject, setShowSubject] = useState([]);
  const [currentStandard, setCurrentStandard] = useState("");
  const [currentSubject, setCurrentSubject] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [departmentCreateExam] = useDepartmentCreateExam();
  const [createSubjectExam] = useCreateSubjectExam();
  const [createBacklogExam] = useCreateBacklogExam();
  const [stationaryPoint, setStationaryPoint] = useState(null);
  const onToggleStep = (val) => {
    setActiveStep(val);
  };

  const onStandardSelect = (val) => {
    setCurrentStandard(val);
    onToggleStep("SHOW_SUBJECT");
  };
  const onSubjectSelect = (val) => {
    setCurrentSubject(val);
    onToggleStep("SHOW_SUBJECT_INFO");
  };
  const onGrabSubjectInfo = (val) => {
    let s_time = "";
    let e_time = "";
    if (val.startTime >= "12:00") {
      if (val.startTime === "12:00") {
        const st = +val.startTime.slice(0, 2);
        s_time =
          st > 9
            ? `${st}:${val.startTime.slice(3)} Pm`
            : `0${st}:${val.startTime.slice(3)} Pm`;
      } else {
        const st = +val.startTime.slice(0, 2) - 12;
        s_time =
          st > 9
            ? `${st}:${val.startTime.slice(3)} Pm`
            : `0${st}:${val.startTime.slice(3)} Pm`;
      }
    } else {
      s_time = `${val.startTime} Am`;
    }
    if (val.endTime >= "12:00") {
      if (val.endTime === "12:00") {
        const st = +val.endTime.slice(0, 2);
        e_time =
          st > 9
            ? `${st}:${val.endTime.slice(3)} Pm`
            : `0${st}:${val.endTime.slice(3)} Pm`;
      } else {
        const st = +val.endTime.slice(0, 2) - 12;
        e_time =
          st > 9
            ? `${st}:${val.endTime.slice(3)} Pm`
            : `0${st}:${val.endTime.slice(3)} Pm`;
      }
    } else {
      e_time = `${val.endTime} Am`;
    }
    const newArray = [];
    if (currentStandard?.classDivision?.length > 0) {
      for (let cid of currentStandard?.classDivision) {
        newArray.push(cid?._id);
      }
    }

    if (createExam.copo_attainment === "YES") {
      if (createdBy === "SUBJECT_TEACHER") {
        setStationaryPoint({
          selectedSubject: {
            totalMarks: val?.totalMarks,
            date: val?.date,
            startTime: s_time,
            endTime: e_time,
            subject_attachment: val?.subject_attachment,
          },
          showSubject: {
            totalMarks: val?.totalMarks,
            date: val?.date,
            startTime: s_time,
            endTime: e_time,
            subject_attachment: val?.subject_attachment,
          },
        });
      } else {
        setStationaryPoint({
          selectedSubject: {
            subjectIds: currentSubject.ids,
            subjectName: currentSubject?.subjectName,
            totalMarks: val?.totalMarks,
            date: val?.date,
            startTime: s_time,
            endTime: e_time,
            _id: currentSubject?._id,
          },
          newArray: newArray,
          showSubject: {
            subjectIds: currentSubject.ids,
            subjectName: currentSubject?.subjectName,
            totalMarks: val?.totalMarks,
            date: val?.date,
            startTime: s_time,
            endTime: e_time,
            _id: currentSubject?._id,
            classMaster: currentStandard?.className,
          },
        });
      }

      onToggleStep("SHOW_SUBJECT_CO");
    } else {
      setSelectedSubject((prevState) => [
        ...prevState,
        {
          subjectIds: currentSubject.ids,
          subjectName: currentSubject?.subjectName,
          totalMarks: val?.totalMarks,
          date: val?.date,
          startTime: s_time,
          endTime: e_time,
          _id: currentSubject?._id,
        },
      ]);

      setClsId((prevState) =>
        [...new Set([...prevState, ...newArray].map(JSON.stringify))].map(
          JSON.parse
        )
      );
      setShowSubject((prevState) => [
        ...prevState,
        {
          subjectIds: currentSubject.ids,
          subjectName: currentSubject?.subjectName,
          totalMarks: val?.totalMarks,
          date: val?.date,
          startTime: s_time,
          endTime: e_time,
          _id: currentSubject?._id,
          classMaster: currentStandard?.className,
        },
      ]);
      setCurrentSubject("");
      setCurrentStandard("");
      onToggleStep("");
    }
  };

  const onGrabAttainment = (val) => {
    if (createdBy === "SUBJECT_TEACHER") {
      setSelectedSubject((prevState) => [
        ...prevState,
        {
          ...stationaryPoint?.selectedSubject,
          copo_list: val,
        },
      ]);
      setShowSubject((prevState) => [
        ...prevState,
        { ...stationaryPoint?.showSubject, copo_list: val },
      ]);
      setCurrentSubject("");
      setCurrentStandard("");
      onToggleStep("");
      setStationaryPoint(null);
    } else {
      setSelectedSubject((prevState) => [
        ...prevState,
        {
          ...stationaryPoint?.selectedSubject,
          copo_list: val,
        },
      ]);

      setClsId((prevState) =>
        [
          ...new Set(
            [...prevState, ...stationaryPoint?.newArray].map(JSON.stringify)
          ),
        ].map(JSON.parse)
      );
      setShowSubject((prevState) => [
        ...prevState,
        { ...stationaryPoint?.showSubject, copo_list: val },
      ]);
      setCurrentSubject("");
      setCurrentStandard("");
      onToggleStep("");
      setStationaryPoint(null);
    }
  };

  const onSaveExam = () => {
    if (createdBy === "SUBJECT_TEACHER" && sid) {
      setDisabled((pre) => !pre);
      createSubjectExam({
        sid: sid,
        exam: {
          examInfo: createExam,
          subject: selectSubject?.[0],
        },
      })
        .then(() => {
          onResetAfterCreate();
          setDisabled((pre) => !pre);
        })
        .catch(() => {
          setDisabled((pre) => !pre);
        });
    } else {
      if (clsId?.length && selectSubject?.length) {
        setDisabled((pre) => !pre);
        if (openAs === "BACKLOG") {
          createBacklogExam({
            did: did,
            exam: {
              ...createExam,
              allclasses: clsId,
              allsubject: selectSubject,
            },
          })
            .then(() => {
              onResetAfterCreate();
              setDisabled((pre) => !pre);
            })
            .catch(() => {
              setDisabled((pre) => !pre);
            });
        } else {
          // console.info("dsfgsdjh", createExam, clsId, selectSubject);
          departmentCreateExam({
            bid: bid,
            exam: {
              ...createExam,
              allclasses: clsId,
              allsubject: selectSubject,
            },
          })
            .then(() => {
              onResetAfterCreate();
              setDisabled((pre) => !pre);
            })
            .catch(() => {
              setDisabled((pre) => !pre);
            });
        }
      }
    }
  };

  const onClosePopup = () => {
    if (activeStep === "") {
      onClose();
    } else if (activeStep === "SHOW_STANDARD") {
      onToggleStep("");
    } else if (activeStep === "SHOW_SUBJECT") {
      onToggleStep("SHOW_STANDARD");
    } else if (activeStep === "SHOW_SUBJECT_INFO") {
      onToggleStep("SHOW_SUBJECT");
    } else if (activeStep === "SHOW_SUBJECT_CO") {
      onToggleStep("SHOW_SUBJECT_INFO");
    }
  };

  return (
    <PopupWrapper onClose={onClosePopup}>
      {!activeStep && (
        <div className={style.seating_modal}>
          <section
            className={style.seating_modal_title_left}
            style={{
              position: "relative",
            }}
          >
            <img
              src="/images/arrow-left-fees-icon.svg"
              onClick={onClose}
              alt=""
            />
            <h6>{t("create_exam")}</h6>
            <button
              className={style.next_btn}
              title="Save exam"
              onClick={onSaveExam}
            >
              {t("save")}
            </button>
          </section>
          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          />
          <div className={style.add_container}>
            {createdBy === "SUBJECT_TEACHER" ? (
              selectSubject?.[0] ? null : (
                <p
                  className={style.add_aubject}
                  onClick={() => onToggleStep("SHOW_SUBJECT_INFO")}
                >
                  {t("add_subject_details")}
                </p>
              )
            ) : (
              <p
                className={style.add_aubject}
                onClick={() => onToggleStep("SHOW_STANDARD")}
              >
                {t("add_subject")}
              </p>
            )}
          </div>
          {showSubject?.map((subject, index) => (
            <SubjectCard
              key={index}
              subject={subject}
              classMaster={subject?.classMaster}
            />
          ))}
          {disabled && <QLoader />}
        </div>
      )}

      {activeStep === "SHOW_STANDARD" &&
        (openAs === "BACKLOG" ? (
          <SelectExamStandardBacklog
            onBack={() => onToggleStep("")}
            did={did}
            onStandardSelect={onStandardSelect}
          />
        ) : (
          <SelectExamStandard
            onBack={() => onToggleStep("")}
            did={did}
            bid={bid}
            onStandardSelect={onStandardSelect}
          />
        ))}
      {activeStep === "SHOW_SUBJECT" &&
        (openAs === "BACKLOG" ? (
          <SelectExamSubjectBacklog
            onBack={() => onToggleStep("SHOW_STANDARD")}
            cmid={currentStandard?._id}
            onSubjectSelect={onSubjectSelect}
          />
        ) : (
          <SelectExamSubject
            onBack={() => onToggleStep("SHOW_STANDARD")}
            cmid={currentStandard?._id}
            bid={bid}
            onSubjectSelect={onSubjectSelect}
          />
        ))}
      {activeStep === "SHOW_SUBJECT_INFO" && (
        <AddSubjectInExam
          onBack={() =>
            createdBy === "SUBJECT_TEACHER"
              ? onToggleStep("")
              : onToggleStep("SHOW_SUBJECT")
          }
          clsName={currentStandard?.className}
          subjectName={currentSubject?.subjectName}
          onGrabSubjectInfo={onGrabSubjectInfo}
          createdBy={createdBy}
        />
      )}
      {activeStep === "SHOW_SUBJECT_CO" && (
        <AddAttainmentInSubject
          onBack={() => onToggleStep("SHOW_SUBJECT_INFO")}
          subjectName={currentSubject?.subjectName}
          onGrabAttainment={onGrabAttainment}
          smid={smid ? smid : currentSubject?._id}
          stationaryPoint={stationaryPoint}
          createdBy={createdBy}
        />
      )}
    </PopupWrapper>
  );
};

export default ExamScheduleSubject;
