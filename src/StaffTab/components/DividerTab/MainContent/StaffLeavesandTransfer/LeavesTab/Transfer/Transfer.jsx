import React, { useState } from "react";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import style from "./Transfer.module.css";
import moment from "moment";
import { useTranslation } from "react-i18next";
import {
  useApproveStaffReplace,
  useRejectStaffReplace,
} from "../../../../../../../hooks/institute/institute-staff-student-api";
import QLoader from "../../../../../../../Loader/QLoader";

function Item({
  img,
  photoId,
  name,
  from,
  replacedBy,
  reason,
  index,
  replaced,
  setStaffListView,
  replacedStaff,
  setReplaceStaffId,
  setClickedIndex,
  clickedIndex,
  status,
  pid,
  aid,
  transId,
  MarkApprove,
  MarkReject,
}) {
  const { t } = useTranslation();
  return (
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
              <div className={`${style.btn}`}>{t("reject")}</div>
            )}
            {(!replacedStaff || clickedIndex !== index) && (
              <div className={`${style.btn}`}>{t("approve")}</div>
            )}
            {replacedStaff && clickedIndex === index && (
              <div
                onClick={() => {
                  MarkReject("Rejected", transId);
                }}
                className={`${style.activeBtn}`}
              >
                {t("reject")}
              </div>
            )}
            {replacedStaff && clickedIndex === index && (
              <div
                onClick={() => {
                  MarkApprove("Approved", pid, aid, transId);
                }}
                className={`${style.activeBtn}`}
              >
                {t("approve")}
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
          {t("replacement")}
        </div>
      )}
      {status !== "Requested" && (
        <div className={style.replacedbtn}>
          {t("replacement")} {status}
        </div>
      )}
    </div>
  );
}

function Transfer({
  staffListView,
  setStaffListView,
  replacedStaff,
  setReplaceStaffId,
  transferData,
  fetch,
}) {
  const [clickedIndex, setClickedIndex] = useState();
  const [approveStaffReplace] = useApproveStaffReplace();
  const [rejectStaffReplace] = useRejectStaffReplace();
  const [disabled, setDisabled] = useState(false);
  const MarkApprove = (approveQuery, preStaff, newStaff, tid) => {
    if (
      approveQuery !== "" &&
      preStaff !== "" &&
      newStaff !== "" &&
      tid !== ""
    ) {
      setDisabled((pre) => !pre);
      approveStaffReplace({
        tid: tid && tid,
        status: approveQuery && approveQuery,
        previousStaff: preStaff && preStaff,
        assignedStaff: newStaff && newStaff,
      })
        .then(() => {
          fetch();
          setStaffListView(false);
          setDisabled((pre) => !pre);
        })
        .catch((e) => {
          setDisabled((pre) => !pre);
        });
    }
  };

  const MarkReject = (rejectQuery, transfer) => {
    if (rejectQuery !== "" && transfer !== "") {
      setDisabled((pre) => !pre);

      rejectStaffReplace({
        tid: transfer && transfer,
        status: rejectQuery && rejectQuery,
      })
        .then((res) => {
          fetch();
          setStaffListView(false);
          setDisabled((pre) => !pre);
        })
        .catch((e) => {
          setDisabled((pre) => !pre);
        });
    }
  };

  // console.info("this ksd", transferData);
  return (
    <div className={style.leaves}>
      {transferData?.map((d, index) => (
        <>
          <Item
            key={index}
            index={index}
            img={d?.staff?.staffProfilePhoto}
            photoId={d?.staff?.photoId}
            from={moment(d?.createdAt).format("LL")}
            replaced={d.replaced}
            replacedBy={d.replacedBy}
            name={`${d?.staff?.staffFirstName} ${
              d?.staff?.staffMiddleName ? d?.staff?.staffMiddleName : ""
            } ${d?.staff?.staffLastName}`}
            reason={d?.transferReason}
            setStaffListView={setStaffListView}
            replacedStaff={replacedStaff}
            setReplaceStaffId={setReplaceStaffId}
            clickedIndex={clickedIndex}
            setClickedIndex={setClickedIndex}
            status={d?.transferStatus}
            pid={d?.staff?._id}
            aid={replacedStaff?._id}
            transId={d?._id}
            MarkApprove={MarkApprove}
            MarkReject={MarkReject}
          />
          <div className={style.divider} />
        </>
      ))}

      {disabled && <QLoader />}
    </div>
  );
}

export default Transfer;
