import React from "react";
import style from "./Feedback.module.css";
// import moment from "moment";

function Feedback() {
  return (
    <div className={style.internal}>
      <div className={style.table1container}>
        <table className={style.table1}>
          <tr>
            <th className={style.sr}>Date</th>
            <th className={style.name}>Name</th>
            <th className={style.behave}>Good Or Bad</th>
            <th className={style.tottal}>Message</th>
            <th className={style.amt}>Ratings</th>
          </tr>
        </table>
      </div>

      <div className={style.table2container}>
        <table className={style.table2}>
          <>
            <tr>
              <td className={style.sr2}>
                <div className={style.dattimee}>
                  <p>
                    Date : <span>rghtyj</span>
                  </p>
                </div>
              </td>
              <td className={style.name2}>
                <div className={style.details}>
                  <img src="/images/ins_default_profile.svg" alt="" />
                  <div className={style.text}>
                    <h6 className={style.email}>rthtyh</h6>
                    <p className={style.email}>rtshtyjh</p>
                  </div>
                </div>
              </td>

              <td className={style.behave2}>
                <div className={style.details}>
                  <div className={style.text}>
                    <h6 className={`${style.email} ${style.bad}`}>Bad</h6>
                  </div>
                </div>
              </td>

              <td className={style.tottal2}>
                <div className={style.details}>
                  <div className={style.text}>
                    <p className={style.email}>
                      Lorem ipsum dolor sit amet, adipiscing elit. Tellus massa
                      amet
                    </p>
                  </div>
                </div>
              </td>
              <td className={style.amt2}>
                <div className={style.id}>
                  <p>4.5</p>
                  <img src="/images/admin/star-red.svg" alt="" />
                </div>
              </td>
            </tr>

            <div className={style.divider} />

            <tr>
              <td className={style.sr2}>
                <div className={style.dattimee}>
                  <p>
                    Date : <span>rghtyj</span>
                  </p>
                </div>
              </td>
              <td className={style.name2}>
                <div className={style.details}>
                  <img src="/images/ins_default_profile.svg" alt="" />
                  <div className={style.text}>
                    <h6 className={style.email}>rthtyh</h6>
                    <p className={style.email}>rtshtyjh</p>
                  </div>
                </div>
              </td>

              <td className={style.behave2}>
                <div className={style.details}>
                  <div className={style.text}>
                    <h6 className={`${style.email} ${style.good}`}>Good</h6>
                  </div>
                </div>
              </td>

              <td className={style.tottal2}>
                <div className={style.details}>
                  <div className={style.text}>
                    <p className={style.email}>
                      Lorem ipsum dolor sit amet, adipiscing elit. Tellus massa
                      amet
                    </p>
                  </div>
                </div>
              </td>
              <td className={style.amt2}>
                <div className={style.id}>
                  <p>4.5</p>
                  <img src="/images/admin/star-yell.svg" alt="" />
                </div>
              </td>
            </tr>

            <div className={style.divider} />
          </>
        </table>
      </div>
    </div>
  );
}

export default Feedback;
