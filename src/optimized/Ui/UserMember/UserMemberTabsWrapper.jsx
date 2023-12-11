import style from "./UserMember.module.css";

const UserMemberTabsWrapper = ({ children }) => {
  return <div className={style.user_member_tabs_wrapper}>{children}</div>;
};

export default UserMemberTabsWrapper;
