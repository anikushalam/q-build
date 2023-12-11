import { memo } from "react";
import style from "../StaffMemberConfig.module.css";
import DesignationTabWrapper from "@/Ui/Tab/Designation/DesignationTabWrapper";
import DesignationTabCard from "@/Ui/Tab/Designation/DesignationTabCard";
import {
  assestsFeedUrl,
  assestsUserFinanceUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import {
  useStaffAllDesignationList,
  useUserActivatedMember,
} from "@/Hooks/ApiHooks/UserMember/user-member-api";
import { useLocation } from "react-router-dom";
import UserDrawer from "@/Feed/User/UserDrawer";
import { useTranslation } from "react-i18next";
import UserMemberGo from "@/Layout/UserMemberTab/UserMemberGo";
import UserMemberDesignationWrapper from "@/Layout/UserMemberTab/UserMemberDesignationWrapper";
import UserMemberProfileWrapper from "@/Layout/UserMemberTab/UserMemberProfileWrapper";
import { useSelector } from "react-redux";
import Loading from "@/Loader/Loading";
import { imageShowUrl } from "@/Services/UrlConfig/BaseUrl";

const DesignationConfig = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const uid = useSelector((state) => state.baseChange.id);
  const { userActivatedMember, userActivatedMemberLoading } =
    useUserActivatedMember({
      data: {
        uid: uid,
        role: "",
      },
      skip: !uid,
    });

  const { staffAllDesignationList, staffAllDesignationListLoading } =
    useStaffAllDesignationList({
      sid: getQuery.state?.sid ?? userActivatedMember?.role?.activeRole,
      // sid: "644a1fc1ec95c32bd6276b86",
      skip: !getQuery.state?.sid
        ? !userActivatedMember?.role?.activeRole
        : !getQuery.state?.sid,
    });

  // console.info("klsjhfkje", staffAllDesignationList);

  return (
    <div className={style.smc}>
      <div className={style.smc_drawer}>
        <UserDrawer activeTab="member" />
      </div>
      <div className={style.smc_content_main}>
        <div
          className={style.smc_content}
          style={{
            marginBottom: "1rem",
          }}
        >
          <UserMemberGo />
          <UserMemberDesignationWrapper>
            <img
              src={`${assestsUserFinanceUrl}/manager.svg`}
              alt="finance icon"
            />
            <h6>{t("select_designation")}</h6>
          </UserMemberDesignationWrapper>

          <UserMemberProfileWrapper>
            <img
              src={
                staffAllDesignationList?.staffProfilePhoto
                  ? `${imageShowUrl}/${staffAllDesignationList?.staffProfilePhoto}`
                  : `${assestsFeedUrl}/feed-user-avatar.svg`
              }
              alt="finance icon"
            />
            <h6>{t("profile_leaves_and_more")}</h6>
          </UserMemberProfileWrapper>
        </div>
        <DesignationTabWrapper>
          {userActivatedMemberLoading && <Loading />}
          {staffAllDesignationList?.staffDepartment?.map((finance) => (
            <DesignationTabCard
              key={finance?._id}
              iconUrl={`${assestsFeedUrl}/department.svg`}
              label={finance?.dName}
              requiredData={{
                onClickValue: finance,
                sid: staffAllDesignationList?._id,
              }}
              pathUrl="department"
            />
          ))}

          {staffAllDesignationList?.staffClass?.map((finance) => (
            <DesignationTabCard
              key={finance?._id}
              iconUrl={`${assestsFeedUrl}/class-teacher.svg`}
              label={`${finance?.classTitle} - ${finance?.batch?.batchName}`}
              requiredData={{
                onClickValue: finance,
                sid: staffAllDesignationList?._id,
              }}
              pathUrl="class"
            />
          ))}
          {staffAllDesignationList?.staffSubject?.map((finance) => (
            <DesignationTabCard
              key={finance?._id}
              iconUrl={
                finance?.subject_category === "Practical"
                  ? `${assestsFeedUrl}/subject-teacher-practical.svg`
                  : `${assestsFeedUrl}/subject-teacher-theory.svg`
              }
              label={finance}
              requiredData={{
                fid: finance,
                sid: staffAllDesignationList?._id,
              }}
              pathUrl="subject"
              isSubject
            />
          ))}
          {staffAllDesignationList?.financeDepartment?.map((finance) => (
            <DesignationTabCard
              key={finance?._id}
              iconUrl={`${assestsUserFinanceUrl}/manager.svg`}
              label="Finance Manager"
              requiredData={{
                fid: finance?._id,
                sid: staffAllDesignationList?._id,
              }}
              pathUrl="finance"
            />
          ))}
          {staffAllDesignationList?.financeModeratorDepartment?.map(
            (finance) => (
              <DesignationTabCard
                key={finance?._id}
                iconUrl={`${assestsUserFinanceUrl}/manager.svg`}
                label={financeModeratorObj[finance?.access_role]}
                requiredData={{
                  data: finance,
                  sid: staffAllDesignationList?._id,
                  role: "MODERATOR",
                }}
                pathUrl="finance"
              />
            )
          )}
          {staffAllDesignationList?.admissionDepartment?.map((finance) => (
            <DesignationTabCard
              key={finance?._id}
              iconUrl={`${assestsUserFinanceUrl}/manager.svg`}
              label="Admission Admin"
              requiredData={{
                fid: finance?._id,
                sid: staffAllDesignationList?._id,
              }}
              pathUrl="admission"
            />
          ))}
          {staffAllDesignationList?.admissionModeratorDepartment?.map(
            (finance) => (
              <DesignationTabCard
                key={finance?._id}
                iconUrl={`${assestsUserFinanceUrl}/manager.svg`}
                label={
                  finance?.access_role === "ONE_TAB_ACCESS"
                    ? admissionModeratorObj[finance?.access_role][
                        finance?.active_tab?.role
                      ]
                    : admissionModeratorObj[finance?.access_role]
                }
                requiredData={{
                  data: finance,
                  sid: staffAllDesignationList?._id,
                  role: "MODERATOR",
                }}
                pathUrl="finance"
              />
            )
          )}
          {staffAllDesignationList?.library?.map((finance) => (
            <DesignationTabCard
              key={finance?._id}
              iconUrl={`${assestsUserFinanceUrl}/manager.svg`}
              label="Librarian"
              requiredData={{
                fid: finance?._id,
                sid: staffAllDesignationList?._id,
              }}
              pathUrl="library"
            />
          ))}

          {staffAllDesignationList?.eventManagerDepartment?.map((finance) => (
            <DesignationTabCard
              key={finance?._id}
              iconUrl={`${assestsUserFinanceUrl}/manager.svg`}
              label="Event and Seminars"
              requiredData={{
                fid: finance?._id,
                sid: staffAllDesignationList?._id,
              }}
              pathUrl="eventmanager"
            />
          ))}
          {/* {staffAllDesignationList?.aluminiDepartment?.map((finance) => (
            <DesignationTabCard
              key={finance?._id}
              iconUrl={`${assestsUserFinanceUrl}/manager.svg`}
              label="Finance Manager"
              requiredData={{
                fid: finance?._id,
                sid: staffAllDesignationList?._id,
              }}
              pathUrl="library"
            />
          ))} */}
          {staffAllDesignationList?.instituteModeratorDepartment?.map(
            (finance) =>
              finance?.access_role === "SOCIAL_MEDIA_ACCESS" ? null : (
                <DesignationTabCard
                  key={finance?._id}
                  iconUrl={`${assestsUserFinanceUrl}/manager.svg`}
                  label={instituteModeratorObj[finance?.access_role]}
                  requiredData={{
                    data: finance,
                    sid: staffAllDesignationList?._id,
                    role: "MODERATOR",
                  }}
                  pathUrl={instituteModeratorUrlObj[finance?.access_role]}
                />
              )
          )}

          {staffAllDesignationList?.hostelDepartment?.map((finance) => (
            <DesignationTabCard
              key={finance?._id}
              iconUrl={`${assestsUserFinanceUrl}/manager.svg`}
              label="Hostel Manager"
              requiredData={{
                fid: finance?._id,
                sid: staffAllDesignationList?._id,
              }}
              pathUrl="hostel"
            />
          ))}
          {staffAllDesignationList?.hostelUnitDepartment?.map((finance) => (
            <DesignationTabCard
              key={finance?._id}
              iconUrl={`${assestsUserFinanceUrl}/manager.svg`}
              label="Hostel Warden"
              requiredData={{
                data: finance,
                sid: staffAllDesignationList?._id,
              }}
              pathUrl="hostel/warden"
            />
          ))}
          {staffAllDesignationList?.hostelModeratorDepartment?.map(
            (finance) => (
              <DesignationTabCard
                key={finance?._id}
                iconUrl={`${assestsUserFinanceUrl}/manager.svg`}
                label={
                  finance?.access_role === "ONE_TAB_ACCESS"
                    ? hostelModeratorObj[finance?.access_role][
                        finance?.active_tab?.role
                      ]
                    : hostelModeratorObj[finance?.access_role]
                }
                requiredData={{
                  data: finance,
                  sid: staffAllDesignationList?._id,
                  role: "MODERATOR",
                }}
                pathUrl="hostel"
              />
            )
          )}
          {staffAllDesignationList?.transportDepartment?.map((finance) => (
            <DesignationTabCard
              key={finance?._id}
              iconUrl={`${assestsUserFinanceUrl}/manager.svg`}
              label="Transport Manager"
              requiredData={{
                fid: finance?._id,
                sid: staffAllDesignationList?._id,
              }}
              pathUrl="transport"
            />
          ))}
          {staffAllDesignationList?.mentorDepartment?.map((finance) => (
            <DesignationTabCard
              key={finance?._id}
              iconUrl={`${assestsUserFinanceUrl}/manager.svg`}
              label="Mentor"
              requiredData={{
                fid: finance?._id,
                sid: staffAllDesignationList?._id,
              }}
              pathUrl="mentor"
            />
          ))}
        </DesignationTabWrapper>
      </div>
    </div>
  );
};

