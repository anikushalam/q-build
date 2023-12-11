import { RouterProvider } from "react-router-dom";
import { RouteConfig } from "./RouteConfig";
import QvipleLoader from "@/Loader/QvipleLoader";

const IndexRoute = () => {
  const { router } = RouteConfig();

  // fallbackElement={<QvipleLoader />} here pass fall back element top show if any things is not lopaded
  return <RouterProvider fallbackElement={<QvipleLoader />} router={router} />;
};

export default IndexRoute;
