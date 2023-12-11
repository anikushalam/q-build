import React from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "./AdmissionScholarship.module.css";

const ScholarshipPreview = ({
  onClose,
  scholar,
  openCategoryName,
  onCreate,
}) => {
  const { t } = useTranslation();
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.assign_role_container}>
        <section className={style.assign_role_title}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt="back icon"
          />

          <h6>{t("preview")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <section
          style={{
            padding: "0.8rem",
          }}
          className={style.scholar_preview_container}
        >
          <h6>{t("name")}</h6>
          <p>{scholar?.scholarship_name}</p>
          <h6>{t("description")}</h6>
          <p>{scholar?.scholarship_about}</p>
          <h6>{t("applicable_to")}</h6>
          <p>
            {openCategoryName?.map((val) => (
              <span key={val?._id}>{val?.category_name ?? ""},</span>
            ))}
          </p>
          {scholar?.scholarship_notification.notification && (
            <>
              <h6>{t("notification_attachment")}</h6>
              <p
                style={{
                  color: "#002BBE",
                  cursor: "pointer",
                }}
              >
                <a
                  title="Download File"
                  href={`https://d3dqpu54js2vfl.cloudfront.net/${scholar?.scholarship_notification.notification}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Download Attachment
                </a>
              </p>
            </>
          )}
          {scholar?.scholarship_apply?.apply && (
            <>
              <h6>{t("apply_now_link")}</h6>
              <p
                style={{
                  color: "#002BBE",
                  cursor: "pointer",
                }}
              >
                <a
                  href={`${scholar?.scholarship_apply?.apply}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {scholar?.scholarship_apply?.apply}
                </a>
              </p>
            </>
          )}

          <button
            className={style.applicable_to_btn}
            style={{
              justifyContent: "center",
              marginTop: "1rem",
            }}
            onClick={onCreate}
          >
            {t("create")}
          </button>
        </section>
      </div>
    </PopupWrapper>
  );
};

export default ScholarshipPreview;
