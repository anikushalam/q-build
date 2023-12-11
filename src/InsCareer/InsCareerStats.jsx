import React, { useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../Dashboard/InsDashboard/Components/Mainbody/Sidebar/Sidebar";
import UniversalDepartmentMiddleHead from "../MembersTab/UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import style from "./InsCareerStats.module.css";
import { useTranslation } from "react-i18next";
import InsCareerMiddleContent from "./InsCareerMiddleContent";
import OpenVacanciesForm from "./OpenVacanciesForm";
import InterviewForm from "./InterviewForm";
import VacancyDetails from "./VacancyDetails";
import { useGetCareeDetail } from "../hooks/member_tab/career-api";

function InsCareerStats({ lcid }) {
  const { t } = useTranslation();
  const careerId = useSelector((state) => state.careerChange);
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [status, setStatus] = useState("");
  const [flag, setFlag] = useState(false);

  const { getCareerDetail, getCareerDetailRefetch } = useGetCareeDetail({
    lcid: lcid ? lcid : careerId?.lcid,
    skip: !lcid ? lcid : careerId?.lcid,
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
            textLarge={t("career_mgt")}
            textSmall=""
            count1={getCareerDetail?.career?.staff_vacancy_count}
            count1label={t("teaching_staff_vacancies")}
            count2={getCareerDetail?.career?.admin_vacancy_count}
            count2label={t("admin_vacancies")}
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
            coverUpdate={false}
          />
          <InsCareerMiddleContent
            setStatus={setStatus}
            lcid={lcid ? lcid : careerId?.lcid}
            flag={flag}
          />
        </div>
      )}

      {status === "openForm" && (
        <div className={style.careerstatusbody}>
          <OpenVacanciesForm
            getCareerDetailRefetch={getCareerDetailRefetch}
            setStatus={setStatus}
            lcid={lcid ? lcid : careerId?.lcid}
            setFlag={setFlag}
            flag={flag}
          />
        </div>
      )}

      {status === "interviewForm" && (
        <div className={style.careerstatusbody}>
          <InterviewForm setStatus={setStatus} />
        </div>
      )}
      {status === "vacancyDetail" && (
        <div className={style.careerstatusbody}>
          <VacancyDetails setStatus={setStatus} />
        </div>
      )}
    </div>
  );
}

export default InsCareerStats;
