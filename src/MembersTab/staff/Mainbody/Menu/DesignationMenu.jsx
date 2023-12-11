import React from "react";
import { useDispatch } from "react-redux";
import style from "../Mainbody.module.css";
import DepartmentDropdown from "../dropdown/DepartmentDropdown";
import ClassDropdown from "../dropdown/ClassDropdown";
import SubjectDropdown from "../dropdown/SubjectDropdown";
import { admissionChangeAction } from "../../../../redux/store/admission-slice";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

const MODAL_STYLES = {
  position: "absolute",
  left: "14.5vw",
  // top: "3.2vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
};
function DesignationMenu({ onClose, staffDesignationData }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const params = useParams();

  // const onFinance = (fid) => {
  //   dispatch(
  //     financeChangeAction.financeQuery({
  //       fid: fid,
  //       insId: `${staffDesignationData?.staff?.institute?._id}`,
  //     })
  //   );
  //   onClose();
  // };

  const onAdmission = (aid) => {
    dispatch(
      admissionChangeAction.admissionQuery({
        aid: aid,
      })
    );
    onClose();
  };
  // console.info(staffDesignationData?.staff?.sportDepartment);
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div>
        <div className={style.menu} style={MODAL_STYLES}>
          {staffDesignationData?.staff?.staffDepartment?.map((department) => (
            <DepartmentDropdown
              parentStyle={style.menuItem}
              department={department}
              sid={staffDesignationData?.staff?._id}
              onClose={onClose}
              key={department?._id}
            />
          ))}
          {staffDesignationData?.staff?.staffClass?.map((classes) => (
            <ClassDropdown
              parentStyle={style.menuItem}
              classes={classes}
              sid={staffDesignationData?.staff?._id}
              onClose={onClose}
              key={classes?._id}
            />
          ))}
          {staffDesignationData?.staff?.staffSubject?.map((subject) => (
            <SubjectDropdown
              parentStyle={style.menuItem}
              subject={subject}
              sid={staffDesignationData?.staff?._id}
              onClose={onClose}
              key={subject?._id}
            />
          ))}
          {staffDesignationData?.staff?.financeDepartment?.map((fin) => (
            <Link
              to={`/q/${params.username}/member/staff/finance`}
              state={{
                fid: fin?._id,
                onClickValue: fin?._id,
                sid: staffDesignationData?.staff?._id,
                insId: staffDesignationData?.staff?.institute?._id,
              }}
              key={fin?._id}
              // onClick={() => onFinance(fin?._id)}
            >
              <div className={style.menuItem}>
                <img
                  alt="finance Head"
                  src="/images/members/fManager-icon.svg"
                />
                <h6>{t("finace_manager")}</h6>
              </div>
            </Link>
          ))}
          {staffDesignationData?.staff?.financeModeratorDepartment?.map(
            (admin) => (
              <Link
                to={`/q/${params.username}/member/staff/finance`}
                state={{
                  fid: admin?.finance,
                  onClickValue: admin,
                  sid: staffDesignationData?.staff?._id,
                  role: admin?.access_role ?? "MODERATOR",
                  roleId: admin?._id,
                  insId: staffDesignationData?.staff?.institute?._id,
                }}
                key={admin?._id}
              >
                <div className={style.menuItem}>
                  <img alt="" src="/images/members/fManager-icon.svg" />
                  <h6>
                    {admin?.access_role === "CASH_RECEIPT_ACCESS"
                      ? "Cash Receipt Section"
                      : admin?.access_role === "INVENTORY_ACCESS"
                      ? "Inventories Section"
                      : admin?.access_role === "FEE_MASTER_ACCESS"
                      ? "Fees Master Section"
                      : admin?.access_role === "PAYROLL_ACCESS"
                      ? "Payroll Section"
                      : admin?.access_role === "DEPOSIT_ACCESS"
                      ? "Deposit Section"
                      : admin?.access_role === "BANK_ACCOUNT_ACCESS"
                      ? "Bank Account Section"
                      : admin?.access_role === "DATA_EXPORT_ACCESS"
                      ? "Finance Data Export Authority"
                      : ""}
                  </h6>
                </div>
              </Link>
            )
          )}

          {staffDesignationData?.staff?.admissionDepartment?.map((admin) => (
            <Link
              to={`/q/${params.username}/member/admission`}
              state={{
                onClickValue: admin?._id,
                sid: staffDesignationData?.staff?._id,
              }}
              key={admin?._id}
              onClick={() => onAdmission(admin?._id)}
            >
              <div className={style.menuItem}>
                <img alt="" src="/images/members/admin-icon.svg" />
                <h6> {t("admission_admin")}</h6>
              </div>
            </Link>
          ))}
          {staffDesignationData?.staff?.admissionModeratorDepartment?.map(
            (admin) => (
              <Link
                to={`/q/${params.username}/member/admission`}
                state={{
                  onClickValue: admin,
                  sid: staffDesignationData?.staff?._id,
                  role: "MODERATOR",
                }}
                key={admin?._id}
                onClick={() => onAdmission(admin?.admission)}
              >
                <div className={style.menuItem}>
                  <img alt="" src="/images/members/admin-icon.svg" />
                  <h6>
                    {admin?.access_role === "MULTI_APP_ACCESS"
                      ? "Application Manager"
                      : admin?.access_role === "INQUIRY_ACCESS"
                      ? "Enquiries Section"
                      : admin?.access_role === "ALL_FEE_ACCESS"
                      ? "Fee Receipt Authority"
                      : admin?.access_role === "SCHOLARSHIP_ACCESS"
                      ? "Scholarship Manager"
                      : admin?.access_role === "REFUND_ACCESS"
                      ? "Excess Fees Refund"
                      : admin?.access_role === "PENDING_FEE_ACCESS"
                      ? "Pending Fee Manager"
                      : admin?.access_role === "ONE_TAB_ACCESS"
                      ? admin?.active_tab?.role === "Application"
                        ? "Admission Application Tab"
                        : admin?.active_tab?.role === "Selected"
                        ? "Admission Selected Tab"
                        : admin?.active_tab?.role === "Confirmed"
                        ? "Admission Confirmed Tab"
                        : admin?.active_tab?.role === "Allotted"
                        ? "Admission Allotted Tab"
                        : "Admission Cancelled Tab"
                      : admin?.access_role === "DATA_EXPORT_ACCESS"
                      ? "Admission Data Export Authority"
                      : ""}
                  </h6>
                </div>
              </Link>
            )
          )}

          {staffDesignationData?.staff?.sportDepartment?.map((sdept) => (
            <Link
              to={`/q/${params.username}/member/sport/department`}
              state={{
                onClickValue: sdept?._id,
                sid: staffDesignationData?.staff?._id,
              }}
              key={sdept?._id}
              onClick={onClose}
            >
              <div className={style.menuItem}>
                <img alt="" src="/images/members/sports-class-icon.svg" />
                <h6> {t("sport_art_head_coach")}</h6>
              </div>
            </Link>
          ))}

          {staffDesignationData?.staff?.staffSportClass?.map(
            (sclass, index) => (
              <Link
                to={`/q/${params.username}/member/sport/class/${sclass?.sportClassName}`}
                state={{
                  onClickValue: sclass,
                  sid: staffDesignationData?.staff?._id,
                }}
                key={sclass?._id}
                onClick={onClose}
              >
                <div className={style.menuItem} key={index}>
                  <img alt="" src="/images/members/sports-class-icon.svg" />
                  <h6>{sclass?.sportClassName} Coach</h6>
                </div>
              </Link>
            )
          )}
          {staffDesignationData?.staff?.library?.map((library) => (
            <Link
              to={`/q/${params.username}/member/library`}
              state={{
                sid: staffDesignationData?.staff?._id,
                onClickValue: library,
              }}
              key={library?._id}
            >
              <div className={style.menuItem}>
                <img alt="" src="/images/members/librarian-icon.svg" />
                <h6>{t("librarian")}</h6>
              </div>
            </Link>
          ))}
          {/* <Link
          to={`/q/${params.username}/member/events`}
          state={{
            sid: staffDesignationData?.staff?._id,
            insId: staffDesignationData?.staff?.institute?._id,
            eventDeptId:
              staffDesignationData?.staff?.eventManagerDepartment?.[0],
          }}
        >
          <div className={style.menuItem}>
            <img
              className={style.menuItemImg}
              alt=""
              src="/images/events/event-icon.svg"
            />
            <h6>{t("events_seminers")}</h6>
          </div>
        </Link> */}
          {staffDesignationData?.staff?.eventManagerDepartment?.length > 0 && (
            <Link
              to={`/q/${params.username}/member/events`}
              state={{
                sid: staffDesignationData?.staff?._id,
                insId: staffDesignationData?.staff?.institute?._id,
                eventDeptId:
                  staffDesignationData?.staff?.eventManagerDepartment[0],
              }}
            >
              <div className={style.menuItem}>
                <img
                  className={style.menuItemImg}
                  alt=""
                  src="/images/events/event-icon.svg"
                />
                <h6>{t("events_seminers")}</h6>
              </div>
            </Link>
          )}

          {staffDesignationData?.staff?.aluminiDepartment?.length > 0 && (
            <Link
              to={`/q/${params.username}/member/alumni`}
              state={{
                sid: staffDesignationData?.staff?._id,
                insId: staffDesignationData?.staff?.institute?._id,
                alumniId:
                  staffDesignationData?.staff?.aluminiDepartment[0]?._id,
              }}
            >
              <div className={style.menuItem}>
                <img
                  className={style.menuItemImgg}
                  alt=""
                  src="/images/alumni/alumni-menu-icon.svg"
                />
                <h6>{t("alumni_portal_mgt")}</h6>
              </div>
            </Link>
          )}

          {staffDesignationData?.staff?.instituteModeratorDepartment?.map(
            (admin) =>
              admin?.access_role === "SOCIAL_MEDIA_ACCESS" ? null : (
                <Link
                  to={`/q/${params.username}/member/${
                    admin?.access_role === "STUDENT_PROMOTE_ACCESS"
                      ? "promote"
                      : admin?.access_role === "CERTIFICATE_ACCESS"
                      ? "certificate"
                      : admin?.access_role === "ID_CARD_ACCESS"
                      ? "idcard"
                      : admin?.access_role === "ACADEMIC_ADMINISTRATOR_ACCESS"
                      ? "administrator"
                      : admin?.access_role === "LEAVING_AND_TRANSFER_ACCESS"
                      ? "leavestransfer"
                      : "exam"
                  }`}
                  state={{
                    onClickValue: admin,
                    sid: staffDesignationData?.staff?._id,
                    role: "MODERATOR",
                  }}
                  key={admin?._id}
                >
                  <div className={style.menuItem}>
                    <img alt="" src="/images/members/admin-icon.svg" />
                    <h6>
                      {admin?.access_role === "STUDENT_PROMOTE_ACCESS"
                        ? "Student Section"
                        : admin?.access_role === "CERTIFICATE_ACCESS"
                        ? "Certificate Authority"
                        : admin?.access_role === "EXAM_MANAGER_ACCESS"
                        ? "Examination Section"
                        : admin?.access_role === "ID_CARD_ACCESS"
                        ? "Id Card Section"
                        : admin?.access_role === "ACADEMIC_ADMINISTRATOR_ACCESS"
                        ? "Academic Administrator"
                        : admin?.access_role === "LEAVING_AND_TRANSFER_ACCESS"
                        ? "Leave and Transfer Authority"
                        : ""}
                    </h6>
                  </div>
                </Link>
              )
          )}
          {staffDesignationData?.staff?.hostelDepartment?.map((hostel) => (
            <Link
              to={`/q/${params.username}/member/hostel`}
              state={{
                onClickValue: hostel,
                sid: staffDesignationData?.staff?._id,
                // role: "MODERATOR",
              }}
              key={hostel?._id}
            >
              <div className={style.menuItem}>
                <img alt="" src="/images/members/admin-icon.svg" />
                <h6>{t("hostel_manager")}</h6>
              </div>
            </Link>
          ))}
          {staffDesignationData?.staff?.hostelUnitDepartment?.map((hostel) => (
            <Link
              to={`/q/${params.username}/member/hostel/warden`}
              state={{
                onClickValue: hostel,
                sid: staffDesignationData?.staff?._id,
                huid: hostel,
              }}
              key={hostel?._id}
            >
              <div className={style.menuItem}>
                <img alt="" src="/images/members/admin-icon.svg" />
                <h6>{t("hostel_warden")}</h6>
              </div>
            </Link>
          ))}
          {staffDesignationData?.staff?.hostelModeratorDepartment?.map(
            (admin) => (
              <Link
                to={`/q/${params.username}/member/hostel`}
                state={{
                  onClickValue: admin,
                  sid: staffDesignationData?.staff?._id,
                  role: "MODERATOR",
                }}
                key={admin?._id}
              >
                <div className={style.menuItem}>
                  <img alt="" src="/images/members/admin-icon.svg" />
                  <h6>
                    {admin.access_role === "ALL_FEE_ACCESS"
                      ? "Hostel Fee receipt authority"
                      : admin.access_role === "MULTI_APP_ACCESS"
                      ? "Hostel Application Manager"
                      : admin.access_role === "RENEWAL_UNIT_ACCESS"
                      ? "Renewal Manager"
                      : admin.access_role === "DEPOSIT_ACCESS"
                      ? "Deposit Moderator"
                      : admin.access_role === "PENDING_FEE_ACCESS"
                      ? "Hostel Pending Fee Manager"
                      : admin.access_role === "COMPAINT_ACCESS"
                      ? "Complaint Moderator"
                      : admin.access_role === "FEE_MASTER_ACCESS"
                      ? "Hostel Fee Structure Moderator"
                      : admin.access_role === "RULES_AND_ANNOUNCEMENT_ACCESS"
                      ? "Rules and Announcement Moderator"
                      : admin.access_role === "INCOME_AND_EXPENSE_ACCESS"
                      ? "Income and Expense Moderator"
                      : admin.access_role === "ONE_TAB_ACCESS"
                      ? admin.active_tab?.role === "Application"
                        ? "Hostel Application Tab"
                        : admin.active_tab?.role === "Selected"
                        ? "Hostel Selected Tab"
                        : admin.active_tab?.role === "Confirmed"
                        ? "Hostel Confirmed Tab"
                        : admin.active_tab?.role === "Allotted"
                        ? "Hostel Allotted Tab"
                        : "Hostel Cancelled Tab"
                      : admin?.access_role === "DATA_EXPORT_ACCESS"
                      ? "Hostel Data Export Authority"
                      : ""}
                  </h6>
                </div>
              </Link>
            )
          )}
          {staffDesignationData?.staff?.transportDepartment?.map(
            (transport) => (
              <Link
                to={`/q/${params.username}/member/transport`}
                state={{
                  onClickValue: transport,
                  sid: staffDesignationData?.staff?._id,
                  // role: "MODERATOR",
                }}
                key={transport?._id}
              >
                <div className={style.menuItem}>
                  <img alt="" src="/images/members/admin-icon.svg" />
                  <h6>{t("transport_manager")}</h6>
                </div>
              </Link>
            )
          )}
          {staffDesignationData?.staff?.mentorDepartment?.map((mentor) => (
            <Link
              to={`/q/${params.username}/member/mentor`}
              state={{
                onClickValue: mentor,
                sid: staffDesignationData?.staff?._id,
              }}
              key={mentor}
            >
              <div className={style.menuItem}>
                <img alt="" src="/images/members/admin-icon.svg" />
                <h6>{t("desi_mentor")}</h6>
              </div>
            </Link>
          ))}
          <Link
            to={`/q/${params.username}/member/status`}
            state={{
              sid: staffDesignationData?.staff?._id,
            }}
            onClick={onClose}
            key={staffDesignationData?.staff?._id}
          >
            <div className={style.menuItem}>
              <img
                className={style.menuItemimg}
                alt=""
                src="/images/members/aStatus-icon.svg"
              />
              <h6>{t("application_status")}</h6>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DesignationMenu;
