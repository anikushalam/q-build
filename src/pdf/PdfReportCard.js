import jsPDF from "jspdf";
// import { Grade } from "../MembersTab/staff/Mainbody/ClassTeacher/ClassCatalog/FinalReport/ReportDetails/GradeSystem";
var doc = new jsPDF({
  format: [279, 210],
});

var width = doc.internal.pageSize.getWidth();
// var height = doc.internal.pageSize.getHeight();

const reportCardPdf = (
  img,
  remarks,
  oneStudentDetail,
  classStudentReportCard,
  studentBehaviour,
  studentBehaviourImprovements,
  studentBehaviourLackIn,
  classStudentReportCardAttendance,
  classStudentReportCardNecessary,
  gradeToggle
) => {
  var today = new Date();
  var todatMonths =
    today.getMonth() + 1 > 9
      ? today.getMonth() + 1
      : `0${today.getMonth() + 1}`;
  var todatDay = today.getDate() > 9 ? today.getDate() : `0${today.getDate()}`;
  var date = todatDay + "-" + todatMonths + "-" + today.getFullYear();
  // var date =
  //   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  let hight = 1;

  // console.info(height, width);

  // doc.addFont("Arimo-Regular.ttf", "Arimo", "normal");
  // doc.addFont("Arimo-Bold.ttf", "Arimo", "bold");
  // doc.setFont("Arimo");

  // doc.addImage(imgData, "JPEG", 5, 5, 25, 25);

  // doc.addImage(imgData, "JPEG", 9, 11.5, 28, 15);
  doc.addImage(img, "JPEG", 9, 3, 25, 25);
  doc.setLineWidth(8);
  doc.setDrawColor(255, 255, 255);
  doc.circle(21.4, 15, 16);
  doc.setLineWidth(0);
  const textLines = doc.splitTextToSize(
    classStudentReportCardNecessary.student.institute.insName,
    146
  );

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

  // doc.setTextColor(18, 18, 18);
  // doc.setFontSize(8);
  // doc.text(
  //   65,
  //   20,
  //   classStudentReportCardNecessary.student.institute.insAddress,

  //   "center"
  // );

  doc.setFont("Arial", "normal", "400");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);
  doc.text(
    width / 2,
    17,

    classStudentReportCardNecessary.student.institute.insAddress,
    "center"
  );

  doc.setFont("WorkSans");

  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);
  doc.text(
    71,
    textLines.length > 1 ? 27 : 23,

    `Mob No : ${classStudentReportCardNecessary.student.institute.insPhoneNumber} , Mail: ${classStudentReportCardNecessary.student.institute.insEmail}`
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

  const sName = `${oneStudentDetail.studentFirstName} ${
    oneStudentDetail.studentMiddleName ? oneStudentDetail.studentMiddleName : ""
  } ${oneStudentDetail.studentLastName}`;

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(37, 56, sName);

  const cName = `${
    classStudentReportCardNecessary.student.studentClass.classTeacher
      .staffFirstName
  } ${
    classStudentReportCardNecessary.student.studentClass.classTeacher
      .staffMiddleName
      ? classStudentReportCardNecessary.student.studentClass.classTeacher
          .staffMiddleName
      : ""
  } ${
    classStudentReportCardNecessary.student.studentClass.classTeacher
      .staffLastName
  }`;

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(37, 63, cName);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(
    37,
    70,
    `${classStudentReportCardNecessary.student.studentClass.className} - ${classStudentReportCardNecessary.student.studentClass.classTitle}`
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
    oneStudentDetail.studentROLLNO > 9
      ? oneStudentDetail.studentROLLNO
      : `0${oneStudentDetail.studentROLLNO}`
  );

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(
    sNameWidth + 120,
    63,
    classStudentReportCardNecessary.student.studentGRNO
  );

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(
    sNameWidth + 120,
    70,
    classStudentReportCardNecessary.student.batches.batchName
  );

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
  for (let i = 0; i < classStudentReportCard.subjects.length; i++) {
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(9, 95 + hight, classStudentReportCard.subjects[i].subjectName);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(
      102,
      95 + hight,
      `${classStudentReportCard.subjects[i].finalObtainMarks.toFixed(2)}`
    );

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(
      129,
      95 + hight,
      `${classStudentReportCard.subjects[i].finalTotalMarks}`
    );

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(
      149,
      95 + hight,
      `${classStudentReportCard.subjects[i].otherObtainMarks.toFixed(2)}`
    );

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(
      169,
      95 + hight,
      `${classStudentReportCard.subjects[i].otherTotalMarks}`
    );

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(
      189,
      95 + hight,
      `${
        gradeToggle
          ? classStudentReportCard.subjects[i].showGrade
          : // Grade(
            //     classStudentReportCard.subjects[i].subjectWiseTotal?.toFixed(2),
            //     classStudentReportCard.subjects[i]?.subjectCutoff
            //   )
            classStudentReportCard.subjects[i].subjectWiseTotal.toFixed(2)
      }`
    );
    hight = hight + 9;
    totalFinalMaximumMarks +=
      classStudentReportCard.subjects[i].finalTotalMarks;
    totalOtherMaximumMarks +=
      classStudentReportCard.subjects[i].otherTotalMarks;
  }

  doc.setLineWidth(8);
  doc.setDrawColor("#c9bada");
  doc.line(0, 157, width, 157);

  doc.text(9, 158, "Total");
  doc.text(102, 158, classStudentReportCard?.total.finalTotal.toFixed(2));
  doc.text(129, 158, `${totalFinalMaximumMarks}`);
  doc.text(149, 158, classStudentReportCard?.total.otherTotal.toFixed(2));
  doc.text(169, 158, `${totalOtherMaximumMarks}`);
  doc.text(
    189,
    158,
    `${
      gradeToggle
        ? classStudentReportCard?.total.showGradeTotal
        : classStudentReportCard?.total.allSubjectTotal.toFixed(2)
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
      gradeToggle
        ? `SPI : ${classStudentReportCard.spi.toFixed(2)}`
        : `Percentage : ${classStudentReportCard.totalPercantage.toFixed(2)}`
    } `
  );

  doc.text(102, 169, ` Remarks : ${remarks}`);

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

  doc.text(
    9,
    194,
    ` Attendance : ${classStudentReportCardAttendance.attendance.attendancePercentage}%`
  );
  doc.text(
    50,
    194,
    `${classStudentReportCardAttendance.attendance.totalPresent}/${classStudentReportCardAttendance.attendance.totalAttendance} days`
  );

  doc.text(124, 194, `Behaviour : ${studentBehaviour}`);

  doc.text(9, 210, `Improvement :  ${studentBehaviourImprovements}`);

  // doc.setLineWidth(0.05);
  // doc.setDrawColor(153, 153, 153);
  // doc.line(28, 212, width - 10, 212);

  doc.text(9, 220, `Lack in :  ${studentBehaviourLackIn}`);

  // doc.setLineWidth(0.05);
  // doc.setDrawColor(153, 153, 153);
  // doc.line(22, 222, width - 10, 222);

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

  doc.save(
    `${oneStudentDetail.studentFirstName} ${oneStudentDetail.studentMiddleName}-Report-Card.pdf`
  );
};

export default reportCardPdf;
