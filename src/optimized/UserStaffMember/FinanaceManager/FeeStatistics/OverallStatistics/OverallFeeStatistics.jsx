import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../FinanceManager.module.css";
import UserMemberContainerWrapper from "../../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../../../Ui/Border/BorderBottom";
import OverallFeeStatisticsFilter from "../OverallFeeStatisticsFilter";
import OverallStatistics from "./OverallStatistics";
import CreateButton from "../../../../Ui/Button/CreateButton";
import {
  assestsLoadingUrl,
  assestsUserFinanceUrl,
} from "../../../../Services/UrlConfig/AssestsBaseUrl";
import dayjs from "dayjs";
import { localTimeFormat } from "../../../../Utils/Functions/localTime";
import {
  useFinanceFeeStatitics,
  useFinanceOverallFeeStatistics,
} from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import QvipleLoader from "../../../../Loader/QvipleLoader";

const OverallFeeStatistics = ({ fid, instituteId }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [financeFeeStatitics] = useFinanceFeeStatitics();

  const { fnanceOverallFeeStatistics, fnanceOverallFeeStatisticsRefetch } =
    useFinanceOverallFeeStatistics({
      fid: fid,
      skip: !fid,
    });

  const onCloseFilter = useCallback(() => {
    setStep("");
  }, []);

  const onFilterApplyClose = () => {
    setStep("FILTER");
  };
  const onRefetch = () => {
    if (fid && !financeFeeStatitics?.loading_status) {
      setDisabled((pre) => !pre);
      financeFeeStatitics({
        fid: fid,
        moduleType: "OVERALL_VIEW",
        statisticsBody: {
          activity_status:
            fnanceOverallFeeStatistics?.fees_statistics_filter
              ?.bank_level?.[0] ?? "",
          all_depart:
            fnanceOverallFeeStatistics?.fees_statistics_filter
              ?.department_all ?? "",
          batch_status:
            fnanceOverallFeeStatistics?.fees_statistics_filter?.batch_all ?? "",
          master:
            fnanceOverallFeeStatistics?.fees_statistics_filter
              ?.master_level?.[0] ?? [],
          batch:
            fnanceOverallFeeStatistics?.fees_statistics_filter
              ?.batch_level?.[0] ?? "",
          depart:
            fnanceOverallFeeStatistics?.fees_statistics_filter
              ?.department_level?.[0] ?? "",
          bank:
            fnanceOverallFeeStatistics?.fees_statistics_filter
              ?.bank_level?.[0] ?? "",
        },
      })
        .then(() => {
          fnanceOverallFeeStatisticsRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  // console.info("fnanceOverallFeeStatistics", fnanceOverallFeeStatistics);
  return (
    <>
      <UserMemberContainerWrapper>
        <UserMemberContentWrapper>
          <div className={style.fm_header_container}>
            <h6>{t("overall_fees_statitics")}</h6>
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
              {t("applied_filter")} {" : "}
              {fnanceOverallFeeStatistics?.fees_statistics_filter
                ?.department_all
                ? fnanceOverallFeeStatistics?.fees_statistics_filter
                    ?.department_all
                : fnanceOverallFeeStatistics?.fees_statistics_filter?.batch_all
                ? fnanceOverallFeeStatistics?.fees_statistics_filter?.batch_all
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
                {financeFeeStatitics?.loading_status ? (
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
                    {dayjs(fnanceOverallFeeStatistics?.last_update).format(
                      "DD MMM YYYY"
                    )}
                    {", "}
                    {/* {dayjs(fnanceOverallFeeStatistics?.last_update).format(
                      "hh:mm A"
                    )} */}
                    {localTimeFormat(
                      fnanceOverallFeeStatistics?.last_update,
                      "LT"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <OverallStatistics
            fnanceOverallFeeStatistics={fnanceOverallFeeStatistics}
          />
        </UserMemberContentWrapper>
      </UserMemberContainerWrapper>
      {step === "FILTER" ? (
        <OverallFeeStatisticsFilter
          onClose={onCloseFilter}
          fid={fid}
          instituteId={instituteId}
          onRefetch={fnanceOverallFeeStatisticsRefetch}
        />
      ) : null}
      {disabled && <QvipleLoader />}
    </>
  );
};

export default OverallFeeStatistics;
