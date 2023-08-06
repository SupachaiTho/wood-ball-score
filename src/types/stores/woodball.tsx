interface WoodBallState {
  game: Game;
  teams: Team[];
}

interface Game {
  goalNumber: number;
  roundNumber: number;
}

interface Team {
  id: string;
  name: string;
  players: Player[];
}

interface Player {
  id: string;
  teamId: string;
  name: string;
  rounds: Round[];
}

interface Round {
  id: string;
  index: string;
  goals: Goal[];
}

interface Goal {
  id: number;
  score: number;
}
