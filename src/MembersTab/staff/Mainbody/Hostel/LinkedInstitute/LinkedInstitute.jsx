import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import style from "../../Hostel/Hostel.module.css";
import LinkedInstituteCard from "./LinkedInstituteCard";
import { useGetHostelLinkedList } from "../../../../../hooks/member_tab/hostel-api";
const LinkedInstitute = ({ hid }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({ skip: search });
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [instituteList, setInstituteList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);

  const { getHostelLinkedList, getHostelLinkedListRefetch } =
    useGetHostelLinkedList({
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
      getHostelLinkedListRefetch();
    }
  }, [hid, page, search, getHostelLinkedListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setInstituteList(getHostelLinkedList?.all_ins);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (search) {
        setInstituteList(getHostelLinkedList?.all_ins);
        setShowingDataLoading(false);
      } else {
        if (getHostelLinkedList?.all_ins) {
          setInstituteList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getHostelLinkedList?.all_ins]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getHostelLinkedList?.all_ins?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getHostelLinkedList?.all_ins?.length === 10) setState(true);
    else setState(false);
  }, [getHostelLinkedList?.all_ins]);

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
    getHostelLinkedListRefetch();
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
                hid={hid}
                onRefetch={onRefetchWhenCreate}
              />
            </div>
          ) : (
            <LinkedInstituteCard
              institute={institute}
              key={institute?._id}
              border
              hid={hid}
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
