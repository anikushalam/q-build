import React, { useEffect, useState } from "react";
import style from "./PreviousReport.module.css";
import ReportDetails from "./ReportDetails";
import { useStudentPreviousReportListQuery } from "../../../../services/student_members_ab/studentMembersTabApi";

function PreviousReport({ studentId }) {
  const [timeeout, setTimeeout] = useState(false);
  const [detail, setDetail] = useState(false);
  const [yearId, setYearId] = useState("");
  const { data } = useStudentPreviousReportListQuery({
    sid: studentId,
  });

  // console.info(data);
  useEffect(() => {
    setTimeout(() => {
      setTimeeout(!timeeout);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {detail ? (
        <ReportDetails yearId={yearId} />
      ) : (
        <div className={style.previousReport}>
          {/* {data?.previousData?.map((report, index) => (
            <div
              className={style.report}
              onClick={() => {
                setDetail(true);
                setYearId(report?._id);
              }}
              key={index}
            >
              <img src="/images/members/prevReport.svg" alt="" />
              <div className={style.reportText}>
                <h6>Batch {report?.batches?.batchName}</h6>
                <p>
                  {report?.class?.className} {report?.class?.classTitle}
                </p>
              </div>
            </div>
          ))} */}

          {data?.previousData.length > 0 ? (
            data?.previousData?.map((report, index) => (
              <div
                className={style.report}
                onClick={() => {
                  setDetail(true);
                  setYearId(report?._id);
                }}
                key={index}
              >
                <img src="/images/members/prevReport.svg" alt="" />
                <div className={style.reportText}>
                  <h6>Batch {report?.batches?.batchName}</h6>
                  <p>
                    {report?.studentClass?.className}{" "}
                    {report?.studentClass?.classTitle}
                  </p>
                </div>
              </div>
            ))
          ) : data?.previousData.length === 0 && timeeout === true ? (
            <div className={style.noData}>
              <img src="/images/nodata.jpg" alt="" />
            </div>
          ) : (
            <div className={style.loader}>
              <img src="/images/loader/loader.gif" alt="" />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default PreviousReport;
