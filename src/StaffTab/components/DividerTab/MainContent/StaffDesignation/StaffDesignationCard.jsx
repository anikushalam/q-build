import React, { useState } from "react";
import style from "./StaffDesignation.module.css";
import DepartmentDesig from "./DepartmentDesig";
import { useTranslation } from "react-i18next";
import { useEditFinanceHead } from "../../../../../hooks/institute/institute-finance-api";
import QLoader from "../../../../../Loader/QLoader";
import { useEditAdmission } from "../../../../../hooks/member_tab/admission-api";
import { useEditLibraryHead } from "../../../../../hooks/member_tab/library-api";
import { useHostelEidtActivate } from "../../../../../hooks/member_tab/hostel-api";
import { useTransportEidtActivate } from "../../../../../hooks/member_tab/transport-api";
import { useEditEventAdnSeminar } from "../../../../../hooks/member_tab/event-api";
import { useAlumniEidtActivate } from "../../../../../hooks/member_tab/alumni-api";

const StaffDesignationCard = ({
  label,
  childProps,
  url,
  role,
  roleId,
  headName,
  state,
  onDesignationGrab,
  currentSid,
  psid,
  getStaffDesignationMultipleRefetch,
  assigned,
  assign,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [editFinanceHead] = useEditFinanceHead();
  const [editAdmission] = useEditAdmission();
  const [editLibraryHead] = useEditLibraryHead();
  const [hostelEidtActivate] = useHostelEidtActivate();
  const [transportEidtActivate] = useTransportEidtActivate();
  const [editEventAdnSeminar] = useEditEventAdnSeminar();
  const [alumniEidtActivate] = useAlumniEidtActivate();

  const onToggle = () => {
    setIsOpen((pre) => !pre);
  };

  const onGrab = () => {
    if (psid && currentSid) {
      if (role === "FINANCE_MANAGER") {
        if (currentSid !== psid) {
          setDisabled((pre) => !pre);
          editFinanceHead({
            osid: psid,
            nsid: currentSid,
          })
            .then(() => {
              getStaffDesignationMultipleRefetch();
              setDisabled((pre) => !pre);
            })
            .catch({});
        }
      } else if (role === "ADMISSION_ADMIN") {
        if (currentSid !== psid) {
          setDisabled((pre) => !pre);
          editAdmission({
            osid: psid,
            nsid: currentSid,
          })
            .then(() => {
              getStaffDesignationMultipleRefetch();
              setDisabled((pre) => !pre);
            })
            .catch({});
        }
      } else if (role === "HOSTEL_MANAGER") {
        if (currentSid !== psid) {
          setDisabled((pre) => !pre);
          hostelEidtActivate({
            osid: psid,
            nsid: currentSid,
          })
            .then(() => {
              getStaffDesignationMultipleRefetch();
              setDisabled((pre) => !pre);
            })
            .catch({});
        }
      } else if (role === "LIBRARIAN") {
        if (currentSid !== psid) {
          setDisabled((pre) => !pre);
          editLibraryHead({
            osid: psid,
            nsid: currentSid,
          })
            .then(() => {
              getStaffDesignationMultipleRefetch();
              setDisabled((pre) => !pre);
            })
            .catch({});
        }
      } else if (role === "EVENT_MANAGER") {
        if (currentSid !== psid) {
          setDisabled((pre) => !pre);
          editEventAdnSeminar({
            osid: psid,
            nsid: currentSid,
          })
            .then(() => {
              getStaffDesignationMultipleRefetch();
              setDisabled((pre) => !pre);
            })
            .catch({});
        }
      } else if (role === "TRANSPORT_MANAGER") {
        if (currentSid !== psid) {
          setDisabled((pre) => !pre);
          transportEidtActivate({
            osid: psid,
            nsid: currentSid,
          })
            .then(() => {
              getStaffDesignationMultipleRefetch();
              setDisabled((pre) => !pre);
            })
            .catch({});
        }
      } else if (role === "ALUMNI") {
        if (currentSid !== psid) {
          setDisabled((pre) => !pre);
          alumniEidtActivate({
            osid: psid,
            nsid: currentSid,
          })
            .then(() => {
              getStaffDesignationMultipleRefetch();
              setDisabled((pre) => !pre);
            })
            .catch({});
        }
      } else {
        setDisabled((pre) => !pre);
      }
    } else {
      if (roleId) {
        onDesignationGrab({
          role: role,
          roleId: roleId,
        });
      }
    }
  };

  return (
    <>
      <div className={style.desgination_card_container}>
        {childProps === "dynamic" ? (
          <div className={style.desgination_card_top} onClick={onToggle}>
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
            <img
              src="/images/member_tab/department/department-desi-check-icon.svg"
              alt="topic icon"
            />
            <h6>{t(label)}</h6>
          </div>
        ) : (
          <div className={style.department_container_normal}>
            {/* {state?.includes(roleId) ? (
              <img
                className={style.department_checkbox}
                src="/images/checkbox-icon.svg"
                alt="icon"
                onClick={onGrab}
              />
            ) : (
              <img
                className={style.department_checkbox}
                src="/images/box-icon.svg"
                alt="icon"
                onClick={onGrab}
              />
            )} */}
            <div className={style.department_container_parent}>
              <div className={style.department_container_wrap}>
                <img
                  src={url}
                  alt="department avatar"
                  className={style.department_card_image}
                />
                <div className={style.department_container_text}>
                  <h6 className={style.department_card_name}>{t(label)}</h6>
                  <h6 className={style.department_card_head_name}>
                    {headName}
                  </h6>
                </div>
              </div>
              {state?.includes(roleId) ? (
                <div className={style.assgined_btn} onClick={onGrab}>
                  {t(assign)}
                </div>
              ) : (
                <div className={style.assgin_btn} onClick={onGrab}>
                  {t(assigned)}
                </div>
              )}
            </div>
          </div>
        )}

        {isOpen ? (
          <div className={style.desi_card_container}>
            <DepartmentDesig
              // state={state}
              // onDesignationGrab={onDesignationGrab}
              currentSid={currentSid}
            />
          </div>
        ) : null}

        {/* {isOpen ? (
        <div className={style.desi_card_container}>
          <div className={style.desi_card}>
            <img
              src={
                staff?.staffProfilePhoto
                  ? `${imageShowUrl}/${staff?.staffProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt=""
            />
            <div className={style.desi_card_text}>
              <h6>{`${staff?.staffFirstName ?? "Ankush"} ${
                staff?.staffMiddleName ?? "Kumar"
              } ${staff?.staffLastName ?? "Singh"}`}</h6>
            </div>
          </div>
          <div className={style.desi_card}>
            <img
              src={
                staff?.staffProfilePhoto
                  ? `${imageShowUrl}/${staff?.staffProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt=""
            />
            <div className={style.desi_card_text}>
              <h6>{`${staff?.staffFirstName ?? "Ankush"} ${
                staff?.staffMiddleName ?? "Kumar"
              } ${staff?.staffLastName ?? "Singh"}`}</h6>
            </div>
          </div>
        </div>
      ) : null} */}
      </div>
      {disabled && <QLoader />}
    </>
  );
};

export default StaffDesignationCard;
