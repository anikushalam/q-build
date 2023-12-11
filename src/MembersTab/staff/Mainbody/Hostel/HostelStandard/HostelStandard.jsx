import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../Hostel.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import CreateHostelStandard from "./CreateHostelStandard";
import HostelStandardCard from "./HostelStandardCard";
import { useGetHostelAllStandard } from "../../../../../hooks/member_tab/hostel-api";
import { useLocation } from "react-router-dom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";

const HostelStandard = ({ hid, carryParentState, pageOpenAs }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [tabList, setTabList] = useState([
    {
      name: t("batch"),
      id: 0,
      url: "member/hostel?a=batch",
    },
    {
      name: t("hostel_tab_standard"),
      id: 1,
      url: "member/hostel?a=standard",
    },
  ]);

  const [add, setAdd] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { getHostelAllStandard, getHostelAllStandardRefetch } =
    useGetHostelAllStandard({
      hid: hid,
      skip: !hid,
    });
  useEffect(() => {
    if (pageOpenAs) {
      setTabList([
        {
          name: t("batch"),
          id: 0,
          url: "hostel?a=batch",
        },
        {
          name: t("hostel_tab_standard"),
          id: 1,
          url: "hostel?a=standard",
        },
      ]);
    }
  }, [pageOpenAs]);
  useEffect(() => {
    if (hid) {
      setShowingDataLoading(true);
      getHostelAllStandardRefetch();
    }
  }, [hid, getHostelAllStandardRefetch]);

  useEffect(() => {
    if (getHostelAllStandard?.all_masters) {
      setShowingDataLoading(false);
    } else if (getHostelAllStandard?.all_masters?.length === 0)
      setShowingDataLoading(false);
    else {
    }
  }, [getHostelAllStandard?.all_masters]);

  const onRefetchWhenCreate = () => {
    setShowingDataLoading(true);
    getHostelAllStandardRefetch();
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
        <h6>{t("hostel_standard")}</h6>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />

      <div className={style.add_container}>
        <p className={style.add_new_category} onClick={onClose}>
          {t("create_new_standard")}
        </p>
      </div>

      {getHostelAllStandard?.all_masters?.map((standard) => (
        <HostelStandardCard standard={standard} key={standard?._id} />
      ))}
      {showingDataLoading && <QvipleLoading status="white" />}
      {add && (
        <CreateHostelStandard
          onClose={onClose}
          hostelId={hid}
          onRefetch={onRefetchWhenCreate}
        />
      )}
    </>
  );
};

export default HostelStandard;
