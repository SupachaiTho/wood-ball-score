interface WoodBallState {
  game: Game;
  teams: Team[];
}

interface Game {
  goalNumber: number;
}

interface Team {
  id: number;
  name: string;
  players: Player[];
}

interface Player {
  id: number;
  name: string;
}
