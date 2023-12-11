import React from "react";
import CustomSuspense from "../Custom/SuspenseLoading/CustomSuspense";
import { imageShowUrl } from "../services/BaseUrl";
import { useTranslation } from "react-i18next";
import CommonSidebarBackground from "../Sidebar/CommonSidebarBackground";
import CommonSideCard from "../Sidebar/CommonSideCard";
import Goback from "../Sidebar/Goback";
import { useParams } from "react-router-dom";

const HostelActivateModal = React.lazy(() =>
  import("../Dashboard/InsDashboard/Modals/Hostel/HostelActivateModal")
);
const InstituteHostelSidebar = ({ hostel, onRefetch }) => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = React.useState(false);
  const params = useParams();

  const onOpenMenu = () => {
    setOpenMenu((pre) => !pre);
  };

  // console.info(hostel);

  return (
    <div
      style={{
        position: "sticky",
        top: "77px",
        height: "fit-content",
        width: "30%",
      }}
    >
      <Goback whichType={"PREVIOUS_GO"} />
      <CommonSidebarBackground
        dynamicImage={
          hostel?.hostel_photo
            ? `${imageShowUrl}/${hostel?.hostel_photo}`
            : "/images/profileAndCover/hostel-cover.svg"
        }
        edit={true}
        onEditAction={onOpenMenu}
        redirectUrl={`/q/${params.username}/hostel?a=site`}
        isSiteInfo="HOSTEL"
        carryParentState={{
          hid: hostel?._id,
        }}
      />

      <CommonSideCard
        cardAsHead={true}
        heading={` ${hostel?.hostel_manager?.staffFirstName ?? ""} ${
          hostel?.hostel_manager?.staffMiddleName ?? ""
        } ${hostel?.hostel_manager?.staffLastName ?? ""}`}
        description={t("hostel_manager")}
        customStyleCard={{
          borderRadius: "18px 18px 0px 0px",
          border: "none",
          marginTop: "-1.49vw",
        }}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("hostel_beds")}
        description={t("hostel_beds_label")}
        count={hostel?.bed_count ?? 0}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("hostel_rooms")}
        description={t("hostel_rooms_label")}
        count={hostel?.room_count ?? 0}
        customStyleCard={{
          borderRadius: "0 0 12px 12px",
          borderBottom: "0.4px solid rgba(0, 0, 0, 0.15)",
        }}
      />
      <CustomSuspense>
        <HostelActivateModal
          hostelModal={openMenu}
          hideModal={onOpenMenu}
          edit={true}
          hostelManagerName={hostel?.hostel_manager}
          onParentRefetch={onRefetch}
        />
      </CustomSuspense>
    </div>
  );
};

export default InstituteHostelSidebar;
