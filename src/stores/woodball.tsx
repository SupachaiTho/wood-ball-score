import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  game: {
    goalNumber: 20,
    roundNumber: 1,
  },
  teams: [],
};
const localStorageData = localStorage.getItem('woodBall');
const localWoodBallData = localStorageData
  ? JSON.parse(localStorageData)
  : defaultState;

const initialState = localWoodBallData as WoodBallState;

const createTimeStamp = () => Date.now().toString();

export const woodBallSlice = createSlice({
  name: 'woodBall',
  initialState,
  reducers: {
    setGoal: (state, action) => {
      state.game.goalNumber = action.payload;
    },
    setRound: (state, action) => {
      state.game.roundNumber = action.payload;
    },
    addTeam: (state) => {
      const teamId = createTimeStamp();
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
          const playerId = createTimeStamp();
          return {
            ...team,
            players: [
              ...team.players,
              {
                id: playerId,
                teamId,
                name: 'นักกีฬา - ' + playerId,
                rounds: [],
              },
            ],
          };
        }
        return team;
      });
    },
    removePlayer: (state, action) => {
      const { teamId, playerId } = action.payload;
      state.teams = state.teams.map((team) => {
        if (team.id === teamId) {
          return {
            ...team,
            players: team.players.filter((player) => player.id !== playerId),
          };
        }
        return team;
      });
    },
    setPlayerName: (state, action) => {
      const { teamId, playerId, playerName } = action.payload;
      state.teams = state.teams.map((team) => {
        if (team.id === teamId) {
          return {
            ...team,
            players: team.players.map((player) => {
              if (player.id === playerId) {
                return {
                  ...player,
                  name: playerName,
                };
              }
              return player;
            }),
          };
        }
        return team;
      });
    },
    addRound: (state, action) => {
      const { teamId, playerId } = action.payload;
      const goalNumber = state.game.goalNumber;
      state.teams = state.teams.map((team) => {
        if (team.id === teamId) {
          return {
            ...team,
            players: team.players.map((player) => {
              if (player.id === playerId) {
                const roundId = createTimeStamp();
                return {
                  ...player,
                  rounds: [
                    ...(player.rounds ?? []),
                    {
                      id: roundId,
                      index: ((player.rounds ?? []).length + 1).toString(),
                      goals: Array.from({ length: goalNumber }, (_, index) => {
                        return {
                          id: index + 1,
                          score: 0,
                        };
                      }),
                    },
                  ],
                };
              }
              return player;
            }),
          };
        }
        return team;
      });
    },
    removeRound: (state, action) => {
      const { teamId, playerId, roundId } = action.payload;
      state.teams = state.teams.map((team) => {
        if (team.id === teamId) {
          return {
            ...team,
            players: team.players.map((player) => {
              if (player.id === playerId) {
                return {
                  ...player,
                  rounds: player.rounds.filter((round) => round.id !== roundId),
                };
              }
              return player;
            }),
          };
        }
        return team;
      });
    },
    setRoundIndex: (state, action) => {
      const { teamId, playerId, roundId, roundIndex } = action.payload;
      state.teams = state.teams.map((team) => {
        if (team.id === teamId) {
          return {
            ...team,
            players: team.players.map((player) => {
              if (player.id === playerId) {
                return {
                  ...player,
                  rounds: player.rounds.map((round) => {
                    if (round.id === roundId) {
                      return {
                        ...round,
                        index: roundIndex,
                      };
                    }
                    return round;
                  }),
                };
              }
              return player;
            }),
          };
        }
        return team;
      });
    },
  },
});

export const {
  setGoal,
  setRound,
  addTeam,
  removeTeam,
  setTeamName,
  addPlayer,
  removePlayer,
  setPlayerName,
  resetData,
  addRound,
  removeRound,
  setRoundIndex,
} = woodBallSlice.actions;

export default woodBallSlice.reducer;
