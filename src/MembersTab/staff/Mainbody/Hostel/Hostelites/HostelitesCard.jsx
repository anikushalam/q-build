import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "../Hostel.module.css";

const HostelitesCard = ({ hostelites, viewAs }) => {
  const { t } = useTranslation();
  const params = useParams();

  return (
    <>
      {viewAs === "INSTITUTE_SIDE" ? (
        <section
          className={style.hostelite_container}
          style={{
            cursor: "pointer",
          }}
        >
          <img
            alt="Student Request Avatar"
            src={
              hostelites?.photoId !== "1"
                ? `${imageShowUrl}/${hostelites?.studentProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "5px",
            }}
            loading="lazy"
          />
          <div className={style.hostelite_container_inner}>
            <div className={style.hostelite_container_inner_text}>
              <h6>{`${hostelites?.studentFirstName ?? ""} ${
                hostelites?.studentMiddleName ?? ""
              } ${hostelites?.studentLastName ?? ""}`}</h6>

              <p>{hostelites?.student_unit?.hostel_unit_name ?? ""}</p>
              <p>
                {hostelites?.student_bed_number?.hostelRoom?.room_name ?? ""}{" "}
                {", "} {hostelites?.student_bed_number?.bed_number ?? ""}
              </p>
            </div>
            <div className={style.hostelite_container_inner_text}>
              <h6>
                {t("rs")} {". "}
                {hostelites?.hostelRemainFeeCount ?? 0}
              </h6>
              <p>{t("pending_fees")}</p>
            </div>
          </div>
        </section>
      ) : (
        <Link
          to={`/q/${params.username}/student/profile/hostel`}
          state={{
            sid: hostelites?._id,
            viewAs: "ADMISSION_ADMIN",
          }}
        >
          <section
            className={style.hostelite_container}
            style={{
              cursor: "pointer",
            }}
          >
            <img
              alt="Student Request Avatar"
              src={
                hostelites?.photoId !== "1"
                  ? `${imageShowUrl}/${hostelites?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "5px",
              }}
              loading="lazy"
            />
            <div className={style.hostelite_container_inner}>
              <div className={style.hostelite_container_inner_text}>
                <h6>{`${hostelites?.studentFirstName ?? ""} ${
                  hostelites?.studentMiddleName ?? ""
                } ${hostelites?.studentLastName ?? ""}`}</h6>

                <p>{hostelites?.student_unit?.hostel_unit_name ?? ""}</p>
                <p>
                  {hostelites?.student_bed_number?.hostelRoom?.room_name ?? ""}{" "}
                  {", "} {hostelites?.student_bed_number?.bed_number ?? ""}
                </p>
              </div>
              <div className={style.hostelite_container_inner_text}>
                <h6>
                  {t("rs")} {". "}
                  {hostelites?.hostelRemainFeeCount ?? 0}
                </h6>
                <p>{t("pending_fees")}</p>
              </div>
            </div>
          </section>
        </Link>
      )}
    </>
  );
};

export default HostelitesCard;
