import axios from "axios";

// Base URL for the backend API
const BASE_URL = "http://localhost:8000/api";

// Axios instance for consistent configuration
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// User APIs
export const getUserProfile = (userId) => apiClient.get(`/users/${userId}/`);
export const updateUserProfile = (userId, data) =>
  apiClient.put(`/users/${userId}/`, data);

// Job APIs
export const fetchJobs = () => apiClient.get("/jobs/");
export const fetchJobRecommendations = () =>
  apiClient.get("/jobs/recommendations/");
export const applyForJob = (jobId, userId) =>
  apiClient.post(`/jobs/${jobId}/apply/`, { userId });

// Additional APIs can be added here
export default apiClient;
