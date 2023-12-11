import React, { useEffect } from "react";
import style from "./StaffAdmisionAdmin.module.css";
import MiddleContent from "./MiddleContent/MiddleContent";
import { useState } from "react";
import RemainingFees from "./RemainingFees/RemainingFees";
import UniversalDepartmentMiddleHead from "../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import { useTranslation } from "react-i18next";
import { useGetAdmissionDetail } from "../../../../hooks/member_tab/admission-api";
import AdmissionEnquiry from "./AdmissionEnquiry/AdmissionEnquiry";
import { useLocation, useParams } from "react-router-dom";
import CompletedAdmissionApplication from "./AdmisionApplication/CompletedApplication/CompletedAdmissionApplication";
import FeeReceipts from "./FeeReceipts/FeeReceipts";
import Document from "./Document/Document";
import AdmisisonRefund from "./Refund/AdmisisonRefund";
import AdmissionExport from "./Export/AdmissionExport";
import AdmissionModerator from "./Moderator/AdmissionModerator";
import AdmissionScholarship from "./AdmissionScholarship/AdmissionScholarship";
import PasswordToggle from "../PasswordManagement/PasswordToggle";
import PasswordProtectionLogin from "../PasswordManagement/PasswordProtectionLogin";
import { useSelector } from "react-redux";
import AdmissionApplicationRequest from "./AdmissionApplicationRequest/AdmissionApplicationRequest";
import AllStudent from "../FinanceManager/AllStudent/AllStudent";
import StudentMessageHistory from "../FinanceManager/AllStudent/StudentMessageHistory";
import StudentReminderMessageHistory from "./RemainingFees/StudentReminderMessageHistory";

