import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";

const StudentDashboard = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    // Dummy stats and data (can be replaced with real backend data)
    const [dummyStats, setDummyStats] = useState({
        applied: 5,
        shortlisted: 2,
        interviews: 1,
    });

    const jobRecommendations = [
        { title: "Frontend Developer", company: "TechCorp" },
        { title: "Data Analyst", company: "Data Inc." },
    ];

    const campusNotifications = [
        "TCS is visiting campus on April 25th.",
        "Infosys on-campus test scheduled for April 30th.",
    ];

    // Simulate loading data from the server
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulate loading delay
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center text-primary mb-4 font-weight-bold">
                Welcome, {user?.name}
            </h1>

            {/* Profile Overview */}
            <div className="card shadow-sm border-0 rounded-3 p-4 mb-4 bg-light">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="mb-1">{user?.name}</h4>
                        <p className="mb-0 text-muted">{user?.email}</p>
                    </div>
                    <button className="btn btn-outline-primary">Edit Profile</button>
                </div>
            </div>

            {/* Stats Section */}
            <div className="row g-4 justify-content-center">
                <div className="col-12 col-md-4">
                    <div className="card shadow-sm border-0 rounded-3 p-3 bg-light text-center">
                        <h5 className="card-title text-muted mb-1">Jobs Applied</h5>
                        <p className="display-6 font-weight-bold">{dummyStats.applied}</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card shadow-sm border-0 rounded-3 p-3 bg-success text-white text-center">
                        <h5 className="card-title mb-1">Shortlisted</h5>
                        <p className="display-6 font-weight-bold">{dummyStats.shortlisted}</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card shadow-sm border-0 rounded-3 p-3 bg-warning text-dark text-center">
                        <h5 className="card-title mb-1">Interviews</h5>
                        <p className="display-6 font-weight-bold">{dummyStats.interviews}</p>
                    </div>
                </div>
            </div>

            {/* Job Recommendations Section */}
            <div className="mt-5">
                <h2 className="h3 mb-3 text-primary font-weight-bold">Job Recommendations</h2>
                {loading ? (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <div className="list-group">
                        {jobRecommendations.map((job, index) => (
                            <div
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center p-3 mb-2 border-0 rounded-3 bg-light hover:shadow-lg transition-all duration-300 ease-in-out"
                            >
                                <span className="font-weight-bold">{job.title}</span>
                                <span className="text-muted">{job.company}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* On-Campus Notifications Section */}
            <div className="mt-5">
                <h2 className="h3 mb-3 text-primary font-weight-bold">On-Campus Notifications</h2>
                {loading ? (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <ul className="list-group">
                        {campusNotifications.map((note, idx) => (
                            <li
                                key={idx}
                                className="list-group-item p-3 mb-2 border-0 rounded-3 bg-light hover:shadow-lg transition-all duration-300 ease-in-out"
                            >
                                {note}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Upcoming Events Section */}
            <div className="mt-5">
                <h2 className="h3 mb-3 text-primary font-weight-bold">Upcoming Campus Events</h2>
                <ul className="list-group">
                    <li className="list-group-item p-3 mb-2 border-0 rounded-3 bg-info text-white">
                        <strong>Hackathon 2025</strong> - Registration opens on May 5th.
                    </li>
                    <li className="list-group-item p-3 mb-2 border-0 rounded-3 bg-info text-white">
                        <strong>Campus Job Fair</strong> - June 15th, at the Student Center.
                    </li>
                </ul>
            </div>

            {/* Job Search Widget */}
            <div className="card shadow-sm border-0 rounded-3 p-4 mt-5 bg-light">
                <h3 className="mb-4 text-primary font-weight-bold">Quick Job Search</h3>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control rounded-3"
                        placeholder="Search for jobs"
                    />
                    <button className="btn btn-primary rounded-3">Search</button>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
