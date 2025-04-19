import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentJobSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState(""); // New job type filter
    const [jobResults, setJobResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    // Dummy data for job search results
    const dummyJobs = [
        { title: "Frontend Developer", company: "TechCorp", location: "New York", type: "Full-time", description: "Develop front-end features using React" },
        { title: "Data Analyst", company: "Data Inc.", location: "San Francisco", type: "Part-time", description: "Analyze data sets to provide insights" },
        { title: "Backend Developer", company: "CodeWorks", location: "Remote", type: "Full-time", description: "Build APIs and backend services" },
        { title: "UX Designer", company: "DesignPlus", location: "Los Angeles", type: "Contract", description: "Create designs for a better user experience" },
        { title: "Product Manager", company: "Productify", location: "Chicago", type: "Full-time", description: "Oversee the development of new products" },
    ];

    // Handle search (you can later replace this with an API call)
    const handleSearch = () => {
        setIsLoading(true);
        setTimeout(() => { // Simulating network delay
            const filteredJobs = dummyJobs.filter((job) => {
                return (
                    (job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        job.company.toLowerCase().includes(searchQuery.toLowerCase())) &&
                    (job.location.toLowerCase().includes(location.toLowerCase()) || location === "") &&
                    (jobType ? job.type === jobType : true) // Filtering by job type
                );
            });
            setJobResults(filteredJobs);
            setIsLoading(false);
        }, 500);
    };

    return (
        <div className="container my-5">
            <h1 className="display-4 text-center mb-4 text-primary">Job Search</h1>

            {/* Search Filter Section */}
            <div className="card shadow-lg mb-4">
                <div className="card-body">
                    <h4 className="card-title mb-4">Search for Jobs</h4>
                    <div className="row g-3">
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by job title or company"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <select
                                className="form-select"
                                value={jobType}
                                onChange={(e) => setJobType(e.target.value)}
                            >
                                <option value="">Select Job Type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Remote">Remote</option>
                            </select>
                        </div>
                    </div>
                    <button
                        onClick={handleSearch}
                        className="btn btn-primary w-100 mt-4"
                    >
                        {isLoading ? "Searching..." : "Search Jobs"}
                    </button>
                </div>
            </div>

            {/* Search Results Section */}
            <h2 className="h4 mb-3 text-secondary">Job Results</h2>
            {isLoading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : jobResults.length > 0 ? (
                <div className="list-group">
                    {jobResults.map((job, index) => (
                        <div
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-3"
                        >
                            <div>
                                <h5 className="mb-1">{job.title}</h5>
                                <p className="mb-1">{job.company}</p>
                                <small className="text-muted">{job.location}</small>
                                <p className="text-muted mt-2">{job.description}</p>
                            </div>
                            <button
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => navigate(`/student/job-details/${job.title}`)}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="alert alert-warning">
                    No jobs found based on your search.
                </div>
            )}

            {/* Pagination Section (optional for larger datasets) */}
            {jobResults.length > 5 && (
                <div className="text-center mt-4">
                    <button className="btn btn-outline-primary rounded-pill">Load More</button>
                </div>
            )}
        </div>
    );
};

export default StudentJobSearch;
