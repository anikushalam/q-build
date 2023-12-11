import React from "react";
import { useState } from "react";
import style from "./NewComplain.module.css";
import {
  useStudentComplaintRequestMutation,
  useStudentComplaintDestinationQuery,
} from "../../../../../services/joining/joinApi";
import { UpdateStatus } from "../../../../../validation/Snackbar";
import QLoader from "../../../../../Loader/QLoader";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const MODAL_STYLES = {
  position: "absolute",
  left: "8vw",
  top: "11vw",
  zIndex: 10,
};

const MODAL_STYLES2 = {
  position: "absolute",
  left: "8vw",
  top: "18vw",
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
  setIsOpen2,
  status,
  cHeadTitle,
  dHeadTitle,
}) {
  if (!open) return null;

  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      {status === "type" ? (
        <div style={MODAL_STYLES} className={style.options}>
          <div
            className={style.option}
            onClick={() => {
              setComplaintData({ ...complaintData, type: "Open" });
              setIsOpen(false);
            }}
          >
            Open Complaint
          </div>
          <div
            className={style.option}
            onClick={() => {
              setComplaintData({ ...complaintData, type: "Anonymous" });
              setIsOpen(false);
            }}
          >
            Anonymous Complaint
          </div>
        </div>
      ) : (
        <div style={MODAL_STYLES2} className={style.options}>
          <div
            className={style.option}
            onClick={() => {
              setComplaintData({ ...complaintData, to: cHeadTitle });
              setIsOpen2(false);
            }}
          >
            {cHeadTitle}
          </div>
          <div
            className={style.option}
            onClick={() => {
              setComplaintData({ ...complaintData, to: dHeadTitle });
              setIsOpen2(false);
            }}
          >
            {dHeadTitle}
          </div>
        </div>
      )}
    </>
  );
}

function NewComplain({ studentId, toast, setToast, refetch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [studentComplainData] = useStudentComplaintRequestMutation();
  const { data: complaintDestination } =
    useStudentComplaintDestinationQuery(studentId);
  const [vmessage, setvMessage] = useState("");
  const [complaintData, setComplaintData] = useState({
    type: "",
    to: "",
    content: "",
  });
  const textarea = document.querySelector("textarea");
  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textarea.style.height = `${scHeight}px`;
  });

  const handleSubmit = () => {
    setDisabled((pre) => !pre);

    studentComplainData({
      sid: studentId && studentId,
      complaintData: {
        classHead:
          complaintData.to ===
          complaintDestination?.title?.studentClass?.classHeadTitle
            ? complaintDestination?.title?.studentClass?._id
            : "",
        departmentHead:
          complaintData.to ===
          complaintDestination?.title?.studentClass?.department?.dTitle
            ? complaintDestination?.title?.studentClass?.department?._id
            : "",
        complaintType: complaintData.type,
        complaintContent: complaintData.content,
        complaintTo: complaintData.to,
      },
    }).then((res) => {
      if (res.data.message) {
        setvMessage("Successfully Submitted");
        setToast(true);
        refetch();
        setComplaintData({ ...complaintData, content: "", type: "", to: "" });
        setDisabled((pre) => !pre);
      }
    });
  };

  return (
    <div className={style.newComplain}>
      <UpdateStatus msg={vmessage} run={toast} setRun={setToast} />
      <h6 className={style.newComplainheader}>Make a new complaint</h6>

      <div
        className={style.input}
        style={BUTTON_WRAPPER_STYLES}
        onClick={() => setIsOpen(true)}
      >
        <div className={style.select}>
          {complaintData?.type === "Open" ? (
            <h6> Open Complaint</h6>
          ) : complaintData?.type === "Anonymous" ? (
            <h6>Anonymous Complaint</h6>
          ) : (
            <h6> Complaint Type</h6>
          )}
          <img className={style.down} src="/images/downn-icon.svg" alt="" />
        </div>
      </div>

      <div
        className={style.input}
        style={BUTTON_WRAPPER_STYLES}
        onClick={() => setIsOpen2(true)}
      >
        <div className={style.select}>
          {complaintData?.to ===
          complaintDestination?.title?.studentClass?.classHeadTitle ? (
            <h6>{complaintDestination?.title?.studentClass?.classHeadTitle}</h6>
          ) : complaintData?.to ===
            complaintDestination?.title?.studentClass?.department?.dTitle ? (
            <h6>
              {complaintDestination?.title?.studentClass?.department?.dTitle}
            </h6>
          ) : (
            <h6> Complaint To</h6>
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
        status="type"
      />

      <Options
        open={isOpen2}
        onClose={() => setIsOpen2(false)}
        setComplaintData={setComplaintData}
        complaintData={complaintData}
        setIsOpen2={setIsOpen2}
        status="to"
        cHeadTitle={complaintDestination?.title?.studentClass?.classHeadTitle}
        dHeadTitle={
          complaintDestination?.title?.studentClass?.department?.dTitle
        }
      />

      <textarea
        className={style.postTextarea}
        type="text"
        required
        // ref={announcementDescriptionRef}
        name="CreateInsPost"
        placeholder="Enter Complaint Description"
        value={complaintData.content}
        onChange={(e) =>
          setComplaintData({ ...complaintData, content: e.target.value })
        }
      />

      {complaintData.type && complaintData.content && complaintData.to ? (
        <div className={style.submitbtn} onClick={handleSubmit}>
          Send Complaint
        </div>
      ) : (
        <div className={`${style.submitbtn} ${style.disablebtn}`}>
          Send Complaint
        </div>
      )}
      {disabled && <QLoader />}
    </div>
  );
}

export default NewComplain;
