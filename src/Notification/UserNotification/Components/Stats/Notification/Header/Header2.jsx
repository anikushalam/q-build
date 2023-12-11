import { useTranslation } from "react-i18next";
import style from "./Header.module.css";
function Header2() {
  const { t } = useTranslation();
  return <div className={style.header}>{t("new-followers-place")}</div>;
}

export default Header2;
