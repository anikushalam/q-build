import React, { useEffect } from "react";
import style from "./SignUp.module.css";
import { useSelector } from "react-redux";
import { useRedirectLogin } from "../../oneTimeLogin/one-time-login";
const UserSignUp = React.lazy(() => import("./UserSignUp/UserSignUp"));
const InsSignUp = React.lazy(() => import("./InsSignUp/InsSignUp"));
function SignUp({ switchUser }) {
  const author = useSelector((state) => state.authChange);
  const { autoLogin } = useRedirectLogin();

  useEffect(() => {
    autoLogin();
  }, []);

  return (
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
                  desktop. Plus, enjoy the freedom of accessing Qviple anytime,
                  anywhere, with minimal data usage.
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
            {!author.status && <InsSignUp switchUser={switchUser} />}
            {author.status && <UserSignUp />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
