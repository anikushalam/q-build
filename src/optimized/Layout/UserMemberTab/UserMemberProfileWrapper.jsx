import style from "./UserMemberTab.module.css";

const UserMemberProfileWrapper = ({ children }) => {
  return <div className={style.umpw}>{children}</div>;
};

export default UserMemberProfileWrapper;
