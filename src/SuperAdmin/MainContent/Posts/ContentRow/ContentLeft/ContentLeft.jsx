import React from "react";
import style from "./ContentLeft.module.css";
import LineChart from "./LineChart/LineChart";
import { useGetAdminLikeQuery } from '../../../../../services/superAdminAPI'

function ContentLeft() {
  const { data: statsLike } = useGetAdminLikeQuery()
  return (
    <div className={style.contentLeft}>
      <div className={style.top}>
        <div className={style.topLeft}>
          <h6>Total Posts</h6>
          <h5>{statsLike?.postCount}</h5>
        </div>
        <div className={style.topRight}>

          <img src="/images/unlike-icon.svg" />
          <h5>{statsLike?.likeCount}</h5>

        </div>
      </div>
      <div className={style.chart}>
        <LineChart />
      </div>
    </div>
  );
}

export default ContentLeft;
