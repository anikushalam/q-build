import React, { useEffect, useState } from "react";
import style from "../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CorpusCard from "../../StaffAdmisionAdmin/AdmissionScholarship/OneScholarship/CorpusCard";
import {
  useGetScholarshipFundCorpusAdmission,
  useGetOneScholarshipAdmission,
} from "../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
const OneScholarship = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [corpusList, setCorpusList] = useState([]);
  const { getOneScholarshipAdmission, getOneScholarshipAdmissionRefetch } =
    useGetOneScholarshipAdmission({
      sid: getQuery?.state?.scholarship?._id,
      skip: !getQuery?.state?.scholarship?._id,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (getQuery?.state?.scholarship?._id) getOneScholarshipAdmissionRefetch();
  }, [getQuery?.state?.scholarship?._id, getOneScholarshipAdmissionRefetch]);
  const {
    getScholarshipFundCorpusAdmission,
    getScholarshipFundCorpusAdmissionRefetch,
  } = useGetScholarshipFundCorpusAdmission({
    data: {
      sid: getQuery?.state?.scholarship?._id,
      page: page,
      limit: 10,
    },
    skip: !getQuery?.state?.scholarship?._id,
  });

  useEffect(() => {
    if (getQuery?.state?.scholarship?._id) {
      setShowingDataLoading(true);
      getScholarshipFundCorpusAdmissionRefetch();
    }
  }, [
    getQuery?.state?.scholarship?._id,
    page,
    getScholarshipFundCorpusAdmissionRefetch,
  ]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getScholarshipFundCorpusAdmission?.all_incomes) {
      setCorpusList((prevState) =>
        [
          ...new Set(
            [
              ...prevState,
              ...getScholarshipFundCorpusAdmission?.all_incomes,
            ]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getScholarshipFundCorpusAdmission?.all_incomes?.length === 0)
      setShowingDataLoading(false);
    else {
    }

    if (getScholarshipFundCorpusAdmission?.all_incomes?.length === 10)
      setState(true);
    else setState(false);
  }, [getScholarshipFundCorpusAdmission?.all_incomes]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
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
        </div>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "1rem",
        }}
      />
      <div className={style.refund_list}>
        <section className={style.unused_container}>
          <img src="/images/rupee-symobl-icon.svg" alt="rupee symobl" />
          <div className={style.unused_container_text}>
            <div className={style.unused_container_text_inner}>
              <h6>{t("unused_fund")}</h6>
              <h6>
                {t("rs")}
                {` `}
                {getOneScholarshipAdmission?.scholar?.fund_corpus
                  ?.unused_corpus ?? 0}
              </h6>
            </div>
            <div className={style.unused_container_text_inner}>
              <p>{t("total_corpus_corpus")}</p>
              <p>
                {t("rs")} {` `}{" "}
                {getOneScholarshipAdmission?.scholar?.fund_corpus
                  ?.total_corpus ?? 0}
              </p>
            </div>
          </div>
        </section>
        <h6 className={style.intake_history}>
          {t("fund_corpus_intake_history")}
        </h6>
        {corpusList?.map((corpus, index) =>
          corpusList?.length === index + 1 ? (
            <div ref={ref} key={corpus?._id}>
              <CorpusCard corpus={corpus} />
            </div>
          ) : (
            <CorpusCard corpus={corpus} key={corpus?._id} />
          )
        )}

        {showingDataLoading && <QvipleLoading />}
      </div>
    </div>
  );
};

export default OneScholarship;
