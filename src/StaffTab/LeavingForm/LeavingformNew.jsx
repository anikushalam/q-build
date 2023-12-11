import React, { useState, useEffect } from "react";
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
import { useTranslation } from "react-i18next";
import feeReceiptPdf from "../../pdf/pdfFeeRecipt";
import pdfInternalFeeReceipt from "../../pdf/pdfInternalFeeReceipt";
import PdfLeavingDuplicate from "../../pdf/pdfLeavingCertificateHindi";
import { useGetStudentFeeReceipt } from "../../hooks/institute/institute-staff-student-api";
import { imageShowUrl } from "../../services/BaseUrl";

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

function LeavingformNew() {
  const { t } = useTranslation();

  const frid = "6401bcff2e5afe57385f9d2c";
  // "63f1ce8e989d7bf5ffdd3331";
  // "63f3976db5e32d2c931b77fe";
  // "63ea429ea4765f447150cb61";

  const { feeReceiptData, feeReceiptDataRefetch } = useGetStudentFeeReceipt({
    frid: frid,
    skip: !frid,
  });

  const handleDownloadDuplicate = () => {
    PdfLeavingDuplicate();
  };

  const handleDownload = () => {
    const receiptData = feeReceiptData?.receipt;
    const allRemain = feeReceiptData?.all_remain;
    const imgData = "/images/certificate/logodemo.jpg";
    // receiptData?.application?.admissionAdmin?.institute
    //   ?.insProfilePhoto
    //   ? `${imageShowUrl}/${receiptData?.application?.admissionAdmin?.institute?.insProfilePhoto}`
    //   : "/images/certificate/logodemo.jpg";

    const fee_heads = [
      {
        _id: "63ea3a19429903948950c6f1",
        applicable_fee: 9000,
        head_name: "Library Fees",
        paid_fee: 9500,
        remain_fee: 0,
        appId: "63ea3a19429903948950c5a0",
        created_at: "2023-02-13T20:32:59.202Z",
      },
      {
        head_name: "Tution Fees",
        applicable_fee: 11000,
        paid_fee: 11000,
        remain_fee: 0,
        appId: "63ea3a19429903948950c5a0",
        created_at: "2023-02-13T20:32:59.202Z",
        _id: "63ea3a19429903948950c6f2",
      },
      {
        head_name: "Tution Fees",
        applicable_fee: 11000,
        paid_fee: 11000,
        remain_fee: 0,
        appId: "63ea3a19429903948950c5a0",
        created_at: "2023-02-13T20:32:59.202Z",
        _id: "63ea3a19429903948950c6f2",
      },
      {
        head_name: "Tution Fees",
        applicable_fee: 11000,
        paid_fee: 11000,
        remain_fee: 0,
        appId: "63ea3a19429903948950c5a0",
        created_at: "2023-02-13T20:32:59.202Z",
        _id: "63ea3a19429903948950c6f2",
      },
      {
        head_name: "Tution Fees",
        applicable_fee: 11000,
        paid_fee: 11000,
        remain_fee: 0,
        appId: "63ea3a19429903948950c5a0",
        created_at: "2023-02-13T20:32:59.202Z",
        _id: "63ea3a19429903948950c6f2",
      },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   _id: "63ea3a19429903948950c6f1",
      //   applicable_fee: 9000,
      //   head_name: "Library Fees",
      //   paid_fee: 9500,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   _id: "63ea3a19429903948950c6f1",
      //   applicable_fee: 9000,
      //   head_name: "Library Fees",
      //   paid_fee: 9500,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees 303",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11001,
      //   paid_fee: 11000,
      //   remain_fee: 5,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11002,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11003,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11004,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11005,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11006,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   _id: "63ea3a19429903948950c6f1",
      //   applicable_fee: 9007,
      //   head_name: "Library Fees",
      //   paid_fee: 9507,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11008,
      //   paid_fee: 11008,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
      // {
      //   head_name: "Tution Fees",
      //   applicable_fee: 11000,
      //   paid_fee: 11000,
      //   remain_fee: 0,
      //   appId: "63ea3a19429903948950c5a0",
      //   created_at: "2023-02-13T20:32:59.202Z",
      //   _id: "63ea3a19429903948950c6f2",
      // },
    ];

    if (receiptData && allRemain) {
      feeReceiptPdf(receiptData, allRemain, imgData, fee_heads);
    }
    // if (receiptData && allRemain) {
    //   pdfInternalFeeReceipt(receiptData, allRemain, imgData, fee_heads);
    // }

    // console.info("THis is click");
  };

  return (
    <div>
      <button onClick={handleDownload}>Create Pdf</button>
    </div>
  );
}

export default LeavingformNew;
