import React from "react";
import { useEffect } from "react";
import { useSubjectMcqTestset } from "../../../../../../hooks/member_tab/subject-api";
import style from "./SetList.module.css";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const SetList = ({
  setTestIndex,
  tabEventName,
  backIndex,
  tabHandler,
  smid,
  cmid,
  usmid,
  ucmid,
  setTestSetId,
}) => {
  const { t } = useTranslation();
  const [allTestset, setAllTestset] = React.useState([]);
  const [ref, inView] = useInView();
  const [state, setState] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const { subjectMcqTestset, subjectMcqTestsetRefetch } = useSubjectMcqTestset({
    data: {
      smid: smid,
      cmid: cmid,
      usmid: usmid ? usmid : "",
      ucmid: ucmid ? ucmid : "",
      page: page,
      limit: 10,
    },
    skip: !smid && !cmid,
  });

  useEffect(() => {
    if ((smid, cmid)) subjectMcqTestsetRefetch();
  }, [smid, cmid, page, subjectMcqTestsetRefetch]);

  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (subjectMcqTestset?.testSets) {
      const uniquePost = [...allTestset, ...subjectMcqTestset?.testSets];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setAllTestset(uniqueRefind);
    }
    //for next api is call or not dashboard
    if (subjectMcqTestset?.testSets.length === 10) setState(true);
    else setState(false);
  }, [subjectMcqTestset?.testSets]);
  // console.info("ths is usfsg test set list", subjectMcqTestset);
  return (
    <div className={style.set_container}>
      {allTestset?.map((testset, index) =>
        allTestset?.length === index + 1 ? (
          <div
            className={style.test}
            onClick={() => {
              setTestSetId(testset);
              tabHandler(tabEventName);
              setTestIndex(backIndex);
            }}
            key={index}
            ref={ref}
          >
            <img src="/images/members/mcq-test-icon.svg" alt="" />
            <div className={style.testRight}>
              <h6>{testset?.testName}</h6>
              <div className={style.testRightBottom}>
                <p>
                  {" "}
                  {t("questions")} : {testset?.testTotalQuestion}
                </p>
                <p>
                  {t("marks")} :{" "}
                  {testset?.testTotalNumber > 9
                    ? testset?.testTotalNumber
                    : `0${testset?.testTotalNumber}`}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={style.test}
            onClick={() => {
              setTestSetId(testset);
              tabHandler(tabEventName);
              setTestIndex(backIndex);
            }}
            key={index}
          >
            <img src="/images/members/mcq-test-icon.svg" alt="" />
            <div className={style.testRight}>
              <h6>{testset?.testName}</h6>
              <div className={style.testRightBottom}>
                <p>
                  {" "}
                  {t("questions")} : {testset?.testTotalQuestion}
                </p>
                <p>
                  {t("marks")} :{" "}
                  {testset?.testTotalNumber > 9
                    ? testset?.testTotalNumber
                    : `0${testset?.testTotalNumber}`}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SetList;
