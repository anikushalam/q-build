import React from "react";
// import style from "../../PromoteDepartment/PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useSearchParams } from "react-router-dom";
import CertificateRequest from "./CertificateRequest";
import CertificateIssued from "./CertificateIssued";
// import CertificateReject from "./CertificateReject";

const CertificateAllRequest = ({ carryParentState, instituteId }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const tabList = [
    {
      name: t("request"),
      id: 0,
      url: "member/certificate?a=request&n=request",
      is_active: "enabled",
    },
    {
      name: t("issued"),
      id: 1,
      url: "member/certificate?a=request&n=issued",
      is_active: "enabled",
    },
    // {
    //   name: t("rejected"),
    //   id: 2,
    //   url: "member/certificate?a=request&n=rejected",
    //   is_active: "enabled",
    // },
  ];
  return (
    <>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={
          searchParams.get("n") === "request"
            ? 0
            : // : searchParams.get("n") === "issued"
              // ? 1
              1
        }
        showAs={true}
        customStyleTab={{
          width: "100%",
        }}
        customStyleLink={{
          width: "50%",
        }}
        carryParentState={carryParentState}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          //   marginTop: "0.5rem",
        }}
      />
      {searchParams.get("n") === "request" && (
        <CertificateRequest instituteId={instituteId} />
      )}
      {searchParams.get("n") === "issued" && (
        <CertificateIssued instituteId={instituteId} />
      )}
      {/* {searchParams.get("n") === "rejected" && (
        <CertificateReject instituteId={instituteId} />
      )} */}
    </>
  );
};

export default CertificateAllRequest;
