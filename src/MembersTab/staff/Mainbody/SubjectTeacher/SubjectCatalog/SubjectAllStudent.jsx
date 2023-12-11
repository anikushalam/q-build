import React, { useEffect, useRef, useState } from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "../../ClassTeacher/ClassCatalog/Catalog/Catalog.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useGetAllStudentOneSubject } from "../../../../../hooks/member_tab/subject-api";

function SubjectAllStudent({ cid, sid, isDepartment }) {
  const dDate = new Date();
  const dates = dDate.toISOString()?.split("-");
  const day = dates[2]?.substring(0, 2);
  const month = dates[1];
  const params = useParams();
  const { t } = useTranslation();
  const [students, setStudents] = useState([]);

  // // for drag evenet
  // const dragItem = useRef();
  // const dragOverItem = useRef();

  const { getAllStudentOneSubject, getAllStudentOneSubjectRefetch } =
    useGetAllStudentOneSubject({
      data: {
        cid: cid,
        subjectId: sid,
        today: `${day}/${month}/${dates[0]}`,
      },
      skip: !cid,
    });

  useEffect(() => {
    if (cid) getAllStudentOneSubjectRefetch();
  }, [cid, getAllStudentOneSubjectRefetch]);

  useEffect(() => {
    if (getAllStudentOneSubject?.classes?.ApproveStudent) {
      setStudents(getAllStudentOneSubject?.classes?.ApproveStudent);
    }
  }, [getAllStudentOneSubject?.classes?.ApproveStudent]);

  const onSearchStudent = (e) => {
    if (e.target.value) {
      const filterStudent =
        getAllStudentOneSubject?.classes?.ApproveStudent?.filter((student) => {
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
        });
      setStudents(filterStudent);
    } else {
      setStudents(getAllStudentOneSubject?.classes?.ApproveStudent);
    }
  };

  // const onDragEventStart = (e, position) => {
  //   e.stopPropagation();
  //   dragItem.current = position;
  // };

  // const onDragEventEnter = (e, position) => {
  //   e.stopPropagation();
  //   dragOverItem.current = position;
  // };

  // const onDropItem = (e) => {
  //   e.stopPropagation();
  //   //for only ids
  //   const studentCopy = [...students];
  //   const dragItemContentCls = studentCopy[dragItem.current];
  //   studentCopy.splice(dragItem.current, 1);
  //   studentCopy.splice(dragOverItem.current, 0, dragItemContentCls);

  //   dragItem.current = null;
  //   dragOverItem.current = null;
  //   setStudents(studentCopy);
  // };
  return (
    <div
      className={style.catalog}
      style={{
        border: isDepartment ? "none" : "0.5px solid #cacaca",
      }}
    >
      <div className={style.searchContainerr}>
        <div className={style.searchContainer}>
          <img alt="" src="/images/search-dept-icon.svg" />
          <input
            type="text"
            placeholder={t("search-label")}
            onChange={onSearchStudent}
          />
        </div>
        {/* <div className={style.checklistbtn}>Settings</div> */}
      </div>

      <div className={style.itemsContainerr}>
        {students?.map((stu, index) => (
          <Link
            to={`/q/${params.username}/student/profile`}
            state={{ sid: stu?._id, viewAs: "SUBJECT_TEACHER" }}
          >
            <div
              className={style.itemsContaiiner}
              // draggable
              // onDragStart={(e) => onDragEventStart(e, index)}
              // onDragEnter={(e) => onDragEventEnter(e, index)}
              // onDragEnd={onDropItem}
            >
              <div className={style.item}>
                <p>{stu?.studentROLLNO}</p>
                <img
                  alt=""
                  src={
                    stu?.studentProfilePhoto
                      ? `${imageShowUrl}/${stu?.studentProfilePhoto}`
                      : "/images/member_tab/class/default_avatar.svg"
                  }
                />
                <div className={style.student_catalog_with_attendance}>
                  <div className={style.student_catalog_name}>
                    <h5>
                      {stu?.studentFirstName ?? ""}{" "}
                      {stu?.studentMiddleName ?? " "}{" "}
                      {stu?.studentLastName ?? ""}
                    </h5>
                    <h6>
                      {t("gr_number")}{" "}
                      <span
                        style={{
                          fontWeight: "500",
                        }}
                      >
                        {stu?.studentGRNO ?? ""}
                      </span>
                    </h6>
                  </div>
                  <div
                    className={style.student_catalog_name}
                    style={{
                      alignItems: "flex-end",
                    }}
                  >
                    <h6>
                      {t("today")}
                      {" : "}
                      <span
                        style={{
                          fontWeight: "500",
                          color:
                            stu?.todayStatus === "P" ? "#20b038" : "#ee3833",
                        }}
                      >
                        {stu?.todayStatus ?? ""}
                      </span>
                    </h6>
                    <h6>
                      {t("overall_percentage")}
                      {" : "}
                      <span
                        style={{
                          fontWeight: "500",
                          color:
                            stu?.totalPercentage > 75 ? "#20b038" : "#ee3833",
                        }}
                      >
                        {stu?.totalPercentage ?? ""}
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SubjectAllStudent;
