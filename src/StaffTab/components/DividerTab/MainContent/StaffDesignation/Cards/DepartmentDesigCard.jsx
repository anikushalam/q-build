import React, { useEffect, useState } from "react";
import style from "../StaffDesignation.module.css";
import ClassTeacherDesig from "../ClassTeacherDesig";
import {
  useAddStaffDesignationMultiple,
  useOneDepartmenteEdit,
} from "../../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import QLoader from "../../../../../../Loader/QLoader";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetStaffDesignationCheckValue } from "../../../../../../hooks/institute/institute-staff-student-api";
import { useTranslation } from "react-i18next";
const DepartmentDesigCard = ({ depart, customStyleContainer, currentSid }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState("");
  const [disabled, setDisabled] = useState(false);
  const getQuery = useLocation();
  const id = useSelector((state) => state.idChange.id);
  const [departmentEdit] = useOneDepartmenteEdit();
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
    setIsOpen((prev) =>
      prev ? (prev = "") : (prev = depart?.departmentSelectBatch)
    );
  };

  const onGrab = (e) => {
    e.stopPropagation();
    if (depart?.dHead?._id && depart?._id) {
      if (depart?.dHead?._id === currentSid) {
      } else {
        setDisabled((pre) => !pre);
        departmentEdit({
          department: {
            sid: currentSid,
            flow: "DESIGNATION_EDIT",
          },
          did: depart?._id,
        })
          .then(() => {
            getStaffDesignationCheckValueRefetch();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    } else {
      if (getQuery.state?.sid && id) {
        setDisabled((pre) => !pre);
        addStaffDesignationMultiple({
          id: id,
          sid: getQuery.state?.sid,
          desiData: {
            desig_array: [
              {
                role: "DEPARTMENT_HEAD",
                roleId: depart?._id,
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
            ? `${style.department_container} ${style.department_container_active}`
            : style.department_container
        }
        style={customStyleContainer}
        onClick={onToggle}
      >
        {getStaffDesignationCheckValue?.staff?.staffDepartment?.includes(
          depart?._id
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
                  src="/images/profileAndCover/department-profile-img.svg"
                  alt="department avatar"
                  className={style.department_card_image}
                />
                <div className={style.department_container_text}>
                  <h6 className={style.department_card_name}>
                    {depart?.dName || ""}
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
                {t("assigned_head_of_department")}
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
                  src="/images/profileAndCover/department-profile-img.svg"
                  alt="department avatar"
                  className={style.department_card_image}
                />
                <div className={style.department_container_text}>
                  <h6 className={style.department_card_name}>
                    {depart?.dName || ""}
                  </h6>
                  <h6 className={style.department_card_head_name}>
                    {`${depart?.dHead?.staffFirstName ?? ""} ${
                      depart?.dHead?.staffMiddleName ?? ""
                    } ${depart?.dHead?.staffLastName ?? ""}`}
                  </h6>
                </div>
              </div>
              <div className={style.assgin_btn} onClick={onGrab}>
                {t("assign_head_of_department")}
              </div>
            </div>
          </>
        )}
      </div>
      {isOpen ? (
        <ClassTeacherDesig batchId={isOpen} currentSid={currentSid} />
      ) : null}
      {disabled && <QLoader />}
    </>
  );
};

export default DepartmentDesigCard;
