import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";

const Signup = () => {
    const [role, setRole] = useState("student");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        setValidated(true);

        if (form.checkValidity() === true) {
            const userData = {
                name,
                email,
                password,
                role,
            };

            // Handle user signup logic here (e.g., API call)
            // After successful signup, navigate to dashboard
            navigate(`/${role}/dashboard`);
        }
    };

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center bg-gradient">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow rounded-4">
                            <div className="card-body p-4">
                                <h2 className="text-center mb-4 text-primary fw-bold">Sign Up</h2>

                                <form
                                    noValidate
                                    className={`needs-validation ${validated ? "was-validated" : ""}`}
                                    onSubmit={handleSubmit}
                                >
                                    {/* Role Selector */}
                                    <div className="mb-3">
                                        <label htmlFor="role" className="form-label">Select Role</label>
                                        <select
                                            id="role"
                                            className="form-select"
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                            required
                                        >
                                            <option value="student">Student</option>
                                            <option value="tpo">TPO</option>
                                            <option value="company">Company</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a role.
                                        </div>
                                    </div>

                                    {/* Name Field */}
                                    <div className="mb-3 position-relative">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light">
                                                <FaUserAlt />
                                            </span>
                                            <input
                                                type="text"
                                                id="name"
                                                className="form-control"
                                                placeholder="Enter your full name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Please enter your name.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div className="mb-3 position-relative">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light">
                                                <FaEnvelope />
                                            </span>
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Please enter a valid email.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Password Field */}
                                    <div className="mb-4 position-relative">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light">
                                                <FaLock />
                                            </span>
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Password is required.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sign Up Button */}
                                    <div className="d-grid">
                                        <button
                                            type="submit"
                                            className="btn btn-primary py-2 fw-semibold"
                                        >
                                            Sign Up
                                        </button>
                                    </div>

                                    {/* Footer Link */}
                                    <div className="text-center mt-3">
                                        <small className="text-muted">
                                            Already have an account?{" "}
                                            <a href="/login" className="text-decoration-none text-primary fw-semibold">
                                                Login
                                            </a>
                                        </small>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
