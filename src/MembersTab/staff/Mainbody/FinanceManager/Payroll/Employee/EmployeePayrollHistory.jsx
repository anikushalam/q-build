import React, { useEffect } from "react";
import { useFinanceOneEmployeeDetailHistory } from "../../../../../../hooks/member_tab/finance-api";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import EmployeeAccountHeading from "./EmployeeAccountHeading";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FeesStructure/PopupWrapper";
import style from "../../FeesStructure/FeesStructure.module.css";

const EmployeePayrollHistory = ({
  openEmployeeHistory,
  onClose,
  headMonth,
}) => {
  const { t } = useTranslation();
  const {
    financeOneEmployeeDetailHistory,
    financeOneEmployeeDetailHistoryRefetch,
  } = useFinanceOneEmployeeDetailHistory({
    data: {
      type: "History",
      eid: openEmployeeHistory?.emp_pay?._id,
      month: headMonth
        ? headMonth
        : new Date(`${openEmployeeHistory?.month}`)
            .toISOString()
            ?.substring(0, 7),
    },
    skip: !openEmployeeHistory?.emp_pay?._id,
  });
  useEffect(() => {
    if (openEmployeeHistory?.emp_pay?._id)
      financeOneEmployeeDetailHistoryRefetch();
  }, [
    openEmployeeHistory?.emp_pay?._id,
    financeOneEmployeeDetailHistoryRefetch,
  ]);
  return (
    <>
      <PopupWrapper onClose={onClose}>
        <div
          className={style.add_category_modal}
          style={{
            width: "35rem",
            minHeight: "10rem",
            maxHeight: "35rem",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          <div className={style.add_category_modal_title}>
            <section className={style.add_category_modal_title_left}>
              <img
                src="/images/arrow-left-fees-icon.svg"
                onClick={onClose}
                alt=""
              />
              <section className={style.add_employee_staff}>
                <img
                  src={
                    openEmployeeHistory?.emp_pay?.staff?.staffProfilePhoto
                      ? `${imageShowUrl}/${openEmployeeHistory?.emp_pay?.staff?.staffProfilePhoto}`
                      : "/images/member_tab/class/default_avatar.svg"
                  }
                  alt="staff avatar"
                />
                <div className={style.add_employee_staff_text}>
                  <h6>{`${
                    openEmployeeHistory?.emp_pay?.staff?.staffFirstName ?? ""
                  } 
            ${openEmployeeHistory?.emp_pay?.staff?.staffMiddleName ?? ""}
            ${openEmployeeHistory?.emp_pay?.staff?.staffLastName ?? ""} `}</h6>
                  <p>
                    {t("index_number")} :{" "}
                    {financeOneEmployeeDetailHistory?.detail?.staff
                      ?.staffROLLNO ?? ""}
                  </p>
                </div>
              </section>
            </section>
          </div>
          <BorderBottom
            customStyle={{
              width: "100%",
            }}
          />
          <EmployeeAccountHeading
            salaryData={financeOneEmployeeDetailHistory?.detail}
            salaryFilter={financeOneEmployeeDetailHistory?.filter?.[0]}
            viewAs="HISTORY"
          />

          <section className={style.table_container}>
            <div className={style.table_heading}>
              <h6>{t("particular")}</h6>
              <h6>{t("amount")}</h6>
            </div>
            <div className={style.table_body_list}>
              <h6>Basic Salary</h6>
              <h6>
                {financeOneEmployeeDetailHistory?.filter?.[0]?.amount?.toFixed(
                  2
                )}
              </h6>
            </div>
            <div className={style.table_body}>
              {financeOneEmployeeDetailHistory?.filter?.[0]?.month_master?.map(
                (feehead, index) =>
                  feehead?.month_master_status !== "Deduction" ? (
                    <div className={style.table_body_list} key={index}>
                      <h6>{feehead?.month_master_name}</h6>
                      <h6>{feehead?.month_master_amount}</h6>
                    </div>
                  ) : (
                    ""
                  )
              )}
            </div>
            <div className={style.table_body}>
              <div
                className={style.table_body_list}
                style={{
                  borderTopColor: "rgba(18, 18, 18, 0.8)",
                  borderTopWidth: "2px",
                  borderTopStyle: "solid",
                  borderBottomColor: "rgba(18, 18, 18, 0.8)",
                  borderBottomWidth: "2px",
                }}
              >
                <h6 className={style.fees_total}>{t("gross_total")}</h6>
                <h6 className={style.fees_total}>
                  {financeOneEmployeeDetailHistory?.filter?.[0]?.gross_salary?.toFixed(
                    2
                  )}
                </h6>
              </div>
            </div>
            <div className={style.table_body}>
              {financeOneEmployeeDetailHistory?.filter?.[0]?.month_master?.map(
                (feehead, index) =>
                  feehead?.month_master_status === "Deduction" ? (
                    <div className={style.table_body_list} key={index}>
                      <h6>{feehead?.month_master_name}</h6>
                      <h6>{feehead?.month_master_amount}</h6>
                    </div>
                  ) : (
                    ""
                  )
              )}
            </div>
            <div className={style.table_body}>
              <div
                className={style.table_body_list}
                style={{
                  borderTopColor: "rgba(18, 18, 18, 0.8)",
                  borderTopWidth: "2px",
                  borderTopStyle: "solid",
                  borderBottomColor: "rgba(18, 18, 18, 0.8)",
                  borderBottomWidth: "2px",
                }}
              >
                <h6 className={style.fees_total}>{t("net_total")}</h6>
                <h6 className={style.fees_total}>
                  {financeOneEmployeeDetailHistory?.filter?.[0]?.net_total?.toFixed(
                    2
                  )}
                </h6>
              </div>
            </div>
          </section>
        </div>
        {/* {disabled && <QLoader />} */}
      </PopupWrapper>
    </>
  );
};

export default EmployeePayrollHistory;
