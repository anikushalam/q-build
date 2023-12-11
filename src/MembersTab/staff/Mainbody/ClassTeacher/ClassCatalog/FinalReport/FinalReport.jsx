import React, { useEffect, useState } from "react";
import {
  useAllStudentFinalizeReportCard,
  useClassAllStudent,
  useClassSettingReport,
} from "../../../../../../hooks/member_tab/class-api";
import { FileNotUpload } from "../../../../../../validation/Snackbar";
import style from "./FinalReport.module.css";
import ReportDetails from "./ReportDetails/ReportDetails";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../../Loader/QLoader";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import StudentDetailReportCard from "./ReportDetails/StudentDetailReportCard";

function FinalReport({ cid, carryParentState }) {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = useParams();
  const getQuery = useLocation();
  const [run, setRun] = useState(false);
  const [msg, setMsg] = useState("");
  // const [showRollNumber, setShowRollNumber] = React.useState([]);
  // const [pageNumber, setPageNumber] = React.useState(1);
  const [allStudentFinalizeReportCard] = useAllStudentFinalizeReportCard();
  const [disabled, setDisabled] = useState(false);
  const { classAllStudent, classAllStudentRefetch } = useClassAllStudent({
    data: {
      cid: cid,
      page: 1,
      limit: 30,
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
      classAllStudentRefetch();
      classSettingReportRefetch();
    }
  }, [cid, classAllStudentRefetch, classSettingReportRefetch]);

  const onClickStudentValueHandler = (val) => {
    if (classSettingReport?.finalReportsSettings?.finalReport) {
      navigate(
        `/q/${params.username}/member/class/${params.cname}/?a=report&n=detail`,
        { state: { ...carryParentState, student: val } }
      );
    } else {
      setMsg(t("enable_final_report_toggle"));
      setRun(true);
    }
  };

  // useEffect(() => {
  //   if (classAllStudent?.classes?.ApproveStudent) {
  //     let skipItem = (pageNumber - 1) * 5;
  //     setShowRollNumber(
  //       classAllStudent?.classes?.ApproveStudent.slice(skipItem, 5)
  //     );
  //   }
  // }, [classAllStudent?.classes?.ApproveStudent, pageNumber]);
  // console.info("THis is all studetn", classAllStudent);

  const onAllFinalize = () => {
    setDisabled((pre) => !pre);
    allStudentFinalizeReportCard({
      cid: cid,
    })
      .then(() => {
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  return (
    <>
      {/* {itemClick && (
        <div className={style.roll_list_horizontal}>
          <div
            className={style.arrowbtn}
            onClick={() => setPageNumber((page) => --page)}
          >
            <img alt="not found" src="/images/members/left-icon.svg" />
          </div>
          {showRollNumber?.map((stu, index) => (
            <div
              key={index}
              className={
                stu?.finalReportStatus === "No"
                  ? `${style.box} ${style.box2}`
                  : `${style.box} ${style.box1}`
              }
              onClick={() => onClickStudentValueHandler(stu)}
            >
              {stu?.studentROLLNO > 9
                ? stu?.studentROLLNO
                : `0${stu?.studentROLLNO}`}
            </div>
          ))}
          <div
            className={style.arrowbtn}
            onClick={() => setPageNumber((page) => ++page)}
          >
            <img alt="not found" src="/images/members/right-icon.svg" />
          </div>
        </div>
      )} */}
      <div className={style.finalreport}>
        {searchParams.get("n") === "detail" ? (
          <StudentDetailReportCard
            oneStudentDetail={getQuery.state?.student}
            onRefetch={classAllStudentRefetch}
            finalReportsSettings={classSettingReport?.finalReportsSettings}
          />
        ) : (
          // <ReportDetails
          //   oneStudentDetail={getQuery.state?.student}
          //   onRefetch={classAllStudentRefetch}
          //   finalReportsSettings={classSettingReport?.finalReportsSettings}
          // />
          <div className={style.rollnumbers}>
            <div className={style.items}>
              {classAllStudent?.classes?.ApproveStudent?.map((stu, index) => (
                <div
                  key={index}
                  className={
                    stu?.finalReportStatus === "No"
                      ? `${style.box} ${style.box2}`
                      : `${style.box} ${style.box1}`
                  }
                  onClick={() => onClickStudentValueHandler(stu)}
                >
                  {stu?.studentROLLNO > 9
                    ? stu?.studentROLLNO
                    : `0${stu?.studentROLLNO}`}
                </div>
              ))}
            </div>
            <div className={style.buttons}>
              <div className={style.download}>{t("download_all")}</div>
              <div className={style.send}>{t("send_online")}</div>
              <div className={style.send} onClick={onAllFinalize}>
                {t("finalize_all")}
              </div>
            </div>
          </div>
        )}

        {disabled && <QLoader />}
        <FileNotUpload msg={msg} run={run} setRun={setRun} />
      </div>
    </>
  );
}

export default FinalReport;
