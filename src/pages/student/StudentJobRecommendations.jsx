import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobRecommendations = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [jobRecommendations, setJobRecommendations] = useState([
        { title: "Frontend Developer", company: "TechCorp", location: "New York", tags: ["Full-time", "Remote"], description: "Build user-facing features with React and modern JS frameworks." },
        { title: "Data Analyst", company: "Data Inc.", location: "San Francisco", tags: ["Part-time", "On-site"], description: "Analyze and interpret complex data sets for business decisions." },
        { title: "Backend Developer", company: "CodeWorks", location: "Remote", tags: ["Full-time", "Remote"], description: "Develop APIs and work with databases to support frontend systems." },
        { title: "UX Designer", company: "DesignPlus", location: "Los Angeles", tags: ["Contract", "Remote"], description: "Create intuitive user experiences through design tools and research." },
        { title: "Product Manager", company: "Productify", location: "Chicago", tags: ["Full-time", "On-site"], description: "Oversee the development process of new products, working with cross-functional teams." },
    ]);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredJobs = jobRecommendations.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container my-5">
            {/* Hero Section */}
            <div className="text-center mb-5">
                <h1 className="display-4 text-dark">Find Your Perfect Job</h1>
                <p className="lead text-muted">Explore top job recommendations and take the next step in your career.</p>
            </div>

            {/* Search Bar */}
            <div className="input-group mb-4">
                <input
                    type="text"
                    className="form-control border-2 rounded-pill"
                    placeholder="Search for a job title or company"
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <button className="btn btn-primary rounded-pill ms-2">
                    <i className="bi bi-search"></i> Search
                </button>
            </div>

            {/* Job Recommendations */}
            <h2 className="mb-4 text-center text-dark">Top Job Recommendations</h2>

            {/* Filter Section (Optional) */}
            <div className="d-flex justify-content-center mb-4">
                <button className="btn btn-outline-info me-3">Full-time</button>
                <button className="btn btn-outline-info me-3">Remote</button>
                <button className="btn btn-outline-info">On-site</button>
            </div>

            <div className="row g-4">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, index) => (
                        <div className="col-md-4 col-sm-6" key={index}>
                            <div className="card shadow-sm border-0 rounded-3 h-100 transition-all duration-300 hover:shadow-lg">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-primary">{job.title}</h5>
                                    <p className="card-text text-muted mb-2">
                                        <strong>{job.company}</strong>
                                    </p>
                                    <p className="text-muted mb-4">{job.location}</p>

                                    {/* Job Description */}
                                    <p className="text-muted mb-4">{job.description}</p>

                                    {/* Tags */}
                                    <div className="d-flex flex-wrap mb-4">
                                        {job.tags.map((tag, idx) => (
                                            <span key={idx} className="badge bg-info text-white me-2 mb-2">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

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
                    ))
                ) : (
                    <p className="text-center text-muted">No jobs found based on your search.</p>
                )}
            </div>

            {/* Pagination / Load More */}
            {filteredJobs.length > 3 && (
                <div className="text-center mt-4">
                    <button className="btn btn-outline-primary rounded-pill">Load More</button>
                </div>
            )}
        </div>
    );
};

export default JobRecommendations;
