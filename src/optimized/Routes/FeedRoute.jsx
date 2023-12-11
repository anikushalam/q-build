import QvipleLoader from "@/Loader/QvipleLoader";
import React, { Suspense, lazy } from "react";
const Feed = lazy(() => import("@/Feed/Feed"));
export const FeedRoute = () => {
  let feedRoute = {
    path: "/:username/feed",
    element: (
      <Suspense fallback={<QvipleLoader />}>
        <Feed />
      </Suspense>
    ),
    // children: [
    //   {
    //     path: "post",
    //     element: <Feed />,
    //     loader: QvipleLoader,
    //   },
    // ],
  };
  return { feedRoute };
};
