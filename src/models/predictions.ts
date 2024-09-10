export interface PredictionsData {
    get: string;
    parameters: Parameters;
    errors: any[];
    results: number;
    paging: Paging;
    response: Response[];
}

export interface Parameters {
    fixture: string;
}

export interface Paging {
    current: number;
    total: number;
}

export interface Response {
    predictions: Predictions;
    league: League;
    teams: Teams;
    comparison: Comparison;
    h2h: H2h2[];
}

export interface Predictions {
    winner: Winner;
    win_or_draw: boolean;
    under_over: string;
    goals: Goals;
    advice: string;
    percent: Percent;
}

export interface Winner {
    id: number;
    name: string;
    comment: string;
}

export interface Goals {
    home: string;
    away: string;
}

export interface Percent {
    home: string;
    draw: string;
    away: string;
}

export interface League {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
}

export interface Teams {
    home: Home;
    away: Away;
}

export interface Home {
    id: number;
    name: string;
    logo: string;
    last_5: Last5;
    league: League2;
}

export interface Last5 {
    form: string;
    att: string;
    def: string;
    goals: Goals2;
}

export interface Goals2 {
    for: For;
    against: Against;
}

export interface For {
    total: number;
    average: number;
}

export interface Against {
    total: number;
    average: number;
}

export interface League2 {
    form: string;
    fixtures: Fixtures;
    goals: Goals3;
    biggest: Biggest;
    clean_sheet: CleanSheet;
    failed_to_score: FailedToScore;
}

export interface Fixtures {
    played: Played;
    wins: Wins;
    draws: Draws;
    loses: Loses;
}

export interface Played {
    home: number;
    away: number;
    total: number;
}

export interface Wins {
    home: number;
    away: number;
    total: number;
}

export interface Draws {
    home: number;
    away: number;
    total: number;
}

export interface Loses {
    home: number;
    away: number;
    total: number;
}

export interface Goals3 {
    for: For2;
    against: Against2;
}

export interface For2 {
    total: Total;
    average: Average;
}

export interface Total {
    home: number;
    away: number;
    total: number;
}

export interface Average {
    home: string;
    away: string;
    total: string;
}

export interface Against2 {
    total: Total2;
    average: Average2;
}

export interface Total2 {
    home: number;
    away: number;
    total: number;
}

export interface Average2 {
    home: string;
    away: string;
    total: string;
}

export interface Biggest {
    streak: Streak;
    wins: Wins2;
    loses: Loses2;
    goals: Goals4;
}

export interface Streak {
    wins: number;
    draws: number;
    loses: number;
}

export interface Wins2 {
    home: string;
    away: string;
}

export interface Loses2 {
    home: string;
    away: string;
}

export interface Goals4 {
    for: For3;
    against: Against3;
}

export interface For3 {
    home: number;
    away: number;
}

export interface Against3 {
    home: number;
    away: number;
}

export interface CleanSheet {
    home: number;
    away: number;
    total: number;
}

export interface FailedToScore {
    home: number;
    away: number;
    total: number;
}

export interface Away {
    id: number;
    name: string;
    logo: string;
    last_5: Last52;
    league: League3;
}

export interface Last52 {
    form: string;
    att: string;
    def: string;
    goals: Goals5;
}

export interface Goals5 {
    for: For4;
    against: Against4;
}

export interface For4 {
    total: number;
    average: number;
}

export interface Against4 {
    total: number;
    average: number;
}

export interface League3 {
    form: string;
    fixtures: Fixtures2;
    goals: Goals6;
    biggest: Biggest2;
    clean_sheet: CleanSheet2;
    failed_to_score: FailedToScore2;
}

export interface Fixtures2 {
    played: Played2;
    wins: Wins3;
    draws: Draws2;
    loses: Loses3;
}

export interface Played2 {
    home: number;
    away: number;
    total: number;
}

export interface Wins3 {
    home: number;
    away: number;
    total: number;
}

export interface Draws2 {
    home: number;
    away: number;
    total: number;
}

export interface Loses3 {
    home: number;
    away: number;
    total: number;
}

export interface Goals6 {
    for: For5;
    against: Against5;
}

export interface For5 {
    total: Total3;
    average: Average3;
}

export interface Total3 {
    home: number;
    away: number;
    total: number;
}

export interface Average3 {
    home: string;
    away: string;
    total: string;
}

export interface Against5 {
    total: Total4;
    average: Average4;
}

export interface Total4 {
    home: number;
    away: number;
    total: number;
}

export interface Average4 {
    home: string;
    away: string;
    total: string;
}

export interface Biggest2 {
    streak: Streak2;
    wins: Wins4;
    loses: Loses4;
    goals: Goals7;
}

export interface Streak2 {
    wins: number;
    draws: number;
    loses: number;
}

export interface Wins4 {
    home: string;
    away: string;
}

export interface Loses4 {
    home: string;
    away: string;
}

export interface Goals7 {
    for: For6;
    against: Against6;
}

export interface For6 {
    home: number;
    away: number;
}

export interface Against6 {
    home: number;
    away: number;
}

export interface CleanSheet2 {
    home: number;
    away: number;
    total: number;
}

export interface FailedToScore2 {
    home: number;
    away: number;
    total: number;
}

export interface Comparison {
    form: Form;
    att: Att;
    def: Def;
    poisson_distribution: PoissonDistribution;
    h2h: H2h;
    goals: Goals8;
    total: Total5;
}

export interface Form {
    home: string;
    away: string;
}

export interface Att {
    home: string;
    away: string;
}

export interface Def {
    home: string;
    away: string;
}

export interface PoissonDistribution {
    home: string;
    away: string;
}

export interface H2h {
    home: string;
    away: string;
}

export interface Goals8 {
    home: string;
    away: string;
}

export interface Total5 {
    home: string;
    away: string;
}

export interface H2h2 {
    fixture: Fixture;
    league: League4;
    teams: Teams2;
    goals: Goals9;
    score: Score;
}

export interface Fixture {
    id: number;
    referee?: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: Periods;
    venue: Venue;
    status: Status;
}

export interface Periods {
    first: number;
    second: number;
}

export interface Venue {
    id: any;
    name: string;
    city: any;
}

export interface Status {
    long: string;
    short: string;
    elapsed: number;
}

export interface League4 {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
}

export interface Teams2 {
    home: Home2;
    away: Away2;
}

export interface Home2 {
    id: number;
    name: string;
    logo: string;
    winner?: boolean;
}

export interface Away2 {
    id: number;
    name: string;
    logo: string;
    winner?: boolean;
}

export interface Goals9 {
    home: number;
    away: number;
}

export interface Score {
    halftime: Halftime;
    fulltime: Fulltime;
    extratime: Extratime;
    penalty: Penalty;
}

export interface Halftime {
    home: number;
    away: number;
}

export interface Fulltime {
    home: number;
    away: number;
}

export interface Extratime {
    home: any;
    away: any;
}

export interface Penalty {
    home: any;
    away: any;
}
