import React, { useEffect, useState } from "react";
import style from "./Navright.module.css";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lan]);
  return (
    <div className={style.navright}>
      <div className={style.select}>
        <div className={style.selector} onClick={() => setClick(!click)}>
          <p> {lang} </p>
          <img
            className={style.selectIcon}
            src="/images/down-icon.svg"
            alt=""
          />

          {click && <Options options={languages} switchOption={handleChange} />}
        </div>

        <span className={style.arrow}></span>
        <img
          className={style.arrowIcon}
          src="/images/dropdown-icon.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navright;
