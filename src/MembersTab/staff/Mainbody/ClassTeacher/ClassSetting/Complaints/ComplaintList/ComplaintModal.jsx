import React, { useEffect, useState } from "react";
import style from "./ComplaintModal.module.css";
import { Dialog } from "@mui/material";
import {
  useClassComplaintDetail,
  useClassComplaintSolve,
} from "../../../../../../../hooks/member_tab/class-api";
import moment from "moment";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../../../Loader/QLoader";
function ComplaintModal({ addDisplay, setAddDisplay, complaintId, onRefetch }) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const { classComplaintDetail, classComplaintDetailRefetch } =
    useClassComplaintDetail({
      data: {
        cid: complaintId,
      },
      skip: !complaintId,
    });
  const [classComplaintSolve] = useClassComplaintSolve();
  useEffect(() => {
    if (complaintId) classComplaintDetailRefetch();
  }, [complaintId, classComplaintDetailRefetch]);

  const onClose = () => {
    // console.info("clicked");
    setAddDisplay(false);
    // console.info("clicked");
  };

  const onSubmitSolve = (val) => {
    if (val === "Solved") {
    } else {
      setDisabled((pre) => !pre);

      classComplaintSolve({
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
    <Dialog open={addDisplay} onClose={onClose}>
      <div className={style.addDisplay}>
        <div className={style.title}>
          <img src="/images/complaint-white.svg" alt="" />

          <div className={style.text}>
            <div className={style.insName}>
              <h6>
                {classComplaintDetail?.complaint?.complaintType === "Open"
                  ? `${
                      classComplaintDetail?.complaint?.student?.studentFirstName
                    }
        ${
          classComplaintDetail?.complaint?.student?.studentMiddleName
            ? classComplaintDetail?.complaint?.student?.studentMiddleName
            : " "
        }
        ${classComplaintDetail?.complaint?.student?.studentLastName}`
                  : "Anonymous"}
              </h6>
            </div>
            <div className={style.insUserName}>
              <p>
                {moment(classComplaintDetail?.complaint?.createdAt).format(
                  "DD-MM-YYYY"
                )}
                {/* , 10:03 AM */}
              </p>
            </div>
          </div>
        </div>
        <div className={style.content}>
          {classComplaintDetail?.complaint?.complaintContent}
        </div>
        {classComplaintDetail?.complaint?.complaintStatus !== "Solved" ? (
          <div className={style.footer}>
            <div
              className={style.btn}
              onClick={() =>
                onSubmitSolve(classComplaintDetail?.complaint?.complaintStatus)
              }
            >
              {t("Solved")}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {disabled && <QLoader />}
    </Dialog>
  );
}

export default ComplaintModal;
