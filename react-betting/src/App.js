import { useState } from 'react';

const url =
  'https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=05eff7443654a61606f0a2433a420855&markets=h2h,spreads,totals&bookmakers=onexbet';

const eventListJSON = [
  {
    id: '4606047aeb27e6856b3ff293ec578e43',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-03-30T12:30:00Z',
    home_team: 'Newcastle United',
    away_team: 'West Ham United',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Newcastle United',
                price: 1.83,
              },
              {
                name: 'West Ham United',
                price: 4.26,
              },
              {
                name: 'Draw',
                price: 4.26,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Newcastle United',
                price: 2.85,
                point: -1.5,
              },
              {
                name: 'West Ham United',
                price: 1.39,
                point: 1.5,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 2.33,
                point: 3.5,
              },
              {
                name: 'Under',
                price: 1.71,
                point: 3.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '6619d3ca44afc07cccaee264d4f62977',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-03-30T15:00:00Z',
    home_team: 'Bournemouth',
    away_team: 'Everton',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Bournemouth',
                price: 2.21,
              },
              {
                name: 'Everton',
                price: 3.33,
              },
              {
                name: 'Draw',
                price: 3.8,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Bournemouth',
                price: 1.6,
                point: 0.0,
              },
              {
                name: 'Everton',
                price: 2.4,
                point: 0.0,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 1.79,
                point: 2.5,
              },
              {
                name: 'Under',
                price: 2.18,
                point: 2.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2597298743f78005ba7c2b7f9cefd2a4',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-03-30T15:00:00Z',
    home_team: 'Chelsea',
    away_team: 'Burnley',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Burnley',
                price: 9.3,
              },
              {
                name: 'Chelsea',
                price: 1.36,
              },
              {
                name: 'Draw',
                price: 5.74,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Burnley',
                price: 1.98,
                point: 1.5,
              },
              {
                name: 'Chelsea',
                price: 1.96,
                point: -1.5,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 2.38,
                point: 3.5,
              },
              {
                name: 'Under',
                price: 1.68,
                point: 3.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'd1e3eb5871c7e3b1ac9dabd09d94344f',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-03-30T15:00:00Z',
    home_team: 'Nottingham Forest',
    away_team: 'Crystal Palace',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Crystal Palace',
                price: 3.39,
              },
              {
                name: 'Nottingham Forest',
                price: 2.3,
              },
              {
                name: 'Draw',
                price: 3.5,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Crystal Palace',
                price: 2.36,
                point: 0.0,
              },
              {
                name: 'Nottingham Forest',
                price: 1.61,
                point: 0.0,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 2.18,
                point: 2.5,
              },
              {
                name: 'Under',
                price: 1.79,
                point: 2.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'efb7bcd1f4959bf80197ec581b077cb2',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-03-30T15:00:00Z',
    home_team: 'Sheffield United',
    away_team: 'Fulham',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Fulham',
                price: 1.81,
              },
              {
                name: 'Sheffield United',
                price: 4.51,
              },
              {
                name: 'Draw',
                price: 4.16,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Fulham',
                price: 2.89,
                point: -1.5,
              },
              {
                name: 'Sheffield United',
                price: 1.38,
                point: 1.5,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 1.74,
                point: 2.5,
              },
              {
                name: 'Under',
                price: 2.27,
                point: 2.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '8a065e80284e1157870534a772c62305',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-03-30T15:00:00Z',
    home_team: 'Tottenham Hotspur',
    away_team: 'Luton',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Luton',
                price: 10.8,
              },
              {
                name: 'Tottenham Hotspur',
                price: 1.27,
              },
              {
                name: 'Draw',
                price: 7.22,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Luton',
                price: 2.33,
                point: 1.5,
              },
              {
                name: 'Tottenham Hotspur',
                price: 1.71,
                point: -1.5,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 1.77,
                point: 3.5,
              },
              {
                name: 'Under',
                price: 2.22,
                point: 3.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '60b84c40ac236905064dae0535ba9c73',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-03-30T17:30:00Z',
    home_team: 'Aston Villa',
    away_team: 'Wolverhampton Wanderers',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Aston Villa',
                price: 1.66,
              },
              {
                name: 'Wolverhampton Wanderers',
                price: 5.13,
              },
              {
                name: 'Draw',
                price: 4.57,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Aston Villa',
                price: 2.5,
                point: -1.5,
              },
              {
                name: 'Wolverhampton Wanderers',
                price: 1.49,
                point: 1.5,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 2.42,
                point: 3.5,
              },
              {
                name: 'Under',
                price: 1.66,
                point: 3.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3c3df999f07010248fb7e25e24bc851e',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-03-30T20:00:00Z',
    home_team: 'Brentford',
    away_team: 'Manchester United',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Brentford',
                price: 3.04,
              },
              {
                name: 'Manchester United',
                price: 2.33,
              },
              {
                name: 'Draw',
                price: 3.88,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Brentford',
                price: 2.26,
                point: 0.0,
              },
              {
                name: 'Manchester United',
                price: 1.75,
                point: 0.0,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 1.68,
                point: 2.5,
              },
              {
                name: 'Under',
                price: 2.38,
                point: 2.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '6cc43229e6d4cecb17a81350fadc348e',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-03-31T13:00:00Z',
    home_team: 'Liverpool',
    away_team: 'Brighton and Hove Albion',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Brighton and Hove Albion',
                price: 8.1,
              },
              {
                name: 'Liverpool',
                price: 1.39,
              },
              {
                name: 'Draw',
                price: 5.87,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Brighton and Hove Albion',
                price: 1.98,
                point: 1.5,
              },
              {
                name: 'Liverpool',
                price: 1.96,
                point: -1.5,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 1.98,
                point: 3.5,
              },
              {
                name: 'Under',
                price: 1.96,
                point: 3.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '742a2b03e7bda7de65179b2a3eee8bd2',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-03-31T15:30:00Z',
    home_team: 'Manchester City',
    away_team: 'Arsenal',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Arsenal',
                price: 4.39,
              },
              {
                name: 'Manchester City',
                price: 1.83,
              },
              {
                name: 'Draw',
                price: 4.15,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Arsenal',
                price: 1.64,
                point: 1.0,
              },
              {
                name: 'Manchester City',
                price: 2.47,
                point: -1.0,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 1.76,
                point: 2.5,
              },
              {
                name: 'Under',
                price: 2.24,
                point: 2.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2b45606a19467a04cbe30aabdba5f6d9',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-04-02T18:30:00Z',
    home_team: 'Newcastle United',
    away_team: 'Everton',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Everton',
                price: 4.56,
              },
              {
                name: 'Newcastle United',
                price: 1.84,
              },
              {
                name: 'Draw',
                price: 3.94,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Everton',
                price: 1.4,
                point: 1.5,
              },
              {
                name: 'Newcastle United',
                price: 3.0,
                point: -1.5,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 2.48,
                point: 3.5,
              },
              {
                name: 'Under',
                price: 1.63,
                point: 3.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '5d50cb1b7d2e3290d56d0398e01e60e3',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-04-02T18:30:00Z',
    home_team: 'Nottingham Forest',
    away_team: 'Fulham',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Fulham',
                price: 2.83,
              },
              {
                name: 'Nottingham Forest',
                price: 2.62,
              },
              {
                name: 'Draw',
                price: 3.56,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Fulham',
                price: 2.0,
                point: 0.0,
              },
              {
                name: 'Nottingham Forest',
                price: 1.94,
                point: 0.0,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 1.85,
                point: 2.5,
              },
              {
                name: 'Under',
                price: 2.11,
                point: 2.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '69763436c65e956ddc950c436b64a290',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-04-02T18:45:00Z',
    home_team: 'Bournemouth',
    away_team: 'Crystal Palace',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Bournemouth',
                price: 1.94,
              },
              {
                name: 'Crystal Palace',
                price: 4.22,
              },
              {
                name: 'Draw',
                price: 3.81,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Bournemouth',
                price: 1.41,
                point: 0.0,
              },
              {
                name: 'Crystal Palace',
                price: 3.1,
                point: 0.0,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 1.77,
                point: 2.5,
              },
              {
                name: 'Under',
                price: 2.23,
                point: 2.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2883b9e70f9f90877c85ebb1bceebf82',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-04-02T18:45:00Z',
    home_team: 'Burnley',
    away_team: 'Wolverhampton Wanderers',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Burnley',
                price: 2.72,
              },
              {
                name: 'Wolverhampton Wanderers',
                price: 2.67,
              },
              {
                name: 'Draw',
                price: 3.66,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Burnley',
                price: 1.98,
                point: 0.0,
              },
              {
                name: 'Wolverhampton Wanderers',
                price: 1.96,
                point: 0.0,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 1.82,
                point: 2.5,
              },
              {
                name: 'Under',
                price: 2.14,
                point: 2.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '10d617cd5230f91dd2886bc5249d2f63',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-04-02T19:15:00Z',
    home_team: 'West Ham United',
    away_team: 'Tottenham Hotspur',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Tottenham Hotspur',
                price: 2.05,
              },
              {
                name: 'West Ham United',
                price: 3.46,
              },
              {
                name: 'Draw',
                price: 4.2,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Tottenham Hotspur',
                price: 1.55,
                point: 0.0,
              },
              {
                name: 'West Ham United',
                price: 2.55,
                point: 0.0,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 2.16,
                point: 3.5,
              },
              {
                name: 'Under',
                price: 1.81,
                point: 3.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '7801e89270a952704db9fe98f66720b9',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-04-03T18:30:00Z',
    home_team: 'Arsenal',
    away_team: 'Luton',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Arsenal',
                price: 1.18,
              },
              {
                name: 'Luton',
                price: 17.5,
              },
              {
                name: 'Draw',
                price: 8.8,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Arsenal',
                price: 2.23,
                point: -2.5,
              },
              {
                name: 'Luton',
                price: 1.77,
                point: 2.5,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 1.81,
                point: 3.5,
              },
              {
                name: 'Under',
                price: 2.17,
                point: 3.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ed20905dccc1b8fd3c7e553e8c2e7dbe',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-04-03T18:30:00Z',
    home_team: 'Brentford',
    away_team: 'Brighton and Hove Albion',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Brentford',
                price: 2.63,
              },
              {
                name: 'Brighton and Hove Albion',
                price: 2.63,
              },
              {
                name: 'Draw',
                price: 3.94,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Brentford',
                price: 1.94,
                point: 0.0,
              },
              {
                name: 'Brighton and Hove Albion',
                price: 2.0,
                point: 0.0,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 2.44,
                point: 3.5,
              },
              {
                name: 'Under',
                price: 1.65,
                point: 3.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '4c51af29ed929e650f9be88ab4ae5d77',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-04-03T19:15:00Z',
    home_team: 'Manchester City',
    away_team: 'Aston Villa',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Aston Villa',
                price: 9.65,
              },
              {
                name: 'Manchester City',
                price: 1.33,
              },
              {
                name: 'Draw',
                price: 6.25,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Aston Villa',
                price: 2.09,
                point: 1.5,
              },
              {
                name: 'Manchester City',
                price: 1.86,
                point: -1.5,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 2.16,
                point: 3.5,
              },
              {
                name: 'Under',
                price: 1.81,
                point: 3.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'bb4fa8be4734f8faaa37de47c0423b29',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-04-04T18:30:00Z',
    home_team: 'Liverpool',
    away_team: 'Sheffield United',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Liverpool',
                price: 1.11,
              },
              {
                name: 'Sheffield United',
                price: 29.0,
              },
              {
                name: 'Draw',
                price: 12.4,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Liverpool',
                price: 1.88,
                point: -2.5,
              },
              {
                name: 'Sheffield United',
                price: 2.07,
                point: 2.5,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 1.73,
                point: 3.5,
              },
              {
                name: 'Under',
                price: 2.29,
                point: 3.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '669758585d86adfedda3eed1dbedb47a',
    sport_key: 'soccer_epl',
    sport_title: 'EPL',
    commence_time: '2024-04-04T19:15:00Z',
    home_team: 'Chelsea',
    away_team: 'Manchester United',
    bookmakers: [
      {
        key: 'onexbet',
        title: '1xBet',
        last_update: '2024-03-18T05:16:25Z',
        markets: [
          {
            key: 'h2h',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Chelsea',
                price: 2.05,
              },
              {
                name: 'Manchester United',
                price: 3.79,
              },
              {
                name: 'Draw',
                price: 3.79,
              },
            ],
          },
          {
            key: 'spreads',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Chelsea',
                price: 1.51,
                point: 0.0,
              },
              {
                name: 'Manchester United',
                price: 2.65,
                point: 0.0,
              },
            ],
          },
          {
            key: 'totals',
            last_update: '2024-03-18T05:16:25Z',
            outcomes: [
              {
                name: 'Over',
                price: 2.33,
                point: 3.5,
              },
              {
                name: 'Under',
                price: 1.71,
                point: 3.5,
              },
            ],
          },
        ],
      },
    ],
  },
];

