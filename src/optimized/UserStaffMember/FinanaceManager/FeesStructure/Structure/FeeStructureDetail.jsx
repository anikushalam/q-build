import { useFinanceFeeStructureDetail } from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "../../../../Ui/Border/BorderBottom";
import FormInputView from "../../../../Ui/Input/FormInputView";
import Modal from "../../../../Ui/Modal/Modal";
import { useTranslation } from "react-i18next";
import style from "../FeesStructure.module.css";
import UserMemberContentWrapper from "../../../../Ui/UserMember/UserMemberContentWrapper";
import { useState } from "react";
import FeeStructureDetailMenu from "./FeeStructureDetailMenu";

const FeeStructureDetail = ({
  structureId,
  onClose,
  instituteId,
  fid,
  did,
}) => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState("");

  const { financeFeeStructureDetail } = useFinanceFeeStructureDetail({
    fsid: structureId,
    skip: !structureId,
  });
  let totalHead = 0;
  if (financeFeeStructureDetail?.structure?.fees_heads?.length > 0) {
    financeFeeStructureDetail?.structure?.fees_heads?.map(
      (value) => (totalHead += value?.head_amount)
    );
  }

  const onMenu = () => {
    if (financeFeeStructureDetail?.structure)
      setOpenMenu(() => financeFeeStructureDetail?.structure);
  };

  const onCloseEdit = () => {
    setOpenMenu("");
  };
  return (
    <>
      {openMenu ? (
        <FeeStructureDetailMenu
          onClose={onCloseEdit}
          openMenu={openMenu}
          instituteId={instituteId}
          fid={fid}
          did={did}
        />
      ) : (
        <Modal onClose={onClose}>
          <div className={style.modal_container}>
            <UserMemberContentWrapper>
              <div className={style.modal_container_outer_header}>
                <div className={style.modal_container_header}>
                  <h6>{t("fee_structure")}</h6>
                </div>
                <img
                  src={`${assestsUserFinanceUrl}/edit.svg`}
                  alt="close icon"
                  onClick={onMenu}
                />
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
                value={
                  financeFeeStructureDetail?.structure?.unique_structure_name ??
                  ""
                }
              />

              <FormInputView
                label={`${t("batch")}: `}
                value={
                  financeFeeStructureDetail?.structure?.batch_master?.batchName
                }
              />
              <FormInputView
                label={`${t("fees_category_name")}`}
                value={
                  financeFeeStructureDetail?.structure?.category_master
                    ?.category_name ?? ""
                }
              />
              <FormInputView
                label={`${t("standard_master")}`}
                value={
                  financeFeeStructureDetail?.structure?.class_master
                    ?.className ?? ""
                }
              />

              <section className={style.fees_head_title}>
                <h6>{t("total_fees")}</h6>
                <h6>
                  {t("rs_only")}{" "}
                  {financeFeeStructureDetail?.structure?.total_admission_fees ??
                    0}
                </h6>
              </section>

              <section className={style.fees_head_installment}>
                <h6
                  style={{
                    color: "#002BBE",
                  }}
                >
                  {t("applicable_fees_only_payable")} {" : "}
                </h6>
                <h6
                  style={{
                    color: "#002BBE",
                  }}
                >
                  {t("rs_only")}{" "}
                  {financeFeeStructureDetail?.structure?.applicable_fees ?? 0}
                </h6>
              </section>

              {financeFeeStructureDetail?.structure?.one_installments?.fees ? (
                <InstallmentCard
                  label="first"
                  amount={
                    financeFeeStructureDetail?.structure?.one_installments?.fees
                  }
                />
              ) : null}
              {financeFeeStructureDetail?.structure?.two_installments?.fees ? (
                <InstallmentCard
                  label="second"
                  amount={
                    financeFeeStructureDetail?.structure?.two_installments?.fees
                  }
                />
              ) : null}
              {financeFeeStructureDetail?.structure?.three_installments
                ?.fees ? (
                <InstallmentCard
                  label="third"
                  amount={
                    financeFeeStructureDetail?.structure?.three_installments
                      ?.fees
                  }
                />
              ) : null}
              {financeFeeStructureDetail?.structure?.four_installments?.fees ? (
                <InstallmentCard
                  label="fourth"
                  amount={
                    financeFeeStructureDetail?.structure?.four_installments
                      ?.fees
                  }
                />
              ) : null}
              {financeFeeStructureDetail?.structure?.five_installments?.fees ? (
                <InstallmentCard
                  label="fifth"
                  amount={
                    financeFeeStructureDetail?.structure?.five_installments
                      ?.fees
                  }
                />
              ) : null}
              {financeFeeStructureDetail?.structure?.six_installments?.fees ? (
                <InstallmentCard
                  label="sixth"
                  amount={
                    financeFeeStructureDetail?.structure?.six_installments?.fees
                  }
                />
              ) : null}
              {financeFeeStructureDetail?.structure?.seven_installments
                ?.fees ? (
                <InstallmentCard
                  label="seventh"
                  amount={
                    financeFeeStructureDetail?.structure?.seven_installments
                      ?.fees
                  }
                />
              ) : null}
              {financeFeeStructureDetail?.structure?.eight_installments
                ?.fees ? (
                <InstallmentCard
                  label="eight"
                  amount={
                    financeFeeStructureDetail?.structure?.eight_installments
                      ?.fees
                  }
                />
              ) : null}
              {financeFeeStructureDetail?.structure?.nine_installments?.fees ? (
                <InstallmentCard
                  label="ninth"
                  amount={
                    financeFeeStructureDetail?.structure?.nine_installments
                      ?.fees
                  }
                />
              ) : null}
              {financeFeeStructureDetail?.structure?.ten_installments?.fees ? (
                <InstallmentCard
                  label="ten"
                  amount={
                    financeFeeStructureDetail?.structure?.ten_installments?.fees
                  }
                />
              ) : null}
              {financeFeeStructureDetail?.structure?.eleven_installments
                ?.fees ? (
                <InstallmentCard
                  label="eleventh"
                  amount={
                    financeFeeStructureDetail?.structure?.eleven_installments
                      ?.fees
                  }
                />
              ) : null}
              {financeFeeStructureDetail?.structure?.tweleve_installments
                ?.fees ? (
                <InstallmentCard
                  label="twelevth"
                  amount={
                    financeFeeStructureDetail?.structure?.tweleve_installments
                      ?.fees
                  }
                />
              ) : null}

              <section className={style.table_container}>
                <div className={style.table_heading}>
                  <h6>{t("fee_heads")}</h6>
                  <h6>{t("amount")}</h6>
                </div>
                <div className={style.table_body}>
                  {financeFeeStructureDetail?.structure?.fees_heads?.map(
                    (feehead, index) => (
                      <div className={style.table_body_list} key={index}>
                        <h6>{feehead?.head_name}</h6>
                        <h6>{feehead?.head_amount}</h6>
                      </div>
                    )
                  )}
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
                    <h6 className={style.fees_total}>{totalHead}</h6>
                  </div>
                </div>
              </section>
            </UserMemberContentWrapper>
          </div>
        </Modal>
      )}
    </>
  );
};

export default FeeStructureDetail;

const InstallmentCard = ({ label, amount }) => {
  const { t } = useTranslation();
  return (
    <section className={style.fees_head_installment}>
      <h6>
        {t(label)} {t("installment")}
      </h6>
      <h6>
        {t("rs_only")} {amount ?? 0}
      </h6>
    </section>
  );
};
