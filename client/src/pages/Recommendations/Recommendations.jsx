import React, { useEffect, useState } from 'react';
import { Grid, Box, CircularProgress, Typography, Paper } from '@mui/material';
import JobCard from '../../components/JobCard/JobCard';
import { ErrorOutline } from '@mui/icons-material';

const Recommendations = () => {
    const [recommendedJobs, setRecommendedJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = 1;  // Replace with actual user ID if dynamic

    // Dummy Data for fallback
    const dummyJobs = [
        {
            id: 1,
            title: 'Software Developer',
            company: 'TechCorp',
            description: 'Develop software solutions and maintain existing applications.',
            location: 'New York, NY',
            salary: '90K - 120K',
            tags: ['Full-time', 'Remote', 'Mid-level'],
            rating: 4.5,
        },
        {
            id: 2,
            title: 'Front-End Developer',
            company: 'WebSolutions',
            description: 'Build responsive and dynamic web applications.',
            location: 'San Francisco, CA',
            salary: '80K - 110K',
            tags: ['Full-time', 'Hybrid', 'Junior'],
            rating: 4.2,
        },
        {
            id: 3,
            title: 'Data Scientist',
            company: 'DataTech',
            description: 'Analyze large datasets to extract insights and build predictive models.',
            location: 'Remote',
            salary: '100K - 140K',
            tags: ['Full-time', 'Remote', 'Senior'],
            rating: 4.8,
        }
    ];

    // Placeholder for the real API call (to be used when backend is ready)
    // const fetchRecommendations = async () => {
    //     try {
    //         const response = await jobAPI.fetchRecommendations(userId);
    //         setRecommendedJobs(response.data);
    //         setLoading(false);
    //     } catch (error) {
    //         console.error('Error fetching recommendations:', error);
    //         setError('Failed to load recommendations');
    //         setLoading(false);
    //     }
    // };

    // Dummy data logic - Replace with the real logic when the backend is ready
    useEffect(() => {
        setLoading(false);  // Set loading to false immediately as we are using dummy data
        setError(null);  // Clear any previous errors

        // Simulating a successful response with dummy data
        setRecommendedJobs(dummyJobs);
    }, []);

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                Recommended Jobs
            </Typography>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Box sx={{ textAlign: 'center', color: 'error.main' }}>
                    <ErrorOutline sx={{ fontSize: 60 }} />
                    <Typography variant="h6">{error}</Typography>
                </Box>
            ) : (
                <Grid container spacing={3}>
                    {recommendedJobs.length === 0 ? (
                        <Typography variant="h6" color="textSecondary">
                            No recommendations available
                        </Typography>
                    ) : (
                        recommendedJobs.map((job) => (
                            <Grid item xs={12} sm={6} md={4} key={job.id}>
                                <JobCard job={job} />
                            </Grid>
                        ))
                    )}
                </Grid>
            )}
        </Box>
    );
};

export default Recommendations;
