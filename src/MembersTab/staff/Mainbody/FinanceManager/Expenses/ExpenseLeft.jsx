import React from "react";
import moment from "moment";
import style from "./Expenses.module.css";
import { useTranslation } from "react-i18next";

function Item({ expense, setDetailView, setExpenseId, all }) {
  const { t } = useTranslation();
  return (
    <div
      onClick={() => {
        setDetailView(true);
        setExpenseId(expense);
      }}
      className={style.card_container}
    >
      <h6 className={style.invoice_number}>
        Invoice No: {all?.invoice_number}
      </h6>
      <div className={style.sidebarheader}>
        <div className={style.text}>
          <p className={style.rcv}>
            {t("paid_to")}
            <span
              style={{
                position: "absolute",
                right: "2%",
                marginTop: "-5px",
              }}
            >
              {all?.expense_quantity ? all?.expense_quantity : "N/A "} Quantity
            </span>
          </p>
          <h6>
            {all?.expensePaid
              ? all?.expensePaid
              : all?.expensePaidUser?.userLegalName}
          </h6>
          <p className={style.rcv}>{moment(all?.createdAt).format("LL")}</p>
        </div>

        <div className={style.text}>
          <p className={style.rcv1}></p>
          <h6>Rs. {all?.expenseAmount}</h6>
          <p className={style.rcv}>{all?.expenseAccount}</p>
        </div>
      </div>
    </div>
  );
}

const IncomeLeft = React.forwardRef((props, ref) => (
  <div className={style.incomeLeftt}>
    {!props?.fId && (
      <div
        className={`${style.btn} ${style.btn_sticky}`}
        onClick={props?.viewForm}
      >
        <img src="/images/addplus.svg" alt="" />
      </div>
    )}
    <div className={style.itemsContainer}>
      {props?.allExpense?.map((all, index) =>
        props?.allExpense?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <Item
              expense={`${all?._id}`}
              setDetailView={props?.setDetailView}
              setExpenseId={props?.setExpenseId}
              all={all}
            />
          </div>
        ) : (
          <Item
            key={index}
            expense={`${all?._id}`}
            setDetailView={props?.setDetailView}
            setExpenseId={props?.setExpenseId}
            all={all}
          />
        )
      )}
    </div>
  </div>
));

export default IncomeLeft;
