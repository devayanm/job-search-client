import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanyProfile = () => {
    const [companyName, setCompanyName] = useState("Tech Corp");
    const [email, setEmail] = useState("contact@techcorp.com");
    const [description, setDescription] = useState("We are a leading tech company.");
    const [isSaving, setIsSaving] = useState(false);
    const navigate = useNavigate();

    const handleSaveProfile = () => {
        setIsSaving(true);

        // Simulate saving the profile (this can be replaced with an API call)
        setTimeout(() => {
            alert("Profile updated successfully!");
            setIsSaving(false);
            navigate("/company/dashboard"); // Redirect to company dashboard after saving
        }, 1000);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center text-primary mb-4">Company Profile</h1>

            {/* Profile Form */}
            <div className="card shadow-sm p-4">
                <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        className="form-control"
                        placeholder="Enter company name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter company email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        id="description"
                        className="form-control"
                        rows="4"
                        placeholder="Enter company description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <button
                    onClick={handleSaveProfile}
                    className={`btn btn-primary w-100 ${isSaving ? "opacity-50" : ""}`}
                    disabled={isSaving}
                >
                    {isSaving ? "Saving..." : "Save Profile"}
                </button>
            </div>
        </div>
    );
};

export default CompanyProfile;
