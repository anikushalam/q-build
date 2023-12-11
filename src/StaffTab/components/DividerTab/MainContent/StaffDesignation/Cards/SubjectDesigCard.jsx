import React, { useEffect, useState } from "react";
import style from "../StaffDesignation.module.css";
import QLoader from "../../../../../../Loader/QLoader";
import {
  useAddStaffDesignationMultiple,
  useOneSubjectEdit,
} from "../../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetStaffDesignationCheckValue } from "../../../../../../hooks/institute/institute-staff-student-api";
import { useTranslation } from "react-i18next";

const SubjectDesigCard = ({ sub, currentSid }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [subjectEdit] = useOneSubjectEdit();
  const getQuery = useLocation();
  const id = useSelector((state) => state.idChange.id);
  const [addStaffDesignationMultiple] = useAddStaffDesignationMultiple();

  const {
    getStaffDesignationCheckValue,
    getStaffDesignationCheckValueRefetch,
  } = useGetStaffDesignationCheckValue({
    sid: getQuery.state?.sid,
    skip: !getQuery.state?.sid,
  });

  useEffect(() => {
    if (getQuery.state?.sid) getStaffDesignationCheckValueRefetch();
  }, [getQuery.state?.sid, getStaffDesignationCheckValueRefetch]);

  const onGrab = () => {
    if (sub?.subjectTeacherName?._id && sub?._id) {
      if (sub?.subjectTeacherName?._id === currentSid) {
      } else {
        setDisabled((pre) => !pre);
        subjectEdit({
          subject: {
            sid: currentSid,
            flow: "DESIGNATION_EDIT",
          },
          sid: sub?._id,
        })
          .then(() => {
            getStaffDesignationCheckValueRefetch();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    } else {
      // onDesignationGrab({
      //   role: "SUBJECT_TEACHER",
      //   roleId: sub?._id,
      // });
      if (getQuery.state?.sid && id) {
        setDisabled((pre) => !pre);
        addStaffDesignationMultiple({
          id: id,
          sid: getQuery.state?.sid,
          desiData: {
            desig_array: [
              {
                role: "SUBJECT_TEACHER",
                roleId: sub?._id,
              },
            ],
          },
        })
          .then(() => {
            getStaffDesignationCheckValueRefetch();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };
  return (
    <>
      <div className={style.subject_border}>
        {getStaffDesignationCheckValue?.staff?.staffSubject?.includes(
          sub?._id
        ) ? (
          <>
            {/* <img
              className={style.department_checkbox}
              src="/images/checkbox-icon.svg"
              alt="icon"
              onClick={onGrab}
            /> */}
            <div className={style.department_container_parent}>
              <div className={style.department_container_wrap}>
                <img
                  src="/images/allot-class-icon.svg"
                  alt="department avatar"
                  className={style.department_card_image}
                />
                <div className={style.department_container_text}>
                  <h6 className={style.department_card_name}>
                    {sub?.subjectName}{" "}
                    {sub?.subject_category ? `(${sub?.subject_category})` : ""}
                    {sub?.selected_batch_query?.batchName ? (
                      <span
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        ({sub?.selected_batch_query?.batchName})
                      </span>
                    ) : null}{" "}
                    {sub?.subjectOptional === "Optional" &&
                      `(${sub?.subjectOptional})`}
                  </h6>
                  <h6 className={style.department_card_head_name}>
                    {`${
                      getStaffDesignationCheckValue?.staff?.staffFirstName ?? ""
                    } ${
                      getStaffDesignationCheckValue?.staff?.staffMiddleName ??
                      ""
                    } ${
                      getStaffDesignationCheckValue?.staff?.staffLastName ?? ""
                    }`}
                  </h6>
                </div>
              </div>
              <div className={style.assgined_btn} onClick={onGrab}>
                {t("assigned_as_subject_teacher")}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* <img
              className={style.department_checkbox}
              src="/images/box-icon.svg"
              alt="icon"
              onClick={onGrab}
            /> */}
            <div className={style.department_container_parent}>
              <div className={style.department_container_wrap}>
                <img
                  src="/images/allot-class-icon.svg"
                  alt="department avatar"
                  className={style.department_card_image}
                />
                <div className={style.department_container_text}>
                  <h6 className={style.department_card_name}>
                    {sub?.subjectName}{" "}
                    {sub?.subject_category ? `(${sub?.subject_category})` : ""}
                    {sub?.selected_batch_query?.batchName ? (
                      <span
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        ({sub?.selected_batch_query?.batchName})
                      </span>
                    ) : null}{" "}
                    {sub?.subjectOptional === "Optional" &&
                      `(${sub?.subjectOptional})`}
                  </h6>
                  <h6 className={style.department_card_head_name}>
                    {`${sub?.subjectTeacherName?.staffFirstName ?? ""} ${
                      sub?.subjectTeacherName?.staffMiddleName ?? ""
                    } ${sub?.subjectTeacherName?.staffLastName ?? ""}`}
                  </h6>
                </div>
              </div>
              <div className={style.assgin_btn} onClick={onGrab}>
                {t("assign_as_subject_teacher")}
              </div>
            </div>
          </>
        )}
      </div>
      {disabled && <QLoader />}
    </>
  );
};

export default SubjectDesigCard;
