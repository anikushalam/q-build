import React from "react";
import { useTranslation } from "react-i18next";
import style from "../../Hostel/Hostel.module.css";
import moment from "moment";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

const TranspotationCard = ({ transpotation, border }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.transpotation_card}>
        <h6
          style={{
            width: "15%",
            paddingLeft: "0.8rem",
          }}
        >
          {transpotation?.vehicle?.[0]?.vehicle_type ?? ""}
        </h6>
        <div
          style={{
            width: "37%",
          }}
          className={style.transpotation_card_detail}
        >
          {transpotation?.staffFirstName ? (
            <img
              src={
                transpotation?.staffProfilePhoto
                  ? `${imageShowUrl}/${transpotation.staffProfilePhoto}`
                  : "/images/user-icon.svg"
              }
              alt="avatar"
            />
          ) : (
            <img
              src={
                transpotation?.profilePhoto
                  ? `${imageShowUrl}/${transpotation.profilePhoto}`
                  : "/images/user-icon.svg"
              }
              alt="avatar"
            />
          )}

          <div className={style.transpotation_card_detail_text}>
            {transpotation?.staffFirstName ? (
              <h6>
                {`${transpotation?.staffFirstName ?? ""} 
         ${transpotation?.staffMiddleName ?? ""}
         ${transpotation?.staffLastName ?? ""} `}
              </h6>
            ) : (
              <h6>{transpotation?.userLegalName ?? ""}</h6>
            )}

            <p>
              {" "}
              {t("vehicle_no")}{" "}
              {transpotation?.vehicle?.[0]?.vehicle_number ?? ""}
            </p>
          </div>
        </div>
        <div
          style={{
            width: "28%",
            display: "flex",
          }}
          className={style.transpotation_card_detail_other}
        >
          <div className={style.transpotation_card_detail_other_inner}>
            <img src="/images/email-white.svg" alt="icon" />

            <p>{transpotation?.user?.userEmail ?? ""}</p>
          </div>
          <div className={style.transpotation_card_detail_other_inner}>
            <img src="/images/phone-white.svg" alt="icon" />
            <p>{transpotation?.user?.userPhoneNumber ?? ""}</p>
          </div>
        </div>

        <h6
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "center",
          }}
          className={style.joining_date}
        >
          {moment(transpotation.staffJoinDate).format("DD-MM-yyyy")}
        </h6>
      </div>
      {border && (
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
      )}
    </>
  );
};

export default TranspotationCard;
