import React, { useEffect, useState } from "react";
import StudentInternalFeesCard from "./StudentInternalFeesCard";
import style from "./StudentAllFeesData.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import { useInView } from "react-intersection-observer";
import { useStudentDepartmentFees } from "../../../../../hooks/member_tab/admission-api";

const StudentInternalFees = ({ setAllContent, setCharges, sid, viewAs }) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [internalFeesList, setInternalFeesList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { studentDepartmentFees, studentDepartmentFeesRefetch } =
    useStudentDepartmentFees({
      data: {
        sid: sid,
        page: page,
        limit: 10,
      },
      skip: !sid,
    });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (sid) {
      studentDepartmentFeesRefetch();
      setShowingDataLoading(true);
    }
  }, [page, sid, studentDepartmentFeesRefetch]);

  useEffect(() => {
    if (refetchStatus) {
      setInternalFeesList(studentDepartmentFees?.all_internal);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
      if (studentDepartmentFees?.all_internal) {
        setInternalFeesList((prevState) =>
          [
            ...new Set(
              [...prevState, ...studentDepartmentFees?.all_internal].map(
                JSON.stringify
              )
            ),
          ].map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (studentDepartmentFees?.all_internal?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (studentDepartmentFees?.all_internal?.length === 10) setState(true);
    else setState(false);
  }, [studentDepartmentFees?.all_internal]);

  return (
    <div className={style.student_admission_fees_container}>
      {/* <div className={style.student_internal_card}>
        <StudentInternalFeesCard is_paid="Not Paid" is_static />
      </div> */}
      {internalFeesList?.map((fees, index) =>
        internalFeesList?.length === index + 1 ? (
          <div
            className={style.student_internal_card}
            ref={ref}
            key={fees?._id}
          >
            <StudentInternalFeesCard
              feesName={fees?.internal_fee_reason}
              amount={fees?.internal_fee_amount}
              dateOffCreation={fees?.fees?.feeDate}
              is_paid={fees?.internal_fee_status}
              feesId={fees?._id}
              setAllContent={setAllContent}
              setCharges={setCharges}
              is_checklist={
                fees?.internal_fee_type === "Checklist" ||
                fees?.internal_fee_type === "Backlog" ||
                fees?.internal_fee_type === "Library Fees"
                  ? true
                  : false
              }
              rid={fees?.fee_receipt?._id}
              transactionDate={fees?.fee_receipt?.created_at}
              transactionMode={fees?.fee_receipt?.fee_payment_mode}
              moduleType={fees?.internal_fee_type}
              sid={sid}
              viewAs={viewAs}
              bookId={fees?.book ?? ""}
              validateId={fees?.library?._id}
              financeId={fees?.library?.institute?.financeDepart?.[0]}
            />
          </div>
        ) : (
          <div className={style.student_internal_card} key={fees?._id}>
            <StudentInternalFeesCard
              feesName={fees?.internal_fee_reason}
              amount={fees?.internal_fee_amount}
              dateOffCreation={fees?.fees?.feeDate}
              is_paid={fees?.internal_fee_status}
              feesId={fees?._id}
              setAllContent={setAllContent}
              setCharges={setCharges}
              is_checklist={
                fees?.internal_fee_type === "Checklist" ||
                fees?.internal_fee_type === "Backlog" ||
                fees?.internal_fee_type === "Library Fees"
                  ? true
                  : false
              }
              rid={fees?.fee_receipt?._id}
              transactionDate={fees?.fee_receipt?.created_at}
              transactionMode={fees?.fee_receipt?.fee_payment_mode}
              moduleType={fees?.internal_fee_type}
              sid={sid}
              viewAs={viewAs}
              bookId={fees?.book ?? ""}
              validateId={fees?.library?._id}
              financeId={fees?.library?.institute?.financeDepart?.[0]}
            />
          </div>
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {!showingDataLoading && internalFeesList?.length === 0 && (
        <EmptyInfo
          title={"No department fees created yet."}
          customStyleContainer={{
            height: "15rem",
          }}
        />
      )}
    </div>
  );
};

export default StudentInternalFees;
