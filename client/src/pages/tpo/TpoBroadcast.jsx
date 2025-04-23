import { useState } from "react";
import { Button, Form, Alert, Spinner, Row, Col, Card } from "react-bootstrap";

const BroadcastMail = () => {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [recipientGroup, setRecipientGroup] = useState("all");
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isPreview, setIsPreview] = useState(false);  // For toggling preview mode

    const handleSendMail = async (e) => {
        e.preventDefault();
        setSuccessMsg("");
        setErrorMsg("");
        setLoading(true);

        try {
            // Simulate an API call for email sending
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setSuccessMsg("Broadcast email sent successfully!");
            setSubject("");
            setMessage("");
        } catch (error) {
            setErrorMsg("Failed to send email. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handlePreviewToggle = () => {
        setIsPreview((prev) => !prev); // Toggle preview mode
    };

    return (
        <div className="container py-4">
            <h2 className="mb-4">Broadcast Mail</h2>

            {/* Success/Error Alerts */}
            {successMsg && <Alert variant="success">{successMsg}</Alert>}
            {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

            <Row className="mb-4">
                <Col md={8}>
                    <Form onSubmit={handleSendMail} className="border p-4 rounded shadow-sm bg-white">
                        {/* Recipient Group */}
                        <Form.Group className="mb-3">
                            <Form.Label>Recipient Group</Form.Label>
                            <Form.Select
                                value={recipientGroup}
                                onChange={(e) => setRecipientGroup(e.target.value)}
                            >
                                <option value="all">All Students</option>
                                <option value="placed">Placed Students</option>
                                <option value="unplaced">Unplaced Students</option>
                                <option value="byDepartment">By Department</option>
                            </Form.Select>
                        </Form.Group>

                        {/* Subject */}
                        <Form.Group className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter email subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {/* Message */}
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                placeholder="Enter your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {/* Send Button */}
                        <div className="d-grid">
                            <Button type="submit" variant="primary" disabled={loading}>
                                {loading ? (
                                    <>
                                        <Spinner animation="border" size="sm" className="me-2" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Broadcast"
                                )}
                            </Button>
                        </div>

                        {/* Preview Toggle */}
                        <div className="d-grid mt-3">
                            <Button variant="secondary" onClick={handlePreviewToggle}>
                                {isPreview ? "Edit Email" : "Preview Email"}
                            </Button>
                        </div>
                    </Form>
                </Col>

                {/* Email Preview Section */}
                {isPreview && (
                    <Col md={4}>
                        <Card className="shadow-sm">
                            <Card.Header>
                                <h5>Email Preview</h5>
                            </Card.Header>
                            <Card.Body>
                                <h6><strong>Subject:</strong> {subject}</h6>
                                <p><strong>To:</strong> {recipientGroup}</p>
                                <p><strong>Message:</strong></p>
                                <p>{message}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </div>
    );
};

export default BroadcastMail;
