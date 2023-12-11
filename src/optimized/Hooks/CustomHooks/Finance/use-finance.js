import { useFinanceDashboardMaster } from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";

export const useFinance = ({ fid, mid }) => {
  const {
    financeDashboardMaster,
    financeDashboardMasterLoading,
    financeDashboardMasterRefetch,
  } = useFinanceDashboardMaster({
    data: {
      fid: fid,
      mid: mid ?? "",
    },
    skip: !fid,
  });

  return {
    financeDashboardMaster,
    financeDashboardMasterLoading,
    financeDashboardMasterRefetch,
  };
};