const eventlist = JSON.parse(JSON.stringify(eventListJSON)).map(event => {
  return {
    id: event.id,
    time: event.commence_time.replace('T', ' ').slice(0, -4),
    homeTeam: event.home_team,
    awayTeam: event.away_team,
    markets: event.bookmakers[0].markets.map(market => {
      return { key: market.key, outcomes: market.outcomes };
    }),
  };
});

function App() {
  const [bets, setBets] = useState([]);

  function handleAddBet(newBet) {
    if (bets.filter(bet => bet.teams === newBet.teams)) setBets(bets => bets.filter(bet => bet.teams !== newBet.teams));
    setBets(bets => [...bets, newBet]);
  }

  function handleDeleteBet(curBet) {
    setBets(bets => bets.filter(bet => bet.teams !== curBet.teams));
  }

  function handleDeleteAllBets() {
    setBets([]);
  }

  function handleStake(value, curBet) {
    console.log(value);
    setBets(bets => bets.map(bet => (bet.teams === curBet.teams ? { ...bet, stake: value } : bet)));
  }

  return (
    <section className="betting-app">
      <EventList onAddBet={handleAddBet} />
      {bets.length > 0 && (
        <BetSlip
          bets={bets}
          onSetStake={handleStake}
          onDeleteBet={handleDeleteBet}
          onDeleteAllBets={handleDeleteAllBets}
        />
      )}
    </section>
  );
}

