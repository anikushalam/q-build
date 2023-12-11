import jsPDF from "jspdf";
var doc = new jsPDF({
  format: [240, 210],
});

var width = doc.internal.pageSize.getWidth();
// var height = doc.internal.pageSize.getHeight();

// const sign = "/images/certificate/sign.jpg";
// const qviple = "/images/certificate/qviple.jpg";

const pdfPaySlip = (
  imgData,
  instituteText,
  staff,
  month,
  attendence,
  leaves,
  other,
  authority,
  date
) => {
  // doc.addFont("Arimo-Regular.ttf", "Arimo", "normal");
  // doc.addFont("Arimo-Bold.ttf", "Arimo", "bold");
  // doc.setFont("Arimo");

  // doc.addImage(imgData, "JPEG", 5, 5, 25, 25);

  doc.addImage(imgData, "JPEG", 11.3, 6.8, 28, 28);
  doc.setLineWidth(8);
  doc.setDrawColor(255, 255, 255);
  doc.circle(25.4, 20, 16);
  doc.setLineWidth(0);
  const textLines = doc.splitTextToSize(instituteText.insName, 146);
  doc.setFont("", "normal", "");
  if (textLines.length > 1) {
    let verticalOffset = 15;
    doc.setFont("700");
    doc.setTextColor(18, 18, 18);
    doc.setFontSize(16);
    doc.text(width / 2, verticalOffset, textLines, "center");
    verticalOffset = textLines.length + 145;
  } else {
    let verticalOffset = 15;
    doc.setFont("700");
    doc.setTextColor(18, 18, 18);
    doc.setFontSize(18);
    doc.text(width / 2, verticalOffset, textLines, "center");
    verticalOffset = textLines.length + 145;
  }

  doc.setFont("Arial", "normal", "400");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);
  doc.text(
    width / 2,
    32,

    `${instituteText.insAddress} ${instituteText.insDistrict} ${instituteText.insState}`,
    "center"
  );

  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);
  doc.text(
    width / 2,
    24,
    `Mob No : ${instituteText.insPhoneNumber} , Mail : ${instituteText.insEmail}`,
    "center"
  );

  doc.setLineWidth(0.05);
  doc.setDrawColor(153, 153, 153);
  doc.line(0, 35, width, 35);

  const sName = `${staff.staffFirstName} ${
    staff.staffMiddleName ? staff.staffMiddleName : ""
  } ${staff.staffLastName}`;

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);
  doc.text(9, 55, ` Name :  ${sName}`);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);
  doc.text(width - 40, 55, `Salary slip for ${month}`, "center");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);
  doc.text(9, 63, `Working Days :  ${attendence}`);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);
  doc.text(9, 71, ` Paid Leaves :  ${leaves}`);

  //   ----------------------------------------
  doc.setLineWidth(8);
  doc.setDrawColor(0, 26, 114);
  doc.line(9, 91, width / 2, 91);

  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text(11, 92, `Particular`);

  doc.setTextColor(255, 255, 255);
  doc.text(width / 2 - 15, 92, `Amount`, "center");

  doc.setTextColor(0, 0, 0);
  doc.text(11, 100, `Basic Salary`);

  doc.setTextColor(0, 0, 0);
  doc.text(width / 2 - 15, 100, `${other.amount}`, "center");

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(9, 103, width / 2 - 0.3, 103);

  doc.setTextColor(0, 0, 0);
  doc.text(11, 108, `HRA`);

  doc.setTextColor(0, 0, 0);
  doc.text(width / 2 - 15, 108, `${other.hra}`, "center");

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(9, 111, width / 2 - 0.3, 111);

  doc.setFont("", "bold", "");
  doc.setTextColor(0, 0, 0);
  doc.text(11, 116, `Gross Total`);

  doc.setFont("Arimo");

  doc.setTextColor(0, 0, 0);
  doc.text(width / 2 - 15, 116, `${other.gross_salary}`, "center");

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(9, 119, width / 2 - 0.3, 119);

  doc.setTextColor(0, 0, 0);
  doc.setFont("", "normal", "");
  doc.text(11, 124, `Employees Provident Fund`);

  doc.setTextColor(0, 0, 0);
  doc.text(width / 2 - 15, 124, `${other.epf}`, "center");

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(9, 127, width / 2 - 0.3, 127);

  doc.setTextColor(0, 0, 0);
  doc.text(11, 132, `TDS`);

  doc.setTextColor(0, 0, 0);
  doc.text(width / 2 - 15, 132, `${other.tds}`, "center");

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(9, 135, width / 2 - 0.3, 135);

  doc.setTextColor(0, 0, 0);
  doc.setFont("", "bold", "");
  doc.text(11, 140, `Net Total`);

  doc.setTextColor(0, 0, 0);
  doc.text(width / 2 - 15, 140, `${other.net_total}`, "center");

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(9.3, 92, 9.3, 143);

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(69, 95, 69, 143);

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(width / 2 - 0.3, 92, width / 2 - 0.3, 143);

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(9, 143, width / 2 - 0.3, 143);

  // doc.rect(width - 69, width - 15, 55, 20);

  // doc.addImage(sign, "JPEG", width - 60, 197, 28, 15);

  // doc.addImage(qviple, "JPEG", width - 35, 8, 20, 8);

  doc.setTextColor(0, 0, 0);
  doc.text(width - 42, 223, `Name : ${authority}`, "center");

  doc.setTextColor(0, 0, 0);
  doc.setFont("", "normal", "");
  doc.text(width - 42, 231, "Appropriate Authority", "center");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(8);
  doc.setFont("", "normal", "");
  doc.text(9, 233, `Print Date : ${date}`);

  //   -------------------------------------------

  doc.save(`PaySlip.pdf`);
};

export default pdfPaySlip;
