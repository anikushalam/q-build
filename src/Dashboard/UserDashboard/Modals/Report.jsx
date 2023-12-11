import React, { useState } from "react";
import { Dialog } from "@mui/material";
import Divider from "@mui/material/Divider";
import style from "./Report.module.css";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useTranslation } from "react-i18next";
import "./AddDisplay.css";
import {
  usePostInstituteReport,
  usePostReport,
} from "../../../Post/Institute/Components/post-api";

function Report({ report, hideModal, id, reportId }) {
  const [content, setContent] = useState(null);
  const [postReport] = usePostReport();
  const { t } = useTranslation();
  const [postInstituteReport] = usePostInstituteReport();
  const onClickHandler = (val) => {
    setContent(val);
  };
  const onSubmitReport = () => {
    if (id && reportId?.pid) {
      if (reportId?.reportType === "user")
        postReport({
          pid: reportId?.pid,
          id: id,
          reportPost: {
            reportStatus: content,
          },
        })
          .then(() => {
            // console.info(res);
          })
          .catch({});
      else
        postInstituteReport({
          pid: reportId?.pid,
          id: id,
          reportPost: {
            reportStatus: content,
          },
        })
          .then(() => {
            // console.info(res);
          })
          .catch({});
    }
    hideModal(false);
  };
  // console.info("this is report id", reportId);
  return (
    <Dialog open={report} onClose={() => hideModal(false)}>
      <div className={style.report}>
        <div className={style.title}>
          <h5>{t("report_type")}</h5>
          <div className={style.submitbtn} onClick={onSubmitReport}>
            {t("report_type")}
          </div>
        </div>
        <Divider />

        <div
          className={`${style.content} row`}
          onClick={() => onClickHandler("Sexual content")}
        >
          <div className={`${style.text} col-10`}>
            <p>{t("sexual_content")}</p>
          </div>

          <div className={`${style.radio} col-2`}>
            <FormControlLabel value="female" control={<Radio />} />
          </div>
        </div>
        <div
          className={`${style.content} row`}
          onClick={() => onClickHandler("Violent or repulsive content")}
        >
          <div className={`${style.text} col-8`}>
            <p>{t("violence_replusive")}</p>
          </div>

          <div className={`${style.radio} col-4`}>
            <FormControlLabel value="female" control={<Radio />} disabled />
          </div>
        </div>
        <div
          className={`${style.content} row`}
          onClick={() => onClickHandler("Hateful or abusive content")}
        >
          <div className={`${style.text} col-8`}>
            <p>{t("hateful_abusive")}</p>
          </div>

          <div className={`${style.radio} col-4`}>
            <FormControlLabel value="female" control={<Radio />} />
          </div>
        </div>
        <div
          className={`${style.content} row`}
          onClick={() => onClickHandler("Harmful or dangerous act")}
        >
          <div className={`${style.text} col-8`}>
            <p>{t("harmful_danger")}</p>
          </div>

          <div className={`${style.radio} col-4`}>
            <FormControlLabel value="female" control={<Radio />} />
          </div>
        </div>
        <div
          className={`${style.content} row`}
          onClick={() => onClickHandler("Spam or misleading")}
        >
          <div className={`${style.text} col-8`}>
            <p>{t("spam_misleadleding")}</p>
          </div>

          <div className={`${style.radio} col-4`}>
            <FormControlLabel value="female" control={<Radio />} />
          </div>
        </div>
        <div
          className={`${style.content} row`}
          onClick={() => onClickHandler("Other")}
        >
          <div className={`${style.text} col-8`}>
            <p>{t("other")}</p>
          </div>

          <div className={`${style.radio} col-4`}>
            <FormControlLabel value="female" control={<Radio />} />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default Report;
