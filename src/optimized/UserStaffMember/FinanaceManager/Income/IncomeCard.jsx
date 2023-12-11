import { useTranslation } from "react-i18next";
import style from "./Income.module.css";
import dayjs from "dayjs";
const IncomeCard = ({ income, setIncomeId }) => {
  const { t } = useTranslation();
  const onDetail = () => {
    setIncomeId(income?._id);
  };
  return (
    <div onClick={onDetail} className={style.card_container}>
      <h6 className={style.invoice_number}>
        {t("invoice_no")} {" : "} {income?.invoice_number}
      </h6>
      <div className={style.sidebarheader}>
        <div className={style.text}>
          <p className={style.rcv}>{t("recived_from")}</p>
          <h6>
            {income?.incomeFrom
              ? income?.incomeFrom
              : income?.incomeFromUser?.userLegalName}
          </h6>
          <p className={style.rcv}>
            {dayjs(income?.createdAt).format("MMMM D, YYYY")}
          </p>
        </div>

        <div className={style.text}>
          <p className={style.rcv1}></p>
          <h6>
            {t("rs_only")} {income?.incomeAmount}
          </h6>
          <p className={style.rcv}>{income?.incomeAccount}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeCard;
