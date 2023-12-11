import jsPDF from "jspdf";
import moment from "moment";
// let img = "/images/certificate/logodemo.jpg";
import converter from "number-to-words";
const StudentLeavingnCertificate = (institute, studentInfo) => {
  // console.info("masbfjka", institute, studentInfo);
  var doc = new jsPDF({
    format: "a4",
    putOnlyUsedFonts: true,
  });

  var width = doc.internal.pageSize.getWidth();
  const toPascalCase = (str) =>
    (str.match(/[a-zA-Z0-9]+/g) || [])
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join(" ");

  // start of pdf title
  var firstPageHeight = 0;
  if (studentInfo?.letterHead) {
    firstPageHeight = 45;
  } else {
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
      institute?.insName ?? "IIT Mumabi Mera by Of Raod of campige sbdas f as",
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
      institute?.insAddress ??
        "plot no. 77 Adarsh Vihar Buddeshwar Chauraha LKO",
      "center"
    );

    doc.setFont("WorkSans");
    doc.setTextColor(18, 18, 18);
    doc.setFontSize(10);

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
    firstPageHeight += 16;
  }
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(18);
  doc.text(
    width / 2,
    firstPageHeight,
    `${
      studentInfo?.is_leaving === "leaving"
        ? "Leaving Certificate"
        : "Transfer Certificate"
    }`,
    "center"
  );
  firstPageHeight += 8;

  doc.setLineWidth(0.4);
  doc.setDrawColor("#121212");
  doc.line(0, firstPageHeight, width, firstPageHeight);
  firstPageHeight += 8;

  if (studentInfo?.isOriginal) {
  } else {
    doc.setTextColor(234, 238, 238);
    doc.setFontSize(100);
    doc.text(60, doc.internal.pageSize.height - 100, `Duplicate`, null, 50);
  }

  doc.setFontSize(13);
  if (studentInfo?.grNumber) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "Gr No :");
    doc.setTextColor("#454545");
    doc.text(
      10 + doc.getTextWidth("Gr No :"),
      firstPageHeight,
      `${studentInfo?.grNumber}`
    );
  }
  if (studentInfo?.bookNumber) {
    doc.text(
      15 + doc.getTextWidth(`Gr No :${studentInfo?.grNumber}`),
      firstPageHeight,
      "Book No :"
    );
    doc.setTextColor("#454545");
    doc.text(
      15 + doc.getTextWidth(`Gr No :${studentInfo?.grNumber} Book No :`),
      firstPageHeight,
      `${studentInfo?.bookNumber}`
    );
  }

  if (studentInfo?.certificateNumber) {
    doc.text(
      20 +
        doc.getTextWidth(
          `Gr No :${studentInfo?.grNumber} Book No : ${studentInfo?.bookNumber}`
        ),
      firstPageHeight,
      "Certificate No :"
    );
    doc.setTextColor("#454545");
    doc.text(
      20 +
        doc.getTextWidth(
          `Gr No :${studentInfo?.grNumber} Book No : ${studentInfo?.bookNumber} Certificate No :`
        ),
      firstPageHeight,
      `${studentInfo?.certificateNumber}`
    );
  }

  if (studentInfo?.udiseNumber) {
    doc.text(
      25 +
        doc.getTextWidth(
          `Gr No :${studentInfo?.grNumber} Book No : ${studentInfo?.bookNumber} Certificate No : ${studentInfo?.certificateNumber}`
        ),
      firstPageHeight,
      "UDISE No/Student ID No :"
    );
    doc.setTextColor("#454545");
    doc.text(
      25 +
        doc.getTextWidth(
          `Gr No :${studentInfo?.grNumber} Book No : ${studentInfo?.bookNumber} Certificate No : ${studentInfo?.certificateNumber} UDISE No/Student ID No :`
        ),
      firstPageHeight,
      `${studentInfo?.udiseNumber}`
    );
  }

  if (
    studentInfo?.grNumber ||
    studentInfo?.bookNumber ||
    studentInfo?.certificateNumber ||
    studentInfo?.udiseNumber
  ) {
    firstPageHeight += 10;
  }

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Full Name of Student :");
  doc.setTextColor("#454545");
  doc.text(60, firstPageHeight, `${studentInfo?.name}`);
  firstPageHeight += 10; //70

  if (studentInfo?.motherName) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "Mother’s Name :");
    doc.setTextColor("#454545");
    doc.text(60, firstPageHeight, `${studentInfo?.motherName}`);
  }
  if (studentInfo?.category) {
    doc.setTextColor("#121212");
    doc.text(width / 2, firstPageHeight, "Caste Category :");
    doc.setTextColor("#454545");
    doc.text(width / 2 + 60, firstPageHeight, `${studentInfo?.category}`);
  }
  if (studentInfo?.motherName || studentInfo?.category) {
    firstPageHeight += 10; //70
  }

  if (studentInfo?.religion) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "Religion :");
    doc.setTextColor("#454545");
    doc.text(60, firstPageHeight, `${studentInfo?.religion}`);
  }

  if (studentInfo?.religion) {
    doc.setTextColor("#121212");
    doc.text(width / 2, firstPageHeight, "Caste :");
    doc.setTextColor("#454545");
    doc.text(width / 2 + 60, firstPageHeight, `${studentInfo?.catse}`);
  }
  if (studentInfo?.religion || studentInfo?.religion) {
    firstPageHeight += 10; //70
  }

  if (studentInfo?.nationality) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "Nationality :");
    doc.setTextColor("#454545");
    doc.text(60, firstPageHeight, `${studentInfo?.nationality}`);
  }
  if (studentInfo?.motherT) {
    doc.setTextColor("#121212");
    doc.text(width / 2, firstPageHeight, "Mother Tongue :");
    doc.setTextColor("#454545");
    doc.text(width / 2 + 60, firstPageHeight, `${studentInfo?.motherT}`);
  }
  if (studentInfo?.religion || studentInfo?.religion) {
    firstPageHeight += 10; //70
  }
  if (studentInfo?.birthPlace) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "Birth Place :");
    doc.setTextColor("#454545");
    let studentBirthPlace = doc.splitTextToSize(
      `${studentInfo?.birthPlace}`,
      width - 20
    );
    doc.text(60, firstPageHeight, studentBirthPlace);
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
  }
  if (studentInfo?.dateOfBirth) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "Date Of Birth :");
    doc.setTextColor("#454545");
    doc.text(60, firstPageHeight, `${studentInfo?.dateOfBirth}`);
    firstPageHeight += 10; //90
  }
  if (studentInfo?.dateOfBirth) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "(In Words) :");
    doc.setTextColor("#454545");
    let dateOfBirthSplit = studentInfo?.dateOfBirth?.split("-");
    if (dateOfBirthSplit?.length) {
      doc.text(
        60,
        firstPageHeight,
        `${toPascalCase(
          converter.toWords(`${dateOfBirthSplit[2]}`)
        )} ${toPascalCase(
          converter.toWords(`${dateOfBirthSplit[1]}`)
        )} ${toPascalCase(converter.toWords(`${dateOfBirthSplit[0]}`))}`
      );
    } else {
      doc.text(60, firstPageHeight, ``);
    }
    firstPageHeight += 10; //100
  }
  if (studentInfo?.previousSchool) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "Previous School/College :");
    doc.setTextColor("#454545");
    doc.text(60, firstPageHeight, `${studentInfo?.previousSchool}`);
    firstPageHeight += 10; //190
  }
  if (studentInfo?.instituteJoinDate) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "Institute Joining Date :");
    doc.setTextColor("#454545");
    doc.text(60, firstPageHeight, `${studentInfo?.instituteJoinDate}`);
    firstPageHeight += 10; //70
  }
  if (studentInfo?.studyProgress) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "Study Progress :");
    doc.setTextColor("#454545");
    doc.text(60, firstPageHeight, `${studentInfo?.studyProgress}`);
  }
  if (studentInfo?.behaviour) {
    doc.setTextColor("#121212");
    doc.text(width / 2, firstPageHeight, "Behaviour :");
    doc.setTextColor("#454545");
    doc.text(width / 2 + 60, firstPageHeight, `${studentInfo?.behaviour}`);
  }
  if (studentInfo?.studyProgress || studentInfo?.behaviour) {
    firstPageHeight += 10; //70
  }
  if (studentInfo?.instituteLeavingDate) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "Institute Leaving Date :");
    doc.setTextColor("#454545");
    doc.text(60, firstPageHeight, `${studentInfo?.instituteLeavingDate}`);
  }
  if (studentInfo?.courseDuration) {
    doc.setTextColor("#121212");
    doc.text(width / 2, firstPageHeight, "Course Duration :");
    doc.setTextColor("#454545");
    doc.text(width / 2 + 60, firstPageHeight, `${studentInfo?.courseDuration}`);
  }
  if (studentInfo?.instituteLeavingDate || studentInfo?.courseDuration) {
    firstPageHeight += 10; //70
  }
  if (studentInfo?.studentClassName) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "Was Studing in, From :");
    doc.setTextColor("#454545");
    doc.text(60, firstPageHeight, `${studentInfo?.studentClassName}`);
    firstPageHeight += 10; //70
  }
  if (studentInfo?.leavingReason) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "Reason For Leaving :");
    doc.setTextColor("#454545");
    let leavingReason = doc.splitTextToSize(
      `${studentInfo?.leavingReason}`,
      width - 65
    );
    doc.text(60, firstPageHeight, leavingReason);
    if (leavingReason?.length > 1) {
      for (let i = 1; i < leavingReason?.length; i++) {
        firstPageHeight += 5;
      }
    } else {
      firstPageHeight += 10; //140
    }

    if (leavingReason?.length > 1) {
      firstPageHeight += 10;
    }
  }
  if (studentInfo?.remark) {
    doc.setTextColor("#121212");
    doc.text(9, firstPageHeight, "Remarks :");
    doc.setTextColor("#454545");
    let remark = doc.splitTextToSize(`${studentInfo?.remark}`, width - 65);
    doc.text(60, firstPageHeight, remark);
    if (remark?.length > 1) {
      for (let i = 1; i < remark?.length; i++) {
        firstPageHeight += 5;
      }
    } else {
      firstPageHeight += 10; //140
    }

    if (remark?.length > 1) {
      firstPageHeight += 10;
    }
  }
  doc.setDrawColor(15, 132, 178);
  doc.setLineWidth(5.3);
  doc.line(0, firstPageHeight, width, firstPageHeight);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(
    width / 2,
    firstPageHeight + 1,
    "Giving this certificate all information is correct as per institute register.",
    null,
    null,
    "center"
  );

  firstPageHeight += 10; //70

  doc.setFontSize(13);

  doc.setTextColor("#121212");
  doc.text(9, firstPageHeight, "Date :");
  doc.setTextColor("#454545");
  doc.text(19, firstPageHeight, ` ${moment().format("Do MMM YYYY")}`);
  doc.setTextColor("#121212");
  let authority = studentInfo?.authority
    ? `${studentInfo?.authority}:`
    : "Principal/Competent Authority:";
  doc.text(
    width - 10 - doc.getTextWidth(authority),
    firstPageHeight,
    authority
  );
  firstPageHeight += 10; //70

  doc.setLineWidth(0.2);
  doc.setDrawColor(18, 18, 18);
  doc.line(0, firstPageHeight, width, firstPageHeight);
  firstPageHeight += 5;

  doc.setTextColor(18, 18, 18);
  doc.setFontSize(10);
  let note = doc.splitTextToSize(
    "Note : No one except one who is making this certificate should interfere with any details of this certificate, other students will be expelled and legal action will be taken.",
    width - 20
  );
  doc.text(9, firstPageHeight, note);
  if (note?.length > 1) {
    for (let i = 1; i < note?.length; i++) {
      firstPageHeight += 5;
    }
  } else {
    firstPageHeight += 10; //140
  }
  return doc.output("blob");
  // return doc.output("bloburl", {
  //   filename: `${studentInfo?.name}-leaving.pdf`,
  // });
  // window.open(
  //   doc.output("bloburl", {
  //     filename: `leaving.pdf`,
  //   }),
  //   "_blank"
  // );
};

export default StudentLeavingnCertificate;
