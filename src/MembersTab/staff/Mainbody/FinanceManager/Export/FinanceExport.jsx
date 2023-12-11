import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../StaffAdmisionAdmin/Refund/AdmisisonRefund.module.css";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import moment from "moment";
import FinanceExportMenu from "./FinanceExportMenu";
import TransactionFilter from "../Filter/Transaction/TransactionFilter";
import { useGetAllExcelByFinance } from "../../../../../hooks/member_tab/finance-api";
import { useSelector } from "react-redux";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import FeeHeadFilter from "../Filter/FeesHead/FeeHeadFilter";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import HostelFeeHeadFilter from "../Filter/FeesHead/HostelFeeHeadFilter";

const FinanceExport = ({ insId, financeId, hostelId }) => {
  const { t } = useTranslation();
  const instituteId = useSelector((state) => state.financeChange.insId);
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [refundList, setRefundList] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [openFeeFilter, setOpenFeeFilter] = useState(false);
  const [openHostelFeeFilter, setOpenHostelFeeFilter] = useState(false);
  const [openExcelMenu, setOpenExcelMenu] = useState(false);
  const { getAllExcelByFinance, getAllExcelByFinanceRefetch } =
    useGetAllExcelByFinance({
      data: {
        id: instituteId ? instituteId : insId,
        page: page,
        limit: 10,
      },
      skip: instituteId ? !instituteId : !insId,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (instituteId || insId) {
      setShowingDataLoading(true);
      getAllExcelByFinanceRefetch();
    }
  }, [instituteId, insId, page, getAllExcelByFinanceRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setRefundList(getAllExcelByFinance?.all_excel);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
      if (getAllExcelByFinance?.all_excel) {
        setRefundList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getAllExcelByFinance?.all_excel]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getAllExcelByFinance?.all_excel?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getAllExcelByFinance?.all_excel?.length === 10) setState(true);
    else setState(false);
  }, [getAllExcelByFinance?.all_excel]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  const onClose = () => {
    setOpenFilter((pre) => !pre);
  };
  const refetchWhenAdd = () => {
    setPage(1);
    getAllExcelByFinanceRefetch();
    setRefetchStatus(true);
  };

  const onOpenFeeFilter = () => {
    setOpenFeeFilter((pre) => !pre);
  };
  const onOpenHostelFeeFilter = () => {
    setOpenHostelFeeFilter((pre) => !pre);
  };
  return (
    <div className={style.refund_container}>
      <section className={style.refund_container_title}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <div
          className={style.refund_container_title}
          style={{
            justifyContent: "space-between",
            width: "95%",
          }}
        >
          <h6>{t("data_export")}</h6>
          <div className={style.both_filter}>
            <div
              onClick={onOpenHostelFeeFilter}
              className={style.both_filter_with_name}
            >
              <img src="/images/export-filter-icon.svg" alt="filter icon" />
              <h6>{t("hostel_fee_receipt_filter")}</h6>
            </div>
            <div
              onClick={onOpenFeeFilter}
              className={style.both_filter_with_name}
            >
              <img src="/images/export-filter-icon.svg" alt="filter icon" />
              <h6>{t("fee_receipt_filter")}</h6>
            </div>
            <div onClick={onClose} className={style.both_filter_with_name}>
              <img src="/images/export-filter-icon.svg" alt="filter icon" />
              <h6>{t("transaction_filter")}</h6>
            </div>
          </div>
        </div>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.refund_list}>
        {refundList?.map((excel, index) =>
          refundList?.length === index + 1 ? (
            <a
              ref={ref}
              key={excel?._id}
              className={style.export_card}
              title="Download File"
              href={`https://d3dqpu54js2vfl.cloudfront.net/${excel?.excel_file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/export-xsxl-icon.svg" alt="" />
              <section className={style.export_card_text}>
                <h6>{excel?.excel_file_name ?? ""}</h6>
                <div className={style.export_card_date}>
                  <h6>{moment(excel?.created_at).format("DD MMM yyy")}</h6>
                  <h6>{moment(excel?.created_at).format("LT")}</h6>
                </div>
              </section>
              <img
                src="/images/three-24-dot-icon.svg"
                alt="menu icon"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenExcelMenu(excel);
                }}
                className={style.menu_icon}
                title="Menu"
              />
            </a>
          ) : (
            <a
              key={excel?._id}
              className={style.export_card}
              title="Download File"
              href={`https://d3dqpu54js2vfl.cloudfront.net/${excel?.excel_file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/export-xsxl-icon.svg" alt="" />
              <section className={style.export_card_text}>
                <h6>{excel?.excel_file_name ?? ""}</h6>
                <div className={style.export_card_date}>
                  <h6>{moment(excel?.created_at).format("DD MMM yyy")}</h6>
                  <h6>{moment(excel?.created_at).format("LT")}</h6>
                </div>
              </section>
              <img
                src="/images/three-24-dot-icon.svg"
                alt="menu icon"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenExcelMenu(excel);
                }}
                className={style.menu_icon}
                title="Menu"
              />
            </a>
          )
        )}

        {showingDataLoading && <QvipleLoading />}
        {openFilter && (
          <TransactionFilter
            instituteId={instituteId ? instituteId : insId}
            onClose={onClose}
            viewAs="EXPORT"
            onRefetch={refetchWhenAdd}
          />
        )}
        {openExcelMenu && (
          <FinanceExportMenu
            xlsxId={openExcelMenu}
            onClose={() => setOpenExcelMenu("")}
            onRefetch={refetchWhenAdd}
            instituteId={instituteId ? instituteId : insId}
          />
        )}
        {openFeeFilter && (
          <FeeHeadFilter
            onClose={onOpenFeeFilter}
            financeId={financeId}
            instituteId={insId}
          />
        )}
        {openHostelFeeFilter && (
          <HostelFeeHeadFilter
            onClose={onOpenHostelFeeFilter}
            financeId={financeId}
            hostelId={hostelId}
          />
        )}
      </div>
    </div>
  );
};

export default FinanceExport;
