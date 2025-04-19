import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("");
    const [salary, setSalary] = useState("");
    const [isPosting, setIsPosting] = useState(false);
    const navigate = useNavigate();

    const handlePostJob = () => {
        setIsPosting(true);

        // Simulate posting the job (this can be replaced with an API call)
        setTimeout(() => {
            alert("Job posted successfully!");
            setIsPosting(false);
            navigate("/company/jobs"); // Redirect to posted jobs list after posting
        }, 1000);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center text-primary mb-4">Post a New Job</h1>

            {/* Job Form */}
            <div className="card shadow-sm p-4">
                <div className="mb-3">
                    <label htmlFor="jobTitle" className="form-label">Job Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        className="form-control"
                        placeholder="Enter job title"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="jobDescription" className="form-label">Job Description</label>
                    <textarea
                        id="jobDescription"
                        className="form-control"
                        rows="4"
                        placeholder="Enter job description"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input
                        type="text"
                        id="location"
                        className="form-control"
                        placeholder="Enter job location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="jobType" className="form-label">Job Type</label>
                    <select
                        id="jobType"
                        className="form-select"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    >
                        <option value="">Select job type</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="internship">Internship</option>
                        <option value="contract">Contract</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input
                        type="number"
                        id="salary"
                        className="form-control"
                        placeholder="Enter job salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    />
                </div>

                <button
                    onClick={handlePostJob}
                    className={`btn btn-success w-100 ${isPosting ? "opacity-50" : ""}`}
                    disabled={isPosting}
                >
                    {isPosting ? "Posting..." : "Post Job"}
                </button>
            </div>
        </div>
    );
};

export default PostJob;
