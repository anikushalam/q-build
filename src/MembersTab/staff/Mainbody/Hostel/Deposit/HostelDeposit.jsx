import React, { useEffect, useState } from "react";
import style from "./Deposit.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import Refunded from "./Refunded";
import RefundStudentList from "./RefundStudentList";
import { useGetMasterDepositByHostel } from "../../../../../hooks/member_tab/hostel-api";
const HostelDeposit = ({ hid }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [refundStudent, setRefundStudent] = useState(false);
  const tabList = [
    {
      name: t("deposit_collection"),
      id: 0,
    },
    {
      name: t("deposit_refund"),
      id: 1,
    },
    {
      name: t("deposit_data_file"),
      id: 3,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const { getMasterDepositByHostel, getMasterDepositByHostelRefetch } =
    useGetMasterDepositByHostel({
      hid: hid,
      skip: !hid,
    });

  useEffect(() => {
    if (hid) getMasterDepositByHostelRefetch();
  }, [hid, getMasterDepositByHostelRefetch]);
  const onBackWithArrowLeft = () => {
    navigate(-1);
  };

  return (
    <div
      className={style.moderator_container}
      style={{
        marginTop: "0",
      }}
    >
      <section className={style.moderator_container_title}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <div className={style.with_search}>
          <h6>{t("finance_deposit")}</h6>
          <div className={style.search_container_filter}>
            {/* <section className={style.search_container}>
              <div className={style.search_container_input}>
                <img
                  className={style.searchIcon}
                  alt="search icon"
                  src="/images/search-dash-icon.svg"
                />
                <input
                  type="text"
                  placeholder="Search"
                  //   onChange={onSearchEvent}
                />
              </div>
            </section> */}
            <img src="/images/filter-blue-icon.svg" alt="filter icon" />
          </div>
        </div>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />

      <UniversalTab
        tabList={tabList}
        activeIndexTab={activeIndex}
        setActiveIndexTab={setActiveIndex}
        showAs={false}
        customStyleTab={{
          width: "33.33%",
        }}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.5rem",
        }}
      />
      {activeIndex === 0 && (
        <>
          <button
            className={style.applicable_to_btn}
            onClick={() => setRefundStudent(true)}
            style={{
              width: "50%",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            <div>
              {t("deposit_fee_head_linking")}{" "}
              {/* {getMasterDepositByHostel?.master?.master_name ?? ""} */}
            </div>
            <img src="/images/forward-right-icon.svg" alt="next step" />
          </button>
          <div className={style.refund_list}>
            <section className={style.unused_container}>
              <img src="/images/rupee-symobl-icon.svg" alt="rupee symobl" />
              <div className={style.unused_container_text}>
                <div className={style.unused_container_text_inner}>
                  <h6>{t("total_deposit")}</h6>
                  <h6>
                    {t("rs")}
                    {` `}
                    {getMasterDepositByHostel?.master?.deposit_amount ?? 0}
                  </h6>
                </div>
                <div className={style.unused_container_text_inner}>
                  <p>
                    {t("deposit_of")}{" "}
                    {getMasterDepositByHostel?.master?.paid_student_count ?? 0}{" "}
                    {t("deposit_student")}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
      {activeIndex === 1 && (
        <Refunded
          refund_amount={getMasterDepositByHostel?.master?.refund_amount}
          refund_student_count={
            getMasterDepositByHostel?.master?.refund_student_count
          }
          hid={hid}
        />
      )}
      {refundStudent && (
        <RefundStudentList
          onClose={() => setRefundStudent(false)}
          fmid={getMasterDepositByHostel?.master?._id}
          onRefecthParent={getMasterDepositByHostelRefetch}
        />
      )}
    </div>
  );
};

export default HostelDeposit;
