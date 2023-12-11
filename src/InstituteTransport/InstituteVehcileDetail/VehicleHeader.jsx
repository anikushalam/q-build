import React from "react";
import style from "../../Department/Institute/Pages/ClassProfile.module.css";
import { useTranslation } from "react-i18next";
import BlueLineBar from "../../Sidebar/BlueLineBar";
import { imageShowUrl } from "../../services/BaseUrl";
const VehicleHeader = ({ vehicle, onCloseRoute }) => {
  const { t } = useTranslation();

  return (
    <div>
      <BlueLineBar />
      <div className={style.class_header_container}>
        <img
          src={
            vehicle?.vehicle_photo
              ? `${imageShowUrl}/${vehicle?.vehicle_photo}`
              : "/images/profileAndCover/transport-cover.svg"
          }
          alt="class room background"
          className={style.class_header_image}
        />
        <div className={style.class_header_info}>
          <div className={style.class_header_info_detail}>
            <h4>
              {t("vehicle_no")}
              {vehicle?.vehicle_number ?? ""}
            </h4>
            <h6>
              {`(${
                vehicle?.vehicle_type
                  ? vehicle?.vehicle_type === "Own"
                    ? "Own Vehicle"
                    : "Outside Vehicle"
                  : ""
              })`}
            </h6>
            <p>{`${t("driver")} ${
              vehicle?.vehicle_driver?.staffFirstName
                ? `${vehicle?.vehicle_driver?.staffFirstName ?? ""} ${
                    vehicle?.vehicle_driver?.staffMiddleName ?? ""
                  } ${vehicle?.vehicle_driver?.staffLastName ?? ""}`
                : vehicle?.vehicle_driver?.userLegalName ?? ""
            }`}</p>
            <p>{`${t("conductor")} ${
              vehicle?.vehicle_conductor?.staffFirstName
                ? `${vehicle?.vehicle_conductor?.staffFirstName ?? ""} ${
                    vehicle?.vehicle_conductor?.staffMiddleName ?? ""
                  } ${vehicle?.vehicle_conductor?.staffLastName ?? ""}`
                : vehicle?.vehicle_conductor?.userLegalName ?? ""
            }`}</p>
          </div>
          <div className={style.class_header_info_bottom}>
            <div className={style.class_header_info_conut}>
              <p>
                {t("pending_fees")} {" : "}
                <span>
                  {t("rs")}.{vehicle?.remaining_fee ?? 0}
                </span>
              </p>
            </div>
            <div
              className={style.class_header_info_add_student}
              onClick={onCloseRoute}
            >
              <img
                src="/images/transport/add-route-icon.svg"
                alt="add student icon"
              />
              <p>{t("view_route")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleHeader;
