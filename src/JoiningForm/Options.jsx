import React from "react";
import style from "./JoiningForm.module.css";
import { useTranslation } from "react-i18next";

function SingleOption({ text, img, setJoin, option, setIndex }) {
  return (
    <div
      className={style.singleOption}
      onClick={() => {
        setJoin(option);
        setIndex(3);
      }}
    >
      <img src={img} alt="" />
      <h6>{text}</h6>
    </div>
  );
}

function Options({ setJoin, setIndex }) {
  const { t } = useTranslation();
  return (
    <div className={style.applications}>
      <div className={style.top}>{t("existing_student_and_join")}</div>
      <div className={style.content}>
        <div className={style.contenttop}>
          <p>{t("to_join_or_appy")}</p>
        </div>
        <div className={style.contentBottom}>
          <SingleOption
            text={t("as_staff_")}
            option="Staff"
            img="/images/members/staff.svg"
            setJoin={setJoin}
            setIndex={setIndex}
          />
          <SingleOption
            text={t("as_student_")}
            img="/images/members/student.svg"
            setJoin={setJoin}
            setIndex={setIndex}
            option="Student"
          />
        </div>
      </div>
    </div>
  );
}

export default Options;
