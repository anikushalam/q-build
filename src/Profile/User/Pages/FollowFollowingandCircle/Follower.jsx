import React, { useState, useEffect } from "react";

import style from "./Follower.module.css";
import { useInView } from "react-intersection-observer";
import { useUserFollowList } from "../../../../Post/Institute/Components/search-api";
import { useSelector } from "react-redux";
import { imageShowUrl } from "../../../../services/BaseUrl";

const Follower = () => {
  const ids = useSelector((state) => state.idChange);

  // for the infinit scroll
  const [ref, inView] = useInView();
  //for the fetch more or not after seeing all post
  const [state, setState] = useState(true);
  //for setting the next page to fetch data
  const [page, setPage] = useState(1);
  const [follower, setFollower] = useState([]);

  const { userFollowList, userFollowListRefetch } = useUserFollowList({
    list: { page: page, id: ids?.id, limit: 10 },
  });

  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    userFollowListRefetch();
  }, [page, userFollowListRefetch]);

  useEffect(() => {
    if (userFollowList?.followers) {
      const uniqueList = [...follower, ...userFollowList?.followers];
      const uniqueRefind = [...new Set(uniqueList.map(JSON.stringify))].map(
        JSON.parse
      );
      setFollower(uniqueRefind);
    }

    //for next api is call or not dashboard
    if (userFollowList?.followers.length === 10) setState(true);
    else setState(false);
  }, [userFollowList?.followers]);

  // console.info("this is follow list", userFollowList);
  return (
    <div className={`${style.container}`}>
      {follower?.map((follow, index) =>
        follower?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <div className={style.card}>
              <img
                className={style.cardImage}
                src={
                  follow?.photoId !== "1"
                    ? `${imageShowUrl}/${follow?.profilePhoto}`
                    : "/images/avatar-icon.png"
                }
                alt="avatar"
              />
              <p className={style.username}>{follow?.username}</p>
              <p className={style.name}>{follow?.userLegalName}</p>
            </div>
          </div>
        ) : (
          <>
            <div className={style.card} key={index}>
              <img
                className={style.cardImage}
                src={
                  follow?.photoId !== "1"
                    ? `${imageShowUrl}/${follow?.profilePhoto}`
                    : "/images/avatar-icon.png"
                }
                alt=""
              />
              <p className={style.username}>{follow?.username}</p>
              <p className={style.name}>{follow?.userLegalName}</p>
              {/* <div className={style.unfollow}>
                <p className={style.unfollowText}>Block</p>
              </div> */}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Follower;
