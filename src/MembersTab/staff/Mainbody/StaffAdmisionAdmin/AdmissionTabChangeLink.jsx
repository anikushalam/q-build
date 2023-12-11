import React from "react";
import { Link, useParams } from "react-router-dom";
const INQUIRYTAB = ["enquiry", "student"];
const FEESACCESSTAB = [
  "receipt&n=request",
  "receipt&n=accept",
  "receipt&n=reject",
  "student",
];
const MULTIAPPACCESS = [
  "ongoing",
  "ongoing&n=application",
  "ongoing&n=select",
  "ongoing&n=confirm",
  "ongoing&n=allot",
  "ongoing&n=cancel",
  "ongoing&n=mulitple",
  "student",
];
const SCHOLARSHIPACCESS = ["scholarship", "scholarship&n", "student"];
const REFUNDACCESS = ["refund", "student"];
const PENDINGFEESACCESSS = ["pending", "student"];
const APPLICATIONACCESSS = ["ongoing", "ongoing&n=application", "student"];
const SELECTEDACCESSS = ["ongoing", "ongoing&n=select", "student"];
const CONFIRMEDACCESSS = [
  "ongoing",
  "ongoing&n=confirm",
  "ongoing&n=mulitple",
  "student",
];
const ALLOTTEDACCESSS = ["ongoing", "ongoing&n=allot", "student"];
const CANCELLEDACCESSS = ["ongoing", "ongoing&n=cancel", "student"];
const EXPORTDATAACCESSS = ["export", "student"];

const AdmissionTabChangeLink = ({
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
      {accessRole === "INQUIRY_ACCESS" ? (
        INQUIRYTAB?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/admission?a=${activeTab}`}
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
            to={`/q/${params.username}/member/admission?a=${activeTab}`}
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
            to={`/q/${params.username}/member/admission?a=${activeTab}`}
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
      ) : accessRole === "SCHOLARSHIP_ACCESS" ? (
        SCHOLARSHIPACCESS?.includes(activeTab?.substring(0, 11)) ? (
          <Link
            to={`/q/${params.username}/member/admission?a=${activeTab}`}
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
      ) : accessRole === "REFUND_ACCESS" ? (
        REFUNDACCESS?.includes(activeTab) ? (
          <Link
            to={`/q/${params.username}/member/admission?a=${activeTab}`}
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
            to={`/q/${params.username}/member/admission?a=${activeTab}`}
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
              to={`/q/${params.username}/member/admission?a=${activeTab}`}
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
              to={`/q/${params.username}/member/admission?a=${activeTab}`}
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
              to={`/q/${params.username}/member/admission?a=${activeTab}`}
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
              to={`/q/${params.username}/member/admission?a=${activeTab}`}
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
            to={`/q/${params.username}/member/admission?a=${activeTab}`}
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
            to={`/q/${params.username}/member/admission?a=${activeTab}`}
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
          to={`/q/${params.username}/member/admission?a=${activeTab}`}
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

export default AdmissionTabChangeLink;
