import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    FaTachometerAlt, FaSearch, FaBriefcase, FaUniversity,
    FaEnvelope, FaUsers, FaUserCog, FaArrowLeft, FaArrowRight,
    FaSignOutAlt, FaCogs, FaQuestionCircle, FaFileAlt
} from "react-icons/fa";
import { sidebarLinks } from "../../routes/sidebarLinks";

const iconMap = {
    "Dashboard": <FaTachometerAlt />,
    "Job Search": <FaSearch />,
    "Job Recommendations": <FaBriefcase />,
    "On-Campus Jobs": <FaUniversity />,
    "Search Students": <FaSearch />,
    "View Students": <FaUsers />,
    "Send Mail": <FaEnvelope />,
    "Profile": <FaUserCog />,
    "Post Job": <FaBriefcase />,
    "All Jobs": <FaBriefcase />,
};

const universalLinks = [
    { name: "Settings", icon: <FaCogs />, path: "/settings" },
    { name: "Help & Support", icon: <FaQuestionCircle />, path: "/help" },
    { name: "Terms", icon: <FaFileAlt />, path: "/terms" }
];

const Sidebar = ({ role }) => {
    const [collapsed, setCollapsed] = useState(false);
    const links = sidebarLinks[role] || [];
    const navigate = useNavigate();

    const footerLink = links.find(link => link.name === "Dashboard");
    const topLinks = links.filter(link => link.name !== "Dashboard");

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        navigate("/login");
    };

    return (
        <div
            className="position-fixed top-0 start-0 h-100 bg-white border-end d-flex flex-column shadow-sm"
            style={{ width: collapsed ? "72px" : "240px", transition: "width 0.3s ease-in-out", zIndex: 1050 }}
        >
            {/* Toggle Button */}
            <div className="d-flex justify-content-end align-items-center p-2 border-bottom">
                <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => setCollapsed(!collapsed)}
                    title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                >
                    {collapsed ? <FaArrowRight /> : <FaArrowLeft />}
                </button>
            </div>

            {/* Role Header */}
            {!collapsed && (
                <div className="text-center fw-semibold text-uppercase text-secondary py-2 small border-bottom">
                    {role}
                </div>
            )}

            {/* Main Navigation */}
            <nav className="flex-grow-1 overflow-auto py-3">
                {topLinks.map(link => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `d-flex align-items-center text-decoration-none px-3 py-2 text-dark ${isActive ? "bg-primary text-white rounded-pill" : "hover-bg-light"}`
                        }
                        title={collapsed ? link.name : ""}
                    >
                        <span className="me-3 fs-5">{iconMap[link.name] || <FaUserCog />}</span>
                        {!collapsed && <span className="fw-medium">{link.name}</span>}
                    </NavLink>
                ))}
            </nav>

            {/* Footer Links */}
            <div className="border-top py-2">
                {/* Dashboard Link */}
                {footerLink && (
                    <NavLink
                        to={footerLink.path}
                        className={({ isActive }) =>
                            `d-flex align-items-center text-decoration-none px-3 py-2 text-dark ${isActive ? "bg-primary text-white rounded-pill" : "hover-bg-light"}`
                        }
                        title={collapsed ? footerLink.name : ""}
                    >
                        <span className="me-3 fs-5">{iconMap[footerLink.name]}</span>
                        {!collapsed && <span className="fw-medium">{footerLink.name}</span>}
                    </NavLink>
                )}

                {/* Universal Links */}
                {universalLinks.map(link => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className="d-flex align-items-center text-decoration-none px-3 py-2 text-dark hover-bg-light"
                        title={collapsed ? link.name : ""}
                    >
                        <span className="me-3 fs-5">{link.icon}</span>
                        {!collapsed && <span className="fw-medium">{link.name}</span>}
                    </NavLink>
                ))}

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="w-100 text-start d-flex align-items-center px-3 py-2 text-danger bg-transparent border-0 hover-bg-light"
                    title="Logout"
                >
                    <span className="me-3 fs-5"><FaSignOutAlt /></span>
                    {!collapsed && <span className="fw-medium">Logout</span>}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
