import React from "react";
import Overlay from "../../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../../Search/SearchModalBackdrop";
import style from "./Menu.module.css";
import { useTranslation } from "react-i18next";
const Menu = ({ onClose, options, switchOption, parentStyle }) => {
  const { t } = useTranslation();
  const onSelect = (opt) => {
    switchOption(opt);
    onClose();
  };
  return (
    <>
      <SearchModalBackdrop
        onClose={onClose}
        customStyleBackdrop={{ background: "transparent" }}
      />
      <Overlay
        customStyle={{ zIndex: "10000", marginLeft: "390px", ...parentStyle }}
      >
        <div className={style.profilelist}>
          {options.map((option, index) => (
            <div onClick={() => onSelect(option)} key={index}>
              {option === "Every one"
                ? t("every_one")
                : option === "Only me"
                ? t("only_me")
                : option === "English"
                ? t("english")
                : option === "Hindi"
                ? t("hindi")
                : t("marathi")}
            </div>
          ))}
        </div>
      </Overlay>
    </>
  );
};

export default Menu;
