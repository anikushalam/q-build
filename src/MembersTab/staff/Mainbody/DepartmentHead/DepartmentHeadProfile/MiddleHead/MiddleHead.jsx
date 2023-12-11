import React from "react";
// import { imageShowUrl } from "../../../../../../services/BaseUrl";
import DepartmentCover from "./DepartmentCover";
import style from "./DepartmentMiddleHead.module.css";
import DepartmentPhoto from "./DepartmentPhoto";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useTranslation } from "react-i18next";

const DepartmentMiddleHead = ({
  name,
  coverKey,
  photoId,
  coverId,
  photoKey,
  batchName,
  did,
  classCount,
  studentCount,
  staffCount,
  // dHead,
  // dTitle,
}) => {
  const { t } = useTranslation();
  return (
    <div className={style.main}>
      <DepartmentCover
        coverKey={coverKey}
        coverId={coverId}
        did={did}
        parentStyle={style.imageJustify2}
      />
      <div className={style.deptPhoto}>
        <DepartmentPhoto photoId={photoId} photoKey={photoKey} did={did} />
      </div>

      <div className={style.textContainer}>
        <div className={style.textTop}>
          <h6>{name}</h6>
          <p>
            {t("batch")}
            {batchName}
          </p>
        </div>
        <div className={style.textBottom}>
          <div className={style.textBottomitem}>
            <h6>{classCount}</h6>
            <p>{t("classes")}</p>
          </div>

          <div className={style.textBottomitem}>
            <h6>{studentCount}</h6>
            <p>{t("students")}</p>
          </div>

          <div className={style.textBottomitem}>
            <h6>{staffCount}</h6>
            <p>{t("staff")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentMiddleHead;
