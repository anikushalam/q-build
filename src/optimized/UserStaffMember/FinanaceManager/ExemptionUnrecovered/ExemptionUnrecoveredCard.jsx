import { assestsFeedUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import { imageShowUrl } from "../../../Services/UrlConfig/BaseUrl";
import { useTranslation } from "react-i18next";
import style from "./ExemptionUnrecovered.module.css";
import dayjs from "dayjs";

const ExemptionUnrecoveredCard = ({ exemption }) => {
  const { t } = useTranslation();
  return (
    <section className={style.exemption_card}>
      <img
        src={
          exemption?.student?.studentProfilePhoto
            ? `${imageShowUrl}/${exemption?.student?.studentProfilePhoto}`
            : `${assestsFeedUrl}/feed-user-avatar.svg`
        }
        alt="student avatar"
      />
      <div className={style.exemption_card_text}>
        <div className={style.exemption_card_name}>
          <h6>{`${exemption?.student?.studentFirstName} ${
            exemption?.student?.studentMiddleName
              ? exemption?.student?.studentMiddleName
              : ""
          } ${exemption?.student?.studentLastName}`}</h6>
          <h6>
            {t("rs_only")} {exemption?.fee_payment_amount ?? 0}
          </h6>
        </div>
        <div className={style.exemption_card_amount}>
          <p>{t("admission_fees_paid")}</p>
          <p>{exemption?.student?.admissionPaidFeeCount ?? 0}</p>
        </div>
        <div className={style.exemption_card_batch}>
          <p>{`(${exemption?.student?.batches?.batchName ?? ""})`}</p>
          <p>{dayjs(exemption?.fee_transaction_date).format("DD MMM YYYY")}</p>
        </div>
      </div>
    </section>
  );
};

export default ExemptionUnrecoveredCard;
