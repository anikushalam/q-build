import jsPDF from "jspdf";
import moment from "moment";
// let img = "/images/certificate/logodemo.jpg";
// let studentImg = "/form-testing.jpg";

const StudentReportCard = (
  img,
  imgAffliated,
  studentImg,
  oneStudentDetail,
  classStudentReportCard,
  classStudentReportCardNecessary,
  gradeToggle
) => {
  var doc = new jsPDF({
    format: "a4",
    putOnlyUsedFonts: true,
  });
  var width = doc.internal.pageSize.getWidth();

  // start of pdf title
  var firstPageHeight = 0;
  //   doc.addImage(img, "JPEG", 9, 3, 25, 25);
  //   doc.addImage(img, "JPEG", width - 34, 3, 25, 25);

  doc.addImage(img, "JPEG", 9, 3, 25, 25);
  doc.addImage(imgAffliated, "JPEG", width - 34, 3, 25, 25);

  doc.setLineWidth(8);
  doc.setDrawColor(255, 255, 255);
  doc.circle(21.4, 15, 16);
  doc.setLineWidth(0);

  doc.setLineWidth(8);
  doc.setDrawColor(255, 255, 255);
  doc.circle(width - 21.4, 15, 16);
  doc.setLineWidth(0);

  firstPageHeight = classStudentReportCardNecessary?.student?.institute
    ?.insAffiliated
    ? 12
    : 10;

  const instituteName = doc.splitTextToSize(
    classStudentReportCardNecessary?.student?.institute?.insName ?? "",
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
  if (classStudentReportCardNecessary?.student?.institute?.insAffiliated) {
    doc.setFontSize(10);
    doc.text(
      107,
      5,
      classStudentReportCardNecessary?.student?.institute?.insAffiliated,
      "center"
    );
  }

  doc.setFont("Arial", "normal", "400");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);
  doc.text(
    width / 2,
    firstPageHeight,
    classStudentReportCardNecessary?.student?.institute?.insAddress ?? "",
    "center"
  );

  doc.setFont("WorkSans");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);

  if (
    classStudentReportCardNecessary?.student?.institute?.insEditableText_one
  ) {
    let editableFirstEdit = doc.splitTextToSize(
      classStudentReportCardNecessary?.student?.institute?.insEditableText_one,
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

  if (
    classStudentReportCardNecessary?.student?.institute?.insEditableText_two
  ) {
    let editableSecondEdit = doc.splitTextToSize(
      classStudentReportCardNecessary?.student?.institute?.insEditableText_two,
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
    `Mob No : ${classStudentReportCardNecessary?.student?.institute?.insPhoneNumber} , Mail: ${classStudentReportCardNecessary?.student?.institute?.insEmail}`,
    "center"
  );
  firstPageHeight += 20;

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(22);
  doc.text(width / 2, firstPageHeight, "Statement of Grades", "center");
  firstPageHeight += 5;

  doc.setFontSize(11);
  doc.setTextColor("#121212");
  doc.setLineWidth(0.3);
  doc.setDrawColor("#121212");
  var firstTableHeight = firstPageHeight;
  var profileHeight = firstPageHeight;
  doc.line(18, firstPageHeight, width - 18, firstPageHeight);
  firstPageHeight += 5;

  doc.text(
    20,
    firstPageHeight,
    `STUDENT'S NAME: ${oneStudentDetail?.studentFirstName} ${
      oneStudentDetail?.studentMiddleName ?? ""
    } ${oneStudentDetail?.studentLastName}`
  );
  firstPageHeight += 3;

  doc.line(18, firstPageHeight, width - 54, firstPageHeight);
  firstPageHeight += 5;

  doc.text(20, firstPageHeight, `REGISTRATION ID: `);
  firstPageHeight += 3;

  doc.line(18, firstPageHeight, width - 54, firstPageHeight);
  firstPageHeight += 5;

  doc.text(20, firstPageHeight, `PROGRAMME: ANKUSH KUMAR SINGH`);
  firstPageHeight += 3;
  doc.line(18, firstPageHeight, width - 54, firstPageHeight);
  firstPageHeight += 7;

  var class_sem = `CLASS/SEMESTER: ${classStudentReportCardNecessary?.student?.studentClass?.className} - ${classStudentReportCardNecessary?.student?.studentClass?.classTitle}`;
  doc.text(20, firstPageHeight, class_sem);
  doc.line(
    20 + doc.getTextWidth(class_sem) + 2,
    firstPageHeight - 7,
    20 + doc.getTextWidth(class_sem) + 2,
    firstPageHeight + 5
  );
  doc.text(
    20 + doc.getTextWidth(class_sem) + 4,
    firstPageHeight - 3,
    `MONTH & YEAR OF`
  );
  doc.text(
    20 + doc.getTextWidth(class_sem) + 4,
    firstPageHeight + 2,
    `EXAMINATION: ${classStudentReportCardNecessary?.student?.batches?.batchName}`
  );
  firstPageHeight += 5;
  doc.line(width - 54, profileHeight, width - 54, firstPageHeight);

  //   ADD STUDENT PROFILE PHOTO
  doc.addImage(studentImg, "JPEG", width - 54, profileHeight, 36, 36);

  doc.line(18, firstPageHeight, width - 18, firstPageHeight);
  firstPageHeight += 7;
  let modify_width = width - 20;

  //   for design after photo
  doc.text(20, firstPageHeight, `SR. NO.`);
  doc.line(35, firstPageHeight - 7, 35, firstPageHeight + 5);
  doc.text(37, firstPageHeight - 3, `COURSE`);
  doc.text(37, firstPageHeight + 1, `  CODE`);
  doc.line(55, firstPageHeight - 7, 55, firstPageHeight + 5);

  doc.text(width / 2 - 16, firstPageHeight, `COURSE`, { align: "left" });
  doc.line(
    modify_width - doc.getTextWidth("GRADESREMARKSCREDIT") - 12,
    firstPageHeight - 7,
    modify_width - doc.getTextWidth("GRADESREMARKSCREDIT") - 12,
    firstPageHeight + 5
  );

  doc.text(
    modify_width - doc.getTextWidth("GRADESREMARKSCREDIT") - 10,
    firstPageHeight,
    `CREDIT`
  );
  doc.line(
    modify_width - doc.getTextWidth("GRADESREMARKS") - 8,
    firstPageHeight - 7,
    modify_width - doc.getTextWidth("GRADESREMARKS") - 8,
    firstPageHeight + 5
  );
  doc.text(
    modify_width - doc.getTextWidth("GRADESREMARKS") - 6,
    firstPageHeight,
    `GRADES`
  );
  doc.line(
    modify_width - doc.getTextWidth("REMARKS") - 4,
    firstPageHeight - 7,
    modify_width - doc.getTextWidth("REMARKS") - 4,
    firstPageHeight + 5
  );
  doc.text(
    modify_width - doc.getTextWidth("REMARKS") - 2,
    firstPageHeight,
    `REMARKS`
  );

  firstPageHeight += 5;
  doc.line(18, firstPageHeight, width - 18, firstPageHeight);

  firstPageHeight += 5;
  doc.text(width / 2, firstPageHeight, `THEORY`, { align: "center" });

  firstPageHeight += 3;
  doc.line(18, firstPageHeight, width - 18, firstPageHeight);

  //   =======*********************++++++++==========
  // ADDING STUDENT ALL SUBJECT

  let all_subjects = classStudentReportCard.subjects;
  if (!all_subjects || all_subjects?.length <= 0) {
    firstPageHeight += 5;
    doc.line(18, firstPageHeight, width - 18, firstPageHeight);
  } else {
    firstPageHeight += 7;
  }
  for (let i = 0; i < all_subjects?.length; i++) {
    doc.text(26, firstPageHeight, i + 1);
    doc.line(35, firstPageHeight - 7, 35, firstPageHeight + 5);
    doc.text(36, firstPageHeight, `${all_subjects[i]?.course_code ?? ""}`);
    doc.line(55, firstPageHeight - 7, 55, firstPageHeight + 5);

    doc.text(
      width / 2 - 48,
      firstPageHeight,
      `${all_subjects[i]?.subjectName}`
    );
    doc.line(
      modify_width - doc.getTextWidth("GRADESREMARKSCREDIT") - 12,
      firstPageHeight - 7,
      modify_width - doc.getTextWidth("GRADESREMARKSCREDIT") - 12,
      firstPageHeight + 5
    );

    doc.text(
      modify_width - doc.getTextWidth("GRADESREMARKSCREDIT") - 6,
      firstPageHeight,
      `${all_subjects[i]?.course_credit ?? ""}`
    );
    doc.line(
      modify_width - doc.getTextWidth("GRADESREMARKS") - 8,
      firstPageHeight - 7,
      modify_width - doc.getTextWidth("GRADESREMARKS") - 8,
      firstPageHeight + 5
    );
    doc.text(
      modify_width - doc.getTextWidth("GRADESREMARKS"),
      firstPageHeight,
      `${
        gradeToggle
          ? all_subjects[i]?.showGrade ?? ""
          : all_subjects[i]?.subjectWiseTotal.toFixed(2)
      }`
    );
    doc.line(
      modify_width - doc.getTextWidth("REMARKS") - 4,
      firstPageHeight - 7,
      modify_width - doc.getTextWidth("REMARKS") - 4,
      firstPageHeight + 5
    );
    doc.text(
      modify_width - doc.getTextWidth("REMARKS") + 2,
      firstPageHeight,
      ``
    );
    firstPageHeight += 5;
    doc.line(18, firstPageHeight, width - 18, firstPageHeight);
  }

  ///////////

  //   FOR TOTAL CREDITS

  firstPageHeight += 5;
  doc.text(width / 2 - 30, firstPageHeight, `TOTAL CREDITS`, {
    align: "center",
  });
  doc.line(
    modify_width - doc.getTextWidth("GRADESREMARKSCREDIT") - 12,
    firstPageHeight - 5,
    modify_width - doc.getTextWidth("GRADESREMARKSCREDIT") - 12,
    firstPageHeight + 3
  );
  doc.line(
    modify_width - doc.getTextWidth("GRADESREMARKS") - 8,
    firstPageHeight - 5,
    modify_width - doc.getTextWidth("GRADESREMARKS") - 8,
    firstPageHeight + 3
  );
  doc.line(
    modify_width - doc.getTextWidth("REMARKS") - 4,
    firstPageHeight - 5,
    modify_width - doc.getTextWidth("REMARKS") - 4,
    firstPageHeight + 3
  );
  firstPageHeight += 3;
  doc.line(18, firstPageHeight, width - 18, firstPageHeight);

  doc.line(18, firstTableHeight, 18, firstPageHeight);
  doc.line(width - 18, firstTableHeight, width - 18, firstPageHeight);

  // FOR NOTE OF PRE
  firstPageHeight += 5;
  doc.text(
    22,
    firstPageHeight,
    "PRE = CANDIDATE HAS PASSED IN RE-EXAMINATION WITH NUMBER OF ATTEMPT"
  );
  firstPageHeight += 3;

  // FOR ANOTHER BOTTOM TABLE DESIGN
  var secondTableHeight = firstPageHeight;

  doc.line(18, firstPageHeight, width - 18, firstPageHeight);
  firstPageHeight += 5;
  doc.text(width / 2, firstPageHeight, `SEMESTER PERFORMANCE INDEX`, {
    align: "center",
  });
  firstPageHeight += 3;
  doc.line(18, firstPageHeight, width - 18, firstPageHeight);

  firstPageHeight += 5;
  doc.text(22, firstPageHeight, `EARNED GRADE POINTS`);
  doc.line(73, firstPageHeight - 5, 73, firstPageHeight + 3);

  doc.text(90, firstPageHeight, `SPI`);
  doc.line(120, firstPageHeight - 5, 120, firstPageHeight + 3);

  firstPageHeight += 3;

  doc.line(18, firstPageHeight, width - 90, firstPageHeight);
  firstPageHeight += 5;
  doc.text(40, firstPageHeight, ``);
  doc.line(73, firstPageHeight - 5, 73, firstPageHeight + 3);

  doc.text(90, firstPageHeight, ``);
  doc.line(120, firstPageHeight - 5, 120, firstPageHeight + 3);

  doc.text(145, firstPageHeight - 3, `RESULT: `, { align: "justify" });

  firstPageHeight += 3;

  doc.line(18, firstPageHeight, width - 18, firstPageHeight);
  firstPageHeight += 5;
  doc.text(width / 2, firstPageHeight, `CUMULATIVE PERFORMANCE INDEX`, {
    align: "center",
  });
  firstPageHeight += 3;

  doc.line(18, firstPageHeight, width - 18, firstPageHeight);
  firstPageHeight += 5;
  doc.text(30, firstPageHeight, `TOTAL CREDITS`);
  doc.line(73, firstPageHeight - 5, 73, firstPageHeight + 3);

  doc.text(85, firstPageHeight, `TOTAL EARNED GRADE POINTS`);
  doc.line(width - 52, firstPageHeight - 5, width - 52, firstPageHeight + 3);

  doc.text(width - 40, firstPageHeight, `CPI`);

  firstPageHeight += 3;
  doc.line(18, firstPageHeight, width - 18, firstPageHeight);

  firstPageHeight += 5;
  doc.text(40, firstPageHeight, ``);
  doc.text(110, firstPageHeight, ``);
  doc.text(width - 40, firstPageHeight, ``);
  firstPageHeight += 3;
  doc.line(18, firstPageHeight, width - 18, firstPageHeight);

  doc.line(18, secondTableHeight, 18, firstPageHeight);
  doc.line(width - 18, secondTableHeight, width - 18, firstPageHeight);
  firstPageHeight += 5;
  doc.text(
    22,
    firstPageHeight,
    `RESULTS DECLARED ON: ${moment().format("Do MMMM yyyy")}`
  );

  firstPageHeight += 20;

  doc.text(22, firstPageHeight, "ENTERED BY");
  doc.text(54, firstPageHeight, "VERIFIED BY");
  doc.text(84, firstPageHeight, "DCOE");
  doc.text(106, firstPageHeight, "COE");
  doc.text(126, firstPageHeight, "DEAN ACADEMICS");
  doc.text(width - 40, firstPageHeight, "PRINCIPAL");

  window.open(
    doc.output("bloburl", {
      filename: `${oneStudentDetail?.studentFirstName} ${
        oneStudentDetail?.studentMiddleName ?? ""
      } ${oneStudentDetail?.studentLastName}-report-card.pdf`,
    }),
    "_blank"
  );
  //   return doc.output("bloburl", {
  //     filename: `${studentInfo?.name}-admission-fee-receipt.pdf`,
  //   });
};

export default StudentReportCard;
