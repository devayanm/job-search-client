import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TpoAdminProfile = () => {
    const [name, setName] = useState("TPO Admin");
    const [email, setEmail] = useState("tpo.admin@example.com");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const navigate = useNavigate();

    const handleSaveProfile = () => {
        // Validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        setIsSaving(true);

        // Simulate saving profile (this can be replaced with an API call)
        setTimeout(() => {
            alert("Profile updated successfully!");
            setIsSaving(false);
            navigate("/tpo/dashboard"); // Redirect to the dashboard after saving
        }, 1000);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">TPO Admin Profile</h1>

            {/* Profile Form */}
            <div className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-lg font-semibold">Name</label>
                    <input
                        type="text"
                        className="w-full p-3 border rounded mt-2"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-semibold">Email</label>
                    <input
                        type="email"
                        className="w-full p-3 border rounded mt-2"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-semibold">Password</label>
                    <input
                        type="password"
                        className="w-full p-3 border rounded mt-2"
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-semibold">Confirm Password</label>
                    <input
                        type="password"
                        className="w-full p-3 border rounded mt-2"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button
                    onClick={handleSaveProfile}
                    className={`w-full bg-blue-600 text-white p-3 rounded ${isSaving ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={isSaving}
                >
                    {isSaving ? "Saving..." : "Save Profile"}
                </button>
            </div>
        </div>
    );
};

export default TpoAdminProfile;
