import React, { useEffect, useState } from "react";
import style from "./GrQuery.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useInstituteAllGRNotification } from "../../../../../hooks/member_tab/activity-api";
import { useSelector } from "react-redux";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import StudentQueryCard from "./StudentQueryCard";
const GrQuery = () => {
  const { t } = useTranslation();
  const id = useSelector((state) => state.idChange.id);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [grList, setGrList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const { instituteAllGRNotification, instituteAllGRNotificationRefetch } =
    useInstituteAllGRNotification({
      data: {
        id: id,
        page: page,
        limit: 10,
      },
      skip: !id,
    });
  useEffect(() => {
    if (id) {
      setShowingDataLoading(true);
      instituteAllGRNotificationRefetch();
    }
  }, [id, page, instituteAllGRNotificationRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setGrList(instituteAllGRNotification?.all_query);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (instituteAllGRNotification?.all_query) {
        setGrList((prevState) =>
          [
            ...new Set(
              [...prevState, ...instituteAllGRNotification?.all_query]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (instituteAllGRNotification?.all_query?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (instituteAllGRNotification?.all_query?.length === 10) setState(true);
    else setState(false);
  }, [instituteAllGRNotification?.all_query]);

  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    instituteAllGRNotificationRefetch();
  };

  return (
    <div className={style.grquery_container}>
      <div className={style.with_search}>
        <h6>{t("gr_internal_query")}</h6>
      </div>

      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />
      {grList?.map((query, index) =>
        grList?.length === index + 1 ? (
          <div ref={ref} key={query?._id}>
            <StudentQueryCard query={query} onRefetch={onRefetchWhenCreate} />
          </div>
        ) : (
          <StudentQueryCard
            query={query}
            key={query?._id}
            onRefetch={onRefetchWhenCreate}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
    </div>
  );
};

export default GrQuery;
