import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dummyResponse: {
    city: "Berlin",
    country: "Germany",
    temperature: "23°C",
    rainfall: "3 mm",
    windSpeed: "14 km/h",
  },
};

export const dummyResponseSlice = createSlice({
  name: "dummyResponse",
  initialState,
  reducers: {
    setDummyResponse: (state, action) => {
      state.dummyResponse = action.payload;
    },
  },
});

export const { setDummyResponse } = dummyResponseSlice.actions;
export default dummyResponseSlice.reducer;
