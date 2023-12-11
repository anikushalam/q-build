import React from "react";
import { useTranslation } from "react-i18next";
import style from "../../../StaffAdmisionAdmin/AdmisionApplication/CompletedApplication/CompletedApplication.module.css";
import InstituteHostelTabChangeLink from "../../../../../../InstituteHostel/InstituteHostelTabChange";
import HostelTabChangeLink from "../../HostelTabChangeLink";
const HostelApplicationCard = ({
  carryParentState,
  accessRole,
  accessTpye,
  callApi,
  pageOpenAs,
  data,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {pageOpenAs === "INSTITUTE" ? (
        <InstituteHostelTabChangeLink
          carryParentState={{
            ...carryParentState,
            applicationId: data?._id,
          }}
          activeTab="request&ongoing&n=application"
        >
          <div className={style.item}>
            <div className={style.subItem}>
              <img
                alt="Completed App"
                src="/images/admision-application-icon.svg"
              />
              <div className={style.text}>
                <h6>{data?.applicationName}</h6>
                <p
                  style={{
                    marginBottom: "0",
                  }}
                >
                  {data?.applicationUnit?.hostel_unit_name ?? ""}
                </p>
              </div>
            </div>
            <div className={style.text}>
              <div className={style.text}>
                <h6>{data?.allotCount}</h6>
                <p
                  style={{
                    marginBottom: "0",
                  }}
                >
                  {t("alloted")}
                </p>
              </div>
            </div>
          </div>
        </InstituteHostelTabChangeLink>
      ) : (
        <HostelTabChangeLink
          carryParentState={{
            ...carryParentState,
            applicationId: data?._id,
          }}
          activeTab="request&ongoing&n=application"
          accessRole={accessRole}
          accessTpye={accessTpye}
          callApi={callApi}
        >
          <div className={style.item}>
            <div className={style.subItem}>
              <img
                alt="Completed App"
                src="/images/admision-application-icon.svg"
              />
              <div className={style.text}>
                <h6>{data?.applicationName}</h6>
                <p
                  style={{
                    marginBottom: "0",
                  }}
                >
                  {data?.applicationUnit?.hostel_unit_name ?? ""}
                </p>
              </div>
            </div>
            <div className={style.text}>
              <div className={style.text}>
                <h6>{data?.allotCount}</h6>
                <p
                  style={{
                    marginBottom: "0",
                  }}
                >
                  {t("alloted")}
                </p>
              </div>
            </div>
          </div>
        </HostelTabChangeLink>
      )}
    </>
  );
};

export default HostelApplicationCard;
