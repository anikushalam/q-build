import React from "react";
import { useState } from "react";
import { useSubjectMcqProfile } from "../../../../../hooks/member_tab/subject-api";
import CreateMCQQuestion from "./CreateQuestion/CreateMCQQuestion";
import McqHeader from "./McqHeader";
import McqWrapper from "./McqWrapper";
import AllQuestion from "./Question/AllQuestion";
import CreateSet from "./Sets/CreateSet";
import SetList from "./Sets/SetList";
import TestSetQuestion from "./Sets/TestSetQuestion";
import EditTestSet from "./Sets/EditTestSet";
import style from "./SubjectTeacherMCQ.module.css";
import { useTabReducer } from "./Reducers/MCQTab";

function SubjectTeacherMCQ({ setOpenMcq, sid }) {
  // console.info(mcqTab);
  const [mcqTab, tabHandler] = useTabReducer();
  const [testSetId, setTestSetId] = useState("");
  const { subjectMcqProfile, subjectMcqProfileRefetch } = useSubjectMcqProfile({
    sid: sid,
    skip: !sid,
  });

  React.useEffect(() => {
    if (sid) subjectMcqProfileRefetch();
  }, [sid, subjectMcqProfileRefetch]);

  // console.info("THis sis asufsdg", subjectMcqProfile);
  return (
    <>
      {mcqTab.value === "TEST_SET_LIST" && (
        <div className={style.subjectTeacherMCQ}>
          <McqWrapper>
            <McqHeader
              tabHandler={tabHandler}
              topLevelIndex={setOpenMcq}
              sid={sid}
              subjectMcqProfile={subjectMcqProfile}
              onRefetch={subjectMcqProfileRefetch}
            />
            <SetList
              tabHandler={tabHandler}
              setTestIndex={setOpenMcq}
              tabEventName="TEST_SET_VIEW"
              backIndex="10"
              smid={subjectMcqProfile?.subject?.subjectMasterName}
              cmid={subjectMcqProfile?.subject?.class?.masterClassName}
              usmid={
                subjectMcqProfile?.subject?.universalSubject?.subjectMasterName
              }
              ucmid={
                subjectMcqProfile?.subject?.universalClass?.masterClassName
              }
              setTestSetId={setTestSetId}
            />
          </McqWrapper>
        </div>
      )}

      {mcqTab.value === "CREATE_QUESTION" && (
        <CreateMCQQuestion tabHandler={tabHandler} setIndexx={setOpenMcq} />
      )}
      {mcqTab.value === "CREATE_SET" && (
        <McqWrapper>
          <CreateSet
            tabHandler={tabHandler}
            topLevelIndex={setOpenMcq}
            smid={subjectMcqProfile?.subject?.subjectMasterName}
            cmid={subjectMcqProfile?.subject?.class?.masterClassName}
            usmid={
              subjectMcqProfile?.subject?.universalSubject?.subjectMasterName
            }
            ucmid={subjectMcqProfile?.subject?.universalClass?.masterClassName}
          />
        </McqWrapper>
      )}
      {mcqTab.value === "SEARCH_QUESTION" && (
        <McqWrapper>
          <AllQuestion
            tabHandler={tabHandler}
            topLevelIndex={setOpenMcq}
            tabEventName="TEST_SET_LIST"
            backIndex="3"
            smid={subjectMcqProfile?.subject?.subjectMasterName}
            cmid={subjectMcqProfile?.subject?.class?.masterClassName}
            usmid={
              subjectMcqProfile?.subject?.universalSubject?.subjectMasterName
            }
            ucmid={subjectMcqProfile?.subject?.universalClass?.masterClassName}
          />
        </McqWrapper>
      )}
      {mcqTab.value === "TEST_SET_VIEW" && (
        <McqWrapper>
          <TestSetQuestion
            tabHandler={tabHandler}
            setTestIndex={setOpenMcq}
            type="TEST_SET_VIEW"
            testSetId={testSetId}
            questionSelectionProcess={[]}
            alreadySelectedQuestion={[]}
            sid={sid}
          />
        </McqWrapper>
      )}
      {mcqTab.value === "EDIT_TEST" && (
        <McqWrapper>
          <EditTestSet
            tabHandler={tabHandler}
            topLevelIndex={setOpenMcq}
            smid={subjectMcqProfile?.subject?.subjectMasterName}
            cmid={subjectMcqProfile?.subject?.class?.masterClassName}
            usmid={
              subjectMcqProfile?.subject?.universalSubject?.subjectMasterName
            }
            ucmid={subjectMcqProfile?.subject?.universalClass?.masterClassName}
            editTestSetId={testSetId}
          />
        </McqWrapper>
      )}
    </>
  );
}

export default SubjectTeacherMCQ;
