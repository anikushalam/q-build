// import style from "./expense.module.css"
import { useCallback, useEffect, useState } from "react";
import style from "../FinanceManager.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { customDebounce } from "../../../Utils/Functions/debounce";
import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { assestsNavbarUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import { useFinanceExpense } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import TotalExpense from "./TotalExpense";
import ExpenseCard from "./ExpenseCard";
import ExpenseDetail from "./ExpenseDetail";
import AddButton from "../../../Ui/Button/AddButton";
import AddExpense from "./AddExpense";
import Loading from "../../../Loader/Loading";
import QvipleLoader from "../../../Loader/QvipleLoader";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";

const Expense = ({ fid }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });
  const [expenseId, setExpenseId] = useState("");
  const [addExpense, setAddExpense] = useState(false);
  const { financeExpense, financeExpenseLoading } = useFinanceExpense({
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
    if (financeExpense?.list?.length) {
      let obj = nextPage(financeExpense?.list?.length);
      setState(() => obj);
    }
  }, [financeExpense?.list?.length, nextPage]);

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
    setExpenseId("");
  };
  const onToggle = () => {
    setAddExpense((pre) => !pre);
  };
  // console.info("expenseId", financeExpense);

  return (
    <>
      <UserMemberContainerWrapper>
        <UserMemberContentWrapper>
          <div className={style.fm_header_container}>
            <h6>{t("expense_history")}</h6>
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
            <TotalExpense fid={fid} />
            <AddButton
              customStyle={{
                padding: "1.3rem 2rem",
              }}
              label="add_new_expense"
              onAction={onToggle}
            />
          </div>

          {financeExpense?.list?.map((expense, index) =>
            financeExpense?.list?.length === index + 1 ? (
              <div key={expense?._id} ref={ref}>
                <ExpenseCard expense={expense} setExpenseId={setExpenseId} />
              </div>
            ) : (
              <ExpenseCard
                expense={expense}
                key={expense?._id}
                setExpenseId={setExpenseId}
              />
            )
          )}
          {financeExpenseLoading ? (
            search ? (
              <QvipleLoader />
            ) : (
              <Loading />
            )
          ) : search ? (
            !financeExpense?.list?.length && (
              <EmptyMessage title="No expense fuond related this search." />
            )
          ) : (
            !financeExpense?.list?.length && (
              <EmptyMessage title="No expense added." />
            )
          )}
        </UserMemberContentWrapper>
      </UserMemberContainerWrapper>
      {expenseId && <ExpenseDetail onClose={onClose} expenseId={expenseId} />}
      {addExpense && <AddExpense onClose={onToggle} fid={fid} />}
    </>
  );
};

export default Expense;
