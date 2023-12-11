import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useClassAllStudent } from "../../../hooks/member_tab/class-api";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "../../../MembersTab/staff/Mainbody/ClassTeacher/ClassCatalog/Catalog/Catalog.module.css";
const InstituteClassStudentList = ({ cid, openAs, isDepartment }) => {
  const params = useParams();
  const { t } = useTranslation();
  const [students, setStudents] = useState([]);
  const { classAllStudent, classAllStudentRefetch } = useClassAllStudent({
    data: {
      cid: cid,
      page: 1,
      limit: 30,
    },
    skip: !cid,
  });
  useEffect(() => {
    if (cid) classAllStudentRefetch();
  }, [cid, classAllStudentRefetch]);

  useEffect(() => {
    if (classAllStudent?.classes?.ApproveStudent) {
      setStudents(classAllStudent?.classes?.ApproveStudent);
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
  return (
    <>
      <div
        className={style.catalog}
        style={{
          border: isDepartment ? "none" : "0.5px solid #cacaca",
        }}
      >
        <div className={style.searchContainerr}>
          <div
            className={style.searchContainer}
            style={{
              width: "100%",
            }}
          >
            <img alt="" src="/images/search-dept-icon.svg" />
            <input
              type="text"
              placeholder={t("search-label")}
              onChange={onSearchStudent}
            />
          </div>
        </div>

        <div className={style.itemsContainer}>
          {students?.map((stu) => (
            <Link
              to={`/q/${params.username}/student/profile`}
              state={{ sid: stu?._id, viewAs: openAs ? openAs : "INSTITUTE" }}
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
                <div>
                  <p>
                    {stu?.studentFirstName}{" "}
                    {stu?.studentMiddleName ? stu?.studentMiddleName : " "}{" "}
                    {stu?.studentLastName}
                  </p>
                  <p
                    style={{
                      marginTop: "0.3rem",
                    }}
                  >
                    {t("gr_number")} {stu?.studentGRNO ?? ""}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default InstituteClassStudentList;
