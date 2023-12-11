import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useSearchStudent } from "../../../../../../hooks/institute/institute-staff-student-api";
import style from "../../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const SelectInstituteStudent = ({
  modalTitle,
  instituteId,
  onClose,
  onSelectStudent,
}) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [studentList, setStudentList] = useState([]);
  const [search, setSearch] = useState("");
  const { searchStudent, searchStudentRefetch } = useSearchStudent({
    data: { search: search, page: page, limit: 10, id: instituteId },
    skip: !instituteId,
  });
  useEffect(() => {
    if (instituteId) {
      setShowingDataLoading(true);
      searchStudentRefetch();
    }
  }, [instituteId, page, search, searchStudentRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setStudentList(searchStudent?.student);
      setShowingDataLoading(false);
    } else {
      if (searchStudent?.student) {
        setStudentList((prevState) =>
          [
            ...new Set(
              [...prevState, ...searchStudent?.student]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (searchStudent?.student?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (searchStudent?.student?.length === 10) setState(true);
    else setState(false);
  }, [searchStudent?.student]);

  const debounceState = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );
  const onSearchEvent = (e) => {
    debounceState(e.target.value);
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.assign_role_container}>
        <section className={style.assign_role_title}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt="back icon"
          />

          <h6>{t(modalTitle ? modalTitle : "select_passenger_student")}</h6>
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
                onChange={onSearchEvent}
                autoFocus={true}
                style={{
                  border: "0.029vw solid rgba(0, 0, 0, 0.15)",
                  width: "450px",
                }}
              />
            </div>
          </div>
          {studentList?.map((student, index) =>
            studentList?.length === index + 1 ? (
              <section
                className={style.student_container}
                title="Select student"
                key={student?._id}
                ref={ref}
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
            ) : (
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
            )
          )}
          {showingDataLoading && <QvipleLoading />}
        </section>
      </div>
    </PopupWrapper>
  );
};

export default SelectInstituteStudent;
