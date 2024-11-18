import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJobs as fetchJobsAPI } from "../../services/api";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await fetchJobsAPI();
  return response.data;
});

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
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
