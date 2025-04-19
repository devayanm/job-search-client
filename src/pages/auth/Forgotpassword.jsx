import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
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
            // Handle forgot password logic (e.g., API call to reset password)
            navigate("/login");
        }
    };

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center bg-gradient">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow rounded-4">
                            <div className="card-body p-4">
                                <h2 className="text-center mb-4 text-primary fw-bold">Forgot Password</h2>

                                <form
                                    noValidate
                                    className={`needs-validation ${validated ? "was-validated" : ""}`}
                                    onSubmit={handleSubmit}
                                >
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

                                    {/* Submit Button */}
                                    <div className="d-grid">
                                        <button
                                            type="submit"
                                            className="btn btn-primary py-2 fw-semibold"
                                        >
                                            Reset Password
                                        </button>
                                    </div>

                                    {/* Footer Link */}
                                    <div className="text-center mt-3">
                                        <small className="text-muted">
                                            Remember your password?{" "}
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

export default ForgotPassword;
