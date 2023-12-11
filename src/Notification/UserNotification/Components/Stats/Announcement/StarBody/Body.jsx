import React, { useState, useEffect } from "react";
import style from "./Body.module.css";
import Item from "./Items/Item";
import { useInView } from "react-intersection-observer";
// import { useTranslation } from "react-i18next";
import { useGetStarAnnouncementArrayQuery } from "../../../../../../services/qvipleAPI";

function StarBody({ Switch, setAnnId }) {
  const [page, setPage] = useState(1);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const { data } = useGetStarAnnouncementArrayQuery(page, {
    skip: noMoreResults,
  });
  const [ref, inView] = useInView();
  const [announcementList, setAnnouncementList] = useState([]);
  const insId = localStorage.getItem("user");
  useEffect(() => {
    if (data) {
      if (data.announcement.length) {
        setAnnouncementList([...announcementList, ...data.announcement]);
      } else if (page > 1) {
        setNoMoreResults(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (inView) {
      if (!noMoreResults) {
        setPage(page + 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className={style.body}>
      {announcementList &&
        announcementList.map((at, index) => (
          // if(announcementList.length === index + 1){
          // <div key={index} ref={ref}>
          // <Item
          //   Switch={Switch}
          //   data={at ? at : ''}
          //   time={at?.createdAt}
          //   date={at?.createdAt}
          //   text={at?.insAnnDescription}
          //   id={insId && insId}
          // />
          // </div>
          // }
          // else{
          <div key={index} ref={ref}>
            <Item
              Switch={Switch}
              setAnnId={setAnnId}
              data={at ? at : ""}
              time={at?.createdAt}
              date={at?.createdAt}
              text={at?.insAnnDescription}
              id={insId && insId}
            />
          </div>
          // }
        ))}
    </div>
  );
}

export default StarBody;
