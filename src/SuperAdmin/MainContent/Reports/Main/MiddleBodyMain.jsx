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

function MiddleBodyMain() {
  return (
    <div className={style.middleBodyMain}>
      <div className={style.title}>Bank Details</div>
      <Item label="Account Name" content="Suresh Ramdas Wagh" />
      <Item label="Account Type" content="Current Account" />
      <Item label="Account Number" content="00125656999000" />
      <Item label="IFSC Code" content="SBI 00 8888 9999" />
      <Item label="Mobile Number" content="+91 8787959610" />
    </div>
  );
}

export default MiddleBodyMain;
