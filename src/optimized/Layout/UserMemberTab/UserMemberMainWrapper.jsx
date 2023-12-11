import style from "./UserMemberTab.module.css";

const UserMemberMainWrapper = ({ children }) => {
  return <div className={style.um_main_wrapper}>{children}</div>;
};

export default UserMemberMainWrapper;
