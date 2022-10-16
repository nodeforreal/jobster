import { logout } from "../features/user/userSlice";

const checkUnauthorizedRequest = (error,thunkAPI)=>{
  if (error.response.status === 401) {
    thunkAPI.dispatch(logout());
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
}

export default checkUnauthorizedRequest