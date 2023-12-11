import jsPDF from "jspdf";
import moment from "moment";
import converter from "number-to-words";
// let institute = {
//   insAffiliated: "Central University",
//   insName: "Ald university Civile Lines  Linesahabad",
//   insAddress: "Civile Lines Allahabad",
//   insPhoneNumber: "628541658141",
//   insEmail: "ald_uasfb@gmail.com",
//   ediatbel1:
//     "Editable 1 Editable 1 Write a JavaScript program that converts a non-negative integer number to its English representation.sdgdg ddfmshewbkwgethwetgwehgbw ebkwenwe  we fwebf e jf a e ae baeygtwbehjwvt",
//   ediatbel2:
//     "Editable 1 Editable 1 Write a JavaScript program that converts a non-negative integer number to its English representation.sdgdg ddfmshewbkwgethwetgwehgbw ebkwenwe  we fwebf e jf a e ae baeygtwbehjwvt",
// };
// let img = "/images/certificate/logodemo.jpg";
let checkbox = "/images/pdf-checkbox.jpg";
let gapRow = [1, 5, 8, 11, 12];
let xeroxListFirst = [
  {
    id: 0,
    copy: "Original / Xerox Copy",
    name: "SSC Marksheet",
  },
  {
    id: 2,
    copy: "Original / Xerox Copy",
    name: "Caste Certificate",
  },
  {
    id: 3,
    copy: "Original / Xerox Copy",
    name: "Fathers Income Certificate",
  },
  {
    id: 4,
    copy: "Original / Xerox Copy",
    name: "Domicile Certificate",
  },
  {
    id: 7,
    copy: "Original / Xerox Copy",
    name: "GAP Certificate",
  },
  {
    id: 17,
    copy: "Original / Xerox Copy",
    name: "Defence Certificate",
  },
  {
    id: 1,
    copy: "Original / Xerox Copy",
    name: "HSC Marksheet / Diploma Marksheet",
  },
  {
    id: 5,
    copy: "Original / Xerox Copy",
    name: "Non - Creamy Layer Certificate",
  },
  {
    id: 8,
    copy: "Original / Xerox Copy",
    name: "Physically Handicapped Certificate",
  },
  // {
  //   id: 10,
  //   copy: "Original / Xerox Copy",
  //   name: "Gate Score Card",
  // },
  // {
  //   id: 11,
  //   copy: "Original / Xerox Copy",
  //   name: "Degree Passing Certificate",
  // },
  // {
  //   id: 12,
  //   copy: "Original / Xerox Copy",
  //   name: "Statement of Marks at Degree Exam",
  // },
];

let xeroxListSecond = [
  {
    id: 13,
    copy: "Original / Xerox Copy",
    name: "Aadhar Card",
  },
  {
    id: 14,
    copy: "Original / Xerox Copy",
    name: "Caste Validity",
  },
  {
    id: 6,
    copy: "Original / Xerox Copy",
    name: "Income Certificate",
  },
  {
    id: 15,
    copy: "Original / Xerox Copy",
    name: "Nationality Certificate",
  },
  {
    id: 16,
    copy: "Original / Xerox Copy",
    name: "EWS Certificate",
  },
  // {
  //   id: 9,
  //   copy: "Original / Xerox Copy",
  //   name: "Migration Certificate",
  // },
  {
    id: 1,
  },
  {
    id: 5,
  },
  {
    id: 8,
  },
  // {
  //   id: 19,
  //   copy: "Original / Xerox Copy",
  //   name: "Proforma - P & Q",
  // },
  {
    id: 11,
  },
  {
    id: 12,
  },
];

let xeroxPGList = [
  {
    id: 1,
    copy: "Original / Xerox Copy",
    name: "Degree Passing Certificate",
  },
  {
    id: 2,
    copy: "Original / Xerox Copy",
    name: "Statement of marks at Degree Exam. (Of all years/semesters)",
  },
  {
    id: 3,
    copy: "Original / Xerox Copy",
    name: "GATE score card (If applicable)",
  },
  {
    id: 4,
    copy: "Original / Xerox Copy",
    name: "Certificate or any proof of Indian Nationaltiy",
  },
  {
    id: 5,
    copy: "Original / Xerox Copy",
    name: "Institution Leaving Certificate (After qualifying examination)",
  },
  {
    id: 6,
    copy: "Original / Xerox Copy",
    name: "Caste Certificate for SC/ST/DT/NT (From competent authority)",
  },
  {
    id: 7,
    copy: "Original / Xerox Copy",
    name: "Caste Validity Certificate (From competent authority)",
  },
  {
    id: 8,
    copy: "Original / Xerox Copy",
    name: "Non-creamy Layer (If applicable)",
  },
  {
    id: 9,
    copy: "Original / Xerox Copy",
    name: "Proforma -  P & Q (Only for Sponsored Candidates)",
  },
  {
    id: 10,
    copy: "Original / Xerox Copy",
    name: "GAP Certificate (If applicable)",
  },
];

