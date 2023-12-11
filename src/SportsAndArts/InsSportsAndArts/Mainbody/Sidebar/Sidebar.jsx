import React, { useState } from "react";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./Sidebar.module.css";
import CommonSidebarBackground from "../../../../Sidebar/CommonSidebarBackground";
import CommonSideCard from "../../../../Sidebar/CommonSideCard";
import Goback from "../../../../Sidebar/Goback";
import CustomSuspense from "../../../../Custom/SuspenseLoading/CustomSuspense";

const SportsArtsModal = React.lazy(() =>
  import(
    "../../../../Dashboard/InsDashboard/Modals/SportAndArts/SportAndArtsModal"
  )
);

function Item({ value, name, img, type, photoId }) {
  return (
    <div className={style.sidebarbottomitem}>
      {photoId ? (
        <img
          alt="not found"
          src={
            photoId !== "1"
              ? `${imageShowUrl}/${img}`
              : "/images/member_tab/class/default_avatar.svg"
          }
        />
      ) : (
        <img alt="not found" src={img} />
      )}
      <div>
        <p className={type === "name" ? style.namee : style.mail}>{value}</p>
        <p className={style.desig}>{name}</p>
      </div>
    </div>
  );
}

const Sidebar = ({ username, sideDetail, insName, sportsData }) => {
  const { t } = useTranslation();

  const [openMenu, setOpenMenu] = React.useState(false);

  const onOpenMenu = () => {
    setOpenMenu((pre) => !pre);
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "85px",
        height: "fit-content",
      }}
    >
      <Goback linkType={true} linkUrl={`/q/${username}/feed`} />

      <CommonSidebarBackground
        dynamicImage={
          sportsData?.cover
            ? `${imageShowUrl}/${sportsData?.cover}`
            : "/images/profileAndCover/sport-cover.svg"
        }
        edit={true}
        onEditAction={onOpenMenu}
      />

      <CommonSideCard
        cardAsHead={true}
        heading={`${sideDetail?.sportHead?.staffFirstName} ${sideDetail?.sportHead?.staffMiddleName} ${sideDetail?.sportHead?.staffLastName}`}
        description={t("sport_art_head")}
        customStyleCard={{
          borderRadius: "18px 18px 0px 0px",
          border: "none",
          marginTop: "-2.49vw",
        }}
      />

      <CommonSideCard
        cardAsHead={false}
        heading={t("sports")}
        description={t("all_sport_class")}
        count={sideDetail?.sportClassCount}
      />

      <CommonSideCard
        cardAsHead={false}
        heading={t("teams")}
        description={t("across_all_sports")}
        count={sideDetail?.sportTeamCount}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("members")}
        description={t("participents")}
        count={sideDetail?.sportMemberCount}
      />

      {/* <CustomSuspense>
        <SportsArtsModal
          admissionModal={openMenu}
          hideModal={onOpenMenu}
          edit={true}
          admissionManagerName={
            getAdmissionDetail?.admission?.admissionAdminHead
          }
          onParentRefetch={getAdmissionDetailRefetch}
        />
      </CustomSuspense> */}

      {openMenu && (
        <SportsArtsModal
          sportsArtsnModal={openMenu}
          hideModal={(w) => setOpenMenu(w)}
          edit={true}
          sportHeadProfilePhoto={sideDetail?.sportHead?.staffProfilePhoto}
          sportsArtsHead={`${sideDetail?.sportHead?.staffFirstName} ${sideDetail?.sportHead?.staffMiddleName} ${sideDetail?.sportHead?.staffLastName}`}
        />
      )}
    </div>
  );
};

export default Sidebar;
