import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QLoader from "../../../../../Loader/QLoader";
import {
  useAddClassStudentToBatch,
  useClassAllStudent,
} from "../../../../../hooks/member_tab/class-api";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import QvipleLoading from "../../../../../Loader/QvipleLoading";

const AddStudentByClassCatalog = ({
  cid,
  onClose,
  onRefetch,
  batchId,
  onCloseParent,
}) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [allStudent, setAllStudent] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isAllSelect, setIsAllSelect] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [addClassStudentToBatch] = useAddClassStudentToBatch();
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
      setAllStudent(classAllStudent?.classes?.ApproveStudent);
      setShowingDataLoading(false);
    } else if (classAllStudent?.classes?.ApproveStudent?.length === 0)
      setShowingDataLoading(false);
    else {
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
              ?.includes(e.target.value?.toLowerCase()) ||
            `${student?.studentGRNO}`
              ?.toLowerCase()
              ?.includes(e.target.value?.toLowerCase())
          ) {
            return student;
          } else {
            return null;
          }
        }
      );
      setAllStudent(filterStudent);
    } else {
      setAllStudent(classAllStudent?.classes?.ApproveStudent);
    }
  };

  const onSelectStudent = (sid) => {
    if (studentId?.includes(sid)) {
      setStudentId((prev) => prev?.filter((val) => val !== sid));
    } else {
      setStudentId((prev) => [...prev, sid]);
    }
  };

  const onSelectAll = () => {
    let ids = [];
    for (let val of classAllStudent?.classes?.ApproveStudent) {
      // if (val?.class_selected_batch?.batchName) {
      // } else {
      ids.push(val?._id);
      // }
    }
    setStudentId(ids);
    setIsAllSelect(true);
  };
  const onRemoveAll = () => {
    setStudentId([]);
    setIsAllSelect(false);
  };

  const onAddStudent = () => {
    if (batchId && studentId?.length) {
      setDisabled((pre) => !pre);
      addClassStudentToBatch({
        bid: batchId,
        addStudent: {
          student_arr: studentId,
        },
      })
        .then(() => {
          onRefetch();
          onCloseParent();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <PopupWrapper onClose={() => {}}>
      <div
        className={style.assign_role_container}
        style={{
          width: "40rem",
        }}
      >
        <section
          className={style.assign_role_title}
          style={{
            justifyContent: "space-between",
          }}
        >
          <h6>
            {studentId?.length > 0 ? `${studentId?.length} ` : ""}
            {t("select_student")}
          </h6>
          <div
            className={style.button_container}
            style={{
              justifyContent: "flex-end",
              gap: "1rem",
            }}
          >
            {isAllSelect ? (
              <button
                className={style.next_student_btn}
                title="Remove All Student"
                onClick={onRemoveAll}
                style={{
                  marginRight: "0.7rem",
                }}
              >
                {t("remove_all")}
              </button>
            ) : (
              <button
                className={style.next_student_btn}
                title="Select All Student"
                onClick={onSelectAll}
                style={{
                  marginRight: "0.7rem",
                }}
              >
                {t("select_all")}
              </button>
            )}
            <button className={style.next_student_btn} onClick={onAddStudent}>
              {t("add")}
            </button>
            <img
              src="/images/close-post-icon.svg"
              onClick={onClose}
              alt=""
              style={{
                cursor: "pointer",
              }}
            />
          </div>
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
          <div
            className={style.search_container}
            style={{
              marginBottom: "0.6rem",
            }}
          >
            <div className={style.search_container_text}>
              <img
                className={style.searchIcon}
                alt="search icon"
                src="/images/search-dash-icon.svg"
              />
              <input
                type="text"
                placeholder={t("search-label")}
                onChange={onSearchEvent}
                autoFocus={true}
                style={{
                  border: "0.029vw solid rgba(0, 0, 0, 0.15)",
                  width: "450px",
                }}
              />
            </div>
          </div>
          {allStudent?.map(
            (student) => (
              // student?.class_selected_batch?.batchName ? null : (
              <section
                className={
                  studentId?.includes(student?._id)
                    ? `${style.student_container} ${style.select_hover_active}`
                    : `${style.student_container} ${style.select_hover}`
                }
                key={student?._id}
                style={{
                  padding: "0.6rem 0.4rem",
                  margin: "0",
                  justifyContent: "space-between",
                }}
              >
                <div className={style.student_container_text}>
                  <p
                    className={style.student_container_gr}
                    style={{
                      marginBottom: "0",
                    }}
                  >
                    {student?.studentROLLNO ?? ""}
                  </p>
                  <img
                    src={
                      student?.studentProfilePhoto
                        ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                    alt="student avatar"
                  />
                  <div className={style.student_container_name}>
                    <h6>{`${student?.studentFirstName} ${
                      student?.studentMiddleName
                        ? student?.studentMiddleName
                        : ""
                    } ${student?.studentLastName}`}</h6>
                    <p className={style.student_container_gr}>
                      {t("gr_number")} {student?.studentGRNO ?? ""}
                      {student?.class_selected_batch?.batchName
                        ? `, ${t("batch")}: ${
                            student?.class_selected_batch?.batchName
                          }`
                        : null}
                    </p>
                  </div>
                </div>
                <div className={style.student_container_text}>
                  {studentId?.includes(student?._id) ? (
                    <img
                      src="/images/checkbox-icon.svg"
                      alt="icon"
                      style={{
                        borderRadius: "0",
                        height: "1.5rem",
                      }}
                      onClick={() => onSelectStudent(student?._id)}
                    />
                  ) : (
                    <img
                      src="/images/box-icon.svg"
                      alt="icon"
                      style={{
                        borderRadius: "0",
                        height: "1.5rem",
                      }}
                      onClick={() => onSelectStudent(student?._id)}
                    />
                  )}
                </div>
              </section>
            )
            // )
          )}
          {showingDataLoading && <QvipleLoading status="white" />}
          {disabled && <QLoader />}
        </section>
      </div>
    </PopupWrapper>
  );
};

export default AddStudentByClassCatalog;
