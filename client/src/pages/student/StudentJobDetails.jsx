import { useParams } from "react-router-dom";
import { useState } from "react";

const StudentJobDetails = () => {
    const { jobId } = useParams(); // Get jobId from URL params

    // Dummy job data (replace this with API call)
    const dummyJobs = [
        {
            title: "Frontend Developer",
            company: "TechCorp",
            location: "New York",
            description:
                "We are looking for a skilled frontend developer to join our team. The ideal candidate should have experience with React, JavaScript, and CSS.",
            requirements: [
                "Experience with React.js",
                "Proficient in JavaScript and CSS",
                "Good understanding of web performance",
            ],
        },
        {
            title: "Data Analyst",
            company: "Data Inc.",
            location: "San Francisco",
            description:
                "As a data analyst, you will be responsible for analyzing large datasets and creating reports for business insights.",
            requirements: [
                "Strong knowledge of SQL and Excel",
                "Experience with data visualization tools (Tableau, Power BI)",
                "Analytical and problem-solving skills",
            ],
        },
        {
            title: "Backend Developer",
            company: "CodeWorks",
            location: "Remote",
            description:
                "We are seeking a backend developer to work on our API services, managing database connections and business logic.",
            requirements: [
                "Experience with Node.js and Express",
                "Familiarity with databases (MongoDB, PostgreSQL)",
                "Strong knowledge of RESTful APIs",
            ],
        },
    ];

    // Find the job using jobId from URL
    const job = dummyJobs.find((j) => j.title === jobId);

    if (!job) {
        return <p className="text-center text-red-600 font-semibold">Job not found.</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            {/* Job Title & Company */}
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{job.title}</h1>
                <p className="text-xl text-gray-600 mb-4">{job.company}</p>
                <p className="text-lg text-gray-500">{job.location}</p>
            </div>

            {/* Job Description */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Description</h2>
                <p className="text-gray-700">{job.description}</p>
            </div>

            {/* Job Requirements */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Requirements</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
            </div>

            {/* Apply Button */}
            <div className="mt-8">
                <button className="w-full bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default StudentJobDetails;
