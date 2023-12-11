import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import style from "../JoiningForm/JoiningForm.module.css";
import { useGetHostelApplyApplicationList } from "../hooks/member_tab/hostel-api";
import QvipleLoading from "../Loader/QvipleLoading";

function Card({ applyData, setPreview }) {
  const { t } = useTranslation();
  return (
    <div className={style.card} onClick={() => setPreview(applyData?._id)}>
      <div className={style.card_row_container}>
        <img
          src="/images/members/admission-application-icon.svg"
          alt="admission icon"
        />
        <div
          style={{
            width: "100%",
          }}
        >
          <div className={style.cardRow}>
            <h6
              style={{
                marginBottom: "0.2rem",
              }}
            >
              {applyData?.applicationName}
            </h6>
            {applyData?.application_type === "Direct Admisison" ? (
              <div className={style.hostel_direct}>
                {applyData?.applicationEndDate ? (
                  <h6
                    style={{
                      marginBottom: "0.2rem",
                      marginRight: "1rem",
                    }}
                  >
                    {applyData?.applicationEndDate}
                  </h6>
                ) : (
                  ""
                )}
                {applyData?.application_type === "Direct Admisison" && (
                  <img
                    src="/images/members/application-hotspot-icon.svg"
                    alt="admission icon"
                  />
                )}
              </div>
            ) : applyData?.applicationEndDate ? (
              <h6
                style={{
                  marginBottom: "0.2rem",
                  marginRight: "2.3rem",
                }}
              >
                {applyData?.applicationEndDate}
              </h6>
            ) : (
              ""
            )}
          </div>
          <div className={style.cardRow}>
            <p>{applyData?.applicationUnit?.hostel_unit_name ?? ""}</p>
            {applyData?.applicationEndDate && (
              <p
                style={{
                  marginRight: "2.3rem",
                }}
              >
                {t("last_date_to_apply")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function HostelApplyApplication({ instituteId, setPreview }) {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [hostelApplicationList, setHostelApplicationList] = useState([]);

  const {
    getHostelApplyApplicationList,
    getHostelApplyApplicationListRefetch,
  } = useGetHostelApplyApplicationList({
    data: {
      id: instituteId,
      page: page,
      limit: 10,
      search: "",
    },
    skip: !instituteId,
  });
  useEffect(() => {
    if (instituteId) {
      setShowingDataLoading(true);
      getHostelApplyApplicationListRefetch();
    }
  }, [instituteId, page, getHostelApplyApplicationListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getHostelApplyApplicationList?.allApp) {
      setHostelApplicationList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getHostelApplyApplicationList?.allApp]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getHostelApplyApplicationList?.allApp?.length === 0)
      setShowingDataLoading(false);
    else {
    }

    if (getHostelApplyApplicationList?.allApp?.length === 10) setState(true);
    else setState(false);
  }, [getHostelApplyApplicationList?.allApp]);
  return (
    <div
      className={style.applications}
      style={{
        width: "1128px",
        marginTop: "1rem",
      }}
    >
      <div className={style.top}>{t("join_or_apply_instutude")}</div>
      <div className={style.content}>
        <div className={style.contentBottom}>
          <h6>{t("new_application")}</h6>
          <div className={style.cardsContainer}>
            {hostelApplicationList?.map((newApp, index) =>
              hostelApplicationList?.length === index + 1 ? (
                <div ref={ref} key={newApp?._id}>
                  <Card applyData={newApp} setPreview={setPreview} />
                </div>
              ) : (
                <Card
                  key={newApp?._id}
                  applyData={newApp}
                  setPreview={setPreview}
                />
              )
            )}
            {showingDataLoading && <QvipleLoading />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostelApplyApplication;
