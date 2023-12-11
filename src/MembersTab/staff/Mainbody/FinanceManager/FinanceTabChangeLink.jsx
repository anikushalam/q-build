import React from "react";
import { Link, useParams } from "react-router-dom";
const CASHRECEIPTACCESS = [
  "submission",
  "submission&n=admission",
  "submission&n=library",
  "student",
];
const INVENTORYACCESS = ["inventory", "student"];
const FEEMASTERACCESS = ["fee&n=category", "fee&n=structure", "student"];
const PAYROLLACCESS = ["payroll", "student"];
const DEPOSITACCESS = ["deposit", "student"];
const BANKACCESS = ["bank", "student"];
const EXPORTDATAACCESSS = ["export", "student"];

const FinanceTabChangeLink = ({
  carryParentState,
  activeTab,
  accessRole,
  callApi,
  children,
}) => {
  const params = useParams();

  return (
    <>
      {accessRole === "CASH_RECEIPT_ACCESS" ? (
        CASHRECEIPTACCESS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/finance?a=${activeTab}`}
            state={{ ...carryParentState }}
          >
            {children}
          </Link>
        ) : (
          <div
            style={{
              opacity: "0.5",
            }}
          >
            {children}
          </div>
        )
      ) : accessRole === "INVENTORY_ACCESS" ? (
        INVENTORYACCESS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/finance?a=${activeTab}`}
            state={{ ...carryParentState }}
          >
            {children}
          </Link>
        ) : (
          <div
            style={{
              opacity: "0.5",
            }}
          >
            {children}
          </div>
        )
      ) : accessRole === "FEE_MASTER_ACCESS" ? (
        FEEMASTERACCESS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/finance?a=${activeTab}`}
            state={{ ...carryParentState }}
          >
            {children}
          </Link>
        ) : (
          <div
            style={{
              opacity: "0.5",
            }}
          >
            {children}
          </div>
        )
      ) : accessRole === "PAYROLL_ACCESS" ? (
        PAYROLLACCESS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/finance?a=${activeTab}`}
            state={{ ...carryParentState }}
          >
            {children}
          </Link>
        ) : (
          <div
            style={{
              opacity: "0.5",
            }}
          >
            {children}
          </div>
        )
      ) : accessRole === "DEPOSIT_ACCESS" ? (
        DEPOSITACCESS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/finance?a=${activeTab}`}
            state={{ ...carryParentState }}
          >
            {children}
          </Link>
        ) : (
          <div
            style={{
              opacity: "0.5",
            }}
          >
            {children}
          </div>
        )
      ) : accessRole === "BANK_ACCOUNT_ACCESS" ? (
        BANKACCESS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/finance?a=${activeTab}`}
            state={{ ...carryParentState }}
          >
            {children}
          </Link>
        ) : (
          <div
            style={{
              opacity: "0.5",
            }}
          >
            {children}
          </div>
        )
      ) : accessRole === "DATA_EXPORT_ACCESS" ? (
        EXPORTDATAACCESSS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/finance?a=${activeTab}`}
            state={{ ...carryParentState }}
          >
            {children}
          </Link>
        ) : (
          <div
            style={{
              opacity: "0.5",
            }}
          >
            {children}
          </div>
        )
      ) : callApi ? (
        <Link
          to={`/q/${params.username}/member/finance?a=${activeTab}`}
          state={{ ...carryParentState }}
        >
          {children}
        </Link>
      ) : (
        <div
          style={{
            opacity: "0.5",
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default FinanceTabChangeLink;
