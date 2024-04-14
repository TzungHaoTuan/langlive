import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  winner: null,
};

export const draw = createSlice({
  name: "draw",
  initialState,
  reducers: {
    setWinner: (state, action) => {
      state.winner = action.payload;
    },
    resetWinner: (state) => {
      state.winner = initialState.winner;
    },
  },
});

export const { setWinner, resetWinner } = draw.actions;
export default draw.reducer;
