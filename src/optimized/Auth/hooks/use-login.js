import { baseChangeAction } from "@/Store/base-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDispatchAction = (data) => {
    let user = data?.user;
    if (data?.isUniversal) {
      navigate(`/verify`, {
        state: {
          phoneNumber: data?.phoneNumber,
        },
      });
    } else {
      dispatch(
        baseChangeAction.addCurrentLogin({
          status: true,
          token: data?.token,
          loggedInAs: "user",
          currentLoginRole: "",
          id: user?._id,
          currentLogin: {
            username: user?.username,
            name: user?.userLegalName,
            profilePhoto: user?.profilePhoto,
          },
        })
      );
      navigate(`/${user?.username}/feed`);
    }
  };

  const existingAccountLogin = (data) => {
    userDispatchAction({
      token: data?.token,
      user: data?.user,
    });
  };
  return { userDispatchAction, existingAccountLogin };
};

export { useLogin };
