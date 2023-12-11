import React from "react";
import style from "./Members.module.css";
import { useTranslation } from "react-i18next";

function Card(params) {
  const { t } = useTranslation();
  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        <img src="/images/ins-image.jpg" alt="" />
        <div>
          <p>
            <span className={style.span1}>Cricket Best 11</span>
          </p>
          <p>
            <span className={style.span2}>Rahual R Pagar </span>{" "}
            <span className={style.span3}>( {t("captain")} )</span>
          </p>
          <p> {t("total_team_member")} : 08</p>
        </div>
      </div>
    </div>
  );
}

function Members() {
  return (
    <div className={style.events}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Members;
