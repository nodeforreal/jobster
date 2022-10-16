import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import uiSlice from "./features/ui/uiSlice";
import jobSlice from "./features/job/jobSlice";
import jobsSlice from './features/jobs/jobsSlice';

const store = configureStore({
  reducer: {
    user : userSlice,
    ui: uiSlice,
    job : jobSlice,
    jobs: jobsSlice
  },
});

export { store };
