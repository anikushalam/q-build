import React from "react";
import style from "./Internal.module.css";
import moment from "moment";
import { imageShowUrl } from "../../../../services/BaseUrl";

function Internal({ internalData }) {
  return (
    <div className={style.internal}>
      <div className={style.table1container}>
        <table className={style.table1}>
          <tr>
            <th className={style.dattime}>Date & Time</th>
            <th className={style.name}>Name</th>
            <th className={style.trans}>Transaction id</th>
            <th className={style.amount}>Amount</th>
            <th className={style.purpose}>Purpose</th>
          </tr>
        </table>
      </div>

      <div className={style.table2container}>
        <table className={style.table2}>
          {internalData?.map((st, index) => (
            <>
              <tr key={index}>
                <td className={style.dattime2}>
                  <div className={style.dattimee}>
                    <p>
                      Date : <span>{moment(st?.created_at).format("LL")}</span>
                    </p>
                    <p>
                      Time : <span>{moment(st?.created_at).format("LT")}</span>
                    </p>
                  </div>
                </td>
                <td className={style.name2}>
                  <div className={style.details}>
                    <img
                      src={
                        st?.payment_by_end_user_id?.photoId !== "1"
                          ? `${imageShowUrl}/${st?.payment_by_end_user_id?.profilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      alt="user"
                    />
                    <div className={style.text}>
                      <h6 className={style.email}>
                        {st?.payment_by_end_user_id?.username}
                      </h6>
                      <p className={style.ga}>
                        {st?.payment_by_end_user_id?.userLegalName}
                      </p>
                    </div>
                  </div>
                </td>
                <td className={style.trans2}>
                  <div className={style.id}>
                    <p>
                      <span>{st?.razorpay_order_id}</span>
                    </p>
                  </div>
                </td>
                <td className={style.amount2}>
                  <div className={style.id}>
                    <p>
                      <span>Rs. {st?.payment_amount}</span>
                    </p>
                  </div>
                </td>
                <td className={style.purpose2}>
                  <div className={style.purposediv}>
                    {st?.payment_module_type}
                  </div>
                </td>
                <td className={style.dots}>
                  <div className={style.dotsdiv}>
                    <img src="/images/dots-dark-icon.svg" alt="menu" />
                  </div>
                </td>
              </tr>
              <div className={style.divider} />
            </>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Internal;
