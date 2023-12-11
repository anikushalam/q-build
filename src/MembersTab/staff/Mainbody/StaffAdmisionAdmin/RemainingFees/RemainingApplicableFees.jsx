import React, { useCallback, useEffect, useState } from "react";
import { useAllRemaining } from "../../../../../hooks/member_tab/admission-api";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import RemainingFeesWrapper from "./RemainingFeesWrapper";
import RemainingTab from "./RemainingTab";
import { useTranslation } from "react-i18next";
import RemianingStudentCard from "./RemianingStudentCard";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import QvipleLoading from "../../../../../Loader/QvipleLoading";

const RemainingApplicableFees = ({
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
  const { scrollToTop } = useScrollbar();

  const { allRemainingList, allRemainingListRefetch } = useAllRemaining({
    data: {
      aid: adsId?.aid ? adsId?.aid : admissionId,
      page: page,
      limit: 10,
      search: search,
      flow: "Applicable_Fees_Query",
    },
    skip: adsId?.aid ? !adsId?.aid : !admissionId,
  });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (adsId?.aid || admissionId) {
      setShowingDataLoading(true);
      allRemainingListRefetch();
    }
  }, [page, adsId?.aid, admissionId, search, allRemainingListRefetch]);
  useEffect(() => {
    if (search) {
      setRemain(allRemainingList?.remain);
      setShowingDataLoading(false);
    } else {
      if (allRemainingList?.remain) {
        if (page === 1) {
          setRemain(allRemainingList?.remain);
        } else {
          setRemain((prev) =>
            [
              ...new Set(
                [...prev, ...allRemainingList?.remain].map(JSON.stringify)
              ),
            ].map(JSON.parse)
          );
        }
        setShowingDataLoading(false);
      } else if (allRemainingList?.remain?.length === 0) {
        setShowingDataLoading(false);
      } else {
      }
    }
    if (allRemainingList?.remain?.length === 10) setState(true);
    else setState(false);
  }, [allRemainingList?.remain]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
    if (!e.target.value) {
      setPage(1);
      allRemainingListRefetch();
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
        isApplicable
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
            <RemianingStudentCard remainData={rem} is_applicable />
          </div>
        ) : (
          <RemianingStudentCard key={index} remainData={rem} is_applicable />
        )
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
    </>
  );
};

export default RemainingApplicableFees;
