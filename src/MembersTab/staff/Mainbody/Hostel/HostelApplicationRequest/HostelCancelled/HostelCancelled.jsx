import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAdmissionCancelledList } from "../../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import HostelOneOngoingTab from "../HostelOneOngoingTab";
import HostelOngoingTitle from "../HostelOngoingTitle";
import HostelCancelCard from "./HostelCancelCard";
import { debounce } from "lodash";

const HostelCancelled = ({
  carryParentState,
  applicationId,
  applicationDetail,
  viewAs,
  accessRole,
  accessTpye,
  applicationDetailApplicablePending,
  pageOpenAs,
}) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [cancel, setCancel] = useState([]);
  const [search, setSearch] = useState("");
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { admissionCancelledList, admissionCancelledListRefetch } =
    useAdmissionCancelledList({
      data: {
        aid: applicationId,
        page: page,
        limit: 10,
        search: search ? search : "",
      },
      skip: !applicationId,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (applicationId) {
      setShowingDataLoading(true);
      admissionCancelledListRefetch();
    }
  }, [page, applicationId, admissionCancelledListRefetch]);

  useEffect(() => {
    if (search) {
      setCancel(admissionCancelledList?.cancel);
      setShowingDataLoading(false);
    } else {
      if (admissionCancelledList?.cancel) {
        setCancel((prevState) =>
          [
            ...new Set(
              [...prevState, ...admissionCancelledList?.cancel]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (admissionCancelledList?.cancel?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (admissionCancelledList?.cancel?.length === 10) setState(true);
    else setState(false);
  }, [admissionCancelledList?.cancel]);

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    deb(e.target.value);
  };

  return (
    <>
      {viewAs === "COMPLETED_APPLICATION" ? (
        ""
      ) : (
        <>
          <HostelOngoingTitle
            applicationDetail={applicationDetail}
            carryParentState={carryParentState}
            applicationDetailApplicablePending={
              applicationDetailApplicablePending
            }
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
        </>
      )}
      {cancel?.map((applicant, index) =>
        cancel?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <HostelCancelCard applicant={applicant} />
          </div>
        ) : (
          <HostelCancelCard key={index} applicant={applicant} />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default HostelCancelled;
