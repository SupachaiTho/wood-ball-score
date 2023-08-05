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
    addTeam: (state) => {
      const teamId = state.teams.length + 1;
      state.teams = [
        ...state.teams,
        { id: teamId, name: 'ทีม - ' + teamId, players: [] },
      ];
    },
    setTeamName: (state, action) => {
      const { teamId, teamName } = action.payload;
      state.teams = state.teams.map((team) => {
        if (team.id === teamId) {
          return {
            ...team,
            name: teamName,
          };
        }
        return team;
      });
    },
  },
});

export const { setGoal, addTeam, setTeamName } = woodBallSlice.actions;

export default woodBallSlice.reducer;
