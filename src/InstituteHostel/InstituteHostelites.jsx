import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetHostelHostelitesList } from "../hooks/member_tab/hostel-api";
import QvipleLoading from "../Loader/QvipleLoading";
import { debounce } from "lodash";
import HostelitesCard from "../MembersTab/staff/Mainbody/Hostel/Hostelites/HostelitesCard";
import style from "./InstituteHostel.module.css";
import BorderBottom from "../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

const InstituteHostelites = ({ hid, instituteId }) => {
  const { t } = useTranslation();
  //   const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [hostelitesList, setHostelitesList] = useState([]);
  const [search, setSearch] = useState("");

  const { getHostelHostelitesList, getHostelHostelitesListRefetch } =
    useGetHostelHostelitesList({
      data: {
        hid: hid,
        page: page,
        limit: 10,
        search: search,
        filter_by: "",
        id: instituteId,
      },
      skip: !hid,
    });
  useEffect(() => {
    if (hid) {
      setShowingDataLoading(true);
      getHostelHostelitesListRefetch();
    }
  }, [hid, instituteId, page, search, getHostelHostelitesListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setHostelitesList(getHostelHostelitesList?.all_hostalities);
      setShowingDataLoading(false);
    } else {
      if (getHostelHostelitesList?.all_hostalities) {
        setHostelitesList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getHostelHostelitesList?.all_hostalities]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getHostelHostelitesList?.all_hostalities?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getHostelHostelitesList?.all_hostalities?.length === 10) setState(true);
    else setState(false);
  }, [getHostelHostelitesList?.all_hostalities]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  return (
    <div>
      <div className={style.with_search}>
        <h6>{t("hostelites")}</h6>
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
      {hostelitesList?.map((hostelites, index) =>
        hostelitesList?.length === index + 1 ? (
          <div ref={ref} key={hostelites?._id}>
            <HostelitesCard hostelites={hostelites} viewAs={"INSTITUTE_SIDE"} />
          </div>
        ) : (
          <HostelitesCard
            hostelites={hostelites}
            key={hostelites?._id}
            viewAs={"INSTITUTE_SIDE"}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default InstituteHostelites;
