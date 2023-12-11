import React from "react";
import style from "./Header.module.css";

import { useTranslation } from "react-i18next";
import "./Header.css";

function NewFollowerHeader({ changeToNewFollowers, newFollowers }) {
  const { t } = useTranslation();
  return (
    <div
      className={style.newFollowerheader}
      onClick={() => changeToNewFollowers(false)}
    >
      {t("new_followerss")} {t("add_circle")}
    </div>
  );
}

export default NewFollowerHeader;
