import {
  assestsFeedUrl,
  assestsUserFinanceUrl,
  assestsUserMemberUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import style from "../UserFeed.module.css";
import { useTranslation } from "react-i18next";
import UserDesignationCard from "./UserDesignationCard";
import { useStaffAllDesignationList } from "@/Hooks/ApiHooks/UserMember/user-member-api";
import Loading from "@/Loader/Loading";
import {
  // instituteModeratorUrlObj,
  hostelModeratorObj,
  instituteModeratorObj,
  admissionModeratorObj,
  financeModeratorObj,
  instituteModeratorIconUrlObj,
} from "@/UserStaffMember/Config/StaffSelectDesignation/DesignationConfig";

const UserDesignation = ({ sid }) => {
  const { t } = useTranslation();

  const { staffAllDesignationList, staffAllDesignationListLoading } =
    useStaffAllDesignationList({
      sid: sid,
      // sid: "644a1fc1ec95c32bd6276b86",
      skip: !sid,
    });

  // console.info(("staffAllDesignationList", staffAllDesignationList));
  return (
    <div className={style.ufu_designation}>
      <h6>
        {t("your_designations")} {":- "}
      </h6>
      {staffAllDesignationListLoading && <Loading isGrey />}

      {staffAllDesignationList?.staffDepartment?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={`${assestsFeedUrl}/department.svg`}
          label={finance?.dName}
          requiredData={{
            onClickValue: finance,
            sid: staffAllDesignationList?._id,
          }}
          isAnchor
          redirectUrl={`http://qviple.com`}
        />
      ))}

      {staffAllDesignationList?.staffClass?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={`${assestsFeedUrl}/class-teacher.svg`}
          label={`${finance?.classTitle} - ${finance?.batch?.batchName}`}
          requiredData={{
            onClickValue: finance,
            sid: staffAllDesignationList?._id,
          }}
          isAnchor
          redirectUrl={`http://qviple.com`}
        />
      ))}

      {staffAllDesignationList?.staffSubject?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={
            finance?.subject_category === "Practical"
              ? `${assestsFeedUrl}/subject-teacher-practical.svg`
              : `${assestsFeedUrl}/subject-teacher-theory.svg`
          }
          label={finance}
          requiredData={{
            fid: finance,
            sid: staffAllDesignationList?._id,
          }}
          isAnchor
          redirectUrl={`http://qviple.com`}
          isSubject
        />
      ))}

      {staffAllDesignationList?.financeDepartment?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={`${assestsUserFinanceUrl}/manager.svg`}
          label="Finance Manager"
          requiredData={{
            fid: finance?._id,
            sid: sid,
            staffProfilePhoto: staffAllDesignationList?.staffProfilePhoto,
          }}
          redirectUrl={"member/staff/finance"}
        />
      ))}
      {staffAllDesignationList?.financeModeratorDepartment?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={`${assestsUserFinanceUrl}/manager.svg`}
          label={financeModeratorObj[finance?.access_role]}
          requiredData={{
            data: finance,
            sid: staffAllDesignationList?._id,
            role: "MODERATOR",
          }}
          redirectUrl="finance"
        />
      ))}

      {staffAllDesignationList?.admissionDepartment?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={`${assestsFeedUrl}/admission.svg`}
          label="Admission Admin"
          requiredData={{
            fid: finance?._id,
            sid: staffAllDesignationList?._id,
          }}
          isAnchor
          redirectUrl={`http://qviple.com`}
        />
      ))}
      {staffAllDesignationList?.admissionModeratorDepartment?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={`${assestsFeedUrl}/admission.svg`}
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
          isAnchor
          redirectUrl={`http://qviple.com`}
        />
      ))}
      {staffAllDesignationList?.library?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={`${assestsFeedUrl}/librarian.svg`}
          label="Librarian"
          requiredData={{
            fid: finance?._id,
            sid: staffAllDesignationList?._id,
          }}
          isAnchor
          redirectUrl={`http://qviple.com`}
        />
      ))}

      {staffAllDesignationList?.eventManagerDepartment?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={`${assestsUserFinanceUrl}/manager.svg`}
          label="Event and Seminars"
          requiredData={{
            fid: finance?._id,
            sid: staffAllDesignationList?._id,
          }}
          isAnchor
          redirectUrl={`http://qviple.com`}
        />
      ))}
      {/* {staffAllDesignationList?.aluminiDepartment?.map((finance) => (
            <UserDesignationCard
              key={finance?._id}
              url={`${assestsFeedUrl}/manager.svg`}
              label="Finance Manager"
              requiredData={{
                fid: finance?._id,
                sid: staffAllDesignationList?._id,
              }}
              redirectUrl="library"
            />
          ))} */}
      {staffAllDesignationList?.instituteModeratorDepartment?.map((finance) =>
        finance?.access_role === "SOCIAL_MEDIA_ACCESS" ? null : (
          <UserDesignationCard
            key={finance?._id}
            url={`${assestsFeedUrl}/${
              instituteModeratorIconUrlObj[finance?.access_role]
            }.svg`}
            label={instituteModeratorObj[finance?.access_role]}
            requiredData={{
              data: finance,
              sid: staffAllDesignationList?._id,
              role: "MODERATOR",
            }}
            // redirectUrl={instituteModeratorUrlObj[finance?.access_role]}
            isAnchor
            redirectUrl={`http://qviple.com`}
          />
        )
      )}

      {staffAllDesignationList?.hostelDepartment?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={`${assestsFeedUrl}/hostel.svg`}
          label="Hostel Manager"
          requiredData={{
            fid: finance?._id,
            sid: staffAllDesignationList?._id,
          }}
          isAnchor
          redirectUrl={`http://qviple.com`}
        />
      ))}
      {staffAllDesignationList?.hostelUnitDepartment?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={`${assestsFeedUrl}/hostel-warden.svg`}
          label="Hostel Warden"
          requiredData={{
            data: finance,
            sid: staffAllDesignationList?._id,
          }}
          // redirectUrl="hostel/warden"
          isAnchor
          redirectUrl={`http://qviple.com`}
        />
      ))}
      {staffAllDesignationList?.hostelModeratorDepartment?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={`${assestsFeedUrl}/hostel.svg`}
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
          // redirectUrl="hostel"
          isAnchor
          redirectUrl={`http://qviple.com`}
        />
      ))}
      {staffAllDesignationList?.transportDepartment?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={`${assestsFeedUrl}/transport.svg`}
          label="Transport Manager"
          requiredData={{
            fid: finance?._id,
            sid: staffAllDesignationList?._id,
          }}
          // redirectUrl="transport"
          isAnchor
          redirectUrl={`http://qviple.com`}
        />
      ))}
      {staffAllDesignationList?.mentorDepartment?.map((finance) => (
        <UserDesignationCard
          key={finance?._id}
          url={`${assestsUserFinanceUrl}/manager.svg`}
          label="Mentor"
          requiredData={{
            fid: finance?._id,
            sid: staffAllDesignationList?._id,
          }}
          // redirectUrl="mentor"
          isAnchor
          redirectUrl={`http://qviple.com`}
        />
      ))}
    </div>
  );
};

export default UserDesignation;
