import React from "react";
import style from "./DownloadToggle.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import QLoader from "../../../Loader/QLoader";
import { useDownloadOriginalCopy } from "../../../hooks/institute/institute-staff-student-api";
import { useState } from "react";
import { FileNotUpload } from "../../../validation/Snackbar";

function DownloadToggle({ open, hideModal, insId, setIsOrigin }) {
  const [disabled, setDisabled] = useState(false);
  const [downloadOriginal] = useDownloadOriginalCopy();
  const { t } = useTranslation();
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });

  const handleDownloadOriginal = (val) => {
    setDisabled(true);
    downloadOriginal({
      id: insId,
      original: val,
    })
      .then(() => {
        setIsOrigin(val === "true" ? true : false);
        setDisabled(false);
        hideModal(false);
        // studentLeaving({
        //   id: toggle.id,
        //   gr: toggle.gr,
        //   leavingFeedback: toggle.leavingFeedback,
        // })
        //   .then((res) => {
        //     setStudent(res.data.student);

        //   })
        //   .catch(() => {
        //     setNotificationState({
        //       msg: "something went wrong",
        //       run: true,
        //     });
        //   });
      })
      .catch(() => {
        setDisabled(false);
        setNotificationState({
          msg: "Something went wrong",
          run: true,
        });
      });
  };

  return (
    <Dialog open={open} onClose={() => hideModal(false)}>
      <div className={style.confirmMark}>
        <h5>{t("download_only_original")}</h5>
        <div className={style.marktabs}>
          <div
            className={style.condirmtab}
            onClick={() => handleDownloadOriginal("true")}
          >
            {t("original")}
          </div>
          <div
            className={style.canceltab}
            onClick={() => handleDownloadOriginal("false")}
          >
            {t("duplicate_")}
          </div>
        </div>
        {disabled && <QLoader />}
        {notificationState.run && (
          <FileNotUpload
            msg={notificationState.msg}
            run={notificationState.run}
            setRun={() => setNotificationState({ msg: "", run: false })}
            postiton="bottom"
            type="error"
          />
        )}
      </div>
    </Dialog>
  );
}

export default DownloadToggle;