export default App;

function EventList({ onAddBet }) {
  return (
    <div className="event-list-container">
      <div className="event-list__header">
        <div></div>
        <div>
          <p className="odds-type">H2H</p>
          <p className="odds-type-desc">
            <span>1</span>
            <span>X</span>
            <span>2</span>
          </p>
        </div>

        <div>
          <p className="odds-type">Handicap</p>
          <p className="odds-type-desc">
            <span>1</span>
            <span>-</span>
            <span>2</span>
          </p>
        </div>

        <div>
          <p className="odds-type">Total</p>
          <p className="odds-type-desc">
            <span>O</span>
            <span>-</span>
            <span>U</span>
          </p>
        </div>
      </div>
      <ul className="event-list">
        {eventlist.map(event => (
          <Event event={event} onAddBet={onAddBet} key={event.id} />
        ))}
      </ul>
    </div>
  );
}

function Event({ event, onAddBet }) {
  const [h2h, spreads, totals] = event.markets;
  const homePoint = spreads.outcomes.find(outcome => outcome.name === event.homeTeam).point;
  const awayPoint = spreads.outcomes.find(outcome => outcome.name === event.awayTeam).point;
  const totalPoint = totals.outcomes[0].point;
  const [selectSpreads, setSelectSpreads] = useState(homePoint);
  const [selectTotals, setSelectTotals] = useState(totalPoint);
  return (
    <li className="event">
      <div className="event-info">
        <h3>{event.homeTeam}</h3>
        <h3>{event.awayTeam}</h3>
        <p>{event.time}</p>
      </div>

      <Odds>
        <Button
          onAddBet={onAddBet}
          homeTeam={event.homeTeam}
          awayTeam={event.awayTeam}
          type="H2H"
          title="W1"
          time={event.time}
        >
          {h2h.outcomes.find(outcome => outcome.name === event.homeTeam).price}
        </Button>
        <Button
          onAddBet={onAddBet}
          homeTeam={event.homeTeam}
          awayTeam={event.awayTeam}
          type="H2H"
          title="Draw"
          time={event.time}
        >
          {h2h.outcomes.find(outcome => outcome.name === 'Draw').price}
        </Button>
        <Button
          onAddBet={onAddBet}
          homeTeam={event.homeTeam}
          awayTeam={event.awayTeam}
          type="H2H"
          title="W2"
          time={event.time}
        >
          {h2h.outcomes.find(outcome => outcome.name === event.awayTeam).price}
        </Button>
      </Odds>
      <Odds additionStyle="spreads">
        <Button
          onAddBet={onAddBet}
          homeTeam={event.homeTeam}
          awayTeam={event.awayTeam}
          type="Handicap"
          title={`${event.homeTeam} (${homePoint})`}
          time={event.time}
        >
          {spreads.outcomes.find(outcome => outcome.name === event.homeTeam).price}
        </Button>
        <div className="select-spreads">
          <span>{homePoint > 0 ? '+' : homePoint < 0 ? '-' : ' '}</span>
          <Select point={Math.abs(homePoint)} value={selectSpreads} onChange={e => setSelectSpreads(+e.target.value)} />
          <span>{homePoint < 0 ? '+' : homePoint > 0 ? '-' : ' '}</span>
        </div>
        <Button
          onAddBet={onAddBet}
          homeTeam={event.homeTeam}
          awayTeam={event.awayTeam}
          type="Handicap"
          title={`${event.awayTeam} (${awayPoint})`}
          time={event.time}
        >
          {spreads.outcomes.find(outcome => outcome.name === event.awayTeam).price}
        </Button>
      </Odds>
      <Odds>
        <Button
          onAddBet={onAddBet}
          homeTeam={event.homeTeam}
          awayTeam={event.awayTeam}
          type="Totals"
          title={`Over ${selectTotals}`}
          time={event.time}
        >
          {totals.outcomes[0].price}
        </Button>
        <Select point={totalPoint} value={selectTotals} onChange={e => setSelectTotals(+e.target.value)} />
        <Button
          onAddBet={onAddBet}
          homeTeam={event.homeTeam}
          awayTeam={event.awayTeam}
          type="Totals"
          title={`Under ${selectTotals}`}
          time={event.time}
        >
          {totals.outcomes[1].price}
        </Button>
      </Odds>
    </li>
  );
}

