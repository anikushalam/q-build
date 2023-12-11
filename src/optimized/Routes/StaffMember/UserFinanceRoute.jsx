import { Suspense, lazy } from "react";
import QvipleLoader from "@/Loader/QvipleLoader";
const FinanceManager = lazy(() =>
  import("@/UserStaffMember/FinanaceManager/FinanceManager")
);

export const UserFinanceRoute = () => {
  let userFinanceRoute = {
    path: "/:username/member/staff/finance",
    element: (
      <Suspense fallback={<QvipleLoader />}>
        <FinanceManager />
      </Suspense>
    ),

    // children: [
    //   {
    //     path: "post",
    //     element: <StaffMemberConfig />,
    //     loader: ,
    //   },
    // ],
  };
  return { userFinanceRoute };
};
