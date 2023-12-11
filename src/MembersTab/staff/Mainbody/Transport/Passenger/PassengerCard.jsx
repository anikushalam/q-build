import React from "react";
import { useTranslation } from "react-i18next";
import style from "../../Hostel/Hostel.module.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useNavigate, useParams } from "react-router-dom";

const PassengerCard = ({ passenger, border }) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();

  const onViewApplicantProfile = () => {
    navigate(`/q/${params.username}/student/profile`, {
      state: {
        sid: passenger?._id,
        viewAs: "ADMISSION_ADMIN",
      },
    });
  };

  return (
    <>
      <div
        className={style.transpotation_card}
        onClick={onViewApplicantProfile}
        title="View Profile"
      >
        <div
          style={{
            width: "70%",
          }}
          className={style.transpotation_card_detail}
        >
          <img
            src={
              passenger?.studentProfilePhoto
                ? `${imageShowUrl}/${passenger.studentProfilePhoto}`
                : "/images/user-icon.svg"
            }
            alt="avatar"
          />

          <div className={style.transpotation_card_detail_text}>
            <h6>
              {`${passenger?.studentFirstName ?? ""} 
         ${passenger?.studentMiddleName ?? ""}
         ${passenger?.studentLastName ?? ""} `}
            </h6>
            <p>
              {t("gr_number")} {passenger?.studentGRNO ?? ""}
            </p>
            <p>
              {t("class_name")}{" "}
              {`${passenger?.studentClass?.className ?? ""} - ${
                passenger?.studentClass?.classTitle ?? ""
              }`}
            </p>
            <h6
              style={{
                fontSize: "12px",
              }}
            >
              {t("fee_structure")} {" : "}
              {passenger?.transport_fee_structure?.unique_structure_name ?? ""}
              {", "}
              {t("rs")}{" "}
              {passenger?.transport_fee_structure?.total_admission_fees ?? ""}
            </h6>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
          }}
          className={style.transpotation_card_detail_other}
        >
          <div className={style.transpotation_card_detail_other_inner}>
            <img src="/images/email-white.svg" alt="icon" />

            <p>{passenger?.user?.userEmail ?? ""}</p>
          </div>
          <div className={style.transpotation_card_detail_other_inner}>
            <img src="/images/phone-white.svg" alt="icon" />
            <p>{passenger?.user?.userPhoneNumber ?? ""}</p>
          </div>
        </div>
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

export default PassengerCard;
