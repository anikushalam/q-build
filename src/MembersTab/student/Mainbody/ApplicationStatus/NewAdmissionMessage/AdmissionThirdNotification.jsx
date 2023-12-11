import React, { useEffect, useState } from "react";
import style from "../ApplicationStatus.module.css";
import ApplicationPreviewDetail from "../../../../staff/Mainbody/FinanceManager/FeesStructure/ApplicationPreviewDetail";
import DocumentPreview from "../DocumentPreview";
import { useGetBankByFinance } from "../../../../../hooks/member_tab/finance-api";
import PopupWrapper from "../../../../staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import UPIProcess from "../ConfirmStudentAdmisionModal/GatewayProcess/UPIProcess";
import DemandProcess from "../ConfirmStudentAdmisionModal/GatewayProcess/DemandProcess";
import NEFTProcess from "../ConfirmStudentAdmisionModal/GatewayProcess/NEFTProcess";
import ChequeProcess from "../ConfirmStudentAdmisionModal/GatewayProcess/ChequeProcess";

const AdmissionThirdNotification = ({ message }) => {
  const [openDocument, setOpenDocument] = useState("");
  const [structureId, setStructureId] = useState("");
  const [openBank, setOpenBank] = useState("");
  const { getBankByFinance, getBankByFinanceRefetch } = useGetBankByFinance({
    data: {
      fid: message?.finance,
      flow: "",
      filter_by: "",
    },
    skip: !message?.finance,
  });
  useEffect(() => {
    if (message?.finance) getBankByFinanceRefetch();
  }, [message?.finance, getBankByFinanceRefetch]);
  return (
    <>
      <p>
        Your admission process has been started
        <span
          style={{
            fontWeight: "500",
          }}
        >
          {` ${message?.applicationId?.applicationName ?? ""}`}.
        </span>
      </p>
      <p>
        Visit{" "}
        <span
          style={{
            fontWeight: "500",
          }}
        >
          {message?.instituteId?.insName}
        </span>{" "}
        with required documents (
        <span
          style={{
            color: "#002BBE",
            cursor: "pointer",
          }}
          title="View Document Preview"
          onClick={() =>
            setOpenDocument(message?.applicationId?.admissionAdmin ?? "")
          }
        >
          Click to view Documents
        </span>{" "}
        ) and applicable fees{" "}
        <span
          style={{
            fontWeight: "500",
          }}
        >
          Rs.{message?.feeStructure?.applicable_fees ?? 0} ({" "}
        </span>
        <span
          style={{
            color: "#002BBE",
            cursor: "pointer",
          }}
          title="View fees structure"
          onClick={() => setStructureId(message?.feeStructure?._id ?? "")}
        >
          Click to view in detail
        </span>{" "}
        ).
      </p>
      <p
        style={{
          fontWeight: "500",
          marginBottom: "0.5rem",
        }}
      >
        Payment modes available:
      </p>
      <p
        style={{
          marginBottom: "0.5rem",
          display: "flex",
        }}
      >
        <div className={style.bullet_mark} />
        Online: UPI, Debit Card, Credit Card, Net banking & other payment apps
        (Phonepe, Google pay, Paytm)
      </p>
      {getBankByFinance?.bank_query?.cash && (
        <p
          style={{
            marginBottom: "0.5rem",
            display: "flex",
          }}
        >
          <div className={style.bullet_mark} />
          Cash
        </p>
      )}
      {getBankByFinance?.bank_query?.upi_transfer && (
        <p
          style={{
            marginBottom: "0.5rem",
            display: "flex",
          }}
        >
          <div className={style.bullet_mark} />
          UPI Transfer ({" "}
          <span
            style={{
              color: "#002BBE",
              cursor: "pointer",
            }}
            onClick={() => setOpenBank("UPI")}
          >
            {" "}
            Bank Details
          </span>
          )
        </p>
      )}
      {getBankByFinance?.bank_query?.demand_draft && (
        <p
          style={{
            marginBottom: "0.5rem",
            display: "flex",
          }}
        >
          <div className={style.bullet_mark} />
          Demand Draft ({" "}
          <span
            style={{
              color: "#002BBE",
              cursor: "pointer",
            }}
            onClick={() => setOpenBank("DEMAND")}
          >
            {" "}
            Bank Details
          </span>
          )
        </p>
      )}
      {getBankByFinance?.bank_query?.net_banking && (
        <p
          style={{
            marginBottom: "0.5rem",
            display: "flex",
          }}
        >
          <div className={style.bullet_mark} />
          NEFT/RTGS/IMPS ({" "}
          <span
            style={{
              color: "#002BBE",
              cursor: "pointer",
            }}
            onClick={() => setOpenBank("RTG")}
          >
            {" "}
            Bank Details
          </span>
          )
        </p>
      )}
      {getBankByFinance?.bank_query?.cheque && (
        <p
          style={{
            marginBottom: "0.5rem",
            display: "flex",
          }}
        >
          <div className={style.bullet_mark} />
          Cheque ({" "}
          <span
            style={{
              color: "#002BBE",
              cursor: "pointer",
            }}
            onClick={() => setOpenBank("CHEQUE")}
          >
            {" "}
            Bank Details
          </span>
          )
        </p>
      )}
      {openDocument && (
        <DocumentPreview
          admissionId={openDocument}
          onClose={() => setOpenDocument("")}
        />
      )}
      {structureId && (
        <ApplicationPreviewDetail
          structureId={structureId}
          setStructureId={setStructureId}
          viewAs="HOSTEL_SEARCH"
        />
      )}
      {openBank && (
        <PopupWrapper onClose={() => setOpenBank("")}>
          {openBank === "UPI" ? (
            <UPIProcess
              financeId={message?.finance}
              flowAs={"Department"}
              departmentId={message?.applicationId?.applicationDepartment ?? ""}
              viewAs="APPLICATION_STATUS"
              setIndex={() => setOpenBank("")}
            />
          ) : openBank === "DEMAND" ? (
            <DemandProcess
              financeId={message?.finance}
              flowAs={"Department"}
              departmentId={message?.applicationId?.applicationDepartment ?? ""}
              viewAs="APPLICATION_STATUS"
              setIndex={() => setOpenBank("")}
            />
          ) : openBank === "RTG" ? (
            <NEFTProcess
              financeId={message?.finance}
              flowAs={"Department"}
              departmentId={message?.applicationId?.applicationDepartment ?? ""}
              viewAs="APPLICATION_STATUS"
              setIndex={() => setOpenBank("")}
            />
          ) : openBank === "CHEQUE" ? (
            <ChequeProcess
              financeId={message?.finance}
              flowAs={"Department"}
              departmentId={message?.applicationId?.applicationDepartment ?? ""}
              viewAs="APPLICATION_STATUS"
              setIndex={() => setOpenBank("")}
            />
          ) : (
            ""
          )}
        </PopupWrapper>
      )}
    </>
  );
};

export default AdmissionThirdNotification;
