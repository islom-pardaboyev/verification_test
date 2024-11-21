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
  const VerificationCode: LazyExoticComponent<any> = lazy(
    () => import("../../pages/auth/verification_code/verificationCode")
  );
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Register />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense>
          <Login />
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
