import React, { useState } from "react";
import style from "./PayModal.module.css";
import { Dialog } from "@mui/material";
import { useFetchReferralPaymentMutation } from "../../../../../services/superAdminAPI";

function PayModal({ open, hideModal, amount, aid, user, fetch }) {
  const [payReferral] = useFetchReferralPaymentMutation()
  const [price, setPrice] = useState({
    value: amount
  })

  const referralPayment = () =>{
    if(price.value <= amount){
      payReferral({
        aid: aid && aid,
        amount: price && price?.value,
        uid: user && user
      })
      .then((res) => {
        if(res.data.status){
          fetch()
          hideModal(false)
        }
      })
    }
  }
  return (  
    <Dialog open={open} onClose={() => hideModal(false)}>
      <div className={style.addDisplay}>
        <div className={style.head}>Pay</div>
        <div className={style.body}>
          <h6>Amount</h6>

          <div className={style.input}>
            <input type="text" value={price.value} name="value" required onChange={(e) => {setPrice({...price, value: e.target.value})}}/>
          </div>

          <div className={style.btn} onClick={referralPayment}>Confirm</div>
        </div>
      </div>
    </Dialog>
  );
}

export default PayModal;
