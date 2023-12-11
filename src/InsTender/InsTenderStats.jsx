import React, { useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../Dashboard/InsDashboard/Components/Mainbody/Sidebar/Sidebar";
import UniversalDepartmentMiddleHead from "../MembersTab/UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import style from "./InsCareerStats.module.css";
import { useTranslation } from "react-i18next";
import InsTenderMiddleContent from "./InsTenderMiddleContent";
import TenderForm from "./TenderForm";
import BidForm from "./BidForm";
import TenderDetails from "./TenderDetails";
import { useGetTenderDetail } from "../hooks/member_tab/career-api";

function InsCareerStats({ ltid }) {
  const { t } = useTranslation();
  const TenderId = useSelector((state) => state.tenderChange);
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [status, setStatus] = useState("");

  const { getTenderDetail, getTenderDetailRefetch } = useGetTenderDetail({
    ltid: ltid ? ltid : TenderId?.ltid,
    skip: !ltid ? ltid : TenderId?.ltid,
  });

  const profileChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
    setProfilePhoto(image);
    setPhotoURL(image);
    setOpenCrop(true);
  };

  return (
    <div className={style.mainbody}>
      <div className={style.sidebar}>
        <Sidebar status="post" />
      </div>
      {status === "" && (
        <div className={style.careerstatusbody}>
          <UniversalDepartmentMiddleHead
            coverKey="2"
            // coverId={getLibraryDetail?.library?.coverId}
            defaultCover="/images/profileAndCover/eventAdmin-cover.png"
            textLarge={t("tender_mgt")}
            textSmall=""
            count1={getTenderDetail?.tender?.open_tender_count}
            count1label={t("Open Tenders")}
            count2={getTenderDetail?.tender?.closed_tender_count}
            count2label={t("Closed Tenders")}
            profilePhoto={profilePhoto}
            profileChange={profileChange}
            openCrop={openCrop}
            setOpenCrop={setOpenCrop}
            setPhotoURL={setPhotoURL}
            photoURL={photoURL}
            setFile={setFile}
            setUpload={setUpload}
            setProfilePhoto={setProfilePhoto}
            status="insCareer"
            coverUpdate={true}
          />
          <InsTenderMiddleContent
            setStatus={setStatus}
            ltid={ltid ? ltid : TenderId?.ltid}
          />
        </div>
      )}

      {status === "openForm" && (
        <div className={style.careerstatusbody}>
          <TenderForm
            setStatus={setStatus}
            ltid={ltid ? ltid : TenderId?.ltid}
          />
        </div>
      )}

      {status === "placeOrder" && (
        <div className={style.careerstatusbody}>
          <BidForm setStatus={setStatus} />
        </div>
      )}
      {status === "tenderDetail" && (
        <div className={style.careerstatusbody}>
          <TenderDetails setStatus={setStatus} />
        </div>
      )}
    </div>
  );
}

export default InsCareerStats;
