import React from "react";
import style from "./GetInTouch.module.css";
import moment from "moment";
import { useGetInTouchQuery } from "../../../../services/superAdminAPI";

function GetInTouch() {
  const { data: miscellQuery } = useGetInTouchQuery()
  return (
    <div className={style.internal}>
      <div className={style.table1container}>
        <table className={style.table1}>
          <tr>
            <th className={style.sr}>Sr No.</th>
            <th className={style.name}>Name</th>
            <th className={style.contact}>Contact</th>
            <th className={style.date}>Applied Date</th>
            <th className={style.message}>Message</th>

            <td className={style.dots}></td>
          </tr>
        </table>
      </div>

      <div className={style.table2container}>
        <table className={style.table2}>
          {miscellQuery?.admin?.getTouchUsers?.map((touch, index) => (
            <>
              <tr key={index}>
                <td className={style.sr}>
                  <div className={style.id}>
                    <p>{index + 1}</p>
                  </div>
                </td>
                <td className={style.name}>
                  <div className={style.id}>
                    <p>{touch?.endUserName}</p>
                  </div>
                </td>
                <td className={style.contact}>
                  <div className={style.details}>
                    <div className={style.mailphone}>
                      <img src="/images/admin/mail-dark-icon.svg" alt="" />
                      <p>{touch?.endUserEmail}</p>
                    </div>

                    <div className={style.mailphone}>
                      <img src="/images/admin/phone-white.svg" alt="" />
                      <p>+91 {touch?.endUserPhoneNumber}</p>
                    </div>
                  </div>
                </td>

                <td className={style.date}>
                  <div className={style.id}>
                    <p>{moment(touch?.createdAt).format("LL")}</p>
                  </div>
                </td>
                <td className={style.message}>
                  <div className={style.purposediv}>
                    {touch?.endUserMessage}
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

export default GetInTouch;
