import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../Hostel/Hostel.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useLocation } from "react-router-dom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import CreateTransportStandard from "./CreateTransportStandard";
import TransportStandardCard from "./TransportStandardCard";
import { useGetTransportAllStandard } from "../../../../../hooks/member_tab/transport-api";

const TransportStandard = ({
  transportId,
  carryParentState,
  pageOpenAs,
  isRootAccess,
}) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [tabList, setTabList] = useState([
    {
      name: t("batch"),
      id: 0,
      url: "member/transport?a=batch",
    },
    {
      name: t("hostel_tab_standard"),
      id: 1,
      url: "member/transport?a=standard",
    },
  ]);
  const [add, setAdd] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { getTransportAllStandard, getTransportAllStandardRefetch } =
    useGetTransportAllStandard({
      tid: transportId,
      skip: !transportId,
    });
  useEffect(() => {
    if (pageOpenAs) {
      setTabList([
        {
          name: t("batch"),
          id: 0,
          url: "transport?a=batch",
        },
        {
          name: t("hostel_tab_standard"),
          id: 1,
          url: "transport?a=standard",
        },
      ]);
    }
  }, [pageOpenAs]);
  useEffect(() => {
    if (transportId) {
      setShowingDataLoading(true);
      getTransportAllStandardRefetch();
    }
  }, [transportId, getTransportAllStandardRefetch]);

  useEffect(() => {
    if (getTransportAllStandard?.all_masters) {
      setShowingDataLoading(false);
    } else if (getTransportAllStandard?.all_masters?.length === 0)
      setShowingDataLoading(false);
    else {
    }
  }, [getTransportAllStandard?.all_masters]);

  const onRefetchWhenCreate = () => {
    setShowingDataLoading(true);
    getTransportAllStandardRefetch();
  };

  const onClose = () => {
    setAdd((pre) => !pre);
  };
  return (
    <>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={getQuery.search?.substring(3) === "batch" ? 0 : 1}
        showAs={true}
        customStyleTab={{
          width: "100%",
          marginTop: "-1rem",
        }}
        customStyleLink={{
          width: "50%",
        }}
        carryParentState={carryParentState}
      />
      <BorderBottom
        customStyle={{
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />

      <div className={style.with_search}>
        <h6>{t("transport_standard")}</h6>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />
      {isRootAccess === "VALID" ? (
        <div className={style.add_container}>
          <p className={style.add_new_category} onClick={onClose}>
            {t("create_new_standard")}
          </p>
        </div>
      ) : null}

      {getTransportAllStandard?.all_masters?.map((standard) => (
        <TransportStandardCard standard={standard} key={standard?._id} />
      ))}
      {showingDataLoading && <QvipleLoading status="white" />}
      {add && (
        <CreateTransportStandard
          onClose={onClose}
          transportId={transportId}
          onRefetch={onRefetchWhenCreate}
        />
      )}
    </>
  );
};

export default TransportStandard;
