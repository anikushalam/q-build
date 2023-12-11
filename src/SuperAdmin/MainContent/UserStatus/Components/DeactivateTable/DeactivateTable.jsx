import * as React from "react";
import ComingSoon from "../../../../../StaffTab/StudentTab/MainContent/StudentAProfile/ComingSoon";

// import style from "./StudentTable.module.css";

export default function BasicTable() {
  return (
    <>
      <ComingSoon />
    </>
    // <div className={style.internal}>
    //   <div className={style.table1container}>
    //     <table className={style.table1}>
    //       <tr>
    //         <th className={style.name}>Username</th>
    //         <th className={style.mailnum}>Contact</th>
    //         <th className={style.trans}>Date of Birth</th>
    //         <th className={style.amount}>Gender</th>
    //         <th className={style.amount}>Location</th>
    //       </tr>
    //     </table>
    //   </div>

    //   <div className={style.table2container}>
    //     <table className={style.table2}>
    //       {userArray?.users?.map((st, index) => (
    //         <>
    //           <tr key={index}>
    //             <td className={style.name}>
    //               <div className={style.details}>
    //                 <img
    //                   src={
    //                     st?.photoId !== "1"
    //                       ? `${imageShowUrl}/${st?.profilePhoto}`
    //                       : "/images/ins_default_profile.svg"
    //                   }
    //                   alt="User Profile Avatar"
    //                 />
    //                 <div className={style.text}>
    //                   <h6 className={style.email}>{st?.username}</h6>
    //                   <p className={style.ga}>{st?.userLegalName}</p>
    //                 </div>
    //               </div>
    //             </td>
    //             <td className={style.dattime}>
    //               <div className={style.text}>
    //                 <p className={style.email}>
    //                   {st?.userEmail ? st?.userEmail : "Email"}
    //                 </p>
    //                 <p className={style.email}>
    //                   {st?.userPhoneNumber ? st?.userPhoneNumber : "Phone no."}
    //                 </p>
    //               </div>
    //             </td>
    //             <td className={style.trans}>
    //               <div className={style.id}>
    //                 <p>{st?.userDateOfBirth}</p>
    //               </div>
    //             </td>
    //             <td className={style.amount}>
    //               <div className={style.id}>
    //                 <p> {st?.userGender} </p>
    //               </div>
    //             </td>

    //             <td className={style.dots}>
    //               <div className={style.dotsdiv}>{st?.userAddress}</div>
    //             </td>
    //           </tr>
    //           {userArray?.users?.length !== index + 1 ? (
    //             <div className={style.divider} />
    //           ) : (
    //             ""
    //           )}
    //         </>
    //       ))}
    //     </table>
    //   </div>
    // </div>
  );
}

/* <div className={style.user}>
                      <img src={row.user.img} />
                      <div className={style.text}>
                        <h6>{row.user.userName}</h6>
                        <p>{row.user.userLegalName}</p>
                      </div>
                    </div> */
