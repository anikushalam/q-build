import style from "./StudentProfile.module.css";
const FieldHeadingWrapper = ({ label, children }) => {
  return (
    <div className={style.sp_fhw}>
      <h5>{label}</h5>
      {children}
    </div>
  );
};

export default FieldHeadingWrapper;
