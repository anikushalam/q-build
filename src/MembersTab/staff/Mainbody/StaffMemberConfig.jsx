import React, { Suspense, useEffect, useState } from "react";
import CommonStaffMember from "../CommonStaffMember";
import style from "./Mainbody.module.css";
import "./Mainbody.css";
import CommonStaffMemberSidebar from "./Sidebar/CommonStaffMemberSidebar";
import QLoader from "../../../Loader/QLoader";
import { useStaffDesignationDataQuery } from "../../../services/joining/joinApi";
import DesignationMenu from "./Menu/DesignationMenu";
import { useTranslation } from "react-i18next";
const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};
const StaffMemberConfig = ({
  sid,
  index,
  onClickValue,
  carryParentState,
  children,
}) => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState(false);
  const { data: staffDesignationData, refetch: staffDesignationDataRefetch } =
    useStaffDesignationDataQuery(sid, { skip: !sid });

  useEffect(() => {
    if (sid) staffDesignationDataRefetch();
  }, [sid, staffDesignationDataRefetch]);
  return (
    <CommonStaffMember>
      <div className={style.mainbody}>
        <div className={style.sidebar}>
          <CommonStaffMemberSidebar
            staff={staffDesignationData?.staff}
            index={index}
            carryParentState={carryParentState}
          />
        </div>

        <div className={style.rightbody}>
          {index === "0" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>Application Status</h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}

          {index === "1" && (
            <div className={style.formSelect} onClick={() => setMenu(!menu)}>
              <h6>
                {/* {onClickValue?.dTitle} of  */}
                {onClickValue?.dName}
              </h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}
          {index === "2" && (
            <div className={style.formSelect} onClick={() => setMenu(!menu)}>
              <h6>
                {/* {onClickValue?.classHeadTitle} of  */}
                {onClickValue?.classTitle}
                {" - "}
                {`${onClickValue?.batch?.batchName}`}
              </h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}

          {index === "3" && (
            <div className={style.formSelect} onClick={() => setMenu(!menu)}>
              <h6>
                {onClickValue?.subjectName}{" "}
                {/* {onClickValue?.subject_category
                  ? `(${onClickValue?.subject_category})`
                  : ""} */}
                {onClickValue?.selected_batch_query?.batchName ? (
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "12px",
                    }}
                  >
                    {" "}
                    (
                    {onClickValue?.subject_category === "Practical"
                      ? "P:"
                      : "T:"}
                    {onClickValue?.selected_batch_query?.batchName})
                  </span>
                ) : null}{" "}
                {/* {onClickValue?.subjectOptional === "Optional" &&
                  `(${onClickValue?.subjectOptional}) `} */}
                {onClickValue?.class?.classTitle} {" - "}
                {`${onClickValue?.class?.batch?.batchName}`}
              </h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}

          {index === "4" && (
            <div className={style.formSelect} onClick={() => setMenu(!menu)}>
              <h6>Finance Manager</h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}

          {index === "5" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>Admision Admin</h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}

          {index === "6" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>Sports and Arts Head Coach</h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}
          {index === "7" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>{onClickValue?.sportClassName} Coach</h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}
          {(index === "20" ||
            index === "21" ||
            index === "22" ||
            index === "23" ||
            index === "24") && (
            <div
              className={`${style.formSelect} ${style.disabled}`}
              style={{ ...BUTTON_WRAPPER_STYLES, top: "3px" }}
              onClick={() => setMenu(!menu)}
            >
              <h6>{t("application_status")}</h6>
              <img alt="" src="/images/members/downTriangle_disabled.svg" />
            </div>
          )}

          {index === "8" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>{t("librarian")}</h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}

          {index === "15" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>{t("events_seminers")}</h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}
          {index === "16" && (
            // 17 also reserved
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>{t("alumni_portal_mgt")}</h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}

          {index === "25" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>
                {onClickValue?.access_role === "MULTI_APP_ACCESS"
                  ? "Application Manager"
                  : onClickValue?.access_role === "INQUIRY_ACCESS"
                  ? "Enquiries Section"
                  : onClickValue?.access_role === "ALL_FEE_ACCESS"
                  ? "Fee receipt authority"
                  : onClickValue?.access_role === "SCHOLARSHIP_ACCESS"
                  ? "Scholarship Manager"
                  : onClickValue?.access_role === "REFUND_ACCESS"
                  ? "Access Fee Moderator"
                  : onClickValue?.access_role === "PENDING_FEE_ACCESS"
                  ? "Pending Fee Manager"
                  : onClickValue?.access_role === "ONE_TAB_ACCESS"
                  ? onClickValue?.active_tab?.role === "Application"
                    ? "Admission Application Tab"
                    : onClickValue?.active_tab?.role === "Selected"
                    ? "Admission Selected Tab"
                    : onClickValue?.active_tab?.role === "Confirmed"
                    ? "Admission Confirmed Tab"
                    : onClickValue?.active_tab?.role === "Allotted"
                    ? "Admission Allotted Tab"
                    : "Admission Cancelled Tab"
                  : onClickValue?.access_role === "DATA_EXPORT_ACCESS"
                  ? "Admission Data Export Authority"
                  : ""}
              </h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}
          {index === "26" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>
                {onClickValue?.access_role === "STUDENT_PROMOTE_ACCESS"
                  ? "Student Section"
                  : onClickValue?.access_role === "CERTIFICATE_ACCESS"
                  ? "Certificate Authority"
                  : onClickValue?.access_role === "EXAM_MANAGER_ACCESS"
                  ? "Examination Section"
                  : onClickValue?.access_role === "ID_CARD_ACCESS"
                  ? "Id Card Section"
                  : onClickValue?.access_role ===
                    "ACADEMIC_ADMINISTRATOR_ACCESS"
                  ? "Academic Administrator"
                  : onClickValue?.access_role === "LEAVING_AND_TRANSFER_ACCESS"
                  ? "Leave and Transfer Authority"
                  : ""}
              </h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}
          {index === "27" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>
                {onClickValue?.access_role === "CASH_RECEIPT_ACCESS"
                  ? "Cash Receipt Section"
                  : onClickValue?.access_role === "INVENTORY_ACCESS"
                  ? "Inventories Section"
                  : onClickValue?.access_role === "FEE_MASTER_ACCESS"
                  ? "Fees Master Section"
                  : onClickValue?.access_role === "PAYROLL_ACCESS"
                  ? "Payroll Section"
                  : onClickValue?.access_role === "DEPOSIT_ACCESS"
                  ? "Deposit Section"
                  : onClickValue?.access_role === "BANK_ACCOUNT_ACCESS"
                  ? "Bank Account Section"
                  : onClickValue?.access_role === "DATA_EXPORT_ACCESS"
                  ? "Finance Data Export Authority"
                  : ""}
              </h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}
          {index === "28" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>{t("hostel_manager")}</h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}
          {index === "29" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>{t("hostel_warden")}</h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}
          {index === "30" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>{t("transport_manager")}</h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}
          {index === "31" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>
                {onClickValue?.access_role === "ALL_FEE_ACCESS"
                  ? "Hostel Fee receipt authority"
                  : onClickValue?.access_role === "MULTI_APP_ACCESS"
                  ? "Hostel Application Manager"
                  : onClickValue?.access_role === "RENEWAL_UNIT_ACCESS"
                  ? "Renewal Manager"
                  : onClickValue?.access_role === "DEPOSIT_ACCESS"
                  ? "Deposit Moderator"
                  : onClickValue?.access_role === "PENDING_FEE_ACCESS"
                  ? "Hostel Pending Fee Manager"
                  : onClickValue?.access_role === "COMPAINT_ACCESS"
                  ? "Complaint Moderator"
                  : onClickValue?.access_role === "FEE_MASTER_ACCESS"
                  ? "Hostel Fee Structure Moderator"
                  : onClickValue?.access_role ===
                    "RULES_AND_ANNOUNCEMENT_ACCESS"
                  ? "Rules and Announcement Moderator"
                  : onClickValue?.access_role === "INCOME_AND_EXPENSE_ACCESS"
                  ? "Income and Expense Moderator"
                  : onClickValue?.access_role === "ONE_TAB_ACCESS"
                  ? onClickValue?.active_tab?.role === "Application"
                    ? "Hostel Application Tab"
                    : onClickValue?.active_tab?.role === "Selected"
                    ? "Hostel Selected Tab"
                    : onClickValue?.active_tab?.role === "Confirmed"
                    ? "Hostel Confirmed Tab"
                    : onClickValue?.active_tab?.role === "Allotted"
                    ? "Hostel Allotted Tab"
                    : "Hostel Cancelled Tab"
                  : onClickValue?.access_role === "DATA_EXPORT_ACCESS"
                  ? "Hostel Data Export Authority"
                  : ""}
              </h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}
          {index === "32" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>{t("hostel_warden")}</h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}
          {index === "33" && (
            <div
              className={`${style.formSelect} ${style.bottomborder}`}
              onClick={() => setMenu(!menu)}
            >
              <h6>{t("desi_mentor")}</h6>
              <img alt="" src="/images/members/downTriangle.svg" />
            </div>
          )}

          {menu && (
            <div
              style={{
                position: "sticky",
                zIndex: "100",
                top: "125px",
              }}
            >
              <DesignationMenu
                onClose={() => setMenu(false)}
                staffDesignationData={staffDesignationData}
              />
            </div>
          )}
          <Suspense fallback={<QLoader />}>{children}</Suspense>
        </div>
      </div>
    </CommonStaffMember>
  );
};

export default StaffMemberConfig;
