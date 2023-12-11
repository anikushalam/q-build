import React from "react";
import style from "./LeaveList.module.css";
import "./LeaveList.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useDeleteStaffLeaveMutation } from "../../../../../services/joining/joinApi";

// --------------------------------

function Menu({ open, onClose, lid, refetch }) {
  const [deleteStudentLeave] = useDeleteStaffLeaveMutation();
  if (!open) return null;
  const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    zIndex: 10,
  };
  const MODAL_STYLES = {
    position: "absolute",
    zIndex: 10,
  };

  const handleDelete = () => {
    deleteStudentLeave(lid)
      .then((res) => {
        refetch();
        onClose();
      })
      .catch({});
  };

  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div className={style.menu} style={MODAL_STYLES}>
        <div className={style.menuItem} onClick={handleDelete}>
          Remove Complaint
        </div>
      </div>
    </>
  );
}

function Item({ setShowDetails, leave, setCDetails, cDetail, refetch }) {
  const { t } = useTranslation();
  const [menu, setMenu] = useState(false);

  var parts = leave?.reason.match(/[\s\S]{1,50}/g) || [];

  const datess = [];
  const monthss = [];
  const years = [];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  leave?.date?.map((d) => {
    const dDate = d.split("/")[0];
    const dMonth =
      d.split("/")[1].split("")[0] === "0"
        ? months[parseInt(d.split("/")[1], 10)]
        : months[d.split("/")[1]];
    const dYear = d.split("/")[2];

    datess.push(dDate);
    monthss.push(dMonth);
    years.push(dYear);
  });

  // console.info(leave);

  return (
    <div
      className={style.item}
      onClick={() => {
        setShowDetails(true);
        setCDetails({
          ...cDetail,
          dates: datess,
          months: monthss,
          years: years,
          content: leave?.reason,
          status: leave?.status,
        });
      }}
    >
      <img src="/images/members/transfer-icon.svg" alt="" />
      <div className={style.text}>
        <h6 className={style.to}>
          {t("date")}: {[...new Set(datess)].map((d) => `${d} `)}
          <span>
            {[...new Set(monthss)].map((d) => `${d} `)}{" "}
            {[...new Set(years)].map((d) => `${d} `)}
          </span>
        </h6>

        <div className={style.datetime}>
          {parts?.length > 1 ? <p>{parts[0]}...</p> : <p>{parts[0]}</p>}

          {leave?.status === "Request" ? (
            <p className={style.unsolved}>{leave?.status}</p>
          ) : (
            <p className={style.solved}>{leave?.status}</p>
          )}
        </div>
      </div>
      <img
        className={style.dots}
        src="/images/menu-dots-icon.svg"
        alt=""
        onClick={() => setMenu(true)}
      />
      {menu && (
        <Menu
          open={menu}
          onClose={() => setMenu(false)}
          lid={leave?._id}
          refetch={refetch}
        />
      )}
    </div>
  );
}

function LeaveList({
  staffId,
  setShowDetails,
  setCDetails,
  cDetail,
  staffLeaveData,
  refetch,
}) {
  const { t } = useTranslation();
  return (
    <div className={style.complaintList}>
      <h6 className={style.heading}>{t("leaves")}</h6>
      <div className={style.listcontainer}>
        {staffLeaveData?.allLeave.map((leave, index) => (
          <Item
            key={index}
            leave={leave}
            setShowDetails={setShowDetails}
            setCDetails={setCDetails}
            cDetail={cDetail}
            refetch={refetch}
          />
        ))}
      </div>

      <div className={style.button} onClick={() => setShowDetails(false)}>
        {t("create_leave")}
      </div>
    </div>
  );
}

export default LeaveList;
