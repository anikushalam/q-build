import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";
import HostelOngoingTitle from "../../HostelOngoingTitle";
import HostelRenewalTab from "../HostelRenewalTab";
import { useGetRenewalApplicationListByHostel } from "../../../../../../../hooks/member_tab/hostel-api";
import HostelRenewalReqCard from "./HostelRenewalReqCard";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";
const HostelRenewalApplication = ({
  carryParentState,
  applicationDetail,
  huid,
  hostelId,
  unitName,
  accessRole,
}) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView();
  const [request, setRequest] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const {
    getRenewalApplicationListByHostel,
    getRenewalApplicationListByHostelRefetch,
  } = useGetRenewalApplicationListByHostel({
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
      getRenewalApplicationListByHostelRefetch();
    }
  }, [page, huid, getRenewalApplicationListByHostelRefetch, search]);

  useEffect(() => {
    if (search) {
      setRequest(getRenewalApplicationListByHostel?.request);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setRequest(getRenewalApplicationListByHostel?.request);
        setRefetchStatus(false);
        setShowingDataLoading(false);
      } else {
        if (getRenewalApplicationListByHostel?.request) {
          setRequest((prevState) =>
            [
              ...new Set(
                [
                  ...prevState,
                  ...getRenewalApplicationListByHostel?.request,
                ]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getRenewalApplicationListByHostel?.request?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }

    if (getRenewalApplicationListByHostel?.request?.length === 10)
      setState(true);
    else setState(false);
  }, [getRenewalApplicationListByHostel?.request]);

  const onRefetchWhenSelect = () => {
    setPage(1);
    getRenewalApplicationListByHostelRefetch();
    setRefetchStatus(true);
  };

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
          placeholder="Search requests..."
          onChange={onSearchEvent}
        />
      </HostelOngoingTitle>
      <HostelRenewalTab carryParentState={carryParentState} />
      {request?.map((applicant, index) =>
        request?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <HostelRenewalReqCard
              applicant={applicant}
              onRefetchWhenSelect={onRefetchWhenSelect}
              hostelId={hostelId}
              huid={huid}
            />
          </div>
        ) : (
          <HostelRenewalReqCard
            key={index}
            applicant={applicant}
            onRefetchWhenSelect={onRefetchWhenSelect}
            hostelId={hostelId}
            huid={huid}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default HostelRenewalApplication;
