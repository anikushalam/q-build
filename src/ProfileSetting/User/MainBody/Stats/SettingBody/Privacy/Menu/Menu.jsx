import React, { useEffect } from "react";
import style from "./Menu.module.css";
import { useTranslation } from "react-i18next";
import { useUserSettingPrivacy } from "../../../../../../../hooks/setting-api";
function Menu({
  options,
  closeMenu,
  popup,
  settingPrivacyData,
  setSettingPrivacyData,
  setStatus,
}) {
  const [userSettingPrivacy] = useUserSettingPrivacy();
  const { t } = useTranslation();
  const clickHandler = (option) => {
    setSettingPrivacyData({ ...settingPrivacyData, tagStatus: option });
    userSettingPrivacy({
      settingPrivacyData: settingPrivacyData,
    }).then((res) => {
      setStatus(true);
    });
  };

  const handleClickOutside = (e) => {
    if (!e.target.style.zIndex || e.target.style.zIndex !== "50") {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={
        popup
          ? `${style.profileToolTip} ${style.profileToolTipPopup}`
          : style.profileToolTip
      }
      id="menuTooltip"
    >
      <div
        className={
          popup
            ? `${style.triangle} ${style.trianglePopup}`
            : `${style.triangle} ${style.triangleNotPopup}`
        }
      ></div>

      <div className={style.profilelist}>
        {options.map((option, index) => (
          <div
            style={{ zIndex: "50" }}
            value={option}
            onClick={() => clickHandler(option)}
            key={index}
          >
            {option === "Every one"
              ? t("every_one")
              : option === "Only me"
              ? t("only_me")
              : t("circle")}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
