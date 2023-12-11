import React from "react";
import CustomSuspense from "../Custom/SuspenseLoading/CustomSuspense";
import { imageShowUrl } from "../services/BaseUrl";
import { useTranslation } from "react-i18next";
import CommonSidebarBackground from "../Sidebar/CommonSidebarBackground";
import CommonSideCard from "../Sidebar/CommonSideCard";
import Goback from "../Sidebar/Goback";
import { useParams } from "react-router-dom";
const TransportActivateModal = React.lazy(() =>
  import("../Dashboard/InsDashboard/Modals/Transport/TransportActivateModal")
);
const InstituteTransportSidebar = ({ transport, onRefetch }) => {
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
          transport?.transport_photo
            ? `${imageShowUrl}/${transport?.transport_photo}`
            : "/images/profileAndCover/transport-cover.svg"
        }
        edit={true}
        onEditAction={onOpenMenu}
        redirectUrl={`/q/${params.username}/transport?a=site`}
        isSiteInfo="TRANSPORT"
        carryParentState={{
          tid: transport?._id,
        }}
      />

      <CommonSideCard
        cardAsHead={true}
        heading={` ${transport?.transport_manager?.staffFirstName ?? ""} ${
          transport?.transport_manager?.staffMiddleName ?? ""
        } ${transport?.transport_manager?.staffLastName ?? ""}`}
        description={t("transport_manager")}
        customStyleCard={{
          borderRadius: "18px 18px 0px 0px",
          border: "none",
          marginTop: "-1.49vw",
        }}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("total_vehicle")}
        description={t("total_vehicle_label")}
        count={transport?.vehicle_count ?? 0}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("total_transport_staff")}
        description={t("total_transport_staff_label")}
        count={transport?.transport_staff_count ?? 0}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("total_passenger")}
        description={t("total_passenger_label")}
        count={transport?.passenger_count ?? 0}
      />

      <CommonSideCard
        cardAsHead={false}
        heading={t("total_pending_fees")}
        description={t("total_pending_fees_label")}
        count={`${t("rs")} ${transport?.remaining_fee ?? 0}`}
        customStyleCard={{
          borderRadius: "0 0 12px 12px",
          borderBottom: "0.4px solid rgba(0, 0, 0, 0.15)",
        }}
      />
      <CustomSuspense>
        <TransportActivateModal
          transportModal={openMenu}
          hideModal={onOpenMenu}
          edit={true}
          transportManagerName={transport?.transport_manager}
          onParentRefetch={onRefetch}
        />
      </CustomSuspense>
    </div>
  );
};

export default InstituteTransportSidebar;
