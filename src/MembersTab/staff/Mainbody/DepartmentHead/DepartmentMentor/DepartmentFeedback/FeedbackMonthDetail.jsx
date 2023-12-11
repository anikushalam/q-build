import React, { useEffect, useState } from "react";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import MentorCard from "../Mentor/MentorCard";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import style from "../../../Hostel/Hostel.module.css";
import { useNavigate } from "react-router-dom";

const FeedbackMonthDetail = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [mentorList, setMentorList] = useState([]);

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
  //       setMentorList(getHostelUnitList?.all_units);
  //       setShowingDataLoading(false);
  //       setRefetchStatus(false);
  //     } else {
  //       if (getHostelUnitList?.all_units) {
  //         setMentorList((prevState) =>
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

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  return (
    <>
      <div
        className={style.with_search}
        style={{
          justifyContent: "flex-start",
          gap: "1rem",
        }}
      >
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <h6>15 February 2023</h6>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />

      {mentorList?.map((hostelUnit, index) =>
        mentorList?.length === index + 1 ? (
          <div ref={ref} key={hostelUnit?._id}>
            <MentorCard hostelUnit={hostelUnit} viewAs="MENTOR_DETAIL" />
          </div>
        ) : (
          <MentorCard
            hostelUnit={hostelUnit}
            key={hostelUnit?._id}
            viewAs="MENTOR_DETAIL"
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default FeedbackMonthDetail;
