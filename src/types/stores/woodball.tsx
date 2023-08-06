interface WoodBallState {
  game: Game;
  teams: Team[];
}

interface Game {
  goalNumber: number;
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
}
