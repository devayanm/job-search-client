import { useState, useEffect } from "react";
import { getTPOProfile, updateTPOProfile } from "../../api/profileApi";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const TpoAdminProfile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const tpoId = user.id;

    const [profile, setProfile] = useState({});
    const [formData, setFormData] = useState({});
    const [editing, setEditing] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [loading, setLoading] = useState(true);
    const avatarUrl = `https://ui-avatars.com/api/?name=${profile.first_name || "TPO"}+${profile.last_name || "Admin"}&background=0D8ABC&color=fff&size=128`;

    const fetchProfile = async () => {
        try {
            const data = await getTPOProfile(tpoId);
            setProfile(data);
            setFormData(data);
        } catch (err) {
            console.error("Error fetching TPO profile:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            await updateTPOProfile(tpoId, formData);
            setEditing(false);
            fetchProfile();
            alert("Profile updated successfully!");
        } catch (err) {
            alert(err?.message || "Failed to update profile.");
        }
    };

    return loading ? (
        <div className="text-center my-5">Loading...</div>
    ) : (
        <div className="container mt-5">
            <div className="row g-4">
                {/* Profile Sidebar */}
                <div className="col-md-4 text-center">
                    <img src={avatarUrl} className="img-thumbnail rounded-circle mb-3" alt="Profile" width="150" />
                    <h4>{profile.first_name} {profile.last_name}</h4>
                    <span className="badge bg-success">Active</span>
                    <p className="text-muted">{profile.college}</p>

                    <button className="btn btn-outline-danger mt-3" data-bs-toggle="modal" data-bs-target="#deleteModal">
                        Delete Account
                    </button>
                </div>

                {/* Profile Content */}
                <div className="col-md-8">
                    <ul className="nav nav-tabs mb-3" id="profileTab" role="tablist">
                        <li className="nav-item"><button className="nav-link active" data-bs-toggle="tab" data-bs-target="#overview">Overview</button></li>
                        <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#edit">Edit Profile</button></li>
                        <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#logs">Activity Logs</button></li>
                        <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#settings">Settings</button></li>
                    </ul>

                    <div className="tab-content">
                        {/* Overview Tab */}
                        <div className="tab-pane fade show active" id="overview">
                            <p><strong>Email:</strong> {profile.user?.email}</p>
                            <p><strong>Phone:</strong> {profile.phone_number || "N/A"}</p>
                            <p><strong>College:</strong> {profile.college}</p>
                            <p><strong>Joined:</strong> {new Date(profile.user?.date_joined).toLocaleDateString()}</p>
                            <p><strong>Last Updated:</strong> {new Date(profile?.updated_at || new Date()).toLocaleString()}</p>
                        </div>

                        {/* Edit Profile Tab */}
                        <div className="tab-pane fade" id="edit">
                            {/* Put your existing editing form here */}
                        </div>

                        {/* Logs Tab */}
                        <div className="tab-pane fade" id="logs">
                            <ul className="list-group">
                                <li className="list-group-item">Logged in from IP 192.168.0.2</li>
                                <li className="list-group-item">Changed password 3 days ago</li>
                                <li className="list-group-item">Updated profile info 1 week ago</li>
                            </ul>
                        </div>

                        {/* Settings Tab */}
                        <div className="tab-pane fade" id="settings">
                            <div className="form-check form-switch mb-3">
                                <input className="form-check-input" type="checkbox" id="accountActive" checked readOnly />
                                <label className="form-check-label" htmlFor="accountActive">Account is Active</label>
                            </div>
                            <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#changePasswordModal">Change Password</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Change Password Modal */}
            <div className="modal fade" id="changePasswordModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Change Password</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        <div className="modal-body">
                            <input type="password" className="form-control mb-3" placeholder="New Password" />
                            <input type="password" className="form-control" placeholder="Confirm Password" />
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Account Modal */}
            <div className="modal fade" id="deleteModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-danger text-white">
                            <h5 className="modal-title">Confirm Account Deletion</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to permanently delete your account? This action cannot be undone.
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TpoAdminProfile;
