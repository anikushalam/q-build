import moment from "moment";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { useGetOnePayrollHeadMonth } from "../../../../../../hooks/member_tab/finance-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../Payroll.module.css";
import AccountPayment from "./AccountPayment";

const SalaryHeadInfo = ({ carryParentState }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const params = useParams();
  const fid = useSelector((state) => state.financeChange.fid);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [openAccountPayment, setOpenAccountPayment] = useState();
  const [monthList, setMonthList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);

  const { getOnePayrollHeadMonth, getOnePayrollHeadMonthRefetch } =
    useGetOnePayrollHeadMonth({
      data: {
        pmid: getQuery.state?.pmid,
        page: page,
        limit: 10,
      },
      skip: !getQuery.state?.pmid,
    });
  useEffect(() => {
    if (getQuery.state?.pmid) {
      setShowingDataLoading(true);
      getOnePayrollHeadMonthRefetch();
    }
  }, [getQuery.state?.pmid, page, getOnePayrollHeadMonthRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setMonthList(getOnePayrollHeadMonth?.all_month_wise);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
      if (getOnePayrollHeadMonth?.all_month_wise) {
        setMonthList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getOnePayrollHeadMonth?.all_month_wise]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getOnePayrollHeadMonth?.all_month_wise?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getOnePayrollHeadMonth?.all_month_wise?.length === 10) setState(true);
    else setState(false);
  }, [getOnePayrollHeadMonth?.all_month_wise]);

  const onRefetchWhenConfirm = () => {
    setRefetchStatus(true);
    setPage(1);
    setShowingDataLoading(true);
    getOnePayrollHeadMonthRefetch();
  };
  return (
    <>
      <div className={style.payroll_container}>
        <h6>{getQuery.state?.salaryHead ?? ""}</h6>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginBottom: "1rem",
          }}
        />
        {monthList?.map((months, index) =>
          monthList?.length === index + 1 ? (
            <Link
              to={`/q/${params.username}/member/finance?a=payroll&n=head&info&staff`}
              state={{
                ...carryParentState,
                mwid: months?._id,
                salaryHead: getQuery.state?.salaryHead ?? "",
                monthDate: months?.pay_month?.substring(0, 7),
              }}
              key={months?._id}
            >
              <section className={style.pay_card} ref={ref}>
                <img
                  src="/images/finance/calender-payroll-icon.svg"
                  alt="payroll"
                />
                <div className={style.pay_card_content}>
                  <div className={style.pay_card_text}>
                    <h6>{moment(months?.pay_month).format("MMMM yyyy")}</h6>
                    <p>
                      {t("rs")}. {months?.pay_amount}
                    </p>
                  </div>
                  {getQuery.state?.salaryType === "Deduction" &&
                    (months?.pay_status === "Not Paid" ? (
                      <button
                        className={style.pay_btn}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenAccountPayment(months);
                        }}
                      >
                        {t("pay")}
                      </button>
                    ) : (
                      <button className={style.receipt_btn}>
                        {t("receipt")}
                      </button>
                    ))}
                </div>
              </section>
            </Link>
          ) : (
            <Link
              to={`/q/${params.username}/member/finance?a=payroll&n=head&info&staff`}
              state={{
                ...carryParentState,
                mwid: months?._id,
                salaryHead: getQuery.state?.salaryHead ?? "",
                monthDate: months?.pay_month?.substring(0, 7),
              }}
              key={months?._id}
            >
              <section className={style.pay_card}>
                <img
                  src="/images/finance/calender-payroll-icon.svg"
                  alt="payroll"
                />
                <div className={style.pay_card_content}>
                  <div className={style.pay_card_text}>
                    <h6>{moment(months?.pay_month).format("MMMM yyyy")}</h6>
                    <p>
                      {t("rs")}. {months?.pay_amount}
                    </p>
                  </div>
                  {getQuery.state?.salaryType === "Deduction" &&
                    (months?.pay_status === "Not Paid" ? (
                      <button
                        className={style.pay_btn}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenAccountPayment(months);
                        }}
                      >
                        {t("pay")}
                      </button>
                    ) : (
                      <button className={style.receipt_btn}>
                        {t("receipt")}
                      </button>
                    ))}
                </div>
              </section>
            </Link>
          )
        )}
        {/* <section className={style.pay_card}>
          <img src="/images/finance/calender-payroll-icon.svg" alt="payroll" />
          <div className={style.pay_card_conetent}>
            <div className={style.pay_card_text}>
              <h6>February 2023</h6>
              <p>Rs.28000</p>
            </div>
            <button className={style.receipt_btn}>{t("receipt")}</button>
          </div>
        </section> */}
        {showingDataLoading && <QvipleLoading />}
      </div>
      {openAccountPayment && (
        <AccountPayment
          onClose={() => setOpenAccountPayment("")}
          fid={fid}
          openAccountPayment={openAccountPayment}
          onRefetchWhenConfirm={onRefetchWhenConfirm}
        />
      )}
    </>
  );
};

export default SalaryHeadInfo;
