import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import FeedbackMonthCard from "./FeedbackMonthCard";
import style from "../../../Hostel/Hostel.module.css";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";

const DepartmentFeedback = ({ carryParentState }) => {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [feedbackList, setFeedbackList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);

  //   const { getHostelUnitList, getHostelUnitListRefetch } = useGetHostelUnitList({
  //     data: {
  //       hid: hid,
  //       page: page,
  //       limit: 10,
  //     },
  //     skip: !hid,
  //   });
  //   useEffect(() => {
  //     if (hid) {
  //       setShowingDataLoading(true);
  //       getHostelUnitListRefetch();
  //     }
  //   }, [hid, page, getHostelUnitListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  //   useEffect(() => {
  //     if (refetchStatus) {
  //       setFeedbackList(getHostelUnitList?.all_units);
  //       setShowingDataLoading(false);
  //       setRefetchStatus(false);
  //     } else {
  //       if (getHostelUnitList?.all_units) {
  //         setFeedbackList((prevState) =>
  //           [
  //             ...new Set(
  //               [...prevState, ...getHostelUnitList?.all_units]?.map(
  //                 JSON.stringify
  //               )
  //             ),
  //           ]?.map(JSON.parse)
  //         );
  //         setShowingDataLoading(false);
  //       } else if (getHostelUnitList?.all_units?.length === 0)
  //         setShowingDataLoading(false);
  //       else {
  //       }
  //     }
  //     if (getHostelUnitList?.all_units?.length === 10) setState(true);
  //     else setState(false);
  //   }, [getHostelUnitList?.all_units]);
  const onClose = () => {
    setAdd((pre) => !pre);
  };
  //   const onRefetchWhenCreate = () => {
  //     setPage(1);
  //     setRefetchStatus(true);
  //     setShowingDataLoading(true);
  //     getHostelUnitListRefetch();
  //   };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <h6 className={style.add_new_category} onClick={onClose}>
          {t("take_feedback_onec_in_month")}
        </h6>
      </div>
      <FeedbackMonthCard />
      {feedbackList?.map((hostelUnit, index) =>
        feedbackList?.length === index + 1 ? (
          <div ref={ref} key={hostelUnit?._id}>
            <FeedbackMonthCard
              hostelUnit={hostelUnit}
              carryParentState={carryParentState}
              viewAs={"CALENDER_TYPE"}
            />
          </div>
        ) : (
          <FeedbackMonthCard
            hostelUnit={hostelUnit}
            key={hostelUnit?._id}
            carryParentState={carryParentState}
            viewAs={"CALENDER_TYPE"}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default DepartmentFeedback;
