import React, { useState } from "react";
import style from "./Institutes.module.css";
import { imageShowUrl } from '../../../../services/BaseUrl'
import PayModal from "./PayModal/PayModal";
import { useSelector } from 'react-redux'

function Institutes({ setIndex, activateVolume, setReportData, reportData, fetch }) {
  const [openModal, setOpenModal] = useState(false);
  const [amount, setAmount] = useState();
  const [uid, setUID] = useState("");
  const user_Id = localStorage.getItem("user");
  const author = useSelector((state) => state.authChange);
  return (
    <>
    <div className={style.internal}>
      <div className={style.table1container}>
        <table className={style.table1}>
          <tr>
            <th className={style.name}>Name</th>
            <th className={style.dattime}>Linked Account</th>
            <th className={style.trans}>Volumes</th>
            <th className={style.amount}>Amount Due</th>
            <th className={style.purpose}>Re-Pay</th>
            <td className={style.dots}></td>
          </tr>
        </table>
      </div>

      <div className={style.table2container}>
        <table className={style.table2}>
          {activateVolume?.map((ct, index) => (
            <>
              <tr key={index}>
                <td className={style.name}>
                  <div className={style.details}
                  onClick={() => {
                    setIndex(5);
                    setReportData({
                      ...reportData,
                      bankAccountHolderName: ct?.bankAccountHolderName,
                      bankAccountNumber: ct?.bankAccountNumber,
                      bankAccountType: ct?.bankAccountType,
                      bankAccountPhoneNumber: ct?.bankAccountPhoneNumber,
                      name: ct?.name,
                      insName: ct?.insName,
                      bankIfscCode: ct?.bankIfscCode,
                      id: ct?._id,
                      paymentBankStatus: ct?.paymentBankStatus,
                      repayArray: [...reportData.repayArray, ...ct?.getReturn]
                    });
                  }}
                  >
                    <img 
                    src={
                      ct?.photoId !== "1"
                         ? `${imageShowUrl}/${ct?.insProfilePhoto}`
                         : "/images/ins_default_profile.svg"
                     }
                    alt="" />
                    <div className={style.text}>
                      <h6 className={style.email}>{ct?.name}</h6>
                      <p className={style.ga}>{ct?.insName}</p>
                    </div>
                  </div>
                </td>
                <td className={style.dattime}>
                  <div className={style.dattimee}>
                    <p>{ct?.bankAccountHolderName}</p>
                    <div className={style.linked}>
                      <span>{ct?.bankAccountNumber}</span>
                      {ct?.paymentBankStatus === "Verified" ? (
                        <img src="/images/admin/linked.svg" alt="" />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </td>
                <td className={style.trans}>
                  <div className={style.id}>
                    <p>
                      Rs : <span>{ct?.insBankBalance}</span>
                    </p>
                  </div>
                </td>
                <td className={style.amount}>
                  <div className={style.id}>
                    <p>
                      Rs : <span>{ct?.adminRepayAmount}</span>
                    </p>
                  </div>
                </td>
                <td className={style.purpose}>
                  <div
                    className={style.id}
                  >
                    <p className={style.pay}
                      onClick={() => {
                        setOpenModal(true);
                        setAmount(ct?.adminRepayAmount);
                        setUID(ct?._id);
                      }}
                    >Pay</p>
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
    </>
  );
}

export default Institutes;
