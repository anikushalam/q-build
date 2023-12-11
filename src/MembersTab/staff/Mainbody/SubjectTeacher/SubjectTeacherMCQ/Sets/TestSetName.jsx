import React, { useState } from "react";
import { FileNotUpload } from "../../../../../../validation/Snackbar";
import McqCommonHeader from "../McqCommonHeader";
import style from "./CreateSet.module.css";
import { useTranslation } from "react-i18next";

const TestSetName = ({
  tabHandler,
  topLevelIndex,
  setCreateTestSet,
  createTestSet,
  setTestIndex,
}) => {
  const [run, setRun] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const onAddQuestion = () => {
    if (!createTestSet.testName) {
      setMsg("Please enter test set name");
      setRun((run) => !run);
    } else setTestIndex(2);
  };
  return (
    <>
      <McqCommonHeader
        name={t("test_set")}
        tabEventName="TEST_SET_LIST"
        backIndex="3"
        tabHandler={tabHandler}
        topLevelIndex={topLevelIndex}
      />
      <div className={style.set_name}>
        <input
          type="text"
          placeholder={t("write_down_the_test_set_name")}
          value={createTestSet.testName}
          onChange={(e) =>
            setCreateTestSet((state) => ({
              ...state,
              testName: e.target.value,
            }))
          }
        />
        <div className={style.add_question_testset} onClick={onAddQuestion}>
          {t("add_questions")}
        </div>
      </div>
      <FileNotUpload run={run} setRun={setRun} msg={msg} />
    </>
  );
};

export default TestSetName;
