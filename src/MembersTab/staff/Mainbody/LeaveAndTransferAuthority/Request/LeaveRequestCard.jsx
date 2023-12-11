import React, { useState } from "react";
import style from "../LeavesAndTransfer.module.css";
import { useStaffLeaveAction } from "../../../../../hooks/institute/institute-staff-student-api";
import { useMarkCOffLeave } from "../../../../../hooks/member_tab/department-api";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../Loader/QLoader";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
import { imageShowUrl, pdfShowUrlNext } from "../../../../../services/BaseUrl";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import moment from "moment";
const LeavesModal = React.lazy(() =>
  import(
    "../../../../../StaffTab/components/DividerTab/MainContent/StaffLeavesandTransfer/LeavesTab/Leaves/LeavesModal/LeavesModal"
  )
);

const LeaveRequestCard = ({ leave, onStaffLeaveListRefetch, viewBy }) => {
  const { t } = useTranslation();
  const [staffLeaveAction] = useStaffLeaveAction();
  const [markCOffLeave] = useMarkCOffLeave();
  const [disabled, setDisabled] = useState(false);
  const [view, setView] = useState(false);

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
      <div className={style.request_card}>
        <div className={style.request_card_header}>
          <div className={style.request_card_text}>
            <img
              src={
                leave?.staff?.staffProfilePhoto
                  ? `${imageShowUrl}/${leave?.staff?.staffProfilePhoto}`
                  : "/images/demo_users/user5.svg"
              }
              alt=""
            />
            <div className={style.request_card_inner_text}>
              <h6>{`${leave?.staff?.staffFirstName} ${
                leave?.staff?.staffMiddleName
                  ? leave?.staff?.staffMiddleName
                  : ""
              } ${leave?.staff?.staffLastName}`}</h6>
              <p>
                {t("raised_on")} {moment(leave?.createdAt).format("LT")},{" "}
                {moment(leave?.createdAt).format("DD MMM yyyy")}
                {", "}
                <span className={style.viewAll} onClick={() => setView(true)}>
                  {t("for_dates")}
                </span>
              </p>
            </div>
          </div>
          <div className={style.request_card_btn_group}>
            {leave?.status === "Request" ? (
              <>
                {viewBy === "COFF" ? null : (
                  <div
                    className={style.reject_btn}
                    onClick={() => {
                      onLeaveAction("Rejected");
                    }}
                  >
                    {t("reject")}
                  </div>
                )}

                <div
                  className={style.accept_btn}
                  onClick={() => {
                    onLeaveAction("Accepted");
                  }}
                >
                  {t("approve")}
                </div>
              </>
            ) : null
            // <div
            //   className={style.btn}
            //   style={
            //     leave?.status === "Rejected"
            //       ? { color: "red" }
            //       : { color: "#14ab50" }
            //   }
            // >
            //   {leave?.status}
            // </div>
            }
          </div>
        </div>
        <div
          className={style.request_card_inner_text}
          style={{
            marginTop: "0.5rem",
          }}
        >
          <h6
            style={{
              fontWeight: "400",
            }}
          >
            {t("leave_type")} {" : "}
            {leave?.leave_type}
          </h6>
        </div>
        <div
          className={style.request_card_inner_text}
          style={{
            marginTop: "0.5rem",
          }}
        >
          <h6
            style={{
              fontWeight: "400",
              whiteSpace: "break-spaces",
            }}
          >
            {t("reason")} {" : "}
            {leave?.reason}
          </h6>
        </div>
        {leave?.attach && (
          <div
            className={style.request_card_inner_text}
            style={{
              marginTop: "0.5rem",
            }}
          >
            <h6
              style={{
                fontWeight: "400",
                whiteSpace: "break-spaces",
              }}
            >
              {t("attachment")} {" : "}
              <a
                href={`${pdfShowUrlNext}/${leave?.attach}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                }}
              >
                <span className={style.viewAll}>{t("view_attachment")}</span>
              </a>
            </h6>
          </div>
        )}
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      {view && (
        <CustomSuspense>
          <LeavesModal
            open={view}
            hideModal={(w) => setView(w)}
            dates={leave?.date}
          />
        </CustomSuspense>
      )}
      {disabled && <QLoader />}
    </>
  );
};
export default LeaveRequestCard;
