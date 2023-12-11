import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import HostelOngoingTitle from "../../HostelOngoingTitle";
import { useGetRenewalSelectListByHostel } from "../../../../../../../hooks/member_tab/hostel-api";
import HostelRenewalSelectCard from "./HostelRenewalSelectCard";
import HostelRenewalTab from "../HostelRenewalTab";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";
import CollectHostelFees from "../../HostelSelected/CollectHostelFees";
const HostelRenewalSelect = ({ carryParentState, huid, unitName }) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView();
  const [select, setSelect] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [stepOpen, setStepOpen] = useState("");
  const [currentApplicant, setCurrentApplicant] = useState("");
  const { getRenewalSelectListByHostel, getRenewalSelectListByHostelRefetch } =
    useGetRenewalSelectListByHostel({
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
      getRenewalSelectListByHostelRefetch();
    }
  }, [page, huid, getRenewalSelectListByHostelRefetch, search]);

  useEffect(() => {
    if (search) {
      setSelect(getRenewalSelectListByHostel?.select);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setSelect(getRenewalSelectListByHostel?.select);
        setRefetchStatus(false);
        setShowingDataLoading(false);
      } else {
        if (getRenewalSelectListByHostel?.select) {
          setSelect((prevState) =>
            [
              ...new Set(
                [...prevState, ...getRenewalSelectListByHostel?.select]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getRenewalSelectListByHostel?.select?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }

    if (getRenewalSelectListByHostel?.select?.length === 10) setState(true);
    else setState(false);
  }, [getRenewalSelectListByHostel?.select]);

  const onRefetchWhenConfirm = () => {
    setPage(1);
    getRenewalSelectListByHostelRefetch();
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

  // console.info("asdbsmabfd", currentApplicant);
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
      {select?.map((applicant, index) =>
        select?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <HostelRenewalSelectCard
              applicant={applicant}
              onSelectOffileFees={onSelectOffileFees}
            />
          </div>
        ) : (
          <HostelRenewalSelectCard
            key={index}
            applicant={applicant}
            onSelectOffileFees={onSelectOffileFees}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}

      {stepOpen === "COLLECT_FEES" && (
        <CollectHostelFees
          applicant={currentApplicant}
          applicationId={currentApplicant?.appId}
          huid={huid}
          onRefetchWhenConfirm={onRefetchWhenConfirm}
          onClose={() => setStepOpen("")}
          viewAs={"RENEWAL"}
        />
      )}
    </>
  );
};

export default HostelRenewalSelect;
