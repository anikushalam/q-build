import React from "react";
import style from "./SportsHeadSports.module.css";

import { useAllEventClassList } from "../../../../../../../hooks/sports/sports-api";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Item({ setClickEvent, sport }) {
  // console.info(sport?.sportClassName);
  return (
    <div
      className={style.item}
      // onClick={() => setClickEvent(true)}
    >
      <img
        alt="not found"
        src={
          sport?.photoId !== "1"
            ? `${imageShowUrl}/${sport?.photo}`
            : "/images/football.svg"
        }
        className={style.stafImg}
      />
      <p>{sport?.sportClassName}</p>
    </div>
  );
}

function SportsHeadSports({ setClickEvent, sid, sportClass }) {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [classes, setClasses] = useState([]);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const [timeeout, setTimeeout] = useState(false);
  const [ref, inView] = useInView();

  const { AllEventClassList } = useAllEventClassList({
    data: {
      sid: sid,
      page: page,
    },
    skip: !sid,
  });

  useEffect(() => {
    if (AllEventClassList) {
      if (AllEventClassList?.classes?.length) {
        setClasses([...classes, ...AllEventClassList?.classes]);
      } else if (page > 1) {
        setNoMoreResults(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AllEventClassList]);

  useEffect(() => {
    if (inView) {
      if (!noMoreResults) {
        setPage(page + 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeout(!timeeout);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.sports}>
      {/* {sportClass?.map((sport, index) => (
        <Item key={index} sport={sport} setClickEvent={setClickEvent} />
      ))} */}

      {classes?.length > 0 ? (
        classes?.map((sport, index) => (
          <div key={index} ref={ref}>
            <Item sport={sport} setClickEvent={setClickEvent} />
          </div>
        ))
      ) : classes?.length === 0 && timeeout === true ? (
        <div className={style.noData}>{t("no_sport")}</div>
      ) : (
        <div className={style.loader}>
          <img src="/images/loader-transperant.svg" alt="" />
        </div>
      )}
    </div>
  );
}

export default SportsHeadSports;
