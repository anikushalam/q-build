import React, { useState, useEffect } from "react";
import style from "./Body.module.css";
import Item from "./Items/Item";

import { useInView } from "react-intersection-observer";
import { useGetInsFollowersArrayQuery } from "../../../../../../services/qvipleAPI";

function NewFollowerBody() {
  const [page, setPage] = useState(1);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const { data } = useGetInsFollowersArrayQuery(page, {
    skip: noMoreResults,
  });
  const [ref, inView] = useInView();
  const [followersData, setFollowersData] = useState([]);

  useEffect(() => {
    if (data) {
      if (data.iFollowers.length || data.uFollowers.length) {
        setFollowersData([
          ...followersData,
          ...data.iFollowers,
          ...data.uFollowers,
        ]);
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
      {followersData.length === 0 && (
        <div className={style.loader}>
          <img src="/images/loader/loader-bg-white.gif" alt="" />
        </div>
      )}
      {followersData &&
        followersData.map((d, index) => (
          // if (notifyList.length === index + 1) {
          //   return (
          //     <div key={index} ref={ref}>
          //       <Item
          //         userId={d.notifySender}
          //         status={d.notifyContent}
          //         time={d.notifyTime}
          //         followBack="false"
          //       />
          //     </div>
          //   );
          // } else {
          // return (
          <div key={index} ref={ref}>
            <Item data={d ? d : ""} followBack="false" />
          </div>
          // );
          // }
        ))}
    </div>
  );
}

export default NewFollowerBody;
