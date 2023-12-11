import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useGetAllConfirm } from "../../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import HostelOngoingTitle from "../HostelOngoingTitle";
import { debounce } from "lodash";
import HostelOneOngoingTab from "../HostelOneOngoingTab";
import HostelConfirmCard from "./HostelConfirmCard";
import CancelHostelApplication from "./CancelHostelApplication";
import AllotHostelBed from "./AllotHostelBed";

function HostelConfirm({
  carryParentState,
  applicationId,
  hostelId,
  applicationDetail,
  unitId,
  accessRole,
  accessTpye,
  applicationDetailApplicablePending,
  pageOpenAs,
  instituteId,
}) {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView();
  const [confirm, setConfirm] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [stepOpen, setStepOpen] = useState("");
  const [currentApplicant, setCurrentApplicant] = useState("");

  const { getAllConfirmList, getAllConfirmListRefetch } = useGetAllConfirm({
    data: {
      id: applicationId,
      page: page,
      limit: 10,
      search: search ? search : "",
    },
    skip: !applicationId,
  });
  // const [selectAdmissionApplicant] = useSelectAdmissionApplicant();

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
  const onCancelHostelApplication = (val) => {
    setCurrentApplicant(val);
    setStepOpen("CANCEL_APPLICANT");
  };
  const onAllotBed = (val) => {
    setCurrentApplicant(val);
    setStepOpen("ALLOT_BED");
  };

  return (
    <>
      <HostelOngoingTitle
        applicationDetail={applicationDetail}
        carryParentState={carryParentState}
        tabStatusFlow="Confirm_Query"
        applicationDetailApplicablePending={applicationDetailApplicablePending}
        pageOpenAs={pageOpenAs}
      >
        <input
          type="text"
          placeholder="Search applications..."
          onChange={onSearchEvent}
        />
      </HostelOngoingTitle>
      <HostelOneOngoingTab
        carryParentState={carryParentState}
        accessRole={accessRole}
        accessTpye={accessTpye}
        pageOpenAs={pageOpenAs}
      />
      {confirm?.map((applicant, index) =>
        confirm?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <HostelConfirmCard
              applicant={applicant}
              onCancelHostelApplication={onCancelHostelApplication}
              onAllotBed={onAllotBed}
              // instituteId={applicationDetail?.hostelAdmin?.institute?._id}
              // applicationName={applicationDetail?.applicationName ?? ""}
            />
          </div>
        ) : (
          <HostelConfirmCard
            key={index}
            applicant={applicant}
            onCancelHostelApplication={onCancelHostelApplication}
            onAllotBed={onAllotBed}
            // instituteId={applicationDetail?.hostelAdmin?.institute?._id}
            // applicationName={applicationDetail?.applicationName ?? ""}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {stepOpen === "CANCEL_APPLICANT" && (
        <CancelHostelApplication
          currentApplicant={currentApplicant}
          applicationId={applicationId}
          onRefetchWhenAction={onRefetchWhenAction}
          onClose={() => setStepOpen("")}
        />
      )}
      {stepOpen === "ALLOT_BED" && (
        <AllotHostelBed
          currentApplicant={currentApplicant}
          applicationId={applicationId}
          onRefetchWhenAction={onRefetchWhenAction}
          onClose={() => setStepOpen("")}
          hostelId={hostelId}
          unitId={unitId}
          instituteId={instituteId}
        />
      )}
    </>
  );
}

export default HostelConfirm;
