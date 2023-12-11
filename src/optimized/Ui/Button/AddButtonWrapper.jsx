import style from "./Button.module.css";

const AddButtonWrapper = ({ customStyle, children }) => {
  return (
    <div className={style.btn_wrapper} style={customStyle}>
      {children}
    </div>
  );
};

export default AddButtonWrapper;
