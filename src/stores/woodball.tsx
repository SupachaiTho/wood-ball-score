import { createSlice } from '@reduxjs/toolkit';

const localStorageData = localStorage.getItem('woodBall');
const localWoodBallData = localStorageData
  ? JSON.parse(localStorageData)
  : {
      game: {
        goalNumber: 20,
      },
    };

const initialState = localWoodBallData as WoodBallState;

export const woodBallSlice = createSlice({
  name: 'woodBall',
  initialState,
  reducers: {
    setGoal: (state, action) => {
      state.game.goalNumber = action.payload;
    },
    setWoodBallData: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setGoal, setWoodBallData } = woodBallSlice.actions;

export default woodBallSlice.reducer;
