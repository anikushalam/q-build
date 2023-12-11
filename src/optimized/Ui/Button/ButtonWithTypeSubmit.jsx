import style from "../../Auth/Auth.module.css";
import CircleLoading from "@/Loader/CircleLoading";
const ButtonWithTypeSubmit = ({
  type,
  buttonText,
  disabled,
  customStyleButton,
  customStyleButtonText,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      style={customStyleButton}
      className={style.auth_submit_btn}
    >
      <span style={{ ...customStyleButtonText }}>{buttonText}</span>
      {disabled && <CircleLoading />}
    </button>
  );
};

export default ButtonWithTypeSubmit;
