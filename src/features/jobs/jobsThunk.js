import { jobifyAPI } from "../../utils/axios";
import checkUnauthorizedRequest from "../../utils/checkUnauthorizedRequest";

export const getJobsThunk = async (_, thunkAPI) => {
  // filter options
  const { status, jobType, sort, page, search } = thunkAPI.getState().jobs;
  const url = `/jobs?status=${status}&jobType=${jobType}&sort=${sort}&page=${page}&search=${search}`
  try {
    const response = await jobifyAPI(url);
    return response.data;
  } catch (error) {
    return checkUnauthorizedRequest(error, thunkAPI);
  }
};

export const getStatsThunk = async (_, thunkAPI) => {
  try {
    const response = await jobifyAPI("/jobs/stats");
    return response.data;
  } catch (error) {
    return checkUnauthorizedRequest(error, thunkAPI);
  }
};
