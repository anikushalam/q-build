import { useTranslation } from "react-i18next";
import style from "../FinanceManager.module.css";
import { memo, useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PendingFeesCard from "./PendingFeesCard";
import { useFinanceFeeList } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { customDebounce } from "../../../Utils/Functions/debounce";
import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import Loading from "../../../Loader/Loading";
import { assestsNavbarUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import QvipleLoader from "../../../Loader/QvipleLoader";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";
const PendingFees = ({ fid }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });

  const { financeFeeList, financeFeeListLoading } = useFinanceFeeList({
    data: {
      finance: fid,
      page: page,
      limit: 10,
      search: search,
    },
    skip: !fid,
  });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (financeFeeList?.list?.length) {
      let obj = nextPage(financeFeeList?.list?.length);
      setState(() => obj);
    }
  }, [financeFeeList?.list]);

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

  // console.info("financeFeeList", financeFeeList);
  return (
    <UserMemberContainerWrapper>
      <UserMemberContentWrapper>
        <div className={style.fm_header_container}>
          <h6>{t("pending_fees")}</h6>
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
      <UserMemberContentWrapper>
        {financeFeeList?.list?.map((studentFees, index) =>
          financeFeeList?.list?.length === index + 1 ? (
            <div key={studentFees?._id} ref={ref}>
              <PendingFeesCard studentFees={studentFees} />
            </div>
          ) : (
            <PendingFeesCard studentFees={studentFees} key={studentFees?._id} />
          )
        )}
        {financeFeeListLoading ? (
          search ? (
            <QvipleLoader />
          ) : (
            <Loading />
          )
        ) : search ? (
          !financeFeeList?.list?.length && (
            <EmptyMessage title="No students fuond related this search." />
          )
        ) : (
          !financeFeeList?.list?.length && <EmptyMessage title="No students." />
        )}
      </UserMemberContentWrapper>
    </UserMemberContainerWrapper>
  );
};

export default memo(PendingFees);
