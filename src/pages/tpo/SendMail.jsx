import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const SendMail = () => {
    const { studentId } = useParams(); // Get studentId from URL params
    const navigate = useNavigate();
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);

    // Dummy data for the student (this would normally come from an API)
    const dummyStudents = [
        { name: "John Doe", email: "john.doe@example.com" },
        { name: "Jane Smith", email: "jane.smith@example.com" },
        { name: "Michael Lee", email: "michael.lee@example.com" },
    ];

    const student = dummyStudents[studentId]; // Use studentId from the URL to get the student details

    const handleSendMail = () => {
        setIsSending(true);

        // Simulate sending the email (this can be replaced with an API call)
        setTimeout(() => {
            alert(`Email sent to ${student.email} with subject: "${subject}"`);
            setIsSending(false);
            navigate("/tpo/dashboard"); // Redirect back to TPO Dashboard after sending
        }, 1000);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Send Mail to {student.name}</h1>

            {/* Email Form */}
            <div className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-lg font-semibold">Subject</label>
                    <input
                        type="text"
                        className="w-full p-3 border rounded mt-2"
                        placeholder="Enter the subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-semibold">Message</label>
                    <textarea
                        className="w-full p-3 border rounded mt-2"
                        rows="6"
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                <button
                    onClick={handleSendMail}
                    className={`w-full bg-blue-600 text-white p-3 rounded ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={isSending}
                >
                    {isSending ? "Sending..." : "Send Mail"}
                </button>
            </div>
        </div>
    );
};

export default SendMail;
