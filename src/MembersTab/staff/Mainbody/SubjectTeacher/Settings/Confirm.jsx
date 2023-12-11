import React from "react";
import Overlay from "../../../../../Search/Overlay";
import style from "./Setting.module.css";
import SearchModalWrapper from "../../../../../Search/SearchModalWrapper";
import { FileNotUpload } from "../../../../../validation/Snackbar";
import { useTranslation } from "react-i18next";

const Confirm = ({ onClose, confirm, setConfirm, onSubjectComplete, type }) => {
  const { t } = useTranslation();
  const [run, setRun] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  const onConfirmToComplete = () => {
    if (confirm === "Confirm") onSubjectComplete();
    else {
      setMsg("Please check again your spelling...");
      setRun((re) => !re);
    }
  };

  return (
    <>
      <SearchModalWrapper onClose={onClose} />
      <Overlay>
        <div className={style.confirm_conatiner}>
          <div className={style.confirm_title}>
            <h6 className={style.confirm_title_heading}>
              {t("confirm_to_complete")} {type ? t("Class") : t("subject")}
            </h6>
            <img
              src="/images/close-post-icon.svg"
              onClick={onClose}
              alt="staff assign pop close icon"
              title="Close"
            />
          </div>

          <input
            id="confirm"
            type="text"
            onChange={(e) => setConfirm(e.target.value)}
            value={confirm}
            placeholder={`${t("Please type 'Confirm' to complete")} ${
              type ? t("Class") : t("subject")
            }`}
            className={style.confirm_input}
          />
          <div
            className={style.setting_complete}
            style={{ marginTop: "4.2vw" }}
            onClick={onConfirmToComplete}
          >
            {t("complete")} {type ? "Class" : "Subject"}
          </div>
        </div>
      </Overlay>
      <FileNotUpload run={run} msg={msg} setRun={setRun} />
    </>
  );
};

export default Confirm;
