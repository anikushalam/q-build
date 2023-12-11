import StudentFormPdf from "../StudentFormPdf";
import StudentHostelFormPdf from "../StudentHostelFormPdf";

onmessage = (message) => {
  let args = message.data;
  let printResult = "";
  if (args?.printFormType === "STUDENT_FORM") {
    printResult = StudentFormPdf(
      args?.studentInfo,
      args?.institute,
      args?.pdfUndertaking
    );
  } else if (args?.printFormType === "STUDENT_HOSTEL_FORM") {
    printResult = StudentHostelFormPdf(
      args?.studentInfo,
      args?.institute,
      args?.pdfUndertaking
    );
  } else {
    printResult = "Not Identified Student Form Flow";
  }
  postMessage(printResult);
};
