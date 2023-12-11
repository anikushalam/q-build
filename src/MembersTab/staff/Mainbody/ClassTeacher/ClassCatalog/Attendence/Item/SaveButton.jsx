import React, { useState } from "react";
import {
  useClassStudentAttendance,
  useClassStudentAttendanceUpdate,
} from "../../../../../../../hooks/member_tab/class-api";
import style from "../Attendence.module.css";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../../../Loader/QLoader";
import ExportStudentAttendance from "../../../../../../../Department/Institute/Components/exportData/ExportStudentAttendance";
import { useDispatch } from "react-redux";
import { attendanceStoreAction } from "../../../../../../../redux/store/attendance-slice";
import { Notfication } from "../../../../../../../validation/Snackbar";

const SaveButton = ({
  today,
  alreadyMark,
  allIdsArray,
  // classStudentCurrentAttendanceRefetch,
  clickedIndex,
  setClickedIndex,
  idPresentArray,
  idAbsentArray,
  setIdPresentArray,
  setIdAbsentArray,
  cid,
  isDepartment,
  className,
  setIsRefetch,
}) => {
  const [showSave, setShowSave] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [classStudentAttendance] = useClassStudentAttendance();
  const [classStudentAttendanceUpdate] = useClassStudentAttendanceUpdate();
  const { t } = useTranslation();
  const [exportAttendance, setExportAttendance] = useState(false);
  const dispatch = useDispatch();
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

  const submitHandler = () => {
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
      classStudentAttendance({
        cid: cid,
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
              attendanceStoreAction.addClassAttendance({
                clsId: cid,
                ldate: `${day}/${month}/${dates[2]}`,
                presentStudent: idPresentArray?.length
                  ? idPresentArray
                  : present,
                absentStudent: idAbsentArray?.length ? idAbsentArray : absent,
                alreadyMark: res?.data?.alreadyMark,
              })
            );
          }
          // classStudentCurrentAttendanceRefetch();
          setClickedIndex(0);
          setDisabled((pre) => !pre);
          setIdPresentArray([]);
          setIdAbsentArray([]);
        })
        .catch({});
    } else {
      dispatch(
        attendanceStoreAction.updateClassAttendance({
          clsId: cid,
          ldate: `${day}/${month}/${dates[2]}`,
          presentStudent: idPresentArray?.length ? idPresentArray : [],
          absentStudent: idAbsentArray?.length ? idAbsentArray : [],
          alreadyMark: alreadyMark?._id,
        })
      );
      classStudentAttendanceUpdate({
        said: alreadyMark?._id,
        attendanceUpdate: {
          date: `${day}/${month}/${dates[2]}`,
          present: idPresentArray?.length ? idPresentArray : [],
          absent: idAbsentArray?.length ? idAbsentArray : [],
        },
      })
        .then(() => {
          setIsRefetch(true);
          // classStudentCurrentAttendanceRefetch();
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
        <div className={style.buttons}>
          <div className={style.save} onClick={onCloseAttendance}>
            {t("export_zip_attendance")}
          </div>
        </div>
        <div className={style.buttons}>
          {clickedIndex !== 0
            ? showSave &&
              !isDepartment && (
                <>
                  <div className={style.save} onClick={submitHandler}>
                    {t("save")}
                  </div>
                </>
              )
            : ""}
        </div>
      </div>
      {disabled && <QLoader />}
      {exportAttendance && (
        <ExportStudentAttendance
          cid={cid}
          onClose={onCloseAttendance}
          className={className}
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
