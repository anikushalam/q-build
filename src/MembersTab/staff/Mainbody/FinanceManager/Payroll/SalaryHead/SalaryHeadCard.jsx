import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "../Payroll.module.css";

const SalaryHeadCard = ({ head, carryParentState }) => {
  const params = useParams();
  return (
    <Link
      to={`/q/${params.username}/member/finance?a=payroll&n=head&info`}
      state={{
        ...carryParentState,
        pmid: head?._id,
        salaryHead: head?.payroll_head_name,
        salaryType: head?.payroll_head_type,
      }}
    >
      <div className={style.salary_head_card} key={head?._id}>
        <img src="/images/fees-category-icon.svg" alt="categor icon" />
        <h6>{head?.payroll_head_name ?? ""}</h6>
      </div>
    </Link>
  );
};

export default SalaryHeadCard;
