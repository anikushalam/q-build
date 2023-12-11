import React from "react";
import style from "./Transfer.module.css";

const TransferItem = ({}) => {
  return (
    <>
      <div className={style.item}>
        <div className={style.itemHead}>
          <div className={style.left}>
            <img
              src={
                photoId !== "1"
                  ? `${imageShowUrl}/${img}`
                  : "/images/demo_users/user5.svg"
              }
              alt=""
            />
            <div className={style.text}>
              <h6>{name}</h6>
              <p>{from}</p>
            </div>
          </div>
          {status === "Requested" ? (
            <div className={style.right}>
              {(!replacedStaff || clickedIndex !== index) && (
                <div className={`${style.btn}`}>Reject</div>
              )}
              {(!replacedStaff || clickedIndex !== index) && (
                <div className={`${style.btn}`}>Approve</div>
              )}
              {replacedStaff && clickedIndex === index && (
                <div
                  onClick={() => {
                    MarkReject("Rejected", transId);
                  }}
                  className={`${style.activeBtn}`}
                >
                  Reject
                </div>
              )}
              {replacedStaff && clickedIndex === index && (
                <div
                  onClick={() => {
                    MarkApprove("Approved", pid, aid, transId);
                  }}
                  className={`${style.activeBtn}`}
                >
                  Approve
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={style.reason}>{reason}</div>

        {status === "Requested" && (
          <div
            onClick={() => {
              setStaffListView(true);
              setReplaceStaffId(pid);
              setClickedIndex(index);
            }}
            className={style.replacebtn}
          >
            Replacement
          </div>
        )}
        {status !== "Requested" && (
          <div className={style.replacedbtn}>Replacement {status}</div>
        )}
      </div>
      <div className={style.divider} />
    </>
  );
};

export default TransferItem;
