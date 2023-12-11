import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useOneApplicationDetail } from "../../../../../../hooks/member_tab/admission-api";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";
import AdmissionApplication from "../AdmissionApplication/AdmissionApplication";
import AdmissionSelected from "../AdmissionSelected/AdmissionSelected";
import AdmissionConfirm from "../AdmissionConfirm/AdmissionConfirm";
import AdmissionAllotted from "../AdmissionAllotted/AdmissionAllotted";
import AdmissionCancelled from "../AdmissionCancelled/AdmissionCancelled";
import AdmissionMulitSelect from "../AdmissionMulitSelect/AdmissionMulitSelect";

const AdmissionOneOngoingApplication = ({
  instituteId,
  carryParentState,
  accessRole,
  accessTpye,
  callApi,
  pageOpenAs,
}) => {
  const getQuery = useLocation();
  const { oneApplicationDetail, oneApplicationDetailRefetch } =
    useOneApplicationDetail({
      apid: getQuery.state?.applicationId,
      skip: !getQuery.state?.applicationId,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (getQuery.state?.applicationId) oneApplicationDetailRefetch();
  }, [getQuery.state?.applicationId, oneApplicationDetailRefetch]);
  return (
    <>
      {getQuery.search?.substring(13) === "application" && (
        <AdmissionApplication
          applicationId={getQuery.state?.applicationId}
          carryParentState={carryParentState}
          applicationDetail={oneApplicationDetail?.oneApply}
          accessRole={accessRole}
          accessTpye={accessTpye}
          instituteId={instituteId}
          applicationDetailApplicablePending={
            oneApplicationDetail?.applicable_pending
          }
          pageOpenAs={pageOpenAs}
        />
      )}
      {getQuery.search?.substring(13) === "select" && (
        <AdmissionSelected
          applicationId={getQuery.state?.applicationId}
          carryParentState={carryParentState}
          applicationDetail={oneApplicationDetail?.oneApply}
          accessRole={accessRole}
          accessTpye={accessTpye}
          instituteId={instituteId}
          applicationDetailApplicablePending={
            oneApplicationDetail?.applicable_pending
          }
          pageOpenAs={pageOpenAs}
        />
      )}
      {getQuery.search?.substring(13) === "confirm" && (
        <AdmissionConfirm
          applicationId={getQuery.state?.applicationId}
          carryParentState={carryParentState}
          applicationDetail={oneApplicationDetail?.oneApply}
          accessRole={accessRole}
          accessTpye={accessTpye}
          instituteId={instituteId}
          callApi={callApi}
          applicationDetailApplicablePending={
            oneApplicationDetail?.applicable_pending
          }
          pageOpenAs={pageOpenAs}
        />
      )}
      {getQuery.search?.substring(13) === "mulitple" && (
        <AdmissionMulitSelect
          applicationId={getQuery.state?.applicationId}
          carryParentState={carryParentState}
          applicationDetail={oneApplicationDetail?.oneApply}
          accessRole={accessRole}
          accessTpye={accessTpye}
          instituteId={instituteId}
          applicationDetailApplicablePending={
            oneApplicationDetail?.applicable_pending
          }
          pageOpenAs={pageOpenAs}
        />
      )}
      {getQuery.search?.substring(13) === "allot" && (
        <AdmissionAllotted
          applicationId={getQuery.state?.applicationId}
          carryParentState={carryParentState}
          applicationDetail={oneApplicationDetail?.oneApply}
          accessRole={accessRole}
          accessTpye={accessTpye}
          instituteId={instituteId}
          applicationDetailApplicablePending={
            oneApplicationDetail?.applicable_pending
          }
          pageOpenAs={pageOpenAs}
        />
      )}
      {getQuery.search?.substring(13) === "cancel" && (
        <AdmissionCancelled
          applicationId={getQuery.state?.applicationId}
          carryParentState={carryParentState}
          applicationDetail={oneApplicationDetail?.oneApply}
          accessRole={accessRole}
          accessTpye={accessTpye}
          instituteId={instituteId}
          applicationDetailApplicablePending={
            oneApplicationDetail?.applicable_pending
          }
          pageOpenAs={pageOpenAs}
        />
      )}
    </>
  );
};

export default AdmissionOneOngoingApplication;
