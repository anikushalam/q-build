import React, { useState } from "react";
import CustomSuspense from "../../../../../../../Custom/SuspenseLoading/CustomSuspense";
import { useStaffLeaveAction } from "../../../../../../../hooks/institute/institute-staff-student-api";
import {
  imageShowUrl,
  pdfShowUrlNext,
} from "../../../../../../../services/BaseUrl";
import style from "./Leaves.module.css";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../../../Loader/QLoader";
import { useMarkCOffLeave } from "../../../../../../../hooks/member_tab/department-api";
const LeavesModal = React.lazy(() => import("./LeavesModal/LeavesModal"));

const EachLeave = ({ leave, onStaffLeaveListRefetch, viewBy }) => {
  const [staffLeaveAction] = useStaffLeaveAction();
  const [markCOffLeave] = useMarkCOffLeave();
  const [disabled, setDisabled] = useState(false);
  const [view, setView] = useState(false);
  const { t } = useTranslation();

  const onLeaveAction = (query) => {
    setDisabled((pre) => !pre);
    if (viewBy === "COFF" && leave?.staff?._id) {
      markCOffLeave({
        lid: leave?._id,
        cConfig: {
          sid: leave?.staff?._id,
        },
      }).then(() => {
        onStaffLeaveListRefetch();
        setDisabled((pre) => !pre);
      });
    } else {
      staffLeaveAction({
        id: leave?._id,
        leaveAction: { status: query },
      }).then(() => {
        onStaffLeaveListRefetch();
        setDisabled((pre) => !pre);
      });
    }
  };
  return (
    <>
      <div className={style.item}>
        <div className={style.itemHead}>
          <div className={style.left}>
            <img
              src={
                leave?.staff?.photoId !== "1"
                  ? `${imageShowUrl}/${leave?.staff?.staffProfilePhoto}`
                  : "/images/demo_users/user5.svg"
              }
              alt=""
            />
            <div className={style.text}>
              <h6>{`${leave?.staff?.staffFirstName} ${
                leave?.staff?.staffMiddleName
                  ? leave?.staff?.staffMiddleName
                  : ""
              } ${leave?.staff?.staffLastName}`}</h6>
              {leave?.date.length === 1 ? (
                <p>{leave?.date[0]}</p>
              ) : (
                <p>
                  {leave?.date[0]}{" "}
                  {!view && (
                    <span
                      className={style.viewAll}
                      onClick={() => setView(true)}
                    >
                      ..{t("view_all_")}
                    </span>
                  )}
                </p>
              )}

              {view && (
                <CustomSuspense>
                  <LeavesModal
                    open={view}
                    hideModal={(w) => setView(w)}
                    dates={leave?.date}
                  />
                </CustomSuspense>
              )}
            </div>
          </div>
          <div className={style.right}>
            {leave?.attach && (
              <a
                href={`${pdfShowUrlNext}/${leave?.attach}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                }}
              >
                <img
                  src="/images/members/receipt-icon.svg"
                  alt="receipt icon"
                  style={{
                    height: "1.5rem",
                  }}
                />
              </a>
            )}
            {leave?.status === "Request" ? (
              <>
                {viewBy === "COFF" ? null : (
                  <div
                    className={style.activeBtn}
                    onClick={() => {
                      onLeaveAction("Rejected");
                    }}
                  >
                    {t("reject")}
                  </div>
                )}

                <div
                  className={`${style.activeBtn}`}
                  onClick={() => {
                    onLeaveAction("Accepted");
                  }}
                >
                  {t("approve")}
                </div>
              </>
            ) : (
              <div
                className={style.btn}
                style={
                  leave?.status === "Rejected"
                    ? { color: "red" }
                    : { color: "#14ab50" }
                }
              >
                {leave?.status}
              </div>
            )}
          </div>
        </div>
        <div
          className={style.reason}
          style={{
            marginBottom: "0.3rem",
          }}
        >
          {" "}
          {t("leave_type")} {" : "}
          {leave?.leave_type}
        </div>
        <div className={style.reason}>
          {" "}
          {t("reason")} {" : "}
          {leave?.reason}
        </div>
      </div>
      <div className={style.divider} />
      {disabled && <QLoader />}
    </>
  );
};
export default EachLeave;
