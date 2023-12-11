import React from "react";
import style from "./ComplaintList.module.css";
import "./ComplainList.css";
import { useState } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useDeleteStaffComplaintMutation } from "../../../../../services/joining/joinApi";

// --------------------------------

function Menu({ open, onClose, cid, refetch }) {
  const { t } = useTranslation();
  const [deleteStaffComplaint] = useDeleteStaffComplaintMutation();

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
    deleteStaffComplaint(cid)
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
          {t("remove_complaint")}
        </div>
      </div>
    </>
  );
}

function Item({ setShowDetails, complaint, setCDetails, refetch }) {
  const [menu, setMenu] = useState(false);
  const { t } = useTranslation();
  return (
    <div
      className={style.item}
      onClick={() => {
        setShowDetails(true);
        setCDetails(complaint);
      }}
    >
      <img src="/images/members/staff-complain-icon.svg" alt="" />
      <div className={style.text}>
        <h6>{complaint?.complaintType} Complaint</h6>
        {/* <h6 className={style.to}>Anonymous Complaint</h6> */}

        <div className={style.datetime}>
          <p>
            {" "}
            {t("date")}: {moment(complaint?.createdAt).format("LL")}
          </p>

          {complaint?.complaintStatus === "Unsolved" ? (
            <p className={style.unsolved}>{complaint?.complaintStatus}</p>
          ) : (
            <p className={style.solved}>{complaint?.complaintStatus}</p>
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
          cid={complaint?._id}
          refetch={refetch}
        />
      )}
    </div>
  );
}

function ComplaintList({ setShowDetails, complaints, setCDetails, refetch }) {
  const { t } = useTranslation();
  return (
    <div className={style.complaintList}>
      <h6 className={style.heading}>{t("complaint_list")}</h6>
      <div className={style.listcontainer}>
        {complaints?.map((complaint, index) => (
          <Item
            key={index}
            complaint={complaint}
            setShowDetails={setShowDetails}
            setCDetails={setCDetails}
            refetch={refetch}
          />
        ))}
      </div>

      <div className={style.button} onClick={() => setShowDetails(false)}>
        {t("make_new_complaint")}
      </div>
    </div>
  );
}

export default ComplaintList;
