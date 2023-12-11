import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import style from "../../StudentStatitics/StudentStatitics.module.css";
import OverallStatisticsCard from "./OverallStatisticsCard";
import CreateButton from "../../../../Ui/Button/CreateButton";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCallback } from "react";
const OverallStatistics = ({ fnanceOverallFeeStatistics }) => {
  const navigate = useNavigate();
  const params = useParams();
  const getQuery = useLocation();

  const onAdmissionFeeStatistics = useCallback(() => {
    navigate(
      `/q/${params.username}/member/staff/finance?type=fees-statistics&n=admission`,
      {
        state: getQuery.state,
      }
    );
  }, [navigate, params, getQuery.state]);

  const onNavigate = useCallback(
    (val) => {
      if (val?.length > 0) {
        navigate(
          `/q/${params.username}/member/staff/finance?type=statistics-detail`,
          {
            state: {
              ...getQuery.state,
              studentList: val,
              openAs: "OVERVIEW",
            },
          }
        );
      }
    },
    [navigate, params]
  );
  // console.info("fnanceOverallFeeStatistics", fnanceOverallFeeStatistics);
  return (
    <>
      <div className={style.osc_container}>
        <div className={style.osc_container_inner}>
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/total-fees.svg`}
            amount={fnanceOverallFeeStatistics?.total_fees ?? 0}
            label="total_fees_to_be_collected"
            onAction={onNavigate}
            arr={fnanceOverallFeeStatistics?.total_fees_arr}
          />
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/total-collection.svg`}
            amount={fnanceOverallFeeStatistics?.total_collect ?? 0}
            label="total_collection"
            onAction={onNavigate}
            arr={fnanceOverallFeeStatistics?.total_collect_arr}
          />
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/total-collected.svg`}
            amount={fnanceOverallFeeStatistics?.total_pending ?? 0}
            label="total_outstanding"
            onAction={onNavigate}
            arr={fnanceOverallFeeStatistics?.total_pending_arr}
          />
        </div>
        <div className={style.osc_container_inner}>
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/student-collection.svg`}
            amount={
              fnanceOverallFeeStatistics?.fees_to_be_collected_student ?? 0
            }
            label="fees_to_be_collected_from_student"
            onAction={onNavigate}
            arr={fnanceOverallFeeStatistics?.fees_to_be_collected_student_arr}
          />
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/student-collection.svg`}
            amount={fnanceOverallFeeStatistics?.collect_by_student ?? 0}
            label="collection_from_student"
            onAction={onNavigate}
            arr={fnanceOverallFeeStatistics?.collect_by_student_arr}
          />
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/student-pending.svg`}
            amount={fnanceOverallFeeStatistics?.pending_by_student ?? 0}
            label="outstanding_from_student"
            onAction={onNavigate}
            arr={fnanceOverallFeeStatistics?.pending_by_student_arr}
          />
        </div>
        <div className={style.osc_container_inner}>
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/gov-recieve.svg`}
            amount={
              fnanceOverallFeeStatistics?.fees_to_be_collected_government ?? 0
            }
            label="fees_to_be_receive_as_scholarship"
            onAction={onNavigate}
            arr={
              fnanceOverallFeeStatistics?.fees_to_be_collected_government_arr
            }
          />
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/gov-recieve.svg`}
            amount={fnanceOverallFeeStatistics?.collect_by_government ?? 0}
            label="collection_as_scholarship"
            onAction={onNavigate}
            arr={fnanceOverallFeeStatistics?.collect_by_government_arr}
          />
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/gov-pending.svg`}
            amount={fnanceOverallFeeStatistics?.pending_from_government ?? 0}
            label="outstanding_as_scholarship"
            onAction={onNavigate}
            arr={fnanceOverallFeeStatistics?.pending_from_government_arr}
          />
        </div>

        <div className={style.osc_container_inner}>
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/excess-fee.svg`}
            amount={fnanceOverallFeeStatistics?.internal_fees ?? 0}
            label="other_internal_fees_to_be_collected"
            onAction={() => {}}
          />
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/excess-fee.svg`}
            amount={fnanceOverallFeeStatistics?.internal_os_fees ?? 0}
            label="outstanding_internal_fees"
            onAction={() => {}}
          />
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/excess-fee.svg`}
            amount={fnanceOverallFeeStatistics?.excess_fees ?? 0}
            label="excess_fees_paid_by_student"
            onAction={() => {}}
          />
        </div>

        <div className={style.osc_container_inner}>
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/total-deposit.svg`}
            amount={fnanceOverallFeeStatistics?.total_deposits ?? 0}
            label="deposits_to_be_refunded"
            onAction={() => {}}
          />
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/total-income.svg`}
            amount={fnanceOverallFeeStatistics?.incomes ?? 0}
            label="other_incomes"
            onAction={() => {}}
          />
          <OverallStatisticsCard
            iconUrl={`${assestsUserFinanceUrl}/total-expense.svg`}
            amount={fnanceOverallFeeStatistics?.expenses ?? 0}
            label="other_expenses"
            onAction={() => {}}
          />
        </div>
      </div>

      {/* <div className={style.osc_container}
      style={{

      }}
      > */}
      <CreateButton
        label="admission_fees_statitics"
        onAction={onAdmissionFeeStatistics}
        customStyle={{
          width: "fit-content",
        }}
      />
      {/* </div> */}
    </>
  );
};

export default OverallStatistics;
