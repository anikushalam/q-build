import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuthenticationLogin } from "../../../hooks/authentication-api";
import { admissionChangeAction } from "../../../redux/store/admission-slice";
import { authChangeAction } from "../../../redux/store/authenticate-slice";
import { idChangeAction } from "../../../redux/store/department-slice";
import { financeChangeAction } from "../../../redux/store/finance-slice";
import verifyUserNameSpaces from "../../verifyUserNameSpaces";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useAuthenticationLogin();
  const authenticateLogin = async (loginData) => {
    const resp = verifyUserNameSpaces(loginData.insUserName);
    if (resp) {
      return {
        msg: "Special Character not allowed...",
        notify: true,
      };
    } else {
      try {
        const res = await login(loginData);
        if (res.data.login) {
          localStorage.clear("token");
          localStorage.clear("user");
          localStorage.clear("loggedinAs");
          localStorage.clear("_did");
          localStorage.clear("_cid");
          localStorage.clear("_searchId");
          localStorage.clear("_searchAs");
          localStorage.clear("_usr");
          localStorage.clear("_ad_access");
          localStorage.clear("_fn_access");
          localStorage.clear("_usr_r");
          if (res?.data?.institute) {
            dispatch(
              authChangeAction.loginQuery({
                login: true,
                token: res.data.token,
                id: res.data.institute?._id,
                status: true,
                loggedinAs: "institute",
                username: res.data.institute?.name,
                loginRole:
                  res.data?.main_role === "SOCIAL_MEDIA_HANDLER"
                    ? "_usr_rs"
                    : "",
              })
            );

            dispatch(
              idChangeAction.addInstituteId({
                id: res.data.institute ? res.data.institute?._id : "",
                loggedinAs: "institute",
              })
            );
            dispatch(
              financeChangeAction.financeQuery({
                fid: res?.data?.institute?.financeDepart[0]
                  ? res?.data?.institute?.financeDepart[0]
                  : "",
              })
            );
            dispatch(
              admissionChangeAction.admissionQuery({
                aid: res?.data?.institute?.admissionDepart[0]
                  ? res?.data?.institute?.admissionDepart[0]
                  : "",
              })
            );
            navigate(`/q/${res.data.institute.name}/feed`, {
              state: {
                loginRole:
                  res.data?.main_role === "SOCIAL_MEDIA_HANDLER"
                    ? "_usr_rs"
                    : "",
              },
            });
          } else if (res?.data?.user) {
            dispatch(
              authChangeAction.loginQuery({
                login: true,
                token: res.data.token,
                id: res.data.user._id,
                status: true,
                loggedinAs: "user",
                username: res.data.user?.username,
              })
            );

            dispatch(
              idChangeAction.addInstituteId({
                id: res.data.user ? res.data.user?._id : "",
                loggedinAs: "user",
              })
            );
            navigate(`/q/${res?.data?.user.username}/feed`);
          } else if (res?.data?.admin) {
            dispatch(
              authChangeAction.loginQuery({
                login: true,
                token: res.data.token,
                id: res.data.admin ? res.data.admin?._id : "",
                status: true,
                loggedinAs: "admin",
              })
            );
            navigate(`/q/${res.data.admin.adminUserName}/superadmin`);
          }
        } else {
          return {
            msg: "Invalid Credentials",
            notify: true,
          };
        }
      } catch {
        return {
          msg: "Time out of request...",
          notify: true,
        };
      }
    }
  };

  const clearStorage = () => {
    localStorage.clear("token");
    localStorage.clear("user");
    localStorage.clear("loggedinAs");
    localStorage.clear("_did");
    localStorage.clear("_cid");
    localStorage.clear("_searchId");
    localStorage.clear("_searchAs");
    localStorage.clear("_usr");
    localStorage.clear("_ad_access");
    localStorage.clear("_fn_access");
  };
  const existingAccountLogin = (data) => {
    clearStorage();
    dispatch(
      authChangeAction.loginQuery({
        login: true,
        token: data?.token,
        id: data?._id,
        status: true,
        loggedinAs: "user",
        username: data?.username,
      })
    );

    dispatch(
      idChangeAction.addInstituteId({
        id: data?._id,
        loggedinAs: "user",
      })
    );
    navigate(`/q/${data?.username}/feed`);
  };
  const existingLandingAccountLogin = (data) => {
    clearStorage();
    dispatch(
      authChangeAction.loginQuery({
        login: true,
        token: data?.token,
        id: data?._id,
        status: true,
        loggedinAs: "user",
        username: data?.username,
      })
    );
    dispatch(
      idChangeAction.addInstituteId({
        id: data?._id,
        loggedinAs: "user",
      })
    );
  };
  return {
    authenticateLogin,
    existingAccountLogin,
    existingLandingAccountLogin,
  };
};

export { useLogin };
