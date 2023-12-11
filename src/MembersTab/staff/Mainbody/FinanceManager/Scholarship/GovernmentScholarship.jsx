import React, { useEffect, useState } from "react";
import style from "../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useGetScholarshipListAdmission } from "../../../../../hooks/member_tab/admission-api";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import ScholarshipCard from "./ScholarshipCard";
import { useSelector } from "react-redux";
import OneScholarship from "./OneScholarship";
import CompletedScholarship from "./CompletedScholarship";
import { useFinanceDetailManager } from "../../../../../hooks/member_tab/finance-api";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
const GovernmentScholarship = ({ carryParentState, callApi }) => {
  const { t } = useTranslation();
  const fid = useSelector((state) => state.financeChange.fid);
  const navigate = useNavigate();
  const getQuery = useLocation();
  const tabList = [
    {
      name: t("scholarship"),
      id: 0,
    },
    {
      name: t("completed"),
      id: 1,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [scholarshipList, setScholarshipList] = useState([]);

  const { financeDetailManager, financeDetailManagerRefetch } =
    useFinanceDetailManager({
      data: {
        fid: fid,
        mod_id: "",
      },
      skip: !fid,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (fid) financeDetailManagerRefetch();
  }, [financeDetailManagerRefetch, fid]);
  const { getScholarshipListAdmission, getScholarshipListAdmissionRefetch } =
    useGetScholarshipListAdmission({
      data: {
        aid: financeDetailManager?.finance?.institute?.admissionDepart?.[0],
        page: page,
        limit: 10,
        status: "Not Completed",
      },
      skip: !financeDetailManager?.finance?.institute?.admissionDepart?.[0],
    });

  useEffect(() => {
    if (financeDetailManager?.finance?.institute?.admissionDepart?.[0]) {
      setShowingDataLoading(true);
      getScholarshipListAdmissionRefetch();
    }
  }, [
    financeDetailManager?.finance?.institute?.admissionDepart?.[0],
    page,
    getScholarshipListAdmissionRefetch,
  ]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getScholarshipListAdmission?.all_scholar) {
      setScholarshipList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getScholarshipListAdmission?.all_scholar]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getScholarshipListAdmission?.all_scholar?.length === 0)
      setShowingDataLoading(false);
    else {
    }

    if (getScholarshipListAdmission?.all_scholar?.length === 10) setState(true);
    else setState(false);
  }, [getScholarshipListAdmission?.all_scholar]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  return (
    <>
      {getQuery?.search?.substring(3) === "scholarship" && (
        <div className={style.moderator_container}>
          <section className={style.moderator_container_title}>
            <img
              src="/images/arrow-left-fees-icon.svg"
              onClick={onBackWithArrowLeft}
              alt="go to previous tab"
              title="Go Back"
              style={{
                cursor: "pointer",
              }}
            />
            <h6>{t("scholership_gov_grant")}</h6>
          </section>
          <BorderBottom
            customStyle={{
              width: "100%",
            }}
          />

          <UniversalTab
            tabList={tabList}
            activeIndexTab={activeIndex}
            setActiveIndexTab={setActiveIndex}
            showAs={false}
            customStyleTab={{
              width: "50%",
            }}
          />
          <BorderBottom
            customStyle={{
              width: "100%",
            }}
          />
          {activeIndex === 0 && (
            <>
              <div className={style.refund_list}>
                {scholarshipList?.map((scholarship, index) =>
                  scholarshipList?.length === index + 1 ? (
                    <div ref={ref} key={scholarship?._id}>
                      <ScholarshipCard
                        scholarship={scholarship}
                        carryParentState={carryParentState}
                        callApi={callApi}
                      />
                    </div>
                  ) : (
                    <ScholarshipCard
                      scholarship={scholarship}
                      key={scholarship?._id}
                      carryParentState={carryParentState}
                      callApi={callApi}
                    />
                  )
                )}
                {showingDataLoading && <QvipleLoading />}
              </div>
            </>
          )}
          {activeIndex === 1 && (
            <CompletedScholarship
              admissionId={
                financeDetailManager?.finance?.institute?.admissionDepart?.[0]
              }
              carryParentState={carryParentState}
            />
          )}
        </div>
      )}
      {getQuery?.search?.substring(3) !== "scholarship" && (
        <OneScholarship
          admissionId={
            financeDetailManager?.finance?.institute?.admissionDepart?.[0]
          }
        />
      )}
    </>
  );
};

export default GovernmentScholarship;
