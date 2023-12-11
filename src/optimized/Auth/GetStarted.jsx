import React from "react";
import style from "./Auth.module.css";
import { assestsAuthUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
const GetStarted = ({ children }) => {
  return (
    <div className={style.getstarted}>
      <div className={style.left_strip} />
      <div className={style.getstarted_container}>
        <div className={style.right_strip} />

        <div className={style.getstarted_container_inner}>
          <div className={style.getstarted_container_info}>
            <a
              href="https://dashboard.qviple.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Qviple</h4>
            </a>

            <ul>
              <li>
                <a
                  href="https://dashboard.qviple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6>
                    <img
                      src={`${assestsAuthUrl}/auth-easy.svg`}
                      alt="auth cost"
                    />
                    Easy-to-Use Tools
                  </h6>
                </a>
                <p>
                  User-friendly interface, even beginners can easily navigate
                  and manage tasks from any device, be it a phone, laptop, or
                  desktop. Plus, enjoy the freedom of accessing Qviple anytime,
                  anywhere, with minimal data usage.
                </p>
              </li>
              <li>
                <a
                  href="https://dashboard.qviple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6>
                    <img
                      src={`${assestsAuthUrl}/auth-trust.svg`}
                      alt="auth cost"
                    />
                    Trustworthy and Secure
                  </h6>
                </a>
                <p>
                  Choose Qviple for a trustworthy, secure, and confidential
                  school management experience. Partner with us and unlock the
                  full potential of your school's data while maintaining the
                  highest level of security.
                </p>
              </li>

              <li>
                <a
                  href="https://dashboard.qviple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6>
                    <img
                      src={`${assestsAuthUrl}/auth-cost.svg`}
                      alt="auth cost"
                    />
                    Cost-Effective Scalable Pricing Options
                  </h6>
                </a>
                <p>
                  Qviple offers flexible and scalable pricing options to
                  accommodate Institute of all sizes.
                </p>
              </li>
            </ul>
            <div className={style.get_started_btn}>
              <a
                href="https://dashboard.qviple.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Get Started</button>
              </a>
            </div>
          </div>

          <div className={style.getstarted_container_child}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
