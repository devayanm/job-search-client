import { useEffect, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row, Spinner, Badge, Alert, Pagination } from "react-bootstrap";

const ViewStudents = () => {
    const [students, setStudents] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [filtered, setFiltered] = useState([]);
    const [statusFilter, setStatusFilter] = useState("All");
    const [successMsg, setSuccessMsg] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [studentsPerPage] = useState(6);
    const [sortOrder, setSortOrder] = useState("name");

    useEffect(() => {
        // Simulate an API call to fetch students
        const fetchStudents = async () => {
            try {
                setTimeout(() => {
                    const dummyData = [
                        {
                            id: 1,
                            name: "John Doe",
                            department: "Computer Science",
                            email: "john.doe@example.com",
                            skills: "React, Node.js",
                            resumeLink: "#",
                            status: "Placed",
                            dateApplied: "2025-04-01",
                            interviewStatus: "Scheduled",
                        },
                        {
                            id: 2,
                            name: "Jane Smith",
                            department: "Mechanical Engineering",
                            email: "jane.smith@example.com",
                            skills: "AutoCAD, SolidWorks",
                            resumeLink: "#",
                            status: "Available",
                            dateApplied: "2025-04-05",
                            interviewStatus: "Not Scheduled",
                        },
                        {
                            id: 3,
                            name: "Alice Johnson",
                            department: "Electrical Engineering",
                            email: "alice.johnson@example.com",
                            skills: "MATLAB, Python",
                            resumeLink: "#",
                            status: "Available",
                            dateApplied: "2025-03-15",
                            interviewStatus: "Not Scheduled",
                        },
                        {
                            id: 4,
                            name: "Michael Brown",
                            department: "Civil Engineering",
                            email: "michael.brown@example.com",
                            skills: "AutoCAD, Revit",
                            resumeLink: "#",
                            status: "Placed",
                            dateApplied: "2025-02-20",
                            interviewStatus: "Completed",
                        },
                        {
                            id: 5,
                            name: "Sophia Lee",
                            department: "Computer Science",
                            email: "sophia.lee@example.com",
                            skills: "Java, SQL",
                            resumeLink: "#",
                            status: "Available",
                            dateApplied: "2025-04-10",
                            interviewStatus: "Not Scheduled",
                        },
                        {
                            id: 6,
                            name: "Liam Davis",
                            department: "Information Technology",
                            email: "liam.davis@example.com",
                            skills: "React, Node.js",
                            resumeLink: "#",
                            status: "Available",
                            dateApplied: "2025-04-12",
                            interviewStatus: "Scheduled",
                        },
                        {
                            id: 7,
                            name: "Olivia Wilson",
                            department: "Mechanical Engineering",
                            email: "olivia.wilson@example.com",
                            skills: "SolidWorks, MATLAB",
                            resumeLink: "#",
                            status: "Placed",
                            dateApplied: "2025-03-01",
                            interviewStatus: "Completed",
                        },
                        {
                            id: 8,
                            name: "Ethan Taylor",
                            department: "Computer Science",
                            email: "ethan.taylor@example.com",
                            skills: "C++, Python",
                            resumeLink: "#",
                            status: "Available",
                            dateApplied: "2025-04-07",
                            interviewStatus: "Scheduled",
                        },
                    ];
                    setStudents(dummyData);
                    setFiltered(dummyData);
                    setLoading(false);
                }, 1500);
            } catch (error) {
                console.error("Failed to fetch students", error);
                setLoading(false);
            }
        };
        fetchStudents();
    }, []);

    useEffect(() => {
        // Filter students based on search query and status
        let filteredStudents = students.filter((student) =>
            `${student.name} ${student.department} ${student.skills}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
        );
        if (statusFilter !== "All") {
            filteredStudents = filteredStudents.filter((student) => student.status === statusFilter);
        }

        // Sort students based on selected sort order
        if (sortOrder === "name") {
            filteredStudents.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === "department") {
            filteredStudents.sort((a, b) => a.department.localeCompare(b.department));
        } else if (sortOrder === "status") {
            filteredStudents.sort((a, b) => a.status.localeCompare(b.status));
        }

        setFiltered(filteredStudents);
    }, [searchQuery, students, statusFilter, sortOrder]);

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const handleStatusFilterChange = (e) => setStatusFilter(e.target.value);

    const handleSortChange = (e) => setSortOrder(e.target.value);

    const handleMarkInterviewed = (studentId) => {
        // Update the interview status of the student
        const updatedStudents = students.map((student) =>
            student.id === studentId ? { ...student, interviewStatus: "Completed" } : student
        );
        setStudents(updatedStudents);
        setSuccessMsg("Interview status updated successfully.");
    };

    // Pagination logic
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = filtered.slice(indexOfFirstStudent, indexOfLastStudent);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container py-4">
            <h2 className="mb-4">View Students</h2>

            {/* Success Message */}
            {successMsg && <Alert variant="success">{successMsg}</Alert>}

            {/* Search Bar */}
            <Row className="mb-4">
                <Col md={8}>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Search by name, department, or skill"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </InputGroup>
                </Col>
                <Col md={4} className="text-end">
                    <Button variant="primary" onClick={() => setSearchQuery("")}>
                        Clear Search
                    </Button>
                </Col>
            </Row>

            {/* Status Filter */}
            <Row className="mb-4">
                <Col md={4}>
                    <Form.Select value={statusFilter} onChange={handleStatusFilterChange}>
                        <option value="All">All Status</option>
                        <option value="Placed">Placed</option>
                        <option value="Available">Available</option>
                    </Form.Select>
                </Col>

                {/* Sort Dropdown */}
                <Col md={4}>
                    <Form.Select value={sortOrder} onChange={handleSortChange}>
                        <option value="name">Sort by Name</option>
                        <option value="department">Sort by Department</option>
                        <option value="status">Sort by Status</option>
                    </Form.Select>
                </Col>
            </Row>

            {/* Loading Spinner */}
            {loading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : (
                <>
                    {/* Cards for Students */}
                    {currentStudents.length > 0 ? (
                        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                            {currentStudents.map((student) => (
                                <Col key={student.id}>
                                    <Card className="shadow-sm border-0">
                                        <Card.Body>
                                            <Card.Title>{student.name}</Card.Title>
                                            <Card.Subtitle className="text-muted mb-2">
                                                {student.department}
                                            </Card.Subtitle>
                                            <Card.Text>
                                                <strong>Email:</strong> {student.email}
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>Skills:</strong> {student.skills}
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>Status:</strong>{" "}
                                                <Badge
                                                    bg={student.status === "Placed" ? "success" : "secondary"}
                                                    text="white"
                                                >
                                                    {student.status}
                                                </Badge>
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>Interview Status:</strong>{" "}
                                                <Badge
                                                    bg={student.interviewStatus === "Scheduled" ? "warning" : "success"}
                                                    text="white"
                                                >
                                                    {student.interviewStatus}
                                                </Badge>
                                            </Card.Text>
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                href={student.resumeLink}
                                                target="_blank"
                                            >
                                                View Resume
                                            </Button>
                                            {student.interviewStatus !== "Completed" && (
                                                <Button
                                                    variant="outline-success"
                                                    size="sm"
                                                    className="ms-2"
                                                    onClick={() => handleMarkInterviewed(student.id)}
                                                >
                                                    Mark as Interviewed
                                                </Button>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <Alert variant="warning">No students match your search.</Alert>
                    )}

                    {/* Pagination */}
                    <Pagination className="mt-4">
                        {Array.from({ length: Math.ceil(filtered.length / studentsPerPage) }, (_, index) => (
                            <Pagination.Item
                                key={index + 1}
                                active={index + 1 === currentPage}
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </>
            )}
        </div>
    );
};

export default ViewStudents;
