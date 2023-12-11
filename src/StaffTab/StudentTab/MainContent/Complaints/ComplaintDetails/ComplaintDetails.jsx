import React from "react";
import style from "./ComplaintDetails.module.css";
import {
  useStudentComplaintAction,
  useStudentComplaintDetail,
} from "../../../../../hooks/institute/institute-staff-student-api";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { useState } from "react";
import QLoader from "../../../../../Loader/QLoader";

function ComplaintDetails({ setShowDetails, complaintId, setRefetchStatus }) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [solvedByInstitute] = useStudentComplaintAction();
  const { studentComplaintDetail, studentComplaintDetailRefetch } =
    useStudentComplaintDetail({
      cid: complaintId,
      skip: !complaintId,
    });
  React.useEffect(() => {
    if (complaintId) studentComplaintDetailRefetch();
  }, [complaintId, studentComplaintDetailRefetch]);
  const solvedHandler = () => {
    setDisabled((pre) => !pre);

    solvedByInstitute({
      cid: complaintId,
      status: {
        status: "Solved",
      },
    })
      .then(() => {
        studentComplaintDetailRefetch();
        setShowDetails(false);
        setRefetchStatus({
          solved: true,
          unsolved: true,
        });
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  return (
    <div className={style.complaintDetails}>
      <div className={style.detailsheader}>
        <div className={style.item}>
          <img src="/images/complainIconDark.svg" alt="" />
          <div>
            <h6>{`${
              studentComplaintDetail?.complaint?.student?.studentFirstName
            } ${
              studentComplaintDetail?.complaint?.student?.studentMiddleName
                ? studentComplaintDetail?.complaint?.student?.studentMiddleName
                : ""
            } ${
              studentComplaintDetail?.complaint?.student.studentLastName
            }`}</h6>

            <div className={style.datetime}>
              <p>
                {moment(studentComplaintDetail?.complaint?.createdAt).format(
                  "LL"
                )}
              </p>
              <p>
                {moment(studentComplaintDetail?.complaint?.createdAt).format(
                  "LT"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.detailsbody}>
        <p>{studentComplaintDetail?.complaint?.complaintContent}</p>
      </div>
      <div className={style.footer}>
        {studentComplaintDetail?.complaint?.complaintInsStatus === "Solved" ? (
          <div className={style.solvedbtn}>
            {t("problem")}{" "}
            {studentComplaintDetail?.complaint?.complaintInsStatus}
          </div>
        ) : (
          <div className={style.solvedbtn} onClick={solvedHandler}>
            {t("problem")}{" "}
            {studentComplaintDetail?.complaint?.complaintInsStatus}
          </div>
        )}
      </div>
      {disabled && <QLoader />}
    </div>
  );
}

export default ComplaintDetails;
