import jsPDF from "jspdf";
import moment from "moment";
import { imageShowUrl1 } from "../services/BaseUrl";
import converter from "number-to-words";
var doc = new jsPDF({
  format: [320, 210],
});

var width = doc.internal.pageSize.getWidth();
var pageHeight = doc.internal.pageSize.getHeight();

//<<<<<<< birat
//const feeReceiptPdf = (receiptData, allRemain, img, fee_heads, Affiliate) => {
//=======
const feeReceiptPdf = (
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
  doc.text(width / 2, 37, "Fee Receipt", "center");

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
    `AY: ${
      selectCard?.fee_structure?.batch_master?.batchName ??
      receiptData.student?.fee_structure?.batch_master?.batchName ??
      ""
    }`
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
    `Class: ${
      selectCard?.fee_structure?.class_master?.className ??
      receiptData.student?.fee_structure?.class_master?.className ??
      ""
    }`
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

  doc.setLineWidth(8);
  doc.setDrawColor("#c9bada");
  doc.line(0, 84, width, 84);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(9, 85, "PARTICULARS");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(100, 85, "APPLICABLE");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(138, 85, "PAID AMOUNT");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(width - 12, 85, "REMAINING", {
    align: "right",
  });

  let backgroundHheight = receiptData.student.active_fee_heads.length * 9 + 4;

  // doc.setLineWidth(67);
  // doc.setDrawColor("#ede8f3");
  // doc.line(0, 121, width, 121);
  let totalApplicableFee = 0;
  let totalPaidFee = 0;
  let totalRemainingFee = 0;

  doc.setLineWidth(backgroundHheight);
  doc.setDrawColor("#ede8f3");
  doc.line(0, 88 + backgroundHheight / 2, width, 88 + backgroundHheight / 2);

  let hight = 96;
  let newHeight = 96;
  let statusY = "";
  let bgStatus = "";

  for (let i = 0; i < receiptData.student.active_fee_heads.length; i++) {
    if (hight + 9 > 213) {
      doc.addPage();
      // newHeight = hight;
      hight = 1;
      statusY = "page added";
    }

    if (statusY === "") {
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(
        9,
        hight,

        receiptData.student.active_fee_heads[i].head_name
      );

      // ------------------------------
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(
        110,
        hight,
        `${receiptData.student.active_fee_heads[i].applicable_fee}`,

        {
          align: "center",
        }
      );

      //   // ------------------------------

      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(
        150,
        hight,
        `${receiptData.student.active_fee_heads[i].paid_fee}`,

        {
          align: "center",
        }
      );

      //   // ------------------------------

      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(
        185,
        hight,
        `${receiptData.student.active_fee_heads[i].remain_fee}`,

        {
          align: "center",
        }
      );

      //   // ----------------------------------

      hight = hight + 9;
      newHeight = newHeight + 9;
    }
    if (statusY !== "" && newHeight <= pageHeight - 10) {
      doc.setPage(1);
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(
        9,
        newHeight,

        receiptData.student.active_fee_heads[i].head_name
      );

      // ------------------------------
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(
        110,
        newHeight,
        `${receiptData.student.active_fee_heads[i].applicable_fee}`,

        {
          align: "center",
        }
      );

      //   // ------------------------------

      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(
        150,
        newHeight,
        `${receiptData.student.active_fee_heads[i].paid_fee}`,

        {
          align: "center",
        }
      );

      //   // ------------------------------

      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(
        185,
        newHeight,
        `${receiptData.student.active_fee_heads[i].remain_fee}`,

        {
          align: "center",
        }
      );

      //   // ----------------------------------

      newHeight = newHeight + 9;
    }

    if (statusY !== "" && newHeight > pageHeight - 10) {
      doc.setPage(2);
      backgroundHheight = (receiptData.student.active_fee_heads.length - i) * 9;
      doc.setLineWidth(backgroundHheight);
      doc.setDrawColor("#ede8f3");
      if (bgStatus === "") {
        doc.line(0, backgroundHheight / 2, width, backgroundHheight / 2);
      }
      bgStatus = "line drawn";

      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(
        9,
        hight - 2,

        receiptData.student.active_fee_heads[i].head_name
      );

      // ------------------------------
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(
        110,
        hight - 2,
        `${receiptData.student.active_fee_heads[i].applicable_fee}`,

        {
          align: "center",
        }
      );

      //   // ------------------------------

      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(
        150,
        hight - 2,
        `${receiptData.student.active_fee_heads[i].paid_fee}`,

        {
          align: "center",
        }
      );

      //   // ------------------------------

      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(
        185,
        hight - 2,
        `${receiptData.student.active_fee_heads[i].remain_fee}`,

        {
          align: "center",
        }
      );

      //   // ----------------------------------

      hight = hight + 9;
    }

    totalApplicableFee =
      totalApplicableFee +
      receiptData.student.active_fee_heads[i].applicable_fee;
    totalPaidFee =
      totalPaidFee + receiptData.student.active_fee_heads[i].paid_fee;
    totalRemainingFee =
      totalRemainingFee + receiptData.student.active_fee_heads[i].remain_fee;
  }

  if (statusY !== "" && newHeight > pageHeight - 10) {
    doc.setLineWidth(8);
    doc.setDrawColor("#c9bada");
    doc.line(0, 3.3 + hight, width, 3.3 + hight);
    doc.setFontSize(12);
    doc.text(9, 4.8 + hight, "Total");
    doc.setFontSize(11);
    doc.text(110, 4.8 + hight, `${totalApplicableFee}`, {
      align: "center",
    });
    doc.setFontSize(11);
    doc.text(150, 4.8 + hight, `${totalPaidFee}`, {
      align: "center",
    });
    doc.setFontSize(11);
    doc.text(185, 4.8 + hight, `${totalRemainingFee}`, {
      align: "center",
    });
  } else {
    doc.setLineWidth(8);
    doc.setDrawColor("#c9bada");
    doc.line(0, 92 + backgroundHheight, width, 92 + backgroundHheight);
    doc.setFontSize(12);
    doc.text(9, 93.5 + backgroundHheight, "Total");
    doc.setFontSize(11);
    doc.text(110, 93.5 + backgroundHheight, `${totalApplicableFee}`, {
      align: "center",
    });
    doc.setFontSize(11);
    doc.text(150, 93.5 + backgroundHheight, `${totalPaidFee}`, {
      align: "center",
    });
    doc.setFontSize(11);
    doc.text(185, 93.5 + backgroundHheight, `${totalRemainingFee}`, {
      align: "center",
    });
  }

  // console.info("sahsgfjh", backgroundHheight, hight, newHeight, pageHeight);
  if (newHeight <= 213) {
    // doc.setTextColor(0, 0, 0);
    // doc.setFont(undefined, "bold");

    // doc.setFontSize(11);
    // doc.text(9, backgroundHheight + 108, ` Received Through: `);
    // doc.setFont(undefined, "normal");
    // doc.text(
    //   44,
    //   backgroundHheight + 108,
    //   `${accountData?.finance_bank_name ?? "N/A"}, ${
    //     accountData?.finance_bank_account_name ?? "N/A"
    //   }, A/c No:  ${accountData?.finance_bank_account_number ?? "N/A"}`
    // );

    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, "bold");
    doc.text(9, 108 + backgroundHheight, ` On Account of: `);

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

    const textLines2 = doc.splitTextToSize(received_text, width);

    if (textLines2.length > 1) {
      let verticalOffset = 114 + backgroundHheight;
      let horizontalOffset = 10;
      doc.setFont(undefined, "normal");
      doc.setFontSize(11);
      doc.setTextColor(18, 18, 18);
      doc.text(horizontalOffset, verticalOffset, textLines2, "left");
      verticalOffset = textLines2.length + 151;
    } else {
      let verticalOffset = 114 + backgroundHheight;
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
    doc.text(9, 130 + backgroundHheight, `Bank Transaction Details: `);

    doc.setFont(undefined, "normal");
    doc.text(
      9,
      137 + backgroundHheight,
      `Payment Mode:  ${
        receiptData?.set_off_status === "Set Off"
          ? "SetOff"
          : `${receiptData.fee_payment_mode} (${
              receiptData.order_history?.razor_query?.[0]?.method ?? "N/A"
            }) `
        // : receiptData.fee_payment_mode
      }`
    );

    doc.text(
      9,
      143 + backgroundHheight,
      `Bank Name: ${
        receiptData.fee_bank_name ??
        receiptData.order_history?.razor_query?.[0]?.bank ??
        "N/A"
      }`
    );
    doc.text(
      9,
      149 + backgroundHheight,
      `Bank Holder Name: ${receiptData.fee_bank_holder ?? "N/A"} `
    );
    doc.text(
      9,
      155 + backgroundHheight,
      `Transaction Id: ${
        receiptData.fee_utr_reference ??
        receiptData.order_history?.razorpay_payment_id ??
        "N/A"
      }`
    );
    doc.text(
      9,
      161 + backgroundHheight,
      `Date: ${moment(receiptData.fee_transaction_date).format("Do MMM YYYY")}`
    );
    doc.text(
      9,
      167 + backgroundHheight,
      `Amount: Rs. ${receiptData.fee_payment_amount}`
    );
    doc.text(
      9,
      173 + backgroundHheight,
      `Amount in Words: ${toPascalCase(
        converter.toWords(receiptData.fee_payment_amount.toString())
      )} only.`
    );
    // -------------------------------------
    doc.text(9, 304, `Date :`);
    doc.text(19, 304, ` ${moment().format("Do MMM YYYY")}`);
    // doc.setFontSize(9);
    // doc.text(
    //   90,
    //   299,
    //   `${receiptData.finance.financeHead.staffFirstName} ${
    //     receiptData.finance.financeHead.staffMiddleName
    //       ? receiptData.finance.financeHead.staffMiddleName
    //       : ""
    //   } ${receiptData.finance.financeHead.staffLastName}`,
    //   {
    //     align: "center",
    //   }
    // );
    // doc.setFont(undefined, "bold");
    // doc.setFontSize(10);
    // doc.text(90, 304, `Finance Manager`, {
    //   align: "center",
    // });

    if (receiverSignature)
      doc.addImage(
        `${imageShowUrl1}/${receiverSignature}`,
        "JPEG",
        133,
        260,
        40,
        40
      );
    doc.setFont(undefined, "normal");
    doc.setFontSize(9);
    doc.text(153, 298, `${receiverName}`, {
      align: "center",
    });

    doc.setFont(undefined, "bold");
    doc.setFontSize(10);
    doc.text(153, 304, "Receiver", {
      align: "center",
    });

    // doc.setTextColor(0, 0, 255);
    // doc.setFontSize(7);
    // doc.text(width - 20, 302, `Online Automated`, null, 50);
    // doc.text(width - 18, 305, `Generated fee receipt`, null, 50);
    // doc.text(width - 14, 306, `Through Qviple`, null, 50);

    doc.setLineWidth(0.2);
    doc.setDrawColor(18, 18, 18);
    doc.line(0, 310, width, 310);

    doc.setTextColor(18, 18, 18);
    doc.setFontSize(8);
    doc.setFont(undefined, "normal");
    doc.text(
      width / 2,
      315,
      "Note : No one except one who is making this certificate should interfere with any details of this invoice, othewise students will be expelled and legal action will be taken.",
      "center"
    );
  } else if (statusY !== "" && newHeight < 258) {
    // doc.setTextColor(0, 0, 0);
    // doc.setFont(undefined, "bold");

    // doc.setFontSize(11);
    // doc.text(9, backgroundHheight + 108, ` Received Through: `);
    // doc.setFont(undefined, "normal");
    // doc.text(
    //   44,
    //   backgroundHheight + 108,
    //   `${accountData.finance_bank_name ?? "N/A"}, ${
    //     accountData.finance_bank_account_name ?? "N/A"
    //   }, A/c No:  ${accountData.finance_bank_account_number ?? "N/A"}`
    // );

    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, "bold");
    doc.text(9, 108 + backgroundHheight, ` On Account of: `);

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

    const textLines2 = doc.splitTextToSize(received_text, width);

    if (textLines2.length > 1) {
      let verticalOffset = 114 + backgroundHheight;
      let horizontalOffset = 10;
      doc.setFont(undefined, "normal");
      doc.setFontSize(11);
      doc.setTextColor(18, 18, 18);
      doc.text(horizontalOffset, verticalOffset, textLines2, "left");
      verticalOffset = textLines2.length + 151;
    } else {
      let verticalOffset = 114 + backgroundHheight;
      let horizontalOffset = 10;
      doc.setFontSize(11);
      doc.setFont(undefined, "normal");
      doc.setTextColor(18, 18, 18);
      doc.setFontSize(12);
      doc.text(horizontalOffset, verticalOffset, textLines2, "left");
      verticalOffset = textLines2.length + 151;
    }

    // ----------
    doc.setPage(2);
    const toPascalCase = (str) =>
      (str.match(/[a-zA-Z0-9]+/g) || [])
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join(" ");

    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, "bold");
    doc.setFontSize(11);
    doc.text(9, 6 + hight, `Bank Transaction Details: `);

    doc.setFont(undefined, "normal");
    doc.text(
      9,
      12 + hight,
      `Payment Mode:  ${
        receiptData?.set_off_status === "Set Off"
          ? "SetOff"
          : `${receiptData.fee_payment_mode} (${
              receiptData?.order_history?.razor_query?.[0]?.method ?? "N/A"
            }) `
      }`
    );

    doc.text(
      9,
      18 + hight,
      `Bank Name: ${
        receiptData.fee_bank_name ??
        receiptData?.order_history?.razor_query?.[0]?.bank ??
        "N/A"
      }`
    );
    doc.text(
      9,
      24 + hight,
      `Bank Holder Name: ${receiptData.fee_bank_holder ?? "N/A"} `
    );
    doc.text(
      9,
      30 + hight,
      `Transaction Id: ${
        receiptData.fee_utr_reference ??
        receiptData.order_history?.razorpay_payment_id ??
        "N/A"
      }`
    );
    doc.text(
      9,
      36 + hight,
      `Date: ${moment(receiptData.fee_transaction_date).format("Do MMM YYYY")}`
    );
    doc.text(9, 42 + hight, `Amount: Rs. ${receiptData.fee_payment_amount}`);
    doc.text(
      9,
      48 + hight,
      `Amount in Words: ${toPascalCase(
        converter.toWords(receiptData.fee_payment_amount.toString())
      )} only.`
    );
    // ----------

    doc.text(9, hight + 75, `Date :`);
    doc.text(19, hight + 75, ` ${moment().format("Do MMM YYYY")}`);

    if (receiverSignature)
      doc.addImage(
        `${imageShowUrl1}/${receiverSignature}`,
        "JPEG",
        133,
        hight + 31,
        40,
        40
      );
    doc.setFont(undefined, "normal");
    doc.setFontSize(9);
    doc.text(153, hight + 69, `${receiverName}`, {
      align: "center",
    });

    doc.setFont(undefined, "bold");
    doc.setFontSize(10);
    doc.text(153, hight + 75, "Receiver", {
      align: "center",
    });

    // doc.setTextColor(0, 0, 255);
    // doc.setFontSize(7);
    // doc.text(width - 20, hight + 73, `Online Automated`, null, 50);
    // doc.text(width - 18, hight + 76, `Generated fee receipt`, null, 50);
    // doc.text(width - 14, hight + 77, `Through Qviple`, null, 50);

    doc.setLineWidth(0.2);
    doc.setDrawColor(18, 18, 18);
    doc.line(0, hight + 81, width, hight + 81);

    doc.setTextColor(18, 18, 18);
    doc.setFontSize(8);
    doc.setFont(undefined, "normal");
    doc.text(
      width / 2,
      hight + 86,
      "Note : No one except one who is making this certificate should interfere with any details of this invoice, othewise students will be expelled and legal action will be taken.",
      "center"
    );
  } else if (statusY !== "" && newHeight >= 258 && newHeight < pageHeight) {
    doc.setPage(2);
    // doc.setTextColor(0, 0, 0);
    // doc.setFont(undefined, "bold");

    // doc.setFontSize(11);
    // doc.text(9, hight + 16, ` Received Through: `);
    // doc.setFont(undefined, "normal");
    // doc.text(
    //   9,
    //   hight + 26,
    //   `${accountData.finance_bank_name ?? "N/A"}, ${
    //     accountData.finance_bank_account_name ?? "N/A"
    //   }, A/c No:  ${accountData.finance_bank_account_number ?? "N/A"}`
    // );

    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, "bold");
    doc.text(9, 22 + hight, ` On Account of: `);

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

    const textLines2 = doc.splitTextToSize(received_text, width);

    if (textLines2.length > 1) {
      let verticalOffset = 28 + hight;
      let horizontalOffset = 10;
      doc.setFont(undefined, "normal");
      doc.setFontSize(11);
      doc.setTextColor(18, 18, 18);
      doc.text(horizontalOffset, verticalOffset, textLines2, "left");
      verticalOffset = textLines2.length + 151;
    } else {
      let verticalOffset = 28 + hight;
      let horizontalOffset = 10;
      doc.setFontSize(11);
      doc.setFont(undefined, "normal");
      doc.setTextColor(18, 18, 18);
      doc.setFontSize(12);
      doc.text(horizontalOffset, verticalOffset, textLines2, "left");
      verticalOffset = textLines2.length + 151;
    }

    // ----------

    const toPascalCase = (str) =>
      (str.match(/[a-zA-Z0-9]+/g) || [])
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join(" ");

    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, "bold");
    doc.setFontSize(11);
    doc.text(9, 44 + hight, `Bank Transaction Details: `);

    doc.setFont(undefined, "normal");
    doc.text(
      9,
      51 + hight,
      `Payment Mode:  ${
        receiptData?.set_off_status === "Set Off"
          ? "SetOff"
          : `${receiptData.fee_payment_mode} (${
              receiptData.order_history?.razor_query?.[0]?.method ?? "N/A"
            }) `
      }`
    );

    doc.text(
      9,
      57 + hight,
      `Bank Name: ${
        receiptData.fee_bank_name ??
        receiptData.order_history?.razor_query?.[0]?.bank ??
        "N/A"
      }`
    );
    doc.text(
      9,
      63 + hight,
      `Bank Holder Name: ${receiptData.fee_bank_holder ?? "N/A"} `
    );
    doc.text(
      9,
      69 + hight,
      `Transaction Id: ${
        receiptData.fee_utr_reference ??
        receiptData.order_history?.razorpay_payment_id ??
        "N/A"
      }`
    );
    doc.text(
      9,
      75 + hight,
      `Date: ${moment(receiptData.fee_transaction_date).format("Do MMM YYYY")}`
    );
    doc.text(9, 81 + hight, `Amount: Rs. ${receiptData.fee_payment_amount}`);
    doc.text(
      9,
      87 + hight,
      `Amount in Words: ${toPascalCase(
        converter.toWords(receiptData.fee_payment_amount.toString())
      )} only.`
    );

    doc.text(9, hight + 115, `Date :`);
    doc.text(19, hight + 115, ` ${moment().format("Do MMM YYYY")}`);
    // doc.setFontSize(9);
    // doc.text(
    //   90,
    //   hight + 110,
    //   `${receiptData.finance.financeHead.staffFirstName} ${
    //     receiptData.finance.financeHead.staffMiddleName
    //       ? receiptData.finance.financeHead.staffMiddleName
    //       : ""
    //   } ${receiptData.finance.financeHead.staffLastName}`,
    //   {
    //     align: "center",
    //   }
    // );
    // doc.setFont(undefined, "bold");
    // doc.setFontSize(10);
    // doc.text(90, hight + 115, `Finance Manager`, {
    //   align: "center",
    // });

    if (receiverSignature)
      doc.addImage(
        `${imageShowUrl1}/${receiverSignature}`,
        "JPEG",
        133,
        hight + 71,
        40,
        40
      );

    doc.setFont(undefined, "normal");
    doc.setFontSize(9);
    doc.text(153, hight + 109, `${receiverName}`, {
      align: "center",
    });

    doc.setFont(undefined, "bold");
    doc.setFontSize(10);
    doc.text(153, hight + 115, "Receiver", {
      align: "center",
    });

    // doc.setTextColor(0, 0, 255);
    // doc.setFontSize(7);
    // doc.text(width - 20, hight + 113, `Online Automated`, null, 50);
    // doc.text(width - 18, hight + 116, `Generated fee receipt`, null, 50);
    // doc.text(width - 14, hight + 117, `Through Qviple`, null, 50);

    doc.setLineWidth(0.2);
    doc.setDrawColor(18, 18, 18);
    doc.line(0, hight + 121, width, hight + 121);

    doc.setTextColor(18, 18, 18);
    doc.setFontSize(8);
    doc.setFont(undefined, "normal");
    doc.text(
      width / 2,
      hight + 126,
      "Note : No one except one who is making this certificate should interfere with any details of this invoice, othewise students will be expelled and legal action will be taken.",
      "center"
    );
  } else if (statusY !== "" && newHeight > pageHeight) {
    doc.setPage(2);
    // doc.setTextColor(0, 0, 0);
    // doc.setFont(undefined, "bold");

    // doc.setFontSize(11);
    // doc.text(9, hight + 16, ` Received Through: `);
    // doc.setFont(undefined, "normal");
    // doc.text(
    //   9,
    //   hight + 26,
    //   `${accountData.finance_bank_name ?? "N/A"}, ${
    //     accountData.finance_bank_account_name ?? "N/A"
    //   }, A/c No:  ${accountData.finance_bank_account_number ?? "N/A"}`
    // );

    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, "bold");
    doc.text(9, 22 + hight, ` On Account of: `);

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

    const textLines2 = doc.splitTextToSize(received_text, width);

    if (textLines2.length > 1) {
      let verticalOffset = 28 + hight;
      let horizontalOffset = 10;
      doc.setFont(undefined, "normal");
      doc.setFontSize(11);
      doc.setTextColor(18, 18, 18);
      doc.text(horizontalOffset, verticalOffset, textLines2, "left");
      verticalOffset = textLines2.length + 151;
    } else {
      let verticalOffset = 28 + hight;
      let horizontalOffset = 10;
      doc.setFontSize(11);
      doc.setFont(undefined, "normal");
      doc.setTextColor(18, 18, 18);
      doc.setFontSize(12);
      doc.text(horizontalOffset, verticalOffset, textLines2, "left");
      verticalOffset = textLines2.length + 151;
    }

    // ----------

    const toPascalCase = (str) =>
      (str.match(/[a-zA-Z0-9]+/g) || [])
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join(" ");

    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, "bold");
    doc.setFontSize(11);
    doc.text(9, 44 + hight, `Bank Transaction Details: `);

    doc.setFont(undefined, "normal");
    doc.text(
      9,
      51 + hight,
      `Payment Mode:  ${
        receiptData?.set_off_status === "Set Off"
          ? "SetOff"
          : `${receiptData.fee_payment_mode} (${
              receiptData.order_history?.razor_query?.[0]?.method ?? "N/A"
            }) `
      }`
    );

    doc.text(
      9,
      57 + hight,
      `Bank Name: ${
        receiptData.fee_bank_name ??
        receiptData.order_history?.razor_query?.[0]?.bank ??
        "N/A"
      }`
    );
    doc.text(
      9,
      63 + hight,
      `Bank Holder Name: ${receiptData.fee_bank_holder ?? "N/A"} `
    );
    doc.text(
      9,
      69 + hight,
      `Transaction Id: ${
        receiptData.fee_utr_reference ??
        receiptData.order_history?.razorpay_payment_id ??
        "N/A"
      }`
    );
    doc.text(
      9,
      75 + hight,
      `Date: ${moment(receiptData.fee_transaction_date).format("Do MMM YYYY")}`
    );
    doc.text(9, 81 + hight, `Amount: Rs. ${receiptData.fee_payment_amount}`);
    doc.text(
      9,
      87 + hight,
      `Amount in Words: ${toPascalCase(
        converter.toWords(receiptData.fee_payment_amount.toString())
      )} only.`
    );

    doc.text(9, hight + 115, `Date :`);
    doc.text(19, hight + 115, ` ${moment().format("Do MMM YYYY")}`);
    // doc.setFontSize(9);
    // doc.text(
    //   90,
    //   hight + 110,
    //   `${receiptData.finance.financeHead.staffFirstName} ${
    //     receiptData.finance.financeHead.staffMiddleName
    //       ? receiptData.finance.financeHead.staffMiddleName
    //       : ""
    //   } ${receiptData.finance.financeHead.staffLastName}`,
    //   {
    //     align: "center",
    //   }
    // );
    // doc.setFont(undefined, "bold");
    // doc.setFontSize(10);
    // doc.text(90, hight + 115, `Finance Manager`, {
    //   align: "center",
    // });
    if (receiverSignature)
      doc.addImage(
        `${imageShowUrl1}/${receiverSignature}`,
        "JPEG",
        133,
        hight + 670,
        40,
        40
      );
    doc.setFont(undefined, "normal");
    doc.setFontSize(9);
    doc.text(153, hight + 109, `${receiverName}`, {
      align: "center",
    });

    doc.setFont(undefined, "bold");
    doc.setFontSize(10);
    doc.text(153, hight + 115, "Receiver", {
      align: "center",
    });

    // doc.setTextColor(0, 0, 255);
    // doc.setFontSize(7);
    // doc.text(width - 20, hight + 113, `Online Automated`, null, 50);
    // doc.text(width - 18, hight + 116, `Generated fee receipt`, null, 50);
    // doc.text(width - 14, hight + 117, `Through Qviple`, null, 50);

    doc.setLineWidth(0.2);
    doc.setDrawColor(18, 18, 18);
    doc.line(0, hight + 121, width, hight + 121);

    doc.setTextColor(18, 18, 18);
    doc.setFontSize(8);
    doc.setFont(undefined, "normal");
    doc.text(
      width / 2,
      hight + 126,
      "Note : No one except one who is making this certificate should interfere with any details of this invoice, othewise students will be expelled and legal action will be taken.",
      "center"
    );
  }

  // -----------------------------------

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

export default feeReceiptPdf;
