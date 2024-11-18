import React from 'react';
import { Button, Container, Typography, Grid, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            {/* Welcome Header */}
            <Typography
                variant="h4"
                component="h1"
                sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}
            >
                Welcome Back to JobConnect+
            </Typography>
            <Typography
                variant="h6"
                paragraph
                sx={{ textAlign: 'center', mb: 6 }}
            >
                Discover new opportunities, manage your applications, and track your progress—all in one place.
            </Typography>

            {/* Dashboard Quick Actions */}
            <Grid container spacing={4} sx={{ mb: 6 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            textAlign: 'center',
                            backgroundColor: '#f5f5f5',
                            '&:hover': { boxShadow: 6 },
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            Job Listings
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Explore the latest job openings and apply directly.
                        </Typography>
                        <Button
                            component={Link}
                            to="/jobs"
                            variant="contained"
                            color="primary"
                        >
                            Explore
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            textAlign: 'center',
                            backgroundColor: '#f5f5f5',
                            '&:hover': { boxShadow: 6 },
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            Recommendations
                        </Typography>
                        <Typography variant="body2" paragraph>
                            See jobs tailored to your skills and preferences.
                        </Typography>
                        <Button
                            component={Link}
                            to="/recommendations"
                            variant="contained"
                            color="secondary"
                        >
                            View
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            textAlign: 'center',
                            backgroundColor: '#f5f5f5',
                            '&:hover': { boxShadow: 6 },
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            My Applications
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Track the status of your job applications.
                        </Typography>
                        <Button
                            component={Link}
                            to="/applications"
                            variant="contained"
                            color="success"
                        >
                            Track
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            textAlign: 'center',
                            backgroundColor: '#f5f5f5',
                            '&:hover': { boxShadow: 6 },
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            Profile
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Update your profile and preferences.
                        </Typography>
                        <Button
                            component={Link}
                            to="/profile"
                            variant="contained"
                            color="info"
                        >
                            Manage
                        </Button>
                    </Paper>
                </Grid>
            </Grid>

            {/* Insights and Stats */}
            <Typography variant="h5" sx={{ mb: 3 }}>
                Platform Insights
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            backgroundColor: '#e8f5e9',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Jobs Available
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            150+
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            backgroundColor: '#e3f2fd',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Active Users
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            10,000+
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Footer */}
            <Box
                sx={{
                    mt: 8,
                    textAlign: 'center',
                    color: 'gray',
                }}
            >
                <Typography variant="body2">
                    © 2024 JobConnect+. Helping you connect with opportunities that matter.
                </Typography>
            </Box>
        </Container>
    );
};

export default Homepage;
