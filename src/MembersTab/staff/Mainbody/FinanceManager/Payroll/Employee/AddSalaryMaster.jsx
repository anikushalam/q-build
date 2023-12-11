import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../FeesStructure/FeesStructure.module.css";

const AddSalaryMaster = ({
  setActivePopupIndex,
  setFilterBy,
  addFeeHead,
  setAddFeeHead,
  addFeeHeadDeduction,
  setAddFeeHeadDecution,
  setBasicSalary,
  basickSalary,
  setTotalValidation,
  activePopupIndex,
}) => {
  const { t } = useTranslation();
  const [grossTotal, setGrossTotal] = useState(0);
  const [netTotal, setNetTotal] = useState(0);
  const onAddButton = (val) => {
    setFilterBy(val);
    setActivePopupIndex(2);
  };

  useEffect(() => {
    if (activePopupIndex === 1) {
      let gTotal = 0;
      let nTotal = 0;
      const inputarr = [...addFeeHead];
      for (let inp = 0; inp < inputarr?.length; inp++) {
        gTotal += +inputarr[inp].master_amount;
        nTotal += +inputarr[inp].master_amount;
      }
      const inputarr1 = [...addFeeHeadDeduction];
      for (let inp = 0; inp < inputarr1?.length; inp++) {
        nTotal -= +inputarr1[inp].master_amount;
      }
      setGrossTotal(gTotal);
      setNetTotal(nTotal);
      setTotalValidation(nTotal);
    }
  }, [activePopupIndex]);
  const onFeeHeadPriceChangeGross = (e, index) => {
    // console.info("this is onChagew");
    let gTotal = 0;
    let nTotal = 0;
    const inputarr = [...addFeeHead];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].master_amount = +e.target.value;
      }
    }
    for (let inp = 0; inp < inputarr?.length; inp++) {
      gTotal += +inputarr[inp].master_amount;
      nTotal += +inputarr[inp].master_amount;
    }
    const inputarr1 = [...addFeeHeadDeduction];
    for (let inp = 0; inp < inputarr1?.length; inp++) {
      nTotal -= +inputarr1[inp].master_amount;
    }
    setAddFeeHead(inputarr);
    setGrossTotal(gTotal);
    setNetTotal(nTotal);
    setTotalValidation(nTotal);
  };
  const onFeeHeadPriceChangeNet = (e, index) => {
    // console.info("this is onChagew");
    let nTotal = grossTotal;
    const inputarr = [...addFeeHeadDeduction];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].master_amount = +e.target.value;
      }
    }
    for (let inp = 0; inp < inputarr?.length; inp++) {
      nTotal -= +inputarr[inp].master_amount;
    }
    setAddFeeHeadDecution(inputarr);
    setNetTotal(nTotal);
    setTotalValidation(nTotal);
  };
  return (
    <>
      <section
        className={style.table_container}
        style={{
          marginTop: "1rem",
        }}
      >
        <div className={style.table_heading}>
          <h6>{t("particular")}</h6>
          <h6>{t("amount")}</h6>
        </div>
        <div className={style.table_body}>
          <div className={style.table_body_list}>
            <h6>Basic Salary</h6>
            <input
              type={"tel"}
              value={basickSalary}
              onChange={(e) => setBasicSalary(+e.target.value)}
              className={style.fee_head_amount_input}
              placeholder="0"
            />
          </div>
          {addFeeHead?.map((feehead, index) => (
            <div className={style.table_body_list} key={index}>
              <h6>{feehead?.master_name}</h6>
              <input
                type={"tel"}
                value={feehead?.master_amount}
                onChange={(e) => onFeeHeadPriceChangeGross(e, index)}
                className={style.fee_head_amount_input}
              />
              {/* <h6>{feehead?.price}</h6> */}
            </div>
          ))}
        </div>
        <button
          className={style.add_fees_head_btn}
          title="Add Fees"
          onClick={() => onAddButton("Particular")}
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
            <h6 className={style.fees_total}>{t("gross_total")}</h6>
            <h6 className={style.fees_total}>{grossTotal + basickSalary}</h6>
          </div>
        </div>

        <div className={style.table_body}>
          {addFeeHeadDeduction?.map((feehead, index) => (
            <div className={style.table_body_list} key={index}>
              <h6>{feehead?.master_name}</h6>
              <input
                type={"tel"}
                value={feehead?.master_amount}
                onChange={(e) => onFeeHeadPriceChangeNet(e, index)}
                className={style.fee_head_amount_input}
              />
              {/* <h6>{feehead?.price}</h6> */}
            </div>
          ))}
        </div>
        <button
          className={style.add_fees_head_btn}
          title="Add Fees"
          onClick={() => onAddButton("Deduction")}
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
            <h6 className={style.fees_total}>{t("net_total")}</h6>
            <h6 className={style.fees_total}>{netTotal + basickSalary}</h6>
          </div>
        </div>
      </section>
      {/* {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )} */}
    </>
  );
};

export default AddSalaryMaster;
