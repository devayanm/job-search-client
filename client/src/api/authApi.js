import api from "./index";

// Register new user
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register/", userData);
    return response.data;
  } catch (error) {
    throw error?.response?.data || { message: "Registration failed" };
  }
};

// Login user
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/auth/login/", credentials);
    const { access, refresh, user } = response.data;

    // Save tokens in localStorage
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);

    return user;
  } catch (error) {
    throw error?.response?.data || { message: "Login failed" };
  }
};

// Refresh access token
export const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      throw { message: "Refresh token not found" };
    }

    const response = await api.post("/auth/refresh/", {
      refresh: refreshToken,
    });
    const { access } = response.data;

    // Update the access token in localStorage
    localStorage.setItem("accessToken", access);
    return access;
  } catch (error) {
    throw error?.response?.data || { message: "Token refresh failed" };
  }
};

export const logoutUser = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");

  window.location.href = "/login";
};
