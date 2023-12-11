import React, { useState } from "react";
import style from "./Reeferal.module.css";
import PayModal from "./PayModal/PayModal";
import { useSelector } from "react-redux";
import { imageShowUrl } from '../../../../services/BaseUrl'

function Reeferal({ referralArray, fetch }) {
  const [openModal, setOpenModal] = useState(false);
  const [amount, setAmount] = useState();
  const [uid, setUID] = useState("");
  const user_Id = localStorage.getItem("user");
  const author = useSelector((state) => state.authChange);
  return (
    <div className={style.internal}>
      <div className={style.table1container}>
        <table className={style.table1}>
          <tr>
            <th className={style.name}>Name</th>
            <th className={style.dattime}>Refferal</th>
            <th className={style.trans}>Comissions</th>
            <th className={style.amount}>Status</th>

            <td className={style.dots}></td>
          </tr>
        </table>
      </div>

      <div className={style.table2container}>
        <table className={style.table2}>
          {referralArray?.map((st, index) => (
            <>
              <tr key={index}>
                <td className={style.name}>
                  <div className={style.details}>
                    <img 
                    src={
                     st?.photoId !== "1"
                        ? `${imageShowUrl}/${st?.profilePhoto}`
                        : "/images/ins_default_profile.svg"
                    }
                    alt="Institute Profile Avatar"
                    />
                    {/*  src="/images/ins_default_profile.svg" alt="" /> */}
                    <div className={style.text}>
                      <h6 className={style.email}>{st?.username}</h6>
                      <p className={style.ga}>{st?.userLegalName}</p>
                    </div>
                  </div>
                </td>
                <td className={style.dattime}>
                  <div className={style.id}>
                    <p>
                      Total : <span>{st?.referralArray?.length}</span>
                    </p>
                  </div>
                </td>
                <td className={style.trans}>
                  <div className={style.id}>
                    <p>
                      Rs : <span>{st?.userCommission}</span>
                    </p>
                  </div>
                </td>
                <td className={style.amount}>
                  <div className={style.id}>
                    {st?.paymentStatus === "Paid" ? (
                      <div className={style.pay}>Paid</div>
                    ) : (
                      <div
                        onClick={() => {
                          setOpenModal(true);
                          setAmount(st?.userCommission);
                          setUID(st?._id);
                        }}
                        className={style.pay}
                      >
                        Pay
                      </div>
                    )}
                  </div>
                </td>

                <td className={style.dots}>
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

      {openModal && (
        <PayModal
          open={openModal}
          hideModal={(w) => setOpenModal(w)}
          aid={`${author?.id ? author?.id : user_Id}`}
          amount={amount && amount}
          user={uid && uid}
          fetch={fetch && fetch}
        />
      )}
    </div>
  );
}

export default Reeferal;
