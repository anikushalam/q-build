import React, { useEffect, useState } from "react";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../../FinanceManager/FeesStructure/FeesStructure.module.css";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import {
  useSubjectOneAssignment,
  useSubjectUpdateAssignment,
} from "../../../../../../hooks/member_tab/subject-api";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import JoinFormTextArea from "../../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import QLoader from "../../../../../../Loader/QLoader";

const EditAssignment = ({ onClose, aid, onRefetch, onParentClose }) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [assignmentData, setAssignmentData] = useState({
    assignmentName: "",
    dueDate: "",
    descritpion: "",
  });
  const [subjectUpdateAssignment] = useSubjectUpdateAssignment();
  const { subjectOneAssignment, subjectOneAssignmentRefetch } =
    useSubjectOneAssignment({
      aid: aid,
      skip: !aid,
    });

  useEffect(() => {
    if (aid) {
      subjectOneAssignmentRefetch();
    }
  }, [aid, subjectOneAssignmentRefetch]);

  useEffect(() => {
    if (subjectOneAssignment?.one_assignment) {
      setAssignmentData((prev) => ({
        ...prev,
        assignmentName:
          subjectOneAssignment?.one_assignment?.assignmentName ?? "",
        dueDate: subjectOneAssignment?.one_assignment?.dueDate ?? "",
        descritpion: subjectOneAssignment?.one_assignment?.descritpion ?? "",
      }));
    }
  }, [subjectOneAssignment?.one_assignment]);
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (obj === "description") {
      } else {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };
  const onDateFunction = (val) => {
    const onDateSplit = val?.split("/");
    setAssignmentData({
      ...assignmentData,
      dueDate: `${onDateSplit[2]}-${onDateSplit[1]}-${onDateSplit[0]}`,
    });
  };

  const onUpdate = () => {
    const validation = onValidation(assignmentData);
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
      if (aid) {
        setDisabled((pre) => !pre);
        subjectUpdateAssignment({
          aid: aid,
          assignmentCreate: assignmentData,
        })
          .then(() => {
            onRefetch();
            onParentClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };
  return (
    <>
      <PopupWrapper onClose={onClose}>
        <div
          className={style.add_category_modal}
          style={{
            width: "35rem",
            minHeight: "30rem",
            maxHeight: "35rem",
            overflowX: "hidden",
          }}
        >
          <div className={style.add_category_modal_title}>
            <section
              className={style.add_category_modal_title_left}
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <img
                src="/images/arrow-left-fees-icon.svg"
                onClick={onClose}
                alt=""
              />

              <h6>{t("update_assignment")}</h6>
            </section>
          </div>
          <BorderBottom
            customStyle={{
              width: "100%",
            }}
          />

          <JoinFormInput
            labelText={t("ass_name")}
            placeholder={t("enter_the_assignment_name")}
            type={"text"}
            name="assignmentName"
            value={assignmentData.assignmentName}
            onChange={(e) =>
              setAssignmentData({
                ...assignmentData,
                assignmentName: e.target.value,
              })
            }
            errorShow={filled["assignmentName"]}
          />

          <JoinFormCalender
            labelText={t("due_date_of_assignement")}
            placeholder={t("select_due_date")}
            name={"dueDate"}
            value={assignmentData.dueDate}
            onDateFunction={onDateFunction}
            customStyleContainer={{
              position: "relative",
              marginTop: "0.5rem",
            }}
            datePickerPosition={{
              top: "-6rem",
            }}
            customStyleLabel={{
              marginTop: "7px",
            }}
            // errorShow={filled["dueDate"]}
          />

          <JoinFormTextArea
            labelText={t("description")}
            placeholder={t("ass_des")}
            name={"descritpion"}
            value={assignmentData.descritpion}
            type={"text"}
            onChange={(e) =>
              setAssignmentData({
                ...assignmentData,
                descritpion: e.target.value,
              })
            }
          />
          <div
            className={style.set_fees_structure_btn}
            onClick={onUpdate}
            style={{
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {t("update")}
          </div>
        </div>
      </PopupWrapper>
      {disabled && <QLoader />}
    </>
  );
};

export default EditAssignment;
