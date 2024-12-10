import React from 'react';
import { Container, Typography, Grid, Paper, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PersonIcon from '@mui/icons-material/Person';

const Dashboard = () => {
    const user = {
        name: 'John Doe', // Example user name
        role: 'student', // Example role
    };

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    const ActionCard = ({ title, description, link, icon: Icon, color }) => (
        <Grid item xs={12} sm={6} md={4}>
            <Paper
                elevation={4}
                sx={{
                    p: 3,
                    textAlign: 'center',
                    borderRadius: 2,
                    backgroundImage: `linear-gradient(135deg, ${color}33 0%, ${color}11 100%)`,
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: `0px 6px 25px ${color}`,
                        transition: 'transform 0.3s ease',
                    },
                }}
            >
                <Box sx={{ mb: 2 }}>
                    <Icon sx={{ fontSize: 50, color }} />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                    {description}
                </Typography>
                <Button
                    component={Link}
                    to={link}
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: color,
                        color: '#fff',
                        fontWeight: 'bold',
                        '&:hover': { backgroundColor: `${color}AA` },
                    }}
                >
                    Explore
                </Button>
            </Paper>
        </Grid>
    );

    return (
        <Container sx={{ py: 5 }}>
            {/* Greeting Section */}
            <Box sx={{ textAlign: 'center', mb: 5 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                    {getGreeting()}, {user?.name || 'User'}!
                </Typography>
                <Typography variant="h6" paragraph sx={{ color: 'text.secondary' }}>
                    Welcome to your dashboard. Select an option to get started:
                </Typography>
            </Box>

            {/* Dashboard Content */}
            <Grid container spacing={4}>
                <ActionCard
                    title="Job Recommendations"
                    description="Discover personalized job opportunities."
                    link="/student/recommendations"
                    icon={WorkIcon}
                    color="#007BFF"
                />
                <ActionCard
                    title="Applications"
                    description="Track your job application statuses."
                    link="/student/applications"
                    icon={AssignmentTurnedInIcon}
                    color="#FF5722"
                />
                <ActionCard
                    title="My Profile"
                    description="Update your personal information and settings."
                    link="/student/profile"
                    icon={PersonIcon}
                    color="#4CAF50"
                />
                <ActionCard
                    title="Upcoming Events"
                    description="Check out upcoming career events."
                    link="/student/events"
                    icon={AccessTimeIcon}
                    color="#673AB7"
                />
            </Grid>

            {/* Footer */}
            <Box sx={{ mt: 6, textAlign: 'center', color: 'text.secondary' }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    © 2024 JobConnect+. Empowering Careers with Technology.
                </Typography>
            </Box>
        </Container>
    );
};

export default Dashboard;
