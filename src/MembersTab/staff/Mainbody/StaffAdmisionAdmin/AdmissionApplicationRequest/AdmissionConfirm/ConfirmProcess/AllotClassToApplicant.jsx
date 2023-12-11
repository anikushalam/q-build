import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import { useInView } from "react-intersection-observer";
import ClassCard from "./ClassCard";
import { useTranslation } from "react-i18next";
import style from "../../AdmissionApplicationRequest.module.css";
import QLoader from "../../../../../../../Loader/QLoader";
import {
  useApplicantAdmissionAllotSeat,
  useGetAllClasses,
} from "../../../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";
import PopupWrapper from "../../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const AllotClassToApplicant = ({
  onClose,
  currentApplicant,
  applicationId,
  onRefetchWhenAction,
  batchId,
  openAs,
}) => {
  const [viewClass, setViewClass] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [allotC, setAllotC] = useState("");
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView();
  const [search, setSearch] = useState("");
  const [classes, setClasses] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getAllClassesList, getAllClassesListRefetch } = useGetAllClasses({
    data: {
      search: search,
      aid: applicationId,
      bid: batchId,
      page: page,
      limit: 10,
    },
    skip: !applicationId || !batchId,
  });
  const [applicantAllotSeat] = useApplicantAdmissionAllotSeat();

  useEffect(() => {
    if (applicationId) {
      setShowingDataLoading(true);
      getAllClassesListRefetch();
    }
  }, [applicationId, getAllClassesListRefetch, page, search]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setClasses(getAllClassesList?.classes);
      setShowingDataLoading(false);
    } else {
      if (getAllClassesList?.classes) {
        setClasses((prevState) =>
          [
            ...new Set(
              [...prevState, ...getAllClassesList?.classes]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getAllClassesList?.classes?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    //for next api is call or not dashboard
    if (getAllClassesList?.classes.length === 10) setState(true);
    else setState(false);
  }, [getAllClassesList?.classes]);

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const searchHandler = (e) => {
    deb(e.target.value);
  };

  const AllotStudent = () => {
    if (applicationId && allotC?._id && currentApplicant) {
      setDisabled(true);
      applicantAllotSeat({
        allotClass: {
          dataList:
            openAs === "MULITSELECT"
              ? currentApplicant
              : [currentApplicant?.student?._id],
        },
        aid: applicationId,
        cid: allotC?._id,
      })
        .then(() => {
          onRefetchWhenAction();
          // if (openAs === "MULITSELECT") setStudentClass([]);
          // else setStudentClass("");
          onClose();
          setDisabled(false);
        })
        .catch({});
    }
  };

  // console.info("sjdgshjdgksd", studentClass);
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.admission_modal}>
        <h6 className={style.admission_modal_heading}>
          {viewClass ? t("allot_to_class") : t("allot_class")}
        </h6>
        <BorderBottom
          customStyle={{
            width: "100%",
            margin: "0.7rem 0",
          }}
        />
        {viewClass ? (
          ""
        ) : (
          <div
            className={style.with_search}
            style={{
              marginBottom: "0.7rem",
            }}
          >
            <div
              className={style.search_container_filter}
              style={{
                width: "100%",
              }}
            >
              <section
                className={style.search_container}
                style={{
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
                    placeholder="Search classes..."
                    onChange={searchHandler}
                  />
                </div>
              </section>
            </div>
          </div>
        )}

        {viewClass ? (
          <>
            <div className={style.admission_class_confirm}>
              {openAs === "MULITSELECT" ? (
                <>
                  {t("alloting")}{" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {currentApplicant?.length}
                  </span>{" "}
                  {t("students")} {` `}
                </>
              ) : (
                <>
                  {t("lloting_student")}{" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {` ${currentApplicant?.student?.studentFirstName} ${
                      currentApplicant?.student?.studentMiddleName
                        ? currentApplicant?.student?.studentMiddleName
                        : ""
                    } ${currentApplicant?.student?.studentLastName} `}
                  </span>
                </>
              )}
              ,{t("to")}{" "}
              <span
                style={{
                  fontWeight: "600",
                }}
              >{` ${allotC?.className} - ${allotC?.classTitle}`}</span>
            </div>
            <div className={style.confirm_btn} onClick={AllotStudent}>
              {t("confirm")}
            </div>
          </>
        ) : (
          <>
            {classes?.map((all, index) =>
              classes?.length === index + 1 ? (
                <div ref={ref}>
                  <ClassCard
                    setViewClass={setViewClass}
                    key={index}
                    classData={all}
                    setAllotC={setAllotC}
                  />
                </div>
              ) : (
                <ClassCard
                  setViewClass={setViewClass}
                  key={index}
                  classData={all}
                  setAllotC={setAllotC}
                />
              )
            )}
            {showingDataLoading && <QvipleLoading />}
          </>
        )}
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AllotClassToApplicant;
