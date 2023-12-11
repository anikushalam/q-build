import React, { useEffect } from "react";
import style from "./Mainbody.module.css";
import AdmissionAdminSidebar from "./AdmissionAdminSidebar";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useOneInstituteDashboard } from "../hooks/dashboard/dashboard-api";
import CustomSuspense from "../Custom/SuspenseLoading/CustomSuspense";
import InstituteAdmissionTab from "./InstituteAdmissionTab";
import AdmissionModerator from "../MembersTab/staff/Mainbody/StaffAdmisionAdmin/Moderator/AdmissionModerator";
import AdmissionExport from "../MembersTab/staff/Mainbody/StaffAdmisionAdmin/Export/AdmissionExport";
import AdmissionApplicationRequest from "../MembersTab/staff/Mainbody/StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest";
import CompletedAdmissionApplication from "../MembersTab/staff/Mainbody/StaffAdmisionAdmin/AdmisionApplication/CompletedApplication/CompletedAdmissionApplication";
import { useGetAdmissionDetail } from "../hooks/member_tab/admission-api";
import RemainingFees from "../MembersTab/staff/Mainbody/StaffAdmisionAdmin/RemainingFees/RemainingFees";

function Mainbody() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const getQuery = useLocation();

  const id = useSelector((state) => state.idChange.id);

  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: id,
      skip: !id,
    });
  const { getAdmissionDetail, getAdmissionDetailRefetch } =
    useGetAdmissionDetail({
      data: {
        aid: oneInstituteDashboard?.institute?.admissionDepart[0],
        mod_id: "",
      },
      skip: !oneInstituteDashboard?.institute?.admissionDepart[0],
    });

  useEffect(() => {
    if (id) oneInstituteDashboardRefetch();
  }, [id, oneInstituteDashboardRefetch]);
  useEffect(() => {
    if (oneInstituteDashboard?.institute?.admissionDepart[0])
      getAdmissionDetailRefetch();
  }, [
    oneInstituteDashboard?.institute?.admissionDepart[0],
    getAdmissionDetailRefetch,
  ]);

  return (
    <div className={style.institute_admission_body}>
      <AdmissionAdminSidebar
        username={params.username}
        admissionId={oneInstituteDashboard?.institute?.admissionDepart[0]}
      />
      <div
        className={
          !(
            !searchParams?.get("a") ||
            searchParams?.get("a") === "fund" ||
            searchParams?.get("a") === "export" ||
            searchParams?.get("a") === "moderator"
          )
            ? style.institute_ads_container_other
            : style.institute_ads_container
        }
      >
        {(!searchParams?.get("a") || searchParams?.get("a") === "fund") && (
          <InstituteAdmissionTab carryParentState={getQuery.state} />
        )}
        <CustomSuspense>
          {searchParams?.get("a") === "pending" && (
            <RemainingFees
              carryParentState={getQuery.state}
              admissionId={oneInstituteDashboard?.institute?.admissionDepart[0]}
              isEnable={
                getAdmissionDetail?.admission?.alarm_enable_status === "Enable"
                  ? true
                  : false
              }
              onRefetch={getAdmissionDetailRefetch}
              instituteId={getAdmissionDetail?.admission?.institute?._id}
              pageOpenAs="INSTITUTE"
            />
          )}

          {searchParams?.get("a") === "ongoing" && (
            <AdmissionApplicationRequest
              admissionId={oneInstituteDashboard?.institute?.admissionDepart[0]}
              instituteId={oneInstituteDashboard?.institute?._id}
              carryParentState={getQuery.state}
              pageOpenAs="INSTITUTE"
            />
          )}
          {searchParams?.get("a") === "completed" && (
            <CompletedAdmissionApplication
              admissionId={oneInstituteDashboard?.institute?.admissionDepart[0]}
              instituteId={oneInstituteDashboard?.institute?._id}
              carryParentState={getQuery.state}
              pageOpenAs="INSTITUTE"
            />
          )}
          {searchParams?.get("a") === "export" && (
            <div className={style.institute_ads_container_border}>
              <AdmissionExport
                admissionId={
                  oneInstituteDashboard?.institute?.admissionDepart[0]
                }
                instituteId={oneInstituteDashboard?.institute?._id}
                funds={oneInstituteDashboard}
              />
            </div>
          )}
          {searchParams?.get("a") === "moderator" && (
            <div className={style.institute_ads_container_border}>
              <AdmissionModerator
                admissionId={
                  oneInstituteDashboard?.institute?.admissionDepart[0]
                }
                instituteId={oneInstituteDashboard?.institute?._id}
              />
            </div>
          )}
        </CustomSuspense>
      </div>
    </div>
  );
}

export default Mainbody;
