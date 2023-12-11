import React from "react";
import Goback from "../../Sidebar/Goback";
import CommonSidebarBackground from "../../Sidebar/CommonSidebarBackground";
import { useTranslation } from "react-i18next";
import CommonSideCard from "../../Sidebar/CommonSideCard";

function InsLibrarySidebar({ username, eventRefetch, event }) {
  const { t } = useTranslation();

  const [openMenu, setOpenMenu] = React.useState(false);

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
        dynamicImage="/images/profileAndCover/eventAdmin-cover.png"
        // {
        //   event?.cover
        //     ? `${imageShowUrl}/${event?.cover}`
        //     : "/images/profileAndCover/library-cover.png"
        // }
        edit={false}
        onEditAction={() => setOpenMenu(true)}
      />
      <CommonSideCard
        cardAsHead={true}
        heading={` ${event?.event_head?.staffFirstName || ""} ${
          event?.event_head?.staffMiddleName
            ? event?.event_head?.staffMiddleName
            : ""
        } ${event?.event_head?.staffLastName || ""}`}
        description={t("event_manager")}
        customStyleCard={{
          borderRadius: "1rem 1rem 0 0",
          border: "none",
          marginTop: "-2.49vw",
        }}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("upcoming_events")}
        description={t("upcoming_events_count")}
        count={event?.event_count || 0}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("upcoming_seminars")}
        description={t("upcoming_seminars_count")}
        count={event?.seminar_count || 0}
      />
    </div>
  );
}

export default InsLibrarySidebar;

//   {/* <CustomSuspense>
//     <LibraryModal
//       libraryModal={openMenu}
//       hideModal={() => setOpenMenu(false)}
//       edit={true}
//       librarian={event?.libraryHead}
//       onParentRefetch={eventRefetch}
//     />
//   </CustomSuspense> */}
