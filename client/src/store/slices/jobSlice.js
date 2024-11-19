import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jobAPI } from "../../services/api";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, thunkAPI) => {
    try {
      const response = await jobAPI.fetchJobs();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || "An error occurred while fetching jobs.";
      });
  },
});

export default jobSlice.reducer;
