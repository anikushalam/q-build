import React, { useState, useEffect } from "react";
import style from "./Body.module.css";
import { useInView } from "react-intersection-observer";
import { useInstituteAllNotification } from "../../../../../../hooks/member_tab/activity-api";
import { useSelector } from "react-redux";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import NotificationConfi from "./NotificationConfi";

function Body() {
  const id = useSelector((state) => state.idChange.id);
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [notifyList, setNotifyList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { instituteAllNotification, instituteAllNotificationRefetch } =
    useInstituteAllNotification({
      data: {
        id: id,
        page: page,
        limit: 10,
      },
      skip: !id,
    });

  useEffect(() => {
    if (id) {
      setShowingDataLoading(true);
      instituteAllNotificationRefetch();
    }
  }, [page, id, instituteAllNotificationRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (instituteAllNotification?.notify) {
      const uniquePost = [...notifyList, ...instituteAllNotification?.notify];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setNotifyList(uniqueRefind);
      setShowingDataLoading(false);
    }
    //for next api is call or not dashboard
    if (instituteAllNotification?.notify.length === 10) setState(true);
    else setState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instituteAllNotification?.notify]);

  // console.info("this is notification", notifyList);
  return (
    <div className={style.body}>
      {notifyList?.length === 0 && showingDataLoading === false && (
        <div className={style.noData}>
          <img src="/images/nodata.jpg" alt="" />
        </div>
      )}
      {notifyList?.map((notification, index) =>
        notifyList?.length === index + 1 ? (
          <div key={index} ref={ref}>
            <NotificationConfi notification={notification} />
          </div>
        ) : (
          <NotificationConfi key={index} notification={notification} />
        )
      )}

      {showingDataLoading && <QvipleLoading />}
    </div>
  );
}

export default Body;
