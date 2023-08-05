import { createSlice } from '@reduxjs/toolkit';

const localStorageData = localStorage.getItem('woodBall');
const localWoodBallData = localStorageData
  ? JSON.parse(localStorageData)
  : {
      game: {
        goalNumber: 20,
      },
      teams: [],
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
    addTeam: (state) => {
      const teamId = state.teams.length + 1;
      state.teams = [
        ...state.teams,
        { id: teamId, name: 'team-' + teamId, players: [] },
      ];
    },
  },
});

export const { setGoal, setWoodBallData, addTeam } = woodBallSlice.actions;

export default woodBallSlice.reducer;
