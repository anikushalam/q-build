import React from "react";
import style from "./Carrier.module.css";
import moment from "moment";
import { useCarrierDataQuery } from "../../../../services/superAdminAPI";
import { imageShowUrl } from "../../../../services/BaseUrl";

function Carrier() {
  const { data: carrierQuery } = useCarrierDataQuery();
  // console.info(carrierQuery?.admin?.careerUserArray);
  return (
    <div className={style.internal}>
      <div className={style.table1container}>
        <table className={style.table1}>
          <tr>
            <th className={style.name}>Name</th>
            <th className={style.contact}>Contact</th>
            <th className={style.date}>Applied Date</th>
            <th className={style.message}>Message</th>
            <th className={style.sr}>Resume/CV</th>

            <td className={style.dots}></td>
          </tr>
        </table>
      </div>

      <div className={style.table2container}>
        <table className={style.table2}>
          {carrierQuery?.admin?.careerUserArray.map((carr, index) => (
            <>
              <tr key={index}>
                <td className={style.name}>
                  <div className={style.id}>
                    <p>{carr?.endUserName}</p>
                  </div>
                </td>
                <td className={style.contact}>
                  <div className={style.details}>
                    <div className={style.mailphone}>
                      <img src="/images/admin/mail-dark-icon.svg" alt="" />
                      <p>{carr?.endUserEmail}</p>
                    </div>

                    <div className={style.mailphone}>
                      <img src="/images/admin/phone-white.svg" alt="" />
                      <p>+91 {carr?.endUserPhoneNumber}</p>
                    </div>
                  </div>
                </td>

                <td className={style.date}>
                  <div className={style.id}>
                    <p>{moment(carr?.createdAt).format("ll")}</p>
                  </div>
                </td>
                <td className={style.message}>
                  <div className={style.purposediv}>{carr?.endUserAddress}</div>
                </td>

                <td className={style.sr}>
                  <div className={style.id}>
                    {/* <img
                      src={`${imageShowUrl}/${carr?.endUserResume}`}
                      alt=""
                    /> */}
                    <a
                      href={`https://d3dqpu54js2vfl.cloudfront.net/${carr?.endUserResume}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Doc
                    </a>
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

export default Carrier;
