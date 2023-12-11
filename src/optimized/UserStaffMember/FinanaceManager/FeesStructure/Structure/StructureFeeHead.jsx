import BorderBottom from "../../../../Ui/Border/BorderBottom";
import SetButton from "../../../../Ui/Button/SetButton";
import Modal from "../../../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../../../Ui/UserMember/UserMemberContentWrapper";
import { useTranslation } from "react-i18next";
import style from "../FeesStructure.module.css";
import { useEffect, useState } from "react";
import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import SelectMasterFeeHead from "./SelectMasterFeeHead";

const StructureFeeHead = ({
  structure,
  feeHead,
  setStep,
  setFeeHead,
  setFeeHeadAmount,
  feeHeadAmount,
  allInstallment,
  fid,
}) => {
  const { t } = useTranslation();
  const [totalFeeHeadAmount, setTotalFeeHeadAmount] = useState(
    feeHeadAmount ?? 0
  );
  const [addFeeHead, setAddFeeHead] = useState(feeHead ?? []);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (addFeeHead) {
      let total = 0;
      for (let i = 0; i < addFeeHead?.length; i++) {
        total += +addFeeHead[i]?.head_amount;
      }
      setTotalFeeHeadAmount(total);
    }
  }, [addFeeHead]);

  const onFeeHeadPriceChange = (e, index) => {
    const inputarr = [...addFeeHead];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].head_amount = +e.target.value;
      }
    }
    setAddFeeHead(inputarr);
  };

  const onFeeHeadLabelChange = (e, index) => {
    const inputarr = [...addFeeHead];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].head_name = e.target.value;
      }
    }
    setAddFeeHead(inputarr);
  };
  const onSetFeeHead = () => {
    setFeeHead(addFeeHead);
    setFeeHeadAmount(totalFeeHeadAmount);
    setStep(3);
  };

  const onAddButton = () => {
    setOpen((pre) => !pre);
  };
  return (
    <>
      {open ? (
        <SelectMasterFeeHead
          fid={fid}
          setFeeHead={setAddFeeHead}
          onClose={onAddButton}
        />
      ) : (
        <Modal>
          <div className={style.modal_container}>
            <UserMemberContentWrapper>
              <div className={style.modal_container_outer_header}>
                <div className={style.modal_container_header}>
                  <h6>{t("fee_heads")}</h6>
                </div>
                <img
                  src={`${assestsUserFinanceUrl}/close.svg`}
                  alt="close icon"
                  onClick={() => setStep(1)}
                />
              </div>
            </UserMemberContentWrapper>
            <BorderBottom />
            <UserMemberContentWrapper
              customStyle={{
                paddingTop: "0",
              }}
            >
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
                  {addFeeHead?.map((feehead, index) => (
                    <div className={style.table_body_list} key={index}>
                      <input
                        type={"text"}
                        value={feehead?.head_name}
                        onChange={(e) => onFeeHeadLabelChange(e, index)}
                        className={style.fee_head_name_input}
                      />
                      <input
                        type={"number"}
                        value={feehead?.head_amount}
                        onChange={(e) => onFeeHeadPriceChange(e, index)}
                        className={style.fee_head_amount_input}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className={style.add_fees_head_btn}
                  title="Add Fees"
                  onClick={onAddButton}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {t("add")}
                  <img src={`${assestsUserFinanceUrl}/plus.svg`} alt="add" />
                </button>
                <div className={style.table_body}>
                  <div
                    className={style.table_body_list}
                    style={{
                      borderTopColor: "rgba(18, 18, 18, 0.5)",
                      borderTopWidth: "0.5px",
                      borderTopStyle: "solid",
                      borderBottomColor: "rgba(18, 18, 18, 0.8)",
                      borderBottomWidth: "2px",
                    }}
                  >
                    <h6 className={style.fees_total}>{t("total")}</h6>
                    <h6 className={style.fees_total}>{totalFeeHeadAmount}</h6>
                  </div>
                </div>
              </section>

              <SetButton label="preview" onAction={onSetFeeHead} />
            </UserMemberContentWrapper>
          </div>
        </Modal>
      )}
    </>
  );
};

export default StructureFeeHead;
const onWhichInstallment = (val) => {
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
