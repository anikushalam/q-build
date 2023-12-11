import React from "react";
import style from "./RequestTable.module.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import StudentAProfile from "./StudentAProfile/StudentAProfile";
import moment from "moment";

function RequestTable({ requestArray, approveFetch, requestFetch }) {
  const [index, setIndex] = React.useState(1);
  const [insId, setInsId] = React.useState("");
  return (
    <>
      {index === 1 && (
        <div className={style.internal}>
          <div className={style.table1container}>
            <table className={style.table1}>
              <tr>
                <th className={style.sr}>Sr No.</th>
                <th className={style.insName}>Institute Name</th>
                <th className={style.contact}>Contact</th>
                <th className={style.insType}>Institute Type</th>
                <th className={style.created}>Created At</th>
              </tr>
            </table>
          </div>

          <div className={style.table2container}>
            <table className={style.table2}>
              {requestArray?.instituteList?.map((st, index) => (
                <>
                  <tr
                    key={index}
                    onClick={() => {
                      setIndex(2);
                      setInsId(st?._id);
                    }}
                  >
                    <td className={style.sr2}>
                      <div className={style.id}>
                        <p>{index + 1}</p>
                      </div>
                    </td>
                    <td className={style.insName2}>
                      <div className={style.details}>
                        <img
                          src={
                            st?.photoId !== "1"
                              ? `${imageShowUrl}/${st?.insProfilePhoto}`
                              : "/images/ins_default_profile.svg"
                          }
                          alt="Institute Profile Avatar"
                        />
                        <div className={style.text}>
                          <h6 className={style.ga} title={st?.name}>
                            {st?.name}
                          </h6>
                          <p className={style.ga} title={st?.insName}>
                            {st?.insName}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className={style.contact2}>
                      <div className={style.text}>
                        <p className={style.ga}>
                          <img
                            alt="Table Images"
                            src="/images/admin/email-white.svg"
                            title="Email"
                          />{" "}
                          {st?.insEmail ? st?.insEmail : ""}
                        </p>
                        <p className={style.ga}>
                          <img
                            alt="Table Images"
                            src="/images/admin/phone-white.svg"
                            title="Phone"
                          />{" "}
                          {st?.insPhoneNumber ? st?.insPhoneNumber : ""}
                        </p>
                      </div>
                    </td>
                    <td className={style.insType2}>
                      <div className={style.id}>{st?.insType}</div>
                    </td>
                    <td className={style.created2}>
                      <div className={style.id}>
                        {moment(st?.createdAt).format("YYYY-MM-DD")}
                      </div>
                    </td>
                  </tr>
                  <div className={style.divider} />
                </>
              ))}
            </table>
          </div>
        </div>
      )}
      {index === 2 && (
        <StudentAProfile
          data={requestArray && requestArray}
          approve={approveFetch && approveFetch}
          request={requestFetch && requestFetch}
          insId={insId && insId}
          setIndex={setIndex}
          setInsId={setInsId}
        />
      )}
    </>
  );
}

export default RequestTable;
