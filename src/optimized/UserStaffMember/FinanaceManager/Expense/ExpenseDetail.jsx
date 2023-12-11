import { useTranslation } from "react-i18next";
import style from "../Income/Income.module.css";
import dayjs from "dayjs";
import Modal from "../../../Ui/Modal/Modal";
import { useFinanceExpenseDetail } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import FormInputView from "../../../Ui/Input/FormInputView";
import FormFileView from "../../../Ui/Input/FormFileView";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
const ExpenseDetail = ({ onClose, expenseId }) => {
  const { t } = useTranslation();
  const { financeExpenseDetail } = useFinanceExpenseDetail({
    expenseId: expenseId,
    skip: !expenseId,
  });

  // console.info("financeExpenseDetail", financeExpenseDetail);
  return (
    <Modal onClose={onClose}>
      <div className={style.income_detail}>
        <div className={style.detailTop}>
          <div className={style.detailTopMid}>
            <h6>
              {financeExpenseDetail?.oneExpense?.expensePaid
                ? financeExpenseDetail?.oneExpense?.expensePaid
                : financeExpenseDetail?.oneExpense?.expensePaidUser
                    ?.userLegalName}
            </h6>
          </div>
          <div className={style.detailTopMid}>
            <h6>
              {t("rs_only")}. {financeExpenseDetail?.oneExpense?.expenseAmount}
            </h6>
          </div>
        </div>
        <UserMemberContentWrapper>
          <FormInputView
            label={`${t("transaction_mode")}: `}
            value={financeExpenseDetail?.oneExpense?.expenseAccount}
            customFormInput={{
              fontWeight: "500",
            }}
          />

          <FormInputView
            label={`${t("description")}: `}
            value={financeExpenseDetail?.oneExpense?.expenseDesc}
            customFormInput={{
              fontWeight: "500",
            }}
          />
          <FormInputView
            label={`${t("day_date")}: `}
            value={dayjs(financeExpenseDetail?.oneExpense?.createdAt).format(
              "MMMM D, YYYY"
            )}
            customFormInput={{
              fontWeight: "500",
            }}
          />
          {financeExpenseDetail?.oneExpense?.expenseAck ? (
            <FormFileView
              label={`${t("acknowlegement")}: `}
              value={{
                key: financeExpenseDetail?.oneExpense?.expenseAck,
              }}
              customFormInput={{
                fontWeight: "500",
              }}
            />
          ) : null}
        </UserMemberContentWrapper>
      </div>
    </Modal>
  );
};

export default ExpenseDetail;
