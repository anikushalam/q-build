import React, { useEffect, useState } from "react";
import style from "../../Hostel/Deposit/Deposit.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import TransportRefunded from "./TransportRefunded";
import RefundStudentList from "./RefundStudentList";
import { useGetMasterDepositByTransport } from "../../../../../hooks/member_tab/transport-api";
const TransportDeposit = ({ transportId }) => {
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
  const { getMasterDepositByTransport, getMasterDepositByTransportRefetch } =
    useGetMasterDepositByTransport({
      tid: transportId,
      skip: !transportId,
    });

  useEffect(() => {
    if (transportId) getMasterDepositByTransportRefetch();
  }, [transportId, getMasterDepositByTransportRefetch]);
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
              {/* {getMasterDepositByTransport?.master?.master_name ?? ""} */}
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
                    {getMasterDepositByTransport?.master?.deposit_amount ?? 0}
                  </h6>
                </div>
                <div className={style.unused_container_text_inner}>
                  <p>
                    {t("deposit_of")}{" "}
                    {getMasterDepositByTransport?.master?.paid_student_count ??
                      0}{" "}
                    {t("deposit_student")}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
      {activeIndex === 1 && (
        <TransportRefunded
          refund_amount={getMasterDepositByTransport?.master?.refund_amount}
          refund_student_count={
            getMasterDepositByTransport?.master?.refund_student_count
          }
          transportId={transportId}
        />
      )}
      {refundStudent && (
        <RefundStudentList
          onClose={() => setRefundStudent(false)}
          fmid={getMasterDepositByTransport?.master?._id}
          onRefecthParent={getMasterDepositByTransportRefetch}
        />
      )}
    </div>
  );
};

export default TransportDeposit;
