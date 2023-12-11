import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useOneInstituteDashboard } from "../../hooks/dashboard/dashboard-api";
import { useGetAdmissionDetail } from "../../hooks/member_tab/admission-api";
import style from "./Funds.module.css";
import { useTranslation } from "react-i18next";
import InstituteAdmissionTabChangeLink from "../InstituteAdmissionTabChangeLink";

function BalanceItem({ bal, value }) {
  return (
    <div className={style.balanceItem}>
      <p>{bal}:</p>
      <p>Rs. {value}</p>
    </div>
  );
}

function Funds({ carryParentState }) {
  const { t } = useTranslation();
  const adsId = useSelector((state) => state.admissionChange);
  const id = useSelector((state) => state.idChange.id);

  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: id,
      skip: !id,
    });

  const { getAdmissionDetail, getAdmissionDetailRefetch } =
    useGetAdmissionDetail({
      data: {
        aid: `${
          adsId?.aid
            ? adsId?.aid
            : oneInstituteDashboard?.institute?.admissionDepart[0]
        }`,
        sid: "",
      },

      skip: !adsId?.aid
        ? !oneInstituteDashboard?.institute?.admissionDepart[0]
        : !adsId?.aid,
    });
  useEffect(() => {
    if (id) oneInstituteDashboardRefetch();
  }, [id, oneInstituteDashboardRefetch]);

  useEffect(() => {
    if (adsId?.aid || oneInstituteDashboard?.institute?.admissionDepart[0])
      getAdmissionDetailRefetch();
  }, [
    adsId?.aid,
    oneInstituteDashboard?.institute?.admissionDepart[0],
    getAdmissionDetailRefetch,
  ]);

  return (
    <div className={style.funds2}>
      <div className={style.fundscontent}>
        <div className={style.sidebarbottomitem}>
          <img alt="not found" src="/images/finance/doller-icon.svg" />
          <div>
            <p className={style.namee}>
              Rs.{" "}
              {(
                getAdmissionDetail?.admission?.onlineFee +
                getAdmissionDetail?.admission?.offlineFee
              ).toFixed(2)}
            </p>
            <p className={style.desig}>{t("total_admission_fees")}</p>
          </div>
        </div>

        <BalanceItem
          bal={t("online_fees")}
          value={getAdmissionDetail?.admission?.onlineFee?.toFixed(2)}
        />
        <BalanceItem
          bal={t("offline_fees")}
          value={getAdmissionDetail?.admission?.offlineFee?.toFixed(2)}
        />
        <InstituteAdmissionTabChangeLink
          carryParentState={carryParentState}
          activeTab="?a=pending"
        >
          <div className={style.fundbtn}>
            {t("remaining_fees")} : Rs.{" "}
            {getAdmissionDetail?.admission?.remainingFeeCount}
          </div>
        </InstituteAdmissionTabChangeLink>
      </div>
    </div>
  );
}

export default Funds;
