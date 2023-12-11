import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import { useTranslation } from "react-i18next";
import style from "../FinanceManager.module.css";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import {
  assestsNavbarUrl,
  assestsUserFinanceUrl,
} from "../../../Services/UrlConfig/AssestsBaseUrl";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { customDebounce } from "../../../Utils/Functions/debounce";
import { useFinanceAllExcel } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import FinanceExportCard from "./FinanceExportCard";
import Loading from "../../../Loader/Loading";
import TransactionFilter from "../../../..//MembersTab/staff/Mainbody/FinanceManager/Filter/Transaction/TransactionFilter";
import FeeHeadFilter from "../../../..//MembersTab/staff/Mainbody/FinanceManager/Filter/FeesHead/FeeHeadFilter";
import HostelFeeHeadFilter from "../../../..//MembersTab/staff/Mainbody/FinanceManager/Filter/FeesHead/HostelFeeHeadFilter";
import QvipleLoader from "../../../Loader/QvipleLoader";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";
const FinanceExport = ({ instituteId, hostelId, fid }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });
  const [openStep, setOpenStep] = useState("");
  const { financeAllExcel, financeAllExcelLoading, financeAllExcelRefetch } =
    useFinanceAllExcel({
      data: {
        id: instituteId,
        page: page,
        limit: 10,
        search: search,
      },
      skip: !instituteId,
    });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (financeAllExcel?.list?.length) {
      let obj = nextPage(financeAllExcel?.list?.length);
      setState(() => obj);
    }
  }, [financeAllExcel?.list?.length]);
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
    setOpenStep("");
  };
  return (
    <>
      <UserMemberContainerWrapper>
        <UserMemberContentWrapper>
          <div className={style.fm_header_container}>
            <h6>{t("data_export")}</h6>
            <div className={style.fm_both_filter}>
              <div
                onClick={() => setOpenStep("HOSTEL")}
                className={style.fm_both_filter_with_name}
              >
                <img
                  src={`${assestsUserFinanceUrl}/filter.svg`}
                  alt="filter icon"
                />
                <h6>{t("hostel_fee_receipt_filter")}</h6>
              </div>
              <div
                onClick={() => setOpenStep("ADMISSION")}
                className={style.fm_both_filter_with_name}
              >
                <img
                  src={`${assestsUserFinanceUrl}/filter.svg`}
                  alt="filter icon"
                />
                <h6>{t("fee_receipt_filter")}</h6>
              </div>
              <div
                onClick={() => setOpenStep("TRANSACTION")}
                className={style.fm_both_filter_with_name}
              >
                <img
                  src={`${assestsUserFinanceUrl}/filter.svg`}
                  alt="filter icon"
                />
                <h6>{t("transaction_filter")}</h6>
              </div>
            </div>
          </div>
        </UserMemberContentWrapper>
        <BorderBottom />

        <UserMemberContentWrapper
          customStyle={{
            paddingTop: "0",
          }}
        >
          <div className={style.fm_search_full}>
            <section className={style.fm_search_full_container}>
              <div className={style.fm_search_full_container_inner}>
                <img
                  className={style.fm_search_full_icon}
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

          {financeAllExcel?.list?.map((excel, index) =>
            financeAllExcel?.list?.length === index + 1 ? (
              <div key={excel?._id} ref={ref}>
                <FinanceExportCard excel={excel} instituteId={instituteId} />
              </div>
            ) : (
              <FinanceExportCard
                excel={excel}
                key={excel?._id}
                instituteId={instituteId}
              />
            )
          )}
          {financeAllExcelLoading ? (
            search ? (
              <QvipleLoader />
            ) : (
              <Loading />
            )
          ) : search ? (
            !financeAllExcel?.list?.length && (
              <EmptyMessage
                title="No excel fuond related this search."
                customStyleContainer={{
                  marginTop: "1.5rem",
                }}
              />
            )
          ) : (
            !financeAllExcel?.list?.length && (
              <EmptyMessage
                customStyleContainer={{
                  marginTop: "1.5rem",
                }}
                title="No excel added."
              />
            )
          )}
        </UserMemberContentWrapper>
      </UserMemberContainerWrapper>
      {openStep === "HOSTEL" ? (
        <HostelFeeHeadFilter
          onClose={onClose}
          financeId={fid}
          hostelId={hostelId}
        />
      ) : openStep === "ADMISSION" ? (
        <FeeHeadFilter
          onClose={onClose}
          financeId={fid}
          instituteId={instituteId}
        />
      ) : openStep === "TRANSACTION" ? (
        <TransactionFilter
          instituteId={instituteId}
          onClose={onClose}
          viewAs="EXPORT"
          onRefetch={financeAllExcelRefetch}
        />
      ) : null}
    </>
  );
};

export default FinanceExport;
