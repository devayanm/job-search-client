import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CampusJobs = () => {
    const [campusJobs, setCampusJobs] = useState([
        { title: "Software Engineer", company: "Google", location: "On-Campus", type: "Full-time", description: "Develop cutting-edge software solutions and applications." },
        { title: "Data Scientist", company: "Amazon", location: "On-Campus", type: "Internship", description: "Work on big data sets and learn new data technologies." },
        { title: "UX Designer", company: "Facebook", location: "On-Campus", type: "Part-time", description: "Design user-friendly interfaces and improve user experience." },
        { title: "Web Developer", company: "Microsoft", location: "On-Campus", type: "Full-time", description: "Build and maintain websites with modern technologies." },
        { title: "Mobile Developer", company: "Apple", location: "On-Campus", type: "Part-time", description: "Create innovative mobile applications for iOS." },
    ]);
    const [searchQuery, setSearchQuery] = useState("");
    const [jobType, setJobType] = useState("");
    const [filteredJobs, setFilteredJobs] = useState(campusJobs);
    const navigate = useNavigate();

    // Filter Jobs based on search and job type
    const handleSearch = () => {
        const filtered = campusJobs.filter((job) => {
            return (
                (job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    job.company.toLowerCase().includes(searchQuery.toLowerCase())) &&
                (job.type.toLowerCase().includes(jobType.toLowerCase()) || jobType === "")
            );
        });
        setFilteredJobs(filtered);
    };

    return (
        <div className="container my-5">
            {/* Hero Section */}
            <div className="text-center mb-5">
                <h1 className="display-4 text-dark">Explore On-Campus Jobs</h1>
                <p className="lead text-muted">Find the perfect on-campus job opportunity to enhance your skills and career.</p>
            </div>

            {/* Job Search Section */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by job title or company"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <select
                        className="form-select"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    >
                        <option value="">All Job Types</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="internship">Internship</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <button
                        onClick={handleSearch}
                        className="btn btn-primary w-100"
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Display Total Number of Jobs */}
            <div className="text-center mb-4">
                <p className="text-muted">
                    <strong>{filteredJobs.length}</strong> Job{filteredJobs.length !== 1 && "s"} found
                </p>
            </div>

            {/* Featured Jobs Section */}
            <div className="text-center mb-4">
                <h2 className="h4 text-primary">Featured Jobs</h2>
            </div>

            {/* Job Listings */}
            <div className="row g-4">
                {filteredJobs.map((job, index) => (
                    <div className="col-md-4 col-sm-6" key={index}>
                        <div className="card shadow-sm border-0 rounded-3 h-100 transition-all duration-300 hover:shadow-lg">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-primary">{job.title}</h5>
                                <p className="card-text text-muted mb-2">
                                    <strong>{job.company}</strong>
                                </p>
                                <p className="text-muted mb-2">{job.location}</p>
                                <p className="card-text text-muted">{job.description}</p>

                                {/* Job Type Tag */}
                                <span className="badge bg-info text-white mb-3">{job.type}</span>

                                <div className="mt-auto">
                                    <button
                                        onClick={() => navigate(`/student/job-details/${index}`)}
                                        className="btn btn-outline-primary w-100 rounded-pill"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <nav className="mt-5">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item active">
                        <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                        <span className="page-link">2</span>
                    </li>
                    <li className="page-item">
                        <span className="page-link">Next</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default CampusJobs;
