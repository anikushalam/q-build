import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useGetDriverConductorList } from "../../../../../hooks/member_tab/transport-api";
import TranspotationCard from "./TranspotationCard";
import style from "../../Hostel/Hostel.module.css";

const TransportStaff = ({ tid, carryParentState }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [transpotationList, setTranspotationList] = useState([]);
  const [search, setSearch] = useState("");

  const { getDriverConductorList, getDriverConductorListRefetch } =
    useGetDriverConductorList({
      data: {
        tid: tid,
        page: page,
        limit: 10,
        search: search,
      },
      skip: !tid,
    });
  useEffect(() => {
    if (tid) {
      setShowingDataLoading(true);
      getDriverConductorListRefetch();
    }
  }, [tid, page, search, getDriverConductorListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setTranspotationList(getDriverConductorList?.all_dcStaff);
      setShowingDataLoading(false);
    } else {
      if (getDriverConductorList?.all_dcStaff) {
        setTranspotationList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getDriverConductorList?.all_dcStaff]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getDriverConductorList?.all_dcStaff?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getDriverConductorList?.all_dcStaff?.length === 10) setState(true);
    else setState(false);
  }, [getDriverConductorList?.all_dcStaff]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  return (
    <>
      <div
        className={style.with_search}
        style={{
          paddingInline: "1rem",
          paddingBottom: "0.5rem",
        }}
      >
        <h6>{t("vehicles")}</h6>
        <section className={style.search_container}>
          <div className={style.search_container_input}>
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input type="text" placeholder="Search" onChange={onSearchEvent} />
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
      <div
        className={style.transpotation_container}
        style={{
          borderTop: "0",
        }}
      >
        <div className={style.transpotation_head}>
          <h6
            style={{
              width: "15%",
              paddingLeft: "0.8rem",
            }}
          >
            {t("transport_type")}
          </h6>
          <h6
            style={{
              width: "37%",
            }}
          >
            {t("name")}
          </h6>
          <h6
            style={{
              width: "28%",
            }}
          >
            {t("contact_number")}
          </h6>
          <h6
            style={{
              width: "20%",
            }}
          >
            {t("joining_date")}
          </h6>
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        {transpotationList?.map((transpotation, index) =>
          transpotationList?.length === index + 1 ? (
            <div ref={ref} key={transpotation?._id}>
              <TranspotationCard
                transpotation={transpotation}
                carryParentState={carryParentState}
              />
            </div>
          ) : (
            <TranspotationCard
              transpotation={transpotation}
              key={transpotation?._id}
              carryParentState={carryParentState}
              border
            />
          )
        )}
      </div>
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default TransportStaff;
