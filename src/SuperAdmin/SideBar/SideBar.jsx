import React from "react";
import style from "./SideBar.module.css";
// import Item from "./Components/Item";
// import { LogoutQueryHandler } from "../../Authentication/Logout/LogoutQuery";
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function SideBar({ index, changeIndex }) {
  // const navigate = useNavigate();
  // const LogoutHandler = () => {
  //   navigate("/");
  //   LogoutQueryHandler();
  // };
  return (
    <div className={style.sidebar}>
      <Link to={`/`}>
        <div className={style.top}>
          <img
            alt="logo"
            className={style.logotext}
            src="/images/admin/logo-text-pink-icon.svg"
          />
        </div>
      </Link>
      <div className={style.mid}>
        {index === 1 ? (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/dashboard-dark-icon.svg"
              onClick={() => changeIndex(1)}
            />
            <p>Dashboard</p>
          </div>
        ) : (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/dashboard-icon.svg"
              onClick={() => changeIndex(1)}
            />
            <p className={style.textcolor}>Dashboard</p>
          </div>
        )}

        {index === 2 ? (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/institute-dark.svg"
              onClick={() => changeIndex(2)}
            />
            <p>Institute</p>
          </div>
        ) : (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/institute-icon.svg"
              onClick={() => changeIndex(2)}
            />
            <p className={style.textcolor}>Institute</p>
          </div>
        )}

        {index === 3 ? (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/users-white-icon.svg"
              onClick={() => changeIndex(3)}
            />
            <p>Users</p>
          </div>
        ) : (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/users-icon.svg"
              onClick={() => changeIndex(3)}
            />
            <p className={style.textcolor}>Users</p>
          </div>
        )}

        {index === 4 ? (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/payments-dark-icon.svg"
              onClick={() => changeIndex(4)}
            />
            <p>Payments</p>
          </div>
        ) : (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/payments-icon.svg"
              onClick={() => changeIndex(4)}
            />
            <p className={style.textcolor}>Payments</p>
          </div>
        )}

        {index === 5 ? (
          <div className={style.tabItem}>
            <div className={style.trans}>
              <div className={style.earning}>
                <img
                  className={style.esmall}
                  alt="img"
                  src="/images/admin/trans-small.svg"
                  onClick={() => changeIndex(5)}
                />
              </div>
            </div>
            <p>Transactions</p>
          </div>
        ) : (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/trans-icon.svg"
              onClick={() => changeIndex(5)}
            />
            <p className={style.textcolor}>Transactions</p>
          </div>
        )}

        {index === 6 ? (
          <div className={style.tabItem}>
            <div className={style.trans}>
              <div className={style.earning}>
                <img
                  className={style.esmall}
                  alt="img"
                  src="/images/admin/earning-small.svg"
                  onClick={() => changeIndex(6)}
                />
              </div>

              {/* <img
                className={style.earning}
                alt="img"
                src="/images/admin/earning-dark-icon.svg"
                onClick={() => changeIndex(6)}
              /> */}
            </div>
            <p>Earning</p>
          </div>
        ) : (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/earning-icon.svg"
              onClick={() => changeIndex(6)}
            />
            <p className={style.textcolor}>Earning</p>
          </div>
        )}

        {index === 7 ? (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/support-dark-icon.svg"
              onClick={() => changeIndex(7)}
            />
            <p>Support</p>
          </div>
        ) : (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/support-icon.svg"
              onClick={() => changeIndex(7)}
            />
            <p className={style.textcolor}>Support</p>
          </div>
        )}

        {index === 8 ? (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/report-dark-icon.svg"
              onClick={() => changeIndex(8)}
            />
            <p>Miscellaneous</p>
          </div>
        ) : (
          <div className={style.tabItem}>
            <img
              alt="img"
              src="/images/admin/report-icon.svg"
              onClick={() => changeIndex(8)}
            />
            <p className={style.textcolor}>Miscellaneous</p>
          </div>
        )}

        {index === 9 ? (
          <div className={style.tabItem}>
            <div
              className={style.tabItemInnerDark}
              onClick={() => changeIndex(9)}
            >
              <img alt="img" src="/images/admin/posts-dark-icon.svg" />
            </div>
            <p>Posts</p>
          </div>
        ) : (
          <div className={style.tabItem}>
            <div className={style.tabItemInner} onClick={() => changeIndex(9)}>
              <img alt="img" src="/images/admin/posts-icon.svg" />
            </div>
            <p className={style.textcolor}>Posts</p>
          </div>
        )}

        {index === 10 ? (
          <div className={style.tabItem}>
            <div
              className={style.tabItemInnerDark}
              onClick={() => changeIndex(10)}
            >
              <img alt="img" src="/images/admin/reports-dark-icon.svg" />
            </div>
            <p>Reports</p>
          </div>
        ) : (
          <div className={style.tabItem}>
            <div className={style.tabItemInner} onClick={() => changeIndex(10)}>
              <img alt="img" src="/images/admin/reports-icon.svg" />
            </div>
            <p className={style.textcolor}>Reports</p>
          </div>
        )}
      </div>

      <div></div>

      {/* <div className={style.bottom}>
        <Item img="/images/admin/privacy-icon.svg" name="Privacy" />
        <Item img="/images/admin/setting-icon.svg" name="Setting" />
        <Item
          img="/images/admin/logout-icon.svg"
          name="Logout"
          logout={LogoutHandler}
        />
      </div> */}
    </div>
  );
}

export default SideBar;
