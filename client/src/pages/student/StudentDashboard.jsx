import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { getStudentDashboard } from "../../api/dashboardApi";
import { getStudentProfile } from "../../api/profileApi";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Briefcase, MapPin, Calendar, FileText, Edit } from 'lucide-react';

const StudentDashboard = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [studentStats, setStudentStats] = useState({
        applied: 0,
        shortlisted: 0,
        interviews: 0,
    });
    const [jobRecommendations, setJobRecommendations] = useState([]);
    const [campusNotifications, setCampusNotifications] = useState([]);
    const [recentJobs, setRecentJobs] = useState([]);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const dashboardData = await getStudentDashboard();
                const profileData = await getStudentProfile(user.id);

                setStudentStats({
                    applied: dashboardData.applied_jobs,
                    shortlisted: dashboardData.shortlisted_jobs,
                    interviews: dashboardData.interviews,
                });
                setJobRecommendations(dashboardData.job_recommendations);
                setCampusNotifications(dashboardData.campus_notifications);
                setRecentJobs(dashboardData.recent_jobs || []);
                setProfile(profileData);
            } catch (error) {
                console.error("Dashboard fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const chartData = [
        { name: "Applied", value: studentStats.applied },
        { name: "Shortlisted", value: studentStats.shortlisted },
        { name: "Interviews", value: studentStats.interviews },
    ];

    return (
        <div className="container my-5">
            {/* Profile Header with Left-aligned Text and Right-aligned Image */}
            <div className="card p-4 mb-4 shadow-sm border-0 rounded-4 bg-light">
                <div className="d-flex align-items-center">
                    {/* Left Side - Profile Texts */}
                    <div className="flex-grow-1 align-items-center " style={{ marginLeft: '8rem' }}>
                        <h3 className="mb-1">{user?.name}</h3>
                        <p className="text-muted mb-3">{user?.email}</p>

                        <div className="mb-3">
                            <h5>Profile Summary</h5>
                            <p>{profile?.profile_summary || "No profile summary available"}</p>
                        </div>

                        {/* New Academic Details */}
                        <div>
                            <h5>Education</h5>
                            <p><strong>Degree:</strong> {profile?.degree || "Not provided"}</p>
                            <p><strong>Branch:</strong> {profile?.branch || "Not provided"}</p>
                            <p><strong>College:</strong> {profile?.college || "Not provided"}</p>
                        </div>

                        {/* Skills Section */}
                        <div>
                            <h5>Skills</h5>
                            <p>{profile?.skills?.join(", ") || "No skills listed"}</p>
                        </div>
                    </div>

                    {/* Right Side - Profile Image */}
                    <div className="flex-grow-1 text-center">
                        <img
                            src={profile?.profilePicture || `https://picsum.photos/100?random=${user?.id}`}
                            alt="Profile"
                            className="rounded-circle mb-3"
                            width="80"
                            height="80"
                        />
                        {/* Edit Profile Button */}
                        <div className="text-center mt-3">
                            <Link to="/student/edit-profile" className="btn btn-outline-primary rounded-pill btn-sm">
                                <Edit className="me-2" /> Edit Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* Stats Summary */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <div className="card p-4 shadow-sm border-0 rounded-4 bg-primary text-white">
                        <h5 className="mb-0">Applied Jobs</h5>
                        <h3>{studentStats.applied}</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-4 shadow-sm border-0 rounded-4 bg-success text-white">
                        <h5 className="mb-0">Shortlisted</h5>
                        <h3>{studentStats.shortlisted}</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-4 shadow-sm border-0 rounded-4 bg-warning text-white">
                        <h5 className="mb-0">Interviews</h5>
                        <h3>{studentStats.interviews}</h3>
                    </div>
                </div>
            </div>

            {/* Stats Chart */}
            <div className="card p-4 mb-4 shadow-sm border-0 rounded-4 bg-white">
                <h4 className="mb-3 text-primary">Application Stats</h4>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#0d6efd" radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Recently Applied Jobs */}
            <div className="card p-4 mb-4 shadow-sm border-0 rounded-4 bg-white">
                <h4 className="mb-3 text-success">Recently Applied Jobs</h4>
                <ul className="list-group">
                    {recentJobs.length ? recentJobs.map((job, i) => (
                        <li key={i} className="list-group-item border-0 bg-light mb-2 rounded-3 d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{job.title}</strong> <span className="text-muted">at {job.company}</span>
                            </div>
                            <span className={`badge bg-${job.status === 'Shortlisted' ? 'success' : 'secondary'}`}>
                                {job.status}
                            </span>
                            <Link to={`/job/${job.id}`} className="btn btn-outline-info btn-sm">View</Link>
                        </li>
                    )) : <p className="text-muted">No recent job applications</p>}
                </ul>
            </div>

            {/* Job Recommendations */}
            <div className="card p-4 mb-4 shadow-sm border-0 rounded-4 bg-white">
                <h4 className="mb-3 text-info">Recommended Jobs</h4>
                <div className="row g-3">
                    {jobRecommendations.map((job, idx) => (
                        <div key={idx} className="col-md-6">
                            <div className="p-3 bg-light rounded-3 border d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>{job.title}</strong><br />
                                    <span className="text-muted">{job.company}</span>
                                </div>
                                <div>
                                    <MapPin className="text-muted" size={18} /> {job.location}<br />
                                    <Calendar className="text-muted" size={18} /> {job.deadline}
                                </div>
                                <Link to={`/job/${job.id}`} className="btn btn-outline-success btn-sm">Apply</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* On-Campus Notifications */}
            <div className="card p-4 mb-5 shadow-sm border-0 rounded-4 bg-white">
                <h4 className="mb-3 text-warning">On-Campus Notifications</h4>
                <ul className="list-group">
                    {campusNotifications.map((note, i) => (
                        <li key={i} className="list-group-item bg-light border-0 rounded-3 mb-2">
                            {note}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StudentDashboard;
