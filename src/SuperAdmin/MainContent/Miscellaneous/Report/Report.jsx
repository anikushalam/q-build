import React from "react";
import style from "./Report.module.css";
import moment from "moment";
import { useGetReportDataQuery } from "../../../../services/superAdminAPI";
import { imageShowUrl } from "../../../../services/BaseUrl";

function Report() {
  const { data: reportQuery } = useGetReportDataQuery();
  return (
    <div className={style.internal}>
      <div className={style.table1container}>
        <table className={style.table1}>
          <tr>
            <th className={style.sr}>Date</th>
            <th className={style.name}>Name</th>
            <th className={style.tottal}>Post Link</th>
            <th className={style.amt}>Reasons</th>
          </tr>
        </table>
      </div>

      <div className={style.table2container}>
        <table className={style.table2}>
          {reportQuery?.admin?.reportList.map((rep, index) => (
            <>
              <tr key={index}>
                <td className={style.sr2}>
                  <div className={style.dattimee}>
                    <p>
                      Date : <span>{moment(rep.createdAt).format("ll")}</span>
                    </p>
                  </div>
                </td>
                <td className={style.name2}>
                  <div className={style.details}>
                    <img
                      src={
                        rep?.reportBy?.photoId !== "1"
                          ? `${imageShowUrl}/${rep?.reportBy?.profilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      alt="Report User Avatar"
                    />
                    <div className={style.text}>
                      <h6 className={style.email}>
                        {rep?.reportBy?.userLegalName}
                      </h6>
                      <p className={style.email}>{rep?.reportBy?.username}</p>
                    </div>
                  </div>
                </td>
                <td className={style.tottal2}>
                  <div className={style.details}>
                    <div className={style.text}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className={style.email}
                        href={`${
                          rep?.reportInsPost?.post_url
                            ? rep?.reportInsPost?.post_url
                            : "https://qviple.com"
                        }`}
                      >
                        {rep?.reportInsPost?.post_url
                          ? rep?.reportInsPost?.post_url
                          : "https://qviple.com"}
                      </a>
                    </div>
                  </div>
                </td>
                <td className={style.amt2}>
                  <div className={style.id}>
                    <p>{rep?.reportStatus}</p>
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

export default Report;
