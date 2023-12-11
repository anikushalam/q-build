import React from "react";
import AllQuestion from "../Question/AllQuestion";
import SearchQuestion from "../SearchQuestion";
import style from "./CreateSet.module.css";
import SetList from "./SetList";
import { useTranslation } from "react-i18next";

const QuestionAndSet = ({
  setTestIndex,
  createTestSet,
  smid,
  cmid,
  usmid,
  ucmid,
  setCreateTestSet,
  setSelectedQuestion,
  setTestSetId,
}) => {
  const [showIndex, setShowIndex] = React.useState(0);
  const showHandler = () => {};
  const { t } = useTranslation();
  return (
    <>
      {showIndex === 0 && (
        <>
          <div
            className={style.create_set_header}
            style={{ marginBottom: "1vw" }}
          >
            <div className={style.left_set_header}>
              <img
                src="/images/members/arrow-left.svg"
                alt=""
                onClick={() => {
                  setTestIndex(1);
                }}
              />
              <h6>{createTestSet?.testName || t("test_set_name")}</h6>
            </div>
            <div className={style.left_set_header}>
              <SearchQuestion
                width="250px"
                tabEventName="SEARCH_QUESTION"
                tabHandler={showHandler}
                backIndex={1}
                topLevelIndex={setShowIndex}
              />
              <div
                className={style.add_question}
                style={{ marginTop: "0" }}
                onClick={() => setTestIndex(3)}
              >
                {t("add_new_question")}
              </div>
            </div>

            {/* <img
            className={style.createMCQQuestionTopMenu}
            src="/images/members/edit-icon.svg"
            alt=""
          /> */}
          </div>

          <SetList
            tabHandler={showHandler}
            setTestIndex={setTestIndex}
            backIndex={5}
            tabEventName="TEST_SET_OPEN"
            smid={smid}
            cmid={cmid}
            usmid={usmid}
            ucmid={ucmid}
            setTestSetId={setTestSetId}
          />
        </>
      )}
      {showIndex === 1 && (
        <AllQuestion
          tabHandler={showHandler}
          topLevelIndex={setShowIndex}
          setTestIndex={setTestIndex}
          tabEventName="SEARCH_QUESTION_SET"
          backIndex={0}
          smid={smid}
          cmid={cmid}
          usmid={usmid}
          ucmid={ucmid}
          setCreateTestSet={setCreateTestSet}
          createTestSet={createTestSet}
          setSelectedQuestion={setSelectedQuestion}
        />
      )}
    </>
  );
};

export default QuestionAndSet;
