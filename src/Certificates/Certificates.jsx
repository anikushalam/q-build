import React from "react";
import "./Certificates.css";
import jsPDF from "jspdf";
import pdfPaySlip from "../pdf/pdfPaySlip";
import PdfBonaFideCertificate from "../pdf/PdfBona-fideCertificate";

function Certificates() {
  // -------------Report Card----------------------

  // const toa4Pdf = () => {
  //   const imgData = "/images/certificate/logodemo.jpg";

  //   const instituteText = {
  //     insName: "APJ Abdul Kalam University",
  //     insDistrict: "Golaghat",
  //     insPincode: "785604",
  //     insPhoneNumber: "8979456053",
  //     insEmail: "neha@edureka.co",
  //     insPrinciple: "Harsh Kumar Goenka",
  //     insAdd: "Hirabai Haridas Vidyanagari, Panchavati",
  //     insDist: "Nashik",
  //     insState: "Maharashtra",
  //   };

  //   const studentText = {
  //     studentFirstName: "Amit",
  //     studentMiddleName: "Kumar",
  //     studentLastName: "Singh",
  //     workingDays: "09",
  //     PaidLeaves: "93",
  //   };

  //   pdfPaySlip(imgData, instituteText, studentText);
  // };

  const bonafide = () => {
    const userImg = "/images/ins-image.jpg";
    const insLogo = "/images/certificate/logodemo.jpg";

    const subject =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    const insData = {
      insName: " K.K.Wagh Institute of Engineering Education & Research.",
      insAddress:
        "Hirabai Haridas Vidyanagari, Mumbai Agra Road, Panchavati, Nashik, Maharashtra",
      insPhoneNo: "7745666200",
      insMobileNo: "9876543210",
    };

    const studentData = {
      batches: { _id: "6322eb03aa93f2a1fe6ee86b", batchName: "2022-2023" },
      institute: {
        _id: "6322dd4da02ccbf7fb5d8617",
        insName: "Qviple Education SAAS Platform",
        insPhoneNumber: 7020687305,
        insState: "Karnataka",
        insDistrict: "Bangalore",
        insName: "Qviple Education SAAS Platform",
        insPhoneNumber: 7020687305,
        insPincode: 560068,
        insProfilePhoto: "e89298b21b56f081f8ed101442921176",
        insState: "Karnataka",
      },
      photoId: "0",
      studentAdmissionDate: "2022-09-15",
      studentBonaStatus: "Ready",
      studentClass: { _id: "6322eb8eaa93f2a1fe6ee90d", className: "FYJC" },
      studentDOB: "Sep 06,1995",
      studentFirstName: "Dhar",
      studentLastName: "Patil",
      studentMiddleName: null,
      studentProfilePhoto: "0dcf4492a36397777a68586fd1164e82",
      studentReason:
        "dfgvdrgsgrsggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
      _id: "6322ed41aa93f2a1fe6eea1d",
    };

    const grNumber = 1;

    PdfBonaFideCertificate(
      insLogo,
      insData,
      grNumber,
      userImg,
      // classData,

      subject,
      studentData
    );
  };
  return (
    <div className="certificates">
      <button onClick={bonafide}>Generate Report Card</button>

      <div className="pdf" id="pdfid">
        <img src="/images/certificate/logodemo.svg" />
        <h2> K.K.Wagh Institute of Engineering Education & Research.</h2>
        <div></div>
      </div>
    </div>
  );
}

export default Certificates;
