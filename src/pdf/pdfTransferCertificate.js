import jsPDF from "jspdf";
import { font } from "./fonts/font";
import { callAddFont } from "./fonts/SakalBharati-normal";
import converter from "number-to-words";
var doc = new jsPDF();

function addLeavingWaterMark(doc, value) {
  var totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setTextColor(234, 238, 238);
    doc.setFontSize(100);
    doc.text(60, doc.internal.pageSize.height - 80, `${value}`, null, 50);
  }
  return doc;
}

const PdfTransferCertificate = (
  img,
  affliatedImg,
  leavinggData,
  remarks,
  editableDataa,
  firstLCopy,
  leavingData
) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // ---------------------------------
  // var logo = new Image();

  // logo.src = img;
  // logo.crossOrigin = "";

  // logo.onload =  function () {
  //   doc.addImage(this, 20, 7.6, 48, 25);
  // };
  // ------------------------------------
  var width = doc.internal.pageSize.getWidth();

  doc.addFileToVFS("WorkSans-normal.ttf", font);
  doc.addFont("WorkSans-normal.ttf", "WorkSans", "normal");

  // doc.addImage(insLogo, "JPEG", 9, 11.5, 28, 15);
  doc.addImage(img, "JPEG", 10.5, 7.3, 30, 30);
  doc.addImage(affliatedImg, "JPEG", width - 40.5, 7.3, 30, 30);
  doc.setLineWidth(9);
  doc.setDrawColor(255, 255, 255);
  doc.circle(25.5, 22.4, 19);
  doc.setLineWidth(0);

  doc.setLineWidth(9);
  doc.setDrawColor(255, 255, 255);
  doc.circle(width - 25.5, 22.4, 19);
  doc.setLineWidth(0);

  const textLines = doc.splitTextToSize(
    leavingData.insName,

    145
  );

  if (textLines.length > 1) {
    let verticalOffset = 20;
    doc.setFont("700");
    doc.setTextColor(18, 18, 18);
    doc.setFontSize(16);
    doc.text(107, verticalOffset, textLines, "center");
    verticalOffset = textLines.length + 145;
  } else {
    let verticalOffset = 20;
    doc.setFont("700");
    doc.setTextColor(18, 18, 18);
    doc.setFontSize(18);
    doc.text(107, verticalOffset, textLines, "center");
    verticalOffset = textLines.length + 145;
  }
  doc.setFont("", "normal", "");
  doc.setFontSize(10);

  doc.setFont("SakalBharati", "normal");
  doc.text(
    107,
    11.5,
    editableDataa?.insAffiliated ? editableDataa?.insAffiliated : "",

    "center"
  );

  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    108,
    textLines.length > 1 ? 32 : 28,
    leavingData.insAddress,
    // "Hirabai Haridas Vidyanagari, Mumbai Agra Road, Panchavati, Nashik, Maharashtra",
    "center"
  );

  doc.setFont("WorkSans");

  doc.setTextColor(18, 18, 18);
  doc.setFontSize(8);
  doc.text(
    78,
    textLines.length > 1 ? 38 : 34,

    `Tel No : ${leavingData.insPhoneNumber} , Mob No: ${leavingData.insPhoneNumber}`
  );

  doc.setFont("700");

  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(41, 44.5, "", null, null, "left");

  const spliteditable = editableDataa?.insEditableText_one?.match(/.{1,115}/g);

  doc.setFont("600");

  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    107,
    44.5,
    spliteditable[0] ? spliteditable[0] : "",
    null,
    null,
    "center"
  );

  doc.setFont("600");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);

  doc.text(
    107,
    50.5,
    spliteditable[1] ? spliteditable[1] : "",
    null,
    null,
    "center"
  );

  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.3);
  doc.line(0, 57, 210, 57);

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(10.5, 64, `Gr No :`, null, null, "left");

  doc.setFont("600");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(24, 64, `${leavingData.studentGRNO}`, null, null, "left");

  doc.setFont("Inter", "normal", "400");
  doc.setTextColor(18, 18, 18);
  doc.setFont("700");
  doc.setFontSize(11);
  doc.text(50, 64, `Book No :`, null, null, "left");

  doc.setFont("600");
  doc.setFontSize(11);
  doc.text(70, 64, `${leavingData.bookNO}`, null, null, "center");

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(100, 64, `Certificate No :`, null, null, "center");

  doc.setFont("600");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    115,
    64,
    `${leavingData.studentCertificateNo}`,
    null,
    null,
    "center"
  );

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(160, 64, `UDISE No/Student ID No:`, null, null, "center");

  doc.setFont("600");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    194,
    64,
    leavingData.uidaiNumber ? `${leavingData.uidaiNumber}` : "",
    null,
    null,
    "center"
  );

  doc.setFont("800");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(18);
  doc.text(107, 78, `Transfer Certificate`, null, null, "center");

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(41, 90, "", null, null, "center");

  // doc.setDrawColor(137, 137, 137);
  // doc.setLineWidth(0.15);
  // doc.line(10.5, 92, 198, 92);

  doc.setFont("600");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(107, 90, editableDataa?.insEditableText_two, null, null, "center");

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(
    10.5,
    106,
    "Full Name Of Student :",

    null,
    null,
    "left"
  );

  const sName = `${leavingData.studentFirstName} ${
    leavingData.studentMiddleName ? leavingData.studentMiddleName : ""
  } ${leavingData.studentLastName}`;

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    62,
    106,
    sName,
    // "Siddhant Mahesh Gujrathi",
    null,
    null,
    "left"
  );

  // --------------------------------

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 117, "Mother’s Name :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(62, 117, leavingData.motherName, null, null, "left");

  // --------------------------------

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 128, "Religion :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    62,
    128,
    leavingData.religon ? leavingData.religon : "",
    null,
    null,
    "left"
  );

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(118, 128, "Caste :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    152,
    128,
    leavingData.caste ? leavingData.caste : "",
    null,
    null,
    "left"
  );

  // --------------------------------

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 139, "Nationality :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    62,
    139,
    leavingData.nationality ? leavingData.nationality : "",
    null,
    null,
    "left"
  );

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(118, 139, "Mother Tongue :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    152,
    139,
    leavingData.motherTounge ? leavingData.motherTounge : "",
    null,
    null,
    "left"
  );

  // --------------------------------

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 148, "Birth Place :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    62,
    148,
    leavingData.birthPlace ? leavingData.birthPlace : "",
    null,
    null,
    "left"
  );

  // doc.setFont("700");
  // doc.setTextColor(18, 18, 18);
  // doc.setFontSize(12);
  // doc.text(118, 148, " UDIse No. :", null, null, "left");

  // doc.setFont("500");
  // doc.setTextColor(18, 18, 18);
  // doc.setFontSize(11);
  // doc.text(
  //   155,
  //   148,
  //   leavingData.udise ? leavingData.udise : "",
  //   null,
  //   null,
  //   "left"
  // );

  // --------------------------------

  const date = "22-12-1997";

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 159, "Date Of Birth :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    62,
    159,
    leavingData.studentDOB ? leavingData.studentDOB : "",
    null,
    null,
    "left"
  );

  const fig = leavingData.studentDOB.split("-");

  const toPascalCase = (str) =>
    (str.match(/[a-zA-Z0-9]+/g) || [])
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join(" ");

  const dd = toPascalCase(converter.toWords(fig[0]));
  const mm = months[fig[1] - 1];
  const yy = toPascalCase(converter.toWords(fig[2]));

  const figureDate = `${dd} of ${mm} ${yy}`;

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(62, 170, figureDate, null, null, "left");

  // --------------------------------

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 181, "Previous School/College :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    62,
    181,
    leavingData.previous ? leavingData.previous : "",
    null,
    null,
    "left"
  );

  // --------------------------------

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 192, "Institute Joining Date :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    62,
    192,
    leavingData.joiningDate ? leavingData.joiningDate.split("T")[0] : "",
    null,
    null,
    "left"
  );

  // --------------------------------

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 201, "Study Progress :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    62,
    201,
    leavingData.study ? leavingData.study : "",
    null,
    null,
    "left"
  );

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(118, 201, "Behaviour :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    152,
    201,
    leavingData.behaviour ? leavingData.behaviour : "",
    null,
    null,
    "left"
  );

  // --------------------------------

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 214, "Institute Leaving Date :", null, null, "left");

  const today = new Date().toDateString();

  const figDate = today.split(" ");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    62,
    214,
    `${figDate[2]} ${figDate[1]} ${figDate[3]}`,
    null,
    null,
    "left"
  );

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(118, 214, "Course Duration :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    152,
    214,
    leavingData.courseDuration ? leavingData.courseDuration : "",
    null,
    null,
    "left"
  );

  // --------------------------------

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 225, "Was Studing in, From :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    62,
    225,
    leavingData.studyingIn ? leavingData.studyingIn : "",
    null,
    null,
    "left"
  );

  // --------------------------------

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 236, "Reason For Leaving :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    62,
    236,
    leavingData.reason ? leavingData.reason : "",
    null,
    null,
    "left"
  );

  // --------------------------------

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 247, "Remarks:", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    62,
    247,
    leavingData.remarks ? leavingData.remarks : "",
    null,
    null,
    "left"
  );

  // --------------------------------

  doc.setDrawColor(15, 132, 178);
  doc.setLineWidth(5.3);
  doc.line(0, 257, 210, 257);

  doc.setFont("500");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(
    105,
    257.8,
    "Giving this certificate all information is correct as per institute register.",
    null,
    null,
    "center"
  );

  // --------------------------------

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 276, "Date :", null, null, "left");

  const today2 = new Date().toISOString();

  const figDate2 = today2.split("T")[0];
  const figDate21 = figDate2.split("-");

  let figDate22 = [];

  for (let index = figDate21.length - 1; index >= 0; index--) {
    figDate22.push(figDate21[index]);
  }

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(
    22.5,
    276,
    `${figDate22[0]}-${figDate22[1]}-${figDate22[2]}`,

    null,
    null,
    "left"
  );

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(105, 276, "Clerk", null, null, "center");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(11);
  doc.text(180, 276, "Principal/Competent Authority", null, null, "center");

  // --------------------------------

  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.3);
  doc.line(0, 281, 210, 281);

  // --------------------------------

  doc.setFont("700");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(12);
  doc.text(10.5, 288, "Note :", null, null, "left");

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);
  doc.text(
    22.5,
    288,
    "No one except one who is making this certificate should interfere with any details of this certificate, other students will be ",
    null,
    null,
    "left"
  );

  doc.setFont("500");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);
  doc.text(
    22.5,
    292,
    "expelled and legal action will be taken.",
    null,
    null,
    "left"
  );

  if (firstLCopy) {
  } else if (!firstLCopy) {
    doc = addLeavingWaterMark(doc, "Duplicate");
  }

  // doc.save(
  //   `${leavinggData?.studentFirstName} ${leavinggData?.studentLastName}-leaving.pdf`
  // );
  doc.output("dataurlnewwindow", {
    filename: `${leavinggData?.studentFirstName} ${
      leavinggData?.studentMiddleName ?? ""
    } ${leavinggData?.studentLastName}-transfer.pdf`,
  });
};
export default PdfTransferCertificate;
