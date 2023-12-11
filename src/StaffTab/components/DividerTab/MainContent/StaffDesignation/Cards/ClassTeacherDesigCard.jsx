import React, { useEffect, useState } from "react";
import style from "../StaffDesignation.module.css";
import SubjectDesig from "../SubjectDesig";
import QLoader from "../../../../../../Loader/QLoader";
import {
  useAddStaffDesignationMultiple,
  useOneClassEdit,
} from "../../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetStaffDesignationCheckValue } from "../../../../../../hooks/institute/institute-staff-student-api";
import { useTranslation } from "react-i18next";
const ClassTeacherDesigCard = ({ cls, currentSid }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState("");
  const [disabled, setDisabled] = useState(false);
  const getQuery = useLocation();
  const id = useSelector((state) => state.idChange.id);
  const [classEdit] = useOneClassEdit();
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

  const onToggle = () => {
    setIsOpen((prev) => (prev ? (prev = "") : (prev = cls?._id)));
  };

  const onGrab = (e) => {
    e.stopPropagation();
    if (cls?.classTeacher?._id && cls?._id) {
      if (cls?.classTeacher?._id === currentSid) {
      } else {
        setDisabled((pre) => !pre);
        classEdit({
          classDetail: {
            classTeacher: currentSid,
            flow: "DESIGNATION_EDIT",
          },
          cid: cls?._id,
        })
          .then(() => {
            getStaffDesignationCheckValueRefetch();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    } else {
      // onDesignationGrab({
      //   role: "CLASS_TEACHER",
      //   roleId: cls?._id,
      // });
      if (getQuery.state?.sid && id) {
        setDisabled((pre) => !pre);
        addStaffDesignationMultiple({
          id: id,
          sid: getQuery.state?.sid,
          desiData: {
            desig_array: [
              {
                role: "CLASS_TEACHER",
                roleId: cls?._id,
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
      <div
        className={
          isOpen
            ? `${style.cls_border} ${style.cls_border_active}`
            : style.cls_border
        }
        onClick={onToggle}
        style={{
          cursor: "pointer",
        }}
      >
        {getStaffDesignationCheckValue?.staff?.staffClass?.includes(
          cls?._id
        ) ? (
          <>
            <img
              src={
                isOpen
                  ? "/images/member_tab/department/desi-up-icon.svg"
                  : "/images/member_tab/department/desi-up-icon.svg"
              }
              style={{
                rotate: isOpen ? "180deg" : "0deg",
              }}
              alt="down icon"
            />
            {/* <img
              className={style.department_checkbox}
              src="/images/checkbox-icon.svg"
              alt="icon"
              onClick={onGrab}
            /> */}
            <div className={style.department_container_parent}>
              <div className={style.department_container_wrap}>
                <img
                  src="/images/member_tab/hostel/hostel-batch-icon.svg"
                  alt="department avatar"
                  className={style.department_card_image}
                />
                <div className={style.department_container_text}>
                  <h6 className={style.department_card_name}>
                    {cls?.classTitle || ""}
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
                {t("assigned_as_class_teacher")}
              </div>
            </div>
          </>
        ) : (
          <>
            <img
              src={
                isOpen
                  ? "/images/member_tab/department/desi-up-icon.svg"
                  : "/images/member_tab/department/desi-up-icon.svg"
              }
              style={{
                rotate: isOpen ? "180deg" : "0deg",
              }}
              alt="down icon"
            />
            {/* <img
              className={style.department_checkbox}
              src="/images/box-icon.svg"
              alt="icon"
              onClick={onGrab}
            /> */}
            <div className={style.department_container_parent}>
              <div className={style.department_container_wrap}>
                <img
                  src="/images/member_tab/hostel/hostel-batch-icon.svg"
                  alt="department avatar"
                  className={style.department_card_image}
                />
                <div className={style.department_container_text}>
                  <h6 className={style.department_card_name}>
                    {cls?.classTitle || ""}
                  </h6>
                  <h6 className={style.department_card_head_name}>
                    {`${cls?.classTeacher?.staffFirstName ?? ""} ${
                      cls?.classTeacher?.staffMiddleName ?? ""
                    } ${cls?.classTeacher?.staffLastName ?? ""}`}
                  </h6>
                </div>
              </div>
              <div className={style.assgin_btn} onClick={onGrab}>
                {t("assign_as_class_teacher")}
              </div>
            </div>
          </>
        )}
      </div>
      {isOpen ? <SubjectDesig clsId={isOpen} currentSid={currentSid} /> : null}
      {disabled && <QLoader />}
    </>
  );
};

export default ClassTeacherDesigCard;
