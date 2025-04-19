import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
    const [role, setRole] = useState("student");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const { login } = useAuth();
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
                name: "John Doe",
                email,
                role,
            };

            login(userData);
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
                                <h2 className="text-center mb-4 text-primary fw-bold">Login</h2>

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

                                    {/* Login Button */}
                                    <div className="d-grid">
                                        <button
                                            type="submit"
                                            className="btn btn-primary py-2 fw-semibold"
                                        >
                                            Login
                                        </button>
                                    </div>

                                    {/* Footer Link */}
                                    <div className="text-center mt-3">
                                        <small className="text-muted">
                                            Don’t have an account?{" "}
                                            <a href="/signup" className="text-decoration-none text-primary fw-semibold">
                                                Sign Up
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

export default Login;
