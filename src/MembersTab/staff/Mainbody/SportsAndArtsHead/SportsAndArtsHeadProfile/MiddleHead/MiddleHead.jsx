import React from "react";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import ClassCover from "./ClassCover";
import ClassPhoto from "./ClassPhoto";
import style from "./DepartmentMiddleHead.module.css";
import { useTranslation } from "react-i18next";

const DepartmentMiddleHead = ({
  name,
  photoKey,
  photoId,
  coverKey,
  coverId,
  sportClassCount,
  sid,
  sportHead,
  memberCount,

  // classTeacher,
  // classHeadTitle,
}) => {
  const { t } = useTranslation();
  return (
    <div className={style.main}>
      <ClassCover
        coverKey={coverKey}
        coverId={coverId}
        sid={sid}
        parentStyle={style.imageJustify2}
      />
      <div className={style.deptPhoto}>
        <ClassPhoto photoKey={photoKey} photoId={photoId} sid={sid} />
      </div>

      <div className={style.textContainer}>
        <div className={style.textTop}>
          <h6>{t("sport_art_head_coach")}</h6>
        </div>
        <div className={style.textBottom}>
          <div className={style.textBottomitem}>
            <h6>{memberCount}</h6>
            <p>{t("members")}</p>
          </div>

          <div className={style.textBottomitem}>
            <h6>{sportClassCount}</h6>
            <p>{t("sports")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentMiddleHead;
