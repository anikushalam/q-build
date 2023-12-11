import React, { useState, useEffect } from "react";
import style from "./Follower.module.css";
import { useInView } from "react-intersection-observer";
import { imageShowUrl } from "../../../services/BaseUrl";
import { useInstituteFollowersArray } from "../../../hooks/dashboard/dashboard-api";
import { useSelector } from "react-redux";

const Follower = () => {
  const id = useSelector((state) => state.idChange.id);
  const [allFollowers, setAllFollowers] = useState([]);
  const [ref, inView] = useInView();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);

  const { instituteFollowersArray, instituteFollowersArrayRefetch } =
    useInstituteFollowersArray({
      data: {
        id: id,
        page: page,
        limit: 10,
      },
      skip: !id,
    });

  useEffect(() => {
    if (id) instituteFollowersArrayRefetch();
  }, [id, page, instituteFollowersArrayRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (
      instituteFollowersArray?.iFollowers?.length ||
      instituteFollowersArray?.uFollowers?.length
    ) {
      const dublicates = [
        ...allFollowers,
        ...instituteFollowersArray?.iFollowers,
        ...instituteFollowersArray?.uFollowers,
      ];
      const uniqueRefind = [...new Set(dublicates.map(JSON.stringify))].map(
        JSON.parse
      );
      setAllFollowers(uniqueRefind);
    }
    //for next api is call or not dashboard
    // if (subjectMcqQuestion?.questions.length === 10) setState(true);
    // else setState(false);
  }, [
    instituteFollowersArray?.iFollowers,
    instituteFollowersArray?.uFollowers,
  ]);

  return (
    <div className={`${style.container}`}>
      {allFollowers?.map((ft, index) =>
        allFollowers?.length === index + 1 ? (
          <div className={style.card} key={index} ref={ref}>
            <img
              className={style.cardImage}
              src={
                ft?.photoId !== "1"
                  ? `${imageShowUrl}/${ft?.insProfilePhoto || ft?.profilePhoto}`
                  : "/images/avatar-icon.png"
              }
              alt=""
            />
            <p className={style.username}>
              {ft && ft.name ? ft.name : ft.username ? ft.username : ""}
            </p>
            <p className={style.name}>
              {ft && ft.insName
                ? ft.insName
                : ft.userLegalName
                ? ft.userLegalName
                : ""}
            </p>
            {/* <div
              className={style.unfollow}
              onClick={() => (ft.name ? onBlockInstitute(ft?._id) : () => {})}
            >
              <p className={style.unfollowText}>Block</p>
            </div>
            <div
              className={style.unfollow}
              onClick={() => (ft.name ? onUnblockInstitute(ft?._id) : () => {})}
            >
              <p className={style.unfollowText}>Unblock</p>
            </div> */}
          </div>
        ) : (
          <div className={style.card} key={index}>
            <img
              className={style.cardImage}
              src={
                ft?.photoId !== "1"
                  ? `${imageShowUrl}/${ft?.insProfilePhoto || ft?.profilePhoto}`
                  : "/images/avatar-icon.png"
              }
              alt=""
            />
            <p className={style.username}>
              {ft && ft.name ? ft.name : ft.username ? ft.username : ""}
            </p>
            <p className={style.name}>
              {ft && ft.insName
                ? ft.insName
                : ft.userLegalName
                ? ft.userLegalName
                : ""}
            </p>
            {/* <div
              className={style.unfollow}
              onClick={() => (ft.name ? onBlockInstitute(ft?._id) : () => {})}
            >
              <p className={style.unfollowText}>Block</p>
            </div>
            <div
              className={style.unfollow}
              onClick={() => (ft.name ? onUnblockInstitute(ft?._id) : () => {})}
            >
              <p className={style.unfollowText}>Unblock</p>
            </div> */}
          </div>
        )
      )}
    </div>
  );
};

export default Follower;
