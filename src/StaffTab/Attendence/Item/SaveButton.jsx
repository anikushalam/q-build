import React from "react";
import { useSelector } from "react-redux";
import {
  useMarkAttendance,
  useUpdateMarkAttendance,
} from "../../../hooks/attendance-api";
import QLoader from "../../../Loader/QLoader";
import style from "../Attendence.module.css";
import { useTranslation } from "react-i18next";

const SaveButton = ({
  today,
  alreadyMark,
  allIdsArray,

  allAttendanceRefetch,
  clickedIndex,
  setClickedIndex,
  idPresentArray,
  idAbsentArray,
  setIdPresentArray,
  setIdAbsentArray,
}) => {
  const [showSave, setShowSave] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const ids = useSelector((state) => state.idChange);
  const [markAttendance] = useMarkAttendance();
  const [updateAttendance] = useUpdateMarkAttendance();

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
      markAttendance({
        id: ids?.id,
        payload: {
          date: `${day}/${month}/${dates[2]}`,
          present: idPresentArray?.length ? idPresentArray : present,
          absent: idAbsentArray?.length ? idAbsentArray : absent,
        },
      })
        .then(() => {
          allAttendanceRefetch();

          setClickedIndex(0);
          setDisabled((pre) => !pre);

          setIdPresentArray([]);
          setIdAbsentArray([]);
        })
        .catch(() => setDisabled((pre) => !pre));
    } else {
      updateAttendance({
        said: alreadyMark?._id,
        payload: {
          date: `${day}/${month}/${dates[2]}`,
          present: idPresentArray?.length ? idPresentArray : [],
          absent: idAbsentArray?.length ? idAbsentArray : [],
        },
      })
        .then(() => {
          allAttendanceRefetch();

          setClickedIndex(0);
          setDisabled((pre) => !pre);

          setIdPresentArray([]);
          setIdAbsentArray([]);
        })

        .catch(() => setDisabled((pre) => !pre));
    }
  };

  const { t } = useTranslation();

  return (
    <div className={style.buttons}>
      {clickedIndex !== 0
        ? showSave && (
            <>
              <div className={style.leaves}>Holiday</div>

              <div className={style.save} onClick={submitHandler}>
                {t("save")}
              </div>
            </>
          )
        : ""}
      {disabled && <QLoader />}
    </div>
  );
};

export default SaveButton;
