import React, { useEffect, useState } from "react";
import style from "./AdmissionScholarship.module.css";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useGetScholarshipListAdmission } from "../../../../../hooks/member_tab/admission-api";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import ScholarshipCard from "./ScholarshipCard";
import ScholarshipMenu from "./ScholarshipMenu";
import AddScholarship from "./AddScholarship";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import OneScholarship from "./OneScholarship/OneScholarship";
import CompletedScholarship from "./CompletedScholarship";
import { useScrollbar } from "../../../../../Scroll/use-scroll";

const AdmissionScholarship = ({
  admissionId,
  instituteId,
  carryParentState,
  financeId,
  accessRole,
  callApi,
}) => {
  const { t } = useTranslation();
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
  const [addScholarship, setAddScholarship] = useState(false);
  const [openScholarshipMenu, setOpenScholarshipMenu] = useState("");
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [scholarshipList, setScholarshipList] = useState([]);

  const { getScholarshipListAdmission, getScholarshipListAdmissionRefetch } =
    useGetScholarshipListAdmission({
      data: {
        aid: admissionId,
        page: page,
        limit: 10,
        status: "Not Completed",
      },
      skip: !admissionId,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (admissionId) {
      setShowingDataLoading(true);
      getScholarshipListAdmissionRefetch();
    }
  }, [admissionId, page, getScholarshipListAdmissionRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setScholarshipList(getScholarshipListAdmission?.all_scholar);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
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
    }

    if (getScholarshipListAdmission?.all_scholar?.length === 10) setState(true);
    else setState(false);
  }, [getScholarshipListAdmission?.all_scholar]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  const onRefetchWhenAdd = () => {
    setRefetchStatus(true);
    setPage(1);
    setShowingDataLoading(true);
    getScholarshipListAdmissionRefetch();
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
            <h6>{t("admission_scholership_management")}</h6>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <h6
                  className={style.add_new_moderator}
                  onClick={() => setAddScholarship(true)}
                >
                  {t("add_new_scholarship")}
                </h6>
              </div>
              <div className={style.refund_list}>
                {scholarshipList?.map((scholarship, index) =>
                  scholarshipList?.length === index + 1 ? (
                    <div ref={ref} key={scholarship?._id}>
                      <ScholarshipCard
                        scholarship={scholarship}
                        setOpenScholarshipMenu={setOpenScholarshipMenu}
                        accessRole={accessRole}
                        callApi={callApi}
                        carryParentState={carryParentState}
                      />
                    </div>
                  ) : (
                    <ScholarshipCard
                      scholarship={scholarship}
                      key={scholarship?._id}
                      setOpenScholarshipMenu={setOpenScholarshipMenu}
                      accessRole={accessRole}
                      callApi={callApi}
                      carryParentState={carryParentState}
                    />
                  )
                )}
                {addScholarship && (
                  <AddScholarship
                    onClose={() => setAddScholarship((pre) => !pre)}
                    admissionId={admissionId}
                    onRefetchWhenAdd={onRefetchWhenAdd}
                    financeId={financeId}
                  />
                )}
                {openScholarshipMenu && (
                  <ScholarshipMenu
                    onRefetch={onRefetchWhenAdd}
                    onClose={() => setOpenScholarshipMenu("")}
                    openScholarshipMenu={openScholarshipMenu}
                  />
                )}
                {showingDataLoading && <QvipleLoading />}
              </div>
            </>
          )}
          {activeIndex === 1 && (
            <CompletedScholarship
              admissionId={admissionId}
              carryParentState={carryParentState}
              accessRole={accessRole}
              callApi={callApi}
            />
          )}
        </div>
      )}
      {getQuery?.search?.substring(3) !== "scholarship" && (
        <OneScholarship instituteId={instituteId} admissionId={admissionId} />
      )}
    </>
  );
};

export default AdmissionScholarship;
