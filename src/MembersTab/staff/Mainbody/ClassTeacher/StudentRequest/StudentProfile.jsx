import React, { useEffect, useState } from "react";
import style from "./StudentProfile.module.css";
import {
  useClassApproveStudent,
  useClassOneStudentProfile,
  useClassRejectStudent,
} from "../../../../../hooks/member_tab/class-api";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../Loader/QLoader";

function StudentProfile({
  id,
  did,
  bid,
  sid,
  cid,
  onRefetch,
  setRequestProfile,
}) {
  const [disabled, setDisabled] = useState(false);
  const { studentProfile, studentProfileRefetch } =
    useClassOneStudentProfile(sid);
  const { t } = useTranslation();
  const [classApproveStudent] = useClassApproveStudent();
  const [classRejectStudent] = useClassRejectStudent();
  useEffect(() => {
    if (sid) studentProfileRefetch();
  }, [sid, studentProfileRefetch]);

  const AcceptHandler = (val) => {
    if (val) {
      setDisabled((pre) => !pre);
      classApproveStudent({
        id: id,
        cid: cid,
        sid: val,
        did: did,
        bid: bid,
        approve: {
          status: "Approved",
        },
      })
        .then((res) => {
          onRefetch();
          setRequestProfile(false);
          setDisabled((pre) => !pre);

          // console.info("This is appr", res);
        })
        .catch({});
    }
  };
  const RejectHandler = (val) => {
    if (val) {
      setDisabled((pre) => !pre);

      classRejectStudent({
        id: id,
        cid: cid,
        sid: val,
        reject: {
          status: "Rejected",
        },
      })
        .then((res) => {
          onRefetch();
          setRequestProfile(false);
          setDisabled((pre) => !pre);

          // console.info("This is appr", res);
        })
        .catch({});
    }
  };
  // console.info("THis is class Request of student pofile ", studentProfile);

  return (
    <div className={style.studentForm}>
      <h6 className={style.heading}>{t("student_details")}</h6>
      <div className={style.imgcontainer}>
        <img
          alt="not found"
          src={
            studentProfile?.student?.studentProfilePhoto
              ? `${imageShowUrl}/${studentProfile?.student?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
        />
      </div>
      <div className={style.formContainer}>
        <div className={style.viewRow}>
          <div>
            <p>{t("name")}</p>
            <h6>
              {studentProfile?.student?.studentFirstName}{" "}
              {studentProfile?.student?.studentMiddleName
                ? studentProfile?.student?.studentMiddleName
                : " "}{" "}
              {studentProfile?.student?.studentLastName}
            </h6>
          </div>
        </div>

        <div className={style.viewRow}>
          <div>
            <p>{t("gender")}</p>
            <h6>{studentProfile?.student?.studentGender}</h6>
          </div>
          <div>
            <p>{t("dob")}</p>
            <h6>{studentProfile?.student?.studentDOB}</h6>
          </div>
          <div>
            <p>{t("mother_name")}</p>
            <h6>{studentProfile?.student?.studentMotherName}</h6>
          </div>
        </div>
        <div className={style.viewRow}>
          <div>
            <p>{t("nationality")}</p>
            <h6>{studentProfile?.student?.studentNationality}</h6>
          </div>
          <div>
            <p>{t("mother_tongue")}</p>
            <h6>{studentProfile?.student?.studentMTongue}</h6>
          </div>
          <div>
            <p></p>
            <h6>{studentProfile?.student?.studentCast}</h6>
          </div>
        </div>

        <div className={style.viewRow}>
          <div>
            <p>{t("cast_category")}</p>
            <h6>{studentProfile?.student?.studentCastCategory}</h6>
          </div>

          <div>
            <p>{t("religion")}</p>
            <h6>{studentProfile?.student?.studentReligion}</h6>
          </div>

          <div>
            <p>{t("birth_place")}</p>
            <h6>{studentProfile?.student?.studentBirthPlace}</h6>
          </div>
        </div>

        <div className={style.viewRow}>
          <div>
            <p>{t("state")}</p>
            <h6>{studentProfile?.student?.studentState}</h6>
          </div>
          <div>
            <p>{t("district")} </p>

            <h6>{studentProfile?.student?.studentDistrict}</h6>
          </div>

          <div>
            <p>{t("parent_mobile")} </p>
            <h6>{studentProfile?.student?.studentParentsPhoneNumber}</h6>
          </div>
        </div>

        <div className={style.viewRow}>
          <div>
            <p>{t("current_adress")}</p>
            <h6>{studentProfile?.student?.studentAddress}</h6>
          </div>
          <div className={style.viewRow}></div>
          <div>
            <p>{t("parent_name")}</p>
            <h6>{studentProfile?.student?.studentParentsName}</h6>
          </div>
        </div>
        <div className={style.viewRow}>
          <div>
            <p> {t("personal_mobile_number")}</p>
            <h6>{studentProfile?.student?.studentPhoneNumber}</h6>
          </div>
          <div>
            <p> {t("adhar_number")} </p>
            <h6>{studentProfile?.student?.studentAadharNumber}</h6>
          </div>
        </div>
        <div className={style.tabContentParent}>
          <div
            className={style.requestBtn}
            onClick={() => {
              AcceptHandler(studentProfile?.student?._id);
            }}
            style={{ marginRight: "1.464vw" }}
          >
            {t("accept")}
          </div>
          <div
            className={style.requestBtn}
            onClick={() => {
              RejectHandler(studentProfile?.student?._id);
            }}
            style={{
              backgroundColor: "rgba(75, 26, 133, 0.1)",
              color: "rgba(18, 18, 18, 0.8)",
            }}
          >
            {t("reject")}
          </div>
        </div>
      </div>
      {disabled && <QLoader />}
    </div>
  );
}

export default StudentProfile;
