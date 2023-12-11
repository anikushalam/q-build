import React from "react";
import { useState } from "react";
import style from "./NewComplain.module.css";
import { useStaffComplaintRequestMutation } from "../../../../../services/joining/joinApi";
import { UpdateStatus } from "../../../../../validation/Snackbar";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import QLoader from "../../../../../Loader/QLoader";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const MODAL_STYLES = {
  position: "absolute",
  left: "14.5vw",
  top: "9.5vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

function Options({
  setComplaintData,
  open,
  onClose,
  complaintData,
  setIsOpen,
}) {
  const { t } = useTranslation();
  if (!open) return null;

  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className={style.options}>
        <div
          className={style.option}
          onClick={() => {
            setComplaintData({ ...complaintData, type: "Open" });
            setIsOpen(false);
          }}
        >
          {t("open_complaint")}
        </div>
        <div
          className={style.option}
          onClick={() => {
            setComplaintData({ ...complaintData, type: "Anonymous" });
            setIsOpen(false);
          }}
        >
          {t("anonymous_complaint")}
        </div>
      </div>
    </>
  );
}

function NewComplain({ staffId, toast, setToast }) {
  const [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [staffComplainData] = useStaffComplaintRequestMutation();
  const { t } = useTranslation();
  const [vmessage, setvMessage] = useState("");
  const [complaintData, setComplaintData] = useState({
    type: "",
    content: "",
  });

  // console.info(complaintData?.type);
  const textarea = document.querySelector("textarea");
  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textarea.style.height = `${scHeight}px`;
  });

  const handleSubmit = () => {
    setDisabled((pre) => !pre);
    const formDatas = new FormData();
    formDatas.append("complaintType", complaintData.type);
    formDatas.append("complaintContent", complaintData.content);

    staffComplainData({
      sid: staffId && staffId,
      complaintData: {
        complaintType: complaintData.type,
        complaintContent: complaintData.content,
      },
    }).then((res) => {
      if (res.data.message) {
        setvMessage("Successfully Submitted");
        setToast(true);
        setComplaintData({ ...complaintData, content: "", type: "" });
        setDisabled((pre) => !pre);
      }
    });
  };

  return (
    <div className={style.newComplain}>
      <UpdateStatus msg={vmessage} run={toast} setRun={setToast} />
      <h6 className={style.newComplainheader}>{t("make_complaint")}</h6>

      <div className={style.input} style={BUTTON_WRAPPER_STYLES}>
        <div>
          {complaintData?.type === "Open" ? (
            <h6 onClick={() => setIsOpen(true)}>{t("open_complaint")}</h6>
          ) : complaintData?.type === "Anonymous" ? (
            <h6 onClick={() => setIsOpen(true)}>{t("anonymous_complaint")}</h6>
          ) : (
            <h6 onClick={() => setIsOpen(true)}>{t("comp_type")}</h6>
          )}
          <img className={style.down} src="/images/downn-icon.svg" alt="" />
        </div>
      </div>
      <Options
        open={isOpen}
        onClose={() => setIsOpen(false)}
        setComplaintData={setComplaintData}
        complaintData={complaintData}
        setIsOpen={setIsOpen}
      />

      <textarea
        className={style.postTextarea}
        type="text"
        required
        // ref={announcementDescriptionRef}
        name="CreateInsPost"
        placeholder={t("comp_des")}
        value={complaintData.content}
        onChange={(e) =>
          setComplaintData({ ...complaintData, content: e.target.value })
        }
      />

      {complaintData.type && complaintData.content ? (
        <div className={style.submitbtn} onClick={handleSubmit}>
          {t("send_complaint")}
        </div>
      ) : (
        <div className={`${style.submitbtn} ${style.disablebtn}`}>
          {t("send_complaint")}
        </div>
      )}
      {disabled && <QLoader />}
    </div>
  );
}

export default NewComplain;
