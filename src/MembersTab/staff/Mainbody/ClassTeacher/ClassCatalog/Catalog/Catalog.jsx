import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
  useClassAllStudent,
  useClassAllStudentFilter,
  useClassResuffleRearrange,
} from "../../../../../../hooks/member_tab/class-api";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "./Catalog.module.css";
import QLoader from "../../../../../../Loader/QLoader";
import { Link, useLocation, useParams } from "react-router-dom";
import SelectUnapprovedStudent from "./SelectUnapprovedStudent";
import { useTranslation } from "react-i18next";
import UniversalTab from "../../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
function Catalog({ cid, instituteId, carryParentState }) {
  const params = useParams();
  const getQuery = useLocation();
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");
  const [seletcButton, setSeletcButton] = useState("");
  const [filterQueryYes, setFilterQueryYes] = useState(false);
  const [addStudent, setAddStudent] = useState(false);
  const [students, setStudents] = useState([]);
  const [isDragable, setIsDragable] = useState(false);

  const [classResuffleRearrange] = useClassResuffleRearrange();
  const tabList = [
    {
      name: t("catalog"),
      id: 0,
      url: `member/class/${params.cname}?a=catalog`,
    },
    {
      name: t("unapproved_student"),
      id: 1,
      url: `member/class/${params.cname}?a=catalog&unapproved`,
    },
  ];

  const { classAllStudent, classAllStudentRefetch } = useClassAllStudent({
    data: {
      cid: cid,
      page: 1,
      limit: 30,
    },
    skip: !cid,
  });

  const { classAllStudentFilter, classAllStudentFilterRefetch } =
    useClassAllStudentFilter({
      data: {
        cid: cid,
        page: 1,
        limit: 30,
        sort_query: filterQuery,
      },
      skip: filterQueryYes ? !cid : true,
    });

  useEffect(() => {
    if (cid) classAllStudentRefetch();
  }, [cid, classAllStudentRefetch]);

  useEffect(() => {
    if (cid) classAllStudentFilterRefetch();
  }, [cid, filterQuery, classAllStudentFilterRefetch]);

  useEffect(() => {
    if (classAllStudentFilter?.students) {
      setStudents(classAllStudentFilter?.students);
      setDisabled(false);
    }
  }, [classAllStudentFilter?.students]);

  useEffect(() => {
    if (!filterQueryYes) {
      setStudents(classAllStudent?.classes?.ApproveStudent);
    }
  }, [classAllStudent?.classes?.ApproveStudent]);

  const onSearchStudent = (e) => {
    if (!filterQueryYes) {
      if (e.target.value) {
        const filterStudent = classAllStudent?.classes?.ApproveStudent?.filter(
          (student) => {
            if (
              `${student?.studentFirstName} ${
                student?.studentMiddleName
                  ? student?.studentMiddleName + " "
                  : ""
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
    } else {
      if (e.target.value) {
        const filterStudent = classAllStudentFilter?.students?.filter(
          (student) => {
            if (
              `${student?.studentFirstName} ${
                student?.studentMiddleName
                  ? student?.studentMiddleName + " "
                  : ""
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
        setStudents(classAllStudentFilter?.students);
      }
    }
  };
  const onFilterHandler = (val) => {
    setDisabled(true);
    if (seletcButton) {
      setSeletcButton("Gender_Alpha");
      setFilterQuery("Gender_Alpha");
      setFilterQueryYes(true);
    } else {
      setSeletcButton(val);
      setFilterQuery(val);
      setFilterQueryYes(true);
    }
  };

  // for drag evenet
  const dragItem = useRef();
  const dragOverItem = useRef();

  const onDragEventStart = (e, position) => {
    e.stopPropagation();
    dragItem.current = position;
  };

  const onDragEventEnter = (e, position) => {
    e.stopPropagation();
    dragOverItem.current = position;
  };

  const onDropItem = (e) => {
    e.stopPropagation();
    //for only ids
    const studentCopy = [...students];
    const dragItemContentCls = studentCopy[dragItem.current];
    studentCopy.splice(dragItem.current, 1);
    studentCopy.splice(dragOverItem.current, 0, dragItemContentCls);

    dragItem.current = null;
    dragOverItem.current = null;
    setStudents(studentCopy);
  };
  const onSaveResuffle = () => {
    setDisabled((pre) => !pre);
    let arr = [];
    for (let ids of students) {
      arr.push(ids?._id);
    }
    classResuffleRearrange({
      suffle: {
        shuffle_arr: arr,
        cid: cid,
        flow: "CLASS_WISE",
      },
    })
      .then(() => {
        classAllStudentRefetch();
        classAllStudentFilterRefetch();
        setDisabled((pre) => !pre);
        setIsDragable(false);
      })
      .catch({});
  };
  return (
    <>
      <div className={style.catalog}>
        <UniversalTab
          tabList={tabList}
          activeIndexTab={getQuery.search?.substring(3) === "catalog" ? 0 : 1}
          showAs
          customStyleLink={{
            width: "50%",
          }}
          carryParentState={carryParentState}
        />
        <BorderBottom
          customStyle={{
            width: "100%",
            marginBottom: "0.5rem",
          }}
        />
        <div className={style.searchContainerr}>
          <div className={style.searchContainer}>
            <img alt="" src="/images/search-dept-icon.svg" />
            <input
              type="text"
              placeholder={t("search-label")}
              onChange={onSearchStudent}
            />
          </div>
          <div className={style.class_catalog_funtcion}>
            <div
              className={
                // seletcButton === "Gender" || seletcButton === "Gender_Alpha"
                //   ? `${style.sort_conatiner} ${style.sort_conatiner_active}`
                //   :
                style.sort_conatiner
              }
              onClick={() => setAddStudent(true)}
            >
              <span>{t("add_unapproved_students")}</span>
            </div>
            {isDragable ? (
              <>
                <div className={style.class_catalog_funtcion}>
                  <div
                    className={
                      seletcButton === "Gender" ||
                      seletcButton === "Gender_Alpha"
                        ? `${style.sort_conatiner} ${style.sort_conatiner_active}`
                        : style.sort_conatiner
                    }
                    onClick={() => onFilterHandler("Gender")}
                  >
                    <img
                      src="/images/members/gender-icon.svg"
                      alt="gender icon"
                    />
                    {/* <span>{t("gender")}</span> */}
                  </div>
                  <div
                    className={
                      seletcButton === "Alpha" ||
                      seletcButton === "Gender_Alpha"
                        ? `${style.sort_conatiner} ${style.sort_conatiner_active}`
                        : style.sort_conatiner
                    }
                    onClick={() => onFilterHandler("Alpha")}
                  >
                    <img
                      src="/images/members/alphabet-icon.svg"
                      alt="alphabet sorting icon"
                    />
                    {/* <span>{t("aphabetically")}</span> */}
                  </div>
                </div>
                <div
                  className={`${style.sort_conatiner} ${style.sort_conatiner_active}`}
                  onClick={onSaveResuffle}
                >
                  <span>{t("save")}</span>
                </div>
              </>
            ) : (
              <div
                className={style.sort_conatiner}
                onClick={() => setIsDragable(true)}
              >
                <span>{t("resuffle")}</span>
              </div>
            )}
          </div>

          {/* <div className={style.checklistbtn}>Checklist</div> */}
        </div>

        <div className={style.itemsContainer}>
          {students?.map((stu, index) => (
            <Link
              to={`/q/${params.username}/student/profile`}
              state={{ sid: stu?._id, viewAs: "CLASS_CATALOG" }}
            >
              <div
                className={style.item}
                draggable={isDragable}
                onDragStart={(e) => onDragEventStart(e, index)}
                onDragEnter={(e) => onDragEventEnter(e, index)}
                onDragEnd={onDropItem}
              >
                <p>{stu?.studentROLLNO}</p>
                <img
                  alt=""
                  src={
                    stu?.studentProfilePhoto
                      ? `${imageShowUrl}/${stu?.studentProfilePhoto}`
                      : "/images/member_tab/class/default_avatar.svg"
                  }
                />
                <div className={style.student_catalog_name}>
                  <h5>
                    {stu?.studentFirstName ?? ""}{" "}
                    {stu?.studentMiddleName ?? " "} {stu?.studentLastName ?? ""}
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
                    {/* {stu?.class_selected_batch?.batchName ? (
                      <span
                        style={{
                          fontWeight: "500",
                        }}
                      >
                        {`, ${t("batch")}: ${
                          stu?.class_selected_batch?.batchName
                        }`}
                      </span>
                    ) : null} */}
                  </h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {addStudent && (
        <SelectUnapprovedStudent
          cid={cid}
          onClose={() => setAddStudent(false)}
          instituteId={instituteId}
          onRefetch={classAllStudentRefetch}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
}

export default Catalog;
