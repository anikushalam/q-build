import React, { useState } from "react";
import style from "./InsProminentAlumni.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useGetProminentAlumniList } from "../../hooks/member_tab/alumni-api";
import { useEffect } from "react";
import QvipleLoading from "../../Loader/QvipleLoading";
import { Link, useParams } from "react-router-dom";
import { imageShowUrl } from "../../services/BaseUrl";
import ProminentCard from "./ProminentCard";

function AlumniCard({ itemRef, aid, prominent, onRefetchWhenProminentCreate }) {
  console.info(prominent);
  return (
    <div className={style.alumnicard} ref={itemRef}>
      <img
        // src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        src={`${imageShowUrl}/${prominent?.profile_photo}`}
        alt="alumni"
      />

      <div className={style.alumnicardtext}>{prominent?.name}</div>
    </div>
  );
}

function InsProminentAlumni({ aid, setStatus }) {
  const { t } = useTranslation();

  // --------------------------------------
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [timeeOut, setTimeeOut] = useState(false);
  const [prominentist, setProminentist] = useState([]);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getProminentAlumniList, getProminentAlumniListRefetch } =
    useGetProminentAlumniList({
      data: {
        aid: aid,
        page: page,
        limit: 10,
      },

      skip: !aid,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (aid) {
      setShowingDataLoading(true);
      getProminentAlumniListRefetch();
    }
  }, [page, aid, search, getProminentAlumniListRefetch]);

  useEffect(() => {
    if (search) {
      setProminentist(getProminentAlumniList?.all_prominent);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setProminentist((prevState) =>
          [
            ...new Set(
              [...getProminentAlumniList?.all_prominent, ...prevState]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setRefetchStatus(false);
      } else if (editRefetchStatus) {
        setProminentist((prevState) =>
          [
            ...new Set(
              [...getProminentAlumniList?.all_prominent]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setEditRefetchStatus(false);
      } else {
        if (getProminentAlumniList?.all_prominent) {
          setProminentist((prevState) =>
            [
              ...new Set(
                [...prevState, ...getProminentAlumniList?.all_prominent]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getProminentAlumniList?.all_prominent?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getProminentAlumniList?.all_prominent?.length === 10) setState(true);
    else setState(false);
  }, [getProminentAlumniList?.all_prominent]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeOut(!timeeOut);
      setShowingDataLoading(false);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefetchWhenProminentCreate = () => {
    setPage(1);
    setEditRefetchStatus(true);
    setTimeeOut(false);
    setShowingDataLoading(true);
    getProminentAlumniListRefetch();
  };

  const onRefetchWhenVacancyEdited = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getProminentAlumniListRefetch();
  };

  return (
    <div className={style.prominentAlumni}>
      <div className={`${style.formSelect} ${style.bottomborder}`}>
        <img
          alt=""
          src="/images/arrow-left-icon.svg"
          onClick={() => setStatus("")}
        />

        <h6>{t("prominent_alumni")}</h6>
      </div>
      <div className={style.prominentAlumnitop}>
        <img src="/images/alumni/prominent-icon.svg" alt="prominent alumni" />
        <div className={style.prominentAlumnitoptext}>
          <div className={style.prominentAlumnitoptexttop}>
            <h6 className={style.prominentAlumnitoptexth6}>
              {t("total_alumni")} <span>0</span>{" "}
            </h6>
            <p className={style.prominentAlumnitoptextp}>
              {t("sucess_stories")} <span>{prominentist?.length}</span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className={style.prominentAlumnibody}>
        {prominentist?.length === 0 && timeeOut ? (
          <div className={style.noData}>
            <img src="/images/nodata.jpg" alt="" />
          </div>
        ) : (
          <div className={style.reglist}>
            {prominentist?.map((prominent, index) =>
              prominentist?.length === index + 1 ? (
                <ProminentCard
                  prominent={prominent}
                  itemRef={ref}
                  key={index}
                />
              ) : (
                <ProminentCard prominent={prominent} key={index} />
              )
            )}
          </div>
        )}
      </div>

      {showingDataLoading && <QvipleLoading />}
    </div>
  );
}

export default InsProminentAlumni;
