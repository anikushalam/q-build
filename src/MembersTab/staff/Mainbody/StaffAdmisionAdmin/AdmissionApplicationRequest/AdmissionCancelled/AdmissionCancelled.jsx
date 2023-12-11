import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAdmissionCancelledList } from "../../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { debounce } from "lodash";
import AdmissionCancelCard from "./AdmissionCancelCard";
import AdmissionOngoingWrapper from "../OngoingApplication/AdmissionOngoingWrapper";
import AdmissionOneOngoingTab from "../OngoingApplication/AdmissionOneOngoingTab";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";

const AdmissionCancelled = ({
  carryParentState,
  applicationId,
  applicationDetail,
  viewAs,
  accessRole,
  accessTpye,
  instituteId,
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
          <AdmissionOngoingWrapper
            applicationDetail={applicationDetail}
            carryParentState={carryParentState}
            instituteId={instituteId}
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
          </AdmissionOngoingWrapper>
          <AdmissionOneOngoingTab
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
            <AdmissionCancelCard applicant={applicant} />
          </div>
        ) : (
          <AdmissionCancelCard key={index} applicant={applicant} />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default AdmissionCancelled;
