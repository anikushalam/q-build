import { useTranslation } from "react-i18next";
import style from "./FinanceDeposit.module.css";
import { useState } from "react";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import FinanceDepositStudent from "./FinanceDepositStudent";
const FinanceDepositCollection = ({
  fmid,
  paidStudentCount,
  depositAmount,
}) => {
  const { t } = useTranslation();
  const [refundStudent, setRefundStudent] = useState(false);

  const onToggle = () => {
    setRefundStudent((pre) => !pre);
  };

  return (
    <>
      <button
        className={style.applicable_to_btn}
        onClick={onToggle}
        style={{
          width: "50%",
          marginTop: "2rem",
          marginBottom: "1rem",
          cursor: "pointer",
        }}
      >
        <div>{t("refund_deposit")} </div>
        <img src={`${assestsUserFinanceUrl}/forward.svg`} alt="next step" />
      </button>
      <section className={style.unused_container}>
        <img src={`${assestsUserFinanceUrl}/rupee.svg`} alt="rupee symobl" />
        <div className={style.unused_container_text}>
          <div className={style.unused_container_text_inner}>
            <h6>{t("total_deposit")}</h6>
            <h6>
              {t("rs_only")}
              {` `}
              {depositAmount ?? 0}
            </h6>
          </div>
          <div className={style.unused_container_text_inner}>
            <p>
              {t("of")} {paidStudentCount ?? 0} {t("students")}
            </p>
          </div>
        </div>
      </section>
      {refundStudent && (
        <FinanceDepositStudent onClose={onToggle} fmid={fmid} />
      )}
    </>
  );
};

export default FinanceDepositCollection;
