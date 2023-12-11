import React from "react";
import style from "./component.module.css";
import SigninHeader from "../../../Login/Components/SigninHeader";
import { useState } from "react";
import ButtonWithAction from "../../../../Custom/Button/ButtonWithAction";
import { useTranslation } from "react-i18next";

function InstituteType({ type, setActiveTab, setInstituteData }) {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <div className={style.modalContainerr}>
      <div className={style.loginLogo}>
        <img
          className={style.backText}
          src="/images/back-text.svg"
          alt="not found"
          onClick={() => setActiveTab("VERIFIED_MOBILE")}
        />
        {/* <SigninHeader status="login" /> */}
      </div>
      <div className={`${style.contentt} ${style.instypecontent}`}>
        <div className={style.contentthead}>
          <h3 className={style.choosetypeh}>{t("type_of_ins")}</h3>
          <p className={style.choosetypep}>{t("choose_others")}</p>
        </div>

        <div className={style.contenttmid}>
          {index === 1 || type === "College/Polytechnic" ? (
            <div className={style.contenttmidItemDark}>
              <img src="/images/ins-type/clg-polytechnic-dark.svg" alt="" />
              <p>{t("college_polytechnic")}</p>
            </div>
          ) : (
            <div
              className={style.contenttmidItem}
              onClick={() => {
                setInstituteData((prev) => ({
                  ...prev,
                  type: "College/Polytechnic",
                }));
                setIndex(1);
              }}
            >
              <img src="/images/ins-type/clg-polytechnic.svg" alt="" />
              <p>{t("college_polytechnic")}</p>
            </div>
          )}

          {index === 2 || type === "School" ? (
            <div className={style.contenttmidItemDark}>
              <img src="/images/ins-type/school-dark.svg" alt="" />
              <p>{t("school_ecc")}</p>
            </div>
          ) : (
            <div
              className={style.contenttmidItem}
              onClick={() => {
                setInstituteData((prev) => ({
                  ...prev,
                  type: "School",
                }));
                setIndex(2);
              }}
            >
              <img src="/images/ins-type/school.svg" alt="" />
              <p>{t("school_ecc")}</p>
            </div>
          )}

          {index === 3 || type === "Coaching/Tuition" ? (
            <div className={style.contenttmidItemDark}>
              <img src="/images/ins-type/coaching-dark.svg" alt="" />
              <p>{t("coaching")}</p>
            </div>
          ) : (
            <div
              className={style.contenttmidItem}
              onClick={() => {
                setInstituteData((prev) => ({
                  ...prev,
                  type: "Coaching/Tuition",
                }));
                setIndex(3);
              }}
            >
              <img src="/images/ins-type/coaching.svg" alt="" />
              <p>{t("coaching")}</p>
            </div>
          )}

          {index === 4 || type === "Online Educating Institute" ? (
            <div className={style.contenttmidItemDark}>
              <img src="/images/ins-type/computer-institute-dark.svg" alt="" />
              <p>{t("Computer_ins")}</p>
            </div>
          ) : (
            <div
              className={style.contenttmidItem}
              onClick={() => {
                setInstituteData((prev) => ({
                  ...prev,
                  type: "Online Educating Institute",
                }));
                setIndex(4);
              }}
            >
              <img src="/images/ins-type/computer-institute.svg" alt="" />
              <p>{t("Computer_ins")}</p>
            </div>
          )}

          {index === 5 || type === "Content Creator" ? (
            <div className={style.contenttmidItemDark}>
              <img src="/images/ins-type/content-creator-dark.svg" alt="" />
              <p>{t("educational_content")}</p>
            </div>
          ) : (
            <div
              className={style.contenttmidItem}
              onClick={() => {
                setInstituteData((prev) => ({
                  ...prev,
                  type: "Content Creator",
                }));
                setIndex(5);
              }}
            >
              <img src="/images/ins-type/content-creator2.svg" alt="" />
              <p>{t("educational_content")}</p>
            </div>
          )}

          {index === 6 || type === "Other" ? (
            <div className={style.contenttmidItemDark}>
              <img src="/images/ins-type/music-dance-dark.svg" alt="" />
              <p>{t("music_academy")}</p>
            </div>
          ) : (
            <div
              className={style.contenttmidItem}
              onClick={() => {
                setInstituteData((prev) => ({
                  ...prev,
                  type: "Other",
                }));
                setIndex(6);
              }}
            >
              <img src="/images/ins-type/music-dance.svg" alt="" />
              <p>{t("music_academy")}</p>
            </div>
          )}
        </div>
        {type !== "" ? (
          <ButtonWithAction
            buttonText={t("next")}
            disabled={false}
            shwoLoader={true}
            onAction={() => setActiveTab("INSTITUTE_MODE")}
            customStyleButton={{
              minHeight: "2.3rem",
              backgroundColor: "#575caa",
              marginTop: "2rem",
            }}
          />
        ) : (
          <ButtonWithAction
            buttonText={t("next")}
            disabled={true}
            shwoLoader={false}
            customStyleButton={{
              color: "rgba(18, 18, 18, 0.6)",
              minHeight: "2.3rem",
              backgroundColor: "#575caa",
              marginTop: "2rem",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default InstituteType;
