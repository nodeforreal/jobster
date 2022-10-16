import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { toastConfig } from "../../utils/constants";
import { getJobsThunk, getStatsThunk } from "./jobsThunk";

export const getJobs = createAsyncThunk("jobs/getJobs", getJobsThunk);
export const getStats = createAsyncThunk("jobs/getStats", getStatsThunk);

const initialFilterState = {
  search: "",
  status: "all",
  jobType: "all",
  sort: "latest",
};

const initialState = {
  jobs: [],
  numOfPages: 0,
  totalJobs: 0,
  isLoading: false,
  isDeleting: false,
  page: 1,
  defaultStats: { pending: 0, interview: 0, declined: 0 },
  monthlyApplications: [{ date: 0, count: 0 }],
  ...initialFilterState,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setFilterValues: (state, { payload }) => {
      const { value, name } = payload;
      state[name] = value;
    },
    clearFilter: (state) => {
      return { ...state, ...initialFilterState };
    },
  },
  extraReducers: {
    [getJobs.pending]: (state, { meta }) => {
      state.isLoading = true;
      state.isDeleting = meta.arg;
    },
    [getJobs.fulfilled]: (state, { payload }) => {
      return { ...state, ...payload, isLoading: false, isDeleting: false };
    },
    [getJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isDeleting = false;
      toast.error(payload, toastConfig);
    },
    [getStats.pending]: (state) => {
      state.isLoading = true;
    },
    [getStats.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.defaultStats = payload.defaultStats;
      state.monthlyApplications = payload.monthlyApplications;
    },
    [getStats.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload, toastConfig);
    },
  },
});

export const { setFilterValues, clearFilter, searchJob } = jobsSlice.actions;
export default jobsSlice.reducer;
