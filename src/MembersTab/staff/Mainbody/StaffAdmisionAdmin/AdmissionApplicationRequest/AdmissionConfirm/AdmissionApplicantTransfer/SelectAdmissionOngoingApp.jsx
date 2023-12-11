import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import style from "../../../Moderator/AdmissionModerator.module.css";
import PopupWrapper from "../../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";
import { useAllOngoingApp } from "../../../../../../../hooks/member_tab/admission-api";
const SelectAdmissionOngoingApp = ({
  onBack,
  onSelectApp,
  transferApplication,
}) => {
  const adsId = useSelector((state) => state.admissionChange);
  const { t } = useTranslation();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [ongoing, setOngoing] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { allOngoingApp, allOngoingAppRefetch } = useAllOngoingApp({
    data: {
      aid: adsId?.aid,
      page: page,
      limit: 10,
    },
    skip: !adsId?.aid,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (adsId?.aid) {
      setShowingDataLoading(true);
      allOngoingAppRefetch();
    }
  }, [adsId?.aid, page, allOngoingAppRefetch]);
  useEffect(() => {
    if (adsId?.aid) {
      setShowingDataLoading(true);
      allOngoingAppRefetch();
    }
  }, [adsId?.aid, allOngoingAppRefetch]);
  useEffect(() => {
    if (allOngoingApp?.ongoing) {
      setOngoing((prevState) =>
        [
          ...new Set(
            [...prevState, ...allOngoingApp?.ongoing]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    }
    if (allOngoingApp?.ongoing?.length === 10) setState(true);
    else setState(false);
  }, [allOngoingApp?.ongoing]);

  const onSelect = (val) => {
    onSelectApp(val);
  };
  return (
    <PopupWrapper onClose={onBack}>
      <div className={style.assign_role_container}>
        <section
          className={style.assign_role_title}
          style={{
            position: "relative",
          }}
        >
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onBack}
            alt="back icon"
            style={{
              cursor: "pointer",
            }}
          />

          <h6>{t("select_application")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        {ongoing?.map((app, index) =>
          ongoing?.length === index + 1 ? (
            <div
              className={
                transferApplication?._id === app?._id
                  ? `${style.application_card} ${style.application_card_active}`
                  : style.application_card
              }
              key={app?._id}
              ref={ref}
              onClick={() => onSelect(app)}
            >
              <img
                src="/images/admision-application-icon.svg"
                alt="application icon"
              />
              <section className={style.application_card_text}>
                <h6>{app?.applicationName ?? ""}</h6>
                <div className={style.application_card_text_bottom}>
                  <p>{app?.applicationDepartment?.dName ?? ""}</p>
                </div>
              </section>
            </div>
          ) : (
            <div
              className={
                transferApplication?._id === app?._id
                  ? `${style.application_card} ${style.application_card_active}`
                  : style.application_card
              }
              key={app?._id}
              onClick={() => onSelect(app)}
            >
              <img
                src="/images/admision-application-icon.svg"
                alt="application icon"
              />
              <section className={style.application_card_text}>
                <h6>{app?.applicationName ?? ""}</h6>
                <div className={style.application_card_text_bottom}>
                  <p>{app?.applicationDepartment?.dName ?? ""}</p>
                </div>
              </section>
            </div>
          )
        )}
        {showingDataLoading && <QvipleLoading status="white" />}
      </div>
    </PopupWrapper>
  );
};

export default SelectAdmissionOngoingApp;
