import React, { useEffect, useState } from 'react';
import { fetchJobRecommendations } from '../services/api';
import JobCard from '../components/JobCard/JobCard';

const Recommendations = () => {
    const [recommendedJobs, setRecommendedJobs] = useState([]);

    useEffect(() => {
        fetchJobRecommendations()
            .then((response) => setRecommendedJobs(response.data))
            .catch((error) => console.error('Error fetching recommendations:', error));
    }, []);

    return (
        <div>
            <h2>Recommended Jobs</h2>
            {recommendedJobs.length === 0 ? (
                <p>No recommendations available</p>
            ) : (
                recommendedJobs.map((job) => <JobCard key={job.id} job={job} />)
            )}
        </div>
    );
};

export default Recommendations;
