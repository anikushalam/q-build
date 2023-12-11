import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetHostelWardenList } from "../hooks/member_tab/hostel-api";
import QvipleLoading from "../Loader/QvipleLoading";
import WardenCard from "./WardenCard";
import style from "./InstituteHostel.module.css";
import BorderBottom from "../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { debounce } from "lodash";

const InstituteHostelWarden = ({ hid }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [wardenList, setWardenList] = useState([]);
  const [search, setSearch] = useState("");

  const { getHostelWardenList, getHostelWardenListRefetch } =
    useGetHostelWardenList({
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
      getHostelWardenListRefetch();
    }
  }, [hid, page, search, getHostelWardenListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setWardenList(getHostelWardenList?.all_wardens);
      setShowingDataLoading(false);
    } else {
      if (getHostelWardenList?.all_wardens) {
        setWardenList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getHostelWardenList?.all_wardens]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getHostelWardenList?.all_wardens?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getHostelWardenList?.all_wardens?.length === 10) setState(true);
    else setState(false);
  }, [getHostelWardenList?.all_wardens]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };

  return (
    <>
      <div className={style.with_search}>
        <h6>{t("staff_room")}</h6>
        <section className={style.search_container}>
          <div className={style.search_container_input}>
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input
              type="text"
              placeholder="Search warden..."
              onChange={onSearchEvent}
            />
          </div>
        </section>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          width: "100%",
        }}
      />
      {wardenList?.map((warden, index) =>
        wardenList?.length === index + 1 ? (
          <div ref={ref} key={warden?._id}>
            <WardenCard warden={warden} />
          </div>
        ) : (
          <WardenCard warden={warden} key={warden?._id} />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default InstituteHostelWarden;
