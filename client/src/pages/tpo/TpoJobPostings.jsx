import { useState } from "react";
import { Button, Form, Table, Modal, Spinner, Alert } from "react-bootstrap";

const ManageJobPostings = () => {
    const [jobPostings, setJobPostings] = useState([
        { id: 1, title: "Software Developer", company: "ABC Corp", deadline: "2025-06-30", status: "Active" },
        { id: 2, title: "Data Analyst", company: "XYZ Ltd.", deadline: "2025-05-15", status: "Active" },
        { id: 3, title: "Web Developer", company: "Tech Solutions", deadline: "2025-07-01", status: "Closed" },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [newJob, setNewJob] = useState({ title: "", company: "", deadline: "", status: "Active" });
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleJobChange = (e) => {
        const { name, value } = e.target;
        setNewJob((prevJob) => ({ ...prevJob, [name]: value }));
    };

    const handleAddJob = async (e) => {
        e.preventDefault();
        setSuccessMsg("");
        setErrorMsg("");
        setLoading(true);

        try {
            // Replace with actual API call to add job posting
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setJobPostings([...jobPostings, { ...newJob, id: jobPostings.length + 1 }]);
            setNewJob({ title: "", company: "", deadline: "", status: "Active" });
            setSuccessMsg("Job posting added successfully!");
            handleCloseModal();
        } catch (error) {
            setErrorMsg("Failed to add job posting. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteJob = (id) => {
        const updatedJobPostings = jobPostings.filter((job) => job.id !== id);
        setJobPostings(updatedJobPostings);
    };

    return (
        <div className="container py-4">
            <h2 className="mb-4">Manage Job Postings</h2>

            {successMsg && <Alert variant="success">{successMsg}</Alert>}
            {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

            <Button variant="primary" onClick={handleShowModal} className="mb-4">
                Add New Job Posting
            </Button>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobPostings.map((job) => (
                        <tr key={job.id}>
                            <td>{job.title}</td>
                            <td>{job.company}</td>
                            <td>{job.deadline}</td>
                            <td>{job.status}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDeleteJob(job.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal to Add New Job Posting */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Job Posting</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddJob}>
                        <Form.Group className="mb-3">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={newJob.title}
                                onChange={handleJobChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="company"
                                value={newJob.company}
                                onChange={handleJobChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control
                                type="date"
                                name="deadline"
                                value={newJob.deadline}
                                onChange={handleJobChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                name="status"
                                value={newJob.status}
                                onChange={handleJobChange}
                                required
                            >
                                <option value="Active">Active</option>
                                <option value="Closed">Closed</option>
                            </Form.Select>
                        </Form.Group>

                        <div className="d-grid">
                            <Button type="submit" variant="primary" disabled={loading}>
                                {loading ? (
                                    <>
                                        <Spinner animation="border" size="sm" className="me-2" />
                                        Adding...
                                    </>
                                ) : (
                                    "Add Job"
                                )}
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ManageJobPostings;
