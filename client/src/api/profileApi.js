import api from "./index";

// --- STUDENT PROFILE ---
export const createStudentProfile = async (profileData) => {
  try {
    const response = await api.post("/students/", profileData);
    return response.data;
  } catch (error) {
    throw (
      error?.response?.data || { message: "Failed to create student profile" }
    );
  }
};

export const getStudentProfile = async (id) => {
  try {
    const response = await api.get(`/students/${id}/`);
    return response.data;
  } catch (error) {
    throw (
      error?.response?.data || { message: "Failed to fetch student profile" }
    );
  }
};

export const updateStudentProfile = async (id, profileData) => {
  try {
    const response = await api.put(`/students/${id}/`, profileData);
    return response.data;
  } catch (error) {
    throw (
      error?.response?.data || { message: "Failed to update student profile" }
    );
  }
};

export const deleteStudentProfile = async (id) => {
  try {
    const response = await api.delete(`/students/${id}/`);
    return response.data;
  } catch (error) {
    throw (
      error?.response?.data || { message: "Failed to delete student profile" }
    );
  }
};

// --- TPO PROFILE ---
export const createTPOProfile = async (profileData) => {
  try {
    const response = await api.post("/tpos/", profileData);
    return response.data;
  } catch (error) {
    throw error?.response?.data || { message: "Failed to create TPO profile" };
  }
};

export const getTPOProfile = async (id) => {
  try {
    const response = await api.get(`/tpos/${id}/`);
    return response.data;
  } catch (error) {
    throw error?.response?.data || { message: "Failed to fetch TPO profile" };
  }
};

export const updateTPOProfile = async (id, profileData) => {
  try {
    const response = await api.put(`/tpos/${id}/`, profileData);
    return response.data;
  } catch (error) {
    throw error?.response?.data || { message: "Failed to update TPO profile" };
  }
};

export const deleteTPOProfile = async (id) => {
  try {
    const response = await api.delete(`/tpos/${id}/`);
    return response.data;
  } catch (error) {
    throw error?.response?.data || { message: "Failed to delete TPO profile" };
  }
};

// --- COMPANY PROFILE ---
export const createCompanyProfile = async (profileData) => {
  try {
    const response = await api.post("/companies/", profileData);
    return response.data;
  } catch (error) {
    throw (
      error?.response?.data || { message: "Failed to create company profile" }
    );
  }
};

export const getCompanyProfile = async (id) => {
  try {
    const response = await api.get(`/companies/${id}/`);
    return response.data;
  } catch (error) {
    throw (
      error?.response?.data || { message: "Failed to fetch company profile" }
    );
  }
};

export const updateCompanyProfile = async (id, profileData) => {
  try {
    const response = await api.put(`/companies/${id}/`, profileData);
    return response.data;
  } catch (error) {
    throw (
      error?.response?.data || { message: "Failed to update company profile" }
    );
  }
};

export const deleteCompanyProfile = async (id) => {
  try {
    const response = await api.delete(`/companies/${id}/`);
    return response.data;
  } catch (error) {
    throw (
      error?.response?.data || { message: "Failed to delete company profile" }
    );
  }
};
