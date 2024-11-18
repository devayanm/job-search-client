import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../../services/api';

const Profile = () => {
    const user = useSelector((state) => state.auth.user);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (user) {
            getUserProfile(user.id)
                .then((response) => setFormData(response.data))
                .catch((error) => console.error('Error fetching profile:', error));
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        updateUserProfile(user.id, formData)
            .then(() => {
                alert('Profile updated successfully!');
                setIsEditing(false);
            })
            .catch((error) => console.error('Error updating profile:', error));
    };

    return (
        <div>
            <h2>Profile</h2>
            {!isEditing ? (
                <div>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Location:</strong> {formData.location}</p>
                    <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Location:</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            )}
        </div>
    );
};

export default Profile;
