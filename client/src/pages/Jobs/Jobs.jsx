import React, { useEffect, useState } from 'react';
import JobCard from '../../components/JobCard/JobCard';
import { fetchJobs } from '../../services/api';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch job postings from the API using the fetchJobs function
        const fetchJobListings = async () => {
            try {
                const response = await fetchJobs(); // Fetch job listings
                setJobs(response.data); // Set the job data
                setLoading(false); // Turn off loading
            } catch (err) {
                setError('Error fetching jobs'); // Handle error
                setLoading(false); // Turn off loading
            }
        };

        fetchJobListings();
    }, []);

    return (
        <div>
            <h2>Job Listings</h2>
            {loading && <p>Loading...</p>} {/* Show loading state */}
            {error && <p>{error}</p>} {/* Show error message if any */}
            {jobs.length === 0 && !loading ? (
                <p>No jobs available</p>
            ) : (
                jobs.map((job) => <JobCard key={job.id} job={job} />)
            )}
        </div>
    );
};

export default Jobs;
