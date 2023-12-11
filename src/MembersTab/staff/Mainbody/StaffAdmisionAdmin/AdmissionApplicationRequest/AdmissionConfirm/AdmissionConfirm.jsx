import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useGetAllConfirm } from "../../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { debounce } from "lodash";
import AdmissionConfirmCard from "./AdmissionConfirmCard";
import AdmissionOngoingWrapper from "../OngoingApplication/AdmissionOngoingWrapper";
import AdmissionOneOngoingTab from "../OngoingApplication/AdmissionOneOngoingTab";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";
import CancelAdmissionFromConfirm from "./ConfirmProcess/CancelAdmissionFromConfirm";
import AllotSelectBacth from "./ConfirmProcess/AllotSelectBacth";
import AllotClassToApplicant from "./ConfirmProcess/AllotClassToApplicant";
import style from "../AdmissionApplicationRequest.module.css";
import { useTranslation } from "react-i18next";
import AdmissionTabChangeLink from "../../AdmissionTabChangeLink";
import InstituteAdmissionTabChangeLink from "../../../../../../AdmisionAdmin/InstituteAdmissionTabChangeLink";

function AdmissionConfirm({
  carryParentState,
  applicationId,
  applicationDetail,
  accessRole,
  accessTpye,
  instituteId,
  callApi,
  applicationDetailApplicablePending,
  pageOpenAs,
}) {
  const { t } = useTranslation();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView();
  const [confirm, setConfirm] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [stepOpen, setStepOpen] = useState("");
  const [currentApplicant, setCurrentApplicant] = useState("");
  const [batchId, setBatchId] = useState("");

  const { getAllConfirmList, getAllConfirmListRefetch } = useGetAllConfirm({
    data: {
      id: applicationId,
      page: page,
      limit: 10,
      search: search ? search : "",
    },
    skip: !applicationId,
  });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (applicationId) {
      setShowingDataLoading(true);
      getAllConfirmListRefetch();
    }
  }, [page, applicationId, getAllConfirmListRefetch, search]);

  useEffect(() => {
    if (search) {
      setConfirm(getAllConfirmList?.confirm);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setConfirm(getAllConfirmList?.confirm);
        setRefetchStatus(false);
        setShowingDataLoading(false);
      } else {
        if (getAllConfirmList?.confirm) {
          setConfirm((prevState) =>
            [
              ...new Set(
                [...prevState, ...getAllConfirmList?.confirm]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getAllConfirmList?.confirm?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }

    if (getAllConfirmList?.confirm?.length === 10) setState(true);
    else setState(false);
  }, [getAllConfirmList?.confirm]);

  const onRefetchWhenAction = () => {
    setPage(1);
    getAllConfirmListRefetch();
    setRefetchStatus(true);
  };

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    deb(e.target.value);
  };
  const onCancelAdmission = (val) => {
    setCurrentApplicant(val);
    setStepOpen("CANCEL_APPLICANT");
  };
  const onAllotApplicantBatch = (val) => {
    setCurrentApplicant(val);
    setStepOpen("ALLOT_BATCH");
  };
  const onAllotApplicantClasses = (batch_id) => {
    setBatchId(batch_id);
    setStepOpen("ALLOT_CLASSES");
  };

  return (
    <>
      <AdmissionOngoingWrapper
        applicationDetail={applicationDetail}
        carryParentState={carryParentState}
        instituteId={instituteId}
        tabStatusFlow="Confirm_Query"
        applicationDetailApplicablePending={applicationDetailApplicablePending}
        onRefetchConfirmTab={onRefetchWhenAction}
        pageOpenAs={pageOpenAs}
        s
      >
        <input
          type="text"
          placeholder="Search applicants..."
          onChange={onSearchEvent}
        />
      </AdmissionOngoingWrapper>
      <AdmissionOneOngoingTab
        carryParentState={carryParentState}
        accessRole={accessRole}
        accessTpye={accessTpye}
        pageOpenAs={pageOpenAs}
      />
      <div className={style.end_btn}>
        {pageOpenAs === "INSTITUTE" ? (
          <InstituteAdmissionTabChangeLink
            carryParentState={carryParentState}
            activeTab="?a=ongoing&n=mulitple"
          >
            <p className={style.mulitple_select_btn}>{t("multiple_select")}</p>
          </InstituteAdmissionTabChangeLink>
        ) : (
          <AdmissionTabChangeLink
            carryParentState={carryParentState}
            accessRole={accessRole}
            accessTpye={accessTpye}
            activeTab="ongoing&n=mulitple"
            callApi={callApi}
          >
            <p className={style.mulitple_select_btn}>{t("multiple_select")}</p>
          </AdmissionTabChangeLink>
        )}
      </div>
      {confirm?.map((applicant, index) =>
        confirm?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <AdmissionConfirmCard
              applicant={applicant}
              onCancelAdmission={onCancelAdmission}
              onAllotApplicantBatch={onAllotApplicantBatch}
              instituteId={instituteId}
            />
          </div>
        ) : (
          <AdmissionConfirmCard
            key={index}
            applicant={applicant}
            onCancelAdmission={onCancelAdmission}
            onAllotApplicantBatch={onAllotApplicantBatch}
            instituteId={instituteId}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {stepOpen === "CANCEL_APPLICANT" && (
        <CancelAdmissionFromConfirm
          onClose={() => setStepOpen("")}
          currentApplicant={currentApplicant}
          onRefetchWhenAction={onRefetchWhenAction}
          applicationId={applicationDetail?._id}
        />
      )}
      {stepOpen === "ALLOT_BATCH" && (
        <AllotSelectBacth
          onClose={() => setStepOpen("")}
          applicationId={applicationDetail?._id}
          onAllotApplicantClasses={onAllotApplicantClasses}
        />
      )}
      {stepOpen === "ALLOT_CLASSES" && (
        <AllotClassToApplicant
          onClose={() => setStepOpen("")}
          currentApplicant={currentApplicant}
          onRefetchWhenAction={onRefetchWhenAction}
          applicationId={applicationDetail?._id}
          batchId={batchId}
        />
      )}
    </>
  );
}

export default AdmissionConfirm;
