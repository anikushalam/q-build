import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetTransportLinkedList } from "../../../../../hooks/member_tab/transport-api";
import { debounce } from "lodash";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import style from "../../Hostel/Hostel.module.css";
import LinkedInstituteCard from "./LinkedInstituteCard";
const LinkedInstitute = ({ transportId }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({ skip: search });
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [instituteList, setInstituteList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);

  const { getTransportLinkedList, getTransportLinkedListRefetch } =
    useGetTransportLinkedList({
      data: {
        tid: transportId,
        page: page,
        limit: 10,
        search: search,
      },
      skip: !transportId,
    });
  useEffect(() => {
    if (transportId) {
      setShowingDataLoading(true);
      getTransportLinkedListRefetch();
    }
  }, [transportId, page, search, getTransportLinkedListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setInstituteList(getTransportLinkedList?.all_ins);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (search) {
        setInstituteList(getTransportLinkedList?.all_ins);
        setShowingDataLoading(false);
      } else {
        if (getTransportLinkedList?.all_ins) {
          setInstituteList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getTransportLinkedList?.all_ins]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getTransportLinkedList?.all_ins?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getTransportLinkedList?.all_ins?.length === 10) setState(true);
    else setState(false);
  }, [getTransportLinkedList?.all_ins]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    if (!e.target.value) {
      onDebounce("");
      setPage((prev) => (prev = 1));
    } else {
      onDebounce(e.target.value);
    }
  };

  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getTransportLinkedListRefetch();
  };
  return (
    <>
      <div className={style.with_search}>
        <h6>{t("linked_institute")}</h6>
        <section className={style.search_container}>
          <div className={style.search_container_input}>
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input
              type="text"
              placeholder="Search institutes..."
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
      <div className={style.vehicle_list}>
        {instituteList?.map((institute, index) =>
          instituteList?.length === index + 1 ? (
            <div
              ref={ref}
              key={institute?._id}
              style={{
                width: "100%",
              }}
            >
              <LinkedInstituteCard
                institute={institute}
                transportId={transportId}
                onRefetch={onRefetchWhenCreate}
              />
            </div>
          ) : (
            <LinkedInstituteCard
              institute={institute}
              key={institute?._id}
              border
              transportId={transportId}
              onRefetch={onRefetchWhenCreate}
            />
          )
        )}
      </div>
      {showingDataLoading && <QvipleLoading status="white" />}
    </>
  );
};

export default LinkedInstitute;
