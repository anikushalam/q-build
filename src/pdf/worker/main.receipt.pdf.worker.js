import AdmissionFeeReceipt from "../admission/AdmissionFeeReceipt";
import AdmissionRefundFeeReceipt from "../admission/AdmissionRefundFeeReceipt";
import HostelFeeReceipt from "../hostel/HostelFeeReceipt";
import HostelRefundFeeReceipt from "../hostel/HostelRefundFeeReceipt";
import TransportFeeReceipt from "../transport/TransportFeeReceipt";
onmessage = (message) => {
  let args = message.data;
  let printResult = "";
  if (args?.printReceiptType === "ADMISSION") {
    printResult = AdmissionFeeReceipt(
      args?.institute,
      args?.studentInfo,
      args?.paymentReceiptInfo
    );
  } else if (args?.printReceiptType === "HOSTEL") {
    printResult = HostelFeeReceipt(
      args?.institute,
      args?.studentInfo,
      args?.paymentReceiptInfo
    );
  } else if (args?.printReceiptType === "ADMISSION_REFUND") {
    printResult = AdmissionRefundFeeReceipt(
      args?.institute,
      args?.studentInfo,
      args?.paymentReceiptInfo
    );
  } else if (args?.printReceiptType === "HOSTEL_REFUND") {
    printResult = HostelRefundFeeReceipt(
      args?.institute,
      args?.studentInfo,
      args?.paymentReceiptInfo
    );
  } else if (args?.printReceiptType === "TRANSPORT") {
    printResult = TransportFeeReceipt(
      args?.institute,
      args?.studentInfo,
      args?.paymentReceiptInfo
    );
  } else {
    printResult = "Not Identified Receipt Flow";
  }

  postMessage(printResult);
};