export default memo(DesignationConfig);

export const financeModeratorObj = {
  CASH_RECEIPT_ACCESS: "Cash Receipt Section",
  INVENTORY_ACCESS: "Inventories Section",
  FEE_MASTER_ACCESS: "Fees Master Section",
  PAYROLL_ACCESS: "Payroll Section",
  DEPOSIT_ACCESS: "Deposit Section",
  BANK_ACCOUNT_ACCESS: "Bank Account Section",
  DATA_EXPORT_ACCESS: "Finance Data Export Authority",
};

export const admissionModeratorObj = {
  MULTI_APP_ACCESS: "Application Manager",
  INQUIRY_ACCESS: "Enquiries Section",
  ALL_FEE_ACCESS: "Fee Receipt Authority",
  SCHOLARSHIP_ACCESS: "Scholarship Manager",
  REFUND_ACCESS: "Excess Fees Refund",
  PENDING_FEE_ACCESS: "Pending Fee Manager",
  DATA_EXPORT_ACCESS: "Admission Data Export Authority",
  ONE_TAB_ACCESS: {
    Application: "Admission Application Tab",
    Selected: "Admission Selected Tab",
    Confirmed: "Admission Confirmed Tab",
    Allotted: "Admission Allotted Tab",
    Cancelled: "Admission Cancelled Tab",
  },
};
export const instituteModeratorObj = {
  STUDENT_PROMOTE_ACCESS: "Student Section",
  CERTIFICATE_ACCESS: "Certificate Authority",
  EXAM_MANAGER_ACCESS: "Examination Section",
  ID_CARD_ACCESS: "Id Card Section",
  ACADEMIC_ADMINISTRATOR_ACCESS: "Academic Administrator",
  LEAVING_AND_TRANSFER_ACCESS: "Leave and Transfer Authority",
  // MULTI_APP_ACCESS:   ,
  // MULTI_APP_ACCESS:   ,
};
export const instituteModeratorUrlObj = {
  STUDENT_PROMOTE_ACCESS: "promote",
  CERTIFICATE_ACCESS: "certificate",
  EXAM_MANAGER_ACCESS: "exam",
  ID_CARD_ACCESS: "idcard",
  ACADEMIC_ADMINISTRATOR_ACCESS: "administrator",
  LEAVING_AND_TRANSFER_ACCESS: "leavestransfer",
  // MULTI_APP_ACCESS:   ,
  // MULTI_APP_ACCESS:   ,
};

