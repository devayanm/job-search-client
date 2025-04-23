import { useState } from "react";
import { Button, Form, Table, Modal, Spinner, Alert } from "react-bootstrap";

const ManageEvents = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Career Fair", date: "2025-05-20", location: "Auditorium", status: "Active" },
    { id: 2, title: "Tech Workshop", date: "2025-06-05", location: "Room 202", status: "Active" },
    { id: 3, title: "Placement Drive", date: "2025-06-15", location: "Hall 1", status: "Completed" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", status: "Active" });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    setLoading(true);

    try {
      // Replace with actual API call to add event
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
      setNewEvent({ title: "", date: "", location: "", status: "Active" });
      setSuccessMsg("Event added successfully!");
      handleCloseModal();
    } catch (error) {
      setErrorMsg("Failed to add event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Manage Events</h2>

      {successMsg && <Alert variant="success">{successMsg}</Alert>}
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

      <Button variant="primary" onClick={handleShowModal} className="mb-4">
        Add New Event
      </Button>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Event Title</th>
            <th>Date</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>{event.status}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteEvent(event.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal to Add New Event */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddEvent}>
            <Form.Group className="mb-3">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleEventChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleEventChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={newEvent.location}
                onChange={handleEventChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={newEvent.status}
                onChange={handleEventChange}
                required
              >
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
                <option value="Upcoming">Upcoming</option>
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
                  "Add Event"
                )}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ManageEvents;
