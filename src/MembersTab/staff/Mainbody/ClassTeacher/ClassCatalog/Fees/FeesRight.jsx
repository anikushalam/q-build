import { t } from "i18next";
import React from "react";
import { useState } from "react";
import QLoader from "../../../../../../Loader/QLoader";
import { useClassOneFeesSubmitMutation } from "../../../../../../services/staff_department/classApi";
import { FileNotUpload } from "../../../../../../validation/Snackbar";
import style from "./Fees.module.css";

function FeesRight({
  totalFees,
  feesDetails,
  classOneFees,
  onRefetchQuery,
  cid,
  financeId,
}) {
  const [run, setRun] = useState(false);
  const [msg, setMsg] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [classOneFeesSubmit] = useClassOneFeesSubmitMutation();
  const onSubmitFeesHandler = () => {
    if (classOneFees?.oneFeeRequestStatus?.status === "Requested") {
      setRun(true);
      setMsg(t("already_requested"));
    } else if (parseInt(classOneFees?.off) === 0) {
      setRun(true);
      setMsg(t("amout_greater_than_balance"));
    } else {
      setDisabled((pre) => !pre);
      classOneFeesSubmit({
        fid: financeId,
        cid: cid,
        feesId: feesDetails?._id,
        offlineAmount: {
          amount: parseInt(classOneFees?.off),
        },
      })
        .then(() => {
          onRefetchQuery();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <>
      <div className={style.right}>
        <FileNotUpload msg={msg} run={run} setRun={setRun} />
        <div className={style.rightHead}>
          <h6>{t("total_amount_collected")}</h6>
          <h6>Rs. {totalFees}</h6>
        </div>

        <div className={style.rightBody}>
          <h6>
            {t("exemted_amount")} : Rs.{" "}
            {/* {feesDetails?.exemptList?.length * feesDetails?.feeAmount} */}
            {classOneFees?.exe}
          </h6>
          <h6>
            {t("online_collected_amount")} : Rs.{" "}
            {/* {feesDetails?.onlineList?.length * feesDetails?.feeAmount} */}
            {classOneFees?.on}
          </h6>
          <h6>
            {t("offline_collected_amount")} : Rs. {classOneFees?.off}
          </h6>

          {classOneFees?.off > 0 ? (
            <div className={style.btnContainer}>
              <div className={style.btn} onClick={onSubmitFeesHandler}>
                {classOneFees?.oneFeeRequestStatus?.status === "Requested"
                  ? t("requested")
                  : t("submit")}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {disabled && <QLoader />}
    </>
  );
}

export default FeesRight;
