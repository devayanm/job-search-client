export const sidebarLinks = {
  student: [
    { name: "Dashboard", path: "/student/dashboard" },
    { name: "Job Recommendations", path: "/student/recommendations" },
    { name: "Job Search", path: "/student/search-jobs" },
    { name: "On-Campus Jobs", path: "/student/on-campus-jobs" },
  ],
  tpo: [
    { name: "Dashboard", path: "/tpo/dashboard" },
    { name: "Students", path: "/tpo/students" }, // Combine View + Search
    { name: "Broadcast Mail", path: "/tpo/broadcast" }, // Renamed "Send Mail"
    { name: "Manage Events", path: "/tpo/events" }, // New
    { name: "Job Postings", path: "/tpo/jobs" }, // New
    { name: "Profile", path: "/tpo/profile" },
  ],
  company: [
    { name: "Post Job", path: "/company/post-job" },
    { name: "All Posted Jobs", path: "/company/jobs" },
    { name: "Profile", path: "/company/profile" },
  ],
};
