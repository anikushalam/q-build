import { assestsFeedUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import { imageShowUrl } from "../../../Services/UrlConfig/BaseUrl";
import { useTranslation } from "react-i18next";
import style from "./FinanceDeposit.module.css";
const FinanceDepositStudentCard = ({ student, onSelect }) => {
  const { t } = useTranslation();

  const onRefund = () => {
    onSelect(student);
  };
  return (
    <section
      className={style.student_container}
      title="Refund deposit"
      onClick={onRefund}
    >
      <img
        src={
          student?.studentProfilePhoto
            ? `${imageShowUrl}/${student?.studentProfilePhoto}`
            : `${assestsFeedUrl}/feed-user-avatar.svg`
        }
        alt="student avatar"
      />
      <div className={style.conainter_main}>
        <div className={style.student_container_name}>
          <h6>{`${student?.studentFirstName} ${
            student?.studentMiddleName ? student?.studentMiddleName : ""
          } ${student?.studentLastName}`}</h6>
          <h6 className={style.student_container_gr}>
            {t("rs_only")} {student?.deposit_pending_amount ?? 0}
          </h6>
        </div>
        <div className={style.student_container_name}>
          <h6>
            {t("gr_number")}
            {student?.studentGRNO ?? ""} {", "}
            {student?.department?.dName ?? ""}
          </h6>
          <p className={style.student_container_gr}>{t("pending_deposit")}</p>
        </div>
      </div>
    </section>
  );
};

export default FinanceDepositStudentCard;
