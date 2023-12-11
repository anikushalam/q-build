import React, { useEffect, useState } from "react";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import MentorCard from "../Mentor/MentorCard";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import style from "../../../Hostel/Hostel.module.css";
import { useNavigate } from "react-router-dom";
import FeedbackQuestionCard from "./FeedbackQuestionCard";
import { useTranslation } from "react-i18next";
const FeedbackMentor = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [questionList, setQuestionList] = useState([]);

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
  //       setQuestionList(getHostelUnitList?.all_units);
  //       setShowingDataLoading(false);
  //       setRefetchStatus(false);
  //     } else {
  //       if (getHostelUnitList?.all_units) {
  //         setQuestionList((prevState) =>
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
        <h6>{t("feedback")}</h6>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />
      <MentorCard viewAs="MENTOR_DETAIL" />

      {questionList?.map((hostelUnit, index) =>
        questionList?.length === index + 1 ? (
          <div ref={ref} key={hostelUnit?._id}>
            <FeedbackQuestionCard hostelUnit={hostelUnit} />
          </div>
        ) : (
          <FeedbackQuestionCard hostelUnit={hostelUnit} key={hostelUnit?._id} />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default FeedbackMentor;
