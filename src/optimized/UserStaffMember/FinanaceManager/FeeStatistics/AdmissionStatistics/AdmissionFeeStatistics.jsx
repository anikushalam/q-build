import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../FinanceManager.module.css";
import UserMemberContainerWrapper from "../../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../../../Ui/Border/BorderBottom";
import AdmissionFeeStatiticsTable from "./AdmissionFeeStatiticsTable";
import AdmissionFeeStatisticsFilter from "../AdmissionFeeStatisticsFilter";
import CreateButton from "../../../../Ui/Button/CreateButton";
import {
  assestsLoadingUrl,
  assestsUserFinanceUrl,
} from "../../../../Services/UrlConfig/AssestsBaseUrl";
import dayjs from "dayjs";
// import { localTimeFormat } from "../../../../Utils/Functions/localTime";
import {
  useFinanceAdmissionStatics,
  useFinanceFeeStatitics,
} from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { localTimeFormat } from "../../../../Utils/Functions/localTime";
import QvipleLoader from "../../../../Loader/QvipleLoader";
import Loading from "../../../../Loader/Loading";

const AdmissionFeeStatistics = ({ fid, instituteId }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState("");
  const [statitics, setStatitics] = useState([]);
  const [financeFeeStatitics] = useFinanceFeeStatitics();
  const [disabled, setDisabled] = useState(false);

  const onCloseFilter = useCallback(() => {
    setStep("");
  }, []);

  const onFilterApplyClose = () => {
    setStep("FILTER");
  };

  const {
    financeAdmissionStatics,
    financeAdmissionStaticsRefetch,
    financeAdmissionStaticsLoading,
  } = useFinanceAdmissionStatics({
    fid: fid,
    skip: !fid,
  });
  // console.info("financeAdmissionStatics", financeAdmissionStatics);

  useEffect(() => {
    if (financeAdmissionStatics?.excel_list) {
      setStatitics(financeAdmissionStatics?.excel_list);
    }
  }, [financeAdmissionStatics?.excel_list]);
  const onRefetch = () => {
    if (fid && !financeAdmissionStatics?.loading_status) {
      setDisabled((pre) => !pre);
      financeFeeStatitics({
        fid: fid,
        moduleType: "ADMISSION_VIEW",
        statisticsBody: {
          activity_status: "",
          all_depart: "PARTICULAR",
          batch_status: "PARTICULAR_BATCH",
          master: [],
          batch:
            financeAdmissionStatics?.fees_statistics_filter?.batch_level?.[0] ??
            "",
          depart:
            financeAdmissionStatics?.fees_statistics_filter
              ?.department_level?.[0] ?? "",
          bank:
            financeAdmissionStatics?.fees_statistics_filter?.bank_level?.[0] ??
            "",
        },
      })
        .then(() => {
          financeAdmissionStaticsRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <>
      <UserMemberContainerWrapper
      // customStyle={{
      //   maxWidth: "870px",
      // }}
      >
        <UserMemberContentWrapper>
          <div className={style.fm_header_container}>
            <h6>{t("admission_fees_statitics")}</h6>
          </div>
        </UserMemberContentWrapper>
        <BorderBottom />
        <UserMemberContentWrapper
          customStyle={{
            paddingTop: "0.2rem",
          }}
        >
          <div className={style.fm_fs_container}>
            <h6
              className={style.fm_title_heading}
              style={{
                flex: "2 2",
              }}
            >
              {t("apply_filter")} {" : "}
              {financeAdmissionStatics?.fees_statistics_filter
                ?.department_level?.[0]
                ? "Particular Department, "
                : ""}
              {financeAdmissionStatics?.fees_statistics_filter?.batch_level?.[0]
                ? "Particular Batch, "
                : ""}
              {financeAdmissionStatics?.fees_statistics_filter?.bank_level?.[0]
                ? "Particular Bank"
                : ""}
            </h6>
            <div
              className={style.fm_fs_container_inner}
              style={{
                flex: "1 1",
              }}
            >
              <CreateButton
                label="filter"
                onAction={onFilterApplyClose}
                customStyle={{
                  margin: "0",
                }}
              />
              <div
                className={style.fm_fs_refetch_container}
                onClick={onRefetch}
              >
                {financeAdmissionStatics?.loading_status ? (
                  <img
                    src={`${assestsLoadingUrl}/loading.gif`}
                    // src={`${assestsUserFinanceUrl}/refresh-rotate.gif`}
                    alt="refetch icon"
                  />
                ) : (
                  <img
                    src={`${assestsUserFinanceUrl}/refresh.svg`}
                    alt="refetch icon"
                  />
                )}

                <div className={style.fm_fs_refetch_container_inner}>
                  <h6>{t("refetch_data")}</h6>
                  <p>
                    {t("last_updated")}
                    {" : "}
                    {dayjs().format("DD MMM YYYY")}
                    {", "}
                    {localTimeFormat(
                      financeAdmissionStatics?.last_update,
                      "LT"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {financeAdmissionStaticsLoading && <Loading />}
          {statitics?.[0] && (
            <AdmissionFeeStatiticsTable
              statitics={statitics?.[0]}
              batchId={
                financeAdmissionStatics?.fees_statistics_filter
                  ?.batch_level?.[0] ?? ""
              }
              depart={
                financeAdmissionStatics?.fees_statistics_filter
                  ?.department_level?.[0] ?? ""
              }
            />
          )}
        </UserMemberContentWrapper>
      </UserMemberContainerWrapper>
      {step === "FILTER" ? (
        <AdmissionFeeStatisticsFilter
          onClose={onCloseFilter}
          fid={fid}
          instituteId={instituteId}
          onRefetch={financeAdmissionStaticsRefetch}
        />
      ) : null}
      {disabled && <QvipleLoader />}
    </>
  );
};

export default AdmissionFeeStatistics;
