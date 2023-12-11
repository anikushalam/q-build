import { useLocation, useNavigate, useParams } from "react-router-dom";
import style from "./UserMemberTab.module.css";
const UserMemberDesignationWrapper = ({ children }) => {
  const params = useParams();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const onNavigate = () => {
    navigate(`/${params.username}/member/staff`, {
      state: {
        sid: getQuery.state?.sid,
      },
    });
  };
  return (
    <div className={style.umdw} onClick={onNavigate}>
      {children}
    </div>
  );
};

export default UserMemberDesignationWrapper;
