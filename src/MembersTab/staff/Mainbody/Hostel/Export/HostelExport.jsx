import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import moment from "moment";
import HostelExportMenu from "./HostelExportMenu";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import { useGetAllExcelByHostelManager } from "../../../../../hooks/member_tab/hostel-api";
import style from "../../StaffAdmisionAdmin/Refund/AdmisisonRefund.module.css";
import HostelFilter from "./HostelFilter";
const HostelExport = ({ hostelId, instituteId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [refundList, setRefundList] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [openExcelMenu, setOpenExcelMenu] = useState(false);
  const { getAllExcelByHostelManager, getAllExcelByHostelManagerRefetch } =
    useGetAllExcelByHostelManager({
      data: {
        hid: hostelId,
        page: page,
        limit: 10,
      },
      skip: !hostelId,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (hostelId) {
      setShowingDataLoading(true);
      getAllExcelByHostelManagerRefetch();
    }
  }, [hostelId, page, getAllExcelByHostelManagerRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setRefundList(getAllExcelByHostelManager?.all_excel);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
      if (getAllExcelByHostelManager?.all_excel) {
        setRefundList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getAllExcelByHostelManager?.all_excel]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getAllExcelByHostelManager?.all_excel?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getAllExcelByHostelManager?.all_excel?.length === 10) setState(true);
    else setState(false);
  }, [getAllExcelByHostelManager?.all_excel]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  const onClose = () => {
    setOpenFilter((pre) => !pre);
  };
  const refetchWhenAdd = () => {
    setPage(1);
    getAllExcelByHostelManagerRefetch();
    setRefetchStatus(true);
  };

  return (
    <div
      className={style.refund_container}
      style={{
        marginTop: "0",
      }}
    >
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
          <img
            src="/images/export-filter-icon.svg"
            alt=""
            onClick={onClose}
            className={style.admission_filter_icon}
          />
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
          <HostelFilter
            hostelId={hostelId}
            financeId={instituteId}
            onClose={onClose}
            viewAs="EXPORT"
            onRefetch={refetchWhenAdd}
          />
        )}

        {openExcelMenu && (
          <HostelExportMenu
            xlsxId={openExcelMenu}
            onClose={() => setOpenExcelMenu("")}
            onRefetch={refetchWhenAdd}
            hostelId={hostelId}
          />
        )}
      </div>
    </div>
  );
};

export default HostelExport;
