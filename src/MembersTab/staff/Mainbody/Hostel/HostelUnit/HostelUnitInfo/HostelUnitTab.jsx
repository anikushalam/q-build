import React from "react";
import { useTranslation } from "react-i18next";
import HostelTabChangeLink from "../../HostelTabChangeLink";
import style from "../../MiddleContent/MiddleContent.module.css";
import Tabs from "../../MiddleContent/Tabs";
import { useLocation } from "react-router-dom";
import UnitRoom from "./UnitRoom";
import Hostelites from "../../Hostelites/Hostelites";
import WardenTabChangeLink from "../WardenTabChangeLink";
import InstituteHostelTabChangeLink from "../../../../../../InstituteHostel/InstituteHostelTabChange";

const HostelUnitTab = ({
  carryParentState,
  accessRole,
  huid,
  viewAs,
  hid,
  callApi,
  pageOpenAs,
  instituteId,
}) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  // console.info("saafbdshbfsd", getQuery);
  return (
    <div className={style.MiddleContent}>
      <div className={style.MiddleContentLeft}>
        <div className={style.tabs}>
          <Tabs
            search={getQuery?.search}
            carryParentState={carryParentState}
            viewAs="HOSTEL_UNIT"
            openAsUrl={pageOpenAs ? pageOpenAs : viewAs}
          />
        </div>

        {(!getQuery?.search ||
          getQuery?.search?.substring(3) === "unit&n=info") && (
          <div className={style.item}>
            {viewAs === "DESIGNATION" ? (
              <>
                <WardenTabChangeLink
                  carryParentState={carryParentState}
                  activeTab="hostelites"
                  accessRole={accessRole}
                >
                  <div className={style.itemIcon}>
                    <img
                      src="/images/member_tab/hostel/hostel-hostelite-icon.svg"
                      alt="inquery"
                    />
                    <p>{t("total_hostelites")}</p>
                  </div>
                </WardenTabChangeLink>
                <WardenTabChangeLink
                  carryParentState={{
                    ...carryParentState,
                    viewNotice: "HOSTEL_UNIT_TAB",
                    hid: hid ?? "",
                  }}
                  activeTab="notice"
                  accessRole={accessRole}
                >
                  <div className={style.itemIcon}>
                    <img
                      src="/images/member_tab/hostel/hostel-announcement-icon.svg"
                      alt="moderator icon"
                    />
                    <p>{t("announcement_notices")}</p>
                  </div>
                </WardenTabChangeLink>
                {/* <WardenTabChangeLink
              carryParentState={carryParentState}
              activeTab="complaint"
              accessRole={accessRole}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/hostel/hostel-complaints-icon.svg"
                  alt="moderator icon"
                />
                <p>{t("complaints")}</p>
              </div>
            </WardenTabChangeLink> */}
              </>
            ) : pageOpenAs === "INSTITUTE" ? (
              <>
                <InstituteHostelTabChangeLink
                  carryParentState={carryParentState}
                  activeTab="unit&n=hostelites"
                  accessRole={accessRole}
                  callApi={callApi}
                >
                  <div className={style.itemIcon}>
                    <img
                      src="/images/member_tab/hostel/hostel-hostelite-icon.svg"
                      alt="inquery"
                    />
                    <p>{t("total_hostelites")}</p>
                  </div>
                </InstituteHostelTabChangeLink>
                <InstituteHostelTabChangeLink
                  carryParentState={{
                    ...carryParentState,
                    viewNotice: "HOSTEL_UNIT_TAB",
                  }}
                  activeTab="notice"
                  accessRole={accessRole}
                  callApi={callApi}
                >
                  <div className={style.itemIcon}>
                    <img
                      src="/images/member_tab/hostel/hostel-announcement-icon.svg"
                      alt="moderator icon"
                    />
                    <p>{t("announcement_notices")}</p>
                  </div>
                </InstituteHostelTabChangeLink>
                {/* <InstituteHostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="complaint"
              accessRole={accessRole}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/hostel/hostel-complaints-icon.svg"
                  alt="moderator icon"
                />
                <p>{t("complaints")}</p>
              </div>
            </InstituteHostelTabChangeLink> */}
              </>
            ) : (
              <>
                <HostelTabChangeLink
                  carryParentState={carryParentState}
                  activeTab="unit&n=hostelites"
                  accessRole={accessRole}
                  callApi={callApi}
                >
                  <div className={style.itemIcon}>
                    <img
                      src="/images/member_tab/hostel/hostel-hostelite-icon.svg"
                      alt="inquery"
                    />
                    <p>{t("total_hostelites")}</p>
                  </div>
                </HostelTabChangeLink>
                <HostelTabChangeLink
                  carryParentState={{
                    ...carryParentState,
                    viewNotice: "HOSTEL_UNIT_TAB",
                  }}
                  activeTab="notice"
                  accessRole={accessRole}
                  callApi={callApi}
                >
                  <div className={style.itemIcon}>
                    <img
                      src="/images/member_tab/hostel/hostel-announcement-icon.svg"
                      alt="moderator icon"
                    />
                    <p>{t("announcement_notices")}</p>
                  </div>
                </HostelTabChangeLink>
                {/* <HostelTabChangeLink
              carryParentState={carryParentState}
              activeTab="complaint"
              accessRole={accessRole}
            >
              <div className={style.itemIcon}>
                <img
                  src="/images/hostel/hostel-complaints-icon.svg"
                  alt="moderator icon"
                />
                <p>{t("complaints")}</p>
              </div>
            </HostelTabChangeLink> */}
              </>
            )}
          </div>
        )}
        {(getQuery?.search?.substring(3) === "unit&n=menu&n=room" ||
          getQuery?.search?.substring(3) === "menu&n=room") && (
          <UnitRoom
            carryParentState={carryParentState}
            accessRole={accessRole}
            huid={huid}
            viewAs={pageOpenAs ? pageOpenAs : viewAs}
            callApi={callApi}
          />
        )}
        {(getQuery?.search?.substring(3) === "unit&n=hostelites" ||
          getQuery?.search?.substring(3) === "hostelites") && (
          <div
            style={{
              padding: "1rem",
            }}
          >
            <Hostelites
              hid={getQuery.state?.onClickValue ?? hid}
              filter_by={huid}
              viewAs={viewAs}
              instituteId={instituteId}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HostelUnitTab;
