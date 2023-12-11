import React from "react";
import style from "./StudentReportCardIns.module.css";
import { useTranslation } from "react-i18next";
import { useStudentPreviousReportListQuery } from "../../../../../services/student_members_ab/studentMembersTabApi";

function PreviousReport({ studentId, setYearId }) {
  const { t } = useTranslation();
  const { data } = useStudentPreviousReportListQuery({
    sid: studentId,
  });
  return (
    <>
      <div className={style.previousReport}>
        {data?.previousData?.map((report, index) => (
          <div
            className={style.report}
            onClick={() => {
              setYearId(report?._id);
            }}
            key={index}
          >
            <img src="/images/members/prevReport.svg" alt="" />
            <div className={style.reportText}>
              <h6>
                {" "}
                {t("batch")} {report?.batch?.batchName}
              </h6>
              <p>
                {report?.class?.className} {report?.class?.classTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PreviousReport;
