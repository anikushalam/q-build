import React from "react";
import { Link, useParams } from "react-router-dom";
const FEESACCESSTAB = [
  "receipt&n=request",
  "receipt&n=accept",
  "receipt&n=reject",
];
const MULTIAPPACCESS = [
  "request",
  "request&ongoing&n=application",
  "request&ongoing&n=select",
  "request&ongoing&n=confirm",
  "request&ongoing&n=allot",
  "request&ongoing&n=cancel",
  "request&ongoing&n=confirm&s=multi",
];
const RENEWALACCESS = [
  "request&renewal",
  "request&unit&renewal",
  "request&renewal&n=application",
  "request&renewal&n=select",
  "request&renewal&n=confirm",
  "request&renewal&n=allot",
  "request&renewal&n=cancel",
  "request&renewal&n=confirm&s=multi",
];
const DEPOSITACCESS = ["deposit"];
const COMPLAINTACCESS = ["complaint"];
const PENDINGFEESACCESSS = ["pending"];
const FEEMASTERACCESSS = ["fee", "fee&n=category", "fee&n=structure"];
const RULEACCESSS = ["notice", "rule"];
const INCOMEACCESSS = ["income"];
const APPLICATIONACCESSS = ["request", "request&ongoing&n=application"];
const SELECTEDACCESSS = ["request", "request&ongoing&n=select"];
const CONFIRMEDACCESSS = [
  "request",
  "request&ongoing&n=confirm",
  "request&ongoing&n=confirm&s=multi",
];
const ALLOTTEDACCESSS = ["request", "request&ongoing&n=allot"];
const CANCELLEDACCESSS = ["request", "request&ongoing&n=cancel"];

const EXPORTDATAACCESSS = ["export"];

const HostelTabChangeLink = ({
  carryParentState,
  activeTab,
  accessRole,
  accessTpye,
  callApi,
  children,
}) => {
  const params = useParams();

  return (
    <>
      {/* <Link
        to={`/q/${params.username}/member/hostel?a=${activeTab}`}
        state={{ ...carryParentState }}
      >
        {children}
      </Link> */}
      {accessRole === "PENDING_FEE_ACCESS" ? (
        PENDINGFEESACCESSS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
      ) : accessRole === "ALL_FEE_ACCESS" ? (
        FEESACCESSTAB?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
      ) : accessRole === "MULTI_APP_ACCESS" ? (
        MULTIAPPACCESS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
      ) : accessRole === "RENEWAL_UNIT_ACCESS" ? (
        RENEWALACCESS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
            to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
      ) : accessRole === "PENDING_FEE_ACCESS" ? (
        PENDINGFEESACCESSS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
      ) : accessRole === "COMPAINT_ACCESS" ? (
        COMPLAINTACCESS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
        FEEMASTERACCESSS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
      ) : accessRole === "RULES_AND_ANNOUNCEMENT_ACCESS" ? (
        RULEACCESSS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
      ) : accessRole === "INCOME_AND_EXPENSE_ACCESS" ? (
        INCOMEACCESSS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
      ) : accessRole === "ONE_TAB_ACCESS" ? (
        accessTpye === "Application" ? (
          APPLICATIONACCESSS?.includes(activeTab) ? (
            <Link
              to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
        ) : accessTpye === "Selected" ? (
          SELECTEDACCESSS?.includes(activeTab) ? (
            <Link
              to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
        ) : accessTpye === "Confirmed" ? (
          CONFIRMEDACCESSS?.includes(activeTab) ? (
            <Link
              to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
        ) : accessTpye === "Allotted" ? (
          ALLOTTEDACCESSS?.includes(activeTab) ? (
            <Link
              to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
        ) : CANCELLEDACCESSS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
            to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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
          to={`/q/${params.username}/member/hostel?a=${activeTab}`}
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

export default HostelTabChangeLink;
