import { useTranslation } from "react-i18next";
import style from "../Income/Income.module.css";
import dayjs from "dayjs";
const ExpenseCard = ({ expense, setExpenseId }) => {
  const { t } = useTranslation();
  const onDetail = () => {
    setExpenseId(expense?._id);
  };
  return (
    <div onClick={onDetail} className={style.card_container}>
      <h6 className={style.invoice_number}>
        {t("invoice_no")} {" : "} {expense?.invoice_number}
      </h6>
      <div className={style.sidebarheader}>
        <div className={style.text}>
          <p className={style.rcv}>{t("paid_to")}</p>
          <h6>
            {expense?.expensePaid
              ? expense?.expensePaid
              : expense?.expensePaidUser?.userLegalName}
          </h6>
          <p className={style.rcv}>
            {dayjs(expense?.createdAt).format("MMMM D, YYYY")}
          </p>
        </div>

        <div className={style.text}>
          <p className={style.rcv}>
            {expense?.expense_quantity ? expense?.expense_quantity : "N/A"}{" "}
            {t("quantity")}
          </p>
          <h6>
            {t("rs_only")} {expense?.expenseAmount}
          </h6>
          <p className={style.rcv}>{expense?.expenseAccount}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
