import React from 'react';
import { Button, Container, Typography, Grid, Box } from '@mui/material';

const LandingPage = () => {
    return (
        <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
            {/* Header Section */}
            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 'bold', mb: 3 }}
            >
                Welcome to JobConnect+
            </Typography>
            <Typography variant="h6" paragraph sx={{ mb: 5 }}>
                Empowering talent to find the right opportunities through advanced matching, seamless communication, and insightful metrics.
            </Typography>

            {/* Core Features Section */}
            <Grid container spacing={4} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={4}>
                    <Box
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            backgroundColor: '#f5f5f5',
                            boxShadow: 3,
                            transition: 'transform 0.3s',
                            '&:hover': { transform: 'scale(1.05)' },
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            🎯 Personalized Job Recommendations
                        </Typography>
                        <Typography variant="body1">
                            Harness AI-powered algorithms to match your profile with the best job opportunities tailored to your skills.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            backgroundColor: '#f5f5f5',
                            boxShadow: 3,
                            transition: 'transform 0.3s',
                            '&:hover': { transform: 'scale(1.05)' },
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            💼 Seamless Placement Drives
                        </Typography>
                        <Typography variant="body1">
                            Facilitate recruitment with automated filtering, bulk notifications, and a user-friendly dashboard for TPOs.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            backgroundColor: '#f5f5f5',
                            boxShadow: 3,
                            transition: 'transform 0.3s',
                            '&:hover': { transform: 'scale(1.05)' },
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            📊 Performance Metrics
                        </Typography>
                        <Typography variant="body1">
                            Leverage insights and analytics to make data-driven decisions and improve placement outcomes.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Call to Action */}
            <Box sx={{ mt: 6 }}>
                <Typography variant="h6" gutterBottom>
                    Ready to get started?
                </Typography>
                <Typography variant="body1" paragraph>
                    Create an account or log in to access personalized recommendations, explore job opportunities, and streamline recruitment.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ fontWeight: 'bold', px: 4 }}
                    >
                        Sign Up
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        sx={{ fontWeight: 'bold', px: 4 }}
                    >
                        Log In
                    </Button>
                </Box>
            </Box>

            {/* Footer Section */}
            <Box sx={{ mt: 10, color: 'gray' }}>
                <Typography variant="body2">
                    © 2024 JobConnect+. All rights reserved.
                </Typography>
            </Box>
        </Container>
    );
};

export default LandingPage;
