import { configureStore } from '@reduxjs/toolkit';
import dummyResponseSlice from './slice/dummyResponseSlice'; 

export const store = configureStore({
  reducer: {
    dummyResponse: dummyResponseSlice,
  },
});