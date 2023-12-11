import React, { useCallback, useEffect, useState } from "react";
import style from "./GovernmentScholarship.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import { useSearchStudent } from "../../../../../hooks/institute/institute-staff-student-api";
import { useSelector } from "react-redux";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useNavigate, useParams } from "react-router-dom";
const SearchStudentFinance = ({ onSearchOpen }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const insId = useSelector((state) => state.financeChange.insId);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [governmentList, setGovernmentList] = useState([]);
  const [search, setSearch] = useState("");
  const { searchStudent, searchStudentRefetch } = useSearchStudent({
    data: { search: search, page: 1, limit: 10, id: insId },
    skip: !insId,
  });
  useEffect(() => {
    if (insId) {
      setShowingDataLoading(true);
      searchStudentRefetch();
    }
  }, [insId, page, search, searchStudentRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setGovernmentList(searchStudent?.student);
      setShowingDataLoading(false);
    } else {
      if (searchStudent?.student) {
        setGovernmentList((prevState) =>
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

  const onViewApplicantProfile = (sid) => {
    navigate(`/q/${params.username}/student/profile`, {
      state: {
        sid: sid,
        viewAs: "FINANCE_MANAGER",
      },
    });
  };
  // console.info("this,m,dnndmsfss", insId);
  return (
    <>
      <div className={style.government_header}>
        <img
          src="/images/left-back-icon.svg"
          alt="back arrow"
          className={style.back_icon}
          onClick={() => onSearchOpen()}
        />
        <h6 className={style.government_header_title}>{t("search_student")}</h6>
      </div>

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
            // value={search}
            onChange={onSearchEvent}
            autoFocus={true}
          />
        </div>
      </div>
      {governmentList?.map((student, index) =>
        governmentList?.length === index + 1 ? (
          <section
            className={style.student_container}
            title="View Student Profile"
            key={student?._id}
            ref={ref}
            onClick={() => onViewApplicantProfile(student?._id)}
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
            title="View Student Profile"
            key={student?._id}
            onClick={() => onViewApplicantProfile(student?._id)}
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
    </>
  );
};

export default SearchStudentFinance;
