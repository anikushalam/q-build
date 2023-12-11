import React from "react";
import { useInView } from "react-intersection-observer";
import { useAllActivityList } from "../../../../hooks/member_tab/activity-api";
import { useSelector } from "react-redux";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../Loader/EmptyInfo";
import style from "./Activity.module.css";
import StudentMessageActivity from "./StudentMessageActivity";

const StudentMessage = () => {
  const [allActivity, setAllActivity] = React.useState([]);
  const [ref, inView] = useInView();
  const [state, setState] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const ids = useSelector((state) => state.idChange);
  const [showingDataLoading, setShowingDataLoading] = React.useState(true);

  const { allActivityList, allActivityListRefetch } = useAllActivityList({
    data: {
      id: ids?.id,
      page: page,
      limit: 10,
      category: "Reminder Alert",
    },
    skip: !ids?.id,
  });

  React.useEffect(() => {
    if (ids?.id) {
      setShowingDataLoading(true);
      allActivityListRefetch();
    }
  }, [ids?.id, page, allActivityListRefetch]);
  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (allActivityList?.activity) {
      const uniqueDublicate = [...allActivity, ...allActivityList?.activity];
      const uniqueRefind = [
        ...new Set(uniqueDublicate.map(JSON.stringify)),
      ].map(JSON.parse);
      setAllActivity(uniqueRefind);
      setShowingDataLoading(false);
    } else if (allActivityList?.activity?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    //for next api is call or not dashboard
    if (allActivityList?.activity.length === 10) setState(true);
    else setState(false);
  }, [allActivityList?.activity]);
  return (
    <div className={style.activity_caontainer}>
      {allActivity?.map((activity, index) =>
        allActivity?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <StudentMessageActivity activity={activity} />
          </div>
        ) : (
          <StudentMessageActivity activity={activity} key={index} />
        )
      )}

      {showingDataLoading && <QvipleLoading />}
      {!showingDataLoading && !allActivityList?.activity?.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "5rem",
            height: "inherit",
          }}
          title={"No any message found"}
        />
      )}
    </div>
  );
};

export default StudentMessage;
