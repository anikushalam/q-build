import React, { useState } from "react";
import style from "./InsCareerMiddleContent.module.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useVacancyDelete } from "../hooks/member_tab/career-api";
import { careerChangeAction } from "../redux/store/career-slice";
import CareerMenu from "./CareerMenu";
import QLoader from "../Loader/QLoader";

function InsCareerCard({
  vacancy,
  setStatus,
  vid,
  lcid,
  onRefetchWhenVacancyCreate,
}) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [vacancyDelete] = useVacancyDelete();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (id) => {
    setDisabled(true);

    vacancyDelete({
      vid: id,
    })
      .then((res) => {
        setIsOpen(false);
        onRefetchWhenVacancyCreate();
        setDisabled(false);
      })
      .catch((err) => {
        setIsOpen(false);
        setDisabled(false);
      });
  };

  return (
    <div className={style.insCareerCardInner}>
      <div
        className={style.insCareerCard}
        onClick={() => {
          dispatch(
            careerChangeAction.careerQuery({
              vid: vid,
              lcid: lcid,
            })
          );
          setStatus("vacancyDetail");
        }}
      >
        <img src="/images/career/insCareer/career_job.svg" />
        <div className={style.insCareerCardtext}>
          <h6 className={style.insCareerCardsubject}>
            {vacancy?.vacancy_position}
          </h6>
          <p className={style.insCareerCarddept}>
            {vacancy?.department?.dName}
          </p>
          <p className={style.insCareerCarddesig}>
            {vacancy?.vacancy_job_type}
          </p>
          <p className={style.insCareerCarddesig}>
            {t("applications")}: {vacancy?.application_count}{" "}
          </p>
        </div>

        <img
          className={style.dots}
          src="/images/menu-dots-icon.svg"
          alt="menu"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <img
        className={style.menudots}
        src="/images/menu-dots-icon.svg"
        alt="menu"
        onClick={() => setIsOpen(!isOpen)}
      />

      <CareerMenu
        open={isOpen}
        onClose={() => setIsOpen(false)}
        handleDelete={() => handleDelete(vacancy?._id)}
      />
      {disabled && <QLoader />}
    </div>
  );
}

export default InsCareerCard;
