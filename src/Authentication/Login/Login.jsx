import React, { useEffect, useState } from "react";
import style from "./Login.module.css";
// import LoginForm from "./Components/LoginForm";
import { authChangeAction } from "../../redux/store/authenticate-slice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import AuthModal from "../Auth_New_Flow/AuthModal/AuthModal";
import { useRedirectLogin } from "../../oneTimeLogin/one-time-login";
const ForgetPassword = React.lazy(() => import("./Components/ForgetPassword"));
const OtpForm = React.lazy(() => import("./Components/OtpForm"));
const SetNewPass = React.lazy(() => import("./Components/SetNewPass"));

const Login = () => {
  const [asIns, setAsIns] = useState(false);
  const dispatch = useDispatch();
  const getQuery = useLocation();
  const [searchParams] = useSearchParams();
  const forgetAs = useSelector((state) => state.authChange.forgetAs);
  const { autoLogin } = useRedirectLogin();

  useEffect(() => {
    autoLogin();
  }, []);
  const [active, setActive] = useState(
    forgetAs === "INSTITUTE" ? "FORGET_PASSWORD" : "LOGIN"
  );
  const [userId, setUserId] = useState("");
  useEffect(() => {
    if (forgetAs === "INSTITUTE") {
      setActive("FORGET_PASSWORD");
    }
  }, [forgetAs]);
  const onSignupLink = () => {
    dispatch(authChangeAction.signupChange({ status: false }));
  };

  useEffect(() => {
    if (searchParams?.get("go") === "landing_page") {
      setAsIns(false);
    }
  }, [searchParams]);
  return (
    <>
      <div className={style.registerAppContainer}>
        <div className={` ${style.secondLeftStripe}`}></div>
        <div className={style.registerBGContainer}>
          <div className={style.firstRightStripe}></div>

          <div className={style.registerBG}>
            <div className={style.registergbLeft}>
              <h4>
                <a
                  href="https://dashboard.qviple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Qviple
                </a>
              </h4>

              <ul>
                <li>
                  {/* <h6>Get started quickly</h6>
                  <p>
                    Integrate with developer-friendly APIs or choose low-code or
                    pre-built solutions.
                  </p> */}
                  <h6>
                    <a
                      href="https://dashboard.qviple.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Easy-to-Use Tools
                    </a>
                  </h6>
                  <p>
                    User-friendly interface, even beginners can easily navigate
                    and manage tasks from any device, be it a phone, laptop, or
                    desktop. Plus, enjoy the freedom of accessing Qviple
                    anytime, anywhere, with minimal data usage.
                  </p>
                </li>
                <li>
                  {/* <h6>Support any business model</h6>
                  <p>
                    E-commerce, subscriptions, SaaS platforms, marketplaces, and
                    more all within a unified platform.
                  </p> */}
                  <h6>
                    <a
                      href="https://dashboard.qviple.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Trustworthy and Secure
                    </a>
                  </h6>
                  <p>
                    Choose Qviple for a trustworthy, secure, and confidential
                    school management experience. Partner with us and unlock the
                    full potential of your school's data while maintaining the
                    highest level of security.
                  </p>
                </li>

                <li>
                  {/* <h6>Join millions of businesses</h6>
                  <p>
                    Stripe is trusted by ambitious startups and enterprises of
                    every size.
                  </p> */}
                  <h6>
                    <a
                      href="https://dashboard.qviple.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cost-Effective Scalable Pricing Options
                    </a>
                  </h6>
                  <p>
                    Qviple offers flexible and scalable pricing options to
                    accommodate Institute of all sizes.
                  </p>
                </li>
              </ul>
            </div>

            <div className={style.registergbRight}>
              {getQuery.search === "" && active !== "LOGIN" ? (
                <>
                  {/* {active === "LOGIN" && (
                    <LoginForm
                      onSignupLink={onSignupLink}
                      setActive={setActive}
                    />
                  )} */}
                  {active === "FORGET_PASSWORD" && (
                    <ForgetPassword
                      onSignupLink={onSignupLink}
                      setActive={setActive}
                      setUserId={setUserId}
                    />
                  )}
                  {active === "OTP" && (
                    <OtpForm
                      userId={userId}
                      setUserId={setUserId}
                      setActive={setActive}
                      onSignupLink={onSignupLink}
                    />
                  )}
                  {active === "NEW_PASSWORD" && (
                    <SetNewPass userId={userId} setActive={setActive} />
                  )}
                </>
              ) : (
                <AuthModal external={true} ins={asIns} switchUser={setAsIns} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
