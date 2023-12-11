import React from "react";
import style from "./InsAlumniStats.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../Dashboard/InsDashboard/Components/Mainbody/Sidebar/Sidebar";
import { useGetAlumniDetail } from "../hooks/member_tab/alumni-api";
import UniversalDepartmentMiddleHead from "../MembersTab/UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import InsAlumniMiddleContent from "./InsAlumniMiddleContent";
import InsAlumniFeedback from "./InsAlumniFeedback/InsAlumniFeedback";
import InsProminentAlumni from "./InsProminentAlumni/InsProminentAlumni";
import InsAlumniRegList from "./InsAlumniRegList/InsAlumniRegList";

function InsAlumniStats({ aid }) {
  const { t } = useTranslation();
  const alumniId = useSelector((state) => state.alumniChange);
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [status, setStatus] = useState("");

  const { getAlumniDetail, getAlumniDetailRefetch } = useGetAlumniDetail({
    aid: aid ? aid : alumniId.aid,
    skip: aid ? !aid : !alumniId.aid,
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
            textLarge={t("alumni_cell")}
            textSmall={`${
              getAlumniDetail?.one_alumini?.alumini_head?.staffFirstName
            } ${
              getAlumniDetail?.one_alumini?.alumini_head?.staffMiddleName
                ? getAlumniDetail?.one_alumini?.alumini_head?.staffMiddleName
                : ""
            } ${getAlumniDetail?.one_alumini?.alumini_head?.staffLastName}`}
            count1={getAlumniDetail?.one_alumini?.certifcate_given_count}
            count1label={t("allies_for_cert")}
            count2={
              getAlumniDetail?.one_alumini?.certifcate_given_count +
              getAlumniDetail?.one_alumini?.register_form_count
            }
            count2label={t("alumni_")}
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
          <InsAlumniMiddleContent
            setStatus={setStatus}
            aid={aid ? aid : alumniId.aid}
          />
        </div>
      )}

      {status === "alumniFeedback" && (
        <div className={style.careerstatusbody}>
          <InsAlumniFeedback
            aid={aid ? aid : alumniId.aid}
            setStatus={setStatus}
            feedbacks={getAlumniDetail?.one_alumini?.feed_back_received}
            rating={getAlumniDetail?.one_alumini?.rating}
          />
        </div>
      )}

      {status === "prominent" && (
        <div className={style.careerstatusbody}>
          <InsProminentAlumni
            setStatus={setStatus}
            aid={aid ? aid : alumniId.aid}
          />
        </div>
      )}
      {status === "regAlumni" && (
        <div className={style.careerstatusbody}>
          <InsAlumniRegList
            setStatus={setStatus}
            aid={aid ? aid : alumniId.aid}
          />
        </div>
      )}
    </div>
  );
}

export default InsAlumniStats;
