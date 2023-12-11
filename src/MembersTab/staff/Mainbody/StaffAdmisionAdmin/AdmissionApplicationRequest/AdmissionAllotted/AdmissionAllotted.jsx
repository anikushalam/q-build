import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAdmissionAllottedList } from "../../../../../../hooks/member_tab/admission-api";
import { debounce } from "lodash";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import AdmissionAllotCard from "./AdmissionAllotCard";
import AdmissionOngoingWrapper from "../OngoingApplication/AdmissionOngoingWrapper";
import AdmissionOneOngoingTab from "../OngoingApplication/AdmissionOneOngoingTab";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";

const AdmissionAllotted = ({
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
  const [allotted, setAllotted] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { admissionAllottedList, admissionAllottedListRefetch } =
    useAdmissionAllottedList({
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
      admissionAllottedListRefetch();
    }
  }, [page, applicationId, admissionAllottedListRefetch, search]);

  useEffect(() => {
    if (search) {
      setAllotted(admissionAllottedList?.allot);
      setShowingDataLoading(false);
    } else {
      if (admissionAllottedList?.allot) {
        setAllotted((prevState) =>
          [
            ...new Set(
              [...prevState, ...admissionAllottedList?.allot]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (admissionAllottedList?.allot?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (admissionAllottedList?.allot?.length === 10) setState(true);
    else setState(false);
  }, [admissionAllottedList?.allot]);

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
            tabStatusFlow="Allot_Query"
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
      {allotted?.map((applicant, index) =>
        allotted?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <AdmissionAllotCard applicant={applicant} />
          </div>
        ) : (
          <AdmissionAllotCard key={index} applicant={applicant} />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default AdmissionAllotted;
