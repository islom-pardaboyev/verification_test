import { useRoutes } from "react-router-dom";
import { SuspenseComponent as Suspense } from "../../utils";
import { lazy, LazyExoticComponent } from "react";

function AuthRoutes() {
  const Register: LazyExoticComponent<any> = lazy(
    () => import("../../pages/auth/register/register")
  );
  const Login: LazyExoticComponent<any> = lazy(
    () => import("../../pages/auth/login/login")
  );
  const ResetPassword: LazyExoticComponent<any> = lazy(
    () => import("../../pages/auth/reset_password/resetPassword")
  );
  const VerificationCode: LazyExoticComponent<any> = lazy(
    () => import("../../pages/auth/verification_code/verificationCode")
  );
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/register",
      element: (
        <Suspense>
          <Register />
        </Suspense>
      ),
    },
    {
      path: "/reset_password",
      element: (
        <Suspense>
          <ResetPassword />
        </Suspense>
      ),
    },
    {
      path: "/verification_code",
      element: (
        <Suspense>
          <VerificationCode />
        </Suspense>
      ),
    },
  ]);
}

export default AuthRoutes;
