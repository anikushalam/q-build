import jsPDF from "jspdf";
import moment from "moment";
// let img = "/form-testing.jpg";

const StudentBonafidePdf = (student, institute) => {
  var doc = new jsPDF({
    format: "a4",
    putOnlyUsedFonts: true,
  });

  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight();
  const todayDate = new Date();

  var firstPageHeight = 0;
  if (student?.letterHead) {
    firstPageHeight = 45;
  } else {
    // doc.addImage(institute.instituteImage, "JPEG", 24.8, 5, 25, 25);
    doc.addImage(institute.instituteImage, "JPEG", 10, 3, 25, 25);
    doc.addImage(institute.affiliatedImage, "JPEG", width - 34, 3, 25, 25);
    // doc.addImage(institute.affiliatedImage, "JPEG", width - 49.8, 5, 25, 25);

    // doc.addImage(img, "JPEG", 24.8, 5, 25, 25);
    // doc.addImage(img, "JPEG", width - 49.8, 5, 25, 25);

    doc.setLineWidth(8);
    doc.setDrawColor(255, 255, 255);
    doc.circle(22.4, 15.3, 16);
    doc.circle(width - 21.4, 15.3, 16);
    doc.setLineWidth(0);
    firstPageHeight = institute?.insAffiliated ? 18 : 10;
    // firstPageHeight = true ? 15 : 13;
    const instituteName = doc.splitTextToSize(
      institute?.insName ?? "Allahabad University Allahabad University",
      // "Allahabad University Allahabad University Allahabad University Allahabad University Allahabad University Allahabad University",
      130
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
      doc.text(
        107,
        10,
        institute?.insAffiliated ?? "WITH AFFILIATED",
        "center"
      );
    }

    firstPageHeight += 1;
    doc.setFont("Arial", "normal", "400");
    doc.setTextColor(18, 18, 18);
    doc.setFontSize(10);
    const addressSplit = doc.splitTextToSize(
      institute?.insAddress ??
        "plot no. 77 Adarsh Vihar Buddeshwar Chauraha LKO 77 Adarsh Vihar Buddeshwa",
      140
    );
    doc.text(width / 2, firstPageHeight, addressSplit, "center");

    if (addressSplit?.length) {
      for (let i = 0; i < addressSplit?.length; i++) {
        firstPageHeight += 5;
      }
    }

    if (institute.ediatbel1) {
      let editableFirstEdit = doc.splitTextToSize(
        institute.ediatbel1,
        width - 80
      );
      doc.text(width / 2, firstPageHeight + 2, editableFirstEdit, "center");
      if (editableFirstEdit?.length) {
        for (let i = 0; i < editableFirstEdit?.length; i++) {
          firstPageHeight += 5;
        }
      }
    }

    if (institute.ediatbel2) {
      let editableSecondEdit = doc.splitTextToSize(
        institute.ediatbel2,
        width - 80
      );
      doc.text(width / 2, firstPageHeight + 2, editableSecondEdit, "center");
      if (editableSecondEdit?.length) {
        for (let i = 0; i < editableSecondEdit?.length; i++) {
          firstPageHeight += 5;
        }
      }
    }

    // firstPageHeight += 12;
    doc.text(
      width / 2,
      firstPageHeight + 3,
      `Mob No : ${institute?.insPhoneNumber ?? "8787264007"} , Mail: ${
        institute?.insEmail ?? "8787264007"
      }`,
      "center"
    );
    firstPageHeight += 10;
  }
  doc.setFont("Inter", "italic", "400");
  doc.setTextColor(18, 18, 18);
  doc.setFontSize(16);
  doc.text(
    width / 2,
    firstPageHeight + 2,
    "Bona-fide Certificate",
    null,
    null,
    "center"
  );
  firstPageHeight += 2;
  let spaces = doc.getTextWidth("Bona-fide Certificate");
  doc.setLineWidth(0.3);
  doc.setDrawColor(137, 137, 137);
  doc.line(
    width / 2 - spaces,
    firstPageHeight,
    width / 2 - spaces / 2 - 2,
    firstPageHeight
  );

  doc.setDrawColor(137, 137, 137);
  doc.setLineWidth(0.3);
  doc.line(
    width / 2 + spaces / 2 + 2,
    firstPageHeight,
    width / 2 + spaces,
    firstPageHeight
  );

  firstPageHeight += 10;

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);

  doc.setFont("Inter", "normal", "700");
  doc.text(10, firstPageHeight, "Date: ");

  doc.setFont("Inter", "normal", "600");
  doc.text(20, firstPageHeight, `${moment(todayDate).format("DD-MM-yyyy")}`);

  // doc.addImage(img, "JPEG", width - 50, firstPageHeight, 30, 30);
  doc.addImage(
    student.studentImage,
    "JPEG",
    width - 40,
    firstPageHeight,
    30,
    30
  );
  doc.setFont("Inter", "italic", "700");
  doc.setFontSize(13);
  doc.text(
    width - 10 - doc.getTextWidth(`Gr No: ${student?.grNumber ?? "ALD1"}`),
    firstPageHeight + 35,
    `Gr No: ${student?.grNumber ?? "ALD1"}`,
    {
      align: "left",
    }
  );

  firstPageHeight += 10;

  doc.setFont("Inter", "normal", "700");
  doc.setFontSize(11);
  doc.text(10, firstPageHeight + 3, "Subject/Reason:  ");

  doc.setFont("Inter", "normal", "600");

  let reasonSplit = doc.splitTextToSize(
    student?.reason ??
      "With the best reson og goisnam With the best reson og goisnam With the bem",
    width - 135
  );
  doc.text(40, firstPageHeight + 3, reasonSplit, "left");

  firstPageHeight += 30;

  let showingContent = `This is to certify that Mr./Miss ### ${
    ` ${student?.name}` ?? "Ankush Kumar Singh"
  }###, Birth date as per records of institute is ${
    student?.dob ?? "N/A"
  },is a bona-fide student of this institute, studying in class ### ${
    ` ${student?.classTitle}` ?? "BSC"
  }, ${student?.dName ?? "Physics"}, ${
    student?.batchName ?? "2023-2024"
  } ### .`;

  let showingContentSplit = doc.splitTextToSize(showingContent, width - 20);

  let count = 1;
  for (let content of showingContentSplit) {
    let c_split = content.split("###");
    for (let i = 0; i < c_split?.length; i++) {
      let s_width = count === 1 ? 32 : 10;
      for (let j = 0; j < i; j++) {
        s_width += doc.getTextWidth(c_split[j]) - 2;
      }
      if (i % 2 === 0) {
        doc.setFont("Inter", "normal", "600");
        doc.text(s_width, firstPageHeight + 5, c_split[i]);
      } else {
        doc.setFont("Inter", "normal", "700");
        doc.text(s_width, firstPageHeight + 5, c_split[i]);
      }
    }
    count = 2;
    firstPageHeight += 8;
  }

  firstPageHeight += 10; //140

  if (student?.message) {
    doc.setFont("Inter", "normal", "600");
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.text(10, firstPageHeight, `Note : ${student?.message}`, "left");
  }

  firstPageHeight += 5;
  if (student?.letterHead) {
  } else {
    doc.setFont("Inter", "bold", "700");
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(10, firstPageHeight + 20, "Stamp Of Institute");
  }
  doc.setFont("Inter", "normal", "700");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  doc.text(
    width -
      10 -
      doc.getTextWidth(
        student?.authority
          ? `${student?.authority}:`
          : "Principal/Competent Authority:"
      ),
    firstPageHeight + 20,
    student?.authority
      ? `${student?.authority}:`
      : "Principal/Competent Authority:"
  );

  if (student?.isOriginal) {
  } else {
    doc.setTextColor(150);
    doc.text(100, firstPageHeight + 20, `Qviple Copy`);
  }
  return doc.output("blob");
  // return doc.output("bloburl", {
  //   filename: `${student?.name}-Bona-fide.pdf`,
  // });
  // doc.output("dataurlnewwindow", {
  //   filename: `${student?.name}-Bona-fide.pdf`,
  // });
};

export default StudentBonafidePdf;
