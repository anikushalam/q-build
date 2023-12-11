import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Incomes.module.css";

function Item({ income, setDetailView, setIncomeId, all }) {
  const { t } = useTranslation();
  return (
    <div
      onClick={() => {
        setDetailView(true);
        setIncomeId(income);
      }}
      className={style.card_container}
    >
      <h6 className={style.invoice_number}>
        Invoice No: {all?.invoice_number}
      </h6>
      <div className={style.sidebarheader}>
        <div className={style.text}>
          <p className={style.rcv}>{t("recived_from")}</p>
          <h6>
            {all?.incomeFrom
              ? all?.incomeFrom
              : all?.incomeFromUser?.userLegalName}
          </h6>
          <p className={style.rcv}>{moment(all?.createdAt).format("LL")}</p>
        </div>

        <div className={style.text}>
          <p className={style.rcv1}></p>
          <h6>Rs. {all?.incomeAmount}</h6>
          <p className={style.rcv}>{all?.incomeAccount}</p>
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
      {props?.allIncome?.map((all, index) =>
        props?.allIncome?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <Item
              setDetailView={props?.setDetailView}
              setIncomeId={props?.setIncomeId}
              all={all}
            />
          </div>
        ) : (
          <Item
            key={index}
            income={`${all?._id}`}
            setDetailView={props?.setDetailView}
            setIncomeId={props?.setIncomeId}
            all={all}
          />
        )
      )}
    </div>
  </div>
));

export default IncomeLeft;
