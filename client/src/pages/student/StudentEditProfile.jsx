import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { getStudentProfile, updateStudentProfile } from "../../api/profileApi";

const EditProfile = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [profileData, setProfileData] = useState({
        first_name: "",
        last_name: "",
        profile_summary: "",
        cgpa: "",
        degree: "",
        branch: "",
        college: "",
        resume_url: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                if (user?.role === "student") {
                    const data = await getStudentProfile(user.id);
                    setProfileData({
                        first_name: data.first_name || "",
                        last_name: data.last_name || "",
                        profile_summary: data.profile_summary || "",
                        cgpa: data.cgpa || "",
                        degree: data.degree || "",
                        branch: data.branch || "",
                        college: data.college || "",
                        resume_url: data.resume_url || "",
                    });
                }
            } catch (error) {
                console.error("Failed to fetch profile data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors(null);

        const updatedProfileData = {
            ...profileData,
            user: user.id,
        };

        try {
            if (user?.role === "student") {
                const updatedData = await updateStudentProfile(user.id, updatedProfileData);
                console.log("Profile updated successfully:", updatedData);
            }
        } catch (error) {
            setErrors(error?.response?.data || { message: "Profile update failed" });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h1 className="text-center text-primary mb-4 font-weight-bold">Edit Profile</h1>

            {errors && (
                <div className="alert alert-danger" role="alert">
                    {errors.message || "Something went wrong"}
                </div>
            )}

            <form onSubmit={handleSubmit} className="card shadow-sm border-0 rounded-3 p-4 bg-light">
                {/* First Name and Last Name */}
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="form-control"
                        value={profileData.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        className="form-control"
                        value={profileData.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Profile Summary */}
                <div className="mb-3">
                    <label htmlFor="profile_summary" className="form-label">
                        Profile Summary
                    </label>
                    <textarea
                        id="profile_summary"
                        name="profile_summary"
                        className="form-control"
                        value={profileData.profile_summary}
                        onChange={handleChange}
                        rows="4"
                    ></textarea>
                </div>

                {/* CGPA, Degree, Branch, College */}
                <div className="row">
                    <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="cgpa" className="form-label">
                                CGPA
                            </label>
                            <input
                                type="number"
                                id="cgpa"
                                name="cgpa"
                                className="form-control"
                                value={profileData.cgpa}
                                onChange={handleChange}
                                step="0.01"
                                max="10"
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="degree" className="form-label">
                                Degree
                            </label>
                            <input
                                type="text"
                                id="degree"
                                name="degree"
                                className="form-control"
                                value={profileData.degree}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="branch" className="form-label">
                                Branch
                            </label>
                            <input
                                type="text"
                                id="branch"
                                name="branch"
                                className="form-control"
                                value={profileData.branch}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="college" className="form-label">
                                College
                            </label>
                            <input
                                type="text"
                                id="college"
                                name="college"
                                className="form-control"
                                value={profileData.college}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Resume URL */}
                <div className="mb-3">
                    <label htmlFor="resume_url" className="form-label">
                        Resume URL
                    </label>
                    <input
                        type="url"
                        id="resume_url"
                        name="resume_url"
                        className="form-control"
                        value={profileData.resume_url}
                        onChange={handleChange}
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <div className="spinner-border spinner-border-sm" role="status">
                                <span className="visually-hidden">Submitting...</span>
                            </div>
                        ) : (
                            "Save Changes"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
