import React, { useState } from "react";
import style from "../LeaveAndTransferAuthority/LeavesAndTransfer.module.css";
import { useTranslation } from "react-i18next";
import { pdfShowUrlNext } from "../../../../services/BaseUrl";
import StaffLeaveMenu from "./StaffLeaveMenu";
import moment from "moment";
const StaffLeaveCard = ({ leave, onRefetch, viewBy }) => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState("");

  var parts = leave?.reason.match(/[\s\S]{1,50}/g) || [];

  const datess = [];
  const monthss = [];
  const years = [];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  leave?.date?.map((d) => {
    const dDate = d.split("/")[0];
    const dMonth =
      d.split("/")[1].split("")[0] === "0"
        ? months[parseInt(d.split("/")[1], 10)]
        : months[d.split("/")[1]];
    const dYear = d.split("/")[2];

    datess.push(dDate);
    monthss.push(dMonth);
    years.push(dYear);
  });

  return (
    <>
      <div className={style.request_card_staff}>
        <div className={style.request_card_header}>
          <div className={style.request_card_text}>
            <img src="/images/members/transfer-icon.svg" alt="icon" />
            <div className={style.request_card_inner_text}>
              <h6
                style={{
                  fontWeight: "400",
                }}
              >
                {t("leave_type")} {" : "}
                {leave?.leave_type}
              </h6>
              <p>
                {t("raised_on")} {moment(leave?.createdAt).format("LT")},{" "}
                {moment(leave?.createdAt).format("DD MMM yyyy")}
              </p>
              <p>
                {t("for_dates")} {" : "}
                {[...new Set(datess)].map((d) => `${d}, `)}
                <span>
                  {[...new Set(monthss)].map((d) => `${d} `)}{" "}
                  {[...new Set(years)].map((d) => `${d} `)}
                </span>
              </p>
            </div>
          </div>
          <div className={style.request_card_btn_group}>
            {viewBy === "OVERVIEW" ? null : (
              <>
                <div className={style.btn}>
                  {t("status")} {" : "}
                  <span
                    style={{
                      color:
                        leave?.status === "Request"
                          ? "rgba(18, 18, 18, 0.7)"
                          : leave?.status === "Rejected"
                          ? "red"
                          : "#14ab50",
                    }}
                  >
                    {leave?.status}
                  </span>
                </div>
                <img
                  className={style.dots}
                  src="/images/menu-dots-icon.svg"
                  alt=""
                  onClick={() => setMenu(leave)}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </>
            )}
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

      {menu && (
        <StaffLeaveMenu
          menu={menu}
          onClose={() => setMenu("")}
          onRefetch={onRefetch}
        />
      )}
    </>
  );
};

export default StaffLeaveCard;
