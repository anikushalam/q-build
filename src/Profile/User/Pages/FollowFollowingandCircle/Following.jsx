import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useUserOwnFollowingList } from "../../../../Post/Institute/Components/search-api";
import { imageShowUrl } from "../../../../services/BaseUrl";
import style from "./Following.module.css";

const Following = () => {
  const ids = useSelector((state) => state.idChange);

  // for the infinit scroll
  const [ref, inView] = useInView();
  //for the fetch more or not after seeing all post
  const [state, setState] = useState(true);
  //for setting the next page to fetch data
  const [page, setPage] = useState(1);
  const [following, setFollowing] = useState([]);

  const { userFollowingList, userFollowingListRefetch } =
    useUserOwnFollowingList({
      page: page,
      id: ids?.id,
      limit: 10,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    userFollowingListRefetch();
  }, [page, userFollowingListRefetch]);
  useEffect(() => {
    if (userFollowingList?.mergeArray) {
      const uniqueList = [...following, ...userFollowingList?.mergeArray];
      const uniqueRefind = [...new Set(uniqueList.map(JSON.stringify))].map(
        JSON.parse
      );
      setFollowing(uniqueRefind);
    }

    //for next api is call or not dashboard
    if (userFollowingList?.mergeArray.length === 10) setState(true);
    else setState(false);
  }, [userFollowingList?.mergeArray]);

  // console.info("this is userFollowingList list", userFollowingList);
  return (
    <div className={`${style.container}`}>
      {following?.map((follo, index) =>
        following?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <div className={style.card}>
              <img
                className={style.cardImage}
                src={
                  follo?.username
                    ? follo?.photoId !== "1"
                      ? `${imageShowUrl}/${follo?.profilePhoto}`
                      : "/images/avatar-icon.png"
                    : follo?.photoId !== "1"
                    ? `${imageShowUrl}/${follo?.insProfilePhoto}`
                    : "/images/ins_default_profile.svg"
                }
                alt="avatar"
              />
              <p className={style.username}>
                {follo?.username ? follo?.username : follo?.name}
              </p>
              <p className={style.name}>
                {follo?.userLegalName ? follo?.userLegalName : follo?.insName}
              </p>
              {/* <div className={style.unfollow}>
                <p className={style.unfollowText}>Block</p>
              </div> */}
            </div>
          </div>
        ) : (
          <>
            <div className={style.card} key={index}>
              <img
                className={style.cardImage}
                src={
                  follo?.username
                    ? follo?.photoId !== "1"
                      ? `${imageShowUrl}/${follo?.profilePhoto}`
                      : "/images/avatar-icon.png"
                    : follo?.photoId !== "1"
                    ? `${imageShowUrl}/${follo?.insProfilePhoto}`
                    : "/images/ins_default_profile.svg"
                }
                alt="avatar"
              />
              <p className={style.username}>
                {follo?.username ? follo?.username : follo?.name}
              </p>
              <p className={style.name}>
                {follo?.userLegalName ? follo?.userLegalName : follo?.insName}
              </p>
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

export default Following;
