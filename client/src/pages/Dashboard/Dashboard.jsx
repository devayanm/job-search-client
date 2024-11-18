import React from 'react';
import { Container, Typography, Grid, Paper, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming user info is stored in Redux
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';

const Dashboard = () => {
    const user = useSelector((state) => state.user); // Accessing user info from Redux

    // Function to return dynamic greeting based on the time of day
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    // Reusable card component for cleaner code
    const ActionCard = ({ title, description, link, icon: Icon, color }) => (
        <Grid item xs={12} sm={6} md={4}>
            <Paper
                elevation={4}
                sx={{
                    p: 3,
                    textAlign: 'center',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: `0px 4px 20px ${color}`,
                        transition: 'transform 0.3s ease',
                    },
                }}
            >
                <Box sx={{ mb: 2 }}>
                    <Icon sx={{ fontSize: 40, color }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    {description}
                </Typography>
                <Button
                    component={Link}
                    to={link}
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: color,
                        '&:hover': { backgroundColor: `${color}AA` },
                    }}
                >
                    Explore
                </Button>
            </Paper>
        </Grid>
    );

    // Role-specific dashboard sections
    const renderAdminDashboard = () => (
        <Grid container spacing={4}>
            <ActionCard
                title="Manage Students"
                description="View and manage all registered students."
                link="/admin/students"
                icon={PeopleIcon}
                color="#007BFF"
            />
            <ActionCard
                title="Manage Jobs"
                description="Manage job postings and opportunities."
                link="/admin/jobs"
                icon={WorkIcon}
                color="#FF5722"
            />
            <ActionCard
                title="Reports"
                description="View system reports and analytics."
                link="/admin/reports"
                icon={AssignmentTurnedInIcon}
                color="#4CAF50"
            />
        </Grid>
    );

    const renderTPODashboard = () => (
        <Grid container spacing={4}>
            <ActionCard
                title="Upcoming Drives"
                description="View and manage upcoming placement drives."
                link="/tpo/upcoming-drives"
                icon={AccessTimeIcon}
                color="#007BFF"
            />
            <ActionCard
                title="Student Applications"
                description="Track and evaluate student applications."
                link="/tpo/student-applications"
                icon={SchoolIcon}
                color="#FF5722"
            />
            <ActionCard
                title="Manage Students"
                description="Oversee student records and performance."
                link="/tpo/manage-students"
                icon={PeopleIcon}
                color="#4CAF50"
            />
        </Grid>
    );

    const renderStudentDashboard = () => (
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
        </Grid>
    );

    return (
        <Container sx={{ py: 5 }}>
            {/* Greeting Section */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                {getGreeting()}, {user?.name || 'User'}!
            </Typography>
            <Typography variant="h6" paragraph>
                Welcome to your dashboard. Select an option to get started:
            </Typography>

            {/* Role-specific content */}
            {user?.role === 'admin' && renderAdminDashboard()}
            {user?.role === 'tpo' && renderTPODashboard()}
            {user?.role === 'student' && renderStudentDashboard()}

            {/* Footer */}
            <Box sx={{ mt: 6, textAlign: 'center', color: 'gray' }}>
                <Typography variant="body2">
                    © 2024 JobConnect+. Empowering Careers with Technology.
                </Typography>
            </Box>
        </Container>
    );
};

export default Dashboard;
