import React from "react";
import style from "./ComplaintDetails.module.css";
import moment from "moment";
import {
  useStudentComplaintDetailQuery,
  useReportStudentComplaintMutation,
} from "../../../../../services/joining/joinApi";

function ComplaintDetails({ cid }) {
  const { data: cDetail, refetch } = useStudentComplaintDetailQuery(cid);
  const [reportStudentComplaint] = useReportStudentComplaintMutation();

  const handleReport = () => {
    reportStudentComplaint(cid)
      .then((res) => {
        refetch();

        console.info(res.data);
      })
      .catch({});
  };

  return (
    <>
      <div className={style.complaintDetails}>
        <div className={style.detailsheader}>Complaint</div>
        <hr />
        <div className={style.detailsbody}>
          <h6 style={{ textTransform: "capitalize" }}>
            {cDetail?.complaint?.complaintType} Complaint
          </h6>
          <h6>
            Complaint To : <span>{cDetail?.complaint?.complaintTo}</span>
          </h6>
          <p>{cDetail?.complaint?.complaintContent}</p>
          <div className={style.footer}>
            {cDetail?.complaint?.complaintStatus === "Unsolved" ? (
              <h6 className={style.red}>
                {cDetail?.complaint?.complaintStatus}
              </h6>
            ) : (
              <h6 className={style.blue}>
                {cDetail?.complaint?.complaintStatus}
              </h6>
            )}

            <p>Date: {moment(cDetail?.complaint?.createdAt).format("LL")}</p>
          </div>
          {cDetail?.complaint?.reportAdmin === "No" ? (
            <h6 className={style.bluee} onClick={handleReport}>
              Report To Admin
            </h6>
          ) : (
            <h6 className={`${style.bluee} ${style.reported}`}>
              Reported To Admin
            </h6>
          )}
        </div>
      </div>
    </>
  );
}

export default ComplaintDetails;
