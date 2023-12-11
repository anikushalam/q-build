import React from "react";
import style from "./StudentProfileAbout.module.css";
import { useTranslation } from "react-i18next";
function StudentProfileAbout({ tabDetail }) {
  const { t } = useTranslation();
  return (
    <div className={style.aboutMain}>
      <div className={style.aboutNamePlace1}>
        <p className={style.aboutPlace}>{t("name")}</p>
        <p className={style.aboutValue}>
          {tabDetail &&
            `${tabDetail.studentFirstName} ${
              tabDetail.studentMiddleName ? tabDetail.studentMiddleName : ""
            } ${tabDetail.studentLastName}`}
        </p>
      </div>

      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>{t("gender")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentGender}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>{t("dob")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentDOB}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>{t("mother_name")}</p>
          <p className={style.aboutValue}>
            {" "}
            {tabDetail && tabDetail.studentMotherName}
          </p>
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>{t("nationality")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentNationality}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}> {t("mother_tongue")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentMTongue}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>{t("cast")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentCast}
          </p>
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>{t("cast_category")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentCastCategory}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>{t("religion")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentReligion}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>{t("birth_place")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentBirthPlace}
          </p>
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}> {t("state")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentState}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>{t("district")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentDistrict}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}> {t("mobile_bumber")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentPhoneNumber}
          </p>
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>{t("parent_name")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentParentsName}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>{t("parent_mobile")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentParentsPhoneNumber}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>{t("adhar_number")}</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentAadharNumber}
          </p>
        </div>
      </div>
      <div className={style.aboutQualification}>
        <p className={style.aboutPlace}>{t("current_adress")}</p>
        <p className={style.aboutValue}>
          {tabDetail && tabDetail.studentAddress}
        </p>
      </div>
    </div>
  );
}

export default StudentProfileAbout;
