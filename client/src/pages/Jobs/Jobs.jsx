import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../store/slices/jobSlice';
import JobCard from '../../components/JobCard/JobCard';
import { CircularProgress, Alert, Box, Typography } from '@mui/material';

const Jobs = () => {
    const dispatch = useDispatch();
    const { jobs, status, error } = useSelector((state) => state.jobs);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchJobs());
        }
    }, [dispatch, status]);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Job Listings
            </Typography>

            {status === 'loading' && (
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 5 }}>
                    <CircularProgress />
                </Box>
            )}

            {status === 'failed' && (
                <Alert severity="error" sx={{ mt: 2 }}>
                    {error || 'An unexpected error occurred while fetching jobs.'}
                </Alert>
            )}

            {status === 'succeeded' && jobs.length === 0 && (
                <Box
                    sx={{
                        mt: 4,
                        p: 3,
                        textAlign: 'center',
                        border: '1px dashed #ccc',
                        borderRadius: '8px',
                    }}
                >
                    <Typography variant="h6" color="textSecondary">
                        No jobs available at the moment.
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Check back later for updates.
                    </Typography>
                </Box>
            )}

            {status === 'succeeded' && jobs.length > 0 && (
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                    gap={3}
                    sx={{ mt: 3 }}
                >
                    {jobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default Jobs;
