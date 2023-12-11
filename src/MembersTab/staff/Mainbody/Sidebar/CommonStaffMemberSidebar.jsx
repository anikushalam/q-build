import React from "react";
import style from "./Sidebar.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { Link, useParams, useNavigate } from "react-router-dom";
const CommonStaffMemberSidebar = ({ staff, index }) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();

  const onBackWithArrow = () => {
    navigate(-1);
  };
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarback}>
        <div
          className={style.sidebarbackflex}
          onClick={onBackWithArrow}
          title="Go back previous"
        >
          <img src="/images/arr-left-white.svg" />
          <h6>Go Back</h6>
        </div>
      </div>
      <div className={style.sidebarcontent}>
        <div className={style.sidebarheader2}>
          <h6>{staff?.institute?.insName ?? ""}</h6>
          <p>{t("staff")}</p>
        </div>
        <div className={style.sidebarheader}>
          <img
            src={
              staff?.staffProfilePhoto
                ? `${imageShowUrl}/${staff?.staffProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt="Staff Side Avatar"
          />
          <div className={style.text}>
            <div className={style.insName}>
              <h6>{`${staff?.staffFirstName} ${staff?.staffMiddleName ?? ""} ${
                staff?.staffLastName
              }`}</h6>
            </div>
            <div className={style.insUserName}>
              <p>
                {t("index")} {staff?.staffROLLNO}
              </p>
            </div>
          </div>
        </div>

        <div className={style.list}>
          <Link
            to={`/q/${params.username}/member?a=profile`}
            state={{ sid: staff?._id }}
          >
            <div
              className={
                index === "20"
                  ? `${style.options} ${style.borderLeft}`
                  : style.options
              }
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
          </Link>
          <Link
            to={`/q/${params.username}/member?a=complaint`}
            state={{ sid: staff?._id }}
          >
            <div
              className={
                index === "21"
                  ? `${style.options} ${style.borderLeft}`
                  : style.options
              }
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
          </Link>
          <Link
            to={`/q/${params.username}/member?a=leave`}
            state={{ sid: staff?._id }}
          >
            <div
              className={
                index === "22"
                  ? `${style.options} ${style.borderLeft}`
                  : style.options
              }
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
          </Link>
          <Link
            to={`/q/${params.username}/member?a=transfer`}
            state={{ sid: staff?._id }}
          >
            <div
              className={
                index === "23"
                  ? `${style.options} ${style.borderLeft}`
                  : style.options
              }
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
          </Link>
          <Link
            to={`/q/${params.username}/member?a=switch`}
            state={{ sid: staff?._id }}
          >
            <div
              className={
                index === "24"
                  ? `${style.options} ${style.borderLeft}`
                  : style.options
              }
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommonStaffMemberSidebar;
