import React from "react";
import style from "./Coins.module.css";
// import { useGetUserCoins } from "../../../../../../../hooks/setting-api";
// import { useSelector } from "react-redux";

function Coins() {
  // const id=useSelector((state)=>state.idChange.id)
  // const { data: getUserCoins } = useGetUserCoins({
  //   id:id,
  //   skip:!id
  // });
  return (
    <div className={style.coins}>
      <div className={style.coinsTop}>
        <div className={style.totalcoins}>
          <div className={style.number}>
            <p>155</p>
          </div>
          <div className={style.text}>
            <h6>Totol Q coins earned</h6>
            <p>(Can realise amount only after 10K amount.)</p>
          </div>
        </div>

        <div className={style.text1}>
          <h6>Totol Q coins earned</h6>
          <p>(Can realise amount only after 10K amount.)</p>
        </div>
      </div>

      <div className={style.coinsDown}>
        <div className={style.withdraw}>Withdraw</div>
      </div>
    </div>
  );
}

export default Coins;
