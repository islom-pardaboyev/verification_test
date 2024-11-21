import { useRoutes } from "react-router-dom";
import { SuspenseComponent as Suspense } from "../../utils";
import { lazy, LazyExoticComponent } from "react";

function DashboardRoutes() {
  const Dashboard: LazyExoticComponent<any> = lazy(
    () => import("../../pages/dashboard/index")
  );
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Dashboard />
        </Suspense>
      ),
    },
  ]);
}

export default DashboardRoutes;
