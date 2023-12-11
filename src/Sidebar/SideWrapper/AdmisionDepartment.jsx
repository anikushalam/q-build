import React from "react";
import style from "./AdmisionDepartment.module.css";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import DepartmentBody from "./DepartmentBody/DepartmentBody";
import { useGetSingleInsDataQuery } from "../services/qvipleAPI";
import { useFetchAdmissionDetailQuery } from "../services/admission/admissionAPI";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function AdmisionDepartment() {
  const { t } = useTranslation();
  const adsId = useSelector((state) => state.admissionChange);
  const ids = useSelector((state) => state.idChange);
  const { data: profileData } = useGetSingleInsDataQuery(`${ids?.id}`);
  const { data: admissionQuery } = useFetchAdmissionDetailQuery(
    `${adsId?.aid ? adsId?.aid : profileData?.institute?.admissionDepart[0]}`
  );
  return (
    <div>
      <div className={style.navbarr}>
        <Navbar
          profileData={profileData?.institute}
          username={profileData?.institute?.username}
          name={profileData?.institute?.userLegalName}
          photoId={profileData?.institute?.photoId}
          profilePhoto={profileData?.institute?.profilePhoto}
        />
        <DepartmentBody
          deptHead="Amol Kolhe"
          deptHeadDesig={t("admission_admin")}
          sideRow1Heading={t("ongoing")}
          sideRow2Heading={t("application")}
          sideRow1para={t("admissions")}
          sideRow2para={t("received_from_students")}
          sideRow1Count="7"
          sideRow2Count="1520"
          tab1={t("menu")}
          tab2={t("funds")}
          admission={admissionQuery?.admission}
          insName={profileData?.institute?.name}
          insNamee={profileData?.institute?.insName}
        />
      </div>
    </div>
  );
}

export default AdmisionDepartment;
