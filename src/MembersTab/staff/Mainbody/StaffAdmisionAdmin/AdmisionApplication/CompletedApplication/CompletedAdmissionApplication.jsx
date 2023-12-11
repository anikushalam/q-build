import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import CompletedApplicationCard from "./CompletedApplicationCard";
import { useNavigate } from "react-router-dom";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";
import style from "../../AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useAllCompletedApp } from "../../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import CompletedApplicationMenu from "./CompletedApplicationMenu";
const CompletedAdmissionApplication = ({
  admissionId,
  carryParentState,
  accessRole,
  accessApplication,
  accessTpye,
  callApi,
  pageOpenAs,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const adsId = useSelector((state) => state.admissionChange);
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [completed, setCompleted] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { scrollToTop } = useScrollbar();
  const [openApplicationMenu, setOpenApplicationMenu] = useState("");
  const [refetchStatus, setRefetchStatus] = useState(false);

  const { allCompletedApp, allCompletedAppRefetch } = useAllCompletedApp({
    data: {
      aid: admissionId ? admissionId : adsId?.aid,
      page: page,
      limit: 10,
    },
    skip: admissionId ? !admissionId : !adsId?.aid,
  });
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (adsId?.aid || admissionId) {
      setShowingDataLoading(true);
      allCompletedAppRefetch();
    }
  }, [adsId?.aid, admissionId, page, allCompletedAppRefetch]);

  useEffect(() => {
    if (refetchStatus) {
      setCompleted(allCompletedApp?.completed);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (allCompletedApp?.completed) {
        setCompleted((prevState) =>
          [
            ...new Set(
              [...prevState, ...allCompletedApp?.completed]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (allCompletedApp?.completed?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (allCompletedApp?.completed?.length === 10) setState(true);
    else setState(false);
  }, [allCompletedApp?.completed]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };

  const onRefetchWhenRefetch = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    allCompletedAppRefetch();
  };

  return (
    <>
      <div className={style.admission_application_container}>
        <div
          className={style.with_search}
          style={{
            justifyContent: "flex-start",
            gap: "1rem",
          }}
        >
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onBackWithArrowLeft}
            alt="go to previous tab"
            title="Go Back"
            style={{
              cursor: "pointer",
            }}
          />
          <h6>{t("completed_application")}</h6>
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
          }}
        />
        <div className={style.remainingFeesBottom}>
          <div className={style.itemsContainer}>
            {completed?.map((comp, index) =>
              completed?.length === index + 1 ? (
                <div ref={ref} key={comp?._id}>
                  <CompletedApplicationCard
                    completed={comp}
                    carryParentState={carryParentState}
                    accessRole={accessRole}
                    accessTpye={accessTpye}
                    callApi={callApi}
                    accessApplication={accessApplication}
                    pageOpenAs={pageOpenAs}
                    setOpenApplicationMenu={setOpenApplicationMenu}
                  />
                </div>
              ) : (
                <CompletedApplicationCard
                  key={comp?._id}
                  completed={comp}
                  carryParentState={carryParentState}
                  accessRole={accessRole}
                  accessTpye={accessTpye}
                  callApi={callApi}
                  accessApplication={accessApplication}
                  pageOpenAs={pageOpenAs}
                  setOpenApplicationMenu={setOpenApplicationMenu}
                />
              )
            )}
            {showingDataLoading && <QvipleLoading status="white" />}
          </div>
        </div>
      </div>

      {openApplicationMenu && (
        <CompletedApplicationMenu
          openApplicationMenu={openApplicationMenu}
          onClose={() => setOpenApplicationMenu("")}
          onRefetch={onRefetchWhenRefetch}
        />
      )}
    </>
  );
};

export default CompletedAdmissionApplication;
