import React, { useState } from "react";
import { useClassLeaveRequestAction } from "../../../../../../../hooks/member_tab/class-api";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import style from "./Leaves.module.css";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../../../Loader/QLoader";
// import moment from "moment";
function LeaveCard({ leave, onRefetch }) {
  const { t } = useTranslation();
  const [disabled, setDiasbled] = useState(false);
  const [classLeaveRequestAction] = useClassLeaveRequestAction();
  const onSubmitLeave = (val) => {
    setDiasbled((pre) => !pre);
    classLeaveRequestAction({
      sid: leave?._id,
      action: {
        status: val,
      },
    })
      .then(() => {
        onRefetch();
        setDiasbled((pre) => !pre);
      })
      .catch({});
  };
  // console.info("sfbbnd gdf", cid);
  return (
    <>
      <div className={style.leaveCard}>
        <div className={style.leaveCardTop}>
          <div className={style.leaveCardTopLeft}>
            <img
              src={
                leave?.student?.studentProfilePhoto
                  ? `${imageShowUrl}/${leave?.student?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt=""
            />
            <div className={style.leaveCardTopLeftRight}>
              <h6>
                {leave?.student?.studentFirstName}
                {leave?.student?.studentMiddleName
                  ? leave?.student?.studentMiddleName
                  : " "}
                {leave?.student?.studentLastName}
              </h6>

              {/* {console.info(
              "dates",
              moment(`${leave?.date[0]} 0:00`).format("DD-MM-YYYY")
            )} */}
              {leave?.date && (
                <p>
                  {t("from")} {leave?.date[0]} {t("to")}{" "}
                  {leave?.date[leave?.date?.length - 1]}
                </p>
              )}
            </div>
          </div>
          <div className={style.leaveCardTopRight}>
            {leave?.status !== "Request" ? (
              <div className={style.rightbtnleft}>{leave?.status}</div>
            ) : (
              <>
                <div
                  className={style.rightbtnleft}
                  onClick={() => onSubmitLeave("Rejected")}
                >
                  {t("reject")}
                </div>
                <div
                  className={style.rightbtnright}
                  onClick={() => onSubmitLeave("Accepted")}
                >
                  {t("accept")}
                </div>
              </>
            )}
          </div>
        </div>

        <div className={style.leaveCardbottom}>{leave?.reason}</div>
      </div>
      {disabled && <QLoader />}
    </>
  );
}

export default LeaveCard;
