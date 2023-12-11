import React, { useEffect, useState } from "react";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../Academics.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import SaveRecord from "./SaveRecord";
import AllAcademicChapter from "../AcademicDetail/AllAcademicChapter";
import QLoader from "../../../../../../Loader/QLoader";
import {
  useAddDailyUpdateWithRecording,
  useSubjectExtraLecture,
  useUpdateDailyUpdateWithRecording,
} from "../../../../../../hooks/member_tab/subject-api";
import DatePicker from "../../../../../../Custom/Input/DatePicker/DatePicker";

const AddAcademicRecord = ({ onClose, sid, onRefetch, dailyMenu }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(2);
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    updateDescription: "",
    rec_status: "Lecture",
    files: [],
    date: "",
  });
  const [topicId, setTopicId] = useState([]);
  const [topic, setTopic] = useState([]);
  const [extraLectureList, setExtraLectureList] = useState([]);
  const [extraId, setExtraId] = useState([]);
  const [addDailyUpdateWithRecording] = useAddDailyUpdateWithRecording();
  const [updateDailyUpdateWithRecording] = useUpdateDailyUpdateWithRecording();
  const [subjectExtraLecture] = useSubjectExtraLecture();

  useEffect(() => {
    if (dailyMenu?._id) {
      let tId = [];
      let tTopic = [];

      for (let tp of dailyMenu?.daily_topic) {
        tId.push({
          topicId: tp?.topic?._id,
          current_status: tp?.current_status,
        });
        tTopic.push(tp?.topic);
      }
      setState({
        updateDescription: dailyMenu?.updateDescription,
        rec_status: dailyMenu?.daily_topic?.[0]?.status,
        files: [],
      });
      setTopicId(() => tId);
      setTopic(() => tTopic);
    }
  }, [dailyMenu]);

  const onCurrentClose = () => {
    if (step === 2) {
      onClose();
    } else if (step === 1) {
      setStep(0);
    } else if (step === 3) {
      setStep(2);
    } else {
      setStep(2);
    }
  };

  const onGrabChapterId = (tval, status) => {
    let checkValidate = topicId?.find((dt) => dt?.topicId === tval?._id);
    if (checkValidate) {
      // if (checkValidate?.current_status === status) {
      setTopicId((tid) => tid?.filter((val) => val?.topicId !== tval?._id));
      setTopic((tname) => tname?.filter((tl) => tl?._id !== tval?._id));
      // } else {
      //   let arr = topicId;
      //   for (let i = 0; i < arr?.length; i++) {
      //     if (arr[i]?.topicId === tval?._id) {
      //       arr[i].current_status = status;
      //       break;
      //     }
      //   }
      //   setTopicId(arr);
      // }
    } else {
      setTopicId((prev) => [
        ...prev,
        {
          topicId: tval?._id,
          current_status: status,
        },
      ]);
      setTopic((prev) => [...prev, tval]);
    }
  };
  const onNext = () => {
    if (topicId?.length > 0) {
      setStep(1);
    }
  };

  const onDateFunction = (val) => {
    setStep(7);
    setDisabled((pre) => !pre);
    let splitDate = val?.split("/");
    let dob = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    setState((prev) => ({
      ...prev,
      date: new Date(dob),
    }));
    subjectExtraLecture({
      sid: sid,
      extraBody: {
        date: val,
        flow: "Extra_Lecture",
      },
    })
      .then((res) => {
        if (res?.data?.attendance_all?.length > 0) {
          setExtraLectureList(res?.data?.attendance_all);
          setStep(3);
        } else {
          setStep(0);
        }
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onAddRecord = () => {
    if (sid) {
      // if (topicId?.length > 0 && sid) {
      setDisabled((pre) => !pre);
      if (dailyMenu?._id) {
        updateDailyUpdateWithRecording({
          sid: sid,
          did: dailyMenu?._id,
          dailyUpdate: {
            arr: topicId,
            rec_status: state.rec_status,
            updateDescription: state.updateDescription,
          },
        })
          .then(() => {
            onRefetch();
            onClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      } else {
        const formData = new FormData();
        formData.append("date", state.date);
        formData.append("updateDescription", state.updateDescription);
        if (topicId?.length > 0) {
          formData.append("arr", JSON.stringify(topicId));
        } else {
        }
        formData.append("rec_status", state.rec_status);
        if (extraId?.length > 0) {
          formData.append("extra_lecture", JSON.stringify(extraId));
        } else {
        }

        for (let fl of state.files) {
          formData.append("file", fl);
        }

        addDailyUpdateWithRecording({
          sid: sid,
          addDailyUpdate: formData,
        })
          .then(() => {
            onRefetch();
            onClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };
  const onNextExtra = () => {
    setStep(0);
  };
  const onNextRegular = () => {
    setStep(0);
  };
  const onSelectExtraLecture = (id) => {
    if (extraId?.includes(id)) {
      setExtraId((prev) => prev?.filter((arg) => arg !== id));
    } else {
      setExtraId((prev) => [...prev, id]);
    }
  };

  // console.info("dailyMenu", dailyMenu);
  return (
    <PopupWrapper onClose={onCurrentClose}>
      {step === 2 ? (
        <DatePicker
          datePickerPosition={{
            position: "rlative",
            top: "-5rem",
            left: "-10rem",
            borderRadius: "0.375rem",
            paddingBottom: "0",
          }}
          range={false}
          onClose={onCurrentClose}
          dateInput={state.date}
          setDateInput={onDateFunction}
          isClose
        />
      ) : step === 3 ? (
        <div className={style.add_academic_record}>
          <div className={style.add_academic_record_title}>
            <div className={style.add_academic_record_text}>
              <img
                src="/images/arrow-left-fees-icon.svg"
                onClick={onCurrentClose}
                alt="back icon"
                style={{
                  cursor: "pointer",
                }}
              />
              <h6>{t("select_extra_lecture")}</h6>
            </div>
            <button onClick={onNextExtra}>{t("next")}</button>
          </div>
          <BorderBottom
            customStyle={{
              width: "100%",
              marginBottom: "0.7rem",
            }}
          />
          <h6 className={style.extra_lecture_container} onClick={onNextRegular}>
            {t("regular")}
          </h6>
          {extraLectureList?.map((attendance, index) => (
            <h6
              className={
                extraId?.includes(attendance?._id)
                  ? `${style.extra_lecture_container} ${style.extra_lecture_container_active}`
                  : style.extra_lecture_container
              }
              key={attendance?._id}
              onClick={() => onSelectExtraLecture(attendance?._id)}
            >
              {t("extra")} {index + 1}
            </h6>
          ))}
        </div>
      ) : (
        <div className={style.add_academic_record}>
          <div className={style.add_academic_record_title}>
            <div className={style.add_academic_record_text}>
              <img
                src="/images/arrow-left-fees-icon.svg"
                onClick={onCurrentClose}
                alt="back icon"
                style={{
                  cursor: "pointer",
                }}
              />
              <h6>{t(step === 0 ? "select_topic" : "save_record")}</h6>
            </div>
            {step === 0 ? (
              <button onClick={onNext}>{t("next")}</button>
            ) : (
              <button onClick={onAddRecord}>{t("save")}</button>
            )}
          </div>
          <BorderBottom
            customStyle={{
              width: "100%",
            }}
          />
          {step === 0 ? (
            <>
              <AllAcademicChapter
                sid={sid}
                isView="SUBJECT_TEACHER"
                onGrabChapterId={onGrabChapterId}
                topicId={topicId}
                recordLecture
              />
            </>
          ) : (
            <SaveRecord
              topic={topic}
              setState={setState}
              state={state}
              isEdit={dailyMenu?._id}
              topicId={topicId}
            />
          )}
        </div>
      )}
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default AddAcademicRecord;
