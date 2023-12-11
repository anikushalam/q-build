import { useTranslation } from "react-i18next";
import style from "./Button.module.css";
const CreateButton = ({ label, count, onAction, customStyle }) => {
  const { t } = useTranslation();

  return (
    <div
      className={style.create_btn_container}
      onClick={onAction}
      style={customStyle}
    >
      {count > 0 ? <span>{count} </span> : null}
      {t(label)}
    </div>
  );
};

export default CreateButton;
