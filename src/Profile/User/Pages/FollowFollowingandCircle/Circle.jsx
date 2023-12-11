import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useUserCircleList } from "../../../../Post/Institute/Components/search-api";
import { imageShowUrl } from "../../../../services/BaseUrl";
import style from "./Circle.module.css";

function Circle() {
  const ids = useSelector((state) => state.idChange);

  // for the infinit scroll
  const [ref, inView] = useInView();
  //for the fetch more or not after seeing all post
  const [state, setState] = useState(true);
  //for setting the next page to fetch data
  const [page, setPage] = useState(1);
  const [circles, setCircles] = useState([]);

  const { userCircleList, userCircleListRefetch } = useUserCircleList({
    page: page,
    id: ids?.id,
    limit: 10,
  });

  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    userCircleListRefetch();
  }, [page, userCircleListRefetch]);

  useEffect(() => {
    if (userCircleList?.circle) {
      const uniqueList = [...circles, ...userCircleList?.circle];
      const uniqueRefind = [...new Set(uniqueList.map(JSON.stringify))].map(
        JSON.parse
      );
      setCircles(uniqueRefind);
    }

    //for next api is call or not dashboard
    if (userCircleList?.circle.length === 10) setState(true);
    else setState(false);
  }, [userCircleList?.circle]);

  // console.info("this is follow/ list", userCircleList);
  return (
    <div className={`${style.container}`}>
      {circles?.map((circl, index) =>
        circles?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <div className={style.card}>
              <img
                className={style.cardImage}
                src={
                  circl?.photoId !== "1"
                    ? `${imageShowUrl}/${circl?.profilePhoto}`
                    : "/images/avatar-icon.png"
                }
                alt="avatar"
              />
              <p className={style.username}>{circl?.username}</p>
              <p className={style.name}>{circl?.userLegalName}</p>
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
                  circl?.photoId !== "1"
                    ? `${imageShowUrl}/${circl?.profilePhoto}`
                    : "/images/avatar-icon.png"
                }
                alt=""
              />
              <p className={style.username}>{circl?.username}</p>
              <p className={style.name}>{circl?.userLegalName}</p>
              {/* <div className={style.unfollow}>
                <p className={style.unfollowText}>Block</p>
              </div> */}
            </div>
          </>
        )
      )}
    </div>
  );
}

export default Circle;
