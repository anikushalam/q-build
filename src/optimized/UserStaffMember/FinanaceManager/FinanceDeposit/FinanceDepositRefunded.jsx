import style from "./FinanceDeposit.module.css";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import { useTranslation } from "react-i18next";
import FinanceDepositRefundedList from "./FinanceDepositRefundedList";
const FinanceDepositRefunded = ({ refundAmount, refundStudentCount, fid }) => {
  const { t } = useTranslation();
  return (
    <>
      <section className={style.unused_container}>
        <img src={`${assestsUserFinanceUrl}/rupee.svg`} alt="rupee symobl" />
        <div className={style.unused_container_text}>
          <div className={style.unused_container_text_inner}>
            <h6>{t("total_refunded")}</h6>
            <h6>
              {t("rs_only")}
              {` `}
              {refundAmount ?? 0}
            </h6>
          </div>
          <div className={style.unused_container_text_inner}>
            <p>
              {t("of")} {refundStudentCount ?? 0} {t("students")}
            </p>
          </div>
        </div>
      </section>
      <FinanceDepositRefundedList fid={fid} />
    </>
  );
};

export default FinanceDepositRefunded;
