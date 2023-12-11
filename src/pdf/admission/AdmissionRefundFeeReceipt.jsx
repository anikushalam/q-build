import jsPDF from "jspdf";
import moment from "moment";
// let img = "/images/certificate/logodemo.jpg";
import converter from "number-to-words";
const AdmissionRefundFeeReceipt = (
  institute,
  studentInfo,
  paymentReceiptInfo
) => {
  var doc = new jsPDF({
    format: "a4",
    putOnlyUsedFonts: true,
  });

  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight();

  const toPascalCase = (str) =>
    (str.match(/[a-zA-Z0-9]+/g) || [])
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join(" ");

  // start of pdf title
  var firstPageHeight = 0;
  doc.addImage(institute.instituteImage, "JPEG", 9, 3, 25, 25);
  doc.addImage(institute.affiliatedImage, "JPEG", width - 34, 2.5, 25, 25);
  // doc.addImage(img, "JPEG", 9, 3, 25, 25);
  // doc.addImage(img, "JPEG", width - 34, 3, 25, 25);
  doc.setLineWidth(8);
  // doc.setDrawColor(155, 155, 255);
  doc.setDrawColor(255, 255, 255);
  doc.circle(21.4, 15, 16);
  doc.setLineWidth(0);

  doc.setLineWidth(8);
  doc.setDrawColor(255, 255, 255);
  doc.circle(width - 21.4, 15, 16);
  doc.setLineWidth(0);

  firstPageHeight = institute?.insAffiliated ? 12 : 10;

  const instituteName = doc.splitTextToSize(
    institute?.insName ?? "IIT Mumabi Mera by Of Raod of campige sbdas f as",
    146
  );
  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(16);
  doc.text(107, firstPageHeight, instituteName, "center");
  if (instituteName?.length) {
    for (let i = 0; i < instituteName?.length; i++) {
      firstPageHeight += 6;
    }
  }
  if (institute?.insAffiliated) {
    doc.setFontSize(10);
    doc.text(107, 5, institute?.insAffiliated, "center");
  }

  doc.setFont("Arial", "normal", "400");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);
  doc.text(
    width / 2,
    firstPageHeight,
    institute?.insAddress ?? "plot no. 77 Adarsh Vihar Buddeshwar Chauraha LKO",
    "center"
  );

  doc.setFont("WorkSans");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);

  if (institute.ediatbel1) {
    let editableFirstEdit = doc.splitTextToSize(
      institute.ediatbel1,
      // edit.first,
      width - 70
    );
    doc.text(width / 2, firstPageHeight + 5, editableFirstEdit, "center");
    if (editableFirstEdit?.length) {
      for (let i = 0; i < editableFirstEdit?.length; i++) {
        firstPageHeight += 5;
      }
    }
  }

  if (institute.ediatbel2) {
    let editableSecondEdit = doc.splitTextToSize(
      institute.ediatbel2,
      // edit.second,
      width - 70
    );
    doc.text(width / 2, firstPageHeight + 4, editableSecondEdit, "center");
    if (editableSecondEdit?.length) {
      for (let i = 0; i < editableSecondEdit?.length; i++) {
        firstPageHeight += 5;
      }
    }
  }

  doc.text(
    width / 2,
    firstPageHeight + 4,
    `Mob No : ${institute?.insPhoneNumber} , Mail: ${institute?.insEmail}`,
    "center"
  );
  firstPageHeight += 16;

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(18);
  doc.text(width / 2, firstPageHeight, "Fee Receipt", "center");
  firstPageHeight += 10;

  doc.setFontSize(11);

  let studentName = doc.splitTextToSize(
    `Name: ${studentInfo?.name ?? ""}`,
    width / 2 - 9
  );

  doc.text(9, firstPageHeight, studentName);

  let grName = doc.splitTextToSize(
    `GRNo: ${studentInfo?.grNumber ?? "Sitra Forec F-02"}`,
    width / 4 - 5
  );
  doc.text(width / 2 + 5, firstPageHeight, grName);

  doc.text(
    width / 2 + width / 4 + 5,
    firstPageHeight,
    `AY: ${studentInfo?.batchName ?? "Garbage Batch - 2023"}`
  );

  if (studentName?.length > grName?.length) {
    for (let i = 1; i < studentName?.length; i++) {
      firstPageHeight += 8;
    }
  } else {
    for (let i = 1; i < grName?.length; i++) {
      firstPageHeight += 8;
    }
  }
  firstPageHeight += 7;

  let departmentName = doc.splitTextToSize(
    `Department: ${studentInfo?.departmentName ?? ""}`,
    width / 2 - 9
  );
  doc.text(9, firstPageHeight, departmentName);

  let clsName = doc.splitTextToSize(
    `Class: ${studentInfo?.standard ?? ""}`,
    width / 2 - 9
  );
  doc.text(width / 2 + 5, firstPageHeight, clsName);

  if (departmentName?.length > clsName?.length) {
    for (let i = 1; i < departmentName?.length; i++) {
      firstPageHeight += 8;
    }
  } else {
    for (let i = 1; i < clsName?.length; i++) {
      firstPageHeight += 8;
    }
  }

  firstPageHeight += 7;

  let applicationName = doc.splitTextToSize(
    `Applied In: ${studentInfo?.applicationName ?? "N/A"}`,
    width - 20
  );
  doc.text(9, firstPageHeight, applicationName);
  for (let i = 1; i < applicationName?.length; i++) {
    firstPageHeight += 10;
  }
  firstPageHeight += 5;

  doc.setLineWidth(0.7);
  doc.setDrawColor(18, 18, 18);
  doc.line(0, firstPageHeight, width, firstPageHeight);

  firstPageHeight += 10;
  /// start feee receipt total values

  doc.text(
    9,
    firstPageHeight,
    `Receipt No : ${paymentReceiptInfo?.invoiceNumber}`
  );
  doc.text(
    width - 40,
    firstPageHeight,
    `Dated: ${moment(paymentReceiptInfo?.createdAt).format("Do MMM YYYY")}`
  );

  firstPageHeight += 8;

  doc.text(
    9,
    firstPageHeight,
    `Total Fee: Rs. ${paymentReceiptInfo?.totalFee}`
  );
  doc.text(
    width / 3,
    firstPageHeight,
    `Applicable Fee: Rs. ${paymentReceiptInfo?.applicableFee}`
  );
  doc.text(
    width -
      6 -
      doc.getTextWidth(`Total Fee Paid: Rs. ${paymentReceiptInfo?.paidFee}`),
    firstPageHeight,
    `Total Fee Paid: Rs. ${paymentReceiptInfo?.paidFee}`
  );
  firstPageHeight += 15;

  // for account of
  doc.setFont(undefined, "bold");
  doc.text(9, firstPageHeight, `On Account of: `);

  firstPageHeight += 5;

  doc.setFont(undefined, "normal");
  doc.setTextColor(18, 18, 18);

  let accountOf = doc.splitTextToSize(
    `Being fees received by ${paymentReceiptInfo?.transactionMode},  Ref No: ${
      paymentReceiptInfo?.referenceNumber
    },  Dated: ${moment(paymentReceiptInfo?.transactionDate).format(
      "yyyy-MM-DD"
    )}  for Rs. ${paymentReceiptInfo?.transactionAmount} From ${
      studentInfo?.name
    }, towards fees for ${
      paymentReceiptInfo?.transactionApplication
    } for academic year ${paymentReceiptInfo?.transactionBatchName}.`,
    width - 20
  );

  doc.text(9, firstPageHeight, accountOf);
  for (let i = 1; i < accountOf?.length; i++) {
    firstPageHeight += 10;
  }
  firstPageHeight += 5;

  // for bank transaction
  doc.setTextColor(0, 0, 0);
  doc.setFont(undefined, "bold");
  doc.text(9, firstPageHeight, `Bank Transaction Details:`);

  firstPageHeight += 5;

  doc.setFont(undefined, "normal");
  doc.setTextColor(18, 18, 18);

  doc.text(
    9,
    firstPageHeight,
    `Payment Mode:  ${
      paymentReceiptInfo?.transactonSetOff === "Set Off"
        ? "SetOff"
        : `${paymentReceiptInfo.transactionMode}`
    }`
  );

  firstPageHeight += 6;

  doc.text(9, firstPageHeight, `Bank Name: ${paymentReceiptInfo?.bankName}`);

  firstPageHeight += 6;

  doc.text(
    9,
    firstPageHeight,
    `Bank Holder Name:${paymentReceiptInfo?.bankHolderName}`
  );

  firstPageHeight += 6;

  doc.text(
    9,
    firstPageHeight,
    `Transaction Id: ${paymentReceiptInfo?.transactionId}`
  );

  firstPageHeight += 6;

  doc.text(
    9,
    firstPageHeight,
    `Date: ${moment(paymentReceiptInfo?.transactionDate).format("Do MMM YYYY")}`
  );

  firstPageHeight += 6;

  doc.text(
    9,
    firstPageHeight,
    `Amount: Rs. ${paymentReceiptInfo?.transactionAmount}`
  );
  firstPageHeight += 6;

  if (paymentReceiptInfo?.transactionAmount > 0) {
    doc.text(
      9,
      firstPageHeight,
      `Amount in Words: ${toPascalCase(
        converter.toWords(paymentReceiptInfo?.transactionAmount.toString())
      )} only.`
    );
    firstPageHeight += 6;
  }
  if (studentInfo?.receiverSignature) {
    doc.addImage(
      studentInfo?.receiverSignature,
      // img,
      "JPEG",
      width - 60,
      height - 70,
      40,
      40
    );
  }
  doc.text(width - 40, height - 25, `${studentInfo?.receiverName ?? ""}`, {
    align: "center",
  });

  doc.text(9, height - 20, `Date :`);
  doc.text(19, height - 20, ` ${moment().format("Do MMM YYYY")}`);

  doc.setFont(undefined, "bold");
  doc.text(width - 40, height - 20, "Receiver", {
    align: "center",
  });

  doc.setLineWidth(0.2);
  doc.setDrawColor(18, 18, 18);
  doc.line(0, height - 10, width, height - 10);

  doc.setFontSize(8);
  doc.setFont(undefined, "normal");
  doc.setTextColor(18, 18, 18);

  doc.text(
    width / 2,
    height - 5,
    "Note : No one except one who is making this certificate should interfere with any details of this invoice, othewise students will be expelled and legal action will be taken.",
    "center"
  );
  return doc.output("bloburl", {
    filename: `${studentInfo?.name}-refund-fee-receipt.pdf`,
  });
};

export default AdmissionRefundFeeReceipt;
