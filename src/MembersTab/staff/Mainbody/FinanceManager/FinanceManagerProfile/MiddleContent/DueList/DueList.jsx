import React, { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { useFetchDueBalanceQuery } from "../../../../../../../services/financeAPI";
import style from "./DueList.module.css";
import { useTranslation } from "react-i18next";

import moment from "moment";

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

function DueList({ setDueList }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const finance_author = useSelector((state) => state.financeChange);
  const [ref, inView] = useInView();
  const [dueDataAmount, setDueDataAmount] = useState([]);
  const [page, setPage] = useState(1);
  var isPage = false;
  const [userState, setUserState] = useState(true);
  const { data: dueData, refetch: dueFetch } = useFetchDueBalanceQuery({
    info: {
      page: page,
      limit: 10,
      fid: finance_author?.insId,
    },
    skip: finance_author?.insId ? isPage : !finance_author?.insId,
  });

  useEffect(() => {
    if (inView && userState && !isPage) setPage((page) => page + 1);
    else {
    }
  }, [inView, userState, isPage]);

  useEffect(() => {
    if (!isPage && finance_author?.insId) dueFetch();
  }, [isPage, finance_author?.insId, dueFetch]);

  useEffect(() => {
    if (dueData?.repay) setDueDataAmount([...dueDataAmount, ...dueData?.repay]);
    if (dueData?.repay?.length === 10) setUserState(true);

    if (dueData?.repay.length === 10) setUserState(true);
    else setUserState(false);
  }, [dueData?.repay, dispatch]);

  return (
    <div className={style.dueList}>
      <div className={style.dueListTop} onClick={() => setDueList(false)}>
        <h6>{t("back")}</h6>
      </div>
      <div className={style.itemsContainer}>
        {dueDataAmount?.length > 0 ? (
          dueDataAmount?.map((ele, index) => (
            <Item ref={ref} repay={ele} key={index} />
          ))
        ) : (
          <p className={style.due}>{t("no_due")}</p>
        )}
      </div>
    </div>
  );
}

export default DueList;
