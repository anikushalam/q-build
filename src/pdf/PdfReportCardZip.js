import jsPDF from "jspdf";
import "jspdf/dist/polyfills.es.js";
var doc = new jsPDF({
  format: [279, 210],
});
var width = doc.internal.pageSize.getWidth();
const PdfReportCardZip = (img, student_data, necessary_data, report_data) => {
  var today = new Date();
  var todatMonths =
    today.getMonth() + 1 > 9
      ? today.getMonth() + 1
      : `0${today.getMonth() + 1}`;
  var todatDay = today.getDate() > 9 ? today.getDate() : `0${today.getDate()}`;
  var date = todatDay + "-" + todatMonths + "-" + today.getFullYear();
  let hight = 1;
  doc.addImage(img, "JPEG", 9, 3, 25, 25);
  doc.setLineWidth(8);
  doc.setDrawColor(255, 255, 255);
  doc.circle(21.4, 15, 16);
  doc.setLineWidth(0);
  const textLines = doc.splitTextToSize(necessary_data.institute.insName, 146);

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
    17,

    necessary_data.institute.insAddress,
    "center"
  );

  doc.setFont("WorkSans");

  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);
  doc.text(
    71,
    textLines.length > 1 ? 27 : 23,

    `Mob No : ${necessary_data.institute.insPhoneNumber} , Mail: ${necessary_data.institute.insEmail}`
  );

  doc.setLineWidth(45);
  doc.setDrawColor(28, 2, 59);
  doc.line(0, 53, width, 53);

  doc.setFont("WorkSans");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.text(width / 2, 41, "REPORT CARD", "center");

  doc.setLineWidth(1);
  doc.setDrawColor(254, 210, 56);
  doc.line(80, 44, 130, 44);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.text(9, 56, "Student name :");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.text(9, 63, "Class Teacher :");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.text(9, 70, "Class :");

  const sName = `${student_data.studentFirstName} ${
    student_data.studentMiddleName ? student_data.studentMiddleName : ""
  } ${student_data.studentLastName}`;

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(37, 56, sName);

  const cName = `${necessary_data.classTeacher.staffFirstName} ${
    necessary_data.classTeacher.staffMiddleName
      ? necessary_data.classTeacher.staffMiddleName
      : ""
  } ${necessary_data.classTeacher.staffLastName}`;

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(37, 63, cName);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(
    37,
    70,
    `${necessary_data.className} - ${necessary_data.classTitle}`
  );

  const sNameWidth = doc.getTextWidth(sName);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.text(sNameWidth + 100, 56, "Roll No :");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.text(sNameWidth + 100, 63, "GR No :");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.text(sNameWidth + 100, 70, "Batch :");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(
    sNameWidth + 120,
    56,
    student_data.studentROLLNO > 9
      ? student_data.studentROLLNO
      : `0${student_data.studentROLLNO}`
  );

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(sNameWidth + 120, 63, student_data.studentGRNO);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(sNameWidth + 120, 70, necessary_data.batchName);

  doc.setLineWidth(8);
  doc.setDrawColor("#c9bada");
  doc.line(0, 84, width, 84);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(9, 85, "SUBJECT");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(100, 85, "FINAL");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(127, 85, "OUT OF");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(147, 85, "OTHER");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(167, 85, "OUT OF");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.text(187, 85, "TOTAL");

  doc.setLineWidth(67);
  doc.setDrawColor("#ede8f3");
  doc.line(0, 121, width, 121);
  let totalFinalMaximumMarks = 0;
  let totalOtherMaximumMarks = 0;
  for (let i = 0; i < report_data.subjects.length; i++) {
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(9, 95 + hight, report_data.subjects[i].subjectName);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(
      102,
      95 + hight,
      `${report_data.subjects[i].finalExamObtain.toFixed(2)}`
    );
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(129, 95 + hight, `${report_data.subjects[i].finalExamTotal}`);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(
      149,
      95 + hight,
      `${report_data.subjects[i].otherExamObtain.toFixed(2)}`
    );
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(169, 95 + hight, `${report_data.subjects[i].otherExamTotal}`);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(
      189,
      95 + hight,
      `${
        report_data?.is_grade
          ? report_data.subjects[i].showGrade
          : report_data.subjects[i].obtainTotalMarks.toFixed(2)
      }`
    );
    hight = hight + 9;
    totalFinalMaximumMarks += report_data.subjects[i].finalExamTotal;
    totalOtherMaximumMarks += report_data.subjects[i].otherExamTotal;
  }
  doc.setLineWidth(8);
  doc.setDrawColor("#c9bada");
  doc.line(0, 157, width, 157);
  doc.text(9, 158, "Total");
  doc.text(102, 158, report_data?.totalFinalExam.toFixed(2));
  doc.text(129, 158, `${totalFinalMaximumMarks}`);
  doc.text(149, 158, report_data?.totalOtherExam.toFixed(2));
  doc.text(169, 158, `${totalOtherMaximumMarks}`);
  doc.text(
    189,
    158,
    `${
      report_data?.is_grade
        ? report_data.showGradeTotal
        : report_data?.totalTotalExam.toFixed(2)
    }`
  );
  doc.setLineWidth(8);
  doc.setDrawColor(28, 2, 59);
  doc.line(0, 168, width, 168);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(
    9,
    169,
    `${
      report_data?.is_grade
        ? `SPI : ${report_data.spi.toFixed(2)}`
        : `Percentage : ${report_data.totalPercentage.toFixed(2)}`
    }`
  );
  doc.text(102, 169, ` Remarks : ${report_data?.remark}`);
  doc.setLineWidth(28);
  doc.setDrawColor("#ede8f3");
  doc.line(0, 188, width, 188);
  doc.setTextColor(0, 0, 0);
  doc.text(9, 183, ` Extra-Curricular Points : `);
  doc.text(102, 183, ``);
  doc.text(
    122,
    183,
    "  Note : Not given by institute, Universal in all institutes"
  );
  doc.text(132, 187, " by Qviple");
  doc.text(9, 194, ` Attendance : ${report_data.attendancePercentage}%`);
  doc.text(
    50,
    194,
    `${report_data.attendance}/${report_data.attendanceTotal} days`
  );

  doc.text(`Behaviour : ${report_data?.behaviourStar}`, 124, 194);
  doc.text(`Improvement :  ${report_data?.behaviourImprovement}`, 9, 210, {
    lineHeightFactor: 1.5,
  });
  doc.text(`Lack in :  ${report_data?.behaviourLack}`, 9, 220);
  doc.text(9, 265, `Date : ${date}`);
  doc.text(102, 265, `Class Teacher`);
  doc.text(162, 265, "Principal");
  doc.setLineWidth(8);
  doc.setDrawColor(28, 2, 59);
  doc.line(0, 275, width, 275);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(
    width / 2,
    276,
    "Note : Percentage ration for final and other marks in report is 60:40",
    "center"
  );
  return doc.output("blob");
  // doc.save(
  //   `${student_data.studentFirstName} ${student_data.studentMiddleName}-Report-Card.pdf`
  // );
};

export default PdfReportCardZip;
