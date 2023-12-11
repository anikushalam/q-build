import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CustomSuspense from "../Custom/SuspenseLoading/CustomSuspense";
import { useGetAdmissionDetail } from "../hooks/member_tab/admission-api";
import { imageShowUrl } from "../services/BaseUrl";
import { useTranslation } from "react-i18next";
import CommonSidebarBackground from "../Sidebar/CommonSidebarBackground";
import CommonSideCard from "../Sidebar/CommonSideCard";
import Goback from "../Sidebar/Goback";
import { useParams } from "react-router-dom";
const AdmissionModal = React.lazy(() =>
  import("../Dashboard/InsDashboard/Modals/Admission/AdmissionModal")
);

const AdmissionAdminSidebar = ({ username, admissionId }) => {
  const { t } = useTranslation();
  const params = useParams();
  const adsId = useSelector((state) => state.admissionChange);
  const [openMenu, setOpenMenu] = React.useState(false);
  const { getAdmissionDetail, getAdmissionDetailRefetch } =
    useGetAdmissionDetail({
      data: {
        aid: `${adsId?.aid ? adsId?.aid : admissionId}`,
        sid: "",
      },
      skip: !adsId?.aid ? !admissionId : !adsId?.aid,
    });

  useEffect(() => {
    if (adsId?.aid || admissionId) getAdmissionDetailRefetch();
  }, [adsId?.aid, admissionId, getAdmissionDetailRefetch]);
  //   console.info("asfsgdgfhsd", oneInstituteDashboard);

  const onOpenMenu = () => {
    setOpenMenu((pre) => !pre);
  };

  // console.info(getAdmissionDetail?.admission);

  return (
    <div
      style={{
        position: "sticky",
        top: "77px",
        height: "fit-content",
        width: "30%",
      }}
    >
      <Goback whichType="PREVIOUS_GO" />
      <CommonSidebarBackground
        dynamicImage={
          getAdmissionDetail?.admission?.cover
            ? `${imageShowUrl}/${getAdmissionDetail?.admission?.cover}`
            : "/images/profileAndCover/admission-cover.svg"
        }
        edit={true}
        onEditAction={onOpenMenu}
        redirectUrl={`/q/${params.username}/admission?a=site`}
        isSiteInfo="ADMISSION"
        carryParentState={{
          aid: getAdmissionDetail?.admission?._id,
        }}
      />

      <CommonSideCard
        cardAsHead={true}
        heading={` ${
          getAdmissionDetail?.admission?.admissionAdminHead?.staffFirstName ||
          ""
        } ${
          getAdmissionDetail?.admission?.admissionAdminHead?.staffMiddleName
            ? getAdmissionDetail?.admission?.admissionAdminHead?.staffMiddleName
            : ""
        } ${
          getAdmissionDetail?.admission?.admissionAdminHead?.staffLastName || ""
        }`}
        description={t("admission_admin")}
        customStyleCard={{
          borderRadius: "18px 18px 0px 0px",
          border: "none",
          marginTop: "-1.49vw",
        }}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("ongoing_add")}
        description={t("admissions")}
        count={getAdmissionDetail?.admission?.newAppCount || 0}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("application")}
        description={t("received_from_students")}
        count={
          getAdmissionDetail?.admission?.newAppCount +
            getAdmissionDetail?.admission?.completedCount || 0
        }
        customStyleCard={{
          borderRadius: "0 0 12px 12px",
          borderBottom: "0.4px solid rgba(0, 0, 0, 0.15)",
        }}
      />
      <CustomSuspense>
        <AdmissionModal
          admissionModal={openMenu}
          hideModal={onOpenMenu}
          edit={true}
          admissionManagerName={
            getAdmissionDetail?.admission?.admissionAdminHead
          }
          onParentRefetch={getAdmissionDetailRefetch}
        />
      </CustomSuspense>
    </div>
  );
};

export default AdmissionAdminSidebar;
