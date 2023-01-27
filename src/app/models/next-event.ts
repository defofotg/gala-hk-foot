export class EventFixture {
  type!: FixtureType;
  gameNumber?: number;
  date!: Date;
  place!: string;
  hostingTeam!: Team;
  guestTeam!: Team;
  status!: FixtureStatus;
}

export enum FixtureType {
  SANTE = 'SANTE',
  FRIENDLY = 'FRIENDLY',
  ALLSTAR = 'ALLSTAR',
}

export enum FixtureStatus {
  PLAYED = 1,
  CANCELLED = 2,
  UPCOMING = 3,
}

export interface Team {
  name: string;
  color: string;
  isHost: boolean;
}
