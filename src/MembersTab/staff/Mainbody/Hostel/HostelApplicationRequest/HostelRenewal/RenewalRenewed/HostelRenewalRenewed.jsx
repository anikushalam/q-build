import React, { useCallback, useEffect, useState } from "react";
import HostelOngoingTitle from "../../HostelOngoingTitle";
import CancelHostelApplication from "../../HostelConfirm/CancelHostelApplication";
import AllotHostelBed from "../../HostelConfirm/AllotHostelBed";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";
import HostelConfirmCard from "../../HostelConfirm/HostelConfirmCard";
import { useInView } from "react-intersection-observer";
import { useGetRenewalRenewedListByHostel } from "../../../../../../../hooks/member_tab/hostel-api";
import { debounce } from "lodash";
import HostelRenewalTab from "../HostelRenewalTab";

const HostelRenewalRenewed = ({ carryParentState, huid, unitName }) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView();
  const [confirm, setConfirm] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [stepOpen, setStepOpen] = useState("");
  const [currentApplicant, setCurrentApplicant] = useState("");

  const {
    getRenewalRenewedListByHostel,
    getRenewalRenewedListByHostelRefetch,
  } = useGetRenewalRenewedListByHostel({
    data: {
      huid: huid,
      page: page,
      limit: 10,
      search: search ? search : "",
    },
    skip: !huid,
  });
  // const [selectAdmissionApplicant] = useSelectAdmissionApplicant();

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (huid) {
      setShowingDataLoading(true);
      getRenewalRenewedListByHostelRefetch();
    }
  }, [page, huid, getRenewalRenewedListByHostelRefetch, search]);

  useEffect(() => {
    if (search) {
      setConfirm(getRenewalRenewedListByHostel?.confirm);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setConfirm(getRenewalRenewedListByHostel?.confirm);
        setRefetchStatus(false);
        setShowingDataLoading(false);
      } else {
        if (getRenewalRenewedListByHostel?.confirm) {
          setConfirm((prevState) =>
            [
              ...new Set(
                [...prevState, ...getRenewalRenewedListByHostel?.confirm]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getRenewalRenewedListByHostel?.confirm?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }

    if (getRenewalRenewedListByHostel?.confirm?.length === 10) setState(true);
    else setState(false);
  }, [getRenewalRenewedListByHostel?.confirm]);

  const onRefetchWhenAction = () => {
    setPage(1);
    getRenewalRenewedListByHostelRefetch();
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
        unitName={unitName}
        carryParentState={carryParentState}
      >
        <input
          type="text"
          placeholder="Search applications..."
          onChange={onSearchEvent}
        />
      </HostelOngoingTitle>

      <HostelRenewalTab carryParentState={carryParentState} />
      {confirm?.map((applicant, index) =>
        confirm?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <HostelConfirmCard
              applicant={applicant}
              onCancelHostelApplication={onCancelHostelApplication}
              onAllotBed={onAllotBed}
            />
          </div>
        ) : (
          <HostelConfirmCard
            key={index}
            applicant={applicant}
            onCancelHostelApplication={onCancelHostelApplication}
            onAllotBed={onAllotBed}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}

      {stepOpen === "CANCEL_APPLICANT" && (
        <CancelHostelApplication
          currentApplicant={currentApplicant}
          applicationId={currentApplicant?.appId}
          onRefetchWhenAction={onRefetchWhenAction}
          onClose={() => setStepOpen("")}
          viewAs={"RENEWAL"}
          huid={huid}
        />
      )}
      {stepOpen === "ALLOT_BED" && (
        <AllotHostelBed
          currentApplicant={currentApplicant}
          applicationId={currentApplicant?.appId}
          onRefetchWhenAction={onRefetchWhenAction}
          onClose={() => setStepOpen("")}
          unitId={huid}
          viewAs={"RENEWAL"}
        />
      )}
    </>
  );
};

export default HostelRenewalRenewed;
