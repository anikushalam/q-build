import { Suspense, lazy } from "react";
import QvipleLoader from "@/Loader/QvipleLoader";
const DesignationConfig = lazy(() =>
  import("@/UserStaffMember/Config/StaffSelectDesignation/DesignationConfig")
);
const StudentProfile = lazy(() =>
  import("@/UserStaffMember/StudentProfile/StudentProfile")
);
const StudentAdmissionFeeProfile = lazy(() =>
  import("@/UserStaffMember/StudentProfile/StudentAdmissionFeeProfile")
);

export const StaffMemberRoute = () => {
  let staffMemberRoute = [
    {
      path: "/:username/member/staff",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <DesignationConfig />
        </Suspense>
      ),
    },
    {
      path: "/:username/student/profile",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <StudentProfile />
        </Suspense>
      ),
    },
    {
      path: "/:username/student/profile/admission",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <StudentAdmissionFeeProfile />
        </Suspense>
      ),
    },
  ];
  return { staffMemberRoute };
};
