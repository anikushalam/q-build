import React, { useEffect, useState } from "react";
import style from "./StudentAllFeesData.module.css";
import { useInternalFeeReceipt } from "../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../Loader/QLoader";
import pdfInternalFeeReceipt from "../../../../../pdf/pdfInternalFeeReceipt";
import { imageShowUrl1 } from "../../../../../services/BaseUrl";
const StudentInternalFeeReceipt = ({ rid }) => {
  const [disabled, setDisabled] = useState(false);
  const [receiptId, setReceiptId] = useState("");
  const [downloadableData, setDownloadableData] = useState("");

  const { internalFeeReceipt, internalFeeReceiptRefetch } =
    useInternalFeeReceipt({
      rid: receiptId,
      skip: !receiptId,
    });

  useEffect(() => {
    if (receiptId) internalFeeReceiptRefetch();
  }, [receiptId, internalFeeReceiptRefetch]);
  const onPdfDownload = (val) => {
    if (val) {
      setDisabled((pre) => !pre);
      setReceiptId(val);
    }
  };

  useEffect(() => {
    // if (internalFeeReceipt?.receipt) {
    if (internalFeeReceipt?.receipt && internalFeeReceipt?.one_account) {
      setDownloadableData(internalFeeReceipt);
    }
  }, [internalFeeReceipt]);

  useEffect(() => {
    if (downloadableData) {
      setDisabled((pre) => !pre);
      let accountInfo = downloadableData?.one_account;
      let receiptInfo = downloadableData?.receipt;

      const imgData = receiptInfo?.finance?.institute?.insProfilePhoto
        ? `${imageShowUrl1}/${receiptInfo?.finance?.institute?.insProfilePhoto}`
        : "/images/certificate/logodemo.jpg";
      const affliatedImg = receiptInfo?.finance?.institute?.affliatedLogo
        ? `${imageShowUrl1}/${receiptInfo?.finance?.institute?.affliatedLogo}`
        : "/images/certificate/logodemo.jpg";
      if (accountInfo && receiptInfo) {
        pdfInternalFeeReceipt(accountInfo, receiptInfo, imgData, affliatedImg);
        setDisabled(false);
      }
      setDownloadableData("");
      window.location.reload();
    }
  }, [downloadableData]);
  return (
    <>
      <img
        src="/images/members/receipt-icon.svg"
        onClick={() => onPdfDownload(rid)}
        alt="receipt icon"
      />
      {disabled && <QLoader />}
    </>
  );
};

export default StudentInternalFeeReceipt;
