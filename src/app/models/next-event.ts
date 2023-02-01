export interface EventFixture {
  fixture: MatchInfos;
  stats: MatchStats;
  status: FixtureStatus;
}

export enum FixtureStatus {
  PLAYED = 1,
  CANCELLED = 2,
  UPCOMING = 3,
}

export interface MatchInfos {
  type: FixtureType;
  gameNumber?: number;
  date: Date;
  place: string;
  hostingTeam: Team;
  guestTeam: Team;
}

export interface MatchStats {
  hostingTeam: Team;
  guestTeam: Team;
  hostStats: FixtureStats;
  guestStats: FixtureStats;
}

export enum FixtureType {
  SANTE = 'SANTE',
  FRIENDLY = 'FRIENDLY',
  ALLSTAR = 'ALLSTAR',
}

export interface Team {
  id: number;
  name: string;
  color: string;
  isHost: boolean;
}

export interface FixtureStats {
  wins: number;
  draws: number;
  goals: number;
}
