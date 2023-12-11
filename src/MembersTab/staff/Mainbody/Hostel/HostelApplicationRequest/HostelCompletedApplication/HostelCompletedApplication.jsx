import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useGetCompletedApplicationList } from "../../../../../../hooks/member_tab/hostel-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import style from "../../../StaffAdmisionAdmin/AdmisionApplication/CompletedApplication/CompletedApplication.module.css";
import HostelApplicationCard from "./HostelApplicationCard";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";

const HostelCompletedApplication = ({
  hid,
  carryParentState,
  accessRole,
  accessApplication,
  accessTpye,
  callApi,
  pageOpenAs,
}) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [completed, setCompleted] = useState([]);
  const { scrollToTop } = useScrollbar();

  const { getCompletedApplicationList, getCompletedApplicationListRefetch } =
    useGetCompletedApplicationList({
      data: {
        hid: hid,
        page: page,
        limit: 10,
      },
      skip: !hid,
    });
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (hid) {
      setShowingDataLoading(true);
      getCompletedApplicationListRefetch();
    }
  }, [page, hid, getCompletedApplicationListRefetch]);

  useEffect(() => {
    if (getCompletedApplicationList?.completed) {
      setCompleted((prevState) =>
        [
          ...new Set(
            [...prevState, ...getCompletedApplicationList?.completed]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getCompletedApplicationList?.completed?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getCompletedApplicationList?.completed?.length === 10) setState(true);
    else setState(false);
  }, [getCompletedApplicationList?.completed]);
  return (
    <>
      <div className={style.remainingFeesBottom}>
        <div className={style.itemsContainer}>
          {completed?.map((comp, index) =>
            completed?.length === index + 1 ? (
              <div ref={ref} key={index}>
                <HostelApplicationCard
                  data={comp}
                  carryParentState={carryParentState}
                  accessRole={accessRole}
                  accessTpye={accessTpye}
                  callApi={callApi}
                  accessApplication={accessApplication}
                  pageOpenAs={pageOpenAs}
                />
              </div>
            ) : (
              <HostelApplicationCard
                key={index}
                data={comp}
                carryParentState={carryParentState}
                accessRole={accessRole}
                accessTpye={accessTpye}
                callApi={callApi}
                accessApplication={accessApplication}
                pageOpenAs={pageOpenAs}
              />
            )
          )}
          {showingDataLoading && <QvipleLoading />}
        </div>
      </div>
    </>
  );
};

export default HostelCompletedApplication;
