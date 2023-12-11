import QvipleLoader from "@/Loader/QvipleLoader";
import { Suspense, lazy } from "react";
const Auth = lazy(() => import("@/Auth/Auth"));
const UserOtpVerification = lazy(() =>
  import("@/Auth/Verification/UserOtpVerification")
);
const AuthExistingAccount = lazy(() =>
  import("@/Auth/ExistingAccount/AuthExistingAccount")
);
const UserForget = lazy(() => import("@/Auth/Forget/UserForget"));
const UserForgetVerify = lazy(() => import("@/Auth/Forget/UserForgetVerify"));
const UserSetForgetPassword = lazy(() =>
  import("@/Auth/Forget/UserSetForgetPassword")
);
const UserCreateAccount = lazy(() =>
  import("@/Auth/CreateAccount/User/UserCreateAccount")
);
const UserSetPassword = lazy(() =>
  import("@/Auth/CreateAccount/User/UserSetPassword")
);

// const InstituteCreateAccount = lazy(() =>
//   import("@/Auth/CreateAccount/Institute/InstituteCreateAccount")
// );
// const InstituteSetPassword = lazy(() =>
//   import("@/Auth/CreateAccount/Institute/InstituteSetPassword")
// );

const InstituteForget = lazy(() => import("@/Auth/Forget/InstituteForget"));
const InstituteForgetVerify = lazy(() =>
  import("@/Auth/Forget/InstituteForgetVerify")
);
const InstituteSetForgetPassword = lazy(() =>
  import("@/Auth/Forget/InstituteSetForgetPassword")
);

export const AuthRoute = () => {
  let authRoute = [
    {
      path: "/",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <Auth />
        </Suspense>
      ),
    },
    {
      path: "/verify",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <UserOtpVerification />
        </Suspense>
      ),
    },
    {
      path: "/existing-account",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <AuthExistingAccount />
        </Suspense>
      ),
    },
    {
      path: "/user/forget",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <UserForget />
        </Suspense>
      ),
    },
    {
      path: "/user/forget/verify",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <UserForgetVerify />
        </Suspense>
      ),
    },
    {
      path: "/user/forget/password",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <UserSetForgetPassword />
        </Suspense>
      ),
    },
    {
      path: "/user/create/account",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <UserCreateAccount />
        </Suspense>
      ),
    },
    {
      path: "/user/create/account/password",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <UserSetPassword />
        </Suspense>
      ),
    },

    {
      path: "/institute/forget",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <InstituteForget />
        </Suspense>
      ),
    },
    {
      path: "/institute/forget/verify",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <InstituteForgetVerify />
        </Suspense>
      ),
    },
    {
      path: "/institute/forget/password",
      element: (
        <Suspense fallback={<QvipleLoader />}>
          <InstituteSetForgetPassword />
        </Suspense>
      ),
    },

    // {
    //   path: "/institute/create/account",
    //   element: (
    //     <Suspense fallback={<QvipleLoader />}>
    //       <InstituteCreateAccount />
    //     </Suspense>
    //   ),
    // },
    // {
    //   path: "/institute/create/account/password",
    //   element: (
    //     <Suspense fallback={<QvipleLoader />}>
    //       <InstituteSetPassword />
    //     </Suspense>
    //   ),
    // },
  ];
  return { authRoute };
};
