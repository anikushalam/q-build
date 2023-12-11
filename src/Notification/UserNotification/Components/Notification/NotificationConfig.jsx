import React from "react";
import style from "./Item.module.css";
import ApproveStaffNotify from "./ApproveStaffNotify";
import DepartmentNotify from "./DepartmentNotify";
import ClassNotify from "./ClassNotify";
import SubjectNotify from "./SubjectNotify";
import AdmissionNotify from "./AdmissionNotify";
import FinanceNotify from "./FinanceNotify";
import DisplayPersonNotify from "./DisplayPersonNotify";
import ApproveStudentNotify from "./ApproveStudentNotify";
import UserCircleNotify from "./ApproveStudentNotify";
import UserFollowNotify from "./UserFollowNotify";
import UnknownNotify from "./UnknownNotify";
import HostelNotify from "./HostelNotify";
import EventManagerNotify from "./EventManagerNotify";
import LibraryNotify from "./LibraryNotify";
import AluminiNotify from "./AluminiNotify";
import InstituteModeratorNotify from "./InstituteModeratorNotify";
import TransportNotify from "./TransportNotify";
import HostelBedAllottmentNotify from "./HostelBedAllottmentNotify";
import AdmissionModeratorNotify from "./AdmissionModeratorNotify";
import FinanceModeratorNotify from "./FinanceModeratorNotify";
import HostelModeratorNotify from "./HostelModeratorNotify";
import MentorNotify from "./MentorNotify";
import PostNotify from "./PostNotify";
import OnlineFeesNotify from "./OnlineFeesNotify";
import QvipleRepaymentNotify from "./QvipleRepaymentNotify";

const NotificationConfig = ({ notification }) => {
  return (
    <div className={style.item}>
      {notification?.notifyCategory === "Approve Staff" && (
        <ApproveStaffNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Department Designation" && (
        <DepartmentNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Class Designation" && (
        <ClassNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Subject Designation" && (
        <SubjectNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Admission Designation" && (
        <AdmissionNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Finance Designation" && (
        <FinanceNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Display Person" && (
        <DisplayPersonNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Approve Student" && (
        <ApproveStudentNotify notification={notification} />
      )}
      {notification?.notifyCategory === "User Circle" && (
        <UserCircleNotify notification={notification} />
      )}
      {notification?.notifyCategory === "User Follow" && (
        <UserFollowNotify notification={notification} />
      )}
      {!notification?.notifyCategory && (
        <UnknownNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Hostel Designation" && (
        <HostelNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Event Manager Designation" && (
        <EventManagerNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Library Designation" && (
        <LibraryNotify notification={notification} />
      )}

      {notification?.notifyCategory === "Alumini Designation" && (
        <AluminiNotify notification={notification} />
      )}

      {notification?.notifyCategory === "Institute Moderator Designation" && (
        <InstituteModeratorNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Transport Designation" && (
        <TransportNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Bed Allottment" && (
        <HostelBedAllottmentNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Finance Moderator Designation" && (
        <AdmissionModeratorNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Admission Moderator Designation" && (
        <FinanceModeratorNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Hostel Moderator Designation" && (
        <HostelModeratorNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Mentor Designation" && (
        <MentorNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Post Feed" && (
        <PostNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Online Fee" && (
        <OnlineFeesNotify notification={notification} />
      )}
      {notification?.notifyCategory === "Qviple Repayment" && (
        <QvipleRepaymentNotify notification={notification} />
      )}
    </div>
  );
};

export default NotificationConfig;
