import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Stars, Gauge, Search, UserCheck, Users } from 'lucide-react';
import Slider from 'react-slick';
import heroIllustration from './assets/hero-illustration.svg';

const LandingPage = () => {
    const testimonials = [
        { name: "Ayesha Rahman", role: "Frontend Developer", quote: "JobFinder helped me transition smoothly to a new role with better pay and flexibility." },
        { name: "Raj Patel", role: "Data Analyst", quote: "The recommendations felt truly personalized. I found my dream job within a week!" },
        { name: "Sneha Mukherjee", role: "Product Designer", quote: "The interface is intuitive and helped me stay organized during my job hunt." },
        { name: "Michael Chen", role: "DevOps Engineer", quote: "JobFinder connected me to top startups I wouldn't have found otherwise." }
    ];

    const testimonialSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const aboutFeatures = [
        { title: "Explore Jobs", desc: "Browse jobs by title, location, company, or keyword.", icon: <Briefcase size={32} className="text-primary mb-3" /> },
        { title: "Get Recommendations", desc: "Smart suggestions tailored to your skills.", icon: <Stars size={32} className="text-primary mb-3" /> },
        { title: "Track Progress", desc: "Organize and monitor your applications easily.", icon: <Gauge size={32} className="text-primary mb-3" /> }
    ];

    const features = [
        { title: "Advanced Filters", desc: "Narrow your search and find the right fit.", icon: <Search size={32} className="text-primary mb-3" /> },
        { title: "Verified Employers", desc: "Work with trusted companies.", icon: <UserCheck size={32} className="text-primary mb-3" /> },
        { title: "Networking Tools", desc: "Connect with hiring managers.", icon: <Users size={32} className="text-primary mb-3" /> }
    ];

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4 text-primary" to="/">JobFinder</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center gap-3">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                            <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-primary" to="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="d-flex align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f9fafb", paddingTop: "5rem" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-5 fw-bold mb-4">Discover Your Next Career Move</h1>
                            <p className="lead text-muted mb-4">Find the best jobs that match your skills, interests, and goals — all in one place.</p>
                            <Link to="/signup" className="btn btn-primary btn-lg">Get Started</Link>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={heroIllustration} alt="Job Search" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-5">
                <div className="container text-center">
                    <h2 className="fw-semibold mb-3">Empowering Your Job Hunt</h2>
                    <p className="text-muted mb-5">We streamline the job search process, connect you with top companies, and help you take the next big step in your career.</p>
                    <div className="row g-4">
                        {aboutFeatures.map((feature, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="p-4 border rounded shadow-sm h-100">
                                    {feature.icon}
                                    <h5>{feature.title}</h5>
                                    <p className="text-muted">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="bg-light py-5">
                <div className="container text-center">
                    <h2 className="fw-semibold mb-4">Why Choose JobFinder?</h2>
                    <div className="row g-4">
                        {features.map((item, idx) => (
                            <div className="col-md-4" key={idx}>
                                <div className="p-4 bg-white rounded border shadow-sm h-100">
                                    {item.icon}
                                    <h5>{item.title}</h5>
                                    <p className="text-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-5 bg-white">
                <div className="container text-center">
                    <h2 className="fw-semibold mb-4">Success Stories</h2>
                    <Slider {...testimonialSettings}>
                        {testimonials.map((t, i) => (
                            <div className="px-3" key={i}>
                                <div className="p-4 border rounded bg-light h-100">
                                    <p className="fst-italic">“{t.quote}”</p>
                                    <p className="fw-bold mb-0">{t.name}</p>
                                    <p className="text-muted">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="fw-semibold mb-4">Get in Touch</h2>
                    <p className="text-muted mb-4">We'd love to hear from you. Drop your message below.</p>
                    <form className="row justify-content-center">
                        <div className="col-md-5 mb-3">
                            <input type="text" className="form-control" placeholder="Your Name" required />
                        </div>
                        <div className="col-md-5 mb-3">
                            <input type="email" className="form-control" placeholder="Your Email" required />
                        </div>
                        <div className="col-md-10 mb-3">
                            <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary w-100" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white py-4">
                <div className="container text-center">
                    <p className="mb-2">&copy; 2025 JobFinder. All rights reserved.</p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="#" className="text-white text-decoration-none">Privacy</a>
                        <a href="#" className="text-white text-decoration-none">Terms</a>
                        <a href="#contact" className="text-white text-decoration-none">Contact</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default LandingPage;
