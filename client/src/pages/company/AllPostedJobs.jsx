import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUserTie, FaLock, FaCheckCircle } from "react-icons/fa";

const AllPostedJobs = () => {
    const [jobs, setJobs] = useState([
        {
            id: 1,
            title: "Software Engineer",
            location: "San Francisco, CA",
            status: "Active",
            postDate: "2025-04-01",
            topCandidates: ["Alice", "Bob", "Charlie"],
        },
        {
            id: 2,
            title: "Data Scientist",
            location: "New York, NY",
            status: "Closed",
            postDate: "2025-02-15",
            topCandidates: ["David", "Eve"],
        },
    ]);
    const navigate = useNavigate();

    const handleViewJob = (jobId) => {
        // Navigate to job details page
        navigate(`/company/jobs/${jobId}`);
    };

    const toggleJobStatus = (jobId) => {
        setJobs((prevJobs) =>
            prevJobs.map((job) =>
                job.id === jobId
                    ? { ...job, status: job.status === "Active" ? "Closed" : "Active" }
                    : job
            )
        );
    };

    return (
        <div className="container my-5">
            <h1 className="text-center text-primary mb-4">All Posted Jobs</h1>

            {/* Job Listings */}
            <div className="list-group">
                {jobs.length === 0 ? (
                    <p className="text-center text-muted">No jobs posted yet.</p>
                ) : (
                    jobs.map((job) => (
                        <div key={job.id} className="list-group-item p-4 border rounded-3 mb-3 shadow-sm">
                            <h3 className="h5 text-dark">{job.title}</h3>
                            <div className="d-flex text-muted mb-2">
                                <p className="d-flex align-items-center mr-3">
                                    <FaCalendarAlt className="me-1" />
                                    {job.postDate}
                                </p>
                                <p className="d-flex align-items-center">
                                    <FaUserTie className="me-1" />
                                    {job.location}
                                </p>
                            </div>
                            <p className={`mb-3 ${job.status === "Active" ? "text-success" : "text-danger"}`}>
                                <FaCheckCircle className="me-1" />
                                {job.status}
                            </p>

                            {/* Top Candidates Section */}
                            <div>
                                <h5 className="fw-semibold">Top Candidates:</h5>
                                <ul className="list-unstyled">
                                    {job.topCandidates.length > 0 ? (
                                        job.topCandidates.map((candidate, index) => (
                                            <li key={index} className="text-muted">{candidate}</li>
                                        ))
                                    ) : (
                                        <li className="text-muted">No top candidates yet.</li>
                                    )}
                                </ul>
                            </div>

                            {/* Job Details Button */}
                            <div className="d-flex justify-content-start mt-4">
                                <button
                                    onClick={() => handleViewJob(job.id)}
                                    className="btn btn-primary me-2"
                                >
                                    View Job Details
                                </button>
                                <button
                                    onClick={() => toggleJobStatus(job.id)}
                                    className={`btn ${job.status === "Active" ? "btn-danger" : "btn-success"}`}
                                >
                                    {job.status === "Active" ? "Close Job" : "Reopen Job"}
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllPostedJobs;
