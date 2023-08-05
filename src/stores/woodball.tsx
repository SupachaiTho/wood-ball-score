import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  game: {
    goalNumber: 20,
  },
  teams: [],
};
const localStorageData = localStorage.getItem('woodBall');
const localWoodBallData = localStorageData
  ? JSON.parse(localStorageData)
  : defaultState;

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
    removeTeam: (state, action) => {
      const teamId = action.payload;
      state.teams = state.teams.filter((team) => team.id !== teamId);
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
    resetData: (state) => {
      state.teams = defaultState.teams;
    },
    addPlayer: (state, action) => {
      const teamId = action.payload;
      state.teams = state.teams.map((team) => {
        if (team.id === teamId) {
          const playerId = team.players.length + 1;
          return {
            ...team,
            players: [
              ...team.players,
              {
                id: playerId,
                name: 'นักกีฬา - ' + playerId,
              },
            ],
          };
        }
        return team;
      });
    },
  },
});

export const {
  setGoal,
  addTeam,
  removeTeam,
  setTeamName,
  addPlayer,
  resetData,
} = woodBallSlice.actions;

export default woodBallSlice.reducer;
