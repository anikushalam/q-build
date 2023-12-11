import React, { useCallback, useEffect, useState } from "react";
import HostelOngoingTitle from "../HostelOngoingTitle";
import HostelRenewalTab from "./HostelRenewalTab";
import { useInView } from "react-intersection-observer";
import HostelCancelCard from "../HostelCancelled/HostelCancelCard";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { useGetRenewalCancelListByHostel } from "../../../../../../hooks/member_tab/hostel-api";
import { debounce } from "lodash";

const RenewalCancelled = ({ carryParentState, huid, unitName }) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [cancel, setCancel] = useState([]);
  const [search, setSearch] = useState("");
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { getRenewalCancelListByHostel, getRenewalCancelListByHostelRefetch } =
    useGetRenewalCancelListByHostel({
      data: {
        huid: huid,
        page: page,
        limit: 10,
        search: search ? search : "",
      },
      skip: !huid,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (huid) {
      setShowingDataLoading(true);
      getRenewalCancelListByHostelRefetch();
    }
  }, [page, huid, getRenewalCancelListByHostelRefetch]);

  useEffect(() => {
    if (search) {
      setCancel(getRenewalCancelListByHostel?.cancel);
      setShowingDataLoading(false);
    } else {
      if (getRenewalCancelListByHostel?.cancel) {
        setCancel((prevState) =>
          [
            ...new Set(
              [...prevState, ...getRenewalCancelListByHostel?.cancel]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getRenewalCancelListByHostel?.cancel?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getRenewalCancelListByHostel?.cancel?.length === 10) setState(true);
    else setState(false);
  }, [getRenewalCancelListByHostel?.cancel]);

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    deb(e.target.value);
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

export default RenewalCancelled;
