import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../Exminations/SeatingArrangement/SeatingArrangement.module.css";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { useGetClassStudentList } from "../../../../../../hooks/member_tab/department-api";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import QLoader from "../../../../../../Loader/QLoader";
const SelectMenteeList = ({ disabled, onClose, onAddStudent, cid }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const { getClassStudentList, getClassStudentListRefetch } =
    useGetClassStudentList({
      cid: cid,
      skip: !cid,
    });
  useEffect(() => {
    if (cid) {
      setShowingDataLoading(true);
      getClassStudentListRefetch();
    }
  }, [cid, getClassStudentListRefetch]);

  useEffect(() => {
    if (getClassStudentList?.assigned_mentee) {
      setStudents(getClassStudentList?.assigned_mentee);
      setShowingDataLoading(false);
    } else if (getClassStudentList?.assigned_mentee?.length === 0)
      setShowingDataLoading(false);
    else {
    }
  }, [getClassStudentList?.assigned_mentee]);

  const onSearchStudent = (e) => {
    if (e.target.value) {
      const filterStudent = getClassStudentList?.assigned_mentee?.filter(
        (student) => {
          if (
            `${student?.studentFirstName}${
              student?.studentMiddleName
                ? ` ${student?.studentMiddleName}`
                : " "
            }${student?.studentLastName}`
              ?.toLowerCase()
              ?.includes(e.target.value?.toLowerCase())
          ) {
            return student;
          } else {
            return null;
          }
        }
      );
      setStudents(filterStudent);
    } else {
      setStudents(getClassStudentList?.assigned_mentee);
    }
  };

  const onSelectAll = () => {
    let arr = [];
    for (let student of students) arr.push(student?._id);
    setSelectedStudent(arr);
    setSelectAll(true);
  };
  const onRemoveAll = () => {
    setSelectedStudent([]);
    setSelectAll(false);
  };

  const onSelectOne = (student) => {
    if (selectedStudent?.includes(student)) {
      setSelectedStudent((prev) => prev?.filter((ids) => ids !== student));
    } else {
      setSelectedStudent((prev) => [...prev, student]);
    }
  };
  const onAddMentee = () => {
    if (selectedStudent?.length > 0) {
      onAddStudent(selectedStudent);
    }
  };

  return (
    <PopupWrapper onClose={onClose}>
      {/* <div className={style.assign_role_container}>
        <section className={style.assign_role_title}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt="back icon"
          />

          <h6>{t(modalTitle ? modalTitle : "select_student")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <section
          style={{
            padding: "0 0.8rem",
          }}
        >
          <div className={style.search_container}>
            <div className={style.search_container_text}>
              <img
                className={style.searchIcon}
                alt="search icon"
                src="/images/search-dash-icon.svg"
              />
              <input
                type="text"
                placeholder={t("search-label")}
                // onChange={onSearchEvent}
                autoFocus={true}
                style={{
                  border: "0.029vw solid rgba(0, 0, 0, 0.15)",
                  width: "450px",
                }}
              />
            </div>
          </div>
          {students?.map((student) => (
            <section
              className={style.student_container}
              title="Select student"
              key={student?._id}
              onClick={() => onSelectStudent(student)}
            >
              <img
                src={
                  student.photoId !== "1"
                    ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
                alt="student avatar"
              />
              <div className={style.student_container_name}>
                <h6>{`${student?.studentFirstName} ${
                  student?.studentMiddleName ? student?.studentMiddleName : ""
                } ${student?.studentLastName}`}</h6>
                <p className={style.student_container_gr}>
                  {t("gr_number")} {student?.studentGRNO}
                </p>
              </div>
            </section>
          ))}
          {showingDataLoading && <QvipleLoading />}
        </section>
      </div> */}
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
          <h6>{t("select_student")}</h6>
          <button
            className={style.next_btn}
            title="Add mentee"
            onClick={onAddMentee}
          >
            {t("add")}
          </button>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <div className={style.select_mutliple}>
          <p>
            {selectedStudent?.length ? selectedStudent?.length : ""} {` `}
            {t("selected")}
          </p>
          {selectAll ? (
            <button onClick={onRemoveAll}>{t("remove_all")}</button>
          ) : (
            <button onClick={onSelectAll}>{t("select_all")}</button>
          )}
        </div>
        <div
          className={style.search_container}
          style={{
            marginBottom: "0.5rem",
          }}
        >
          <div
            className={style.search_container_input}
            style={{
              width: "100%",
            }}
          >
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input
              type="text"
              placeholder={t("search-label")}
              style={{
                width: "100%",
              }}
              onChange={onSearchStudent}
            />
          </div>
        </div>

        {students?.map((value) => (
          <div
            className={style.person_container}
            key={value._id}
            onClick={() => onSelectOne(value?._id)}
          >
            <img
              src={
                value?.studentProfilePhoto
                  ? `${imageShowUrl}/${value.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="student profile avatar"
              loading="lazy"
            />
            <div className={style.with_check_container}>
              <div className={style.person_container_text}>
                <h6>{`${value?.studentFirstName ?? ""} ${
                  value?.studentMiddleName ?? ""
                } ${value?.studentLastName ?? ""}`}</h6>
                <p>
                  {t("index")} {value?.studentROLLNO}
                </p>
              </div>
              {selectedStudent?.includes(value?._id) ? (
                <img
                  src="/images/department/blue-check-icon.svg"
                  alt="checkbox icon"
                  title="Select student"
                />
              ) : (
                <img
                  src="/images/department/uncheck-icon.svg"
                  alt="checkbox icon"
                  title="Unselect student"
                />
              )}
            </div>
          </div>
        ))}
        {showingDataLoading && <QvipleLoading />}
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default SelectMenteeList;
