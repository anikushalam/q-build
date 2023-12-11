import React, { useState, useEffect } from "react";
import style from "./PayModal.module.css";
import { Dialog } from "@mui/material";
import { useGetRepayAmountMutation } from "../../../../../services/superAdminAPI";

function PayModal({ open, hideModal, amount, aid, user, fetch }) {
  const [payReferral] = useGetRepayAmountMutation();
  const [price, setPrice] = useState({
    value: amount,
    message: "",
    txnId: "",
    p_amount: "",
  });

  useEffect(() => {
    if (amount) {
      setPrice((prev) => ({
        ...prev,
        value: amount,
      }));
    }
  }, [amount]);

  const referralPayment = () => {
    if (price.value <= amount && price.message !== "" && price.txnId !== "") {
      payReferral({
        aid: aid && aid,
        message: price.message,
        txnId: price?.txnId,
        t_amount: price?.value,
        p_amount: price.p_amount,
        uid: user && user,
      }).then((res) => {
        if (res.data.status) {
          fetch();
          hideModal(false);
        }
      });
    }
  };
  return (
    <Dialog open={open} onClose={() => hideModal(false)}>
      <div className={style.addDisplay}>
        <div className={style.head}>Pay</div>
        <div className={style.body}>
          <h6>Re-Pay Amount</h6>

          <div className={style.input}>
            <input
              type="text"
              value={price.p_amount}
              name="value"
              required
              onChange={(e) => {
                setPrice({ ...price, p_amount: e.target.value });
              }}
            />
          </div>

          <div className={style.input}>
            <label htmlFor="message">Enter Message (regarding Repay)</label>
            <input
              type="text"
              id="message"
              value={price.message}
              name="message"
              required
              onChange={(e) => {
                setPrice({ ...price, message: e.target.value });
              }}
            />
          </div>

          <div className={style.input}>
            <label htmlFor="id">Txn Id</label>
            <input
              type="text"
              id="id"
              value={price.txnId}
              name="txnId"
              required
              onChange={(e) => {
                setPrice({ ...price, txnId: e.target.value });
              }}
            />
          </div>

          <div className={style.btn} onClick={referralPayment}>
            Confirm & Pay
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default PayModal;
