import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const userAPI = {
  getProfile: (userId) => apiClient.get(`/users/${userId}/`),
  updateProfile: (userId, data) => apiClient.put(`/users/${userId}/`, data),
  deleteProfile: (userId) => apiClient.delete(`/users/${userId}/`),
};

export const authAPI = {
  login: (credentials) => apiClient.post("/auth/login/", credentials),
  register: (data) => apiClient.post("/auth/register/", data),
  logout: () => apiClient.post("/auth/logout/"),
  refreshToken: (token) =>
    apiClient.post("/auth/token/refresh/", { refresh: token }),
};

export const jobAPI = {
  fetchJobs: (params = {}) => apiClient.get("/jobs/", { params }),
  fetchJobDetails: (jobId) => apiClient.get(`/jobs/${jobId}/`),
  fetchRecommendations: (userId) =>
    apiClient.get(`/jobs/recommendations/${userId}/`),
  apply: (jobId, userId) => apiClient.post(`/jobs/${jobId}/apply/`, { userId }),
  saveJob: (jobId, userId) =>
    apiClient.post(`/jobs/${jobId}/save/`, { userId }),
  createJob: (data) => apiClient.post("/jobs/", data),
  updateJob: (jobId, data) => apiClient.put(`/jobs/${jobId}/`, data),
  deleteJob: (jobId) => apiClient.delete(`/jobs/${jobId}/`),
};

export const studentAPI = {
  createStudentProfile: (data) => apiClient.post("/students/", data),
  updateStudentProfile: (studentId, data) =>
    apiClient.put(`/students/${studentId}/`, data),
  getStudentProfile: (studentId) => apiClient.get(`/students/${studentId}/`),
};

export const otherAPI = {
  exampleEndpoint: (param) => apiClient.get(`/example/${param}/`),
};

const handleError = (error) => {
  if (error.response) {
    console.error("Error Response: ", error.response.data);
    console.error("Error Status: ", error.response.status);
    return error.response.data;
  } else if (error.request) {
    console.error("Error Request: ", error.request);
    return { message: "No response from server" };
  } else {
    console.error("Error: ", error.message);
    return { message: error.message };
  }
};

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(handleError(error))
);

export default apiClient;
