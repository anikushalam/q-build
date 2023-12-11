import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetHostelUnitList } from "../../../../../hooks/member_tab/hostel-api";
import { debounce } from "lodash";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import UnitCard from "./UnitCard";
import style from "../Hostel.module.css";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import AddHostelUnit from "./AddHostelUnit";

const HostelUnit = ({
  hid,
  instituteId,
  carryParentState,
  viewAs,
  callApi,
  pageOpenAs,
}) => {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [hostelUnitList, setHostelUnitList] = useState([]);
  const [search, setSearch] = useState("");
  const [refetchStatus, setRefetchStatus] = useState(false);

  const { getHostelUnitList, getHostelUnitListRefetch } = useGetHostelUnitList({
    data: {
      hid: hid,
      page: page,
      limit: 10,
      search: search,
    },
    skip: !hid,
  });
  useEffect(() => {
    if (hid) {
      setShowingDataLoading(true);
      getHostelUnitListRefetch();
    }
  }, [hid, page, search, getHostelUnitListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setHostelUnitList(getHostelUnitList?.all_units);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (search) {
        setHostelUnitList(getHostelUnitList?.all_units);
        setShowingDataLoading(false);
      } else {
        if (getHostelUnitList?.all_units) {
          setHostelUnitList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getHostelUnitList?.all_units]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getHostelUnitList?.all_units?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getHostelUnitList?.all_units?.length === 10) setState(true);
    else setState(false);
  }, [getHostelUnitList?.all_units]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getHostelUnitListRefetch();
  };
  return (
    <>
      <div className={style.with_search}>
        <h6>{t("hostel_units")}</h6>
        <section className={style.search_container}>
          <div className={style.search_container_input}>
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input
              type="text"
              placeholder="Search hostel units..."
              onChange={onSearchEvent}
            />
          </div>
        </section>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />
      {viewAs === "STUDENT" ||
      viewAs === "HOSTEL_SEARCH" ||
      viewAs === "RENEWAL" ? (
        ""
      ) : (
        <p className={style.add_new_category} onClick={onClose}>
          {t("create_new_unit")}
        </p>
      )}
      {hostelUnitList?.map((hostelUnit, index) =>
        hostelUnitList?.length === index + 1 ? (
          <div ref={ref} key={hostelUnit?._id}>
            <UnitCard
              hostelUnit={hostelUnit}
              carryParentState={carryParentState}
              viewAs={viewAs}
              callApi={callApi}
              pageOpenAs={pageOpenAs}
            />
          </div>
        ) : (
          <UnitCard
            hostelUnit={hostelUnit}
            key={hostelUnit?._id}
            carryParentState={carryParentState}
            viewAs={viewAs}
            callApi={callApi}
            pageOpenAs={pageOpenAs}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {add && (
        <AddHostelUnit
          onClose={onClose}
          hid={hid}
          instituteId={instituteId}
          onRefetch={onRefetchWhenCreate}
        />
      )}
    </>
  );
};

export default HostelUnit;
