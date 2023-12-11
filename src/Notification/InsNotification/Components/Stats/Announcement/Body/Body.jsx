import React, { useState, useEffect } from "react";
import style from "./Body.module.css";
import Item from "./Items/Item";
import { useInView } from "react-intersection-observer";
import { useGetAnnouncementArrayQuery } from "../../../../../../services/qvipleAPI";
import { useSelector } from "react-redux";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../../Loader/EmptyInfo";

function Body({ Switch, setAnnId }) {
  const [announcementList, setAnnouncementList] = useState([]);
  const [ref, inView] = useInView();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const ids = useSelector((state) => state.idChange);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { data: allAnnouncementList, refetch: allAnnouncementListRefetch } =
    useGetAnnouncementArrayQuery(
      {
        id: ids?.id,
        page: page,
        limit: 10,
      },
      { skip: !ids?.id }
    );

  useEffect(() => {
    if (ids?.id) {
      setShowingDataLoading(true);
      allAnnouncementListRefetch();
    }
  }, [ids?.id, page, allAnnouncementListRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (allAnnouncementList?.announcement) {
      const uniqueDublicate = [
        ...announcementList,
        ...allAnnouncementList?.announcement,
      ];
      const uniqueRefind = [
        ...new Set(uniqueDublicate.map(JSON.stringify)),
      ].map(JSON.parse);
      setAnnouncementList(uniqueRefind);
      setShowingDataLoading(false);
    } else if (allAnnouncementList?.announcement?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    //for next api is call or not dashboard
    if (allAnnouncementList?.announcement.length === 10) setState(true);
    else setState(false);
  }, [allAnnouncementList?.announcement]);

  return (
    <div className={style.body}>
      {announcementList.map((at, index) =>
        announcementList?.length === index + 1 ? (
          <div key={index} ref={ref}>
            <Item
              Switch={Switch}
              setAnnId={setAnnId}
              data={at ? at : ""}
              time={at?.createdAt}
              date={at?.createdAt}
              text={at?.insAnnDescription}
            />
          </div>
        ) : (
          <Item
            Switch={Switch}
            setAnnId={setAnnId}
            data={at ? at : ""}
            time={at?.createdAt}
            date={at?.createdAt}
            text={at?.insAnnDescription}
            key={index}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {!showingDataLoading && !allAnnouncementList?.announcement?.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "5rem",
            height: "inherit",
          }}
          title={"No announcement created yet."}
        />
      )}
    </div>
  );
}

export default Body;
