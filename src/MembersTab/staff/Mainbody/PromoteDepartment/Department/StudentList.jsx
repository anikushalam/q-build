import React, { useEffect, useState } from "react";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import { useClassAllStudent } from "../../../../../hooks/member_tab/class-api";
import StudentCard from "./StudentCard";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
const StudentList = ({ classId }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const { classAllStudent, classAllStudentRefetch } = useClassAllStudent({
    data: {
      cid: classId,
      page: 1,
      limit: 30,
    },
    skip: !classId,
  });
  useEffect(() => {
    if (classId) {
      setShowingDataLoading(true);
      classAllStudentRefetch();
    }
  }, [classId, classAllStudentRefetch]);
  useEffect(() => {
    if (
      classAllStudent?.classes?.ApproveStudent ||
      classAllStudent?.classes?.ApproveStudent?.length === 0
    ) {
      setStudents(classAllStudent?.classes?.ApproveStudent ?? []);
      setShowingDataLoading(false);
    }
  }, [classAllStudent?.classes?.ApproveStudent]);

  const onSearchEvent = (e) => {
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
  return (
    <>
      <div
        className={style.with_search}
        style={{
          marginTop: "1rem",
          width: "100%",
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
            placeholder="Search Student..."
            style={{
              width: "100%",
            }}
            onChange={onSearchEvent}
          />
        </div>
      </div>

      <h6 className={style.total_student_count}>
        {t("total_student")} {classAllStudent?.classes?.studentCount ?? 0}
      </h6>
      <div className={style.total_other_count_container}>
        <p>
          {t("boys_promote")}
          {classAllStudent?.classes?.boyCount ?? 0}
        </p>
        <p>
          {t("girl_promote")}
          {classAllStudent?.classes?.girlCount ?? 0}
        </p>
      </div>
      {students?.map((stu) => (
        <StudentCard stu={stu} key={stu?._id} />
      ))}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default StudentList;
