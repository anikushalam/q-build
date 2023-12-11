import React from "react";
import style from "./Internal.module.css";
import moment from "moment";

function InsReport({ repay }) {


  return (
    <div className={style.internal}>
      <div className={style.table1container}>
        <table className={style.table1}>
          <tr>
            <th className={style.sr}>Date & Time</th>
            <th className={style.name}>Report</th>
            <th className={style.tottal}>Transaction Id</th>

            <th className={style.amt}>Amount</th>
            <th className={style.review}>Status</th>
          </tr>
        </table>
      </div>

      <div className={style.table2container}>
        <table className={style.table2}>
          {repay?.map((rm, index) => (
            <tr key={index}>
              <td className={style.sr2}>
                <div className={style.dattimee}>
                  <p>
                    Date : <span>{moment(rm?.createdAt).format("LL")}</span>
                  </p>
                  <p>
                    Time : <span>{moment(rm?.createdAt).format("LT")}</span>
                  </p>
                </div>
              </td>
              <td className={style.name2}>
                <div className={style.dattimee}>
                  <p className={style.generalized}>{rm?.message}</p>
                </div>
              </td>
              <td className={style.tottal2}>
                <div className={style.id}>
                  <p>
                    <span>{rm?.txnId}</span>

                  </p>
                </div>
              </td>
              <td className={style.amt2}>
                <div className={style.id}>
                  <p>
                    Rs : <span>{rm?.repayAmount}</span>
                  </p>
                </div>
              </td>
              <td className={style.review2}>
                <div className={style.id}>
                  {rm?.repayStatus === "Pending" ? (
                    <p className={style.tr}>Pending</p>
                  ) : (
                    <p className={style.pe}>Transfered</p>
                  )}
                </div>
              </td>
              <td className={style.dots2}>
                <div className={style.dotsdiv}>
                  <img src="/images/dots-dark-icon.svg" alt="Menu" />
                </div>
              </td>
            </tr>

          ))}
          <div className={style.divider} />
        </table>
      </div>
    </div>
  );
}

export default InsReport;
