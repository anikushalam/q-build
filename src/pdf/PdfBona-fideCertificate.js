import jsPDF from "jspdf";

var doc = new jsPDF({
  orientation: "l",
  unit: "mm",
  format: [271, 381],
  // putOnlyUsedFonts:true,
  // floatPrecision: 16 // or "smart", default is 16
});

function addWaterMark(doc, value) {
  var totalPages = doc.internal.getNumberOfPages();

  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setTextColor(150);
    doc.text(50, doc.internal.pageSize.height - 30, `${value}`);
  }

  return doc;
}

const PdfBonaFideCertificate = (
  img,
  affliatedImg,
  insData,
  grNumber,
  userImg,
  // classData,
  // dateData,
  subject,
  studentData,
  firstCopy,
  secondCopy,
  thirdCopy
) => {
  // console.info(studentData);
  var width = doc.internal.pageSize.getWidth();

  const sName = `${studentData?.studentFirstName} ${
    studentData?.studentMiddleName ? studentData?.studentMiddleName : ""
  } ${studentData?.studentLastName}`;

  doc.addImage(img, "JPEG", 24.8, 14.9, 40, 40);
  doc.addImage(affliatedImg, "JPEG", width - 64.8, 14.9, 40, 40);

  doc.setLineWidth(17);
  doc.setDrawColor(255, 255, 255);
  doc.circle(44.8, 34.9, 28.6);
  doc.setLineWidth(0);

  doc.setLineWidth(17);
  doc.setDrawColor(255, 255, 255);
  doc.circle(width - 44.8, 34.9, 28.6);
  doc.setLineWidth(0);

  const textLines = doc.splitTextToSize(studentData?.institute?.insName, 150);

  if (textLines.length > 1) {
    let verticalOffset = 15;
    doc.setFont("Inter", "normal", "700");
    doc.setTextColor(18, 18, 18);
    doc.setFontSize(20);
    doc.text(190, verticalOffset, textLines, "center");
    verticalOffset = textLines.length + 135;
  } else {
    let verticalOffset = 20;
    doc.setFont("Inter", "normal", "700");
    doc.setTextColor(18, 18, 18);
    doc.setFontSize(20);
    doc.text(190, verticalOffset, textLines, "center");
    verticalOffset = textLines.length + 135;
  }

  doc.setFont("Arial", "normal", "400");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(15);
  doc.text(
    190,
    32,

    `${studentData.institute.insAddress} ${studentData.institute.insDistrict} ${studentData.institute.insState} ${studentData.institute.insPincode}`,
    "center"
  );

  doc.setFont("Inter", "normal", "400");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(15);
  doc.text(
    190,
    41,
    `Tel No : ${studentData.institute.insPhoneNumber} , Mob No: ${studentData.institute.insPhoneNumber}`,
    "center"
  );

  doc.setDrawColor(137, 137, 137);
  doc.setLineWidth(0.3);
  doc.line(120, 63, 155, 63);

  doc.setFont("Inter", "italic", "400");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(20);
  doc.text(186, 65, "Bona-fide Certificate", null, null, "center");

  doc.setDrawColor(137, 137, 137);
  doc.setLineWidth(0.3);
  doc.line(218, 63, 253, 63);

  doc.setFont("Inter", "normal", "700");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(17);
  doc.text(20, 90, "Date: ");

  const today2 = new Date().toISOString();

  const figDate2 = today2.split("T")[0];
  const figDate21 = figDate2.split("-");

  let figDate22 = [];

  for (let index = figDate21.length - 1; index >= 0; index--) {
    figDate22.push(figDate21[index]);
  }

  var r_l_day = new Date().getDate();
  var r_l_month = new Date().getMonth() + 1;
  var r_l_year = new Date().getFullYear();
  if (r_l_month < 10) {
    r_l_month = `0${r_l_month}`;
  }
  if (r_l_day < 10) {
    r_l_day = `0${r_l_day}`;
  }
  var rDate = `${r_l_day}-${r_l_month}-${r_l_year}`;

  doc.setFont("Inter", "normal", "600");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(17);
  // doc.text(35, 90, `${figDate22[0]}-${figDate22[1]}-${figDate22[2]}`);
  doc.text(35, 90, rDate);

  doc.addImage(userImg, "JPG", 310, 80, 48, 53);

  doc.setFont("Inter", "italic", "700");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(15);
  doc.text(318, 143, `Gr No: ${grNumber}`);

  doc.setFont("Inter", "normal", "700");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(17);
  doc.text(20, 130, "Subject/Reason:  ");

  doc.setFont("Inter", "normal", "600");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(17);
  doc.text(65, 130, `${subject?.reason}`, "left");

  const firstLine = `This is to certify that Mr./Miss ** ${sName}, ** Birthday as per records of institute is ${
    studentData?.studentDOB ?? "N/A"
  },`;

  const l1p0 = firstLine.split("**")[0];
  const l1p1 = firstLine.split("**")[1];
  const l1p2 = firstLine.split("**")[2];

  doc.setFont("Inter", "normal", "600");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(17);
  doc.text(42, 157, l1p0);

  const width0 = doc.getTextWidth(l1p0);
  const startX1 = 42 + width0;

  doc.setFont("Inter", "normal", "700");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(17);
  doc.text(startX1, 157, l1p1);

  const width1 = doc.getTextWidth(l1p1);
  const startX2 = startX1 + width1;

  doc.setFont("Inter", "normal", "600");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(17);
  doc.text(startX2, 157, l1p2);

  const secondLine = ` is a bona-fide student of this instutite, studing in class **${
    studentData?.studentClass?.classTitle +
    ",  " +
    studentData?.department?.dName +
    ",  " +
    studentData?.batches?.batchName
  }.`;

  const l2p0 = secondLine.split("**")[0];
  const l2p1 = secondLine.split("**")[1];

  doc.setFont("Inter", "normal", "600");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(17);
  doc.text(20, 167, l2p0);

  const width10 = doc.getTextWidth(l2p0);
  const startX11 = 20 + width10;

  doc.setFont("Inter", "normal", "700");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(17);
  doc.text(startX11, 167, l2p1);

  if (subject?.message) {
    doc.setFont("Inter", "normal", "600");
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(17);
    doc.text(20, 189, `Note : ${subject?.message}`, "left");
  }

  // doc.setFont("Inter", "normal", "600");
  // doc.setTextColor(0, 0, 0);
  // doc.setFontSize(17);
  // doc.text(
  //   42,
  //   189,
  //   "To the best of my knowledge he/she bears a good moral character. "
  // );

  // doc.setFont("Inter", "normal", "700");
  // doc.setTextColor(0, 0, 0);
  // doc.setFontSize(17);
  // doc.text(20, 239, "District: ");

  // const dist = "District: ";
  // const width20 = doc.getTextWidth(dist);
  // const startX20 = 35 + width20;

  // doc.setFont("Inter", "normal", "600");
  // doc.setTextColor(0, 0, 0);
  // doc.setFontSize(17);
  // doc.text(
  //   20,
  //   239,
  //   `${studentData?.department?.dName ?? "N/A"}, ${
  //     studentData?.batches?.batchName ?? "N/A"
  //   }`
  // );

  // const width21 = doc.getTextWidth(
  //   `${studentData?.institute?.insDistrict} - ${studentData?.institute?.insPincode}`
  // );

  const stamp = "Stamp Of Institute";

  doc.setFont("Inter", "bold", "700");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(17);
  doc.text(20, 239, stamp);

  const Principal = " Principal/Competent Authority: ";

  doc.setFont("Inter", "normal", "700");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(17);
  doc.text(260, 239, Principal);

  const width3 = doc.getTextWidth(Principal);
  const startX3 = 255 + width3;

  doc.setFont("Inter", "normal", "600");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(17);
  doc.text(
    startX3,
    239,
    `${insData?.insPrinciple ? insData?.insPrinciple : ""}`
  );
  if (firstCopy) {
  } else {
    doc = addWaterMark(doc, "Qviple Copy");
  }

  // doc.save(
  //   `${studentData?.studentFirstName} ${studentData?.studentLastName}-Bonafide.pdf`
  // );
  doc.output("dataurlnewwindow", {
    filename: `${studentData?.studentFirstName} ${
      studentData?.studentMiddleName ?? ""
    } ${studentData?.studentLastName}-Bonafide.pdf`,
  });
};
export default PdfBonaFideCertificate;
