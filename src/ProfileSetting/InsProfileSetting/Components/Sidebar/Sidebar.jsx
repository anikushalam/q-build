import React, { useState } from "react";
import style from "./Sidebar.module.css";
import { useTranslation } from "react-i18next";

import CustomSuspense from "../../../../Custom/SuspenseLoading/CustomSuspense";
const Logout = React.lazy(() => import("../Modals/Logout"));
function Sidebar({ clickItem, changeItem }) {
  const [logout, setLogout] = useState(false);
  const { t } = useTranslation();

  const changeLogout = () => {
    setLogout(false);
  };

  return (
    <div className={style.sidebar}>
      <div className={style.heading}>Settings</div>
      <div className={style.list}>
        <div
          className={
            clickItem === 1
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => changeItem(1)}
        >
          <img
            className={style.img}
            alt="not found"
            src="/images/account.svg"
          />
          <img
            className={style.imgDark}
            alt="not found"
            src="/images/account-dark.svg"
          />
          <p>{t("acount")}</p>
        </div>
        <div
          className={
            clickItem === 2
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => changeItem(2)}
        >
          <img className={style.img} alt="not found" src="/images/bell.svg" />
          <img
            className={style.imgDark}
            alt="not found"
            src="/images/bell-dark.svg"
          />
          <p>{t("notification")}</p>
        </div>
        <div
          className={
            clickItem === 3
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => changeItem(3)}
        >
          <img className={style.img} alt="not found" src="/images/wallet.svg" />
          <img
            className={style.imgDark}
            alt="not found"
            src="/images/wallet-dark.svg"
          />
          <p>{t("payment_gateway")}</p>
        </div>
        {/* <div
          className={
            clickItem === 3
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => changeItem(3)}
        >
          <img
            className={style.img}
            alt="not found"
            src="/images/bookmark.svg"
          />
          <img
            className={style.imgDark}
            alt="not found"
            src="/images/bookmark-dark.svg"
          />
          <p>{t("Saved Post")}</p>
        </div> */}
        {/* <div
          className={
            clickItem === 4
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => changeItem(4)}
        >
          <img
            className={style.img}
            alt="not found"
            src="/images/hand-coin.svg"
          />
          <img
            className={style.imgDark}
            alt="not found"
            src="/images/hand-coin-dark.svg"
          />
          <p>{t("Q coins")}</p>
        </div> */}
        {/* <div
          className={
            clickItem === 5
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => changeItem(5)}
        >
          <img className={style.img} alt="not found" src="/images/wallet.svg" />
          <img
            className={style.imgDark}
            alt="not found"
            src="/images/wallet-dark.svg"
          />
          <p>{t("Transaction History")}</p>
        </div>
        <div
          className={
            clickItem === 6
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => changeItem(6)}
        >
          <img
            className={style.img}
            alt="not found"
            src="/images/cellphone-cog.svg"
          />
          <img
            className={style.imgDark}
            alt="not found"
            src="/images/cellphone-cog-dark.svg"
          />
          <p>{t("support-place")}</p>
        </div> */}
        <div
          className={
            clickItem === 7
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => changeItem(7)}
        >
          <img className={style.img} alt="not found" src="/images/lock.svg" />
          <img
            className={style.imgDark}
            alt="not found"
            src="/images/lock-dark.svg"
          />
          <p>{t("privacy")}</p>
        </div>
        <a
          href="https://dashboard.qviple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={
              clickItem === 8
                ? `${style.options} ${style.borderLeft}`
                : style.options
            }
            // onClick={() => changeItem(8)}
          >
            <img
              className={style.img}
              alt="not found"
              src="/images/information.svg"
            />
            <img
              className={style.imgDark}
              alt="not found"
              src="/images/information-dark.svg"
            />
            <p>{t("about_quviple")}</p>
          </div>
        </a>
        <div
          className={
            clickItem === 9
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => {
            setLogout(true);
            changeItem(7);
          }}
        >
          <img className={style.img} alt="not found" src="/images/logout.svg" />
          <img
            className={style.imgDark}
            alt="not found"
            src="/images/logout-dark.svg"
          />
          <p>{t("logout")}</p>
        </div>
      </div>
      <CustomSuspense>
        {logout && <Logout changeLogout={changeLogout} logout={logout} />}
      </CustomSuspense>
    </div>
  );
}

export default Sidebar;
