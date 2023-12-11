import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useAssignSearchStaff } from "../../../../../../Post/Institute/Components/search-api";
import { debounce } from "lodash";
import style from "./AllStaffList.module.css";
import OneStaff from "./OneStaff";
import { useTranslation } from "react-i18next";

function AllStaffList({
  setStaffListView,
  setReplacedStaff,
  replaceStaffId,
  replacedStaff,
}) {
  const id = useSelector((state) => state.idChange.id);
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const { t } = useTranslation();

  const [ref, inView] = useInView();
  const [allStaff, setAllStaff] = React.useState([]);
  const [search, setSearch] = useState("");

  const { assignSearchStaff, assignSearchStaffRefetch } = useAssignSearchStaff({
    skip: !id,
    search: { search: search, page: page, id: id, limit: 10 },
  });
  React.useEffect(() => {
    if (id) assignSearchStaffRefetch();
  }, [id, page, assignSearchStaffRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (assignSearchStaff?.staff) {
      if (search) {
        setAllStaff(assignSearchStaff?.staff);
      } else {
        const dublicateStaff = [...allStaff, ...assignSearchStaff?.staff];
        const uniqueRefind = [
          ...new Set(dublicateStaff.map(JSON.stringify)),
        ].map(JSON.parse);
        setAllStaff(uniqueRefind);
      }
    }
    if (assignSearchStaff?.staff.length === 10) setState(true);
    else setState(false);
  }, [assignSearchStaff?.staff]);
  useEffect(() => {
    if (search) handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  const handleSearch = () => {
    assignSearchStaffRefetch();
  };

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const searchHandler = (val) => {
    deb(val);
  };
  return (
    <>
      <div className={style.complaintDetails}>
        <div className={style.detailsheader}>
          <h6>{t("all_staff_list")}</h6>
          <img
            onClick={() => setStaffListView(false)}
            src="/images/close-post-icon.svg"
            alt=""
          />
        </div>
        <div className={style.detailsbody}>
          <div className={style.searchbar}>
            <input
              type="text"
              placeholder={t("search")}
              className={`form-control ${style.searchinput}`}
              onChange={(e) => searchHandler(e.target.value)}
            />
            <img
              className={style.searchIcon}
              alt="img"
              src="/images/search-dash-icon.svg"
            />
          </div>

          <div className={style.items}>
            {allStaff?.map((val, index) =>
              allStaff?.length === index + 1 ? (
                <div ref={ref} key={index}>
                  {val?._id === `${replaceStaffId}` ? (
                    ""
                  ) : (
                    <OneStaff
                      setReplacedStaff={setReplacedStaff}
                      val={val}
                      replacedStaff={replacedStaff}
                    />
                  )}
                </div>
              ) : val?._id === `${replaceStaffId}` ? (
                ""
              ) : (
                <OneStaff
                  key={index}
                  setReplacedStaff={setReplacedStaff}
                  val={val}
                  replacedStaff={replacedStaff}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllStaffList;
