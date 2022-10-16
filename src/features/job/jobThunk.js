import { jobifyAPI } from "../../utils/axios";
import checkUnauthorizedRequest from "../../utils/checkUnauthorizedRequest";
import { getJobs } from "../jobs/jobsSlice";

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const response = await jobifyAPI.post("/jobs", job);
    return response.data.job;
  } catch (error) {
    return checkUnauthorizedRequest(error, thunkAPI)
  }
};

export const editJobThunk = async (job, thunkAPI) => {
  try {
    const response = await jobifyAPI.patch(`/jobs/${job._id}`, job);
    thunkAPI.dispatch(getJobs());
    return response.data.jobs;
  } catch (error) {
    return checkUnauthorizedRequest(error, thunkAPI)
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  try {
    const response = await jobifyAPI.delete(`/jobs/${jobId}`);
    thunkAPI.dispatch(getJobs(true));
    return response.data;
  } catch (error) {
    return checkUnauthorizedRequest(error, thunkAPI)
  }
};
