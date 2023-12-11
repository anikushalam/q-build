import React, { useEffect, useState } from "react";
import style from "../../StaffAdmisionAdmin/Refund/AdmisisonRefund.module.css";
import { useInView } from "react-intersection-observer";
import { useGetAllExcelByAdmissionAdmin } from "../../../../../hooks/member_tab/admission-api";
import moment from "moment";
import IdCardExportMenu from "./IdCardExportMenu";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useScrollbar } from "../../../../../Scroll/use-scroll";

const IdCardExport = ({ instituteId }) => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [refundList, setRefundList] = useState([]);
  const [openExcelMenu, setOpenExcelMenu] = useState(false);
  const { getAllExcelByAdmissionAdmin, getAllExcelByAdmissionAdminRefetch } =
    useGetAllExcelByAdmissionAdmin({
      data: {
        aid: instituteId,
        page: page,
        limit: 10,
      },
      skip: !instituteId,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (instituteId) {
      setShowingDataLoading(true);
      getAllExcelByAdmissionAdminRefetch();
    }
  }, [instituteId, page, getAllExcelByAdmissionAdminRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setRefundList(getAllExcelByAdmissionAdmin?.all_excel);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
      if (getAllExcelByAdmissionAdmin?.all_excel) {
        setRefundList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getAllExcelByAdmissionAdmin?.all_excel]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getAllExcelByAdmissionAdmin?.all_excel?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getAllExcelByAdmissionAdmin?.all_excel?.length === 10) setState(true);
    else setState(false);
  }, [getAllExcelByAdmissionAdmin?.all_excel]);

  const refetchWhenAdd = () => {
    setPage(1);
    getAllExcelByAdmissionAdminRefetch();
    setRefetchStatus(true);
  };

  return (
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
      {openExcelMenu && (
        <IdCardExportMenu
          xlsxId={openExcelMenu}
          onClose={() => setOpenExcelMenu("")}
          onRefetch={refetchWhenAdd}
          instituteId={instituteId}
        />
      )}
    </div>
  );
};

export default IdCardExport;
