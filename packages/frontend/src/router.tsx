import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "@/api";
import { Page } from "@/components";

export const AuthenticatedOnly = () => {
  const [user] = useCurrentUser();
  if (!user) return <Navigate to={"/signin"} />;
  return <Outlet />;
};
export const UnauthenticatedOnly = () => {
  const [user] = useCurrentUser();
  if (user) return <Navigate to={"/"} />;
  return <Outlet />;
};

export const RouterPage = () => (
  <Page>
    <Outlet />
  </Page>
);
