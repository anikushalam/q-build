import React, { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import style from "./DueList.module.css";

import moment from "moment";
import { useFetchDueBalanceQuery } from "../../../../../services/financeAPI";

function Item({ repay, ref, key }) {
  return (
    <div className={style.item} ref={ref} key={key}>
      <div className={style.itemleft}>
        <img src="/images/career/newLogo.svg" alt="" />
        <div className={style.text}>
          <h6>{moment(repay.createdAt).format("LL")}</h6>
          <p>{moment(repay.createdAt).format("LT")}</p>
        </div>
      </div>
      <div className={style.itemright}>Rs. {repay.repayAmount}</div>
    </div>
  );
}

function DueList() {
  const insId = localStorage.getItem("user");
  const [ref, inView] = useInView();
  const [dueDataAmount, setDueDataAmount] = useState([]);
  const [page, setPage] = useState(1);
  var isPage = false;
  const [userState, setUserState] = useState(true);
  const { data: dueData, refetch: dueFetch } = useFetchDueBalanceQuery({
    info: {
      page: page,
      limit: 10,
      fid: insId,
    },
    skip: isPage,
  });

  useEffect(() => {
    if (inView && userState && !isPage) setPage((page) => page + 1);
    else {
    }
  }, [inView, userState, isPage]);

  useEffect(() => {
    if (!isPage) dueFetch();
  }, [isPage, dueFetch]);

  useEffect(() => {
    if (dueData?.repay) setDueDataAmount([...dueDataAmount, ...dueData?.repay]);
    if (dueData?.repay?.length === 10) setUserState(true);

    if (dueData?.repay.length === 10) setUserState(true);
    else setUserState(false);
  }, [dueData?.repay]);

  return (
    <div className={style.dueList}>
      {dueDataAmount?.length > 0 ? (
        dueDataAmount?.map((ele, index) => (
          <Item ref={ref} repay={ele} key={index} />
        ))
      ) : (
        <p className={style.due}>No Due From Qviple</p>
      )}
    </div>
  );
}

export default DueList;
