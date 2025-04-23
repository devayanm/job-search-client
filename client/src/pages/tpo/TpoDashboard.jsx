import { useEffect, useState } from "react";
import { Button, Card, Col, Row, ListGroup, Spinner } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const TpoDashboard = () => {
    const [totalStudents, setTotalStudents] = useState(0);
    const [totalJobs, setTotalJobs] = useState(0);
    const [totalEvents, setTotalEvents] = useState(0);
    const [recentActivity, setRecentActivity] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        // Replace with actual API calls
        setTimeout(() => {
            setTotalStudents(312);
            setTotalJobs(27);
            setTotalEvents(9);

            // Example of recent activity data
            setRecentActivity([
                { id: 1, action: "Broadcasted mail to Final Year CS students", timestamp: "2025-04-23 10:30" },
                { id: 2, action: "Scheduled placement drive for Infosys", timestamp: "2025-04-22 15:00" },
                { id: 3, action: "Posted job for Frontend Developer - TCS", timestamp: "2025-04-21 14:45" },
                { id: 4, action: "Shortlisted 15 students for Wipro Drive", timestamp: "2025-04-20 09:15" },
            ]);

            setLoading(false);
        }, 1000);
    }, []);

    // Chart data for job posting trends over the last 6 months
    const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Jobs Posted",
                data: [5, 8, 10, 12, 15, 20],
                fill: true,
                backgroundColor: "rgba(0, 123, 255, 0.2)",
                borderColor: "rgba(0, 123, 255, 1)",
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="container py-4">
            <h2 className="mb-4">Welcome, TPO</h2>

            {/* Stats Cards */}
            <Row className="g-3 mb-4">
                <Col md={4}>
                    <Card className="shadow-sm border-primary">
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between">
                                <span>Total Students</span>
                                <i className="bi bi-person-lines-fill fs-4 text-primary"></i>
                            </Card.Title>
                            <Card.Text className="fs-4">{totalStudents}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="shadow-sm border-success">
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between">
                                <span>Jobs Posted</span>
                                <i className="bi bi-briefcase-fill fs-4 text-success"></i>
                            </Card.Title>
                            <Card.Text className="fs-4">{totalJobs}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="shadow-sm border-warning">
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between">
                                <span>Upcoming Events</span>
                                <i className="bi bi-calendar-event-fill fs-4 text-warning"></i>
                            </Card.Title>
                            <Card.Text className="fs-4">{totalEvents}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Job Posting Trend Chart */}
            <Card className="mb-4 shadow-sm">
                <Card.Header className="bg-light">Job Posting Trend (Last 6 Months)</Card.Header>
                <Card.Body>
                    {loading ? (
                        <div className="d-flex justify-content-center">
                            <Spinner animation="border" variant="primary" />
                        </div>
                    ) : (
                        <Line data={chartData} />
                    )}
                </Card.Body>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-sm mb-4">
                <Card.Header className="bg-light fw-semibold">Recent Activity</Card.Header>
                <Card.Body>
                    <ListGroup>
                        {recentActivity.map((activity) => (
                            <ListGroup.Item key={activity.id}>
                                <span className="fw-semibold">{activity.action}</span>
                                <br />
                                <small className="text-muted">{activity.timestamp}</small>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>

            {/* Call to Action Section */}
            <Card className="shadow-sm">
                <Card.Body className="text-center">
                    <h5>Need help managing student placements?</h5>
                    <Button variant="primary" size="lg" href="/help">
                        Contact Support
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TpoDashboard;
