import React, { Suspense, lazy, memo, useCallback, useState } from "react";
import style from "./Navbar.module.css";
import i18next from "i18next";
import { assestsNavbarUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import QvipleLoader from "@/Loader/QvipleLoader";
const NavbarLanguageModal = lazy(() => import("./NavbarLanguageModal"));

const languages = [
  { code: "en", name: "English" },
  { code: "hn", name: "हिंदी" },
  { code: "mt", name: "मराठी" },
];

const NavbarLanguage = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("");
  let selectedLanguage = lang ? lang : i18next.languages[0];

  const onToggle = useCallback(() => {
    setOpen((pre) => !pre);
  }, []);
  const onChooseLanguage = useCallback(
    (option) => {
      if (option.code === "en") {
        i18next.changeLanguage(languages[0].code);
      } else if (option.code === "hn") {
        i18next.changeLanguage(languages[1].code);
      } else if (option.code === "mt") {
        i18next.changeLanguage(languages[2].code);
      } else {
      }
      setLang(option.code);
    },
    [i18next]
  );
  return (
    <>
      <div>
        <div className={style.navbar_language} onClick={onToggle}>
          <h6>
            {selectedLanguage === "en"
              ? languages[0].name
              : selectedLanguage === "hn"
              ? languages[1].name
              : languages[2].name}{" "}
          </h6>
          <img
            className={style.selectIcon}
            src={`${assestsNavbarUrl}/navbar-dropdown-fill.svg`}
            alt="dropdown icon"
          />
        </div>
      </div>
      <Suspense fallback={<QvipleLoader />}>
        {open ? (
          <NavbarLanguageModal
            onClose={onToggle}
            languages={languages}
            onChooseLanguage={onChooseLanguage}
          />
        ) : null}
      </Suspense>
    </>
  );
};

export default memo(NavbarLanguage);
