import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import StringLength from "../../../../../Custom/Validation/StringLength";
import { onWhichInstallment } from "../../../../../Functions/Finance/Installment";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import { Notfication } from "../../../../../validation/Snackbar";
import style from "./FeesStructure.module.css";

const AddFeeHead = ({
  feesStructure,
  allInstallment,
  onSetNewIndex,
  setFeeHead,
  setFeeHeadAmount,
  feeHead,
  FeeHeadAmount,
  activePopupIndex,
  flowAs,
}) => {
  const { t } = useTranslation();
  const [leftAmount, setLeftAmount] = useState(
    feesStructure?.total_admission_fees ?? 0
  );

  const [addFeeHead, setAddFeeHead] = useState(feeHead ?? []);
  const [totalFeeHeadAmount, setTotalFeeHeadAmount] = useState(
    FeeHeadAmount ?? 0
  );
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  useEffect(() => {
    setLeftAmount(feesStructure?.total_admission_fees);
  }, [feesStructure?.total_admission_fees]);
  useEffect(() => {
    if (addFeeHead) {
      let total = 0;
      for (let i = 0; i < addFeeHead?.length; i++) {
        total += +addFeeHead[i]?.head_amount;
      }
      setTotalFeeHeadAmount(total);
    }
  }, [addFeeHead]);
  //   console.info("this is final version", allInstallment);
  const onClose = () => {
    onSetNewIndex(5);
  };

  const onAddButton = () => {
    if (leftAmount) {
      onClose();
    }
  };
  const onFeeHeadPriceChange = (e, index) => {
    // console.info("this is onChagew");
    const inputarr = [...addFeeHead];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].head_amount = +e.target.value;
      }
    }
    setAddFeeHead(inputarr);
  };

  const onFeeHeadLabelChange = (e, index) => {
    // console.info("this is onChagew");
    const inputarr = [...addFeeHead];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].head_name = e.target.value;
      }
    }
    setAddFeeHead(inputarr);
  };

  const onMoveNextStep = () => {
    let flag = false;
    let totalAmount = 0;
    for (let i = 0; i <= addFeeHead?.length; i++) {
      if (flowAs === "Transport_Manager") {
        if (totalAmount > feesStructure?.total_admission_fees ?? 0) {
          flag = true;
          break;
        } else {
          totalAmount += +addFeeHead[i]?.head_amount;
        }
      } else {
        if (totalAmount > feesStructure?.applicable_fees ?? 0) {
          flag = true;
          break;
        } else {
          totalAmount += +addFeeHead[i]?.head_amount;
        }
      }
    }
    if (flag) {
      setNotificationState({
        msg:
          flowAs === "Transport_Manager"
            ? `You can't enter amount greater than total admission fees of ${feesStructure?.total_admission_fees}`
            : `You can't enter amount greater than total applicable fees of ${feesStructure?.applicable_fees}`,
        run: true,
      });
    } else {
      onSetNewIndex(3);
      setFeeHead(addFeeHead);
      setFeeHeadAmount(totalFeeHeadAmount);
    }
  };

  return (
    <>
      {activePopupIndex === 2 && (
        <>
          <section className={style.fees_head_title}>
            <h6>{t("total_fees")}</h6>
            <h6>
              {t("rs")}. {feesStructure?.total_admission_fees ?? 0}
            </h6>
          </section>
          {flowAs === "Transport_Manager" ? null : (
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
                {t("rs")}. {feesStructure?.applicable_fees ?? 0}
              </h6>
            </section>
          )}

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
                {t("rs")}. {install?.fees ?? 0}
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
                  {/* <h6>{feehead?.head_name}</h6> */}
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
                  {/* <h6>{feehead?.price}</h6> */}
                </div>
              ))}
            </div>
            <button
              className={style.add_fees_head_btn}
              title="Add Fees"
              onClick={onAddButton}
            >
              {t("add")}
              <img src="/images/add-plus-icon.svg" alt="add" />
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
          <button
            className={style.set_fees_structure_btn}
            title="Next Step"
            onClick={onMoveNextStep}
          >
            <div>{t("preview")}</div>
            <img src="/images/forward-right-icon.svg" alt="next step" />
          </button>
        </>
      )}

      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
    </>
  );
};

export default AddFeeHead;
