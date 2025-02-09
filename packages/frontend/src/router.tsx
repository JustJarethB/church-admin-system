import { Navigate, Outlet } from "react-router-dom";
import { Page } from "@/components";
import { useAuth } from "./providers/AuthProvider";

export const AuthenticatedOnly = () => {
  const { user } = useAuth()
  if (!user) return <Navigate to={"/signin"} />;
  return <Outlet />
};
export const UnauthenticatedOnly = () => {
  const { user } = useAuth()
  if (user) return <Navigate to={"/"} />;
  return <Outlet />
};

export const RouterPage = () => (
  <Page>
    <Outlet />
  </Page>
);
