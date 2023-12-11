import React, { useEffect, useState } from "react";
import style from "./ComplaintModal.module.css";
import { Dialog } from "@mui/material";

import moment from "moment";
import {
  useDepartmentComplaintDetail,
  useDepartmentComplaintSolve,
} from "../../../../../../../hooks/member_tab/department-api";
import QLoader from "../../../../../../../Loader/QLoader";
function ComplaintModal({ addDisplay, setAddDisplay, complaintId, onRefetch }) {
  const [disabled, setDisabled] = useState(false);
  const { departmentComplaintDetail, departmentComplaintDetailRefetch } =
    useDepartmentComplaintDetail({
      data: {
        cid: complaintId,
      },
      skip: !complaintId,
    });
  const [departmentComplaintSolve] = useDepartmentComplaintSolve();
  useEffect(() => {
    if (complaintId) departmentComplaintDetailRefetch();
  }, [complaintId, departmentComplaintDetailRefetch]);

  const onClose = () => {
    // console.info("clicked");
    setAddDisplay(false);
    // console.info("clicked");
  };

  const onSubmitSolve = (val) => {
    if (val === "Solved") {
    } else {
      setDisabled((pre) => !pre);
      departmentComplaintSolve({
        cid: complaintId,
        complaintSolve: {
          status: "Solved",
        },
      })
        .then(() => {
          // console.info(val);
          onRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  // console.info("this is complaint detais", addDisplay);
  return (
    <>
      <Dialog open={addDisplay} onClose={onClose}>
        <div className={style.addDisplay}>
          <div className={style.title}>
            <img src="/images/complaint-white.svg" alt="" />

            <div className={style.text}>
              <div className={style.insName}>
                <h6>
                  {departmentComplaintDetail?.complaint?.complaintType ===
                  "Open"
                    ? `${
                        departmentComplaintDetail?.complaint?.student
                          ?.studentFirstName
                      }
        ${
          departmentComplaintDetail?.complaint?.student?.studentMiddleName
            ? departmentComplaintDetail?.complaint?.student?.studentMiddleName
            : " "
        }
        ${departmentComplaintDetail?.complaint?.student?.studentLastName}`
                    : "Anonymous"}
                </h6>
              </div>
              <div className={style.insUserName}>
                <p>
                  {moment(
                    departmentComplaintDetail?.complaint?.createdAt
                  ).format("DD-MM-YYYY")}
                  {/* , 10:03 AM */}
                </p>
              </div>
            </div>
          </div>
          <div className={style.content}>
            {departmentComplaintDetail?.complaint?.complaintContent}
          </div>
          {departmentComplaintDetail?.complaint?.complaintStatus !==
          "Solved" ? (
            <div className={style.footer}>
              <div
                className={style.btn}
                onClick={() =>
                  onSubmitSolve(
                    departmentComplaintDetail?.complaint?.complaintStatus
                  )
                }
              >
                Solved
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {disabled && <QLoader />}
      </Dialog>
    </>
  );
}

export default ComplaintModal;
