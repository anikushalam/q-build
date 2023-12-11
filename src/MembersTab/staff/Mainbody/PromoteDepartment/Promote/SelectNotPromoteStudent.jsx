import React, { useEffect, useState } from "react";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import { useGetNotPromoteStudentByPromote } from "../../../../../hooks/member_tab/department-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import PromoteStudentCard from "./PromoteStudentCard";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useClassPromoteStudent } from "../../../../../hooks/member_tab/class-api";
import QLoader from "../../../../../Loader/QLoader";
import ConfirmDialogWithCount from "../../ConfirmDialog/ConfirmDialogWithCount";

const SelectNotPromoteStudent = ({
  classId,
  promoteData,
  setPromoteData,
  onClose,
  onRefetchParent,
}) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [promoteStudent, setPromoteStudent] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [isAllSelect, setIsAllSelect] = useState(false);
  const [classPromoteStudent] = useClassPromoteStudent();
  const {
    getNotPromoteStudentByPromote,
    getNotPromoteStudentByPromoteRefetch,
  } = useGetNotPromoteStudentByPromote({
    data: {
      cid: classId,
      valid_app_fee: promoteData?.applicable_with_fees === "Yes" ? "Yes" : "No",
    },
    skip: !classId,
  });
  useEffect(() => {
    if (classId) {
      setShowingDataLoading(true);
      getNotPromoteStudentByPromoteRefetch();
    }
  }, [classId, getNotPromoteStudentByPromoteRefetch]);
  useEffect(() => {
    if (
      getNotPromoteStudentByPromote?.notPromoteStudent ||
      getNotPromoteStudentByPromote?.notPromoteStudent?.length === 0
    ) {
      setPromoteStudent(getNotPromoteStudentByPromote?.notPromoteStudent ?? []);
      setShowingDataLoading(false);
    }
  }, [getNotPromoteStudentByPromote?.notPromoteStudent]);

  const onSearchEvent = (e) => {
    if (e.target.value) {
      const filterStudent =
        getNotPromoteStudentByPromote?.notPromoteStudent?.filter((student) => {
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
      setPromoteStudent(filterStudent);
    } else {
      setPromoteStudent(getNotPromoteStudentByPromote?.notPromoteStudent);
    }
  };

  const onSelectStudent = (val) => {
    if (promoteData?.students?.includes(val)) {
      setPromoteData((prev) => ({
        ...prev,
        students: prev.students?.filter((ids) => ids !== val),
      }));
    } else {
      setPromoteData((prev) => ({
        ...prev,
        students: prev.students ? [...prev.students, val] : [val],
      }));
    }
  };
  const onSelectAll = () => {
    let ids = [];
    for (let val of promoteStudent) {
      ids.push(val?._id);
    }
    setPromoteData((prev) => ({
      ...prev,
      students: ids,
    }));
    setIsAllSelect(true);
  };
  const onRemoveAll = () => {
    setPromoteData((prev) => ({
      ...prev,
      students: [],
    }));
    setIsAllSelect(false);
  };

  const onPromoteStudent = () => {
    if (classId) {
      setConfirm(false);
      setDisabled((pre) => !pre);
      classPromoteStudent({
        cid: classId,
        promote: {
          applicable_with_fees: promoteData?.applicable_with_fees,
          departmentId: promoteData?.departmentId?._id,
          batchId: promoteData?.batchId?._id,
          classId: promoteData?.classId?._id,
          students: promoteData?.students,
        },
        flow:
          promoteData?.promot_with_fees === "Yes"
            ? "WITH_STRUCTURE"
            : "WITH_OUT_STRUCTURE",
        re_ads: promoteData?.re_ads === "Yes" ? "WITH_RE_ADMISSION" : "No",
      })
        .then(() => {
          onRefetchParent();
          getNotPromoteStudentByPromoteRefetch();
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <>
      {confirm ? (
        <ConfirmDialogWithCount
          onClose={() => setConfirm(false)}
          title={t("promote_select_student")}
          firstMessage={`${t("promote")} `}
          spanMessage={promoteData?.students?.length}
          outerSpanMessage={`${t("students")} , ${t("to")} `}
          lastMessage={`${promoteData?.classId?.classTitle}, ${promoteData?.batchId?.batchName}, ${promoteData?.departmentId?.dName}`}
          buttonLabel={t("confirm")}
          onHandler={onPromoteStudent}
          messageStyle={{
            marginTop: "3.7rem",
          }}
          buttonStyle={{
            marginTop: "5.7rem",
          }}
        />
      ) : (
        <>
          <div className={style.select_header}>
            <h6>
              {promoteData?.students?.length > 0
                ? `${promoteData?.students?.length} `
                : ""}
              {t("select_student")}
            </h6>
            <div>
              {isAllSelect ? (
                <button
                  className={style.select_all_btn}
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
                  className={style.select_all_btn}
                  title="Select All Student"
                  onClick={onSelectAll}
                  style={{
                    marginRight: "0.7rem",
                  }}
                >
                  {t("select_all")}
                </button>
              )}

              <button
                className={style.promote_all_btn}
                title="Promote Selected Student"
                onClick={() =>
                  promoteData?.students?.length > 0 ? setConfirm(true) : null
                }
              >
                {t("promote")}
              </button>
            </div>
          </div>
          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "0.5rem",
            }}
          />

          <div
            className={style.with_search}
            style={{
              marginTop: "1rem",
              width: "100%",
              border: "0.4px solid rgba(0, 0, 0, 0.15)",
              borderRadius: "6px",
              marginBottom: "0.3rem",
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
          {promoteStudent?.map((stu, index) => (
            <PromoteStudentCard
              key={index}
              promoteData={promoteData}
              stu={stu}
              onSelectStudent={onSelectStudent}
            />
          ))}
          {showingDataLoading && <QvipleLoading />}
          {disabled && <QLoader />}
        </>
      )}
    </>
  );
};

export default SelectNotPromoteStudent;
