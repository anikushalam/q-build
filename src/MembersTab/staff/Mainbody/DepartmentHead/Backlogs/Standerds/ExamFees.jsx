import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useGetAllExamFeeStructure } from "../../../../../../hooks/member_tab/department-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import ExamFeesCard from "./ExamFeesCard";
import UpdateExamFees from "./UpdateExamFees";
import ExamFeesDetail from "./ExamFeesDetail";

const ExamFees = ({ did }) => {
  const [add, setAdd] = useState("");
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [examFeeList, setExamFeeList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [studentList, setStudentList] = useState("");
  const { getAllExamFeeStructure, getAllExamFeeStructureRefetch } =
    useGetAllExamFeeStructure({
      data: {
        did: did,
        page: page,
        limit: 10,
      },
      skip: !did,
    });
  useEffect(() => {
    if (did) {
      setShowingDataLoading(true);
      getAllExamFeeStructureRefetch();
    }
  }, [did, page, getAllExamFeeStructureRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setExamFeeList(getAllExamFeeStructure?.all_exam_fee);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (getAllExamFeeStructure?.all_exam_fee) {
        setExamFeeList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getAllExamFeeStructure?.all_exam_fee]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getAllExamFeeStructure?.all_exam_fee?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getAllExamFeeStructure?.all_exam_fee?.length === 10) setState(true);
    else setState(false);
  }, [getAllExamFeeStructure?.all_exam_fee]);
  const onRefetchWhenUpdate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getAllExamFeeStructureRefetch();
  };
  return (
    <>
      {!studentList &&
        examFeeList?.map((examFees, index) =>
          examFeeList?.length === index + 1 ? (
            <div ref={ref} key={examFees?._id}>
              <ExamFeesCard
                examFees={examFees}
                isFees={
                  examFees?.exam_fee_status === "Static Department Linked"
                    ? true
                    : false
                }
                setAdd={setAdd}
                setStudentList={setStudentList}
              />
            </div>
          ) : (
            <ExamFeesCard
              examFees={examFees}
              key={examFees?._id}
              isFees={
                examFees?.exam_fee_status === "Static Department Linked"
                  ? true
                  : false
              }
              setAdd={setAdd}
              setStudentList={setStudentList}
            />
          )
        )}

      {showingDataLoading && <QvipleLoading />}
      {add && (
        <UpdateExamFees
          onClose={() => setAdd("")}
          onRefetch={onRefetchWhenUpdate}
          examFees={add}
        />
      )}

      {studentList && (
        <ExamFeesDetail
          examFees={studentList}
          onClose={() => setStudentList("")}
        />
      )}
    </>
  );
};

export default ExamFees;
