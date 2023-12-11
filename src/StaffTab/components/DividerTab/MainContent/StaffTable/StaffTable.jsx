import React from "react";
import style from "./StaffTable.module.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useInView } from "react-intersection-observer";
import moment from "moment";
import { useTranslation } from "react-i18next";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// const showOriginalDesigation = (val) => {
//   if (val === "Finance Manager Moderator - CASH_RECEIPT_ACCESS") {
//     return "Cash Receipt Section";
//   } else if (val === "Finance Manager Moderator - INVENTORY_ACCESS") {
//     return "Inventories Section";
//   } else if (val === "Finance Manager Moderator - FEE_MASTER_ACCESS") {
//     return "Fees Master Section";
//   } else if (val === "Finance Manager Moderator - PAYROLL_ACCESS") {
//     return "Payroll Section";
//   } else if (val === "Finance Manager Moderator - DEPOSIT_ACCESS") {
//     return "Deposit Section";
//   } else if (val === "Finance Manager Moderator - BANK_ACCOUNT_ACCESS") {
//     return "Bank Account Section";
//   } else if (val === "Admission Admin Moderator - MULTI_APP_ACCESS") {
//     return "Application Manager";
//   } else if (val === "Admission Admin Moderator - INQUIRY_ACCESS") {
//     return "Enquiries Section";
//   } else if (val === "Admission Admin Moderator - ALL_FEE_ACCESS") {
//     return "Fee Receipt Authority";
//   } else if (val === "Admission Admin Moderator - SCHOLARSHIP_ACCESS") {
//     return "Scholarship Manager";
//   } else if (val === "Admission Admin Moderator - REFUND_ACCESS") {
//     return "Excess Fees Refund";
//   } else if (val === "Admission Admin Moderator - PENDING_FEE_ACCESS") {
//     return "Pending Fee Manager";
//   } else if (val === "Institute Admin Moderator - STUDENT_PROMOTE_ACCESS") {
//     return "Student Section";
//   } else if (val === "Institute Admin Moderator - CERTIFICATE_ACCESS") {
//     return "Certificate Authority";
//   } else if (val === "Institute Admin Moderator - EXAM_MANAGER_ACCESS") {
//     return "Examination Section";
//   } else {
//     return val;
//   }
// };