function Odds({ children, additionStyle }) {
  return <div className={`odds ${additionStyle ? additionStyle : ''}`}>{children}</div>;
}

function BetSlip({ bets, onSetStake, onDeleteBet, onDeleteAllBets }) {
  const [isOpen, setIsOpen] = useState(true);
  const [accStake, setAccStake] = useState(0);

  function handleSetAccStake(value) {
    if (isNaN(value)) return;
    setAccStake(value);
  }

  return (
    <div className="bet-slip">
      <div className="bet-slip__header">
        <p>
          Bet Slip <span>{bets.length}</span>
        </p>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <>
          <button className="trash" onClick={onDeleteAllBets}>
            <span>Clear bet slip</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="bets-list-container">
            <BetsList bets={bets} onSetStake={onSetStake} onDeleteBet={onDeleteBet} />
          </div>
          {bets.some(bet => bet.stake > 0) && (
            <div className="all-singles">
              <p>
                Total staked on all singles
                <span> {bets.reduce((acc, cur) => (cur.stake > 0 ? acc + 1 : acc), 0)}</span>
              </p>
              <div className="sum">
                <input type="text" value={bets.reduce((acc, cur) => cur.stake + acc, 0)} disabled></input>
              </div>
            </div>
          )}
          {bets.length > 1 && (
            <div className="acc">
              <p>
                Accamulator <span>{bets.length}</span>
              </p>
              <div className="sum">
                <span>{bets.reduce((acc, cur) => (acc === 0 ? cur.odds : acc * cur.odds), 0).toFixed(2)}</span> x
                <div className="input-cpntainer">
                  <input type="text" value={accStake} onChange={e => handleSetAccStake(+e.target.value)}></input>
                  {accStake > 0 && (
                    <label>{`Payout BYN ${(
                      bets.reduce((acc, cur) => (acc === 0 ? cur.odds : acc * cur.odds), 0).toFixed(2) * accStake
                    ).toFixed(2)}`}</label>
                  )}
                </div>
              </div>
            </div>
          )}
          <button className="submit-btn">Place a bet</button>
          <div className="total-coupone">
            <div className="total-winnings">
              <p className="total-header">Possible Winnings</p>
              <p className="winnings">
                {(
                  +(
                    bets.reduce((acc, cur) => (acc === 0 ? cur.odds : acc * cur.odds), 0).toFixed(2) * accStake
                  ).toFixed(2) + +bets.reduce((acc, cur) => (acc = acc + cur.odds * cur.stake), 0).toFixed(2)
                ).toFixed(2) + ' BYN'}
              </p>
            </div>
            <div className="total-stakes">
              <p className="total-header">Total stakes</p>
              <p className="stakes">{accStake + bets.reduce((acc, cur) => cur.stake + acc, 0) + ' BYN'}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function BetsList({ bets, onSetStake, onDeleteBet }) {
  return (
    <ul className="bets-list">
      {bets.map(bet => (
        <Bet bet={bet} onSetStake={onSetStake} onDeleteBet={onDeleteBet} key={bet.teams} />
      ))}
    </ul>
  );
}

function Bet({ bet, onSetStake, onDeleteBet }) {
  function handleStake(value) {
    if (isNaN(value)) return;
    onSetStake(value, bet);
  }
  return (
    <li className="bet">
      <button onClick={() => onDeleteBet(bet)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="bet-info">
        <h3>{bet.title}</h3>
        <p>{bet.type}</p>
        <p>{bet.time}</p>
        <p>{bet.teams}</p>
      </div>
      <div className="sum">
        <span>{bet.odds}</span> x
        <div className="input-container">
          <input type="text" value={bet.stake} onChange={e => handleStake(+e.target.value)}></input>
          {bet.stake > 0 && <label>{`Payout BYN ${(bet.odds * bet.stake).toFixed(2)}`}</label>}
        </div>
      </div>
    </li>
  );
}

function Button({ children, homeTeam, awayTeam, type, title, time, onAddBet }) {
  function handleAdding() {
    const bet = { odds: children, teams: `${homeTeam} - ${awayTeam}`, time, type, title, stake: 0 };
    onAddBet(bet);
  }
  return (
    <button className="btn" onClick={handleAdding}>
      {children}
    </button>
  );
}

function Select({ point }) {
  return (
    <select className="select">
      <option value={point}>{point}</option>
    </select>
  );
}
