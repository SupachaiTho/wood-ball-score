import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  game: {
    goalNumber: 20,
  },
} as WoodBallState;

export const woodBallSlice = createSlice({
  name: "woodBall",
  initialState,
  reducers: {
    setGoal: (state, action) => {
      state.game.goalNumber = action.payload;
    },
  },
});

export const { setGoal } = woodBallSlice.actions;

export default woodBallSlice.reducer;
