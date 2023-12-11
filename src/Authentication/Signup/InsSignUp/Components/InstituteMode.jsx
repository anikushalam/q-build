import React from "react";
import style from "./component.module.css";
import SigninHeader from "../../../Login/Components/SigninHeader";
import { useState } from "react";
import ButtonWithAction from "../../../../Custom/Button/ButtonWithAction";
import { useTranslation } from "react-i18next";

function InstituteMode({ setInstituteData, setActiveTab, mode }) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  return (
    <div className={style.modalContainerr}>
      <div className={style.loginLogo}>
        <img
          className={style.backText}
          src="/images/back-text.svg"
          alt="not found"
          onClick={() => setActiveTab("INSTITUTE_TYPE")}
        />
        {/* <SigninHeader status="login" /> */}
      </div>

      <div className={`${style.contentt} ${style.insmodecontent}`}>
        <div className={style.contentthead}>
          <h3 className={style.choosetypeh}>{t("mode_of_operating")}</h3>
          <p className={style.choosetypep}>{t("choose_both")}</p>
        </div>

        <div className={`${style.contenttmid} ${style.insmodemid}`}>
          {index === 1 || mode === "Online" ? (
            <div className={style.contenttmidItemDark}>
              <img src="/images/ins-mode/online-dark.svg" alt="" />
              <p>{t("online")}</p>
            </div>
          ) : (
            <div
              className={style.contenttmidItem}
              onClick={() => {
                setInstituteData((prev) => ({
                  ...prev,
                  mode: "Online",
                }));
                setIndex(1);
              }}
            >
              <img src="/images/ins-mode/online.svg" alt="" />
              <p>{t("offline")}</p>
            </div>
          )}

          {index === 2 || mode === "Offline" ? (
            <div className={style.contenttmidItemDark}>
              <img src="/images/ins-mode/offline-dark.svg" alt="" />
              <p>{t("offline")}</p>
            </div>
          ) : (
            <div
              className={style.contenttmidItem}
              onClick={() => {
                setInstituteData((prev) => ({
                  ...prev,
                  mode: "Offline",
                }));
                setIndex(2);
              }}
            >
              <img src="/images/ins-mode/offline.svg" alt="" />
              <p>{t("offline")}</p>
            </div>
          )}

          {index === 3 || mode === "Both" ? (
            <div className={style.contenttmidItemDark}>
              <img src="/images/ins-mode/both-dark.svg" alt="" />
              <p>{t("both")}</p>
            </div>
          ) : (
            <div
              className={style.contenttmidItem}
              onClick={() => {
                setInstituteData((prev) => ({
                  ...prev,
                  mode: "Both",
                }));
                setIndex(3);
              }}
            >
              <img src="/images/ins-mode/both.svg" alt="" />
              <p>{t("both")}</p>
            </div>
          )}
        </div>
        <div />
      </div>

      {mode !== "" ? (
        <ButtonWithAction
          buttonText={t("next")}
          disabled={false}
          shwoLoader={true}
          onAction={() => setActiveTab("INSTITUTE_REGISTER")}
          customStyleButton={{
            minHeight: "2.3rem",
            backgroundColor: "#575caa",
          }}
        />
      ) : (
        <ButtonWithAction
          buttonText={t("next")}
          disabled={true}
          shwoLoader={false}
          customStyleButton={{
            minHeight: "2.3rem",
            backgroundColor: "#575caa",
          }}
        />
      )}
    </div>
  );
}

export default InstituteMode;
