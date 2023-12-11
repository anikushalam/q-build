import React, { useState } from "react";
import style from "../PromoteDepartment.module.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import TimetableMenu from "../../AcademicAdministrator/Timetable/TimetableMenu";

const TimetableCard = ({ table, clsId, day, onRefetch, tid }) => {
  const [dayMenu, setDayMenu] = useState("");

  const onEdit = () => {
    setDayMenu({
      tid: tid,
      from: table?.from,
      to: table?.to,
      sfid: table?._id,
      subject: {
        subjectName: table?.subjectName,
        ...table?.subject,
      },
    });
  };
  return (
    <>
      <div
        className={style.class_container}
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <img
              src="/images/member_tab/class/class-time-icon.svg"
              alt="time icon"
            />
            <p>
              {table?.from} {" to "}
              {table?.to}
            </p>
          </div>
          <img
            src="/images/member_tab/class/class-edit-icon.svg"
            alt="time icon"
            style={{
              cursor: "pointer",
            }}
            onClick={onEdit}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            className={style.oneRowImage}
            src={
              table?.assignStaff?.staffProfilePhoto
                ? `${imageShowUrl}/${table?.assignStaff?.staffProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt="staff avatr"
          />
          <div className={style.class_container_text}>
            <h6>
              {table?.subjectName ?? ""}{" "}
              {table?.subject?.subject_category
                ? `(${table?.subject?.subject_category})`
                : ""}
              {table?.subject?.selected_batch_query?.batchName ? (
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  ({table?.subject?.selected_batch_query?.batchName})
                </span>
              ) : null}{" "}
              {table?.subject?.subjectOptional === "Optional" &&
                `(${table?.subject?.subjectOptional})`}
            </h6>
            <p>
              {`${table?.assignStaff?.staffFirstName ?? ""} ${
                table?.assignStaff?.staffMiddleName ?? ""
              } ${table?.assignStaff?.staffLastName ?? ""}`}
            </p>
          </div>
        </div>
      </div>
      {dayMenu && (
        <TimetableMenu
          onClose={() => setDayMenu("")}
          dayMenu={dayMenu}
          clsId={clsId}
          day={day}
          onRefetch={onRefetch}
        />
      )}
    </>
  );
};

export default TimetableCard;
