import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';
import jobReducer from './slices/jobSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    Job: jobReducer,
  },
});

export default store;
