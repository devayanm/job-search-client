import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// Layout & Routing Wrappers
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

// Pages
import HomePage from "./pages/Home/Home";
// import NotFound from "./pages/NotFound";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/Forgotpassword";

// Student Pages
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentJobSearch from "./pages/student/StudentJobSearch";
import StudentJobDetails from "./pages/student/StudentJobDetails";
import StudentJobRecommendations from "./pages/student/StudentJobRecommendations";
import OnCampusJobs from "./pages/student/OnCampusJobs";
import StudentEditProfile from "./pages/student/StudentEditProfile";

// TPO Pages
import TpoDashboard from "./pages/tpo/TpoDashboard";
import TpoBroadcast from "./pages/tpo/TpoBroadcast";
import TpoAdminProfile from "./pages/tpo/TpoAdminProfile";
import TpoEvents from "./pages/tpo/TpoEvents";
import TpoJobPostings from "./pages/tpo/TpoJobPostings";
import TpoStudents from "./pages/tpo/TpoStudents";


// Company Pages
import CompanyProfile from "./pages/company/CompanyProfile";
import PostJob from "./pages/company/PostJob";
import AllPostedJobs from "./pages/company/AllPostedJobs";
import { Home } from "lucide-react";

// Temporary placeholder
const Page = ({ title }) => <div className="fs-3 fw-bold">{title}</div>;

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/404" element={<Page title="404 Not Found" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Root: Redirect based on auth */}
        <Route
          path="/"
          element={<Navigate to={user ? `/${user.role}/dashboard` : "/login"} />}
        />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            {/* Student Routes */}
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/recommendations" element={<StudentJobRecommendations />} />
            <Route path="/student/search-jobs" element={<StudentJobSearch />} />
            <Route path="/student/job-details/:jobId" element={<StudentJobDetails />} />
            <Route path="/student/on-campus-jobs" element={<OnCampusJobs />} />
            <Route path="/student/edit-profile" element={<StudentEditProfile />} />

            {/* TPO Routes */}
            <Route path="/tpo/dashboard" element={<TpoDashboard />} />
            <Route path="/tpo/students" element={<TpoStudents />} />
            <Route path="/tpo/broadcast" element={<TpoBroadcast />} />
            <Route path="/tpo/profile" element={<TpoAdminProfile />} />
            <Route path="/tpo/events" element={<TpoEvents />} />
            <Route path="/tpo/jobs" element={<TpoJobPostings />} />

            {/* Company Routes */}
            <Route path="/company/dashboard" element={<Page title="Company Dashboard" />} />
            <Route path="/company/post-job" element={<PostJob />} />
            <Route path="/company/jobs" element={<AllPostedJobs />} />
            <Route path="/company/profile" element={<CompanyProfile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
