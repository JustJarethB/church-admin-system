import { useAuth } from "@/providers/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

export const UnauthenticatedOnly = () => {
    const { user } = useAuth();
    if (user) return <Navigate to={"/"} />;
    return <Outlet />;
};
