import { useTranslation } from "react-i18next";
import style from "../FeesStructure.module.css";
import FormInputView from "../../../../Ui/Input/FormInputView";
import CreateButton from "../../../../Ui/Button/CreateButton";
import UserMemberContentWrapper from "../../../../Ui/UserMember/UserMemberContentWrapper";
import Modal from "../../../../Ui/Modal/Modal";
import BorderBottom from "../../../../Ui/Border/BorderBottom";
import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";

const AddFeeStructurePreview = ({
  onClose,
  structure,
  allInstallment,
  feeHead,
  feeHeadAmount,
  openAs,
  onCreate,
}) => {
  const { t } = useTranslation();

  return (
    <Modal>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <img
                src={`${assestsUserFinanceUrl}/back-arrow.svg`}
                alt="close icon"
                onClick={onClose}
              />
              <h6>{t("fee_structure_preview")}</h6>
            </div>
          </div>
        </UserMemberContentWrapper>
        <BorderBottom />
        <UserMemberContentWrapper
          customStyle={{
            paddingTop: "0",
          }}
        >
          <FormInputView
            label={`${t("fee_structure_name")}: `}
            value={structure?.structure_name}
          />
          <FormInputView
            label={`${t("batch")}: `}
            value={structure?.batch_master?.batchName}
          />
          <FormInputView
            label={t("fees_category_name")}
            value={structure?.category_master?.category_name}
          />
          <FormInputView
            label={t("standard_master")}
            value={structure?.class_master?.className}
          />

          <section className={style.fees_head_title}>
            <h6>{t("total_fees")}</h6>
            <h6>
              {t("rs_only")} {structure?.total_admission_fees ?? 0}
            </h6>
          </section>
          <section className={style.fees_head_installment}>
            <h6
              style={{
                color: "#002BBE",
              }}
            >
              {t("applicable_fees_only")}
            </h6>
            <h6
              style={{
                color: "#002BBE",
              }}
            >
              {t("rs_only")} {structure?.applicable_fees ?? 0}
            </h6>
          </section>

          {allInstallment?.map((install, index) => (
            <section className={style.fees_head_installment} key={index}>
              <h6
                style={{
                  textTransform: "capitalize",
                }}
              >
                {t(onWhichInstallment(index))} {t("installment")}
              </h6>
              <h6>
                {t("rs_only")} {install?.fees ?? 0}
              </h6>
            </section>
          ))}
          <section className={style.table_container}>
            <div className={style.table_heading}>
              <h6>{t("fee_heads")}</h6>
              <h6>{t("amount")}</h6>
            </div>
            <div className={style.table_body}>
              {feeHead?.map((feehead, index) => (
                <div className={style.table_body_list} key={index}>
                  <h6>{feehead?.head_name}</h6>
                  <h6>{feehead?.head_amount}</h6>
                </div>
              ))}
            </div>
            <div className={style.table_body}>
              <div
                className={style.table_body_list}
                style={{
                  borderTopColor: "rgba(18, 18, 18, 0.8)",
                  borderTopWidth: "2px",
                  borderTopStyle: "solid",
                  borderBottomColor: "rgba(18, 18, 18, 0.8)",
                  borderBottomWidth: "2px",
                }}
              >
                <h6 className={style.fees_total}>{t("total")}</h6>
                <h6 className={style.fees_total}>{feeHeadAmount ?? 0}</h6>
              </div>
            </div>
          </section>

          <CreateButton
            label={
              openAs === "EDIT"
                ? "update_fees_structure"
                : "create_fees_structure"
            }
            onAction={onCreate}
          />
        </UserMemberContentWrapper>
      </div>
    </Modal>
  );
};

export default AddFeeStructurePreview;

export const onWhichInstallment = (val) => {
  if (val === 0) return "first";
  else if (val === 1) return "second";
  else if (val === 2) return "third";
  else if (val === 3) return "foutrh";
  else if (val === 4) return "fivth";
  else if (val === 5) return "sixth";
  else if (val === 6) return "seventh";
  else if (val === 7) return "eighth";
  else if (val === 8) return "ninth";
  else if (val === 9) return "ten";
  else if (val === 10) return "eleven";
  else return "tweleve";
};
