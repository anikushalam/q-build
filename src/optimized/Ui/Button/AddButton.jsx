import { useTranslation } from "react-i18next";
import style from "./Button.module.css";
const AddButton = ({ label, onAction, customStyle }) => {
  const { t } = useTranslation();
  const onClick = () => {
    onAction();
  };
  return (
    <div className={style.btn_container} onClick={onClick} style={customStyle}>
      {t(label)}
    </div>
  );
};

export default AddButton;
