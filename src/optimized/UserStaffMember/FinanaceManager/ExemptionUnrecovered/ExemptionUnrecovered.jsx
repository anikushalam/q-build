import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import style from "../FinanceManager.module.css";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useFinanceAllExemption } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import ExemptionUnrecoveredCard from "./ExemptionUnrecoveredCard";
import { assestsNavbarUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import { customDebounce } from "../../../Utils/Functions/debounce";
import { nextPage } from "../../../Utils/Functions/nextPage";
import Loading from "../../../Loader/Loading";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";
import QvipleLoader from "../../../Loader/QvipleLoader";

const ExemptionUnrecovered = ({ fid, exemptBalance }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });

  const { financeAllExemption, financeAllExemptionLoading } =
    useFinanceAllExemption({
      data: {
        fid: fid,
        page: page,
        limit: 2,
      },
      skip: !fid,
    });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (financeAllExemption?.list?.length) {
      let obj = nextPage(financeAllExemption?.list?.length);
      setState(() => obj);
    }
  }, [financeAllExemption?.list?.length]);
  const onDebounce = useCallback(
    customDebounce((val) => {
      setPage(() => 1);
      setSearch(val);
    }, 500),
    []
  );

  const onSearchEvent = (e) => {
    if (e.target.value) onDebounce(e.target.value);
    else {
      setPage(() => 1);
      setSearch("");
    }
  };

  return (
    <UserMemberContainerWrapper>
      <UserMemberContentWrapper>
        <div className={style.fm_header_container}>
          <h6>{t("exemption_unrecovered")}</h6>
          <div className={style.fm_search}>
            <section className={style.fm_search_container}>
              <div className={style.fm_search_container_inner}>
                <img
                  className={style.fm_search_icon}
                  alt="search icon"
                  src={`${assestsNavbarUrl}/navbar-search.svg`}
                />
                <input
                  type="text"
                  placeholder={t("search")}
                  onChange={onSearchEvent}
                />
              </div>
            </section>
          </div>
        </div>
      </UserMemberContentWrapper>
      <BorderBottom />

      <UserMemberContentWrapper
        customStyle={{
          paddingTop: "0",
        }}
      >
        <p className={style.fm_all_time_data}>{t("all_time_data")}</p>
        <h6 className={style.fm_total_amount}>
          {t("total_amount")} {t("rs_only")} {exemptBalance ?? 0}
        </h6>

        {financeAllExemption?.list?.map((exemption, index) =>
          financeAllExemption?.list?.length === index + 1 ? (
            <div key={exemption?._id} ref={ref}>
              <ExemptionUnrecoveredCard exemption={exemption} />
            </div>
          ) : (
            <ExemptionUnrecoveredCard
              exemption={exemption}
              key={exemption?._id}
            />
          )
        )}
        {financeAllExemptionLoading ? (
          search ? (
            <QvipleLoader />
          ) : (
            <Loading />
          )
        ) : search ? (
          !financeAllExemption?.list?.length && (
            <EmptyMessage title="No exemptions fuond related this search." />
          )
        ) : (
          !financeAllExemption?.list?.length && (
            <EmptyMessage title="No exemptions added." />
          )
        )}
      </UserMemberContentWrapper>
    </UserMemberContainerWrapper>
  );
};

export default ExemptionUnrecovered;
