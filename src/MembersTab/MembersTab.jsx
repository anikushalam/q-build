import React, { Suspense } from "react";
import style from "./MembersTab.module.css";
import Navbar from "../Dashboard/UserDashboard/Components/Navbar/Navbar";
import {
  useStudentAppliedRoleQuery,
  useStaffAppliedRoleQuery,
} from "../services/joining/joinApi";

import {
  useGetOneUserProfileQuery,
  useRandomInsQuery,
} from "../services/qvipleAPI";

import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import QLoader from "../Loader/QLoader";
import RandomInstitute from "./RandomIns/RandomInstitute";
import { useGetActivatedMemberAccount } from "../hooks/member_tab/department-api";
import { useLocation } from "react-router-dom";
const StaffMembersTab = React.lazy(() => import("./staff/StaffMembersTab"));
const StudentMembersTab = React.lazy(() =>
  import("./student/StudentMembersTab")
);
function MembersTab() {
  const userId = localStorage.getItem("user");
  const location = useLocation();
  const ids = useSelector((state) => state.idChange);
  const { data: studentRoleData, refetch: studentRoleDataRefetch } =
    useStudentAppliedRoleQuery(ids?.id, { skip: !ids?.id });
  const { data: staffRoleData, refetch: staffRoleDataRefetch } =
    useStaffAppliedRoleQuery(ids?.id, { skip: !ids?.id });
  const { data: profileData } = useGetOneUserProfileQuery(userId);
  const { data: randomIns, refetch: randomInsRefetch } = useRandomInsQuery();
  const [swichDataId, setSwitchDataId] = useState({ id: null, type: "" });
  const { getActivatedMemberAccount, getActivatedMemberAccountRefetch } =
    useGetActivatedMemberAccount({
      data: {
        id: ids?.id,
      },
      skip: !ids?.id,
    });
  useEffect(() => {
    if (ids?.id) {
      studentRoleDataRefetch();
      staffRoleDataRefetch();
      randomInsRefetch();
    }
  }, [ids?.id, studentRoleDataRefetch, staffRoleDataRefetch]);

  useEffect(() => {
    if (staffRoleData && studentRoleData) {
      staffRoleData?.user?.staff?.length > 0
        ? setSwitchDataId({
            id: staffRoleData?.user?.staff[0]?._id,
            type: "staff",
          })
        : studentRoleData?.user?.student?.length > 0
        ? setSwitchDataId({
            id: studentRoleData?.user?.student[0]?._id,
            type: "student",
          })
        : studentRoleData?.user?.student?.length === 0 && randomIns?.r_Ins?._id
        ? setSwitchDataId({
            id: randomIns?.r_Ins?._id,
            type: "random",
          })
        : setSwitchDataId({ id: null, type: "" });
    }
  }, [studentRoleData, staffRoleData]);

  useEffect(() => {
    if (location.state?.selectedAccount) {
      getActivatedMemberAccountRefetch();
    }
  }, [location.state?.selectedAccount, getActivatedMemberAccountRefetch]);
  // console.info(
  //   "this is roll api : Student => ",
  //   getActivatedMemberAccount
  //   // ": Staff =>",
  //   // staffRoleData
  // );
  return (
    <>
      <Suspense fallback={<QLoader />}>
        {getActivatedMemberAccount?.role?.member === "Staff" ? (
          <StaffMembersTab
            staffId={
              location.state?.selectedAccount
                ? location.state?.selectedAccount
                : getActivatedMemberAccount?.role?.activeRole
            }
          />
        ) : getActivatedMemberAccount?.role?.member === "Student" ? (
          <StudentMembersTab
            studentId={
              location.state?.selectedAccount
                ? location.state?.selectedAccount
                : getActivatedMemberAccount?.role?.activeRole
            }
          />
        ) : swichDataId.type === "random" && randomIns?.r_Ins?._id ? (
          <div className={style.insChat}>
            <div className={style.navbar}>
              <Navbar
                status="members"
                profileData={profileData?.user}
                username={profileData?.user?.username}
                name={profileData?.user?.userLegalName}
                photoId={profileData?.user?.photoId}
                profilePhoto={profileData?.user?.profilePhoto}
              />
            </div>
            <RandomInstitute
              swichDataId={swichDataId.id}
              setSwitchDataId={setSwitchDataId}
              studentJoinData={studentRoleData?.user?.student}
              username={profileData?.user?.username}
            />
          </div>
        ) : (
          <div className={style.insChat}>
            <div className={style.navbar}>
              <Navbar
                status="members"
                profileData={profileData?.user}
                username={profileData?.user?.username}
                name={profileData?.user?.userLegalName}
                photoId={profileData?.user?.photoId}
                profilePhoto={profileData?.user?.profilePhoto}
              />
            </div>
            <QLoader />
          </div>
        )}
      </Suspense>
    </>
  );
}

export default MembersTab;
