import React, { useEffect } from "react";
import GetStarted from "./GetStarted";
import AuthCardWrapper from "./AuthCardWrapper";
import Login from "@/Auth/Login/Login";
import { useRedirectLogin } from "@/oneTimeLogin/one-time-login";

const Auth = () => {
  const { autoLogin } = useRedirectLogin();
  useEffect(() => {
    autoLogin();
  }, []);
  return (
    <GetStarted>
      <AuthCardWrapper>
        <Login />
      </AuthCardWrapper>
    </GetStarted>
  );
};

export default Auth;
