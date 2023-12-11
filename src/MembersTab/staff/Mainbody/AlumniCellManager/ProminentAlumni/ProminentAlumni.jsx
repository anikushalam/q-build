import React, { useState } from "react";
import style from "./ProminentAlumni.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useGetProminentAlumniList } from "../../../../../hooks/member_tab/alumni-api";
import { useEffect } from "react";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import ProminentForm from "./ProminentForm";
import { Link, useParams } from "react-router-dom";
import { imageShowUrl } from "../../../../../services/BaseUrl";

function AlumniCard({ prominent }) {
  return (
    <div className={style.alumnicard}>
      <img src={`${imageShowUrl}/${prominent?.profile_photo}`} alt="alumni" />

      <div className={style.alumnicardtext}>{prominent?.name}</div>
    </div>
  );
}

function ProminentAlumni({ carryParentState, totalAlumni }) {
  const { t } = useTranslation();
  const [form, setForm] = useState(false);
  const params = useParams();
  const author = useSelector((state) => state.alumniChange);
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
        aid: author?.aid,
        page: page,
        limit: 10,
      },

      skip: !author?.aid,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (author?.aid) {
      setShowingDataLoading(true);
      getProminentAlumniListRefetch();
    }
  }, [page, author?.aid, search, getProminentAlumniListRefetch]);

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
        <Link
          to={`/q/${params.username}/member/alumni`}
          state={{ ...carryParentState }}
        >
          <img alt="" src="/images/arrow-left-icon.svg" />
        </Link>

        <h6>{t("prominent_alumni")}</h6>
      </div>
      <div className={style.prominentAlumnitop}>
        <img src="/images/alumni/prominent-icon.svg" alt="prominent alumni" />
        <div className={style.prominentAlumnitoptext}>
          <div className={style.prominentAlumnitoptexttop}>
            <h6 className={style.prominentAlumnitoptexth6}>
              {t("total_alumni")} <span>{totalAlumni}</span>{" "}
            </h6>
            <p className={style.prominentAlumnitoptextp}>
              {t("sucess_stories")} <span>{prominentist?.length}</span>{" "}
            </p>
          </div>
          <div
            className={style.prominentAlumnitoptextbtn}
            onClick={() => setForm(true)}
          >
            {t("add_success_stories")}
            <img src="/images/alumni/add_circle.svg" alt="add" />
          </div>
        </div>
      </div>

      {!form && (
        <div className={style.prominentAlumnibody}>
          {prominentist?.length === 0 && timeeOut ? (
            <div className={style.noData}>
              <img src="/images/nodata.jpg" alt="" />
            </div>
          ) : (
            <>
              <div className={`${style.reglist} ${style.promientList}`}>
                {prominentist?.map((prominent, index) =>
                  prominentist?.length === index + 1 ? (
                    <div ref={ref} key={index} className={style.itemIcon}>
                      <AlumniCard
                        aid={author?.aid}
                        prominent={prominent}
                        onRefetchWhenProminentCreate={
                          onRefetchWhenProminentCreate
                        }
                      />
                    </div>
                  ) : (
                    <div key={index} className={style.itemIcon}>
                      <AlumniCard
                        aid={author?.aid}
                        prominent={prominent}
                        onRefetchWhenProminentCreate={
                          onRefetchWhenProminentCreate
                        }
                      />
                    </div>
                  )
                )}
              </div>
            </>
          )}
        </div>
      )}

      {form && (
        <ProminentForm
          aid={author?.aid}
          setForm={setForm}
          insId={author?.insId}
          onRefetchWhenProminentCreate={onRefetchWhenProminentCreate}
        />
      )}

      {showingDataLoading && <QvipleLoading />}
    </div>
  );
}

export default ProminentAlumni;
