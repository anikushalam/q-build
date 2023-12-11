import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";
import { useAllOngoingApp } from "../../../../../../hooks/member_tab/admission-api";
import { useSelector } from "react-redux";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import OngoingApplicationCard from "./OngoingApplicationCard";
import style from "../AdmissionApplicationRequest.module.css";
import ApplicationMenu from "./ApplicationMenu";
import CreateAdmissionApplication from "../../AdmisionApplication/CreateApplication/CreateAdmissionApplication";

const AdmissionOngoingApplication = ({
  carryParentState,
  accessRole,
  accessApplication,
  accessTpye,
  callApi,
  admissionId,
  pageOpenAs,
}) => {
  const { t } = useTranslation();
  const adsId = useSelector((state) => state.admissionChange);
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [ongoing, setOngoing] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [openApplicationMenu, setOpenApplicationMenu] = useState("");
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [createApplication, setCreateApplication] = useState(false);

  const { allOngoingApp, allOngoingAppRefetch } = useAllOngoingApp({
    data: {
      aid: admissionId ? admissionId : adsId?.aid,
      page: page,
      limit: 10,
    },
    skip: admissionId ? !admissionId : !adsId?.aid,
  });

  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (adsId?.aid || admissionId) {
      setShowingDataLoading(true);
      allOngoingAppRefetch();
    }
  }, [adsId?.aid, admissionId, page, allOngoingAppRefetch]);

  useEffect(() => {
    if (refetchStatus) {
      setOngoing(allOngoingApp?.ongoing);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (allOngoingApp?.ongoing) {
        setOngoing((prevState) =>
          [
            ...new Set(
              [...prevState, ...allOngoingApp?.ongoing]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (allOngoingApp?.ongoing?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (allOngoingApp?.ongoing?.length === 10) setState(true);
    else setState(false);
  }, [allOngoingApp?.ongoing]);
  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    allOngoingAppRefetch();
  };
  const onClose = () => {
    if (!accessRole) {
      setCreateApplication((pre) => !pre);
    }
  };

  return (
    <>
      <p
        className={style.add_new_category}
        onClick={onClose}
        style={{
          opacity: accessRole ? "0.5" : 1,
        }}
      >
        {t("create_new_application")}
      </p>
      <div className={style.remainingFees}>
        {ongoing?.map((ele, index) =>
          ongoing?.length === index + 1 ? (
            <div ref={ref} key={index}>
              <OngoingApplicationCard
                data={ele}
                carryParentState={carryParentState}
                accessRole={accessRole}
                accessTpye={accessTpye}
                callApi={callApi}
                accessApplication={accessApplication}
                setOpenApplicationMenu={setOpenApplicationMenu}
                pageOpenAs={pageOpenAs}
              />
            </div>
          ) : (
            <OngoingApplicationCard
              data={ele}
              key={index}
              carryParentState={carryParentState}
              accessRole={accessRole}
              accessTpye={accessTpye}
              callApi={callApi}
              accessApplication={accessApplication}
              setOpenApplicationMenu={setOpenApplicationMenu}
              pageOpenAs={pageOpenAs}
            />
          )
        )}
        {showingDataLoading && <QvipleLoading status="white" />}
      </div>
      {openApplicationMenu && (
        <ApplicationMenu
          openApplicationMenu={openApplicationMenu}
          onClose={() => setOpenApplicationMenu("")}
          onRefetch={onRefetchWhenCreate}
          insAdmissionId={admissionId}
        />
      )}
      {createApplication && (
        <CreateAdmissionApplication
          setCreateApplication={setCreateApplication}
          createApplication={createApplication}
          admissionId={adsId?.aid ?? admissionId}
          setRefetchOngoining={onRefetchWhenCreate}
        />
      )}
    </>
  );
};

export default AdmissionOngoingApplication;
