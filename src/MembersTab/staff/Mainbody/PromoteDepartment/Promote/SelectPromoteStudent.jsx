import React, { useEffect, useState } from "react";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import PromoteStudentCard from "./PromoteStudentCard";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QLoader from "../../../../../Loader/QLoader";
import ConfirmDialogWithCount from "../../ConfirmDialog/ConfirmDialogWithCount";
import {
  useGetPromoteStudentByPromote,
  useUndoPromoteStudent,
} from "../../../../../hooks/member_tab/department-api";

const SelectPromoteStudent = ({
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
  const [undoPromoteStudent] = useUndoPromoteStudent();

  const { getPromoteStudentByPromote, getPromoteStudentByPromoteRefetch } =
    useGetPromoteStudentByPromote({
      cid: classId,
      skip: !classId,
    });

  useEffect(() => {
    if (classId) {
      setShowingDataLoading(true);
      getPromoteStudentByPromoteRefetch();
    }
  }, [classId, getPromoteStudentByPromoteRefetch]);
  useEffect(() => {
    if (
      getPromoteStudentByPromote?.promoteStudent ||
      getPromoteStudentByPromote?.promoteStudent?.length === 0
    ) {
      setPromoteStudent(getPromoteStudentByPromote?.promoteStudent ?? []);
      setShowingDataLoading(false);
    }
  }, [getPromoteStudentByPromote?.promoteStudent]);

  const onSearchEvent = (e) => {
    if (e.target.value) {
      const filterStudent = getPromoteStudentByPromote?.promoteStudent?.filter(
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
      setPromoteStudent(filterStudent);
    } else {
      setPromoteStudent(getPromoteStudentByPromote?.promoteStudent);
    }
  };

  const onSelectStudent = (val) => {
    if (promoteData?.arr?.includes(val)) {
      setPromoteData((prev) => ({
        ...prev,
        arr: prev.arr?.filter((ids) => ids !== val),
      }));
    } else {
      setPromoteData((prev) => ({
        ...prev,
        arr: prev.arr ? [...prev.arr, val] : [val],
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
      arr: ids,
    }));
    setIsAllSelect(true);
  };
  const onRemoveAll = () => {
    setPromoteData((prev) => ({
      ...prev,
      arr: [],
    }));
    setIsAllSelect(false);
  };

  const onPromoteStudent = () => {
    setConfirm(false);
    setDisabled((pre) => !pre);
    undoPromoteStudent({
      cid: classId,
      flow: "PARTICULAR_STUDENT",
      undoPromote: {
        arr: promoteData?.arr,
      },
    })
      .then(() => {
        onRefetchParent();
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };

  return (
    <>
      {confirm ? (
        <ConfirmDialogWithCount
          onClose={() => setConfirm(false)}
          title={t("undo_select_student")}
          firstMessage={`${t("undo")} `}
          spanMessage={promoteData?.arr?.length}
          outerSpanMessage={`${t("students")} , ${t("to")} `}
          lastMessage={`${t("previous_class")}`}
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
              {promoteData?.arr?.length > 0
                ? `${promoteData?.arr?.length} `
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
                title="Undo Selected Student"
                onClick={() =>
                  promoteData?.arr?.length > 0 ? setConfirm(true) : null
                }
              >
                {t("undo")}
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
              promoteData={{
                students: promoteData?.arr,
              }}
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

export default SelectPromoteStudent;
