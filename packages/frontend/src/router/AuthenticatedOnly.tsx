import { useAuth } from "@/providers/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";


export const AuthenticatedOnly = () => {
    const { user } = useAuth();
    if (!user) return <Navigate to={"/signin"} />;
    return <Outlet />;
};
