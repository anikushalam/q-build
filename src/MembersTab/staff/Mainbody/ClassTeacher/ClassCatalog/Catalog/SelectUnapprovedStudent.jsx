import React, { useCallback, useEffect, useState } from "react";
import style from "../../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetUnapprovedStudentByInstitute } from "../../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { debounce } from "lodash";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useAddUnapprovedStudentByClass } from "../../../../../../hooks/member_tab/class-api";
import QLoader from "../../../../../../Loader/QLoader";

const SelectUnapprovedStudent = ({ instituteId, onClose, onRefetch, cid }) => {
  const { t } = useTranslation();
  const [studentId, setStudentId] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [allStudent, setAllStudent] = useState([]);
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [addUnapprovedStudentByClass] = useAddUnapprovedStudentByClass();
  const {
    getUnapprovedStudentByInstitute,
    getUnapprovedStudentByInstituteRefetch,
  } = useGetUnapprovedStudentByInstitute({
    data: {
      id: instituteId,
      page: page,
      limit: 10,
      search: search,
    },
    skip: !instituteId,
  });
  useEffect(() => {
    if (instituteId) {
      setShowingDataLoading(true);
      getUnapprovedStudentByInstituteRefetch();
    }
  }, [instituteId, page, search, getUnapprovedStudentByInstituteRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (search) {
      setAllStudent(getUnapprovedStudentByInstitute?.studentIns);
      setShowingDataLoading(false);
    } else {
      if (getUnapprovedStudentByInstitute?.studentIns) {
        setAllStudent((prevState) =>
          [
            ...new Set(
              [
                ...prevState,
                ...getUnapprovedStudentByInstitute?.studentIns,
              ]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getUnapprovedStudentByInstitute?.studentIns?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (getUnapprovedStudentByInstitute?.studentIns?.length === 10)
      setState(true);
    else setState(false);
  }, [getUnapprovedStudentByInstitute?.studentIns]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };

  const onSelectStudent = (sid) => {
    if (studentId?.includes(sid)) {
      setStudentId((prev) => prev?.filter((val) => val !== sid));
    } else {
      setStudentId((prev) => [...prev, sid]);
    }
  };

  const onAddStudent = () => {
    if (cid && studentId?.length) {
      setDisabled((pre) => !pre);
      addUnapprovedStudentByClass({
        cid: cid,
        studentAdd: {
          unapprove: studentId,
        },
      })
        .then(() => {
          onRefetch();
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.assign_role_container}>
        <section
          className={style.assign_role_title}
          style={{
            justifyContent: "space-between",
          }}
        >
          <h6>{t("select_unapproved_student")}</h6>
          <div className={style.button_container}>
            <button
              className={style.next_btn}
              style={{
                right: "10%",
              }}
              onClick={onAddStudent}
            >
              {t("add")}
            </button>
            <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
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
          {allStudent?.map((student, index) =>
            allStudent?.length === index + 1 ? (
              <section
                className={
                  studentId?.includes(student?._id)
                    ? `${style.student_container} ${style.select_hover_active}`
                    : `${style.student_container} ${style.select_hover}`
                }
                key={student?._id}
                ref={ref}
                onClick={() => onSelectStudent(student?._id)}
                style={{
                  padding: "0.6rem 0",
                  margin: "0",
                }}
              >
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
                    student?.studentMiddleName ? student?.studentMiddleName : ""
                  } ${student?.studentLastName}`}</h6>
                  <p className={style.student_container_gr}>
                    {t("gr_number")} {student?.studentGRNO ?? ""}
                  </p>
                </div>
              </section>
            ) : (
              <section
                className={
                  studentId?.includes(student?._id)
                    ? `${style.student_container} ${style.select_hover_active}`
                    : `${style.student_container} ${style.select_hover}`
                }
                key={student?._id}
                onClick={() => onSelectStudent(student?._id)}
                style={{
                  padding: "0.6rem 0",
                  margin: "0",
                }}
              >
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
                    student?.studentMiddleName ? student?.studentMiddleName : ""
                  } ${student?.studentLastName}`}</h6>
                  <p className={style.student_container_gr}>
                    {t("gr_number")} {student?.studentGRNO ?? ""}
                  </p>
                </div>
              </section>
            )
          )}
          {showingDataLoading && <QvipleLoading />}
          {disabled && <QLoader />}
        </section>
      </div>
    </PopupWrapper>
  );
};

export default SelectUnapprovedStudent;
