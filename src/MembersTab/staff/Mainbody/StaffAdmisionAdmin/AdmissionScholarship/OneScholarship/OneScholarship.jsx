import React, { useEffect, useState, useCallback } from "react";
import style from "../AdmissionScholarship.module.css";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import UniversalTab from "../../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import {
  useGetOneScholarshipAdmission,
  useGetOneScholarshipAllCandidateAdmission,
  useScholarShipExcelByAdmission,
} from "../../../../../../hooks/member_tab/admission-api";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { debounce } from "lodash";
import { useInView } from "react-intersection-observer";
import AddCandidate from "./AddCandidate";
import FundCorpus from "./FundCorpus";
import CandidateCard from "./CandidateCard";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { useFileUpload } from "../../../../../../hooks/authentication-api";
import QLoader from "../../../../../../Loader/QLoader";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";
const OneScholarship = ({ instituteId, admissionId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const tabList = [
    {
      name: t("candidates"),
      id: 0,
    },
    {
      name: t("fund_corpus_tab"),
      id: 1,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [state, setState] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [candidateList, setCandidateList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [addCandidate, setAddCandidate] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [scholarShipExcelByAdmission] = useScholarShipExcelByAdmission();

  const { getOneScholarshipAdmission, getOneScholarshipAdmissionRefetch } =
    useGetOneScholarshipAdmission({
      sid: getQuery?.state?.scholarship?._id,
      skip: !getQuery?.state?.scholarship?._id,
    });

  useEffect(() => {
    if (getQuery?.state?.scholarship?._id) getOneScholarshipAdmissionRefetch();
  }, [getQuery?.state?.scholarship?._id, getOneScholarshipAdmissionRefetch]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };

  const {
    getOneScholarshipAllCandidateAdmission,
    getOneScholarshipAllCandidateAdmissionRefetch,
  } = useGetOneScholarshipAllCandidateAdmission({
    data: {
      sid: getQuery?.state?.scholarship?._id,
      page: page,
      limit: 10,
      search: search,
    },
    skip: !getQuery?.state?.scholarship?._id,
  });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getQuery?.state?.scholarship?._id)
      getOneScholarshipAllCandidateAdmissionRefetch();
  }, [
    page,
    getQuery?.state?.scholarship?._id,
    search,
    getOneScholarshipAllCandidateAdmissionRefetch,
  ]);

  useEffect(() => {
    if (search) {
      setCandidateList(getOneScholarshipAllCandidateAdmission?.all_exempt);
      setShowingDataLoading(false);
    } else {
      if (getOneScholarshipAllCandidateAdmission?.all_exempt) {
        const uniquePost = [
          ...candidateList,
          ...getOneScholarshipAllCandidateAdmission?.all_exempt,
        ];
        const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
        setCandidateList(uniqueRefind);
        setShowingDataLoading(false);
      } else if (
        getOneScholarshipAllCandidateAdmission?.all_exempt?.length === 0
      )
        setShowingDataLoading(false);
      else {
      }
    }
    if (getOneScholarshipAllCandidateAdmission?.all_exempt?.length === 10)
      setState(true);
    else setState(false);
  }, [getOneScholarshipAllCandidateAdmission?.all_exempt]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };

  const onExcelFileUpload = (e) => {
    if (
      e.target?.files?.length &&
      admissionId &&
      getQuery?.state?.scholarship?._id
    ) {
      setDisabled((pre) => !pre);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            scholarShipExcelByAdmission({
              aid: admissionId,
              scid: getQuery?.state?.scholarship?._id,
              excelFile: {
                excel_file: res.data?.imageKey,
              },
            })
              .then(() => {
                setDisabled((pre) => !pre);
              })
              .catch({});
          } else {
            setDisabled((pre) => !pre);
          }
        })
        .catch({});
    }
  };
  // console.info(
  //   "this is getOneScholarshipAdmission id",
  //   getOneScholarshipAdmission
  // );
  return (
    <div
      className={style.moderator_container}
      style={{
        marginTop: "0",
      }}
    >
      <section className={style.moderator_container_title}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <div className={style.with_search}>
          <h6>{getQuery?.state?.scholarship?.scholarship_name}</h6>
          <div className={style.search_container_filter}>
            <section className={style.search_container}>
              <div className={style.search_container_input}>
                <img
                  className={style.searchIcon}
                  alt="search icon"
                  src="/images/search-dash-icon.svg"
                />
                <input
                  type="text"
                  placeholder="Search Candidates"
                  onChange={onSearchEvent}
                />
              </div>
            </section>
            <img src="/images/filter-blue-icon.svg" alt="filter icon" />
          </div>
        </div>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />

      <UniversalTab
        tabList={tabList}
        activeIndexTab={activeIndex}
        setActiveIndexTab={setActiveIndex}
        showAs={false}
        customStyleTab={{
          width: "50%",
        }}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.5rem",
        }}
      />
      {activeIndex === 0 && (
        <>
          {getQuery?.state?.viewAs === "COMPLETED" ? (
            ""
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "1.5rem",
                alignItems: "center",
              }}
            >
              <h6
                className={style.add_new_moderator}
                onClick={() => setAddCandidate(true)}
              >
                {t("allot_scholarship")}
              </h6>
              <div>
                <label
                  className={style.upload_excel_file}
                  htmlFor="uploadExcel"
                >
                  <img
                    src="/images/upload-xslx-icon.svg"
                    alt="add student icon"
                    title="Upload excel file"
                  />
                </label>
                <input
                  type={"file"}
                  id="uploadExcel"
                  accept=".xlsx"
                  onChange={onExcelFileUpload}
                  style={{
                    display: "none",
                  }}
                />
              </div>
            </div>
          )}
          <div className={style.refund_list}>
            {candidateList?.map((candidate, index) =>
              candidateList?.length === index + 1 ? (
                <div ref={ref} key={candidate?._id}>
                  <CandidateCard candidate={candidate} />
                </div>
              ) : (
                <CandidateCard candidate={candidate} key={candidate?._id} />
              )
            )}

            {addCandidate && (
              <AddCandidate
                onClose={() => setAddCandidate((pre) => !pre)}
                admissionId={admissionId}
                scid={getQuery?.state?.scholarship?._id}
                // onRefetchWhenAdd={onRefetchWhenAdd}
                exceedAmount={
                  getOneScholarshipAdmission?.scholar?.fund_corpus
                    ?.unused_corpus ?? 0
                }
                instituteId={instituteId}
              />
            )}

            {showingDataLoading && <QvipleLoading />}
          </div>
          {disabled && <QLoader />}
        </>
      )}
      {activeIndex === 1 && (
        <FundCorpus
          admissionId={admissionId}
          sid={getQuery?.state?.scholarship?._id}
          viewAs={getQuery?.state?.viewAs ?? ""}
          fundCorpus={getOneScholarshipAdmission?.scholar?.fund_corpus}
          getOneScholarshipAdmissionRefetch={getOneScholarshipAdmissionRefetch}
        />
      )}
    </div>
  );
};

export default OneScholarship;
