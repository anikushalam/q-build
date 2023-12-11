import style from "./UserMember.module.css";

const UserMemberContainerWrapper = ({ customStyle, children }) => {
  return (
    <div className={style.user_member_container_wrapper} style={customStyle}>
      {children}
    </div>
  );
};

export default UserMemberContainerWrapper;
