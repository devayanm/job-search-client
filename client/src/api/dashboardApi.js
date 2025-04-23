import api from "./index";

// Mock function for getting student dashboard data
export const getStudentDashboard = async () => {
  // Simulated response with mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        applied_jobs: 15, // Example number of applied jobs
        shortlisted_jobs: 5, // Example number of shortlisted jobs
        interviews: 2, // Example number of interviews
        job_recommendations: [
          { title: "Frontend Developer", company: "Tech Corp" },
          { title: "Backend Developer", company: "Dev Solutions" },
          { title: "UI/UX Designer", company: "Creative Inc." },
        ],
        campus_notifications: [
          "Hackathon registration is now open!",
          "Job fair happening on June 15th",
          "Company XYZ will be visiting the campus for interviews",
        ],
        recent_jobs: [
          {
            title: "Frontend Developer",
            company: "Tech Corp",
            status: "Shortlisted",
          },
          {
            title: "Backend Developer",
            company: "Dev Solutions",
            status: "Applied",
          },
          {
            title: "UI/UX Designer",
            company: "Creative Inc.",
            status: "Applied",
          },
        ],
      });
    }, 1000); // Simulating an API delay
  });
};
