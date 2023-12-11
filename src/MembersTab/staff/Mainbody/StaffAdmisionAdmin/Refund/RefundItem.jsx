import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "./AdmisisonRefund.module.css";

const RefundItem = ({ refund }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const onViewApplicantProfile = () => {
    navigate(`/q/${params.username}/student/profile/admission`, {
      state: {
        sid: refund?.student?._id,
        viewAs: "ADMISSION_ADMIN",
        openTab: "FEES_DATA",
      },
    });
  };
  return (
    <>
      <div
        className={style.refund_card}
        onClick={onViewApplicantProfile}
        title="View Student Profile"
      >
        <img
          src={
            refund?.student?.photoId !== "1"
              ? `${imageShowUrl}/${refund?.student?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          alt="student avatar"
        />
        <section className={style.refund_card_text_container}>
          <div className={style.refund_card_text}>
            <h6>{`${refund?.student?.studentFirstName} ${
              refund?.student?.studentMiddleName
                ? refund?.student?.studentMiddleName
                : ""
            } ${refund?.student?.studentLastName}`}</h6>
            <p>
              {t("gr_number")}
              {refund?.student?.studentGRNO ?? ""} {", "}
              {refund?.student?.department?.dName ?? ""}
            </p>
          </div>
          <div className={style.refund_card_text}>
            <h6>
              {t("rs")} {refund?.refund ?? 0}
            </h6>
            <p>{t("excess_fee")}</p>
            {/* <p>{t("refund_amount")}</p> */}
          </div>
        </section>
      </div>
      <BorderBottom
        customStyle={{
          borderTop: "3px solid",
          width: "100%",
        }}
      />
    </>
  );
};

export default RefundItem;
