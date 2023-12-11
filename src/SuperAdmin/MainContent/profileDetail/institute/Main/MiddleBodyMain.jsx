import React from "react";
import style from "./MiddleBodyMain.module.css";

function Item({ label, content }) {
  return (
    <div className={style.item}>
      <h6>{content}</h6>
      <p>{label}</p>
    </div>
  );
}

function MiddleBodyMain({ main }) {
  return (
    <div className={style.middleBodyMain}>
      <div className={style.title}>Bank Details</div>
      <Item label="Account Name" content={main?.bankAccountHolderName}/>
      <Item label="Account Type" content={main?.bankAccountType} />
      <Item label="Account Number" content={main?.bankAccountNumber} />
      <Item label="IFSC Code" content={main?.bankIfscCode} />
      <Item label="Mobile Number" content={`+91 ${main?.bankAccountPhoneNumber}`} />
    </div>
  );
}

export default MiddleBodyMain;
