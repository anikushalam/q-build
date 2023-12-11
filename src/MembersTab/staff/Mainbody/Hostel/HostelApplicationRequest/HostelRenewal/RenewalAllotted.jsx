import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import HostelRenewalTab from "./HostelRenewalTab";
import HostelAllotCard from "../HostelAllotted/HostelAllotCard";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import HostelOngoingTitle from "../HostelOngoingTitle";
import { useGetRenewalAllotListByHostel } from "../../../../../../hooks/member_tab/hostel-api";

const RenewalAllotted = ({ carryParentState, huid, unitName }) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [allotted, setAllotted] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { getRenewalAllotListByHostel, getRenewalAllotListByHostelRefetch } =
    useGetRenewalAllotListByHostel({
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
      getRenewalAllotListByHostelRefetch();
    }
  }, [page, huid, getRenewalAllotListByHostelRefetch, search]);

  useEffect(() => {
    if (search) {
      setAllotted(getRenewalAllotListByHostel?.allot);
      setShowingDataLoading(false);
    } else {
      if (getRenewalAllotListByHostel?.allot) {
        setAllotted((prevState) =>
          [
            ...new Set(
              [...prevState, ...getRenewalAllotListByHostel?.allot]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getRenewalAllotListByHostel?.allot?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getRenewalAllotListByHostel?.allot?.length === 10) setState(true);
    else setState(false);
  }, [getRenewalAllotListByHostel?.allot]);

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
      {allotted?.map((applicant, index) =>
        allotted?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <HostelAllotCard applicant={applicant} />
          </div>
        ) : (
          <HostelAllotCard key={index} applicant={applicant} />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default RenewalAllotted;
