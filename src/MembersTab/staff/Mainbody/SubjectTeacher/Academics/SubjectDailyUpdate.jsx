import React, { useEffect, useState } from "react";
import SubjectDailyUpdateCard from "./SubjectDailyUpdateCard";
import { useInView } from "react-intersection-observer";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
import { useGetAllDailySubject } from "../../../../../hooks/member_tab/subject-api";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import QvipleLoading from "../../../../../Loader/QvipleLoading";

const SubjectDailyUpdate = ({
  sid,
  reftechStatus,
  setReftechStatus,
  isDepartment,
}) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [dailyList, setDailyList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { scrollToTop } = useScrollbar();

  const { getAllDailySubject, getAllDailySubjectRefetch } =
    useGetAllDailySubject({
      data: {
        sid: sid,
        page: reftechStatus ? 1 : page,
        limit: 10,
      },
      skip: !sid,
    });

  useEffect(() => {
    if (reftechStatus) {
      setPage((page) => (page = 1));
      setReftechStatus(false);
      getAllDailySubjectRefetch();
    }
  }, [reftechStatus]);
  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      getAllDailySubjectRefetch();
    }
  }, [sid, page, getAllDailySubjectRefetch]);
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getAllDailySubject?.dailyUpdate) {
      if (page === 1) {
        setDailyList(getAllDailySubject?.dailyUpdate);
      } else {
        setDailyList((prev) =>
          [
            ...new Set(
              [...prev, ...getAllDailySubject?.dailyUpdate].map(JSON.stringify)
            ),
          ].map(JSON.parse)
        );
      }
      setShowingDataLoading(false);
    } else if (getAllDailySubject?.dailyUpdate?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
    if (getAllDailySubject?.dailyUpdate?.length === 10) setState(true);
    else setState(false);
  }, [getAllDailySubject?.dailyUpdate]);

  const onParentRefetch = () => {
    setPage((page) => (page = 1));
    setShowingDataLoading(true);
    getAllDailySubjectRefetch();
  };
  return (
    <>
      {dailyList?.map((daily, index) =>
        dailyList?.length === index + 1 ? (
          <div ref={ref} key={daily?._id}>
            <SubjectDailyUpdateCard
              daily={daily}
              sid={sid}
              onParentRefetch={onParentRefetch}
              isView={isDepartment ? "STUDENT" : ""}
            />
          </div>
        ) : (
          <SubjectDailyUpdateCard
            key={daily?._id}
            daily={daily}
            sid={sid}
            onParentRefetch={onParentRefetch}
            isView={isDepartment ? "STUDENT" : ""}
          />
        )
      )}

      {!showingDataLoading && !getAllDailySubject?.dailyUpdate?.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "9rem",
          }}
          title={"No academics found yet."}
        />
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
    </>
  );
};

export default SubjectDailyUpdate;
