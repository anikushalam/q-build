import * as React from "react";

import style from "./StudentTable.module.css";

export default function BasicTable() {
  return (
    <div className={style.internal}>
      <div className={style.table1container}>
        <table className={style.table1}>
          <tr>
            <th className={style.name}>Username</th>
            <th className={style.mailnum}>Contact</th>
            <th className={style.trans}>Date of Birth</th>
            <th className={style.amount}>Gender</th>
            <th className={style.amount}>Location</th>
          </tr>
        </table>
      </div>

      <div className={style.table2container}>
        <table className={style.table2}>
          <>
            <tr>
              <td className={style.name}>
                <div className={style.details}>
                  <img
                    src="/images/ins_default_profile.svg"
                    alt="User Profile Avatar"
                  />
                  <div className={style.text}>
                    <h6 className={style.email}>sandeep_ploytec@1</h6>
                    <p className={style.ga}>fhtyhtuh</p>
                  </div>
                </div>
              </td>
              <td className={style.dattime}>
                <div className={style.text}>
                  <p className={style.email}>thtyhyth</p>
                  <p className={style.email}>gfhgfhtj</p>
                </div>
              </td>
              <td className={style.trans}>
                <div className={style.id}>
                  <p>yhtyjhtyh</p>
                </div>
              </td>
              <td className={style.amount}>
                <div className={style.id}>
                  <p> jyuyuj </p>
                </div>
              </td>

              <td className={style.dots}>
                <div className={style.dotsdiv}>jtyjtyjh</div>
              </td>
            </tr>

            <div className={style.divider} />
          </>
        </table>
      </div>
    </div>
  );
}
