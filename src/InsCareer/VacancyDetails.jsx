import React, { useState } from "react";
import style from "./VacancyDetails.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  useGetVacancyDetail,
  useGetApplicationlist,
  useMarkComplete,
} from "../hooks/member_tab/career-api";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ApplicationItem from "./ApplicationItem";
import QvipleLoading from "../Loader/QvipleLoading";
import QLoader from "../Loader/QLoader";
import ConfirmMarkComplete from "./ConfirmMarkComplete";

function VacancyDetails({ setStatus }) {
  const { t } = useTranslation();
  const careerId = useSelector((state) => state.careerChange);
  const [markComplete] = useMarkComplete();
  const { getVacancyDetail, getVacancyDetailRefetch } = useGetVacancyDetail({
    vid: careerId.vid,
    skip: !careerId.vid,
  });
  const [disabled, setDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // --------------------------------------
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [applicationList, setApplicationList] = useState([]);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getApplicationlist, getApplicationListRefetch } =
    useGetApplicationlist({
      data: {
        vid: careerId.vid,
        page: page,
        limit: 10,
        search: search,
      },
      skip: !careerId.vid,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (careerId.vid) {
      setShowingDataLoading(true);
      getApplicationListRefetch();
    }
  }, [page, careerId.vid, search, getApplicationListRefetch]);

  useEffect(() => {
    if (search) {
      setApplicationList(getApplicationlist?.all_apps);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setApplicationList((prevState) =>
          [
            ...new Set(
              [...getApplicationlist?.all_apps, ...prevState]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setRefetchStatus(false);
      } else if (editRefetchStatus) {
        setApplicationList((prevState) =>
          [
            ...new Set([...getApplicationlist?.all_apps]?.map(JSON.stringify)),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setEditRefetchStatus(false);
      } else {
        if (getApplicationlist?.all_apps) {
          setApplicationList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getApplicationlist?.all_apps]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getApplicationlist?.all_apps?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getApplicationlist?.all_apps?.length === 10) setState(true);
    else setState(false);
  }, [getApplicationlist?.all_apps]);

  const handleMarkComplete = () => {
    setDisabled(true);
    markComplete({
      vid: careerId.vid,
    })
      .then((res) => {
        setDisabled(false);

        getVacancyDetailRefetch();
        setStatus("");
      })
      .catch((err) => {
        setDisabled(false);
      });
  };

  console.info(applicationList);

  return (
    <div className={style.vacancyDetails}>
      <div className={`${style.peventlefttop} ${style.peventlefttopflexleft}`}>
        <img
          src="/images/career/insCareer/arrow-left-white.svg"
          alt="back"
          onClick={() => setStatus("")}
        />
        {t("career_vacancies")}
      </div>
      <div className={style.vacancyDetailsmid}>
        <div className={style.vacancyDetailsmidLeft}>
          <img src="/images/career/insCareer/career_job.svg" />
          <div className={style.vacancyDetailsmidLeftRight}>
            <h6 className={style.insCareerCardsubject}>
              {getVacancyDetail?.vacancy?.vacancy_position}
            </h6>
            {getVacancyDetail?.vacancy?.department && (
              <p className={style.insCareerCarddept}>
                {getVacancyDetail?.vacancy?.department?.dName}
              </p>
            )}
            <p className={style.insCareerCarddesig}>
              {getVacancyDetail?.vacancy?.vacancy_job_type}
            </p>
            <p className={style.insCareerCarddesig}>
              Applications: {getVacancyDetail?.vacancy?.application_count}
            </p>
          </div>
        </div>
        <div className={style.vacancyDetailsmiddesc}>
          <h6 className={style.insCareerCardsubject}>{t("jd_")}:</h6>
          <p className={style.insCareerCarddept}>
            {getVacancyDetail?.vacancy?.vacancy_about?.length > 165
              ? `${getVacancyDetail?.vacancy?.vacancy_about?.substring(
                  0,
                  165
                )}...`
              : getVacancyDetail?.vacancy?.vacancy_about}
          </p>
        </div>
        <div className={style.vacancyDetailsmidright}>
          <img src="/images/career/insCareer/edit_jd.svg" />
          {getVacancyDetail?.vacancy?.vacancy_status === "Ongoing" && (
            <p onClick={() => setIsOpen(true)}>{t("mark_as_complete")}</p>
          )}
        </div>
      </div>
      <div className={style.searchContainerr}>
        <div className={style.searchContainer}>
          <img alt="" src="/images/search-dept-icon.svg" />
          <input
            type="text"
            //   onChange={(e) => onSearch(e.target.value)}
            placeholder={t("search-label")}
            required
          />
        </div>
      </div>

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
          <p className={style.index}>{t("cv_resume")}</p>
        </div>
      </div>
      <div className={style.container}>
        {applicationList?.map((application, index) =>
          applicationList?.length === index + 1 ? (
            <div ref={ref} key={index} className={style.itemIcon}>
              <ApplicationItem
                application={application}
                setStatus={setStatus}
                vid={careerId?.vid}
                lcid={careerId?.lcid}
              />
            </div>
          ) : (
            <div key={index} className={style.itemIcon}>
              <ApplicationItem
                application={application}
                setStatus={setStatus}
                vid={careerId?.vid}
                lcid={careerId?.lcid}
              />
            </div>
          )
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
      {disabled && <QLoader />}
      {isOpen && (
        <ConfirmMarkComplete
          open={isOpen}
          setStatus={setStatus}
          hideModal={(w) => setIsOpen(w)}
          tid={careerId?.vid}
          getVacancyDetailRefetch={getVacancyDetailRefetch}
        />
      )}
    </div>
  );
}

export default VacancyDetails;