export const instituteModeratorIconUrlObj = {
  STUDENT_PROMOTE_ACCESS: "certificate",
  CERTIFICATE_ACCESS: "certificate",
  EXAM_MANAGER_ACCESS: "examination",
  ID_CARD_ACCESS: "idcard",
  ACADEMIC_ADMINISTRATOR_ACCESS: "academic",
  LEAVING_AND_TRANSFER_ACCESS: "lat",
};
export const hostelModeratorObj = {
  ALL_FEE_ACCESS: "Hostel Fee receipt authority",
  MULTI_APP_ACCESS: "Hostel Application Manager",
  RENEWAL_UNIT_ACCESS: "Renewal Manager",
  DEPOSIT_ACCESS: "Deposit Moderator",
  PENDING_FEE_ACCESS: "Hostel Pending Fee Manager",
  COMPAINT_ACCESS: "Complaint Moderator",
  FEE_MASTER_ACCESS: "Hostel Fee Structure Moderator",
  RULES_AND_ANNOUNCEMENT_ACCESS: "Rules and Announcement Moderator",
  INCOME_AND_EXPENSE_ACCESS: "Income and Expense Moderator",
  DATA_EXPORT_ACCESS: "Hostel Data Export Authority",
  ONE_TAB_ACCESS: {
    Application: "Hostel Application Tab",
    Selected: "Hostel Selected Tab",
    Confirmed: "Hostel Confirmed Tab",
    Allotted: "Hostel Allotted Tab",
    Cancelled: "Hostel Cancelled Tab",
  },
};
