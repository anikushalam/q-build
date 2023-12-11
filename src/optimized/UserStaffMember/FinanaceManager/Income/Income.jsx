import { useCallback, useEffect, useState } from "react";
import style from "../FinanceManager.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import TotalIncome from "./TotalIncome";
import IncomeCard from "./IncomeCard";
import IncomeDetail from "./IncomeDetail";
import AddIncome from "./AddIncome";
import { useFinanceIncome } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { customDebounce } from "../../../Utils/Functions/debounce";
import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { assestsNavbarUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import AddButton from "../../../Ui/Button/AddButton";
import Loading from "../../../Loader/Loading";
import QvipleLoader from "../../../Loader/QvipleLoader";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";
const Income = ({ fid }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });
  const [incomeId, setIncomeId] = useState("");
  const [addIncome, setAddIncome] = useState(false);
  const { financeIncome, financeIncomeLoading } = useFinanceIncome({
    data: {
      fid: fid,
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
    if (financeIncome?.list?.length) {
      let obj = nextPage(financeIncome?.list?.length);
      setState(() => obj);
    }
  }, [financeIncome?.list?.length]);

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

  const onClose = () => {
    setIncomeId("");
  };

  const onToggle = () => {
    setAddIncome((pre) => !pre);
  };

  return (
    <>
      <UserMemberContainerWrapper>
        <UserMemberContentWrapper>
          <div className={style.fm_header_container}>
            <h6>{t("income_history")}</h6>
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
            paddingTop: "0.2rem",
          }}
        >
          <div className={style.fm_add_button}>
            <TotalIncome fid={fid} />
            <AddButton
              customStyle={{
                padding: "1.3rem 2rem",
              }}
              label="add_new_income"
              onAction={onToggle}
            />
          </div>

          {financeIncome?.list?.map((income, index) =>
            financeIncome?.list?.length === index + 1 ? (
              <div key={income?._id} ref={ref}>
                <IncomeCard income={income} setIncomeId={setIncomeId} />
              </div>
            ) : (
              <IncomeCard
                income={income}
                key={income?._id}
                setIncomeId={setIncomeId}
              />
            )
          )}
          {financeIncomeLoading ? (
            search ? (
              <QvipleLoader />
            ) : (
              <Loading />
            )
          ) : search ? (
            !financeIncome?.list?.length && (
              <EmptyMessage title="No income fuond related this search." />
            )
          ) : (
            !financeIncome?.list?.length && (
              <EmptyMessage title="No income added." />
            )
          )}
        </UserMemberContentWrapper>
      </UserMemberContainerWrapper>
      {incomeId && <IncomeDetail onClose={onClose} incomeId={incomeId} />}
      {addIncome && <AddIncome onClose={onToggle} fid={fid} />}
    </>
  );
};

export default Income;
