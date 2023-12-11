import React, { useEffect, useState } from "react";
import style from "../AdmissionScholarship.module.css";
import { useTranslation } from "react-i18next";
import AddCorpus from "./AddCorpus";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { useInView } from "react-intersection-observer";
import { useGetScholarshipFundCorpusAdmission } from "../../../../../../hooks/member_tab/admission-api";
import CorpusCard from "./CorpusCard";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";
const FundCorpus = ({
  admissionId,
  sid,
  viewAs,
  fundCorpus,
  getOneScholarshipAdmissionRefetch,
}) => {
  const { t } = useTranslation();
  const [addCorpus, setAddCorpus] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [corpusList, setCorpusList] = useState([]);

  const {
    getScholarshipFundCorpusAdmission,
    getScholarshipFundCorpusAdmissionRefetch,
  } = useGetScholarshipFundCorpusAdmission({
    data: {
      sid: sid,
      page: page,
      limit: 10,
    },
    skip: !sid,
  });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      getScholarshipFundCorpusAdmissionRefetch();
    }
  }, [sid, page, getScholarshipFundCorpusAdmissionRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setCorpusList(getScholarshipFundCorpusAdmission?.all_incomes);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
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
    }

    if (getScholarshipFundCorpusAdmission?.all_incomes?.length === 10)
      setState(true);
    else setState(false);
  }, [getScholarshipFundCorpusAdmission?.all_incomes]);

  const onRefetchWhenAdd = () => {
    setRefetchStatus(true);
    setPage(1);
    setShowingDataLoading(true);
    getScholarshipFundCorpusAdmissionRefetch();
    getOneScholarshipAdmissionRefetch();
  };

  return (
    <>
      {viewAs === "COMPLETED" ? (
        ""
      ) : (
        <h6
          className={style.add_new_moderator}
          onClick={() => setAddCorpus(true)}
        >
          {t("record_corpus_intake")}
        </h6>
      )}
      <div className={style.refund_list}>
        <section className={style.unused_container}>
          <img src="/images/rupee-symobl-icon.svg" alt="rupee symobl" />
          <div className={style.unused_container_text}>
            <div className={style.unused_container_text_inner}>
              <h6>{t("unused_fund")}</h6>
              <h6>
                {t("rs")}
                {` `}
                {fundCorpus?.unused_corpus ?? 0}
              </h6>
            </div>
            <div className={style.unused_container_text_inner}>
              <p>{t("total_corpus_corpus")}</p>
              <p>
                {t("rs")} {` `} {fundCorpus?.total_corpus ?? 0}
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
      {addCorpus && (
        <AddCorpus
          onClose={() => setAddCorpus((pre) => !pre)}
          admissionId={admissionId}
          sid={sid}
          onRefetchWhenAdd={onRefetchWhenAdd}
          fcid={fundCorpus?._id ?? ""}
        />
      )}
    </>
  );
};

export default FundCorpus;
