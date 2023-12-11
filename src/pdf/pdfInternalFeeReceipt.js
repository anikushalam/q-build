import jsPDF from "jspdf";
import moment from "moment";
import converter from "number-to-words";
var doc = new jsPDF({
  format: [270, 210],
});

var width = doc.internal.pageSize.getWidth();

const pdfInternalFeeReceipt = (
  accountInfo,
  receiptInfo,
  img,
  affliatedImg,
  is_student = false
) => {
  let instituteInfo = receiptInfo?.finance?.institute;
  let financeHeadInfo = receiptInfo?.finance?.financeHead;
  let studentInfo = receiptInfo?.student;
  let internalFeesInfo = receiptInfo?.internal_fees;
  let orderHistoryInfo = receiptInfo?.order_history;

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

  const textLines = doc.splitTextToSize(instituteInfo?.insName, 146);

  doc.setFont(undefined, "normal");

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

    instituteInfo?.insAddress,
    "center"
  );

  doc.setFont("WorkSans");

  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);
  doc.text(
    width / 2,
    textLines.length > 1 ? 29 : 25,

    `Mob No : ${instituteInfo?.insPhoneNumber} , Mail: ${instituteInfo?.insEmail}`,
    "center"
  );

  doc.setFont("WorkSans");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(18);
  doc.text(width / 2, 37, "Fee Receipt", "center");

  doc.setLineWidth(0.7);
  doc.setDrawColor(18, 18, 18);
  doc.line(0, 46, width, 46);

  // doc.setFont("Inter-Light", "normal");

  doc.setTextColor(0, 0, 0);
  doc.setFont(undefined, "bold");
  doc.setFontSize(10);
  doc.text(9, 54, "Invoice No :");
  doc.setFont(undefined, "normal");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(32, 54, receiptInfo?.invoice_count);

  doc.setTextColor(0, 0, 0);
  doc.setFont(undefined, "bold");
  doc.setFontSize(10);
  doc.text(width - 32, 54, "Dated:", {
    align: "right",
  });
  doc.setFont(undefined, "normal");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(
    width - 12,
    54,
    moment(receiptInfo?.created_at).format("DD-MMM-YYYY"),
    {
      align: "right",
    }
  );

  doc.setTextColor(0, 0, 0);
  doc.setFont(undefined, "bold");
  doc.setFontSize(10);
  doc.text(9, 61, `Purpose:`);
  doc.setFont(undefined, "normal");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(32, 61, `${internalFeesInfo?.internal_fee_reason ?? "N/A"}`);

  doc.setTextColor(0, 0, 0);
  doc.setFont(undefined, "bold");
  doc.setFontSize(10);
  doc.text(9, 68, `Amount: `);
  doc.setFont(undefined, "normal");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(32, 68, `Rs. ${receiptInfo?.fee_payment_amount}`);

  doc.setTextColor(0, 0, 0);
  doc.setFont(undefined, "bold");

  doc.setFontSize(11);
  doc.text(
    9,
    95 + 2,
    ` ${is_student ? "Received Through: " : "Paid Through: "}`
  );
  doc.setFont(undefined, "normal");
  doc.text(
    44,
    95 + 2,
    `${accountInfo?.finance_bank_name}, ${accountInfo?.finance_bank_account_name}, A/c No:  ${accountInfo?.finance_bank_account_number}`
  );

  doc.setTextColor(0, 0, 0);
  doc.setFont(undefined, "bold");
  doc.text(9, 105 + 2, ` On Account of: `);
  const received_text = `Being money ${is_student ? "received" : "paid"} by ${
    receiptInfo?.fee_payment_mode
  }, Transaction ID: ${
    orderHistoryInfo?.razorpay_order_id ?? "N/A"
  } ,  Dated: ${moment(receiptInfo?.created_at).format(
    "DD-MMM-YYYY"
  )}  for Rs. ${receiptInfo?.fee_payment_amount}.${
    is_student ? "From" : "To"
  } ${`${studentInfo?.studentFirstName ?? ""} ${
    studentInfo?.studentMiddleName ?? ""
  } ${studentInfo?.studentLastName ?? ""} `}, towards ${
    internalFeesInfo?.internal_fee_reason ?? "N/A"
  }.`;

  const textLines2 = doc.splitTextToSize(received_text, width - 20);

  if (textLines2.length > 1) {
    let verticalOffset = 111 + 2;
    let horizontalOffset = 10;
    doc.setFont(undefined, "normal");
    doc.setFontSize(11);
    doc.setTextColor(18, 18, 18);
    doc.text(horizontalOffset, verticalOffset, textLines2, "left");
    verticalOffset = textLines2.length + 151;
  } else {
    let verticalOffset = 111 + 2;
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
  doc.text(9, 127 + 4, `Bank Transaction Details: `);
  doc.setFont(undefined, "normal");
  doc.text(9, 134 + 4, `Payment Mode:  ${receiptInfo?.fee_payment_mode}`);
  if (orderHistoryInfo?.razorpay_order_id) {
    doc.text(
      9,
      140 + 4,
      `Transaction ID: ${orderHistoryInfo?.razorpay_order_id ?? "N/A"}`
    );
  } else {
    doc.text(9, 140 + 4, `Bank Name: ${accountInfo?.fee_bank_name ?? "N/A"}`);
    doc.text(
      9,
      146 + 4,
      `Bank Holder Name: ${accountInfo?.finance_bank_account_name ?? "N/A"}`
    );
    doc.text(
      9,
      152 + 4,
      `UTR / Ref No.: ${accountInfo?.fee_utr_reference ?? "N/A"}`
    );
    doc.text(
      9,
      158 + 4,
      `Date: ${moment(receiptInfo?.created_at).format("DD-MMM-YYYY")}`
    );
    doc.text(9, 164 + 4, `Amount: ${receiptInfo?.fee_payment_amount}`);
    doc.text(
      9,
      170 + 4,
      `Amount in Words: ${toPascalCase(
        converter.toWords(receiptInfo.fee_payment_amount.toString())
      )} only.`
    );
  }

  doc.setFontSize(9);
  doc.text(
    40,
    240,
    `${financeHeadInfo.staffFirstName} ${
      financeHeadInfo.staffMiddleName ?? ""
    } ${financeHeadInfo.staffLastName}`,
    {
      align: "center",
    }
  );
  doc.setFont(undefined, "bold");
  doc.setFontSize(10);
  doc.text(40, 245, `Finance Manager`, {
    align: "center",
  });

  doc.setFont(undefined, "normal");
  doc.setFontSize(9);
  doc.text(
    153,
    240,
    `${
      instituteInfo?.displayPersonList?.[0]?.displayUser?.userLegalName ?? "N/A"
    }`,
    {
      align: "center",
    }
  );

  doc.setFont(undefined, "bold");
  doc.setFontSize(10);
  doc.text(
    153,
    245,
    `${instituteInfo?.displayPersonList?.[0]?.displayTitle ?? "N/A"}`,
    {
      align: "center",
    }
  );

  doc.setTextColor(0, 0, 255);
  doc.setFontSize(7);
  doc.text(width - 20, 243, `Online Automated`, null, 50);
  doc.text(width - 18, 244, `Generated fee receipt`, null, 50);
  doc.text(width - 14, 246, `Through Qviple`, null, 50);

  doc.setLineWidth(0.2);
  doc.setDrawColor(18, 18, 18);
  doc.line(0, 251, width, 251);

  doc.setTextColor(18, 18, 18);
  doc.setFontSize(8);
  doc.setFont(undefined, "normal");
  doc.text(
    width / 2,
    259,
    "Note : No one except one who is making this certificate should interfere with any details of this invoice, othewise students will be expelled and legal action will be taken.",
    "center"
  );

  // doc.save(
  //   `${studentInfo?.studentFirstName} ${studentInfo?.studentMiddleName ?? ""} ${
  //     studentInfo?.studentLastName
  //   } -Fee Receipt.pdf`
  // );

  window.open(
    doc.output("bloburl", {
      filename: `${studentInfo?.studentFirstName} ${
        studentInfo?.studentMiddleName ?? ""
      } ${studentInfo?.studentLastName} -Internal Fee Receipt.pdf`,
    }),
    "_blank"
  );
};

export default pdfInternalFeeReceipt;
