import React from "react";
import style from "../../../Home/components/Header/NewHeader/HeaderIns.module.css";
import ButtonWithAction from "../../../Custom/Button/ButtonWithAction";
import { useTranslation } from "react-i18next";
import SingleDesig from "./SingleDesig";
import { imageShowUrl2 } from "../../../services/BaseUrl";

function DesignationOption({ setStatus }) {
  const { t } = useTranslation();
  return (
    <div className={style.card}>
      <h6 className={style.cardhdark}>{t("existing_student_and_join")}</h6>

      <p className={style.staffsp}>{t("if_u_studentstaff")}</p>

      <div className={style.desig_buttons}>
        <SingleDesig
          clickOtopn={() => setStatus("STAFF_DESIGNATION")}
          text={t("as_staff_student")}
          option="Staff"
          img={`${imageShowUrl2}/members/staff.svg`}
        />
        <SingleDesig
          clickOtopn={() => setStatus("STUDENT_DESIGNATION")}
          text={t("student_")}
          img={`${imageShowUrl2}/members/student.svg`}
          option="Student"
        />
      </div>

      <p className={style.joiningh}>{t("join_school_clg_tution")}</p>
      <p className={style.new_admission}>For new admission</p>
      <ol className={style.joiningsteps}>
        <li className={style.step}>
          <span>{t("create_new_account")}</span>
        </li>

        <li className={style.step}>{t("search_school")}</li>
        <li className={style.step}>{t("open_profile")}</li>
        <li className={style.step}>{t("select_application")}</li>
        <li className={style.step}>{t("stay_updated")}</li>
      </ol>

      <div className={style.btn_containerstaff}>
        <ButtonWithAction
          disabled={false}
          buttonText={t("create_normal_accnt")}
          customStyleButton={{
            minHeight: "2.3rem",

            marginBottom: "1rem",
          }}
          customStyleButtonText={{
            fontSize: "1rem",
          }}
          onAction={() => setStatus("USER_REGISTER")}
        />
      </div>
    </div>
  );
}

export default DesignationOption;
