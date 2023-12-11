import React, { useState } from "react";
import VerifyModal from "../ViewReport/VerifyModal/VerifyModal";
import style from "./ViewReport.module.css";
import { useSelector } from "react-redux";

function ViewReport({ setIndex, view, fetch }) {
  const [openModal, setOpenModal] = useState(false);
  const user_Id = localStorage.getItem("user");
  const author = useSelector((state) => state.authChange);
  return (
    <div className={style.viewReport}>
      <div className={style.header}>
        <div className={style.headertop}>
          <h6>Report</h6>
          <p onClick={() => setIndex(1)}>Back To page</p>
        </div>

        <div className={style.headerbottom}>
          <div className={style.headerbottomleft}>
            <img src="/images/member_tab/class/default_avatar.svg" alt="" />
            <h6>{view?.name}</h6>
            <p>{view?.insName}</p>
          </div>

          <div className={style.headerbottomright}>
            <div className={style.rightItem}>
              <div className={style.itemdiv}>
                <div className={style.itemfirst}>
                  <h6>{view?.bankAccountHolderName}</h6>
                  {view?.paymentBankStatus === "verified" ? (
                    <img
                      src="/images/finance/verified.svg"
                      onClick={() => {
                        setOpenModal(true);
                      }}
                      alt=""
                    />
                  ) : view?.paymentBankStatus === "Not Verified" ? (
                    <img
                      src="/images/finance/not-varified.svg"
                      onClick={() => {
                        setOpenModal(true);
                      }}
                      alt=""
                    />
                  ) : view?.paymentBankStatus === "verification in progress" ? (
                    <img
                      src="/images/finance/not-varified.svg"
                      onClick={() => {
                        setOpenModal(true);
                      }}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </div>
                <p>Account Name</p>
              </div>
              <div className={style.itemdiv}>
                <h6>{view?.bankIfscCode}</h6>
                <p>IFSC Code</p>
              </div>
            </div>
            <div className={style.rightItem}>
              <div className={style.itemdiv}>
                {" "}
                <h6>{view?.bankAccountType}</h6>
                <p>Account Type</p>
              </div>
              <div className={style.itemdiv}>
                <h6>+91 {view?.bankAccountPhoneNumber}</h6>
                <p>Mobile Number</p>
              </div>
            </div>
            <div className={style.rightItem}>
              <div className={style.itemdiv}>
                <h6>{view?.bankAccountNumber}</h6>
                <p>Account Number</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <VerifyModal
          open={openModal}
          hideModal={(w) => setOpenModal(w)}
          aid={`${author?.id ? author?.id : user_Id}`}
          insId={view && view?.id}
          fetch={fetch && fetch}
        />
      )}
    </div>
  );
}

export default ViewReport;
