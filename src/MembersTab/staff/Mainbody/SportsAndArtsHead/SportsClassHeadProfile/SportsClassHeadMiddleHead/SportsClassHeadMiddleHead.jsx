import React from "react";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import SportsClassHeadCover from "./SportsClassHeadCover";
import SportsClassHeadPhoto from "./SportsClassHeadPhoto";
import { useTranslation } from "react-i18next";
import style from "./SportsClassHeadMiddleHead.module.css";

const SportsClassHeadMiddleHead = ({
  name,
  photoKey,
  photoId,
  coverId,
  coverKey,
  cid,
  sportStudentCount,
  sportTeamCount,
  sportClassHead,

  // classTeacher,
  // classHeadTitle,
}) => {
  const { t } = useTranslation();
  return (
    <div className={style.main}>
      <SportsClassHeadCover
        coverKey={coverKey}
        coverId={coverId}
        cid={cid}
        parentStyle={style.imageJustify2}
      />

      <div className={style.deptPhoto}>
        <SportsClassHeadPhoto photoKey={photoKey} photoId={photoId} cid={cid} />
      </div>
      <div className={style.textContainer}>
        <div className={style.textTop}>
          <h6>{name}</h6>
          <p>
            {sportClassHead?.staffFirstName} {sportClassHead?.staffMiddleName}{" "}
            {sportClassHead?.staffLastName}
          </p>
        </div>
        <div className={style.textBottom}>
          <div className={style.textBottomitem}>
            <h6>{sportStudentCount}</h6>
            <p>{t("members")}</p>
          </div>

          <div className={style.textBottomitem}>
            <h6>{sportTeamCount}</h6>
            <p>{t("teams")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsClassHeadMiddleHead;
