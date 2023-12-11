import React from "react";
import style from "./VerifyModal.module.css";
import { Dialog } from "@mui/material";
import { useFetchVerifyPaymentBankMutation } from "../../../../../services/superAdminAPI";

function VerifyModal({ open, hideModal, aid, insId, fetch }) {
  const [verifyQuery] = useFetchVerifyPaymentBankMutation();

  const verifyBankQuery = () => {
    if (aid !== "" && insId !== "") {
      verifyQuery({
        aid: aid && aid,
        id: insId && insId,
        status: "Verification Process",
      }).then((res) => {
        console.log(res.data.message);
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
        <div className={style.head}>Verification</div>
        <div className={style.body}>
          <div className={style.btn} onClick={verifyBankQuery}>
            Proceed to verify{" "}
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default VerifyModal;
