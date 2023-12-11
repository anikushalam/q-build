import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "../AdmissionScholarship.module.css";

const CandidateCard = ({ candidate }) => {
  const { t } = useTranslation();

  return (
    <div className={style.candidate_card_container}>
      <img
        src={
          candidate?.student?.photoId !== "1"
            ? `${imageShowUrl}/${candidate?.student?.studentProfilePhoto}`
            : "/images/member_tab/class/default_avatar.svg"
        }
        alt=""
      />
      <div className={style.candidate_card_container_text}>
        <div className={style.candidate_card_row}>
          <h6>{`${candidate?.student?.studentFirstName ?? ""} ${
            candidate?.student?.studentMiddleName ?? ""
          } ${candidate?.student?.studentLastName ?? ""}`}</h6>
          <h6>
            {t("rs")} {candidate?.fee_payment_amount ?? 0}
          </h6>
        </div>
        <div className={style.candidate_card_row}>
          <p>
            {t("gr_number")}
            {candidate?.student?.studentGRNO ?? ""} {", "}
            {`(${candidate?.student?.batches?.batchName ?? ""})`}
          </p>
          <p>
            {moment(candidate?.fee_transaction_date)?.format("DD MMM yyyy")}
          </p>
        </div>
        <div className={style.candidate_card_row}>
          <p>
            {t("class_candi")}{" "}
            {candidate?.student?.studentClass?.className ?? ""}{" "}
            {candidate?.student?.studentClass?.classTitle ?? ""}
          </p>
          <p>
            {t("category_candi")}{" "}
            {candidate?.student?.fee_structure?.category_master
              ?.category_name ?? ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
