import style from "./UserMember.module.css";

const UserMemberContentWrapper = ({ customStyle, children }) => {
  return (
    <div className={style.user_member_content_wrapper} style={customStyle}>
      {children}
    </div>
  );
};

export default UserMemberContentWrapper;
