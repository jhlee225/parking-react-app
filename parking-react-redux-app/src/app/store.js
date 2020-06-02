import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from "../features/parking/parkingSlice";

export default configureStore({
  reducer: {
    parking: parkingReducer,
  },
});
