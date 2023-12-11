import React, { useCallback, useEffect, useState } from "react";
import style from "../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import { useTranslation } from "react-i18next";
import { debounce } from "lodash";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../Loader/EmptyInfo";
import { useScrollbar } from "../../../../Scroll/use-scroll";
import { useParams, Link } from "react-router-dom";
import { useAssignSearchStaff } from "../../../../Post/Institute/Components/search-api";
import StaffDetailCard from "./StaffDetailCard";
const AllStaffList = ({ instituteId, staffAlias, carryParentState }) => {
  const { t } = useTranslation();
  const params = useParams();
  const [state, setState] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({ skip: search });
  const [allStaff, setAllStaff] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { scrollToTop } = useScrollbar();

  const { assignSearchStaff, assignSearchStaffRefetch } = useAssignSearchStaff({
    search: {
      search: search,
      page: page,
      id: instituteId,
      limit: 10,
    },
    skip: !instituteId,
  });
  useEffect(() => {
    if (instituteId) assignSearchStaffRefetch();
  }, [instituteId, assignSearchStaffRefetch, page, search]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (assignSearchStaff?.staff) {
      if (search) {
        setAllStaff(assignSearchStaff?.staff);
        setShowingDataLoading(false);
      } else {
        if (assignSearchStaff?.staff?.length) {
          setAllStaff((prevState) =>
            [
              ...new Set(
                [...prevState, ...assignSearchStaff?.staff]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (assignSearchStaff?.staff?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }

    if (assignSearchStaff?.staff.length === 10) setState(true);
    else setState(false);
  }, [assignSearchStaff?.staff]);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);
  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    setPage(1);
    onDebounce(e.target.value);
    if (!e.target.value) {
      setShowingDataLoading(true);
    }
  };
  return (
    <div
      className={style.moderator_container}
      style={{
        marginTop: "0",
      }}
    >
      <section className={style.moderator_container_title}>
        <div className={style.with_search}>
          <h6>{t("all_staff")}</h6>
          <section
            className={style.search_container}
            style={{
              gap: "1rem",
            }}
          >
            <div className={style.search_container_input}>
              <img
                className={style.searchIcon}
                alt="search icon"
                src="/images/search-dash-icon.svg"
              />
              <input
                type="text"
                placeholder="Search staff..."
                onChange={onSearchEvent}
                style={{
                  width: "400px",
                }}
              />
            </div>
          </section>
        </div>
      </section>

      {allStaff?.map((staff, index) =>
        allStaff?.length === index + 1 ? (
          <div key={staff?._id} ref={ref}>
            <StaffDetailCard
              staff={staff}
              instituteId={instituteId}
              staffAlias={staffAlias}
              carryParentState={carryParentState}
            />
          </div>
        ) : (
          <StaffDetailCard
            key={staff?._id}
            staff={staff}
            instituteId={instituteId}
            staffAlias={staffAlias}
            carryParentState={carryParentState}
          />
        )
      )}
      {!showingDataLoading && !allStaff.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "9rem",
          }}
          title={"No staff found."}
        />
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
    </div>
  );
};

export default AllStaffList;
