import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userAPI } from '../../services/api';
import { TextField, Button, CircularProgress, Alert, Box, Typography } from '@mui/material';

const Profile = () => {
    const user = useSelector((state) => state.auth.user);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            setLoading(true);
            userAPI
                .getProfile(user.id)
                .then((response) => setFormData(response.data))
                .catch((err) => setError('Error fetching profile: ' + err.message))
                .finally(() => setLoading(false));
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.location) {
            setError('All fields are required.');
            return;
        }

        setLoading(true);
        userAPI
            .updateProfile(user.id, formData)
            .then(() => {
                alert('Profile updated successfully!');
                setIsEditing(false);
                setError(null);
            })
            .catch((err) => setError('Error updating profile: ' + err.message))
            .finally(() => setLoading(false));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Profile
            </Typography>

            {loading && (
                <Box display="flex" justifyContent="center" sx={{ my: 3 }}>
                    <CircularProgress />
                </Box>
            )}

            {error && (
                <Alert severity="error" sx={{ my: 2 }}>
                    {error}
                </Alert>
            )}

            {!isEditing ? (
                <Box>
                    <Typography variant="body1" sx={{ my: 1 }}>
                        <strong>Name:</strong> {formData.name}
                    </Typography>
                    <Typography variant="body1" sx={{ my: 1 }}>
                        <strong>Email:</strong> {formData.email}
                    </Typography>
                    <Typography variant="body1" sx={{ my: 1 }}>
                        <strong>Location:</strong> {formData.location}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => setIsEditing(true)}
                        sx={{ mt: 2 }}
                    >
                        Edit Profile
                    </Button>
                </Box>
            ) : (
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="email"
                    />
                    <TextField
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Box display="flex" gap={2} sx={{ mt: 3 }}>
                        <Button type="submit" variant="contained" color="primary">
                            Save
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </Button>
                    </Box>
                </form>
            )}
        </Box>
    );
};

export default Profile;
