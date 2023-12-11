import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import HostelApplicationDetail from "./HostelApplicationDetail";
import HostelApplyApplication from "./HostelApplyApplication";
import style from "./HostelJoining.module.css";

const HostelJoiningForm = ({ instituteId, hostelId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    document.getElementById("scrollView")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, []);
  const onGoback = () => {
    if (preview) {
      setPreview("");
    } else {
      navigate(-1);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        paddingTop: "1vw",
      }}
    >
      <div className={style.goback_container} id="scrollView">
        <div className={style.goback_container_text} onClick={onGoback}>
          <img src="/images/arr-left-white.svg" alt="go back icon" />
          <h6 className={style.goback_container_text_go}>{t("go_back")}</h6>
        </div>
      </div>
      {preview ? (
        <HostelApplicationDetail preview={preview} hostelId={hostelId} />
      ) : (
        <HostelApplyApplication
          instituteId={instituteId}
          setPreview={setPreview}
          preview={preview}
        />
      )}
    </div>
  );
};

export default HostelJoiningForm;
