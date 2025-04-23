import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ requiredRole }) => {
    const { user } = useAuth();

    if (!user) return <Navigate to="/login" />;

    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to={`/${user.role}/dashboard`} />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
