import StudentBonafidePdf from "../StudentBonafidePdf";
import StudentLeavingnCertificate from "../certificate/StudentLeavingnCertificate";

onmessage = (message) => {
  let args = message.data;
  let printResult = "";

  if (args?.printCertificateType === "BONAFIDE") {
    printResult = StudentBonafidePdf(args?.studentInfo, args?.institute);
  } else if (args?.printCertificateType === "LEAVING") {
    printResult = StudentLeavingnCertificate(
      args?.institute,
      args?.studentInfo
    );
  } else if (args?.printCertificateType === "TRANSFER") {
  } else {
    printResult = "Not Indetified Certificate Flow";
  }

  postMessage(printResult);
};
