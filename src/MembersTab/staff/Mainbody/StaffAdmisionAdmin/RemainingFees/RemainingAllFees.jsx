import React, { useCallback, useEffect, useState } from "react";
import {
  useAllAdmissionRemaining,
  useGetPendingCustomFilterByAdmission,
} from "../../../../../hooks/member_tab/admission-api";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import RemainingFeesWrapper from "./RemainingFeesWrapper";
import RemainingTab from "./RemainingTab";
import { useTranslation } from "react-i18next";
import RemianingStudentCard from "./RemianingStudentCard";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import QvipleLoading from "../../../../../Loader/QvipleLoading";

const RemainingAllFees = ({
  isEnable,
  instituteId,
  onRefetch,
  carryParentState,
  pageOpenAs,
  admissionId,
}) => {
  const { t } = useTranslation();
  const adsId = useSelector((state) => state.admissionChange);
  const [state, setState] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [remain, setRemain] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [applyFilter, setApplyFilter] = useState({
    depart_arr: [],
    batch_arr: [],
    master_arr: [],
    gender: "",
    cast_category: "",
    filter_by: "",
  });
  const [callApi, setCallApi] = useState(false);

  const { scrollToTop } = useScrollbar();

  const [allAdmissionRemaining] = useAllAdmissionRemaining();
  const {
    getPendingCustomFilterByAdmission,
    getPendingCustomFilterByAdmissionRefetch,
  } = useGetPendingCustomFilterByAdmission({
    data: {
      aid: adsId?.aid ? adsId?.aid : admissionId,
      flow: "Admission_Filter",
    },
    skip: adsId?.aid ? !adsId?.aid : !admissionId,
  });

  useEffect(() => {
    if (adsId?.aid || admissionId) {
      getPendingCustomFilterByAdmissionRefetch();
    }
  }, [adsId?.aid, admissionId, getPendingCustomFilterByAdmissionRefetch]);

  const onCallRemainingList = useCallback(() => {
    if (callApi) {
      allAdmissionRemaining({
        aid: adsId?.aid ? adsId?.aid : admissionId,
        page: page,
        limit: 10,
        search: search,
        flow: "All_Pending_Fees_Query",
        filter_by: applyFilter.filter_by,
        filterData: {
          ...applyFilter,
        },
      })
        .then((res) => {
          if (res.data?.remain) {
            if (search) {
              setRemain(res.data?.remain);
              setShowingDataLoading(false);
            } else {
              if (res.data?.remain) {
                if (page === 1) {
                  setRemain(res.data?.remain);
                } else {
                  setRemain((prev) =>
                    [
                      ...new Set(
                        [...prev, ...res.data?.remain].map(JSON.stringify)
                      ),
                    ].map(JSON.parse)
                  );
                }
                setShowingDataLoading(false);
              } else if (res.data?.remain?.length === 0) {
                setShowingDataLoading(false);
              } else {
              }
            }
            if (res.data?.remain?.length === 10) setState(true);
            else setState(false);
          }
        })
        .catch({});
    }
  }, [search, page, adsId?.aid, admissionId, applyFilter, callApi]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (adsId?.aid || admissionId) {
      setShowingDataLoading(true);
      onCallRemainingList();
    }
  }, [page, adsId?.aid, admissionId, search, onCallRemainingList]);

  useEffect(() => {
    setPage((prev) => (prev = 1));
    setShowingDataLoading(true);
    onCallRemainingList();
  }, [applyFilter, onCallRemainingList]);

  useEffect(() => {
    if (
      getPendingCustomFilterByAdmission?.ads_admin?.pending_fee_custom_filter
    ) {
      let isFilter =
        getPendingCustomFilterByAdmission?.ads_admin?.pending_fee_custom_filter;
      setApplyFilter({
        depart_arr: isFilter?.department,
        batch_arr: isFilter?.batch,
        master_arr: isFilter?.master,
        gender: isFilter?.gender,
        cast_category: isFilter?.cast_category,
        filter_by: "",
      });
      setCallApi(true);
    }
  }, [getPendingCustomFilterByAdmission?.ads_admin?.pending_fee_custom_filter]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
    if (!e.target.value) {
      setPage(1);
      onCallRemainingList();
      setShowingDataLoading(true);
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <>
      <RemainingFeesWrapper
        aid={adsId?.aid ? adsId?.aid : admissionId}
        isEnable={isEnable}
        onRefetch={onRefetch}
        instituteId={instituteId}
        applyFilter={applyFilter}
        setApplyFilter={setApplyFilter}
        pageOpenAs={pageOpenAs}
        admissionId={adsId?.aid ? adsId?.aid : admissionId}
      >
        <input
          type="text"
          placeholder={t("search-label")}
          onChange={onSearchEvent}
        />
      </RemainingFeesWrapper>
      <RemainingTab
        carryParentState={carryParentState}
        pageOpenAs={pageOpenAs}
      />
      {remain?.map((rem, index) =>
        remain?.length === index + 1 ? (
          <div key={index} ref={ref}>
            <RemianingStudentCard remainData={rem} />
          </div>
        ) : (
          <RemianingStudentCard key={index} remainData={rem} />
        )
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
    </>
  );
};

export default RemainingAllFees;