export default function StaffTable({
  setStaffFull,
  setStaffHalf,
  allStaff,
  setStaffId,
  onPageChange,
  showingDataLoading,
  staff_alias,
}) {
  // for the infinit scroll
  const [ref, inView] = useInView();
  const params = useParams();
  React.useEffect(() => {
    if (inView) onPageChange();
    //eslint-disabled-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const onStaffView = (id) => {
    setStaffId(id);
    setStaffHalf(true);
    setStaffFull(false);
  };
  const { t } = useTranslation();
  return (
    <>
      <div className={style.header}>
        <p className={style.index}>{staff_alias ?? t("index_no")}</p>
        <p className={style.name}>{t("name")}</p>
        <p className={style.contact}>{t("contact_number")}</p>
        <p className={style.joinigDate}>{t("join_date")}</p>
      </div>
      <div className={style.container}>
        {allStaff?.map((row, index) =>
          allStaff?.length === index + 1 ? (
            <div
              key={row.staffROLLNO}
              ref={ref}
              onClick={(e) => {
                e.stopPropagation();
                onStaffView(row._id);
              }}
            >
              <div className={style.oneRow}>
                <div className={`${style.oneRowIndex} ${style.oneRowwIndex}`}>
                  <p className={style.oneRowIndexValue}>{row.staffROLLNO}</p>
                </div>
                <div className={style.oneRowName}>
                  <div className={style.oneRowNameImage}>
                    <img
                      src={
                        row?.photoId !== "1"
                          ? `${imageShowUrl}/${row?.staffProfilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className={style.oneRowNameText}>{`${
                      row.staffFirstName
                    } ${row.staffMiddleName ? row.staffMiddleName : ""} ${
                      row.staffLastName
                    }`}</p>
                    <p
                      className={style.oneRowNamePlaceholder}
                      style={{
                        color: "#0000ff",
                        cursor: "pointer",
                      }}
                    >
                      <Link
                        to={`/q/${params.username}/staff?a=designation`}
                        state={{
                          name: `${row.staffFirstName} ${
                            row.staffMiddleName ? row.staffMiddleName : ""
                          } ${row.staffLastName}`,
                          desiCount: row?.staffDesignationCount || 0,
                          profilePhoto: row?.staffProfilePhoto
                            ? `${imageShowUrl}/${row?.staffProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg",
                          sid: row?._id,
                          rollNumber: row.staffROLLNO,
                        }}
                      >
                        {t("designations")}
                        {": "}
                        {row?.staffDesignationCount || 0}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className={style.oneRowContact}>
                  <div className={style.oneRowContactEmailIcon}>
                    <img
                      src="/images/user_signup/gender.svg"
                      alt="gender icon"
                    />
                    <p className={style.oneRowContactEmail}>
                      {row?.staffGender}
                    </p>
                  </div>
                  <div className={style.oneRowContactEmailIcon}>
                    <img src="/images/phone-white.svg" alt="" />
                    <p className={style.oneRowContactNumber}>
                      {row?.user?.userPhoneNumber
                        ? row?.user?.userPhoneNumber
                        : row.user.userEmail ?? ""}
                    </p>
                  </div>
                </div>
                <div className={style.oneRowDate}>
                  <p className={style.oneRowDateText}>
                    {moment(row.staffJoinDate).format("DD-MM-yyyy")}
                  </p>
                </div>
              </div>
              <p className={style.oneRowBottomBorder}></p>
            </div>
          ) : (
            <div
              key={row.staffROLLNO}
              onClick={(e) => {
                e.stopPropagation();
                onStaffView(row._id);
              }}
            >
              <div className={style.oneRow}>
                <div className={`${style.oneRowIndex} ${style.oneRowwIndex}`}>
                  <p className={style.oneRowIndexValue}>{row.staffROLLNO}</p>
                </div>
                <div className={style.oneRowName}>
                  <div className={style.oneRowNameImage}>
                    <img
                      src={
                        row?.photoId !== "1"
                          ? `${imageShowUrl}/${row?.staffProfilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className={style.oneRowNameText}>{`${
                      row.staffFirstName
                    } ${row.staffMiddleName ? row.staffMiddleName : ""} ${
                      row.staffLastName
                    }`}</p>
                    <p
                      className={style.oneRowNamePlaceholder}
                      style={{
                        color: "#0000ff",
                        cursor: "pointer",
                      }}
                    >
                      <Link
                        to={`/q/${params.username}/staff?a=designation`}
                        state={{
                          name: `${row.staffFirstName} ${
                            row.staffMiddleName ? row.staffMiddleName : ""
                          } ${row.staffLastName}`,
                          desiCount: row?.staffDesignationCount || 0,
                          profilePhoto: row?.staffProfilePhoto
                            ? `${imageShowUrl}/${row?.staffProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg",
                          sid: row?._id,
                          rollNumber: row.staffROLLNO,
                        }}
                      >
                        {t("designations")} {": "}
                        {row?.staffDesignationCount || 0}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className={style.oneRowContact}>
                  <div className={style.oneRowContactEmailIcon}>
                    <img src="/images/user_signup/gender.svg" alt="" />

                    <p className={style.oneRowContactEmail}>
                      {row?.staffGender}
                    </p>
                  </div>
                  <div className={style.oneRowContactEmailIcon}>
                    <img src="/images/phone-white.svg" alt="" />
                    <p className={style.oneRowContactNumber}>
                      {row?.user?.userPhoneNumber}
                    </p>
                  </div>
                </div>
                <div className={style.oneRowDate}>
                  <p className={style.oneRowDateText}>
                    {" "}
                    {moment(row.staffJoinDate).format("DD-MM-yyyy")}
                  </p>
                </div>
              </div>
              <p className={style.oneRowBottomBorder}></p>
            </div>
          )
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </>
  );
}
