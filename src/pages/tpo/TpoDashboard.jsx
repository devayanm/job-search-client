import { useState } from "react";
import { Link } from "react-router-dom";

const TpoDashboard = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const dummyStudents = [
        { name: "John Doe", department: "Computer Science", skills: "React, Node.js" },
        { name: "Jane Smith", department: "Mechanical Engineering", skills: "AutoCAD, SolidWorks" },
        { name: "Michael Lee", department: "Electrical Engineering", skills: "C++, MATLAB" },
    ];

    const filteredStudents = dummyStudents.filter(
        (student) =>
            student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.skills.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">TPO Dashboard</h1>

            {/* Search Bar */}
            <div className="bg-white p-4 rounded shadow-md">
                <input
                    type="text"
                    className="p-2 border rounded w-full"
                    placeholder="Search for students by name, department, or skills"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Student List */}
            <div>
                <h2 className="text-2xl font-semibold mb-2">Student List</h2>
                <ul className="space-y-4">
                    {filteredStudents.length > 0 ? (
                        filteredStudents.map((student, index) => (
                            <li key={index} className="p-4 bg-white rounded shadow hover:bg-gray-50">
                                <h3 className="text-xl font-semibold">{student.name}</h3>
                                <p className="text-gray-600">{student.department}</p>
                                <p className="text-gray-500">{student.skills}</p>
                                <div className="flex justify-end mt-2">
                                    <Link
                                        to={`/tpo/send-mail/${index}`}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        Send Email
                                    </Link>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p>No students found based on your search.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default TpoDashboard;
