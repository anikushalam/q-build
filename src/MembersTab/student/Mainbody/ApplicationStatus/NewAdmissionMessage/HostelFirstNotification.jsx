import React, { useEffect, useState } from "react";
import { useGetBankByFinance } from "../../../../../hooks/member_tab/finance-api";
import style from "../ApplicationStatus.module.css";
import PopupWrapper from "../../../../staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import ChequeProcess from "../ConfirmStudentAdmisionModal/GatewayProcess/ChequeProcess";
import DemandProcess from "../ConfirmStudentAdmisionModal/GatewayProcess/DemandProcess";
import NEFTProcess from "../ConfirmStudentAdmisionModal/GatewayProcess/NEFTProcess";
import ApplicationPreviewDetail from "../../../../staff/Mainbody/FinanceManager/FeesStructure/ApplicationPreviewDetail";
import UPIProcess from "../ConfirmStudentAdmisionModal/GatewayProcess/UPIProcess";
import { fileShowUrl } from "../../../../../services/BaseUrl";
import SelectHostelFeeStrucutre from "../../../../staff/Mainbody/Hostel/HostelApplicationRequest/HostelApplication/SelectHostelFeeStrucutre";

const HostelFirstNotification = ({ message }) => {
  const [openBank, setOpenBank] = useState("");
  const [openFees, setOpenFees] = useState(false);
  const [structureId, setStructureId] = useState("");
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
  const onToggleFees = () => {
    setOpenFees((pre) => !pre);
  };

  const onSelectedStrucutre = (id) => {
    setStructureId(id);
    onToggleFees();
  };

  const onCloseFees = () => {
    setStructureId("");
    onToggleFees();
  };
  return (
    <>
      <p>
        Your application for{" "}
        <span
          style={{
            fontWeight: "500",
          }}
        >
          {message?.applicationId?.applicationName ?? ""}{" "}
        </span>
        have been filled successfully.
      </p>
      {message?.student?.application_print?.[0]?.value ? (
        <p
          style={{
            fontWeight: "500",
          }}
        >
          <a
            href={`${fileShowUrl}/${message?.student?.application_print?.[0]?.value}`}
            title="Download Hostel Admission Application File"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            Download Hostel Admission Application Form
          </a>
        </p>
      ) : (
        ""
      )}

      <p
        style={{
          fontWeight: "500",
        }}
      >
        Below is the hostel admission process:
      </p>
      <p>
        1. You will get notified here after your selection or rejection from the
        institute. ( In case there is no notification within 3 working days,
        visit or contact the hostel department)
      </p>
      <p>
        2. After selection, confirm from your side and start the hostel
        admission process.
      </p>
      <p>
        3. After confirmation from your side, visit the institute with the
        applicable fees. (You will get application fees information on your
        selection from the institute side. (Till then check our{" "}
        <span
          style={{
            color: "#002BBE",
            cursor: "pointer",
          }}
          onClick={onToggleFees}
        >
          Fee structures
        </span>{" "}
        )
      </p>
      <p
        style={{
          marginBottom: "0.5rem",
          fontWeight: "500",
        }}
      >
        4. Payment modes available for fee payment:
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
      <p
        style={{
          marginTop: "0.9rem",
        }}
      >
        5. Pay application hostel admission fees and your admission will be
        confirmed and complete.
      </p>
      <p>6. For cancellation and refund, contact the hostel department.</p>
      <p
        style={{
          fontWeight: "500",
        }}
      >
        Note: Stay tuned for further updates.
      </p>

      {openBank && (
        <PopupWrapper onClose={() => setOpenBank("")}>
          {openBank === "UPI" ? (
            <UPIProcess
              financeId={message?.finance}
              flowAs={"Hostel"}
              departmentId={
                message?.applicationId?.applicationUnit?.hostel?._id ?? ""
              }
              viewAs="APPLICATION_STATUS"
              setIndex={() => setOpenBank("")}
            />
          ) : openBank === "DEMAND" ? (
            <DemandProcess
              financeId={message?.finance}
              flowAs={"Hostel"}
              departmentId={
                message?.applicationId?.applicationUnit?.hostel?._id ?? ""
              }
              viewAs="APPLICATION_STATUS"
              setIndex={() => setOpenBank("")}
            />
          ) : openBank === "RTG" ? (
            <NEFTProcess
              financeId={message?.finance}
              flowAs={"Hostel"}
              departmentId={
                message?.applicationId?.applicationUnit?.hostel?._id ?? ""
              }
              viewAs="APPLICATION_STATUS"
              setIndex={() => setOpenBank("")}
            />
          ) : openBank === "CHEQUE" ? (
            <ChequeProcess
              financeId={message?.finance}
              flowAs={"Hostel"}
              departmentId={
                message?.applicationId?.applicationUnit?.hostel?._id ?? ""
              }
              viewAs="APPLICATION_STATUS"
              setIndex={() => setOpenBank("")}
            />
          ) : (
            ""
          )}
        </PopupWrapper>
      )}
      {openFees && (
        <SelectHostelFeeStrucutre
          onClose={onToggleFees}
          onSelectedStudent={onSelectedStrucutre}
          hostelId={message?.applicationId?.applicationUnit?.hostel?._id ?? ""}
          asOpen="STUDENT_VIEW_STRUCTURE"
          batchId={message?.applicationId?.applicationBatch ?? ""}
          classMasterId={message?.applicationId?.applicationMaster ?? ""}
        />
      )}
      {structureId && (
        <ApplicationPreviewDetail
          structureId={structureId}
          setStructureId={onCloseFees}
          viewAs="STUDENT"
        />
      )}
    </>
  );
};

export default HostelFirstNotification;
