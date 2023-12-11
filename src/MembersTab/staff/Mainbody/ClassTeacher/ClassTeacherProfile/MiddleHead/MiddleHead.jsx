import React from "react";
// import { imageShowUrl } from "../../../../../../services/BaseUrl";
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
  batchName,
  cid,
  studentCount,
  subjectCount,
  // classTeacher,
  // classHeadTitle,
}) => {
  const { t } = useTranslation();
  return (
    <div className={style.main}>
      <ClassCover
        coverKey={coverKey}
        coverId={coverId}
        cid={cid}
        parentStyle={style.imageJustify2}
      />
      <div className={style.deptPhoto}>
        <ClassPhoto
          photoKey={photoKey}
          photoId={photoId}
          cid={cid}
          // parentStyle={style.imageJustify2}
        />
      </div>

      <div className={style.textContainer}>
        <div className={style.textTop}>
          <h6>{name}</h6>
          <p>
            {t("batch")} {batchName}
          </p>
        </div>
        <div className={style.textBottom}>
          <div className={style.textBottomitem}>
            <h6>{studentCount}</h6>
            <p>{t("students")}</p>
          </div>

          <div className={style.textBottomitem}>
            <h6>{subjectCount}</h6>
            <p>{t("subjects")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentMiddleHead;
