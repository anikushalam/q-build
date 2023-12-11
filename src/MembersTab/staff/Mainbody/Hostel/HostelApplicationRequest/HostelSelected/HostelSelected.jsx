import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useGetAllSelect } from "../../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import HostelOngoingTitle from "../HostelOngoingTitle";
import { debounce } from "lodash";
import HostelOneOngoingTab from "../HostelOneOngoingTab";
import HostelSelectCard from "./HostelSelectCard";
import MarkConfirm from "./MarkConfirm";
import CollectHostelFees from "./CollectHostelFees";
import CollectHostelDocs from "./CollectHostelDocs";

function HostelSelected({
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
  const [select, setSelect] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [stepOpen, setStepOpen] = useState("");
  const [currentApplicant, setCurrentApplicant] = useState("");

  const { getAllSelectList, getAllSelectListRefetch } = useGetAllSelect({
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
      getAllSelectListRefetch();
    }
  }, [page, applicationId, getAllSelectListRefetch, search]);

  useEffect(() => {
    if (search) {
      setSelect(getAllSelectList?.select);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setSelect(getAllSelectList?.select);
        setRefetchStatus(false);
        setShowingDataLoading(false);
      } else {
        if (getAllSelectList?.select) {
          setSelect((prevState) =>
            [
              ...new Set(
                [...prevState, ...getAllSelectList?.select]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getAllSelectList?.select?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }

    if (getAllSelectList?.select?.length === 10) setState(true);
    else setState(false);
  }, [getAllSelectList?.select]);

  const onRefetchWhenConfirm = () => {
    setPage(1);
    getAllSelectListRefetch();
    setRefetchStatus(true);
  };

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    deb(e.target.value);
  };
  const onSelectOffileFees = (val) => {
    setCurrentApplicant(val);
    setStepOpen("COLLECT_FEES");
  };
  const onCollectDocs = (val) => {
    setCurrentApplicant(val);
    setStepOpen("COLLECT_DOCS");
  };

  const onNotConfirm = (val) => {
    setCurrentApplicant(val);
    setStepOpen("MARK_CONFIRM");
  };

  return (
    <>
      <HostelOngoingTitle
        applicationDetail={applicationDetail}
        carryParentState={carryParentState}
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
      {select?.map((applicant, index) =>
        select?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <HostelSelectCard
              applicant={applicant}
              onRefetchWhenConfirm={onRefetchWhenConfirm}
              applicationId={applicationId}
              hostelId={hostelId}
              onSelectOffileFees={onSelectOffileFees}
              onCollectDocs={onCollectDocs}
              onNotConfirm={onNotConfirm}
              batchId={applicationDetail?.applicationBatch?._id}
              // instituteId={applicationDetail?.hostelAdmin?.institute?._id}
              // applicationName={applicationDetail?.applicationName ?? ""}
            />
          </div>
        ) : (
          <HostelSelectCard
            key={index}
            applicant={applicant}
            onRefetchWhenConfirm={onRefetchWhenConfirm}
            applicationId={applicationId}
            hostelId={hostelId}
            onSelectOffileFees={onSelectOffileFees}
            onCollectDocs={onCollectDocs}
            onNotConfirm={onNotConfirm}
            batchId={applicationDetail?.applicationBatch?._id}
            // instituteId={applicationDetail?.hostelAdmin?.institute?._id}
            // applicationName={applicationDetail?.applicationName ?? ""}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}

      {stepOpen === "MARK_CONFIRM" && (
        <MarkConfirm
          currentApplicant={currentApplicant}
          applicationId={applicationId}
          onRefetchWhenConfirm={onRefetchWhenConfirm}
          onClose={() => setStepOpen("")}
        />
      )}
      {stepOpen === "COLLECT_FEES" && (
        <CollectHostelFees
          applicant={currentApplicant}
          applicationId={applicationId}
          onRefetchWhenConfirm={onRefetchWhenConfirm}
          onClose={() => setStepOpen("")}
        />
      )}
      {stepOpen === "COLLECT_DOCS" && (
        <CollectHostelDocs
          applicant={currentApplicant}
          applicationId={applicationId}
          onRefetchWhenConfirm={onRefetchWhenConfirm}
          onClose={() => setStepOpen("")}
        />
      )}
    </>
  );
}

export default HostelSelected;
