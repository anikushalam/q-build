import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { admissionChangeAction } from "../redux/store/admission-slice";
import style from "./JoiningForm.module.css";
import { useAllAppAtInstitute } from "../hooks/member_tab/admission-api";

function Card({ setIndex, key, ref, applyData }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <>
      {applyData?.applicationTypeStatus === "Normal Application" ? (
        <div
          className={style.card}
          onClick={() => {
            dispatch(
              admissionChangeAction.admissionQuery({
                studentAppId: applyData?._id,
                studentAdminId: applyData?.admissionAdmin?._id,
              })
            );
            setIndex(5);
          }}
          key={key}
          ref={ref}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1rem",
          }}
        >
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
              <h6>{applyData?.applicationName}</h6>

              {applyData?.application_type === "Direct Admisison" && (
                <img
                  src="/images/members/application-hotspot-icon.svg"
                  alt="admission icon"
                />
              )}
            </div>
            <div className={style.cardRow}>
              {/* <p>{applyData?.applicationDepartment?.dName}</p> */}
              {applyData?.applicationEndDate && (
                <p>{t("last_date_to_apply")}</p>
              )}
              {applyData?.applicationEndDate ? (
                <h6
                  style={{
                    marginBottom: "0",
                  }}
                >
                  {applyData?.applicationEndDate}
                </h6>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <div key={key} ref={ref}></div>
      )}
    </>
  );
}

function Applications({ setIndex }) {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const searchId = useSelector((state) => state.idChange.searchProfile);
  const [ref, inView] = useInView();
  const [instituteSearchApp, setInstituteSearchApp] = useState([]);
  const { allAppAtInstitute, allAppAtInstituteRefetch } = useAllAppAtInstitute({
    data: {
      id: searchId?.id,
      page: page,
      limit: 10,
    },
    skip: !searchId?.id,
  });

  useEffect(() => {
    if (searchId?.id) allAppAtInstituteRefetch();
  }, [page, searchId?.id, allAppAtInstituteRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (allAppAtInstitute?.allApp)
      setInstituteSearchApp([
        ...new Set([...instituteSearchApp, ...allAppAtInstitute?.allApp]),
      ]);
    if (allAppAtInstitute?.allApp?.length === 10) setState(true);
    else setState(false);
  }, [allAppAtInstitute?.allApp]);
  return (
    <div className={style.applications}>
      <div className={style.top}>{t("join_or_apply_instutude")}</div>
      <div className={style.content}>
        <div className={style.contenttop}>
          <p
            style={{
              fontWeight: "600",
            }}
          >
            {t("existing_student_and_staff_join")}
          </p>
          <div className={style.btn} onClick={() => setIndex(2)}>
            {t("apply")}
          </div>
        </div>
        <div className={style.contentBottom}>
          <h6>{t("new_application")}</h6>
          <div className={style.cardsContainer}>
            {instituteSearchApp?.map((newApp, index) => (
              <Card
                setIndex={setIndex}
                key={index}
                ref={ref}
                applyData={newApp}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;
