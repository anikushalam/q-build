import moment from "moment";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useAllOngoingApp } from "../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "./AdmissionModerator.module.css";

const SelectApplication = ({
  setActivePopup,
  setSelectedApplication,
  setSelectedApplicationId,
  selectedApplicationId,
  openAs,
  role,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [ongoing, setOngoing] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const adsId = useSelector((state) => state.admissionChange);
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

  const onBackWithArrowLeft = () => {
    if (openAs === "EDIT") setActivePopup("PREVIEW_FORM");
    else setActivePopup("ASSIGN_ROLE");
  };

  const onMultiSelect = (val) => {
    if (selectedApplicationId?.includes(val?._id)) {
      setSelectedApplication((prev) =>
        prev?.filter((id) => id?._id !== val?._id)
      );
      setSelectedApplicationId((prev) => prev?.filter((id) => id !== val?._id));
    } else {
      setSelectedApplication((prev) => (prev ? [...prev, val] : [val]));
      setSelectedApplicationId((prev) =>
        prev ? [...prev, val?._id] : [val?._id]
      );
    }
  };

  const onSelectDone = () => {
    if (openAs === "EDIT") setActivePopup("PREVIEW_FORM");
    else if (role === "ONE_TAB_ACCESS") {
      setActivePopup("ASSIGN_ROLE");
    } else setActivePopup("MODERATOR_PREWVIEW");
  };
  return (
    <PopupWrapper onClose={onBackWithArrowLeft}>
      <div className={style.assign_role_container}>
        <section
          className={style.assign_role_title}
          style={{
            position: "relative",
          }}
        >
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onBackWithArrowLeft}
            alt="back icon"
          />

          <h6>{t("assign_role_to_moderator")}</h6>
          <button className={style.select_btn} onClick={onSelectDone}>
            {selectedApplicationId?.length ?? ""} {` `}
            {t("select")}
          </button>
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
                selectedApplicationId?.includes(app?._id)
                  ? `${style.application_card} ${style.application_card_active}`
                  : style.application_card
              }
              key={app?._id}
              ref={ref}
              onClick={() => onMultiSelect(app)}
            >
              <img
                src="/images/admision-application-icon.svg"
                alt="application icon"
              />
              <section className={style.application_card_text}>
                <h6>{app?.applicationName ?? ""}</h6>
                <div className={style.application_card_text_bottom}>
                  <p>{app?.applicationDepartment?.dName ?? ""}</p>
                  {app?.applicationEndDate ? (
                    <p>
                      {moment(app?.applicationEndDate).format("DD/MM/yyyy")}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </section>
            </div>
          ) : (
            <div
              className={
                selectedApplicationId?.includes(app?._id)
                  ? `${style.application_card} ${style.application_card_active}`
                  : style.application_card
              }
              key={app?._id}
              onClick={() => onMultiSelect(app)}
            >
              <img
                src="/images/admision-application-icon.svg"
                alt="application icon"
              />
              <section className={style.application_card_text}>
                <h6>{app?.applicationName ?? ""}</h6>
                <div className={style.application_card_text_bottom}>
                  <p>{app?.applicationDepartment?.dName ?? ""}</p>
                  {app?.applicationEndDate ? (
                    <p>
                      {moment(app?.applicationEndDate).format("DD/MM/yyyy")}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </section>
            </div>
          )
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </PopupWrapper>
  );
};

export default SelectApplication;
