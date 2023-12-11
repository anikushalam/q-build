import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useGetRefundByAdmission } from "../../../../../hooks/member_tab/admission-api";
import CustomSearch from "../../../../../JoiningForm/Student/Form/CustomSearch";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import style from "./AdmisisonRefund.module.css";
import AdmissionRefunedHistory from "./AdmissionRefunedHistory";
import RefundItem from "./RefundItem";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import { debounce } from "lodash";
import EmptyInfo from "../../../../../Loader/EmptyInfo";

const AdmisisonRefund = ({ admissionId, refundCount }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({ skip: search });
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [refundList, setRefundList] = useState([]);
  const tabList = [
    {
      name: t("excess_fee"),
      id: 0,
    },
    {
      name: t("deposit_refund"),
      id: 1,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const { getRefundByAdmission, getRefundByAdmissionRefetch } =
    useGetRefundByAdmission({
      data: {
        aid: admissionId,
        page: page,
        limit: 10,
        search: search,
      },
      skip: !admissionId,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (admissionId) {
      setShowingDataLoading(true);
      getRefundByAdmissionRefetch();
    }
  }, [admissionId, page, getRefundByAdmissionRefetch, search]);
  useEffect(() => {
    if (inView && state) setPage((prev) => (prev = prev + 1));
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      if (getRefundByAdmission?.all_refund_list) {
        setRefundList(() => getRefundByAdmission?.all_refund_list);
        setShowingDataLoading(false);
      }
    } else {
      if (getRefundByAdmission?.all_refund_list) {
        setRefundList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getRefundByAdmission?.all_refund_list]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getRefundByAdmission?.all_refund_list?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (getRefundByAdmission?.all_refund_list?.length === 10) setState(true);
    else setState(false);
  }, [getRefundByAdmission?.all_refund_list]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );
  const onSearchEvent = (e) => {
    if (e.target.value) {
      setPage(1);
      onDebounce(e.target.value);
    } else {
      setPage(1);
      setSearch("");
    }
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
        <h6>{t("scholarships_fees_refund")}</h6>
      </section>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={activeIndex}
        setActiveIndexTab={setActiveIndex}
        showAs={false}
        customStyleTab={{
          width: "50%",
        }}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.5rem",
        }}
      />
      {activeIndex === 0 && (
        <>
          <h6 className={style.refund_total}>
            {t("total_refund_amount_rs")} {refundCount ?? 0}
          </h6>
          <CustomSearch isSearch onSearchEvent={onSearchEvent} />
          <div className={style.refund_list}>
            {!showingDataLoading &&
              search &&
              getRefundByAdmission?.all_refund_list?.length < 1 && (
                <EmptyInfo
                  customStyleContainer={{
                    marginTop: "9rem",
                  }}
                  title={"No student found."}
                />
              )}
            {refundList?.map((refund, index) =>
              refundList?.length === index + 1 ? (
                <div ref={ref} key={refund?._id}>
                  <RefundItem refund={refund} />
                </div>
              ) : (
                <RefundItem refund={refund} key={refund?._id} />
              )
            )}

            {showingDataLoading && <QvipleLoading />}
          </div>
        </>
      )}
      {activeIndex === 1 && (
        <AdmissionRefunedHistory admissionId={admissionId} />
      )}
    </div>
  );
};

export default AdmisisonRefund;