function StaffAdmisionAdmin({ onClickValue, carryParentState, role, mid }) {
  const { t } = useTranslation();
  const a_password = useSelector(
    (state) => state.idChange.passwordManager.admissionPassword
  );
  const getQuery = useLocation();
  const params = useParams();
  const [activatedRole, setActivatedRole] = useState("");
  const [password, setPassword] = useState(false);
  const [passwordLogin, setPasswordLogin] = useState(false);
  const { getAdmissionDetail, getAdmissionDetailRefetch } =
    useGetAdmissionDetail({
      data: {
        aid: role ? onClickValue?.admission : `${onClickValue}`,
        mod_id: role ? mid : "",
      },
      skip: onClickValue ? !onClickValue : !onClickValue?.admission,
    });

  useEffect(() => {
    if (onClickValue || onClickValue?.admission) getAdmissionDetailRefetch();
  }, [onClickValue, onClickValue?.admission, getAdmissionDetailRefetch]);
  // --------------------------------------------------
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");

  useEffect(() => {
    if (upload) {
      let formData = new FormData();
      formData.append("file", file);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload, file]);

  const profileChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
    setProfilePhoto(image);
    setPhotoURL(image);
    setOpenCrop(true);
  };
  useEffect(() => {
    if (getAdmissionDetail?.roles?.length) {
      if (role) {
        let modId = onClickValue?._id;
        for (let moder of getAdmissionDetail?.roles) {
          if (modId === moder?._id) {
            setActivatedRole(moder);
            break;
          }
        }
      }
    } else if (getAdmissionDetail?.roles?.length === 0) {
      setActivatedRole("");
    }
    if (getAdmissionDetail?.admission?.enable_protection) {
      if (a_password) {
      } else {
        setPasswordLogin(true);
      }
    }
  }, [
    getAdmissionDetail?.roles,
    getAdmissionDetail?.admission?.enable_protection,
  ]);

  // console.info("this smfsdfs", activatedRole);
  return (
    <div className={style.departmenthead}>
      {!getQuery?.search && (
        <>
          <UniversalDepartmentMiddleHead
            coverKey={getAdmissionDetail?.admission?.cover}
            coverId={getAdmissionDetail?.admission?.coverId}
            defaultCover="/images/profileAndCover/admission-cover.png"
            textLarge={t("admission_admin")}
            textSmall={`${getAdmissionDetail?.admission?.admissionAdminHead?.staffFirstName} ${getAdmissionDetail?.admission?.admissionAdminHead?.staffMiddleName} ${getAdmissionDetail?.admission?.admissionAdminHead?.staffLastName}`}
            count1={getAdmissionDetail?.admission?.queryCount}
            count1label={t("enqueries")}
            count2={getAdmissionDetail?.admission?.newAppCount}
            count2label={t("ongoing")}
            profilePhoto={profilePhoto}
            profileChange={profileChange}
            openCrop={openCrop}
            setOpenCrop={setOpenCrop}
            setPhotoURL={setPhotoURL}
            photoURL={photoURL}
            setFile={setFile}
            setUpload={setUpload}
            setProfilePhoto={setProfilePhoto}
            viewAs={activatedRole?.access_role ? false : true}
            redirectUrl={`/q/${params.username}/member/admission?a=site`}
            carryParentState={carryParentState}
            enableLock={getAdmissionDetail?.admission?.enable_protection}
            setPassword={setPassword}
            openAs="ADMISSION_ADMIN"
          />
          <MiddleContent
            contentData={getAdmissionDetail?.admission}
            onRefetch={getAdmissionDetailRefetch}
            carryParentState={carryParentState}
            accessRole={activatedRole?.access_role}
            accessTpye={activatedRole?.active_tab?.role ?? "Application"}
            callApi={getAdmissionDetail?.admission?._id ? true : false}
          />
        </>
      )}

      {getQuery?.search && getQuery?.search?.substring(3, 10) === "ongoing" && (
        // <AdmisionApplication
        //   admissionId={getAdmissionDetail?.admission?._id}
        //   instituteId={getAdmissionDetail?.admission?.institute?._id}
        //   carryParentState={carryParentState}
        //   accessRole={activatedRole?.access_role}
        //   accessApplication={activatedRole?.access_application ?? []}
        //   accessTpye={activatedRole?.active_tab?.role ?? "Application"}
        // />
        <AdmissionApplicationRequest
          admissionId={getAdmissionDetail?.admission?._id}
          instituteId={getAdmissionDetail?.admission?.institute?._id}
          carryParentState={carryParentState}
          accessRole={activatedRole?.access_role}
          accessApplication={activatedRole?.access_application ?? []}
          accessTpye={activatedRole?.active_tab?.role ?? "Application"}
          callApi={getAdmissionDetail?.admission?._id ? true : false}
        />
      )}
      {getQuery?.search && getQuery?.search?.substring(3) === "completed" && (
        <CompletedAdmissionApplication
          admissionId={getAdmissionDetail?.admission?._id}
          instituteId={getAdmissionDetail?.admission?.institute?._id}
          carryParentState={carryParentState}
          accessRole={activatedRole?.access_role}
          accessApplication={activatedRole?.access_application ?? []}
          accessTpye={activatedRole?.active_tab?.role ?? "Application"}
          callApi={getAdmissionDetail?.admission?._id ? true : false}
        />
      )}

      {getQuery?.search && getQuery?.search?.substring(3) === "enquiry" && (
        <AdmissionEnquiry
          admissionId={getAdmissionDetail?.admission?._id}
          instituteId={getAdmissionDetail?.admission?.institute?._id}
        />
      )}
      {getQuery?.search && getQuery?.search?.substring(3, 10) === "pending" && (
        <RemainingFees
          carryParentState={carryParentState}
          isEnable={
            getAdmissionDetail?.admission?.alarm_enable_status === "Enable"
              ? true
              : false
          }
          onRefetch={getAdmissionDetailRefetch}
          instituteId={getAdmissionDetail?.admission?.institute?._id}
          // onAdmissionDetailRefetch={getAdmissionDetailRefetch}
          // stayAs={getAdmissionDetail?.admission?.active_tab_index}
        />
      )}
      {getQuery?.search && getQuery?.search?.substring(3, 10) === "receipt" && (
        <FeeReceipts
          admissionId={getAdmissionDetail?.admission?._id}
          carryParentState={carryParentState}
          financeId={
            getAdmissionDetail?.admission?.institute?.financeDepart?.[0]
          }
        />
      )}
      {getQuery?.search && getQuery?.search?.substring(3) === "document" && (
        <Document admissionId={getAdmissionDetail?.admission?._id} />
      )}
      {getQuery?.search && getQuery?.search?.substring(3) === "refund" && (
        <AdmisisonRefund
          admissionId={getAdmissionDetail?.admission?._id}
          refundCount={getAdmissionDetail?.admission?.refundCount}
        />
      )}
      {getQuery?.search && getQuery?.search?.substring(3) === "export" && (
        <AdmissionExport
          admissionId={getAdmissionDetail?.admission?._id}
          funds={getAdmissionDetail?.admission}
          carryParentState={carryParentState}
        />
      )}
      {getQuery?.search && getQuery?.search?.substring(3) === "moderator" && (
        <AdmissionModerator
          admissionId={getAdmissionDetail?.admission?._id}
          instituteId={getAdmissionDetail?.admission?.institute?._id}
          carryParentState={carryParentState}
        />
      )}
      {getQuery?.search &&
        getQuery?.search?.substring(3, 14) === "scholarship" && (
          <AdmissionScholarship
            admissionId={getAdmissionDetail?.admission?._id}
            instituteId={getAdmissionDetail?.admission?.institute?._id}
            financeId={
              getAdmissionDetail?.admission?.institute?.financeDepart?.[0]
            }
            carryParentState={carryParentState}
            accessRole={activatedRole?.access_role}
            callApi={getAdmissionDetail?.admission?._id ? true : false}
          />
        )}
      {password && (
        <PasswordToggle
          onClose={() => setPassword(false)}
          enableLock={getAdmissionDetail?.admission?.enable_protection}
          faid={getAdmissionDetail?.admission?._id}
          onRefetch={getAdmissionDetailRefetch}
          openAs={"Admission_Login"}
        />
      )}
      {passwordLogin && (
        <PasswordProtectionLogin
          onClose={() => setPasswordLogin(false)}
          faid={getAdmissionDetail?.admission?._id}
          openAs={"Admission_Login"}
        />
      )}
      {getQuery?.search?.substring(3) === "student" && (
        <AllStudent
          instituteId={getAdmissionDetail?.admission?.institute?._id}
          viewId={getAdmissionDetail?.admission?._id}
          is_view="ADMISSION_ADMIN"
          studentAlias={
            getAdmissionDetail?.admission?.institute?.alias_pronounciation
              ?.student_alias
          }
          headId={getAdmissionDetail?.admission?.admissionAdminHead?._id}
          carryParentState={carryParentState}
        />
      )}
      {getQuery?.search?.substring(3) === "student-message" && (
        <StudentMessageHistory
          sid={getAdmissionDetail?.admission?.institute?._id}
        />
      )}
      {getQuery?.search?.substring(3) === "reminder-message" && (
        <StudentReminderMessageHistory />
      )}
    </div>
  );
}

export default StaffAdmisionAdmin;
