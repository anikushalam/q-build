import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { fileShowUrl } from "../../../../services/BaseUrl";
import style from "./AlumniItem.module.css";
import GiveAlumniCertificate from "./GiveAlumniCertificate";

function AlumniItem({
  aid,
  regAlumni,
  onRefetchWhenAlumniCreate,
  status,
  getAlumniDetailRefetch,
}) {
  const { t } = useTranslation();
  const [viewDetails, setViewDetails] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // console.info(regAlumni);
  return (
    <div className={style.oneRow}>
      <div className={style.oneRowDate}>
        <p className={style.oneRowDateText}>
          {" "}
          {`${regAlumni?.created_at?.split("T")[0]?.split("-")[2]}-${
            regAlumni?.created_at?.split("T")[0]?.split("-")[1]
          }-${regAlumni?.created_at?.split("T")[0]?.split("-")[0]}`}{" "}
        </p>
      </div>
      <div className={style.oneRowName}>
        <div className={style.oneRowNameImage}>
          <img
            src="/images/ins_default_profile.svg"
            //   {
            //     row?.photoId !== "1"
            //       ? `${imageShowUrl}/${row?.staffProfilePhoto}`
            //       : "/images/ins_default_profile.svg"
            //   }
            loading="lazy"
            alt=""
          />
        </div>
        <div>
          <p className={style.oneRowNameText}>{regAlumni?.name}</p>
          <p className={style.oneRowNamePlaceholder}>
            {t("pass_yr")}: {regAlumni?.pass_year}
          </p>
          {viewDetails ? (
            <p
              onClick={() => {
                setViewDetails(false);
              }}
              className={style.interview}
            >
              {t("alumni_details")}
            </p>
          ) : (
            <p
              className={style.schedule}
              onClick={() => {
                setViewDetails(true);
              }}
            >
              {t("view_details")}
            </p>
          )}

          {viewDetails && (
            <div>
              <p className={style.date}>
                {" "}
                {t("department")}: {regAlumni?.graduation_department}{" "}
              </p>
              <p className={style.date}>
                {t("job_status")} {regAlumni?.job_status}
              </p>
              <p className={style.date}>
                {t("further_edu")} {regAlumni?.higher_study}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={style.oneRowContact}>
        <div className={style.oneRowContactEmailIcon}>
          <img src="/images/admin/mail-dark-icon.svg" alt="gender icon" />
          <p className={style.oneRowContactEmail}>{regAlumni?.email}</p>
        </div>
        <div className={style.oneRowContactEmailIcon}>
          <img src="/images/phone-white.svg" alt="" />
          <p className={style.oneRowContactNumber}>{regAlumni?.phone_number}</p>
        </div>
      </div>

      {status === "given" ? (
        <div className={`${style.oneRowIndex} ${style.oneRowwIndex} `}>
          <a
            href={`${fileShowUrl}/${regAlumni?.certificate}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={style.fileDownload}
              src="/images/career/insCareer/file_download.svg"
            />
          </a>
        </div>
      ) : status === "not given ins" ? (
        <div
          className={`${style.oneRowIndex} ${style.oneRowwIndex} ${style.nopadding} `}
        >
          <div className={`${style.givebtn} ${style.nopointer}`}>
            {t("not_given")}
          </div>
        </div>
      ) : (
        <div
          className={`${style.oneRowIndex} ${style.oneRowwIndex} ${style.nopadding}`}
        >
          <div className={style.givebtn} onClick={() => setIsOpen(true)}>
            {t("give_certificate")}
          </div>
        </div>
      )}

      <GiveAlumniCertificate
        open={isOpen}
        hideModal={() => setIsOpen(false)}
        aid={aid}
        rid={regAlumni?._id}
        onRefetchWhenAlumniCreate={onRefetchWhenAlumniCreate}
        getAlumniDetailRefetch={getAlumniDetailRefetch}
      />
    </div>
  );
}

export default AlumniItem;
