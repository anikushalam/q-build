import {
  useEditFinanceHeadMutation,
  useFetchFinanceDetailQuery,
  useFetchFinanceRemainBalanceQuery,
  useGetPaymentDetailQuery,
  useUploadFinanceBankMutation,
  useFinanceEditBankMutation,
  useFinanceRemoveBankMutation,
} from "../../services/financeAPI";

export const useEditFinanceHead = () => {
  const [editFinanceHead] = useEditFinanceHeadMutation();
  return [editFinanceHead];
};
export const useFinanceDetail = (args) => {
  const { data: financeDetail, refetch: financeDetailRefetch } =
    useFetchFinanceDetailQuery(
      {
        fid: args.id,
        mod_id: "",
      },
      { skip: args.skip }
    );
  return { financeDetail, financeDetailRefetch };
};

export const useFinanceRemainBalance = (args) => {
  const { data: financeRemainBalance, refetch: financeRemainBalanceRefetch } =
    useFetchFinanceRemainBalanceQuery(args.id, { skip: args.skip });
  return { financeRemainBalance, financeRemainBalanceRefetch };
};

export const useGetPaymentDetail = (args) => {
  const { data: getPaymentDetail, refetch: getPaymentDetailRefetch } =
    useGetPaymentDetailQuery(args.id, { skip: args.skip });
  return { getPaymentDetail, getPaymentDetailRefetch };
};

export const useFillBankForm = () => {
  const [fillBankForm] = useUploadFinanceBankMutation();
  return [fillBankForm];
};

export const useFillBankEditForm = () => {
  const [fillBankEditForm] = useFinanceEditBankMutation();
  return [fillBankEditForm];
};
export const useFillBankRemoveForm = () => {
  const [fillBankRemoveForm] = useFinanceRemoveBankMutation();
  return [fillBankRemoveForm];
};