const StudentFormPdf = (sutdentInfo, institute, pdfUndertaking) => {
  var doc = new jsPDF({
    //   unit: "mm",
    format: "a4",
    putOnlyUsedFonts: true,
  });

  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight();
  const todayDate = new Date();
  const toPascalCase = (str) =>
    (str.match(/[a-zA-Z0-9]+/g) || [])
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join(" ");

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

  // doc.setFont(undefined, "normal");

  // const textLines = doc.splitTextToSize(institute?.insName, 146);

  // if (textLines.length > 1) {
  //   let verticalOffset = 10;
  //   doc.setFont("700");
  //   doc.setTextColor(18, 18, 18);
  //   doc.setFontSize(16);
  //   doc.text(107, verticalOffset, textLines, "center");
  //   verticalOffset = textLines.length + 145;
  // } else {
  //   let verticalOffset = 10;
  //   doc.setFont("700");
  //   doc.setTextColor(18, 18, 18);
  //   doc.setFontSize(18);
  //   doc.text(107, verticalOffset, textLines, "center");
  //   verticalOffset = textLines.length + 145;
  // }

  firstPageHeight = institute?.insAffiliated ? 12 : 10;

  const instituteName = doc.splitTextToSize(
    institute?.insName ?? "IIT Kanpur",
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
  // let edit = {
  //   first:
  //     "First Come First Server First Come First Server First Come First ServerFirst Come First ServerFirst Come First ServerFirst Come First ServerFirst Come First ServerFirst Come First Server",
  //   second: "First Come First Server",
  // };
  // if (edit.first) {
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

  // if (edit.second) {
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
  firstPageHeight += 13;

  // var firstPageHeight = 37;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(18);
  if (sutdentInfo?.applicationName === "N/A") {
    doc.text(width / 2, firstPageHeight, "Admission Form", "center");
  } else {
    let applicationName = doc.splitTextToSize(
      `Admission Form for ${sutdentInfo?.applicationName}`,
      150
    );
    doc.text(width / 2, firstPageHeight, applicationName, "center");
    if (applicationName?.length) {
      for (let i = 0; i < applicationName?.length; i++) {
        firstPageHeight += 6;
      }
    }
  }

  doc.setLineWidth(0.6);
  doc.setDrawColor("#121212");
  doc.line(0, firstPageHeight + 3, width, firstPageHeight + 3);
  firstPageHeight += 3; //40

  doc.addImage(
    sutdentInfo?.studentImage,
    "JPEG",
    width - 40,
    firstPageHeight + 15,
    30,
    30
  );

  // doc.addImage(img, "JPEG", width - 40, firstPageHeight + 15, 30, 30);

  firstPageHeight += 10; //50

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(16);
  doc.text(9, firstPageHeight, "Personal Details: -");
  firstPageHeight += 10; //60

  doc.setFontSize(13);
  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Name of Student :");
  doc.setTextColor("#454545");
  doc.text(50, firstPageHeight, `${sutdentInfo?.name}`);
  firstPageHeight += 10; //70

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Gender :");
  doc.setTextColor("#454545");
  doc.text(50, firstPageHeight, `${sutdentInfo?.gender}`);
  firstPageHeight += 10; //80

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Date Of Birth :");
  doc.setTextColor("#454545");
  doc.text(50, firstPageHeight, `${sutdentInfo?.dateOfBirth}`);
  firstPageHeight += 10; //90

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "(In Words) :");
  doc.setTextColor("#454545");
  let dateOfBirthSplit = sutdentInfo?.dateOfBirth?.split("-");
  if (dateOfBirthSplit?.length) {
    doc.text(
      50,
      firstPageHeight,
      `${toPascalCase(
        converter.toWords(`${dateOfBirthSplit[2]}`)
      )} ${toPascalCase(
        converter.toWords(`${dateOfBirthSplit[1]}`)
      )} ${toPascalCase(converter.toWords(`${dateOfBirthSplit[0]}`))}`
    );
  } else {
    doc.text(50, firstPageHeight, ``);
  }
  firstPageHeight += 10; //100

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Mother’s Name :");
  doc.setTextColor("#454545");
  doc.text(50, firstPageHeight, `${sutdentInfo?.motherName}`);

  doc.setTextColor("#121212");
  doc.text(width / 2, firstPageHeight, "Caste Category :");
  doc.setTextColor("#454545");
  doc.text(width / 2 + 35, firstPageHeight, `${sutdentInfo?.catseCategory}`);
  firstPageHeight += 10; //110

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Religion :");
  doc.setTextColor("#454545");
  doc.text(50, firstPageHeight, `${sutdentInfo?.religion}`);

  doc.setTextColor("#121212");
  doc.text(width / 2, firstPageHeight, "Caste :");
  // doc.text(width / 2, firstPageHeight, "Caste :");
  doc.setTextColor("#454545");
  doc.text(width / 2 + 35, firstPageHeight, `${sutdentInfo?.catse}`);
  firstPageHeight += 10; //120

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Nationality :");
  doc.setTextColor("#454545");
  doc.text(50, firstPageHeight, `${sutdentInfo?.nationality}`);

  doc.setTextColor("#121212");
  doc.text(width / 2, firstPageHeight, "Mother Tongue :");
  doc.setTextColor("#454545");
  doc.text(width / 2 + 35, firstPageHeight, `${sutdentInfo?.motherT}`);
  firstPageHeight += 10; //130

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Birth Place :");
  doc.setTextColor("#454545");
  let studentBirthPlace = doc.splitTextToSize(
    `${sutdentInfo?.birthPlace}`,
    width - 65
  );
  // doc.text(50, firstPageHeight, `${sutdentInfo?.birthPlace}`);
  doc.text(50, firstPageHeight, studentBirthPlace);
  if (studentBirthPlace?.length > 1) {
    for (let i = 1; i < studentBirthPlace?.length; i++) {
      firstPageHeight += 5;
    }
  } else {
    firstPageHeight += 10; //140
  }

  if (studentBirthPlace?.length > 1) {
    firstPageHeight += 10;
  }
  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Current Address :");
  doc.setTextColor("#454545");
  let currentAddress = doc.splitTextToSize(
    `${sutdentInfo?.cAddress}`,
    width - 65
  );
  doc.text(50, firstPageHeight, currentAddress);
  if (currentAddress?.length > 1) {
    for (let i = 1; i < currentAddress?.length; i++) {
      firstPageHeight += 5;
    }
  } else {
    firstPageHeight += 10; //140
  }

  if (currentAddress?.length > 1) {
    firstPageHeight += 10;
  }

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Permanent Address :");
  doc.setTextColor("#454545");
  let perAddress = doc.splitTextToSize(`${sutdentInfo?.pAddress}`, width - 65);
  doc.text(50, firstPageHeight, perAddress);
  // doc.text(50, currentAddress?.length >1?firstPageHeight+5: firstPageHeight, `${sutdentInfo?.pAddress}`);
  if (perAddress?.length > 1) {
    for (let i = 1; i < perAddress?.length; i++) {
      firstPageHeight += 5;
    }
  } else {
    firstPageHeight += 10; //140
  }

  if (perAddress?.length > 1) {
    firstPageHeight += 10;
  }

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Contact No. :");
  doc.setTextColor("#454545");
  doc.text(50, firstPageHeight, `${sutdentInfo?.sContact}`);

  firstPageHeight += 10; //170

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Aadhar No. :");
  doc.setTextColor("#454545");
  doc.text(50, firstPageHeight, `${sutdentInfo?.addhar}`);
  firstPageHeight += 10; //180

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Previous School/College :");
  doc.setTextColor("#454545");
  doc.text(60, firstPageHeight, `${sutdentInfo?.previousSchool}`);
  firstPageHeight += 10; //190

  doc.setLineWidth(0.3);
  doc.setDrawColor("#121212");
  doc.line(0, firstPageHeight, width, firstPageHeight);
  firstPageHeight += 10; //200

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(16);
  doc.text(9, firstPageHeight, "Parents/Guardian Details: -");
  firstPageHeight += 10; //210

  doc.setFontSize(13);

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Name :");
  doc.setTextColor("#454545");
  doc.text(50, firstPageHeight, `${sutdentInfo?.pName}`);
  firstPageHeight += 10; //220

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Contact No. :");
  doc.setTextColor("#454545");
  doc.text(50, firstPageHeight, `${sutdentInfo?.pContact}`);
  firstPageHeight += 10; //230

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Occupation :");
  doc.setTextColor("#454545");
  doc.text(50, firstPageHeight, `${sutdentInfo?.pOccupation}`);
  firstPageHeight += 10; //240

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Annual Income :");
  doc.setTextColor("#454545");
  doc.text(50, firstPageHeight, `${sutdentInfo?.pIncome}`);
  firstPageHeight += 10; //250

  doc.setLineWidth(8);
  doc.setDrawColor("#0F84B2");
  doc.line(0, firstPageHeight + 4, width, firstPageHeight + 4);
  doc.setFontSize(11);
  doc.setTextColor("#FEFEFE");
  doc.text(
    width / 2,
    firstPageHeight + 5,
    "Undertakings and Documents information on next page",
    {
      align: "center",
    }
  );

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight + 20, "Date :");
  doc.setTextColor("#454545");
  doc.text(
    25,
    firstPageHeight + 20,
    `${moment(todayDate).format("DD MMMM yyyy")}`
  );

  doc.setTextColor("#121212");
  doc.text(width / 2 + 30, firstPageHeight + 20, "PTO");
  firstPageHeight += 23; //280

  doc.setLineWidth(0.3);
  doc.setDrawColor("#121212");
  doc.line(0, firstPageHeight, width, firstPageHeight);
  firstPageHeight += 5; //290

  doc.setFontSize(11);
  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Note :");
  doc.setTextColor("#454545");
  doc.text(
    20,
    firstPageHeight,
    "I (Student Applying) declare that all details mentioned above is correct as per my knowledge"
  );
  var secondPageHeight = 0;

  if ([undefined, null, "OFF"]?.includes(pdfUndertaking)) {
  } else if (pdfUndertaking === "PG") {
    doc.addPage({
      format: "a4",
      putOnlyUsedFonts: true,
    });
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text(9, secondPageHeight + 10, "Qualifications for PG Admission: -");
    secondPageHeight += 20;

    doc.setFontSize(13);

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Score in GATE :");
    doc.setTextColor("#454545");
    doc.text(90, secondPageHeight, `${sutdentInfo?.gScore ?? 54.4}`);
    secondPageHeight += 10; //220

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Year of Qualifying GATE :");
    doc.setTextColor("#454545");
    doc.text(90, secondPageHeight, `${sutdentInfo?.gYear ?? 2023}`);
    secondPageHeight += 10; //220

    let gName = doc.splitTextToSize(
      "Name of Institute and University from which degree is obtained",
      80
    );
    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, gName);
    let dotWidth = doc.getTextWidth(gName?.[0]);
    doc.text(dotWidth + 10, secondPageHeight, " :");
    doc.setTextColor("#454545");
    let gateInstitute = doc.splitTextToSize(
      `${
        sutdentInfo?.dInstitute ?? "SLB IC SLB IC SLB ICSLB ICSLB ICSLB ICSLB "
      }`,
      width - 100
    );
    doc.text(90, secondPageHeight, gateInstitute);
    if (gName?.length < gateInstitute?.length) {
      for (let i = 1; i < gateInstitute?.length; i++) {
        secondPageHeight += 9;
      }
    } else {
      for (let i = 1; i < gName?.length; i++) {
        secondPageHeight += 10;
      }
      secondPageHeight += 5;
    }

    doc.setTextColor("#121212");
    let gYear = doc.splitTextToSize(
      "Month & Year of Passing Degree Examination",
      80
    );
    doc.text(9, secondPageHeight, gYear);
    let dotDWidth = doc.getTextWidth(gYear?.[0]);
    doc.text(dotDWidth + 10, secondPageHeight, " :");
    doc.setTextColor("#454545");
    doc.text(90, secondPageHeight, `${sutdentInfo?.dYear ?? "2023-08"}`);
    for (let i = 1; i < gYear?.length; i++) {
      secondPageHeight += 10;
    }

    secondPageHeight += 5;

    // for draw a table of pg

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Marks Obtained In Degree Examination :");
    secondPageHeight += 3;

    // for vetical line

    // first colunm
    doc.setLineWidth(0.2);
    doc.setDrawColor("#121212");
    doc.line(9, secondPageHeight + 3, 9, secondPageHeight + 46);

    doc.setLineWidth(0.2);
    doc.setDrawColor("#121212");
    doc.line(50, secondPageHeight + 3, 50, secondPageHeight + 46);
    doc.setLineWidth(0.2);
    doc.setDrawColor("#121212");
    doc.line(100, secondPageHeight + 3, 100, secondPageHeight + 46);
    doc.setLineWidth(0.2);
    doc.setDrawColor("#121212");
    doc.line(150, secondPageHeight + 3, 150, secondPageHeight + 46);
    doc.setLineWidth(0.2);
    doc.setDrawColor("#121212");
    doc.line(width - 9, secondPageHeight + 3, width - 9, secondPageHeight + 46);

    // for horizontal line

    // first row
    doc.setLineWidth(0.2);
    doc.setDrawColor("#121212");
    doc.line(9, secondPageHeight + 3, width - 9, secondPageHeight + 3);
    doc.setTextColor("#121212");
    doc.text(20, secondPageHeight + 9, "Semester");

    doc.text(54, secondPageHeight + 8, "Marks Obtained / Total");
    doc.text(65, secondPageHeight + 13, "Credits");

    doc.text(112, secondPageHeight + 8, "Grand Total/");
    doc.text(108, secondPageHeight + 13, "Total Grade Points");

    doc.text(156, secondPageHeight + 8, "Overall % and class");
    doc.text(162, secondPageHeight + 13, "obtained / CPI");

    secondPageHeight += 13; //40

    // second row
    doc.setLineWidth(0.2);
    doc.setDrawColor("#121212");
    doc.line(9, secondPageHeight + 3, width - 9, secondPageHeight + 3);
    doc.text(11, secondPageHeight + 8, "Pre final");
    doc.text(68, secondPageHeight + 12, `${sutdentInfo?.pObtainPoint ?? 800}`);
    doc.text(120, secondPageHeight + 12, `${sutdentInfo?.pTotalPoint ?? 900}`);
    doc.text(11, secondPageHeight + 13, "Semester/Year");

    secondPageHeight += 15; //40

    doc.setLineWidth(0.2);
    doc.setDrawColor("#121212");
    doc.line(9, secondPageHeight + 3, 150, secondPageHeight + 3);
    doc.text(170, secondPageHeight + 3, `${sutdentInfo?.percentageCpi ?? 95}`);

    doc.text(11, secondPageHeight + 8, "Final");
    doc.text(68, secondPageHeight + 12, `${sutdentInfo?.fObtainPoint ?? 800}`);
    doc.text(120, secondPageHeight + 12, `${sutdentInfo?.fTotalPoint ?? 900}`);
    doc.text(11, secondPageHeight + 13, "Semester/Year");
    secondPageHeight += 15; //40

    doc.setLineWidth(0.2);
    doc.setDrawColor("#121212");
    doc.line(9, secondPageHeight + 3, width - 9, secondPageHeight + 3);
    secondPageHeight += 12; //40

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text(9, secondPageHeight, "Undertakings: -");
    secondPageHeight += 6; //40

    for (let xerox of xeroxPGList) {
      doc.addImage(checkbox, "JPEG", 10, secondPageHeight, 4, 4);
      doc.setFontSize(12);
      doc.setTextColor("#121212");
      doc.text(16, secondPageHeight + 3, xerox.copy);
      doc.setTextColor("#454545");
      doc.text(60, secondPageHeight + 3, xerox.name);
      secondPageHeight += 9;
    }

    doc.setFontSize(13);
    doc.setTextColor("#121212");
    doc.text(9, height - 35, "Place :");
    doc.text(9, height - 25, "Date :");
    doc.setTextColor("#454545");
    doc.text(25, height - 25, `${moment(todayDate).format("DD MMMM yyyy")}`);
    doc.setTextColor("#121212");
    doc.text(width - 50, height - 25, "Student Signature");
    secondPageHeight += 13;

    doc.setLineWidth(0.3);
    doc.setDrawColor("#121212");
    doc.line(0, height - 15, width, height - 15);

    doc.setFontSize(11);
    doc.setTextColor("#121212");
    doc.text(9, height - 10, "Note :");
    doc.setTextColor("#454545");
    doc.text(
      20,
      height - 10,
      "I (Student Applying) declare that all details mentioned above is correct as per my knowledge"
    );
  } else if (pdfUndertaking === "UG") {
    doc.addPage({
      format: "a4",
      putOnlyUsedFonts: true,
    });

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text(9, 10, "Undertakings: -");

    //   doc.setFontSize(11);
    //   doc.setTextColor("#454545");
    //   doc.text(9, 16, "I");
    //   doc.setTextColor("#121212");
    //   doc.text(11, 16, sutdentInfo.name);
    //   var secondPageHeight = 0;
    //   let studentNameWidth = doc.getTextWidth(sutdentInfo.name);
    //   let dynamicName = doc.splitTextToSize(
    //     `hereby declare that, i have taken admission in the ${sutdentInfo?.applicationName}, in ${sutdentInfo?.insName} on my own.`,
    //     width - studentNameWidth - 15
    //   );
    //   doc.setTextColor("#454545");
    //   doc.text(studentNameWidth + 12, 16, dynamicName[0]);
    //   secondPageHeight += 16;

    //   if (dynamicName?.length > 1) {
    //     let leftDynamicName = doc.splitTextToSize(
    //       `hereby declare that, i have taken admission in the ${sutdentInfo?.applicationName}, in ${sutdentInfo?.insName} on my own.`?.substring(
    //         dynamicName[0]?.length
    //       ),
    //       width - 15
    //     );
    //     doc.text(9, secondPageHeight + 5, leftDynamicName);
    //   }

    doc.setFontSize(11);
    doc.setTextColor("#454545");
    let dynamicName = doc.splitTextToSize(
      `I ${sutdentInfo?.name} hereby declare that, i have taken admission in the ${sutdentInfo?.applicationName}, in ${institute?.insName} on my own.`,
      width - 15
    );
    doc.text(9, 16, dynamicName);
    secondPageHeight += 16;

    if (dynamicName?.length > 1) {
      for (let i = 0; i < dynamicName?.length; i++) {
        secondPageHeight += 5;
      }
    }

    doc.text(
      9,
      secondPageHeight + 5,
      "1. I have read all the rules of admission for the year & undertake to abide by the same"
    );
    secondPageHeight += 5;
    doc.text(
      9,
      secondPageHeight + 5,
      "2. The information given by me in my application is true to be the best knowledge and belief"
    );
    secondPageHeight += 5;
    doc.text(
      9,
      secondPageHeight + 5,
      "3. I have not been debarred from appearing at any examination held by the government or any statutory body in India"
    );
    secondPageHeight += 5;
    let fourth = doc.splitTextToSize(
      "4. I hereby agree to confirm to any Rules Act & Laws enforced by government and i hereby undertake that so long as I remain student of college, I will do nothing either inside or out of the college which my result in disciplinary action against the under the rules of conduct and discipline",
      width - 15
    );
    doc.text(9, secondPageHeight + 5, fourth);
    if (fourth?.length) {
      for (let i = 0; i < fourth?.length; i++) {
        secondPageHeight += 5;
      }
    }

    let fifth = doc.splitTextToSize(
      `5. I fully understand that the Principal of the ${institute?.insName}, ${institute?.insAddress}, will have fully authority to expel me from the college of any infringement of rules of conduct and discipline`,
      width - 15
    );
    doc.text(9, secondPageHeight + 5, fifth);
    if (fifth?.length) {
      for (let i = 0; i < fifth?.length; i++) {
        secondPageHeight += 5;
      }
    }

    let sixth = doc.splitTextToSize(
      "6. I am fully aware that there is likely to be change in the fee structure and I understand to pay fees whatsoever, approved by competent authority",
      width - 15
    );
    doc.text(9, secondPageHeight + 5, sixth);
    if (sixth?.length) {
      for (let i = 0; i < sixth?.length; i++) {
        secondPageHeight += 5;
      }
    }
    let seventh = doc.splitTextToSize(
      "7. I am fully aware that i wil not be allow to appear for the examination if I do not attend minimum 75% class in theory, practical, drawing etc. , I am also aware that i will not allow to appear for the examination if I fail to submit satisfactory all the assignment job, journal, drawing, reports as specified by the university within stipulated time limit",

      width - 15
    );
    doc.text(9, secondPageHeight + 5, seventh);
    if (seventh?.length) {
      for (let i = 0; i < seventh?.length; i++) {
        secondPageHeight += 5;
      }
    }
    let eight = doc.splitTextToSize(
      "8. I am admitted under (SC / ST / OBC / VJNT / SBC / EWS) category. If i do not apply to appropriate authority for free ship / scholarship (State Government/ Central Government) for reimbursement of fees, i will be responsible to pay the full fees applicable for Open Category Student",

      width - 15
    );
    doc.text(9, secondPageHeight + 5, eight);
    if (eight?.length) {
      for (let i = 0; i < eight?.length; i++) {
        secondPageHeight += 5;
      }
    }
    let ninth = doc.splitTextToSize(
      "9. If the government decides not to reimburse or sanction the fees for any reason whatsoever then I am liable to pay the full fees as application to the Open Category Student",

      width - 15
    );
    doc.text(9, secondPageHeight + 5, ninth);
    if (ninth?.length) {
      for (let i = 0; i < ninth?.length; i++) {
        secondPageHeight += 5;
      }
    }
    let tenth = doc.splitTextToSize(
      "10. The fee structure for the year is tentative. In case competent authority makes any changes in the fees, i will be responsible to pay the fees accordingly",
      width - 15
    );
    doc.text(9, secondPageHeight + 5, tenth);
    if (tenth?.length) {
      for (let i = 0; i < tenth?.length; i++) {
        secondPageHeight += 5;
      }
    }

    doc.setLineWidth(0.2);
    doc.setDrawColor("#121212");
    doc.line(0, secondPageHeight + 5, width, secondPageHeight + 5);
    secondPageHeight += 8;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text(
      9,
      secondPageHeight + 5,
      "Following Original / Xerox Copy of document retained with college: -"
    );
    secondPageHeight += 10;
    let otherListHeight = secondPageHeight;
    for (let xerox of xeroxListFirst) {
      doc.addImage(checkbox, "JPEG", 10, secondPageHeight, 4, 4);
      doc.setFontSize(12);
      doc.setTextColor("#121212");
      doc.text(16, secondPageHeight + 3, xerox.copy);
      doc.setTextColor("#454545");
      doc.text(60, secondPageHeight + 3, xerox.name);
      secondPageHeight += 9;
    }
    for (let xerox of xeroxListSecond) {
      if (gapRow?.includes(xerox?.id)) {
      } else {
        doc.addImage(checkbox, "JPEG", width / 2 + 4, otherListHeight, 4, 4);
        doc.setFontSize(12);
        doc.setTextColor("#121212");
        doc.text(width / 2 + 10, otherListHeight + 3, xerox.copy);
        doc.setTextColor("#454545");
        doc.text(width / 2 + 54, otherListHeight + 3, xerox.name);
      }
      otherListHeight += 9;
    }

    secondPageHeight += 10;

    doc.setFontSize(13);
    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight + 15, "Date :");
    doc.setTextColor("#454545");
    doc.text(
      25,
      secondPageHeight + 15,
      `${moment(todayDate).format("DD MMMM yyyy")}`
    );
    doc.setTextColor("#121212");
    doc.text(width - 50, secondPageHeight + 15, "Student Signature");
    secondPageHeight += 13;

    doc.setLineWidth(0.3);
    doc.setDrawColor("#121212");
    doc.line(0, secondPageHeight + 5, width, secondPageHeight + 5);
    secondPageHeight += 8;

    doc.setFontSize(11);
    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight + 5, "Note :");
    doc.setTextColor("#454545");
    doc.text(
      20,
      secondPageHeight + 5,
      "I (Student Applying) declare that all details mentioned above is correct as per my knowledge"
    );
  } else {
  }
  return doc.output("blob");
  // window.open(
  //   doc.output("bloburl", {
  //     filename: `Application-Form.pdf`,
  //   }),
  //   "_blank"
  // );
};

export default StudentFormPdf;
