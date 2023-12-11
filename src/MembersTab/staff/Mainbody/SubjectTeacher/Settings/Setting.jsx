import React, { useState, useEffect } from "react";
import {
  useSubjectComplete,
  useSubjectUpdate,
  useSubjectSetting,
} from "../../../../../hooks/member_tab/subject-api";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../Loader/QLoader";
import { Notfication } from "../../../../../validation/Snackbar";
import Confirm from "./Confirm";
import style from "./Setting.module.css";
import { useNavigate, useParams } from "react-router-dom";
const Setting = ({ sid, onDesignationRefetch }) => {
  const [passingMark, setPassingMark] = useState(0);
  const [openConfirm, setOpenConfirm] = useState(false);
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [run, setRun] = useState(false);
  const [msg, setMsg] = useState("");
  const [subjectComplete] = useSubjectComplete();
  const [subjectUpdate] = useSubjectUpdate();
  const navigate = useNavigate();
  const params = useParams();
  const { subjectSetting, subjectSettingRefetch } = useSubjectSetting({
    sid: sid,
    skip: !sid,
  });

  useEffect(() => {
    if (sid) subjectSettingRefetch();
  }, [sid, subjectSettingRefetch]);
  useEffect(() => {
    if (subjectSetting?.subject) {
      setPassingMark(subjectSetting?.subject?.setting?.subjectPassingMarks);
    }
  }, [subjectSetting?.subject]);
  //   console.info("thisvfhsd", subjectSetting);
  const onSubjectComplete = () => {
    setOpenConfirm(false);
    setDisabled(true);
    subjectComplete({
      sid: sid,
      status: {
        subjectStatus: "Completed",
      },
    })
      .then(() => {
        // console.info("res", res);
        navigate(`/q/${params.username}/feed`);
        setDisabled(false);
      })
      .catch({});
  };

  const onSubjectUpdate = (e) => {
    setPassingMark(e.target.value);
    subjectUpdate({
      sid: sid,
      subjectUpdate: {
        setting: {
          subjectPassingMarks: e.target.value,
        },
      },
    })
      .then(() => {
        // console.info("res", res);
        setMsg(t("subject_updated"));
        setRun(true);
      })
      .catch({});
  };

  return (
    <div className={style.setting_conatiner}>
      <div className={style.setting_passing}>
        <div className={style.label}>
          <label htmlFor="aggregate">{t("passing_marks")}</label>
        </div>
        <div className={style.inputBox}>
          <input
            id="aggregate"
            type="tel"
            onChange={onSubjectUpdate}
            value={passingMark}
            placeholder={t("enter_subject_passing")}
          />
        </div>
      </div>

      {/* <div
        className={style.setting_complete}
        onClick={() => setOpenConfirm(true)}
      >
        {t("complete_subject")}
      </div> */}
      <Notfication
        run={run}
        setRun={setRun}
        msg={msg}
        postiton="bottom"
        type="success"
      />
      {disabled && <QLoader />}
      {openConfirm && (
        <Confirm
          onClose={() => setOpenConfirm(false)}
          confirm={confirm}
          setConfirm={setConfirm}
          onSubjectComplete={onSubjectComplete}
        />
      )}
    </div>
  );
};

export default Setting;
