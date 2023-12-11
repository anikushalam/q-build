import React from "react";
import style from "./Body.module.css";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useUserAllNotification } from "../../../../../../hooks/member_tab/activity-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import NotificationConfig from "../../../Notification/NotificationConfig";

function Body() {
  const [allNotification, setAllNotification] = React.useState([]);
  const [ref, inView] = useInView();
  const [state, setState] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [showingDataLoading, setShowingDataLoading] = React.useState(true);
  const ids = useSelector((state) => state.idChange);
  const { userAllNotification, userAllNotificationRefetch } =
    useUserAllNotification({
      data: {
        id: ids?.id,
        page: page,
        limit: 10,
      },
      skip: !ids?.id,
    });

  React.useEffect(() => {
    if (ids?.id) {
      setShowingDataLoading(true);
      userAllNotificationRefetch();
    }
  }, [ids?.id, page, userAllNotificationRefetch]);

  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (userAllNotification?.notify) {
      const uniqueDublicate = [
        ...allNotification,
        ...userAllNotification?.notify,
      ];
      const uniqueRefind = [
        ...new Set(uniqueDublicate.map(JSON.stringify)),
      ].map(JSON.parse);
      setAllNotification(uniqueRefind);
      setShowingDataLoading(false);
    } else if (userAllNotification?.notify?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    //for next api is call or not dashboard
    if (userAllNotification?.notify.length === 10) setState(true);
    else setState(false);
  }, [userAllNotification?.notify]);

  return (
    <>
      <div className={style.body}>
        {allNotification?.length
          ? allNotification?.map((notification, index) =>
              allNotification?.length === index + 1 ? (
                <div key={index} ref={ref}>
                  <NotificationConfig notification={notification} />
                </div>
              ) : (
                <NotificationConfig key={index} notification={notification} />
              )
            )
          : !showingDataLoading && (
              <div className={style.noData}>
                <img src="/images/nodata.jpg" alt="" />
              </div>
            )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </>
  );
}

export default Body;
