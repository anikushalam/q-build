import jsPDF from "jspdf";
import moment from "moment";
import { imageShowUrl1 } from "../services/BaseUrl";
import converter from "number-to-words";
var doc = new jsPDF({
  format: [275, 210],
});

var width = doc.internal.pageSize.getWidth();
var backgroundHheight = 10;

//<<<<<<< birat
//const feeReceiptPdf = (receiptData, allRemain, img, fee_heads, Affiliate) => {
//=======
const refundFeeReceiptPdf = (
  receiptData,
  allRemain,
  img,
  affliatedImg,
  accountData,
  selectedApplication
) => {
  //>>>>>>> main

  let totalApplicableFees = 0;
  let totalPaidFees = 0;
  // console.info(accountData);

  for (let i = 0; i < receiptData.student.active_fee_heads.length; i++) {
    totalApplicableFees =
      totalApplicableFees +
      receiptData.student.active_fee_heads[i].applicable_fee;
    totalPaidFees =
      totalPaidFees + receiptData.student.active_fee_heads[i].paid_fee;
  }

  doc.addImage(img, "JPEG", 9, 3, 25, 25);
  doc.addImage(affliatedImg, "JPEG", width - 34, 2.4, 25, 25);

  doc.setLineWidth(8);
  doc.setDrawColor(255, 255, 255);
  doc.circle(21.4, 15, 16);
  doc.setLineWidth(0);

  doc.setLineWidth(8);
  doc.setDrawColor(255, 255, 255);
  doc.circle(width - 21.4, 15, 16);
  doc.setLineWidth(0);

  const textLines = doc.splitTextToSize(
    receiptData.application.admissionAdmin.institute.insName,
    146
  );

  doc.setFont(undefined, "normal");

  // if (Affiliate) {
  //   if (textLines.length > 1) {
  //     let verticalOffset = 16;
  //     doc.setFont("700");
  //     doc.setTextColor(18, 18, 18);
  //     doc.setFontSize(16);
  //     doc.text(107, verticalOffset, textLines, "center");
  //     verticalOffset = textLines.length + 145;
  //   } else {
  //     let verticalOffset = 17;
  //     doc.setFont("700");
  //     doc.setTextColor(18, 18, 18);
  //     doc.setFontSize(18);
  //     doc.text(107, verticalOffset, textLines, "center");
  //     verticalOffset = textLines.length + 145;
  //   }

  //   const affiliationBody = "Affiliate Group Name";
  //   doc.setFont("", "normal", "");
  //   doc.setFontSize(10);
  //   doc.setFont("SakalBharati", "normal");
  //   doc.text(
  //     107,
  //     9,
  //     Affiliate,

  //     "center"
  //   );

  //   doc.setFont("Arial", "normal", "400");
  //   doc.setTextColor(18, 18, 18);
  //   doc.setFontSize(10);
  //   doc.text(
  //     width / 2,
  //     textLines.length > 1 ? 30 : 26,

  //     receiptData.application.admissionAdmin.institute.insAddress,
  //     "center"
  //   );

  //   doc.setFont("WorkSans");

  //   doc.setTextColor(18, 18, 18);
  //   doc.setFontSize(10);
  //   doc.text(
  //     width / 2,
  //     textLines.length > 1 ? 36 : 32,

  //     `Mob No : ${receiptData.application.admissionAdmin.institute.insPhoneNumber} , Mail: ${receiptData.application.admissionAdmin.institute.insEmail}`,
  //     "center"
  //   );
  // } else {
  if (textLines.length > 1) {
    let verticalOffset = 10;
    doc.setFont("700");
    doc.setTextColor(18, 18, 18);
    doc.setFontSize(16);
    doc.text(107, verticalOffset, textLines, "center");
    verticalOffset = textLines.length + 145;
  } else {
    let verticalOffset = 10;
    doc.setFont("700");
    doc.setTextColor(18, 18, 18);
    doc.setFontSize(18);
    doc.text(107, verticalOffset, textLines, "center");
    verticalOffset = textLines.length + 145;
  }

  doc.setFont("Arial", "normal", "400");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);
  doc.text(
    width / 2,
    textLines.length > 1 ? 23 : 19,

    receiptData.application.admissionAdmin.institute.insAddress,
    "center"
  );

  doc.setFont("WorkSans");

  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);
  doc.text(
    width / 2,
    textLines.length > 1 ? 29 : 25,

    `Mob No : ${receiptData.application.admissionAdmin.institute.insPhoneNumber} , Mail: ${receiptData.application.admissionAdmin.institute.insEmail}`,
    "center"
  );
  // }

  doc.setFont("WorkSans");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(18);
  doc.text(width / 2, 37, "Refund Fee Receipt", "center");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(
    9,
    46,
    `Name: ${receiptData.student.studentFirstName} ${
      receiptData.student.studentMiddleName
        ? receiptData.student.studentMiddleName
        : ""
    } ${receiptData.student.studentLastName} `
  );
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(
    width / 2 - 20,
    46,
    `GRNo: ${receiptData?.student?.studentGRNO ?? ""}`
  );

  let selectCard = receiptData.student?.remainingFeeList?.find(
    (val) => val?.appId === selectedApplication
  );
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(
    width / 2 + 20,
    46,
    `AY: ${selectCard?.fee_structure?.batch_master?.batchName ?? ""}`
  );
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(
    9,
    51,
    // `Department: ${receiptData.student?.fee_structure?.department?.dName ?? ""}`
    `Department: ${receiptData.student?.fee_structure?.department?.dName ?? ""}`
  );
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(
    width / 2 + 20,
    51,
    `Class: ${selectCard?.fee_structure?.class_master?.className ?? ""}`
  );

  var receiverName =
    receiptData?.application?.admissionAdmin?.site_info?.[0]?.cashier_name ??
    "";
  var receiverSignature =
    receiptData?.application?.admissionAdmin?.site_info?.[0]
      ?.cashier_signature ?? "";

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(
    9,
    56,
    // `Department: ${receiptData.student?.fee_structure?.department?.dName ?? ""}`
    `Application Name: ${receiptData?.application?.applicationName ?? "N/A"}`
  );

  doc.setLineWidth(0.7);
  doc.setDrawColor(18, 18, 18);
  doc.line(0, 60, width, 60);

  // doc.setFont("Inter-Light", "normal");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(9, 66, "Receipt No :");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(9, 73, "Total Fee:");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(width / 2 - 25, 73, "Applicable Fee:");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(width / 2 + 3, 73, `Rs. ${totalApplicableFees}`);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(
    37,
    66,
    `${receiptData?.invoice_count ? receiptData?.invoice_count : ""}`
  );

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(37, 73, `Rs. ${allRemain.applicable_fee}`);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(width - 37, 66, "Dated:", {
    align: "right",
  });

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.text(width - 60, 73, "Total Fee Paid:");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(
    width - 12,
    66,
    moment(receiptData?.created_at).format("Do MMM YYYY"),
    {
      align: "right",
    }
  );

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(width - 12, 73, `Rs. ${allRemain.paid_fee}`, {
    align: "right",
  });

  doc.setTextColor(0, 0, 0);
  doc.setFont(undefined, "bold");
  doc.text(9, 80 + backgroundHheight, ` On Account of: `);

  const received = {
    by: `${
      receiptData?.set_off_status === "Set Off"
        ? "SetOff"
        : receiptData.fee_payment_mode
    }`,
    refNo: receiptData.fee_utr_reference,
    date: moment(receiptData.fee_transaction_date).format("Do MMM YYYY"),
    fee: receiptData.fee_payment_amount,
    student: `${receiptData.student.studentFirstName} ${
      receiptData.student.studentMiddleName
        ? receiptData.student.studentMiddleName
        : ""
    } ${receiptData.student.studentLastName} `,
    application: `${receiptData.application.applicationName}`,
    batch: `${moment().format("YYYY")}`,
  };

  const received_text = `Being fees received by ${received.by},  Ref No: ${
    received.refNo ?? "N/A"
  },  Dated: ${received.date}  for Rs. ${received.fee} From ${
    received.student
  }, towards fees for ${received.application} for academic year ${
    allRemain.batchId
      ? allRemain.batchId.batchName
      : `${moment(receiptData.fee_transaction_date).format("YYYY")}-${
          parseInt(moment(receiptData.fee_transaction_date).format("YY")) + 1
        }`
  }.`;

  const textLines2 = doc.splitTextToSize(received_text, width - 30);

  if (textLines2.length > 1) {
    let verticalOffset = 86 + backgroundHheight;
    let horizontalOffset = 10;
    doc.setFont(undefined, "normal");
    doc.setFontSize(11);
    doc.setTextColor(18, 18, 18);
    doc.text(horizontalOffset, verticalOffset, textLines2, "left");
    verticalOffset = textLines2.length + 151;
  } else {
    let verticalOffset = 86 + backgroundHheight;
    let horizontalOffset = 10;
    doc.setFontSize(11);
    doc.setFont(undefined, "normal");
    doc.setTextColor(18, 18, 18);
    doc.setFontSize(12);
    doc.text(horizontalOffset, verticalOffset, textLines2, "left");
    verticalOffset = textLines2.length + 151;
  }

  const toPascalCase = (str) =>
    (str.match(/[a-zA-Z0-9]+/g) || [])
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join(" ");

  doc.setTextColor(0, 0, 0);
  doc.setFont(undefined, "bold");
  doc.setFontSize(11);
  doc.text(9, 102 + backgroundHheight, `Bank Transaction Details: `);

  doc.setFont(undefined, "normal");
  doc.text(
    9,
    109 + backgroundHheight,
    `Payment Mode:  ${
      receiptData?.set_off_status === "Set Off"
        ? "SetOff"
        : receiptData.fee_payment_mode
    }`
  );

  doc.text(
    9,
    115 + backgroundHheight,
    `Bank Name: ${receiptData.fee_bank_name ?? "N/A"}`
  );
  doc.text(
    9,
    121 + backgroundHheight,
    `Bank Holder Name: ${receiptData.fee_bank_holder ?? "N/A"} `
  );
  doc.text(
    9,
    127 + backgroundHheight,
    `Transaction Id: ${receiptData.fee_utr_reference ?? "N/A"}`
  );
  doc.text(
    9,
    133 + backgroundHheight,
    `Date: ${moment(receiptData.fee_transaction_date).format("Do MMM YYYY")}`
  );
  doc.text(
    9,
    139 + backgroundHheight,
    `Amount: Rs. ${receiptData.fee_payment_amount}`
  );
  doc.text(
    9,
    145 + backgroundHheight,
    `Amount in Words: ${toPascalCase(
      converter.toWords(receiptData.fee_payment_amount.toString())
    )} only.`
  );
  // -------------------------------------
  doc.text(9, 250, `Date :`);
  doc.text(19, 250, ` ${moment().format("Do MMM YYYY")}`);
  if (receiverSignature)
    doc.addImage(
      `${imageShowUrl1}/${receiverSignature}`,
      "JPEG",
      133,
      202,
      40,
      40
    );
  doc.setFont(undefined, "normal");
  doc.setFontSize(9);
  doc.text(153, 240, `${receiverName}`, {
    align: "center",
  });

  doc.setFont(undefined, "bold");
  doc.setFontSize(10);
  doc.text(153, 250, "Receiver", {
    align: "center",
  });

  // doc.setTextColor(0, 0, 255);
  // doc.setFontSize(7);
  // doc.text(width - 20, 243, `Online Automated`, null, 50);
  // doc.text(width - 18, 244, `Generated fee receipt`, null, 50);
  // doc.text(width - 14, 246, `Through Qviple`, null, 50);

  doc.setLineWidth(0.2);
  doc.setDrawColor(18, 18, 18);
  doc.line(0, 258, width, 258);

  doc.setTextColor(18, 18, 18);
  doc.setFontSize(8);
  doc.setFont(undefined, "normal");
  doc.text(
    width / 2,
    266,
    "Note : No one except one who is making this certificate should interfere with any details of this invoice, othewise students will be expelled and legal action will be taken.",
    "center"
  );
  window.open(
    doc.output("bloburl", {
      filename: `${receiptData.student.studentFirstName} ${
        receiptData.student.studentMiddleName
          ? receiptData.student.studentMiddleName
          : ""
      } ${receiptData.student.studentLastName} -Fee Receipt.pdf`,
    }),
    "_blank"
  );
  // doc.save(
  //   `${receiptData.student.studentFirstName} ${
  //     receiptData.student.studentMiddleName
  //       ? receiptData.student.studentMiddleName
  //       : ""
  //   } ${receiptData.student.studentLastName} -Fee Receipt.pdf`
  // );
};

export default refundFeeReceiptPdf;
