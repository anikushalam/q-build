import React, { useEffect, useState } from "react";
import style from "./ClassSetting.module.css";
import "./ClassSetting.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import Switch from "@mui/material/Switch";
import {
  useClassAllSubjectComplete,
  useClassCodeRefresh,
  useClassComplete,
  useClassReportSetting,
  useClassSettingReport,
} from "../../../../../hooks/member_tab/class-api";
import { useNavigate, useParams } from "react-router-dom";
import { Notfication } from "../../../../../validation/Snackbar";
import Confirm from "../../SubjectTeacher/Settings/Confirm";
import QLoader from "../../../../../Loader/QLoader";
const label = { inputProps: { "aria-label": "Switch demo" } };
function ClassSetting({ cid, startDate, classCode, classStatus }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const [classCodes, setSlassCodes] = useState(classCode);
  const [setting, setSetting] = useState({
    finalReport: false,
    behaviour: false,
    attendance: false,
    gradeMarks: false,
    aggregatePassingPercentage: 0,
  });
  const [confirmClass, setConfirmClass] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
    type: "error",
  });
  const [classCodeRefresh] = useClassCodeRefresh();
  const [classReportSetting] = useClassReportSetting();
  const [classComplete] = useClassComplete();
  const { classAllSubjectComplete, classAllSubjectCompleteRefetch } =
    useClassAllSubjectComplete({
      data: {
        cid: cid,
      },
      skip: !cid,
    });

  const { classSettingReport, classSettingReportRefetch } =
    useClassSettingReport({
      cid: cid,
      skip: !cid,
    });
  useEffect(() => {
    if (cid) {
      classAllSubjectCompleteRefetch();
      classSettingReportRefetch();
    }
  }, [cid, classAllSubjectCompleteRefetch, classSettingReportRefetch]);

  useEffect(() => {
    if (classSettingReport?.finalReportsSettings) {
      setSetting({
        finalReport: classSettingReport?.finalReportsSettings?.finalReport,
        behaviour: classSettingReport?.finalReportsSettings?.behaviour,
        attendance: classSettingReport?.finalReportsSettings?.attendance,
        gradeMarks: classSettingReport?.finalReportsSettings?.gradeMarks,
        aggregatePassingPercentage:
          classSettingReport?.finalReportsSettings?.aggregatePassingPercentage,
      });
    }
  }, [classSettingReport?.finalReportsSettings]);
  useEffect(() => {
    if (classCode) setSlassCodes(classCode);
  }, [classCode]);

  const RefreshCodeHandler = () => {
    classCodeRefresh({
      cid: cid,
    })
      .then((res) => {
        setSlassCodes(res.data?.classCode);
      })
      .catch({});
  };

  const onClickClassCompleteHandler = () => {
    if (
      classAllSubjectComplete?.classStatus !== "UnCompleted" ||
      classStatus !== "UnCompleted"
    ) {
      setNotificationState({
        msg: t("already_class_completed"),
        run: true,
        type: "success",
      });
    } else {
      setConfirmClass(true);
    }
  };

  const onChangeTolgeHandler = (val) => {
    setSetting((s) => ({
      ...s,
      [val.type]: val.value,
    }));
    classReportSetting({
      setting: {
        [val.type]: val.value,
      },
      cid: cid,
    })
      .then(() => {
        // console.info(res);
      })
      .catch({});
  };

  const onChangeTolgeReportHandler = (val) => {
    if (val.value) {
      // console.info(val);
      setSetting((s) => ({
        ...s,
        [val.type]: val.value,
        behaviour: true,
        attendance: true,
      }));
      classReportSetting({
        setting: {
          [val.type]: val.value,
          behaviour: true,
          attendance: true,
        },
        cid: cid,
      })
        .then(() => {
          // console.info(res);
        })
        .catch({});
    } else {
      // console.info("else", val);

      setSetting((s) => ({
        ...s,
        [val.type]: val.value,
        behaviour: false,
        attendance: false,
      }));
      classReportSetting({
        setting: {
          [val.type]: val.value,
          behaviour: false,
          attendance: false,
        },
        cid: cid,
      })
        .then(() => {
          // console.info(res);
        })
        .catch({});
    }
  };

  const onSubmitCompleteClass = () => {
    setConfirmClass((pre) => !pre);
    setDisabled((pre) => !pre);
    classComplete({
      cid: cid,
      status: { classStatus: "Completed" },
    })
      .then((res) => {
        if (
          res.data.message ===
          "Can not completed class due to all subject is not completed"
        ) {
          setNotificationState({
            msg: res.data.message,
            run: true,
            type: "error",
          });
        } else {
          navigate(`/q/${params.username}/feed`);
        }
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  return (
    <>
      <div className={style.ClassSetting}>
        <h6>{t("setting")}</h6>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <div className={style.promoteSetting}>
          <div className={style.promoteSettingLeft}>
            {/* <div className={style.startDate1}>
            <p>Class Start Date</p>
            <h6>{startDate}</h6>
          </div> */}
            <div className={style.startDate}>
              <div className={style.refreshIcon}>
                <span className="text-white">
                  <img
                    src="/images/refresh-icon.svg"
                    title="Refresh"
                    alt="Refresh"
                    onClick={RefreshCodeHandler}
                  />
                </span>
              </div>
              <p>{t("class_code")}</p>
              <h6>{classCodes}</h6>
            </div>
            <div className={style.label}>
              <label htmlFor="aggregate">{t("pass_percentage")}</label>
            </div>
            <div className={style.inputBox}>
              <input
                id="aggregate"
                type="tel"
                onChange={(e) =>
                  onChangeTolgeHandler({
                    type: "aggregatePassingPercentage",
                    value: e.target.value,
                  })
                }
                value={setting.aggregatePassingPercentage}
                placeholder={0}
              />
            </div>

            <div
              className={style.completebtn}
              onClick={onClickClassCompleteHandler}
            >
              {t("complete_class")}
            </div>
          </div>
          <div className={style.promoteSettingRight}>
            <div className={style.row}>
              <div>
                <h6>{t("final")}</h6>
              </div>
              <Switch
                {...label}
                onChange={(e) =>
                  onChangeTolgeReportHandler({
                    type: "finalReport",
                    value: e.target.checked,
                  })
                }
                checked={setting.finalReport}
              />
            </div>

            <div className={style.row}>
              <div>
                <h6>{t("grade_make_report")}</h6>
              </div>
              <Switch
                {...label}
                onChange={(e) =>
                  onChangeTolgeHandler({
                    type: "gradeMarks",
                    value: e.target.checked,
                  })
                }
                checked={setting.gradeMarks}
              />
            </div>
            <div className={style.row}>
              <div>
                <h6>{t("attendance")}</h6>
              </div>
              <Switch
                {...label}
                onChange={(e) =>
                  onChangeTolgeHandler({
                    type: "attendance",
                    value: e.target.checked,
                  })
                }
                checked={setting.attendance}
              />
            </div>

            <div className={style.row}>
              <div>
                <h6>{t("behaviour")}</h6>
              </div>
              <Switch
                {...label}
                onChange={(e) =>
                  onChangeTolgeHandler({
                    type: "behaviour",
                    value: e.target.checked,
                  })
                }
                checked={setting.behaviour}
              />
            </div>
          </div>
        </div>
        {confirmClass && (
          <Confirm
            onClose={() => setConfirmClass((pre) => !pre)}
            confirm={confirm}
            setConfirm={setConfirm}
            onSubjectComplete={onSubmitCompleteClass}
            type="classConfirm"
          />
        )}
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type={notificationState.type}
        />
        {disabled && <QLoader />}
      </div>
    </>
  );
}

export default ClassSetting;
