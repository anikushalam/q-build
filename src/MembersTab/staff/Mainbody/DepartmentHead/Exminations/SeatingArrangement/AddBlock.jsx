import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AssignStaffModal from "../../../../../../Department/Institute/AssignStaff/AssignStaffModal";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import AddSeating from "./AddSeating";
import style from "./SeatingArrangement.module.css";
import SelectScheduleExam from "./SelectScheduleExam";
import ExamOriginalClass from "./ExamOriginalClass";
import SeatingExaminationCard from "./SeatingExaminationCard";
import {
  useAddSeatingBacklogExam,
  useAddSeatingExam,
} from "../../../../../../hooks/member_tab/department-api";
import QLoader from "../../../../../../Loader/QLoader";

const AddBlock = ({
  onClose,
  instituteId,
  examId,
  examName,
  onRefetch,
  said,
  onEdit,
  openAs,
  viewAs,
}) => {
  const { t } = useTranslation();
  const [assignHeadStaff, setAssignHeadStaff] = useState("");
  const [classHead, setClassHead] = useState("");
  const [filled, setFilled] = useState("");
  const [activeStep, setActiveStep] = useState("");
  const [addBlock, setAddBlock] = useState({
    seat_block_name: openAs === "EDIT" ? said?.seat_block_name : "",
    seat_block_class: openAs === "EDIT" ? said?.seat_block_class?._id : "",
    seat_valid_staff: openAs === "EDIT" ? said?.seat_valid_staff : "",
    seat_block_staff: openAs === "EDIT" ? said?.seat_block_staff?._id : "",
    seat_valid_staff_name: openAs === "EDIT" ? said?.seat_valid_staff_name : "",
    papers: openAs === "EDIT" ? said?.seat_exam_paper_array : [],
  });
  const [newPaper, setNewPaper] = useState([]);
  const [currentSubject, setCurrentSubject] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [addSeatingExam] = useAddSeatingExam();
  const [addSeatingBacklogExam] = useAddSeatingBacklogExam();
  useEffect(() => {
    if (openAs === "EDIT") {
      setAddBlock({
        seat_block_name: openAs === "EDIT" ? said?.seat_block_name : "",
        seat_block_class: openAs === "EDIT" ? said?.seat_block_class?._id : "",
        seat_valid_staff: openAs === "EDIT" ? said?.seat_valid_staff : "",
        seat_block_staff: openAs === "EDIT" ? said?.seat_block_staff?._id : "",
        seat_valid_staff_name:
          openAs === "EDIT" ? said?.seat_valid_staff_name : "",
        papers: said?.seat_exam_paper_array,
      });
      setAssignHeadStaff(said?.seat_block_staff);
      setClassHead(said?.seat_block_class);
    }
  }, [openAs]);

  const onOpen = (val) => {
    if (openAs === "EDIT") {
      if (val === "SCHEDULE_EXAM_OPEN" || val === "SCHEDULE_OPEN")
        setActiveStep(val);
    } else {
      setActiveStep(val);
    }
  };

  const onRemoveStep = () => {
    setActiveStep("");
  };
  const onSelectSupervisor = (val) => {
    setAddBlock((prev) => ({
      ...prev,
      seat_valid_staff: val,
    }));
  };

  const classheadSelect = (assing) => {
    setAssignHeadStaff(assing);
    onRemoveStep();
    setAddBlock((prev) => ({
      ...prev,
      seat_block_staff: assing?._id,
    }));
  };

  const onInputChange = (e) => {
    setAddBlock((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSelect = (val) => {
    setAddBlock((prev) => ({
      ...prev,
      seat_block_class: val?._id,
    }));
    setClassHead(val);
    onRemoveStep();
  };

  const onCurrentSubject = (sub) => {
    setCurrentSubject(sub);
    setActiveStep("SCHEDULE_OPEN");
  };

  const onAddSubjectSeating = (val) => {
    if (openAs === "EDIT") {
      setNewPaper((prev) => [...prev, val]);
      onRemoveStep();
    } else {
      setAddBlock((prev) => ({
        ...prev,
        papers: [...prev.papers, val],
      }));
      onRemoveStep();
    }
  };

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (obj === "seat_block_staff") {
        if (data["seat_valid_staff"] === "Staff") {
          if (!data[obj])
            errors["seat_block_staff"] = `seat_block_staff is required!`;
        }
      } else if (obj === "seat_valid_staff_name") {
        if (data["seat_valid_staff"] === "External") {
          if (!data[obj])
            errors[
              "seat_valid_staff_name"
            ] = `seat_valid_staff_name is required!`;
        }
      } else if (obj === "papers") {
        if (!data[obj]?.length) errors["papers"] = `papers is required!`;
      } else {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };
  const onAddSeating = () => {
    const validation = onValidation(addBlock);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      if (openAs === "EDIT") {
        onEdit(addBlock, newPaper);
      } else {
        setDisabled((pre) => !pre);
        if (viewAs === "BACKLOG") {
          addSeatingBacklogExam({
            eid: examId,
            addSeating: addBlock,
          })
            .then(() => {
              onRefetch();
              onClose();
              setDisabled((pre) => !pre);
            })
            .catch({});
        } else {
          addSeatingExam({
            eid: examId,
            addSeating: addBlock,
          })
            .then(() => {
              onRefetch();
              onClose();
              setDisabled((pre) => !pre);
            })
            .catch({});
        }
      }
    }
  };

  return (
    <>
      {activeStep === "" && (
        <PopupWrapper onClose={onClose}>
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
              <h6>{t("add_block_for_seating_arrragements")}</h6>
              <button
                className={style.select_select_btn}
                title="Add seating arrangements"
                onClick={onAddSeating}
              >
                {openAs === "EDIT" ? t("update") : t("Add")}
              </button>
            </section>
            <BorderBottom
              customStyle={{
                width: "100%",
              }}
            />
            <JoinFormInput
              labelText={t("block_hall_name")}
              placeholder={t("block_hall_name_placeholder")}
              name={"seat_block_name"}
              value={addBlock?.seat_block_name}
              type={"text"}
              onChange={onInputChange}
              errorShow={filled["seat_block_name"]}
            />

            <div
              className={style.person_container}
              onClick={() => onOpen("CLASS_OPEN")}
            >
              <img
                src={
                  classHead?.classTeacher?.staffProfilePhoto
                    ? `${imageShowUrl}/${classHead?.classTeacher.staffProfilePhoto}`
                    : "/images/user-icon.svg"
                }
                alt="avatar"
              />
              <div className={style.person_container_text}>
                <h6>
                  {classHead
                    ? `${classHead?.className ?? ""} - ${
                        classHead?.classTitle ?? ""
                      }`
                    : t("select_original_class_of_block")}
                </h6>
                <p>
                  {classHead?.classTeacher
                    ? `${classHead?.classTeacher?.staffFirstName ?? ""} ${
                        classHead?.classTeacher?.staffMiddleName ?? ""
                      } ${classHead?.classTeacher?.staffLastName ?? ""}`
                    : t("select_from_list")}
                  {filled["seat_block_class"] && (
                    <span style={{ color: "red", marginLeft: "15px" }}>
                      * {t("form_require_label")}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <CustomNormalSelectInput
              selectLabel={t("is_supervisor_external_or_staff")}
              selectedValue={t("select_supervisor_type")}
              options={["External", "Staff"]}
              onClick={onSelectSupervisor}
              errorShow={filled["seat_valid_staff"]}
              value={addBlock.seat_valid_staff}
              openAs={openAs === "EDIT" ? "REFUND" : ""}
            />
            {addBlock.seat_valid_staff === "Staff" ? (
              <div
                className={style.person_container}
                onClick={() => onOpen("SUPERVISOR_OPEN")}
              >
                <img
                  src={
                    assignHeadStaff?.staffProfilePhoto
                      ? `${imageShowUrl}/${assignHeadStaff.staffProfilePhoto}`
                      : "/images/user-icon.svg"
                  }
                  alt="avatar"
                />
                <div className={style.person_container_text}>
                  <h6>
                    {assignHeadStaff
                      ? `${assignHeadStaff?.staffFirstName ?? ""} ${
                          assignHeadStaff?.staffMiddleName ?? ""
                        } ${assignHeadStaff?.staffLastName ?? ""}`
                      : t("assign_supervisor")}
                  </h6>
                  <p>
                    {t("select_from_list")}{" "}
                    {filled["seat_block_staff"] && (
                      <span style={{ color: "red", marginLeft: "15px" }}>
                        * {t("form_require_label")}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ) : (
              <JoinFormInput
                labelText={t("external_supervisor")}
                placeholder={t("external_supervisor_placeholder")}
                name={"seat_valid_staff_name"}
                value={addBlock?.seat_valid_staff_name}
                type={"text"}
                onChange={onInputChange}
                errorShow={filled["seat_valid_staff_name"]}
              />
            )}
            <button
              className={style.select_schedule_exam_btn}
              title="Schedule Exam"
              onClick={() => onOpen("SCHEDULE_EXAM_OPEN")}
            >
              <div>{t("select_schedule_exam")}</div>
              <img src="/images/forward-right-icon.svg" alt="next step" />
            </button>
            {filled["papers"] && (
              <span style={{ color: "red", marginLeft: "15px" }}>
                * atleast one sechedule exam {t("form_require_label")}
              </span>
            )}

            {addBlock.papers?.map((paper) => (
              <SeatingExaminationCard
                examDetail={{
                  ...paper,
                  examName,
                  selectClass: `${classHead?.className}, ${classHead?.classTitle}`,
                }}
                viewAs="VIEW_SEATING"
              />
            ))}
            {newPaper?.map((paper) => (
              <SeatingExaminationCard
                examDetail={{
                  ...paper,
                  examName,
                  selectClass: `${classHead?.className}, ${classHead?.classTitle}`,
                }}
                viewAs="VIEW_SEATING"
              />
            ))}
          </div>
          {disabled && <QLoader />}
        </PopupWrapper>
      )}
      {activeStep === "CLASS_OPEN" && (
        <ExamOriginalClass
          examId={examId}
          onClose={onRemoveStep}
          onSelect={onSelect}
        />
      )}

      {activeStep === "SCHEDULE_EXAM_OPEN" && (
        <SelectScheduleExam
          onClose={onRemoveStep}
          onCurrentSubject={onCurrentSubject}
        />
      )}
      {activeStep === "SCHEDULE_OPEN" && (
        <AddSeating
          onClose={onRemoveStep}
          currentSubject={{
            currentSubject,
            selectClass: classHead?.classTitle,
            examName,
          }}
          onAddSubjectSeating={onAddSubjectSeating}
        />
      )}
      {activeStep === "SUPERVISOR_OPEN" && (
        <AssignStaffModal
          assignHead={activeStep === "SUPERVISOR_OPEN" ? true : false}
          headSelect={classheadSelect}
          title={t("assign_supervisor")}
          onClose={onRemoveStep}
          instituteId={instituteId}
          viewAs="ADMISSION_ADMIN"
          //   disabledId={hostelManagerName?._id}
        />
      )}
    </>
  );
};

export default AddBlock;
