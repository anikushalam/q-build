import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "../../MembersTab/staff/Mainbody/AlumniCellManager/AlumniCellManager.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import { useCallback } from "react";

import { Link, useParams } from "react-router-dom";
import { useGetAlumniReglist } from "../../hooks/member_tab/alumni-api";
import AlumniItem from "../../MembersTab/staff/Mainbody/AlumniCellManager/AlumniItem";
import QvipleLoading from "../../Loader/QvipleLoading";

function AlumniList({ aid }) {
  const { t } = useTranslation();
  const author = useSelector((state) => state.alumniChange);

  // --------------------------------------
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [regList, setRegList] = useState([]);
  const [timeeOut, setTimeeOut] = useState(false);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getAlumniReglist, getAlumniRegListRefetch } = useGetAlumniReglist({
    data: {
      aid: aid,
      page: page,
      limit: 10,
      status: "Given",
    },

    skip: !aid,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (aid) {
      setShowingDataLoading(true);
      getAlumniRegListRefetch();
    }
  }, [page, aid, search, getAlumniRegListRefetch]);

  useEffect(() => {
    if (search) {
      setRegList(getAlumniReglist?.all_register);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setRegList((prevState) =>
          [
            ...new Set(
              [...getAlumniReglist?.all_register, ...prevState]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setRefetchStatus(false);
      } else if (editRefetchStatus) {
        setRegList((prevState) =>
          [
            ...new Set(
              [...getAlumniReglist?.all_register]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setEditRefetchStatus(false);
      } else {
        if (getAlumniReglist?.all_register) {
          setRegList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getAlumniReglist?.all_register]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getAlumniReglist?.all_register?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getAlumniReglist?.all_register?.length === 10) setState(true);
    else setState(false);
  }, [getAlumniReglist?.all_register]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeOut(!timeeOut);
      setShowingDataLoading(false);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const params = useParams();
  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearch = (val) => {
    onDebounce(val);
    setShowingDataLoading(true);
  };

  const onRefetchWhenVacancyCreate = () => {
    setPage(1);
    setEditRefetchStatus(true);
    setShowingDataLoading(true);
    getAlumniRegListRefetch();
  };

  const onRefetchWhenVacancyEdited = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getAlumniRegListRefetch();
  };

  return (
    <div className={style.reglistcontainer}>
      <div className={style.searchContainerr}>
        <div className={style.searchContainer}>
          <img alt="" src="/images/search-dept-icon.svg" />
          <input
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            placeholder={t("search-label")}
            required
          />
        </div>
      </div>

      {regList?.length === 0 && timeeOut ? (
        <div className={style.noData}>
          <img src="/images/nodata.jpg" alt="" />
        </div>
      ) : (
        <div>
          <div className={style.header}>
            <div className={style.oneRowDate}>
              <p className={style.joinigDate}>{t("date")}</p>
            </div>
            <div className={style.oneRowName}>
              <p className={style.name}>{t("name")}</p>
            </div>
            <div className={style.oneRowContact}>
              <p className={style.contact}>{t("contact_number")}</p>
            </div>
            <div className={` ${style.oneRowwIndex}`}>
              <p className={style.index}>{t("certification")}</p>
            </div>
          </div>
          <div className={style.reglist}>
            {regList?.map((regAlumni, index) =>
              regList?.length === index + 1 ? (
                <div ref={ref} key={index} className={style.itemIcon}>
                  <AlumniItem
                    status="given"
                    aid={aid}
                    regAlumni={regAlumni}
                    onRefetchWhenAlumniCreate={onRefetchWhenVacancyCreate}
                  />
                </div>
              ) : (
                <div key={index} className={style.itemIcon}>
                  <AlumniItem
                    status="given"
                    aid={aid}
                    regAlumni={regAlumni}
                    onRefetchWhenAlumniCreate={onRefetchWhenVacancyCreate}
                  />
                </div>
              )
            )}
          </div>
        </div>
      )}

      {showingDataLoading && <QvipleLoading status="white" />}
    </div>
  );
}

export default AlumniList;
