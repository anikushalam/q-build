import React, { useState, useEffect } from "react";
import style from "./Following.module.css";
import { useInView } from "react-intersection-observer";
import { imageShowUrl } from "../../../services/BaseUrl";
import {
  useInstituteFollowingAction,
  useInstituteFollowingArray,
} from "../../../hooks/dashboard/dashboard-api";
import { useSelector } from "react-redux";

const Following = () => {
  const id = useSelector((state) => state.idChange.id);
  const [allFollowing, setAllFollowing] = useState([]);
  const [ref, inView] = useInView();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);

  const [instituteFollowingAction] = useInstituteFollowingAction();
  const { instituteFollowingArray, instituteFollowingArrayRefetch } =
    useInstituteFollowingArray({
      data: {
        id: id,
        page: page,
        limit: 10,
      },
      skip: !id,
    });

  useEffect(() => {
    if (id) instituteFollowingArrayRefetch();
  }, [id, page, instituteFollowingArrayRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (instituteFollowingArray?.following?.length) {
      const dublicates = [
        ...allFollowing,
        ...instituteFollowingArray?.following,
      ];
      const uniqueRefind = [...new Set(dublicates.map(JSON.stringify))].map(
        JSON.parse
      );
      setAllFollowing(uniqueRefind);
    }
    //for next api is call or not dashboard
    // if (subjectMcqQuestion?.questions.length === 10) setState(true);
    // else setState(false);
  }, [instituteFollowingArray?.following]);

  const UnfollowHandler = (id) => {
    var data = {
      followId: id && id,
    };
    instituteFollowingAction(data).then((res) => {
      if (res.data.message) {
        instituteFollowingArrayRefetch();
      }
    });
  };

  return (
    <div className={`${style.container}`}>
      {allFollowing?.map((ft, index) =>
        allFollowing?.length === index + 1 ? (
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
            <p className={style.username}>{ft && ft.name}</p>
            <p className={style.name}>{ft && ft.insName}</p>
            <div className={style.unfollow}>
              <p
                className={style.unfollowText}
                onClick={() => UnfollowHandler(ft && ft._id)}
              >
                Unfollow
              </p>
            </div>
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
            <p className={style.username}>{ft && ft.name}</p>
            <p className={style.name}>{ft && ft.insName}</p>
            <div className={style.unfollow}>
              <p
                className={style.unfollowText}
                onClick={() => UnfollowHandler(ft && ft._id)}
              >
                Unfollow
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Following;
