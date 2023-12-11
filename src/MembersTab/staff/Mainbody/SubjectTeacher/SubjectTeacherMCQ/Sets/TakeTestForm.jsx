import React, { useState } from "react";
import { useEffect } from "react";
import { useSubjectMcqTestsetTaken } from "../../../../../../hooks/member_tab/subject-api";
import QLoader from "../../../../../../Loader/QLoader";
import McqCommonHeader from "../McqCommonHeader";
import style from "./CreateSet.module.css";
import { useTranslation } from "react-i18next";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";

function TakeTestForm({
  setTakeTestIndex,
  tsid,
  sid,
  tabHandler,
  setTestIndex,
}) {
  const [takeTest, setTakeTest] = useState({
    tsid: tsid,
    testExamName: "",
    testDate: "",
    testStart: "",
    testEnd: "",
    testDuration: 0,
  });
  const [disabled, setDisabled] = React.useState(false);

  const [subjectMcqTestsetTaken] = useSubjectMcqTestsetTaken();

  useEffect(() => {
    if (tsid) setTakeTest((prev) => ({ ...prev, tsid: tsid }));
  }, [tsid]);

  const timeFormatConverter = (vale) => {
    const splitValue = vale?.split(":");
    let meridian = "";
    if (splitValue[0] > 12) {
      meridian = "Pm";
      splitValue[0] -= 12;
    } else if (splitValue[0] < 12) {
      meridian = "Am";
      if (splitValue[0] === 0) {
        splitValue[0] = 12;
      }
    } else {
      meridian = "Pm";
    }
    const hour = splitValue[0] > 9 ? splitValue[0] : `0${+splitValue[0]}`;
    return `${hour}:${splitValue[1]} ${meridian}`;
  };
  // console.info("thsisfsf", sid);
  const onDateCapture = (val) => {
    setTakeTest((prev) => ({
      ...prev,
      testDate: val,
    }));
  };
  const onTakeTest = () => {
    setDisabled(true);
    subjectMcqTestsetTaken({
      sid: sid,
      takeTestset: {
        tsid: takeTest.tsid,
        testExamName: takeTest.testExamName,
        testDate: takeTest.testDate,
        testStart: timeFormatConverter(takeTest.testStart),
        testEnd: timeFormatConverter(takeTest.testEnd),
        testDuration: takeTest.testDuration,
      },
    })
      .then((res) => {
        // console.info(res);
        tabHandler("TEST_SET_LIST");
        setTestIndex("3");
        setDisabled(false);
      })
      .catch({});
  };
  const { t } = useTranslation();
  return (
    <>
      <McqCommonHeader
        name="Test Set"
        tabEventName="TEST_SET_VIEW"
        backIndex={0}
        tabHandler={() => {}}
        topLevelIndex={setTakeTestIndex}
      />
      <div className={style.form_container}>
        <h6>{t("exam/test_name")}</h6>
        <input
          type="text"
          placeholder={t("enter_the_exam_name")}
          onChange={(e) =>
            setTakeTest({ ...takeTest, testExamName: e.target.value })
          }
        />
        <JoinFormCalender
          labelText={t("date")}
          name={"dateoftest"}
          placeholder={t("select_exam_date")}
          value={takeTest.testDate}
          onDateFunction={onDateCapture}
          customStyleContainer={{
            position: "relative",
            marginBottom: "0.9rem",
          }}
        />
        <div className={style.form_time_field}>
          <div className={style.form_time_field_each}>
            <h6>{t("from")}</h6>
            <input
              type="time"
              placeholder="00:00"
              onChange={(e) =>
                setTakeTest({ ...takeTest, testStart: e.target.value })
              }
            />
          </div>
          <div className={style.form_time_field_each}>
            <h6>{t("to")}</h6>
            <input
              type="time"
              placeholder="00:00"
              onChange={(e) =>
                setTakeTest({ ...takeTest, testEnd: e.target.value })
              }
            />
          </div>
        </div>
        <h6 className={style.time_duration}>
          {" "}
          {t("duration")} {t("in_minutes")}
        </h6>
        <input
          type="number"
          placeholder="00 Min"
          onChange={(e) =>
            setTakeTest({ ...takeTest, testDuration: e.target.value })
          }
        />
        <div className={style.take_test_set} onClick={onTakeTest}>
          {t("take_test")}
        </div>
      </div>
      {disabled && <QLoader />}
    </>
  );
}

export default TakeTestForm;
