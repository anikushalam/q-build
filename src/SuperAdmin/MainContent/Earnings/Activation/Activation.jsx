import React from "react";
import style from "./Internal.module.css";
import moment from "moment";
import { imageShowUrl } from "../../../../services/BaseUrl";

function Internal({ activateData }) {
  return (
    <div className={style.internal}>
      <div className={style.table1container}>
        <table className={style.table1}>
          <tr>
            <th className={style.sr}>Date & Time</th>
            <th className={style.name}>Institute Name</th>
            <th className={style.tottal}>Reffer By</th>
            <th className={style.amt}>Amount</th>
            <th className={style.review}>Commission</th>
          </tr>
        </table>
      </div>

      <div className={style.table2container}>
        <table className={style.table2}>
          {activateData?.map((at, index) => (
            <>
              <tr key={index}>
                <td className={style.sr2}>
                  <div className={style.dattimee}>
                    <p>
                      Date :{" "}
                      <span>{moment(at?.activateDate).format("LL")}</span>
                    </p>
                    <p>
                      Time :{" "}
                      <span>{moment(at?.activateDate).format("LT")}</span>
                    </p>
                  </div>
                </td>
                <td className={style.name2}>
                  <div className={style.details}>
                    <img
                      src={
                        at?.photoId !== "1"
                          ? `${imageShowUrl}/${at?.insProfilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      alt=""
                    />
                    <div className={style.text}>
                      <h6 className={style.email}>{at?.name}</h6>
                      <p className={style.ga}>{at?.insName}</p>
                    </div>
                  </div>
                </td>
                <td className={style.trans}>
                  {at?.initialReferral ? (
                    <div className={style.details}>
                      <img
                        src={
                          at?.initialReferral?.photoId !== "1"
                            ? `${imageShowUrl}/${at?.initialReferral?.profilePhoto}`
                            : "/images/ins_default_profile.svg"
                        }
                        alt="User Profile Avatar"
                      />
                      <div className={style.text}>
                        <h6 className={style.email}>
                          {at?.initialReferral?.username}
                        </h6>
                        <p className={style.ga}>
                          {at?.initialReferral?.userLegalName}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <h6 className={style.noRefferal}>No Referral</h6>
                  )}
                </td>
                <td className={style.amt2}>
                  <div className={style.id}>
                    {/* <p>
                      Rs : <span>{at?.unlockAmount}</span>
                    </p> */}
                    <p>
                      Rs : <span>0</span>
                    </p>
                  </div>
                </td>
                <td className={style.review2}>
                  <div className={style.id}>
                    {/* <p>
                      Rs : <span>{(at?.unlockAmount * 60) / 100}</span>
                    </p> */}
                    <p>
                      Rs : <span>0</span>
                    </p>
                  </div>
                </td>
                <td className={style.dots2}>
                  <div className={style.dotsdiv}>
                    <img src="/images/dots-dark-icon.svg" alt="" />
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
