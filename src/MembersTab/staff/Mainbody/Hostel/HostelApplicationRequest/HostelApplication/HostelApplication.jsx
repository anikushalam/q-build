import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useGetAllRequest } from "../../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import HostelOngoingTitle from "../HostelOngoingTitle";
import { debounce } from "lodash";
import HostelReqCard from "./HostelReqCard";
import HostelOneOngoingTab from "../HostelOneOngoingTab";

function HostelApplication({
  carryParentState,
  applicationId,
  hostelId,
  applicationDetail,
  accessRole,
  accessTpye,
  applicationDetailApplicablePending,
  pageOpenAs,
}) {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView();
  const [request, setRequest] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getAllRequestList, getAllRequestListRefetch } = useGetAllRequest({
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
      getAllRequestListRefetch();
    }
  }, [page, applicationId, getAllRequestListRefetch, search]);

  useEffect(() => {
    if (search) {
      setRequest(getAllRequestList?.request);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setRequest(getAllRequestList?.request);
        setRefetchStatus(false);
        setShowingDataLoading(false);
      } else {
        if (getAllRequestList?.request) {
          setRequest((prevState) =>
            [
              ...new Set(
                [...prevState, ...getAllRequestList?.request]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getAllRequestList?.request?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }

    if (getAllRequestList?.request?.length === 10) setState(true);
    else setState(false);
  }, [getAllRequestList?.request]);

  const onRefetchWhenSelect = () => {
    setPage(1);
    getAllRequestListRefetch();
    setRefetchStatus(true);
  };

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    deb(e.target.value);
  };

  // console.info("applicationDetail", applicationDetail);
  return (
    <>
      <HostelOngoingTitle
        applicationDetail={applicationDetail}
        carryParentState={carryParentState}
        tabStatusFlow="Request_Query"
        applicationDetailApplicablePending={applicationDetailApplicablePending}
        pageOpenAs={pageOpenAs}
      >
        <input
          type="text"
          placeholder="Search requests..."
          onChange={onSearchEvent}
        />
      </HostelOngoingTitle>
      <HostelOneOngoingTab
        carryParentState={carryParentState}
        accessRole={accessRole}
        accessTpye={accessTpye}
        pageOpenAs={pageOpenAs}
      />
      {request?.map((applicant, index) =>
        request?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <HostelReqCard
              applicant={applicant}
              onRefetchWhenSelect={onRefetchWhenSelect}
              applicationId={applicationId}
              hostelId={hostelId}
              batchId={applicationDetail?.applicationBatch?._id}
              classMasterId={applicationDetail?.applicationMaster}
              // instituteId={applicationDetail?.hostelAdmin?.institute?._id}
              // applicationName={applicationDetail?.applicationName ?? ""}
            />
          </div>
        ) : (
          <HostelReqCard
            key={index}
            applicant={applicant}
            onRefetchWhenSelect={onRefetchWhenSelect}
            applicationId={applicationId}
            hostelId={hostelId}
            batchId={applicationDetail?.applicationBatch?._id}
            classMasterId={applicationDetail?.applicationMaster}
            // instituteId={applicationDetail?.hostelAdmin?.institute?._id}
            // applicationName={applicationDetail?.applicationName ?? ""}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
}

export default HostelApplication;
