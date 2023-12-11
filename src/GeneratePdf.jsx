import React from "react";
import StudentReportCard from "./pdf/reportcard/StudentReportCard";
// import HostelRefundFeeReceipt from "./pdf/hostel/HostelRefundFeeReceipt";
// import StudentFormPdf from "./pdf/StudentFormPdf";
// import StudentHostelFormPdf from "./pdf/StudentHostelFormPdf";
// import HostelFeeReceipt from "./pdf/hostel/HostelFeeReceipt";
// import StudentBonafidePdf from "./pdf/StudentBonafidePdf";
// import StudentLeavingnCertificate from "./pdf/certificate/StudentLeavingnCertificate";

const GeneratePdf = () => {
  return (
    <>
      {/* <StudentFormPdf /> */}
      {/* <HostelRefundFeeReceipt /> */}
      {/* <HostelFeeReceipt /> */}
      {/* <StudentHostelFormPdf /> */}
      {/* <StudentBonafidePdf /> */}
      {/* <StudentLeavingnCertificate /> */}
      <StudentReportCard />
    </>
  );
};

export default GeneratePdf;
