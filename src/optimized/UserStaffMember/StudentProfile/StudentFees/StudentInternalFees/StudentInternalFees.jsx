import { useOneStudentInternalFees } from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { nextPage } from "@/Utils/Functions/nextPage";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import StudentInternalFeesCard from "./StudentInternalFeesCard";
import style from "../StudentFees.module.css";
import Loading from "@/Loader/Loading";

const StudentInternalFees = ({ sid }) => {
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView();

  const { oneStudentInternalFees, oneStudentInternalFeesLoading } =
    useOneStudentInternalFees({
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
    if (oneStudentInternalFees?.length) {
      nextPage(oneStudentInternalFees?.length, setState);
    }
  }, [oneStudentInternalFees?.length]);

  return (
    <div className={style.student_admission_fees_container}>
      {oneStudentInternalFeesLoading && <Loading />}

      {oneStudentInternalFees?.map((fees, index) =>
        oneStudentInternalFees?.length === index + 1 ? (
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
            />
          </div>
        ) : (
          <div className={style.student_internal_card} key={fees?._id}>
            <StudentInternalFeesCard
              feesName={fees?.internal_fee_reason}
              amount={fees?.internal_fee_amount}
              dateOffCreation={fees?.fees?.feeDate}
              is_paid={fees?.internal_fee_status}
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
            />
          </div>
        )
      )}
    </div>
  );
};

export default StudentInternalFees;
