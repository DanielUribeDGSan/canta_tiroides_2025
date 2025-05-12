export interface ScoreResp {
  res: boolean;
  tuscore: Score;
  scores: Score[];
}

export interface Score {
  name: string;
  apellidos: string;
  email: string;
  clave: string;
  score?: number;
  posicion?: number;
}
