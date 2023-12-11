import React from "react";
import style from "./Sidebar.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../services/BaseUrl";

function Sidebar({
  staffName,
  roll,
  photo,
  photoId,
  institute,
  setIndex,
  index,
}) {
  const { t } = useTranslation();

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarback}>
        <div className={style.sidebarbackflex}>
          <img src="/images/arr-left-white.svg" />
          <h6>{t("go_back")}</h6>
        </div>
      </div>
      <div className={style.sidebarcontent}>
        <div className={style.sidebarheader2}>
          <h6>{institute}</h6>
          <p>{t("teacher")}</p>
        </div>
        <div className={style.sidebarheader}>
          <img
            src={
              photoId !== "1"
                ? `${imageShowUrl}/${photo}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt="Staff Side Avatar"
          />
          <div className={style.text}>
            <div className={style.insName}>
              <h6>{staffName}</h6>
            </div>
            <div className={style.insUserName}>
              <p>
                {t("index")} {roll}
              </p>
            </div>
          </div>
        </div>

        <div className={style.list}>
          <div
            className={
              index === 4
                ? `${style.options} ${style.borderLeft}`
                : style.options
            }
            onClick={() => setIndex("4")}
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
            <p>{t("view_profile")}</p>
          </div>
          <div
            className={
              index === "5"
                ? `${style.options} ${style.borderLeft}`
                : style.options
            }
            onClick={() => setIndex("5")}
          >
            <img
              className={style.img}
              alt="not found"
              src="/images/chat/complainbox.svg"
            />
            <img
              className={style.imgDark}
              alt="not found"
              src="/images/chat/complainbox-dark.svg"
            />
            <p>{t("complent_box")}</p>
          </div>

          <div
            className={
              index === "6"
                ? `${style.options} ${style.borderLeft}`
                : style.options
            }
            onClick={() => setIndex("6")}
          >
            <img
              className={style.img}
              alt="not found"
              src="/images/chat/leaves.svg"
            />
            <img
              className={style.imgDark}
              alt="not found"
              src="/images/chat/leaves-dark.svg"
            />
            <p>{t("leaves")}</p>
          </div>
          <div
            className={
              index === "7"
                ? `${style.options} ${style.borderLeft}`
                : style.options
            }
            onClick={() => setIndex("7")}
          >
            <img
              className={style.img}
              alt="not found"
              src="/images/chat/transfer.svg"
            />
            <img
              className={style.imgDark}
              alt="not found"
              src="/images/chat/transfer-dark.svg"
            />
            <p>{t("transfer")}</p>
          </div>

          <div
            className={
              index === 3
                ? `${style.options} ${style.borderLeft}`
                : style.options
            }
            onClick={() => setIndex("11")}
          >
            <img
              className={style.img}
              alt="not found"
              src="/images/chat/account.svg"
            />
            <img
              className={style.imgDark}
              alt="not found"
              src="/images/chat/account-dark.svg"
            />
            <p>{t("account")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

/* <div
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
            src="/images/chat/idcard.svg"
          />
          <img
            className={style.imgDark}
            alt="not found"
            src="/images/chat/idcard-dark.svg"
          />
          <p>{t("ID Card")}</p>
        </div> */

/* <div
          className={
            clickItem === 7
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => changeItem(7)}
        >
          <img
            className={style.img}
            alt="not found"
            src="/images/chat/prevreport.svg"
          />
          <img
            className={style.imgDark}
            alt="not found"
            src="/images/chat/prevreport-dark.svg"
          />
          <p>{t("Previous Report")}</p>
        </div> */
