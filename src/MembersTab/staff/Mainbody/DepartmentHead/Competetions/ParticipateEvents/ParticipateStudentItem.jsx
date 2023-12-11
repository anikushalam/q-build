import React from "react";
import style from "./ParticipateEvents.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useCheckListStudent } from "../../../../../../hooks/member_tab/department-api";
import { useState } from "react";
import { useEffect } from "react";

function ParticipateStudentItem({
  student,
  pid,
  handleSetPage,
  participativeEventStudentListRefetch,
}) {
  const { t } = useTranslation();
  const [checkListToStudent] = useCheckListStudent();
  const [rank, setRank] = useState("");
  const handleCheckList = () => {
    handleSetPage();
    checkListToStudent({
      pid: pid,
      sid: student?._id,
    })
      .then((res) => {
        participativeEventStudentListRefetch();
      })
      .catch((err) => {
        participativeEventStudentListRefetch();
      });
  };

  const isHavingRank = student?.participate_result?.filter((item) => {
    return item?.event === pid;
  });

  useEffect(() => {
    if (isHavingRank?.length > 0) {
      setRank(isHavingRank[0]?.rank);
    }
  }, []);

  return (
    <div className={style.peventdetailsrightBodyItem}>
      <div className={style.peventdetailsrightBodystudent}>
        <div className={style.imgcontainer}>
          <img
            src={
              student?.studentProfilePhoto
                ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt=""
          />
        </div>
        <div className={style.issuedBookItemMidright}>
          <h6>
            {student?.studentFirstName}{" "}
            {student?.studentMiddleName ? student?.studentMiddleName : " "}{" "}
            {student?.studentLastName} &nbsp; {rank !== "" ? `(${rank})` : ""}
          </h6>
          <p>Gr No. {student?.studentGRNO}</p>
        </div>
      </div>
      <div className={style.peventdetailsrightBodyfees}>
        {student?.participate_event?.includes(pid) ? (
          <img src="/images/radio-active.svg" />
        ) : (
          <img src="/images/radio-disabled.svg" />
        )}
      </div>
      <div className={style.peventdetailsrightBodychecklist}>
        {student?.checkList_participate_event?.includes(pid) ? (
          <img src="/images/radio-active.svg" />
        ) : (
          <img
            src="/images/radio-disabled.svg"
            style={{ cursor: "pointer" }}
            onClick={handleCheckList}
          />
        )}
      </div>
    </div>
  );
}

export default ParticipateStudentItem;
