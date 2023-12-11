import React, { useState, useEffect } from "react";
import style from "./Body.module.css";
import Item from "./Items/Item";
import { useInView } from "react-intersection-observer";
// import { useTranslation } from "react-i18next";
import { useGetUserAnnouncementArrayQuery } from "../../../../../../services/qvipleAPI";

function Body({ Switch, setAnnId }) {
  // const { t } = useTranslation();

  const [page, setPage] = useState(1);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const [timeeout, setTimeeout] = useState(false);
  const { data, refetch } = useGetUserAnnouncementArrayQuery(page, {
    skip: noMoreResults,
  });

  const [ref, inView] = useInView();
  const [announcementList, setAnnouncementList] = useState([]);
  const insId = localStorage.getItem("user");
  useEffect(() => {
    if (data) {
      if (data.announcements.length) {
        setAnnouncementList([...announcementList, ...data.announcements]);
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

  useEffect(() => {
    setTimeout(() => {
      setTimeeout(!timeeout);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.body}>
      {announcementList.length > 0 ? (
        announcementList.map((at, index) => (
          <div key={index} ref={ref}>
            <Item
              Switch={Switch}
              refetch={refetch}
              setAnnId={setAnnId}
              data={at ? at : ""}
              time={at?.createdAt}
              date={at?.createdAt}
              text={at?.insAnnDescription}
              id={insId && insId}
            />
          </div>
          // }
        ))
      ) : announcementList.length === 0 && timeeout === true ? (
        <div className={style.noData}>
          <img src="/images/nodata.jpg" alt="" />
        </div>
      ) : (
        <div className={style.loader}>
          <img src="/images/loader/loader.gif" alt="" />
        </div>
      )}
    </div>
  );
}

export default Body;
