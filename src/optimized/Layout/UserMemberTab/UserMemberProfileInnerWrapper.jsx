import style from "./UserMemberTab.module.css";

const UserMemberProfileInnerWrapper = ({ children }) => {
  return <div className={style.ump_inner_w}>{children}</div>;
};

export default UserMemberProfileInnerWrapper;
