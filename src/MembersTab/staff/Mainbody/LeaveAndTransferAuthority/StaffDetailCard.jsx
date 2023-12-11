import React from "react";
import { Link, useParams } from "react-router-dom";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { useTranslation } from "react-i18next";
import style from "./LeavesAndTransfer.module.css";
const StaffDetailCard = ({
  staff,
  instituteId,
  carryParentState,
  staffAlias,
}) => {
  const { t } = useTranslation();
  const params = useParams();

  return (
    <>
      <div className={style.staff_card}>
        <div className={style.staff_card_info}>
          <img
            src={
              staff?.staffProfilePhoto
                ? `${imageShowUrl}/${staff?.staffProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            loading="lazy"
            alt="avatar"
          />

          <div>
            <h6 className={style.staff_card_info_inner}>
              {`${staff?.staffFirstName ?? ""} ${
                staff?.staffMiddleName ?? ""
              } ${staff?.staffLastName ?? ""}`}
            </h6>
            <div className={style.staff_card_info_inner_index}>
              {staffAlias ? staffAlias : t("index")}
              {": "}
              {staff?.staffROLLNO ?? ""}
            </div>
          </div>
        </div>
        <div className={style.staff_card_overview}>
          <Link
            to={`/q/${params.username}/member/leavestransfer?a=overview`}
            state={{
              ...carryParentState,
              staffId: staff?._id,
              instituteId: instituteId,
              isCategory: "Casual Leave",
              staffName: `${staff?.staffFirstName ?? ""} ${
                staff?.staffMiddleName ?? ""
              } ${staff?.staffLastName ?? ""}`,
            }}
          >
            <div className={style.staff_card_overview_inner}>
              <h6 className={style.staff_card_overview_inner_label}>
                {t("casual_leave")}
              </h6>
              <h6 className={style.staff_card_overview_inner_text}>
                {staff?.casual_leave ?? 0}
              </h6>
            </div>
          </Link>
          <Link
            to={`/q/${params.username}/member/leavestransfer?a=overview`}
            state={{
              ...carryParentState,
              staffId: staff?._id,
              instituteId: instituteId,
              isCategory: "Medical Leave",
              staffName: `${staff?.staffFirstName ?? ""} ${
                staff?.staffMiddleName ?? ""
              } ${staff?.staffLastName ?? ""}`,
            }}
          >
            <div className={style.staff_card_overview_inner}>
              <h6 className={style.staff_card_overview_inner_label}>
                {t("medical_leave")}
              </h6>
              <h6 className={style.staff_card_overview_inner_text}>
                {staff?.medical_leave ?? 0}
              </h6>
            </div>
          </Link>
          <Link
            to={`/q/${params.username}/member/leavestransfer?a=overview`}
            state={{
              ...carryParentState,
              staffId: staff?._id,
              instituteId: instituteId,
              isCategory: "Sick Leave",
              staffName: `${staff?.staffFirstName ?? ""} ${
                staff?.staffMiddleName ?? ""
              } ${staff?.staffLastName ?? ""}`,
            }}
          >
            <div className={style.staff_card_overview_inner}>
              <h6 className={style.staff_card_overview_inner_label}>
                {t("sick_leave")}
              </h6>
              <h6 className={style.staff_card_overview_inner_text}>
                {staff?.sick_leave ?? 0}
              </h6>
            </div>
          </Link>
          <Link
            to={`/q/${params.username}/member/leavestransfer?a=overview`}
            state={{
              ...carryParentState,
              staffId: staff?._id,
              instituteId: instituteId,
              isCategory: "Compensation Off Leave",
              staffName: `${staff?.staffFirstName ?? ""} ${
                staff?.staffMiddleName ?? ""
              } ${staff?.staffLastName ?? ""}`,
            }}
          >
            <div className={style.staff_card_overview_inner}>
              <h6 className={style.staff_card_overview_inner_label}>
                {t("c_off_leave")}
              </h6>
              <h6 className={style.staff_card_overview_inner_text}>
                {staff?.c_off_leave ?? ""}
              </h6>
            </div>
          </Link>
          <Link
            to={`/q/${params.username}/member/leavestransfer?a=overview`}
            state={{
              ...carryParentState,
              staffId: staff?._id,
              instituteId: instituteId,
              isCategory: "On Duty Leave",
              staffName: `${staff?.staffFirstName ?? ""} ${
                staff?.staffMiddleName ?? ""
              } ${staff?.staffLastName ?? ""}`,
            }}
          >
            <div className={style.staff_card_overview_inner}>
              <h6 className={style.staff_card_overview_inner_label}>
                {t("odl")}
              </h6>
              <h6 className={style.staff_card_overview_inner_text}>
                {staff?.off_duty_leave ?? 0}
              </h6>
            </div>
          </Link>
          <Link
            to={`/q/${params.username}/member/leavestransfer?a=overview`}
            state={{
              ...carryParentState,
              staffId: staff?._id,
              instituteId: instituteId,
              isCategory: "Leave Without Pay",
              staffName: `${staff?.staffFirstName ?? ""} ${
                staff?.staffMiddleName ?? ""
              } ${staff?.staffLastName ?? ""}`,
            }}
          >
            <div className={style.staff_card_overview_inner}>
              <h6 className={style.staff_card_overview_inner_label}>
                {t("lwp")}
              </h6>
              <h6 className={style.staff_card_overview_inner_text}>
                {staff?.lwp_leave ?? 0}
              </h6>
            </div>
          </Link>
        </div>
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
    </>
  );
};

export default StaffDetailCard;
