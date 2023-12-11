import React, { useEffect } from "react";
import style from "./FineHistory.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetFineMemberHistoryList } from "../../../../../hooks/member_tab/library-api";
import { useState } from "react";
import MemberItem from "./MemberItem";
import { useNavigate } from "react-router-dom";
function FineHistory({ lid }) {
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const [timeeout, setTimeeout] = useState(false);
  const [memberList, setMemberList] = useState([]);
  const { getFineMemberHistorylist, getFineMemberHistoryListRefetch } =
    useGetFineMemberHistoryList({
      data: {
        lid: lid,
        page: page,
        limit: 10,
      },
      skip: !lid,
    });

  useEffect(() => {
    if (getFineMemberHistorylist) {
      if (getFineMemberHistorylist?.charge_history?.length) {
        setMemberList([
          ...memberList,
          ...getFineMemberHistorylist?.charge_history,
        ]);
      } else if (page > 1) {
        setNoMoreResults(true);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getFineMemberHistorylist]);

  useEffect(() => {
    if (inView) {
      if (!noMoreResults) {
        setPage(page + 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeout(!timeeout);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBack = () => {
    navigate(-1);
  };
  const { t } = useTranslation();
  return (
    <div className={style.addbookcontainer}>
      <div className={style.addbooktop}>
        <img src="/images/back.svg" onClick={onBack} />
        <h6>{t("fines_history")}</h6>
        <div />
      </div>

      {memberList?.length > 0 ? (
        memberList?.map((member, index) => (
          <div key={index} ref={ref}>
            <MemberItem member={member} />
          </div>
        ))
      ) : memberList?.length === 0 && timeeout === true ? (
        <div className={style.noData}>
          <img src="/images/nodata.jpg" alt="" />
        </div>
      ) : (
        <div className={style.loader}>
          <img src="/images/loader-transperant.svg" alt="" />
        </div>
      )}
    </div>
  );
}

export default FineHistory;
