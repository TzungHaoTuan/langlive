import { configureStore } from "@reduxjs/toolkit";
import drawReducer from "@/lib/redux/features/draw/drawSlice";

export const store = configureStore({
  reducer: {
    drawReducer,
  },
});
