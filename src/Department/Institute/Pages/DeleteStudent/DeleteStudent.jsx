import React, { useEffect, useState } from "react";
import PopupWrapper from "../../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import { useClassAllStudent } from "../../../../hooks/member_tab/class-api";
import { useTranslation } from "react-i18next";
import style from "../../../../MembersTab/staff/Mainbody/DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { imageShowUrl } from "../../../../services/BaseUrl";
import QLoader from "../../../../Loader/QLoader";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import { useDeleteOneClassAllStudent } from "../../Components/DepartmentApi/depart-api";
const DeleteStudent = ({ onClose, cid }) => {
  const { t } = useTranslation();
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [confirmDelete, setConfimDelete] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [deleteOneClassAllStudent] = useDeleteOneClassAllStudent();
  const { classAllStudent, classAllStudentRefetch } = useClassAllStudent({
    data: {
      cid: cid,
      page: 1,
      limit: 30,
    },
    skip: !cid,
  });
  useEffect(() => {
    if (cid) {
      setShowingDataLoading(true);
      classAllStudentRefetch();
    }
  }, [cid, classAllStudentRefetch]);

  useEffect(() => {
    if (classAllStudent?.classes?.ApproveStudent) {
      setStudents(classAllStudent?.classes?.ApproveStudent);
      setShowingDataLoading(false);
    }
  }, [classAllStudent?.classes?.ApproveStudent]);

  const onSearchStudent = (e) => {
    if (e.target.value) {
      const filterStudent = classAllStudent?.classes?.ApproveStudent?.filter(
        (student) => {
          if (
            `${student?.studentFirstName} ${
              student?.studentMiddleName ? student?.studentMiddleName + " " : ""
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
      setStudents(classAllStudent?.classes?.ApproveStudent);
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

  const onNext = () => {
    setConfimDelete((pre) => !pre);
  };

  const onDeleteStudent = () => {
    setDisabled((pre) => !pre);
    deleteOneClassAllStudent({
      cid: cid,
      student_list: {
        all_students: selectedStudent,
      },
    })
      .then(() => {
        classAllStudentRefetch();
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  return (
    <PopupWrapper onClose={onClose}>
      {!confirmDelete && (
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
            <h6>{t("select_deleted_student_list")}</h6>
            <button
              className={style.next_btn}
              title="Delete students"
              onClick={onNext}
            >
              {t("delete")}
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
                  <h6>{`${value.studentFirstName ?? ""} ${
                    value?.studentMiddleName ?? ""
                  } ${value.studentLastName ?? ""}`}</h6>
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
        </div>
      )}
      {confirmDelete && (
        <div
          className={style.seating_modal}
          style={{
            minHeight: "10rem",
          }}
        >
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
            <h6>{t("confirm_to_delete_all_student")}</h6>
          </section>
          <BorderBottom
            customStyle={{
              width: "100%",
            }}
          />
          <button
            className={style.normal_confirm_btn}
            onClick={onDeleteStudent}
            style={{
              marginTop: "3rem",
            }}
          >
            {t("confirm")}
          </button>
          {disabled && <QLoader />}
        </div>
      )}
    </PopupWrapper>
  );
};

export default DeleteStudent;
