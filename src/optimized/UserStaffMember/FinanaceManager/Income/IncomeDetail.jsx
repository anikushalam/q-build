import { useTranslation } from "react-i18next";
import style from "./Income.module.css";
import dayjs from "dayjs";
import { useFinanceIncomeDetail } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import Modal from "../../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import FormInputView from "../../../Ui/Input/FormInputView";
import FormFileView from "../../../Ui/Input/FormFileView";
const IncomeDetail = ({ onClose, incomeId }) => {
  const { t } = useTranslation();
  const { financeIncomeDetail } = useFinanceIncomeDetail({
    incomeId: incomeId,
    skip: !incomeId,
  });

  //   console.info("financeIncomeDetail", financeIncomeDetail);
  return (
    <Modal onClose={onClose}>
      <div className={style.income_detail}>
        <div className={style.detailTop}>
          <div className={style.detailTopMid}>
            <h6>
              {financeIncomeDetail?.oneIncome?.incomeFrom
                ? financeIncomeDetail?.oneIncome?.incomeFrom
                : financeIncomeDetail?.oneIncome?.incomeFromUser?.userLegalName}
            </h6>
          </div>
          <div className={style.detailTopMid}>
            <h6>
              {t("rs_only")} {financeIncomeDetail?.oneIncome?.incomeAmount}
            </h6>
          </div>
        </div>
        <UserMemberContentWrapper>
          <FormInputView
            label={`${t("transaction_mode")}: `}
            value={financeIncomeDetail?.oneIncome?.incomeAccount}
            customFormInput={{
              fontWeight: "500",
            }}
          />

          <FormInputView
            label={`${t("description")}: `}
            value={financeIncomeDetail?.oneIncome?.incomeDesc}
            customFormInput={{
              fontWeight: "500",
            }}
          />
          <FormInputView
            label={`${t("day_date")}: `}
            value={dayjs(financeIncomeDetail?.oneIncome?.createdAt).format(
              "MMMM D, YYYY"
            )}
            customFormInput={{
              fontWeight: "500",
            }}
          />
          {financeIncomeDetail?.oneIncome?.incomeAck ? (
            <FormFileView
              label={`${t("acknowlegement")}: `}
              value={{
                key: financeIncomeDetail?.oneIncome?.incomeAck,
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

export default IncomeDetail;
