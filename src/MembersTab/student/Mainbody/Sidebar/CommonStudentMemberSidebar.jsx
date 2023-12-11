import React from "react";
import style from "./Sidebar.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
const CommonStudentMemberSidebar = ({ student, index }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarback} onClick={() => navigate(-1)}>
        <div className={style.sidebarbackflex}>
          <img src="/images/arr-left-white.svg" />
          <h6>Go Back</h6>
        </div>
      </div>
      <div className={style.sidebarcontent}>
        <div className={style.sidebarheader2}>
          <h6>{student?.institute?.insName ?? ""}</h6>
          <p>{t("student")}</p>
        </div>
        <div className={style.sidebarheader}>
          <img
            src={
              student?.photoId !== "1"
                ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt="Student Side Avatar"
          />
          <div className={style.text}>
            <div className={style.insName}>
              <h6>{`${student?.studentFirstName} ${
                student?.studentMiddleName ?? ""
              } ${student?.studentLastName}`}</h6>
            </div>
            <div className={style.insUserName}>
              {student?.student_bed_number?.bed_number ? (
                <p>
                  {t("bed_number")} {student?.student_bed_number?.bed_number}
                </p>
              ) : (
                <p>
                  {t("roll_no")} {student?.studentROLLNO}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className={style.list}>
          <Link
            to={`/q/${params.username}/member/student?a=profile`}
            state={{
              sid: student?._id,
              is_profile: getQuery.state?.is_profile,
            }}
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
            to={`/q/${params.username}/member/student?a=complaint`}
            state={{ sid: student?._id }}
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
            to={`/q/${params.username}/member/student?a=leave`}
            state={{ sid: student?._id }}
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
            to={`/q/${params.username}/member/student?a=certificate`}
            state={{
              sid: student?._id,
              instituteId: student?.institute?._id,
            }}
          >
            <div
              className={
                index === "26"
                  ? `${style.options} ${style.borderLeft}`
                  : style.options
              }
            >
              <img
                className={style.img}
                alt="not found"
                src="/images/member_tab/student/student-certificate-request-icon.svg"
              />
              <img
                className={style.imgDark}
                alt="not found"
                src="/images/member_tab/student/student-certificate-request-icon.svg"
              />
              <p>{t("certificate_request")}</p>
            </div>
          </Link>
          <Link
            to={`/q/${params.username}/member/student?a=transfer`}
            state={{ sid: student?._id }}
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
            to={`/q/${params.username}/member/student?a=report`}
            state={{ sid: student?._id }}
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
                src="/images/chat/prevreport.svg"
              />
              <img
                className={style.imgDark}
                alt="not found"
                src="/images/chat/prevreport-dark.svg"
              />
              <p>{t("Previous Report")}</p>
            </div>
          </Link>
          <Link
            to={`/q/${params.username}/member/student?a=switch`}
            state={{ sid: student?._id }}
          >
            <div
              className={
                index === "25"
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

export default CommonStudentMemberSidebar;
