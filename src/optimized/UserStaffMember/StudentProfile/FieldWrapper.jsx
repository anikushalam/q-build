import style from "./StudentProfile.module.css";
const FieldWrapper = ({ children }) => {
  return <div className={style.sp_fw}>{children}</div>;
};

export default FieldWrapper;
