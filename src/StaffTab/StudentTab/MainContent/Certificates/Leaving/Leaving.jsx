import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
import {
  useGetEditable,
  useStudentLeaving,
} from "../../../../../hooks/institute/institute-staff-student-api";
import LoaderButton from "../../../../../Loader/LoaderButton";
import { useTranslation } from "react-i18next";
import style from "../CertificateDetail.module.css";
import { Notfication } from "../../../../../validation/Snackbar";
import { useNavigate, useParams } from "react-router-dom";
const CertificateModal = React.lazy(() =>
  import("../CertificateModal/CertificateModal")
);
const Leaving = ({ student, viewAs, instituteId, status }) => {
  const { t } = useTranslation();
  const id = useSelector((state) => state.idChange.id);
  const [addDisplay, setAddDisplay] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const [leavingData, setLeavingData] = useState({
    number: "",
    reason: "",
    previous: student?.studentPreviousSchool,
    study: "",
    behaviour: "",
    remarks: "",
    udise: "",
  });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [studentLeaving] = useStudentLeaving();
  const { getEditable, getEditableRefetch } = useGetEditable({
    id: instituteId ? instituteId : id,
    skip: viewAs === "DESIGNATION_SIDE" ? !instituteId : !id,
  });

  useEffect(() => {
    if ((id, instituteId)) getEditableRefetch();
  }, [id, instituteId, getEditableRefetch]);

  const onLeavingHandler = () => {
    setDisabled((pre) => !pre);
    studentLeaving({
      id: instituteId ? instituteId : id,
      gr: leavingData.number,
      leavingFeedback: leavingData,
    })
      .then((res) => {
        setDisabled((pre) => !pre);
        navigate(`/q/${params.username}/student/certificate/form`, {
          state: {
            student: res.data.student,
            download: res.data.download,
            instituteId: instituteId,
            is_leaving: status,
          },
        });
        // setStudent(res.data.student);
        // setDownload(res.data.download);
        // setToggle({
        //   id: instituteId ? instituteId : id,
        //   gr: leavingData.number,
        //   leavingFeedback: leavingData,
        // });
        // if (status === "leaving") {
        //   setLeavingForm({ ...leavingform, leaving: true, transfer: false });
        // } else if (status === "transfer") {
        //   setLeavingForm({ ...leavingform, leaving: false, transfer: true });
        // }
      })
      .catch(() => {
        setNotificationState({
          msg: "something went wrong",
          run: true,
        });
      });
  };

  return (
    <div className={style.complaintDetails}>
      <div className={style.detailsHeader}>
        {status === "transfer" ? (
          <p>{t("transfer_certificate")}</p>
        ) : (
          <p>{t("leaving")}</p>
        )}
        <img
          src="/images/menu-dots-dark-icon.svg"
          alt=""
          onClick={() => setAddDisplay(true)}
        />
      </div>

      <div className={style.detailsBody}>
        <div className={style.gr}>
          <input
            type="tel"
            placeholder={t("enter_gr")}
            onChange={(e) =>
              setLeavingData({ ...leavingData, number: e.target.value })
            }
            required
          />
        </div>

        {leavingData?.number !== "" && (
          <button
            type="submit"
            disabled={disabled}
            className={style.getBtn}
            onClick={onLeavingHandler}
          >
            <p>{t("cer_preview")}</p>
            {disabled && <LoaderButton />}
          </button>
        )}
      </div>

      {addDisplay && (
        <CustomSuspense>
          <CertificateModal
            hideModal={(w) => setAddDisplay(w)}
            addDisplay={addDisplay}
            editableData={getEditable?.detail}
            viewAs={viewAs}
            instituteId={instituteId}
            onRefetch={getEditableRefetch}
          />
        </CustomSuspense>
      )}
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
    </div>
  );
};

export default Leaving;
