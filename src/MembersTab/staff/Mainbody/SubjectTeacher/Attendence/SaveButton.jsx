import React, { useState } from "react";
import style from "../../ClassTeacher/ClassCatalog/Attendence/Attendence.module.css";
import { useTranslation } from "react-i18next";
import {
  useSubjectStudentAttendance,
  useSubjectStudentAttendanceUpdate,
} from "../../../../../hooks/member_tab/subject-api";
import QLoader from "../../../../../Loader/QLoader";
import ExportStudentSubjectAttendance from "../../../../../Department/Institute/Components/exportData/ExportStudentSubjectAttendance";
import { useDispatch } from "react-redux";
import { attendanceStoreAction } from "../../../../../redux/store/attendance-slice";
import { Notfication } from "../../../../../validation/Snackbar";
import { useNavigate } from "react-router-dom";

const SaveButton = ({
  today,
  alreadyMark,
  allIdsArray,
  // subjectStudentCurrentAttendanceRefetch,
  clickedIndex,
  setClickedIndex,
  idPresentArray,
  idAbsentArray,
  setIdPresentArray,
  setIdAbsentArray,
  sid,
  isDepartment,
  subjectName,
  setIsRefetch,
  onExtraAction,
  attendaceView,
}) => {
  const [showSave, setShowSave] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [exportAttendance, setExportAttendance] = useState(false);
  const [subjectStudentAttendance] = useSubjectStudentAttendance();
  const [subjectStudentAttendanceUpdate] = useSubjectStudentAttendanceUpdate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  React.useEffect(() => {
    if (idPresentArray?.length || idAbsentArray?.length) {
      setShowSave(true);
    } else {
      setShowSave(false);
    }
  }, [idPresentArray, idAbsentArray]);

  const submitHandler = (flow) => {
    setDisabled((pre) => !pre);
    const dates = today.split("-");
    const day = dates[0] > 9 ? dates[0] : `0${dates[0]}`;
    const month = dates[1] > 9 ? dates[1] : `0${dates[1]}`;
    if (!alreadyMark?._id) {
      const idArray = [];
      allIdsArray?.map((val) => idArray.push(val._id));
      const present = [];
      const absent = [];

      if (idPresentArray?.length) {
        for (let id of idArray) {
          let count1 = 0;
          if (idPresentArray?.includes(id)) {
          } else absent.push(id);
          count1 = count1 + 1;
        }
      } else {
        for (let id of idArray) {
          let count2 = 0;
          if (idAbsentArray?.includes(id)) {
          } else present.push(id);
          count2 = count2 + 1;
        }
      }

      subjectStudentAttendance({
        sid: sid,
        flow: flow,
        attendance: {
          date: `${day}/${month}/${dates[2]}`,
          present: idPresentArray?.length ? idPresentArray : present,
          absent: idAbsentArray?.length ? idAbsentArray : absent,
        },
      })
        .then((res) => {
          if (
            res?.data?.message ===
            "Today will be holiday Provided by department Admin or already marked attendance"
          ) {
            setNotificationState({
              msg: "Today will be holiday Provided by department Admin or already marked attendance",
              run: true,
            });
          } else {
            dispatch(
              attendanceStoreAction.addSubjectAttendance({
                subjectId: sid,
                ldate: `${day}/${month}/${dates[2]}`,
                presentStudent: idPresentArray?.length
                  ? idPresentArray
                  : present,
                absentStudent: idAbsentArray?.length ? idAbsentArray : absent,
                alreadyMark: res?.data?.alreadyMark,
              })
            );
          }

          // subjectStudentCurrentAttendanceRefetch();
          setClickedIndex(0);
          setDisabled((pre) => !pre);
          setIdPresentArray([]);
          setIdAbsentArray([]);
          if (flow === "Extra_Lecture") navigate(-1);
        })
        .catch({});
    } else {
      dispatch(
        attendanceStoreAction.updateSubjectAttendance({
          subjectId: sid,
          ldate: `${day}/${month}/${dates[2]}`,
          presentStudent: idPresentArray?.length ? idPresentArray : [],
          absentStudent: idAbsentArray?.length ? idAbsentArray : [],
          alreadyMark: alreadyMark?._id,
        })
      );
      subjectStudentAttendanceUpdate({
        said: alreadyMark?._id,
        flow: flow,
        attendanceUpdate: {
          date: `${day}/${month}/${dates[2]}`,
          present: idPresentArray?.length ? idPresentArray : [],
          absent: idAbsentArray?.length ? idAbsentArray : [],
        },
      })
        .then(() => {
          setIsRefetch(true);
          // subjectStudentCurrentAttendanceRefetch();
          setClickedIndex(0);
          setDisabled((pre) => !pre);
          setIdPresentArray([]);
          setIdAbsentArray([]);
        })
        .catch({});
    }
  };

  const onCloseAttendance = () => {
    setExportAttendance((pre) => !pre);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {attendaceView === "EXTRA_MARK" ? null : (
          <div className={style.buttons}>
            <div className={style.save} onClick={onCloseAttendance}>
              {t("export_zip_attendance")}
            </div>
            {!isDepartment && (
              <div className={style.save} onClick={onExtraAction}>
                {t("extra_lecture")}
              </div>
            )}
          </div>
        )}

        <div className={style.buttons}>
          {clickedIndex !== 0
            ? showSave &&
              !isDepartment &&
              (attendaceView === "EXTRA_MARK" ? (
                <div
                  className={style.save}
                  onClick={() => submitHandler("Extra_Lecture")}
                >
                  {t("save_as_extra")}
                </div>
              ) : (
                <div
                  className={style.save}
                  onClick={() => submitHandler("Normal_Lecture")}
                >
                  {t("save")}
                </div>
              ))
            : ""}
        </div>
      </div>
      {disabled && <QLoader />}
      {exportAttendance && (
        <ExportStudentSubjectAttendance
          sid={sid}
          onClose={onCloseAttendance}
          className={subjectName}
        />
      )}
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
    </>
  );
};

export default SaveButton;
