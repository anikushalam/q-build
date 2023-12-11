import React from "react";
import moment from "moment";
import ClassTabChangeLink from "../ClassTabChangeLink";
import style from "./Checklist.module.css";
import { useTranslation } from "react-i18next";

const ChecklistCard = ({ carryParentState, checklistDetail }) => {
  const { t } = useTranslation();
  return (
    <ClassTabChangeLink
      carryParentState={{
        ...carryParentState,
        checklistId: checklistDetail?._id,
        checklistName: checklistDetail?.checklistName ?? "",
        showFees: !checklistDetail?.checklistAmount,
      }}
      activeTab="checklist&detail"
    >
      <div className={style.exam_card_container} title="View checklist detail">
        <div className={style.imagedot}>
          <img src="/images/members/checklist-icon.svg" alt="" />
        </div>
        <div className={style.exam_inner_text}>
          <h6>{checklistDetail?.checklistName ?? ""}</h6>
          <p>{moment(checklistDetail?.createdAt).format("DD MMMM YYYY")}</p>
        </div>
        {checklistDetail?.checklistAmount ? (
          <div className={style.exam_date}>
            <h6>
              {t("rs")}. {checklistDetail?.checklistAmount}
            </h6>
            <p>{t("fees")}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </ClassTabChangeLink>
  );
};

export default ChecklistCard;
