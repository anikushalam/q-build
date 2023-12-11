import React, { useEffect, useState } from "react";
import style from "./Navright.module.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Options } from "../Options/Options";

function Navright() {
  const [click, setClick] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "hn", name: "हिंदी" },
    { code: "mt", name: "मराठी" },
  ];
  const [lang, setLang] = useState(languages[0].name);

  const { t } = useTranslation();
  const [lan, setLan] = React.useState("");

  const handleChange = (option) => {
    setLan(option.code);
    setLang(option.name);
  };

  useEffect(() => {
    if (lan === "en") {
      i18next.changeLanguage(languages[0].code);
    } else if (lan === "hn") {
      i18next.changeLanguage(languages[1].code);
    } else if (lan === "mt") {
      i18next.changeLanguage(languages[2].code);
    }
  }, [lan]);
  return (
    <div className={style.navright}>
      <div className={style.select}>
        <div className={style.selector} onClick={() => setClick(!click)}>
          <p> {lang} </p>
          <img className={style.selectIcon} src="/images/down-icon.svg" />

          {click && <Options options={languages} switchOption={handleChange} />}
        </div>

        <span className={style.arrow}></span>
        <img className={style.arrowIcon} src="/images/dropdown-icon.svg" />
      </div>
    </div>
  );
}

export default Navright;
