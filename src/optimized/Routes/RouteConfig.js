import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";
import { FeedRoute } from "./FeedRoute";
import { NotFoundRoute } from "./NotFoundRoute";
import { StaffMemberRoute } from "./StaffMember/StaffMemberRoute";
import { UserFinanceRoute } from "./StaffMember/UserFinanceRoute";

export const RouteConfig = () => {
  const { authRoute } = AuthRoute();
  const { feedRoute } = FeedRoute();
  const { staffMemberRoute } = StaffMemberRoute();
  const { userFinanceRoute } = UserFinanceRoute();
  const { notFoundRoute } = NotFoundRoute();
  const router = createBrowserRouter([
    ...authRoute,
    feedRoute,
    ...staffMemberRoute,
    userFinanceRoute,
    notFoundRoute,
  ]);
  return { router };
};
