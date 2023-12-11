import jsPDF from "jspdf";
var doc = new jsPDF();

var width = doc.internal.pageSize.getWidth();
var height = doc.internal.pageSize.getHeight();

console.log(width, height);

const pdfSalarySlip = (salaryData) => {
  doc.addImage(salaryData?.img, "svg", 15, 5, 10, 10);

  doc.addFont("Arimo-Regular.ttf", "Arimo", "normal");
  doc.addFont("Arimo-Bold.ttf", "Arimo", "bold");
  doc.setFont("Arimo");

  doc.setFontSize(9);
  doc.setTextColor(18, 18, 18);
  doc.text(30, 9, `${salaryData?.name}`);

  doc.setFontSize(7);
  doc.setTextColor(18, 18, 18);
  doc.text(30, 14, `Index No. ${salaryData?.index}`);

  doc.setLineWidth(10);
  doc.setDrawColor(28, 2, 59);
  doc.line(0, 30, width, 30);

  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text(102, 31, `${salaryData?.month}`).setFont(undefined, "bold");

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(15, 45, `Salary Per Day :`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(190, 45, `${salaryData.salaryPerDay}`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(15, 53, `Attendance :`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(192, 53, `${salaryData.attendance}`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(15, 61, `Basic Salary :`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(184, 61, `${salaryData.basicSalary}`);

  doc.setLineWidth(0.1);
  doc.setDrawColor(0, 0, 0, 0.1);
  doc.line(0, 66, width, 66);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(15, 75, `Paid Leaves :`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(173, 75, `Total ${salaryData.paidLeaves} days`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(15, 83, `Paid Leaves Taken:`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(173, 83, `Total ${salaryData.paidLeavesTaken} days`);

  doc.setLineWidth(8);
  doc.setDrawColor(28, 2, 59);
  doc.line(15, 91, 198, 91);

  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text(30, 92, `Particular`);

  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text(163, 92, `Amount`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(30, 100, `Basic Salary`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(163, 100, `${salaryData.basicSalary}`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(30, 108, `HRA`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(163, 108, `${salaryData.hra}`);

  doc.setFontSize(10);
  doc.setFont("", "bold", "");
  doc.setTextColor(0, 0, 0);
  doc.text(30, 116, `Gross Total`);

  doc.setFont("Arimo");
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(163, 116, `${salaryData.grossTotal}`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(30, 124, `Employees Provident Fund`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(163, 124, `${salaryData.providentFund}`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(30, 132, `TDS`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(163, 132, `${salaryData.tds}`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.setFont("", "bold", "");
  doc.text(30, 140, `Net Total`);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(163, 140, `${salaryData.totalSalary}`);

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(15.5, 92, 15.5, 143);

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(197.5, 92, 197.5, 143);

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(15, 103, 198, 103);

  doc.setLineWidth(0.3);
  doc.setDrawColor(28, 2, 59);
  doc.line(15, 111, 198, 111);

  doc.setLineWidth(0.3);
  doc.setDrawColor(28, 2, 59);
  doc.line(15, 119, 198, 119);

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(15, 127, 198, 127);

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(15, 135, 198, 135);

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(15, 143, 198, 143);

  doc.setLineWidth(0.1);
  doc.setDrawColor(28, 2, 59);
  doc.line(120, 92, 120, 143);

  // doc.setLineWidth(0);

  // doc.setFontSize(12);
  // doc.setTextColor(255, 255, 255);
  // doc.setDrawColor(75, 78, 83);
  // doc.setFillColor(75, 78, 83);
  // doc.rect(12, 78 + hight, 70, 10, "FD");
  // doc.rect(165, 78 + hight, 35, 10, "FD");

  // doc.rect(85, 78 + hight, 17, 10, "FD");
  // doc.rect(105, 78 + hight, 17, 10, "FD");
  // doc.rect(125, 78 + hight, 17, 10, "FD");
  // doc.rect(145, 78 + hight, 17, 10, "FD");
  // doc.text(15, 84.5 + hight, "TOTAL");
  // doc.text(
  //   182,
  //   84.5 + hight,
  //   `rghsrgth`,
  //   null,
  //   null,
  //   "center"
  // );
  // doc.text(
  //   94,
  //   84.5 + hight,
  //   `fgfgntdn`,
  //   null,
  //   null,
  //   "center"
  // );

  // doc.text(
  //   153,
  //   84.5 + hight,
  //   `srtghrthth`,
  //   null,
  //   null,
  //   "center"
  // );

  // doc.setDrawColor(0, 74, 173);
  // doc.setFillColor(0, 74, 173);
  // doc.rect(12, 90 + hight, 70, 10, "FD");
  // doc.rect(85, 90 + hight, 115, 10, "FD");
  // doc.text(90, 96.5 + hight, `Remark :`);
  // doc.text(15, 96.5 + hight, `Percentage :%`);

  doc.save(`${salaryData?.name}-Salary.pdf`);
};

export default pdfSalarySlip;
