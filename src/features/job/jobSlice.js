import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { toast } from "react-toastify";
import { toastConfig } from "../../utils/constants";
import { createJobThunk, editJobThunk, deleteJobThunk } from "./jobThunk";

export const createJob = createAsyncThunk("job/createJob", createJobThunk);
export const editJob = createAsyncThunk("job/editJob", editJobThunk);
export const deleteJob = createAsyncThunk("job/deleteJob", deleteJobThunk);

const initialState = {
  position: "",
  company: "",
  jobLocation: getUserFromLocalStorage() ? getUserFromLocalStorage().location : "",
  status: "pending",
  jobType: "full-time",
  jobId: "",
  deletingJobId: "",
  isEditing: false,
  isLoading: false,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobInput: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
    clearJob: () => {
      return initialState;
    },
    handleEditJob: (state, { payload }) => {
      return { ...state, ...payload, isEditing: true };
    },
  },
  extraReducers: {
    [createJob.pending]: (state) => {
      state.isLoading = true;
    },
    [createJob.fulfilled]: () => {
      toast.success("job added.", toastConfig);
      return initialState;
    },

    [createJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload, toastConfig);
    },

    [editJob.pending]: (state) => {
      state.isLoading = true;
    },

    [editJob.fulfilled]: () => {
      toast.success("job has updated.", toastConfig);
      return initialState;
    },

    [editJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload, toastConfig);
    },

    [deleteJob.pending]: (state, { meta }) => {
      state.isLoading = true;
      state.deletingJobId = meta.arg;
    },

    [deleteJob.fulfilled]: (state) => {
      state.isLoading = false;
      state.deletingJobId = "";
      toast.success("job has deleted.", toastConfig);
    },

    [deleteJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.deletingJobId = "";
      toast.error(payload, toastConfig);
    },
  },
});

export const { clearJob, setJobInput, handleEditJob } = jobSlice.actions;
export default jobSlice.reducer;
