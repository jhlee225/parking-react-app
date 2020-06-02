import { createSlice } from "@reduxjs/toolkit";

export const parkingSlice = createSlice({
  name: "parking",
  initialState: {},
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = parkingSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state) => state.parking.value;

export default parkingSlice.reducer;
