import React from "react";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import style from "./Item.module.css";
import { useTranslation } from "react-i18next";

function Item({ student, status, presentTabHandler }) {
  const [clickedStatus, setClickedStatus] = React.useState(status);
  const { t } = useTranslation();

  const present = () => {
    if (status === "present") {
    } else {
      if (clickedStatus === "present") {
        setClickedStatus("");
        presentTabHandler(student._id);
      } else {
        setClickedStatus("present");
        presentTabHandler(student._id);
      }
    }
  };

  return (
    <div className={style.listItem} onClick={present}>
      <div className={style.listItemRight}>
        {clickedStatus === "present" ? (
          <img src="/images/members/radio-btn-green.svg" alt="" />
        ) : (
          <img src="/images/members/radio-btn.svg" alt="" />
        )}
      </div>
      <div className={style.listItemLeft}>
        <p>{student?.studentROLLNO}.</p>
        <img
          src={
            student?.photoId !== "1"
              ? `${imageShowUrl}/${student?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          alt=""
        />{" "}
        <div className={style.subject_atendance}>
          <h5>{`${student?.studentFirstName} ${
            student?.studentMiddleName ? student?.studentMiddleName : ""
          } ${student?.studentLastName}`}</h5>
          <h6>
            {t("gr_number")}{" "}
            <span
              style={{
                fontWeight: "400",
              }}
            >
              {student?.studentGRNO ?? ""}
            </span>{" "}
            {", "}
            {t("enrollment_number_only")}{" "}
            <span
              style={{
                fontWeight: "400",
              }}
            >
              {student?.student_prn_enroll_number ?? ""}
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Item;
