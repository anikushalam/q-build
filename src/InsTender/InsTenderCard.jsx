import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useTenderDelete } from "../hooks/member_tab/career-api";
import { tenderChangeAction } from "../redux/store/tender-slice";
import style from "./InsCareerMiddleContent.module.css";
import CareerMenu from "../InsCareer/CareerMenu";
import QLoader from "../Loader/QLoader";

function InsTenderCard({
  setStatus,
  ltid,
  tender,
  onRefetchWhenVacancyCreate,
}) {
  const { t } = useTranslation();
  const [tenderDelete] = useTenderDelete();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleDelete = (id) => {
    setDisabled(true);

    tenderDelete({
      tid: id,
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
            tenderChangeAction.tenderQuery({
              tid: tender?._id,
              ltid: ltid,
            })
          );
          setStatus("tenderDetail");
        }}
      >
        <img src="/images/tender/tender-icon.svg" />
        <div className={style.insCareerCardtext}>
          <h6 className={style.insCareerCardsubject}>
            {tender?.tender_requirement}
          </h6>
          <p className={style.insCareerCarddept}>{tender?.department?.dName}</p>
          <p className={style.insCareerCarddesig}>
            {" "}
            {t("budget_")}: Rs. {tender?.tender_budget}
          </p>
          <p className={style.insCareerCarddesig}>
            {" "}
            {t("bids")}: {tender?.bid_count}
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
        handleDelete={() => handleDelete(tender?._id)}
      />
      {disabled && <QLoader />}
    </div>
  );
}

export default InsTenderCard;
