import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InsNavbar from "../../../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import Navbar from "../../../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import { useGetOneUserProfileQuery } from "../../../../services/qvipleAPI";
import { useSelector } from "react-redux";
import style from "../../../../JoiningForm/Student/Form/JoinForm.module.css";
import StudentLeavingCertificateForm from "./StudentLeavingCertificateForm";
import { useTranslation } from "react-i18next";

const LeavingCertificateConfig = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const ids = useSelector((state) => state.idChange.id);
  const { data: profileData, refetch: profileDataRefetch } =
    useGetOneUserProfileQuery(ids, {
      skip: location.state?.viewAs
        ? location.state?.viewAs === "INSTITUTE"
          ? true
          : !ids
        : true,
    });

  useEffect(() => {
    if (location.state?.viewAs && ids) {
      profileDataRefetch();
    }
  }, [location.state?.viewAs, ids, profileDataRefetch]);

  useEffect(() => {
    document.getElementById("scrollView")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [location.state?.sid]);
  const onGoback = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={style.navbar}>
        {location.state?.viewAs === "INSTITUTE" ? (
          <InsNavbar status="home" />
        ) : (
          <Navbar
            status="members"
            profileId={profileData ? profileData?.user?._id : ""}
            username={profileData?.user?.username}
            name={profileData?.user?.userLegalName}
            photoId={profileData?.user?.photoId}
            profilePhoto={profileData?.user?.profilePhoto}
            profileData={profileData?.user}
          />
        )}
      </div>

      <div className={style.goback_container} id="scrollView">
        <div className={style.goback_container_text} onClick={onGoback}>
          <img src="/images/arr-left-white.svg" alt="go back icon" />
          <h6 className={style.goback_container_text_go}>{t("go_back")}</h6>
        </div>
      </div>

      <div
        className={style.student_from_container}
        style={{ marginBottom: "1rem" }}
      >
        <StudentLeavingCertificateForm />
      </div>
    </>
  );
};

export default LeavingCertificateConfig;
