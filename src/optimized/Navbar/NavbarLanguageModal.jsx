import BackdropModal from "@/Utils/Modal/BackdropModal";
import React, { useCallback, useState } from "react";
import style from "./Navbar.module.css";
import NavbarOverlayModal from "@/Utils/Modal/NavbarOverlayModal";

const NavbarLanguageModal = ({ onClose, languages, onChooseLanguage }) => {
  const [isHide, setIsHide] = useState(false);
  const onAnimationClose = useCallback(() => {
    setIsHide(true);
    let animationTimeout = setTimeout(() => {
      onClose();
    }, 500);
    return () => clearTimeout(animationTimeout);
  }, [onClose]);
  const onChoose = (val) => {
    onChooseLanguage(val);
    onAnimationClose();
  };
  return (
    <>
      <BackdropModal
        onBackdropClose={onAnimationClose}
        customBackdropStyle={{
          backgroundColor: "transparent",
        }}
      />
      <NavbarOverlayModal isHide={isHide}>
        <div className={style.navbar_languages_wrapper}>
          {languages.map((lan) => (
            <div
              className={style.navbar_languages_option}
              value={lan.code}
              key={lan.code}
              onClick={() => onChoose(lan)}
            >
              {lan.name}
            </div>
          ))}
        </div>
      </NavbarOverlayModal>
    </>
  );
};

export default NavbarLanguageModal;
