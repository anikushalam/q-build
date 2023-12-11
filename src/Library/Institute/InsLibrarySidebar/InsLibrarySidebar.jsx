import React from "react";
import Goback from "../../../Sidebar/Goback";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
import CommonSidebarBackground from "../../../Sidebar/CommonSidebarBackground";
import { imageShowUrl } from "../../../services/BaseUrl";
import { useTranslation } from "react-i18next";
import CommonSideCard from "../../../Sidebar/CommonSideCard";
import LibraryModal from "../../../Dashboard/InsDashboard/Modals/library/LibraryModal";
import { useParams } from "react-router-dom";

function InsLibrarySidebar({ username, library, libraryRefetch }) {
  const { t } = useTranslation();
  const params = useParams();

  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div
      style={{
        position: "sticky",
        top: "77px",
        height: "fit-content",
        width: "30%",
      }}
    >
      <Goback linkType={true} linkUrl={`/q/${username}/feed`} />
      <CommonSidebarBackground
        dynamicImage={
          library?.cover
            ? `${imageShowUrl}/${library?.cover}`
            : "/images/profileAndCover/library-cover.png"
        }
        edit={true}
        onEditAction={() => setOpenMenu(true)}
        redirectUrl={`/q/${params.username}/library?a=site`}
        isSiteInfo="LIBRARY"
        carryParentState={{
          lid: library?._id,
        }}
      />

      <CommonSideCard
        cardAsHead={true}
        heading={` ${library?.libraryHead?.staffFirstName || ""} ${
          library?.libraryHead?.staffMiddleName
            ? library?.libraryHead?.staffMiddleName
            : ""
        } ${library?.libraryHead?.staffLastName || ""}`}
        description={t("librarian")}
        customStyleCard={{
          borderRadius: "1rem 1rem 0 0",
          border: "none",
          marginTop: "-1.49vw",
        }}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("books")}
        description={t("total_books")}
        count={library?.bookCount || 0}
      />
      <CommonSideCard
        cardAsHead={false}
        heading={t("members")}
        description={t("total_members")}
        count={library?.memberCount || 0}
        customStyleCard={{
          borderRadius: "0 0 12px 12px",
          borderBottom: "0.4px solid rgba(0, 0, 0, 0.15)",
        }}
      />

      <CustomSuspense>
        <LibraryModal
          libraryModal={openMenu}
          hideModal={() => setOpenMenu(false)}
          edit={true}
          librarian={library?.libraryHead}
          onParentRefetch={libraryRefetch}
        />
      </CustomSuspense>
    </div>
  );
}

export default InsLibrarySidebar;
