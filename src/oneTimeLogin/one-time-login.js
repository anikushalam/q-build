import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useCheckedLogin = () => {
  const login = useSelector((state) => state.authChange);

  let isLoggedIn = false;
  if (login?.token && login?.id && login?.username) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  return {
    isLoggedIn,
  };
};

const useRedirectLogin = () => {
  const login = useSelector((state) => state.authChange);
  const navigate = useNavigate();
  const autoLogin = () => {
    if (login?.token && login?.id && login?.username) {
      navigate(`/q/${login?.username}/feed`);
    } else {
      // navigate(`/`);
    }
  };

  // const autoLogin = async () => {
  //   if (login?.token && login?.id && login?.username) {
  //     if (searchParams.get("username")) {
  //       navigate(`/q/${searchParams.get("username")}/feed`);
  //     } else {
  //       navigate(`/q/${login?.username}/feed`);
  //     }
  //   } else {
  //     // console.info("sndjfbsdmbsd location", window.location);
  //     if (searchParams.get("username")) {
  //       // navigate(`/q/${searchParams.get("username")}/feed`);
  //       let isLogged = await authenticationWithUserLogin({
  //         username: searchParams.get("username"),
  //       });
  //       console.info("isLogged", isLogged);
  //     }
  //   }
  return {
    autoLogin,
  };
};
export { useCheckedLogin, useRedirectLogin };
