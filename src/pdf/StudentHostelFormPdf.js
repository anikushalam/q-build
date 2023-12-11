import jsPDF from "jspdf";
import moment from "moment";
// let img = "/images/certificate/logodemo.jpg";
import converter from "number-to-words";
const StudentHostelFormPdf = (
  sutdentInfo,
  institute,
  pdfUndertaking = "PG"
) => {
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
    doc.text(width / 2, firstPageHeight, "Hostel Form", "center");
  } else {
    let applicationName = doc.splitTextToSize(
      `Hostel Form for ${sutdentInfo?.applicationName}`,
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
    doc.text(9, secondPageHeight + 10, "Hostel Details: -");
    secondPageHeight += 20;

    doc.setFontSize(13);

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Programme :");
    doc.setTextColor("#454545");
    doc.text(60, secondPageHeight, `${sutdentInfo?.hProgramm ?? 54.4}`);
    secondPageHeight += 10; //220

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Branch :");
    doc.setTextColor("#454545");
    doc.text(60, secondPageHeight, `${sutdentInfo?.hBranch ?? 2023}`);
    secondPageHeight += 10; //220

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Year :");
    doc.setTextColor("#454545");
    doc.text(60, secondPageHeight, `${sutdentInfo?.hYear ?? 54.4}`);
    secondPageHeight += 10; //220

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Hostel CPI :");
    doc.setTextColor("#454545");
    doc.text(60, secondPageHeight, `${sutdentInfo?.hHostelCpi ?? 54.4}`);
    secondPageHeight += 10; //220

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Single Seater Room :");
    doc.setTextColor("#454545");
    doc.text(60, secondPageHeight, `${sutdentInfo?.hSeater ?? "No"}`);
    secondPageHeight += 10; //220

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Physically Handicapped :");
    doc.setTextColor("#454545");
    doc.text(60, secondPageHeight, `${sutdentInfo?.hPh ?? "No"}`);
    secondPageHeight += 10; //220

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text(9, secondPageHeight, "Undertakings: -");
    secondPageHeight += 6; //40

    doc.setFontSize(13);
    doc.setTextColor("#454545");
    let oth1 = doc.splitTextToSize(
      "I declare that the avobe information is correct, I promise and undertake to vacate the hostel at the end of each term period stipulated or if discontinue my education or if I violate any of the hostel rules and if I am asked to vacate the hostel by the Hostel Suptd.",
      width - 20
    );
    doc.text(9, secondPageHeight, oth1);

    for (let i = 1; i < oth1?.length; i++) {
      secondPageHeight += 10;
    }

    let oth2 = doc.splitTextToSize(
      "I further promise that I will do nothing inside or outside the hostel and mess that will in any way interfere with their orderly government and discipline and that I shall use my stay in the hostel solely for the purpose of furthering mu studies and normal well-being.",
      width - 20
    );
    doc.text(9, secondPageHeight, oth2);

    for (let i = 1; i < oth2?.length; i++) {
      secondPageHeight += 10;
    }

    doc.setFontSize(13);
    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight + 20, "Date :");
    doc.setTextColor("#454545");
    doc.text(
      25,
      secondPageHeight + 20,
      `${moment(todayDate).format("DD MMMM yyyy")}`
    );
    doc.setTextColor("#121212");
    doc.setFontSize(12);
    doc.text(width - 80, secondPageHeight + 20, "SIGNATURE OF THE APPLICANT");
    secondPageHeight += 40;

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(9, secondPageHeight, "ENDORSEMENT OF THE PARENT/GUARDIAN");
    secondPageHeight += 6; //40
    doc.setFontSize(13);
    doc.setTextColor("#454545");
    let oth3 = doc.splitTextToSize(
      "The applicant is my ward. I endorse the application and the declaration mae therein. He is seeking admission to the hostel at my desire and I shall be fully responsible for his behavior.",
      width - 20
    );
    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, oth3);

    for (let i = 1; i < oth3?.length; i++) {
      secondPageHeight += 10;
    }

    doc.setFontSize(13);
    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight + 20, "Date :");
    doc.setTextColor("#454545");
    doc.text(
      25,
      secondPageHeight + 20,
      `${moment(todayDate).format("DD MMMM yyyy")}`
    );
    doc.setTextColor("#121212");
    doc.setFontSize(12);

    doc.text(
      width - 98,
      secondPageHeight + 20,
      "SIGNATURE OF THE PARENT/GUARDIAN"
    );
    secondPageHeight += 33;

    doc.setFontSize(13);
    // doc.setTextColor("#121212");
    // doc.text(9, height - 25, "Date :");
    // doc.setTextColor("#454545");
    // doc.text(25, height - 25, `${moment(todayDate).format("DD MMMM yyyy")}`);

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
    doc.text(9, secondPageHeight + 10, "Hostel Details: -");
    secondPageHeight += 20;

    doc.setFontSize(13);

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Programme :");
    doc.setTextColor("#454545");
    doc.text(60, secondPageHeight, `${sutdentInfo?.hProgramm ?? 54.4}`);
    secondPageHeight += 10; //220

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Branch :");
    doc.setTextColor("#454545");
    doc.text(60, secondPageHeight, `${sutdentInfo?.hBranch ?? 2023}`);
    secondPageHeight += 10; //220

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Year :");
    doc.setTextColor("#454545");
    doc.text(60, secondPageHeight, `${sutdentInfo?.hYear ?? 54.4}`);
    secondPageHeight += 10; //220

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Hostel CPI :");
    doc.setTextColor("#454545");
    doc.text(60, secondPageHeight, `${sutdentInfo?.hHostelCpi ?? 54.4}`);
    secondPageHeight += 10; //220

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Single Seater Room :");
    doc.setTextColor("#454545");
    doc.text(60, secondPageHeight, `${sutdentInfo?.hSeater ?? "No"}`);
    secondPageHeight += 10; //220

    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, "Physically Handicapped :");
    doc.setTextColor("#454545");
    doc.text(60, secondPageHeight, `${sutdentInfo?.hPh ?? "No"}`);
    secondPageHeight += 10; //220

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text(9, secondPageHeight, "Undertakings: -");
    secondPageHeight += 6; //40

    doc.setFontSize(13);
    doc.setTextColor("#454545");
    let oth1 = doc.splitTextToSize(
      "I declare that the avobe information is correct, I promise and undertake to vacate the hostel at the end of each term period stipulated or if discontinue my education or if I violate any of the hostel rules and if I am asked to vacate the hostel by the Hostel Suptd.",
      width - 20
    );
    doc.text(9, secondPageHeight, oth1);

    for (let i = 1; i < oth1?.length; i++) {
      secondPageHeight += 10;
    }

    let oth2 = doc.splitTextToSize(
      "I further promise that I will do nothing inside or outside the hostel and mess that will in any way interfere with their orderly government and discipline and that I shall use my stay in the hostel solely for the purpose of furthering mu studies and normal well-being.",
      width - 20
    );
    doc.text(9, secondPageHeight, oth2);

    for (let i = 1; i < oth2?.length; i++) {
      secondPageHeight += 10;
    }

    doc.setFontSize(13);
    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight + 20, "Date :");
    doc.setTextColor("#454545");
    doc.text(
      25,
      secondPageHeight + 20,
      `${moment(todayDate).format("DD MMMM yyyy")}`
    );
    doc.setTextColor("#121212");
    doc.setFontSize(12);
    doc.text(width - 80, secondPageHeight + 20, "SIGNATURE OF THE APPLICANT");
    secondPageHeight += 40;

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(9, secondPageHeight, "ENDORSEMENT OF THE PARENT/GUARDIAN");
    secondPageHeight += 6; //40
    doc.setFontSize(13);
    doc.setTextColor("#454545");
    let oth3 = doc.splitTextToSize(
      "The applicant is my ward. I endorse the application and the declaration mae therein. He is seeking admission to the hostel at my desire and I shall be fully responsible for his behavior.",
      width - 20
    );
    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight, oth3);

    for (let i = 1; i < oth3?.length; i++) {
      secondPageHeight += 10;
    }

    doc.setFontSize(13);
    doc.setTextColor("#121212");
    doc.text(9, secondPageHeight + 20, "Date :");
    doc.setTextColor("#454545");
    doc.text(
      25,
      secondPageHeight + 20,
      `${moment(todayDate).format("DD MMMM yyyy")}`
    );
    doc.setTextColor("#121212");
    doc.setFontSize(12);

    doc.text(
      width - 98,
      secondPageHeight + 20,
      "SIGNATURE OF THE PARENT/GUARDIAN"
    );
    secondPageHeight += 33;

    doc.setFontSize(13);
    // doc.setTextColor("#121212");
    // doc.text(9, height - 25, "Date :");
    // doc.setTextColor("#454545");
    // doc.text(25, height - 25, `${moment(todayDate).format("DD MMMM yyyy")}`);

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

export default StudentHostelFormPdf;
