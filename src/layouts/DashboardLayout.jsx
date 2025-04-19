import Sidebar from "../components/common/Sidebar";
import { Outlet } from "react-router-dom";

// Replace with real auth/role context when available
const getUserRole = () => localStorage.getItem("role") || "student";

const DashboardLayout = () => {
    const role = getUserRole();

    return (
        <div className="container-fluid">
            <div className="row vh-100">
                {/* Sidebar: fixed height and scrollable */}
                <div className="col-auto px-0 bg-light border-end d-flex flex-column" style={{ width: "240px" }}>
                    <Sidebar role={role} />
                </div>

                {/* Main Content */}
                <div className="col overflow-auto p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
