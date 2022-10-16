import { jobifyAPI } from "../../utils/axios";
import checkUnauthorizedRequest from "../../utils/checkUnauthorizedRequest";

export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const { data } = await jobifyAPI.post("/auth/register", user);
    return data.user;
  } catch (error) {
    return checkUnauthorizedRequest(error, thunkAPI)
  }
};

export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const { data } = await jobifyAPI.post("/auth/login", user);
    return data.user;
  } catch (error) {
    return checkUnauthorizedRequest(error, thunkAPI)
  }
};

export const updateUserThunk = async (user, thunkAPI) => {
  try {
    const res = await jobifyAPI.patch("/auth/updateUser",user);
    return res.data.user;
  } catch (error) {
    return checkUnauthorizedRequest(error, thunkAPI)
  }
};
