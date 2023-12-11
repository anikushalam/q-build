import React from "react";
import style from "./ComplaintDetails.module.css";
import moment from "moment";
import { useTranslation } from "react-i18next";
import {
  useStaffComplaintAction,
  useStaffComplaintDetail,
} from "../../../../../../hooks/institute/institute-staff-student-api";
import { useState } from "react";
import QLoader from "../../../../../../Loader/QLoader";

function ComplaintDetails({ onComplaintId, setShowDetails, setRefetchStatus }) {
  const [staffComplaintAction] = useStaffComplaintAction();
  const [disabled, setDisabled] = useState(false);
  const { staffComplaintDetail, staffComplaintDetailRefetch } =
    useStaffComplaintDetail({
      cid: onComplaintId?.cid,
      skip: !onComplaintId?.cid,
    });
  const solvedHandler = () => {
    setDisabled((pre) => !pre);
    staffComplaintAction({
      cid: staffComplaintDetail?.complaint?._id,
      complaintStatus: {
        status: "Solved",
      },
    })
      .then(() => {
        staffComplaintDetailRefetch();
        setShowDetails(false);
        setRefetchStatus({
          solved: true,
          unsolved: true,
        });
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const { t } = useTranslation();

  // console.info("this is one complaint details", staffComplaintDetail);
  return (
    <div className={style.complaintDetails}>
      <div className={style.detailsheader}>
        <div className={style.item}>
          <img src="/images/complainIconDark.svg" alt="" />
          <div>
            <h6>{onComplaintId?.name}</h6>

            <div className={style.datetime}>
              <p>
                {moment(staffComplaintDetail?.complaint?.createdAt).format(
                  "LL"
                )}
              </p>
              <p>
                {moment(staffComplaintDetail?.complaint?.createdAt).format(
                  "LT"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.detailsbody}>
        <p>{staffComplaintDetail?.complaint?.complaintContent}</p>
      </div>
      <div className={style.footer}>
        {staffComplaintDetail?.complaint?.complaintStatus === "Unsolved" && (
          <div className={style.solvedbtn} onClick={solvedHandler}>
            {t("Solved")}
          </div>
        )}
      </div>
      {disabled && <QLoader />}
    </div>
  );
}

export default ComplaintDetails;
