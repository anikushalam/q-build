import React, { useState } from "react";
import style from "../../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead.module.css";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import { useOneSubjectExcelUpload } from "../../../../../hooks/member_tab/subject-api";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import QLoader from "../../../../../Loader/QLoader";
import { Link, useParams } from "react-router-dom";

const SubjectTeacherHeader = ({
  coverKey,
  coverId,
  defaultCover,
  profilePhoto,
  count1,
  count2,
  subjectId,
  coverImageStyle,
  textLarge,
  carryParentState,
}) => {
  const params = useParams();
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [oneSubjectExcelUpload] = useOneSubjectExcelUpload();

  const onExcelFileUpload = (e) => {
    if (e.target.files?.length && subjectId) {
      setDisabled(true);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            oneSubjectExcelUpload({
              sid: subjectId,
              excelFile: {
                excel_file: res.data?.imageKey,
              },
            })
              .then(() => {
                setDisabled(false);
              })
              .catch({});
          } else {
            setDisabled(false);
          }
        })
        .catch({});
    }
  };

  return (
    <>
      <div className={style.unideptmiddlehead}>
        <div className={style.unideptmiddleheadleft}>
          {profilePhoto ? (
            <img className={style.coverImgg} src={profilePhoto} alt="" />
          ) : coverId ? (
            <img
              className={coverId !== "2" ? style.coverImgg : style.coverImg}
              src={
                coverId !== "2" ? `${imageShowUrl}/${coverKey}` : defaultCover
              }
              alt=""
              style={coverImageStyle}
            />
          ) : (
            <img className={style.coverImg} src={defaultCover} alt="" />
          )}

          {/* {coverUpdate && (
        <label htmlFor="cover">
          <img
            className={style.deptedit}
            src="/images/profileAndCover/dept-edit.svg"
            alt=""
          />
        </label>
      )}

      <input
        id="cover"
        name="file"
        onChange={profileChange}
        type="file"
        style={{ display: "none" }}
        accept="image/gif, image/jpeg, image/png"
        required
      /> */}
        </div>
        <div className={style.unideptmiddleheadright}>
          <div>
            <h6 className={style.textLarge}>{textLarge}</h6>
          </div>
          <div
            className={style.counts}
            style={{
              justifyContent: "flex-end",
            }}
          >
            <div
              className={style.countsItem}
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p
                className={style.count}
                style={{
                  fontWeight: "500",
                }}
              >
                {count1}
              </p>
              <p
                className={style.count}
                style={{
                  fontWeight: "500",
                }}
              >
                <Link
                  to={`/q/${params.username}/member/subject/Calculus?a=subject-academic`}
                  state={{
                    ...carryParentState,
                    isView: "SUBJECT_TEACHER",
                    isSubType: "SUBJECT_TEACHER_INSTITUTE",
                  }}
                >
                  {count2}
                </Link>
              </p>
            </div>
            <label htmlFor="uploadExcel">
              <img
                src="/images/member_tab/subject/subject-excel-icon.svg"
                alt="excel icon"
                style={{
                  cursor: "pointer",
                }}
              />
            </label>
            <input
              type="file"
              id="uploadExcel"
              accept=".xlsx"
              onChange={onExcelFileUpload}
              style={{
                display: "none",
              }}
            />
          </div>
        </div>
      </div>
      {disabled && <QLoader />}
    </>
  );
};

export default SubjectTeacherHeader;
