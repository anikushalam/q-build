import React from "react";
import style from "../../AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import { useTranslation } from "react-i18next";
import AdmissionTabChangeLink from "../../AdmissionTabChangeLink";
import InstituteAdmissionTabChangeLink from "../../../../../../AdmisionAdmin/InstituteAdmissionTabChangeLink";

function CompletedApplicationCard({
  completed,
  carryParentState,
  accessRole,
  accessTpye,
  callApi,
  pageOpenAs,
  setOpenApplicationMenu,
}) {
  const { t } = useTranslation();
  const onMenu = (e) => {
    e.preventDefault();
    setOpenApplicationMenu(completed?._id);
  };
  return (
    <>
      {pageOpenAs === "INSTITUTE" ? (
        <InstituteAdmissionTabChangeLink
          carryParentState={{
            ...carryParentState,
            applicationId: completed?._id,
          }}
          activeTab="?a=ongoing&n=application"
        >
          <div
            className={style.ongoing_card}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "1rem",
            }}
          >
            <div className={style.ongoing_card_inner}>
              <img
                alt="Ongoing App"
                src="/images/admision-application-icon.svg"
              />
              <div className={style.ongoing_card_text}>
                <h6>{completed?.applicationName}</h6>
                <p>{completed?.applicationDepartment?.dName}</p>
              </div>
            </div>
            <div className={style.ongoing_card_text}>
              <h6>{completed?.allotCount}</h6>
              <p>{t("alloted")}</p>
            </div>

            <img
              src="/images/three-24-dot-icon.svg"
              alt="menu icon"
              onClick={onMenu}
              className={style.menu_icon}
              title="Menu"
            />
          </div>

          {/* <div className={style.item}>
            <div className={style.subItem}>
              <img
                alt="Completed App"
                src="/images/admision-application-icon.svg"
              />
              <div className={style.text}>
                <h6>{completed?.applicationName}</h6>
                <p>{completed?.applicationDepartment?.dName}</p>
              </div>
            </div>
            <div className={style.text}>
              <div className={style.text}>
                <h6>{completed?.allotCount}</h6>
                <p>{t("alloted")}</p>
              </div>
            </div>
            <img
              src="/images/three-24-dot-icon.svg"
              alt="menu icon"
              onClick={onMenu}
              className={style.menu_icon}
              title="Menu"
            />
          </div> */}
        </InstituteAdmissionTabChangeLink>
      ) : (
        <AdmissionTabChangeLink
          carryParentState={{
            ...carryParentState,
            applicationId: completed?._id,
          }}
          activeTab="ongoing&n=application"
          accessRole={accessRole}
          accessTpye={accessTpye}
          callApi={callApi}
        >
          <div className={style.ongoing_card}>
            <div className={style.ongoing_card_inner}>
              <img
                alt="Ongoing App"
                src="/images/admision-application-icon.svg"
              />
              <div className={style.ongoing_card_text}>
                <h6>{completed?.applicationName}</h6>
                <p>{completed?.applicationDepartment?.dName}</p>
              </div>
            </div>
            <div
              className={style.ongoing_card_text}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "1rem",
              }}
            >
              <h6>{completed?.allotCount}</h6>
              <p>{t("alloted")}</p>
            </div>

            <img
              src="/images/three-24-dot-icon.svg"
              alt="menu icon"
              onClick={onMenu}
              className={style.menu_icon}
              title="Menu"
            />
          </div>
        </AdmissionTabChangeLink>
      )}
    </>
  );
}

export default CompletedApplicationCard;
