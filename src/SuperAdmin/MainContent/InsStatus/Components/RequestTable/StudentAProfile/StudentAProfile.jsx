import style from "./StudentAProfile.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentAProfileView from "./StudentAProfileView";
import "./Table1.css";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

export default function StudentAProfile({ setStaffFull, setStaffHalf, data, approve, request, insId, setIndex, setInsId }) {
  return (
    <>
      <div className="row mt-3">
        <div className="col-5">
          <>
          <div className={style.internal}>
          <div className={style.table1container}>
            <table className={style.table1}>
              <tr>
                <th className={style.trans}>Sr No.</th>
                <th className={style.name}>Institute Name</th>
              </tr>
            </table>
          </div>

          <div className={style.table2container}>
            <table className={style.table2}>
              {data?.instituteList?.map((st, index) => (
                <>
                  <tr key={index} 
                  onClick={() => {
                    setInsId(st?._id)
                    setIndex(2)
                  }}
                  >
                    <td className={style.trans}>
                      <div className={style.id}>
                        <p>
                          {index + 1}
                        </p>
                      </div>
                    </td>
                    <td className={style.name}>
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
                          <h6 className={style.email} title={st?.name}>{st?.name}</h6>
                          <p className={style.email} title={st?.insName}>
                            {st?.insName}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <div className={style.divider} />
                </>
              ))}
            </table>
          </div>
        </div>
          </>
        </div>
        <div className="col-7">
          <StudentAProfileView 
           insId={insId && insId}
           approve={approve && approve} 
           request={request && request}
           setIndex={setIndex}
           />
        </div>
      </div>
    </>
  );
}
