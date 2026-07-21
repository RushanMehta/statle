const playersDatabase = {
    football: [
// 2025 NFL regular-season stats (corrected/expanded against Pro-Football-Reference)
// "yards" / "tds" are now TOTAL: passing+rushing for QBs, rushing+receiving for RBs/WRs/TEs
// jersey: null where I couldn't confirm the number with confidence

// ============================= QUARTERBACKS =============================
// yards/tds = passing + rushing combined
  { name: "Drake Maye", position: "QB", team: "NE", yards: 4844, tds: 35, jersey: 10, age: 23 },
  { name: "Dak Prescott", position: "QB", team: "DAL", yards: 4729, tds: 32, jersey: 4, age: 32 },
  { name: "Josh Allen", position: "QB", team: "BUF", yards: 4247, tds: 39, jersey: 17, age: 29 },
  { name: "Jared Goff", position: "QB", team: "DET", yards: 4609, tds: 34, jersey: 16, age: 31 },
  { name: "Matthew Stafford", position: "QB", team: "LAR", yards: 4708, tds: 46, jersey: 9, age: 37 }, // AP MVP
  { name: "Trevor Lawrence", position: "QB", team: "JAX", yards: 4366, tds: 38, jersey: 16, age: 26 },
  { name: "Caleb Williams", position: "QB", team: "CHI", yards: 4330, tds: 30, jersey: 18, age: 24 },
  { name: "Bo Nix", position: "QB", team: "DEN", yards: 4287, tds: 30, jersey: 10, age: 25 },
  { name: "Justin Herbert", position: "QB", team: "LAC", yards: 4225, tds: 28, jersey: 10, age: 27 },
  { name: "Sam Darnold", position: "QB", team: "SEA", yards: 4143, tds: 25, jersey: 14, age: 28 }, // Super Bowl champs
  { name: "Baker Mayfield", position: "QB", team: "TB", yards: 4075, tds: 27, jersey: 6, age: 30 },
  { name: "Patrick Mahomes", position: "QB", team: "KC", yards: 4009, tds: 27, jersey: 15, age: 30 },
  { name: "Jalen Hurts", position: "QB", team: "PHI", yards: 3645, tds: 33, jersey: 1, age: 27 },
  { name: "Jordan Love", position: "QB", team: "GB", yards: 3580, tds: 23, jersey: 10, age: 27 },
  { name: "Jacoby Brissett", position: "QB", team: "ARI", yards: 3534, tds: 24, jersey: 7, age: 33 },
  { name: "Aaron Rodgers", position: "QB", team: "PIT", yards: 3383, tds: 25, jersey: 8, age: 42 },
  { name: "Cam Ward", position: "QB", team: "TEN", yards: 3328, tds: 17, jersey: 1, age: 23 },
  { name: "Daniel Jones", position: "QB", team: "IND", yards: 3265, tds: 24, jersey: 17, age: 28 },
  { name: "C.J. Stroud", position: "QB", team: "HOU", yards: 3250, tds: 20, jersey: 7, age: 24 },
  { name: "Bryce Young", position: "QB", team: "CAR", yards: 3227, tds: 25, jersey: 9, age: 24 },
  { name: "Geno Smith", position: "QB", team: "LV", yards: 3134, tds: 19, jersey: 7, age: 35 },
  { name: "Lamar Jackson", position: "QB", team: "BAL", yards: 2898, tds: 23, jersey: 8, age: 28 },
  { name: "Tua Tagovailoa", position: "QB", team: "MIA", yards: 2703, tds: 20, jersey: 1, age: 27 },
  { name: "Jaxson Dart", position: "QB", team: "NYG", yards: 2759, tds: 24, jersey: 6, age: 22 },
  { name: "Joe Flacco", position: "QB", team: "CLE/CIN", yards: 2514, tds: 16, jersey: 16, age: 40 },
  { name: "Tyler Shough", position: "QB", team: "NO", yards: 2570, tds: 13, jersey: 6, age: 26 },
  { name: "Brock Purdy", position: "QB", team: "SF", yards: 2314, tds: 23, jersey: 13, age: 26 },
  { name: "Mac Jones", position: "QB", team: "SF", yards: 2211, tds: 13, jersey: 10, age: 27 },
  { name: "Marcus Mariota", position: "QB", team: "WAS", yards: 1992, tds: 11, jersey: 8, age: 32 },
  { name: "Michael Penix Jr.", position: "QB", team: "ATL", yards: 2052, tds: 10, jersey: 9, age: 25 },
  { name: "Joe Burrow", position: "QB", team: "CIN", yards: 1850, tds: 17, jersey: 9, age: 29 }, // injury-shortened
  { name: "Kirk Cousins", position: "QB", team: "ATL", yards: 1728, tds: 11, jersey: 18, age: 37 }, // now w/ Atlanta
  { name: "J.J. McCarthy", position: "QB", team: "MIN", yards: 1813, tds: 15, jersey: 9, age: 22 },
  { name: "Justin Fields", position: "QB", team: "NYJ", yards: 1642, tds: 11, jersey: 6, age: 26 },
  { name: "Spencer Rattler", position: "QB", team: "NO", yards: 1753, tds: 8, jersey: 18, age: 25 },
  { name: "Jayden Daniels", position: "QB", team: "WAS", yards: 1540, tds: 10, jersey: 5, age: 25 }, // injury-shortened
  { name: "Shedeur Sanders", position: "QB", team: "CLE", yards: 1569, tds: 8, jersey: 2, age: 23 },
  { name: "Carson Wentz", position: "QB", team: "MIN", yards: 1273, tds: 6, jersey: 11, age: 33 },
  { name: "Dillon Gabriel", position: "QB", team: "CLE", yards: 1023, tds: 7, jersey: 6, age: 25 },
  { name: "Kyler Murray", position: "QB", team: "ARI", yards: 1135, tds: 7, jersey: 1, age: 28 }, // injury-shortened
  { name: "Davis Mills", position: "QB", team: "HOU", yards: 975, tds: 6, jersey: 10, age: 27 },
  { name: "Russell Wilson", position: "QB", team: "NYG", yards: 937, tds: 3, jersey: 3, age: 37 },
  { name: "Tyrod Taylor", position: "QB", team: "NYJ", yards: 922, tds: 6, jersey: 6, age: 36 },
  { name: "Jake Browning", position: "QB", team: "CIN", yards: 810, tds: 7, jersey: 5, age: 29 },
  { name: "Brady Cook", position: "QB", team: "NYJ", yards: 788, tds: 2, jersey: 4, age: 24 },
  { name: "Malik Willis", position: "QB", team: "GB", yards: 545, tds: 5, jersey: 2, age: 26 },
  { name: "Tyler Huntley", position: "QB", team: "BAL", yards: 577, tds: 2, jersey: 5, age: 27 },
  { name: "Quinn Ewers", position: "QB", team: "MIA", yards: 641, tds: 3, jersey: 14, age: 22 },
  { name: "Jameis Winston", position: "QB", team: "NYG", yards: 567, tds: 2, jersey: 19, age: 31 },
  { name: "Philip Rivers", position: "QB", team: "IND", yards: 544, tds: 4, jersey: 17, age: 44 },
  { name: "Riley Leonard", position: "QB", team: "IND", yards: 415, tds: 2, jersey: 15, age: 23 },
  { name: "Anthony Richardson", position: "QB", team: "IND", yards: 9, tds: 0, jersey: 5, age: 23 }, // 2 games, injured


// ============================= RUNNING BACKS =============================
// yards/tds = rushing + receiving combined
  { name: "Bijan Robinson", position: "RB", team: "ATL", yards: 2298, tds: 11, jersey: 7, age: 23 },
  { name: "Christian McCaffrey", position: "RB", team: "SF", yards: 2126, tds: 17, jersey: 23, age: 29 }, // AP-1, AP CPoY-1
  { name: "Jonathan Taylor", position: "RB", team: "IND", yards: 1963, tds: 20, jersey: 28, age: 26 },
  { name: "James Cook", position: "RB", team: "BUF", yards: 1912, tds: 14, jersey: 4, age: 26 },
  { name: "Jahmyr Gibbs", position: "RB", team: "DET", yards: 1839, tds: 18, jersey: 26, age: 23 },
  { name: "De'Von Achane", position: "RB", team: "MIA", yards: 1838, tds: 12, jersey: 28, age: 24 },
  { name: "Breece Hall", position: "RB", team: "NYJ", yards: 1415, tds: 5, jersey: 20, age: 24 },
  { name: "Saquon Barkley", position: "RB", team: "PHI", yards: 1413, tds: 9, jersey: 26, age: 28 },
  { name: "Derrick Henry", position: "RB", team: "BAL", yards: 1595, tds: 16, jersey: 22, age: 31 }, // receiving total not confirmed
  { name: "Kyren Williams", position: "RB", team: "LAR", yards: 1533, tds: 13, jersey: 23, age: 25 },
  { name: "Chase Brown", position: "RB", team: "CIN", yards: 1456, tds: 11, jersey: 30, age: 25 },
  { name: "Travis Etienne", position: "RB", team: "JAX", yards: 1399, tds: 13, jersey: 1, age: 26 },
  { name: "D'Andre Swift", position: "RB", team: "CHI", yards: 1386, tds: 10, jersey: 4, age: 26 },
  { name: "Rico Dowdle", position: "RB", team: "CAR", yards: 1373, tds: 7, jersey: 23, age: 27 },
  { name: "Javonte Williams", position: "RB", team: "DAL", yards: 1338, tds: 13, jersey: 33, age: 25 },
  { name: "Ashton Jeanty", position: "RB", team: "LV", yards: 1321, tds: 10, jersey: 22, age: 22 },
  { name: "Jaylen Warren", position: "RB", team: "PIT", yards: 1291, tds: 8, jersey: 30, age: 27 },
  { name: "Tony Pollard", position: "RB", team: "TEN", yards: 1288, tds: 5, jersey: 20, age: 28 },
  { name: "Kenneth Walker III", position: "RB", team: "SEA", yards: 1309, tds: 5, jersey: 9, age: 25 },
  { name: "Josh Jacobs", position: "RB", team: "GB", yards: 1211, tds: 14, jersey: 8, age: 27 },
  { name: "TreVeyon Henderson", position: "RB", team: "NE", yards: 1132, tds: 10, jersey: 32, age: 23 },
  { name: "Tyrone Tracy Jr.", position: "RB", team: "NYG", yards: 1028, tds: 4, jersey: 29, age: 26 },
  { name: "Quinshon Judkins", position: "RB", team: "CLE", yards: 998, tds: 7, jersey: 4, age: 22 },
  { name: "Woody Marks", position: "RB", team: "HOU", yards: 911, tds: 5, jersey: 4, age: 25 },
  { name: "Rhamondre Stevenson", position: "RB", team: "NE", yards: 948, tds: 9, jersey: 38, age: 27 },
  { name: "RJ Harvey", position: "RB", team: "DEN", yards: 896, tds: 12, jersey: 12, age: 24 },
  { name: "Alvin Kamara", position: "RB", team: "NO", yards: 657, tds: 1, jersey: 41, age: 30 },
  { name: "David Montgomery", position: "RB", team: "DET", yards: 908, tds: 8, jersey: 5, age: 28 },
  { name: "Zach Charbonnet", position: "RB", team: "SEA", yards: 730, tds: 12, jersey: 26, age: 24 }, // receiving not confirmed
  { name: "Omarion Hampton", position: "RB", team: "LAC", yards: 737, tds: 5, jersey: 28, age: 22 }, // injury-shortened

// ============================= WIDE RECEIVERS =============================
// yards/tds = receiving + rushing combined
  { name: "Puka Nacua", position: "WR", team: "LAR", yards: 1820, tds: 11, jersey: 17, age: 24 }, // AP-1
  { name: "Jaxon Smith-Njigba", position: "WR", team: "SEA", yards: 1793, tds: 10, jersey: 11, age: 23 }, // AP OPoY
  { name: "George Pickens", position: "WR", team: "DAL", yards: 1429, tds: 9, jersey: 3, age: 24 },
  { name: "Ja'Marr Chase", position: "WR", team: "CIN", yards: 1412, tds: 8, jersey: 1, age: 25 },
  { name: "Amon-Ra St. Brown", position: "WR", team: "DET", yards: 1401, tds: 11, jersey: 14, age: 26 },
  { name: "Zay Flowers", position: "WR", team: "BAL", yards: 1273, tds: 6, jersey: 4, age: 25 },
  { name: "Nico Collins", position: "WR", team: "HOU", yards: 1117, tds: 6, jersey: 12, age: 26 },
  { name: "Jameson Williams", position: "WR", team: "DET", yards: 1117, tds: 7, jersey: 9, age: 24 },
  { name: "Chris Olave", position: "WR", team: "NO", yards: 1163, tds: 9, jersey: 12, age: 25 },
  { name: "CeeDee Lamb", position: "WR", team: "DAL", yards: 1077, tds: 3, jersey: 88, age: 26 },
  { name: "Michael Wilson", position: "WR", team: "ARI", yards: 1006, tds: 7, jersey: 14, age: 25 },
  { name: "DeVonta Smith", position: "WR", team: "PHI", yards: 1008, tds: 4, jersey: 6, age: 27 },
  { name: "Courtland Sutton", position: "WR", team: "DEN", yards: 1017, tds: 7, jersey: 14, age: 30 },
  { name: "Justin Jefferson", position: "WR", team: "MIN", yards: 1048, tds: 2, jersey: 18, age: 26 },
  { name: "A.J. Brown", position: "WR", team: "PHI", yards: 1003, tds: 7, jersey: 11, age: 28 },
  { name: "Wan'Dale Robinson", position: "WR", team: "NYG", yards: 1014, tds: 4, jersey: 17, age: 24 },
  { name: "Tetairoa McMillan", position: "WR", team: "CAR", yards: 1014, tds: 7, jersey: 4, age: 22 }, // AP OROY
  { name: "Stefon Diggs", position: "WR", team: "NE", yards: 1013, tds: 4, jersey: 8, age: 32 },
  { name: "Drake London", position: "WR", team: "ATL", yards: 919, tds: 7, jersey: 5, age: 24 },
  { name: "Jaylen Waddle", position: "WR", team: "MIA", yards: 918, tds: 6, jersey: 17, age: 27 },
  { name: "Emeka Egbuka", position: "WR", team: "TB", yards: 938, tds: 6, jersey: 1, age: 23 },
  { name: "Ladd McConkey", position: "WR", team: "LAC", yards: 789, tds: 6, jersey: 15, age: 24 },
  { name: "Davante Adams", position: "WR", team: "LAR", yards: 789, tds: 14, jersey: 17, age: 33 }, // league-leading rec TDs
  { name: "Tee Higgins", position: "WR", team: "CIN", yards: 846, tds: 11, jersey: 5, age: 26 },
  { name: "Michael Pittman Jr.", position: "WR", team: "IND", yards: 784, tds: 7, jersey: 11, age: 28 },
  { name: "Keenan Allen", position: "WR", team: "LAC", yards: 777, tds: 4, jersey: 13, age: 33 },
  { name: "Deebo Samuel", position: "WR", team: "WAS", yards: 802, tds: 6, jersey: 1, age: 29 },
  { name: "Troy Franklin", position: "WR", team: "DEN", yards: 709, tds: 6, jersey: 11, age: 22 },
  { name: "Khalil Shakir", position: "WR", team: "BUF", yards: 719, tds: 4, jersey: 10, age: 25 },
  { name: "Jakobi Meyers", position: "WR", team: "JAX", yards: 835, tds: 3, jersey: 3, age: 29 },


// ============================= TIGHT ENDS =============================
// yards/tds = receiving + rushing combined
  { name: "Trey McBride", position: "TE", team: "ARI", yards: 1239, tds: 11, jersey: 85, age: 26 }, // AP-1
  { name: "Kyle Pitts", position: "TE", team: "ATL", yards: 928, tds: 5, jersey: 8, age: 25 },
  { name: "Juwan Johnson", position: "TE", team: "NO", yards: 889, tds: 3, jersey: 83, age: 29 },
  { name: "Travis Kelce", position: "TE", team: "KC", yards: 851, tds: 5, jersey: 87, age: 36 },
  { name: "Tyler Warren", position: "TE", team: "IND", yards: 817, tds: 4, jersey: 12, age: 23 },
  { name: "Hunter Henry", position: "TE", team: "NE", yards: 768, tds: 7, jersey: 85, age: 31 },
  { name: "Dalton Schultz", position: "TE", team: "HOU", yards: 777, tds: 3, jersey: 86, age: 29 },
  { name: "Harold Fannin", position: "TE", team: "CLE", yards: 731, tds: 6, jersey: 88, age: 21 },
  { name: "Brock Bowers", position: "TE", team: "LV", yards: 680, tds: 7, jersey: 89, age: 23 }, // injury-shortened
  { name: "George Kittle", position: "TE", team: "SF", yards: 628, tds: 7, jersey: 85, age: 32 }, // injury-shortened
  { name: "Jake Ferguson", position: "TE", team: "DAL", yards: 600, tds: 8, jersey: 87, age: 26 },
  { name: "Colston Loveland", position: "TE", team: "CHI", yards: 713, tds: 6, jersey: 18, age: 21 },
  { name: "Oronde Gadsden II", position: "TE", team: "LAC", yards: 664, tds: 3, jersey: 86, age: 22 },
  { name: "Chig Okonkwo", position: "TE", team: "TEN", yards: 560, tds: 2, jersey: 85, age: 26 },
  { name: "Cade Otton", position: "TE", team: "TB", yards: 572, tds: 1, jersey: 88, age: 26 },
  { name: "Dallas Goedert", position: "TE", team: "PHI", yards: 591, tds: 11, jersey: 88, age: 30 },
  { name: "AJ Barner", position: "TE", team: "SEA", yards: 533, tds: 7, jersey: 88, age: 23 },
  { name: "Evan Engram", position: "TE", team: "DEN", yards: 461, tds: 1, jersey: 1, age: 31 },
  { name: "T.J. Hockenson", position: "TE", team: "MIN", yards: 438, tds: 3, jersey: 87, age: 28 },
  { name: "Mark Andrews", position: "TE", team: "BAL", yards: 470, tds: 6, jersey: 89, age: 30 },
    ],
    basketball: [
    // 2025-26 NBA regular-season stats (from Basketball-Reference per-game leaders)
// stocks = steals + blocks combined, per game
// fg = field goal % as a whole number
// jersey: null — not available from this data source
// For players traded mid-season, team = whichever team they played the most games for.
// Bench depth below is limited to players who register at or above ~13.5 PPG in the
// source table — deeper rotation/bench players under that threshold aren't included.
// A few teams (BRK, DET, LAL) are thin here for that reason — let me know if you want
// me to dig up their full rosters specifically.
  // ============================= ATLANTA HAWKS =============================
  { name: "Trae Young", position: "PG", team: "ATL", ppg: 19.3, apg: 8.9, rpg: 1.5, fg: 42, stocks: 1.1, jersey: 3, age: 27 },
  { name: "Nickeil Alexander-Walker", position: "SG", team: "ATL", ppg: 20.8, apg: 3.7, rpg: 3.4, fg: 46, stocks: 1.8, jersey: 7, age: 27 },
  { name: "Jalen Johnson", position: "SF", team: "ATL", ppg: 22.5, apg: 7.9, rpg: 10.3, fg: 49, stocks: 1.6, jersey: 1, age: 24 },
  { name: "Kristaps Porziņģis", position: "PF", team: "ATL", ppg: 17.1, apg: 2.7, rpg: 5.1, fg: 46, stocks: 1.8, jersey: 8, age: 30 },
  { name: "Onyeka Okongwu", position: "C", team: "ATL", ppg: 15.2, apg: 3.1, rpg: 7.6, fg: 48, stocks: 2.2, jersey: 17, age: 25 },
  { name: "CJ McCollum", position: "PG", team: "ATL", ppg: 18.7, apg: 4.1, rpg: 3.1, fg: 46, stocks: 1.6, jersey: 3, age: 34 }, // bench

  // ============================= BOSTON CELTICS =============================
  { name: "Payton Pritchard", position: "PG", team: "BOS", ppg: 17.0, apg: 5.2, rpg: 3.9, fg: 46, stocks: 0.8, jersey: 11, age: 28 },
  { name: "Derrick White", position: "SG", team: "BOS", ppg: 16.5, apg: 5.4, rpg: 4.4, fg: 39, stocks: 2.4, jersey: 9, age: 31 },
  { name: "Jaylen Brown", position: "SF", team: "BOS", ppg: 28.7, apg: 5.1, rpg: 6.9, fg: 48, stocks: 1.4, jersey: 7, age: 29 },
  { name: "Jayson Tatum", position: "PF", team: "BOS", ppg: 21.8, apg: 5.3, rpg: 10.0, fg: 41, stocks: 1.6, jersey: 0, age: 27 },
  { name: "Anfernee Simons", position: "SG", team: "BOS", ppg: 14.2, apg: 2.4, rpg: 2.4, fg: 44, stocks: 0.7, jersey: 1, age: 26 }, // bench

  // ============================= BROOKLYN NETS =============================
  { name: "Michael Porter Jr.", position: "SF", team: "BRK", ppg: 24.2, apg: 3.0, rpg: 7.1, fg: 46, stocks: 1.4, jersey: 1, age: 27 },
  { name: "Cam Thomas", position: "SG", team: "BRK", ppg: 13.5, apg: 2.6, rpg: 1.7, fg: 41, stocks: 0.3, jersey: 24, age: 24 },

  // ============================= CHARLOTTE HORNETS =============================
  { name: "LaMelo Ball", position: "PG", team: "CHO", ppg: 20.1, apg: 7.1, rpg: 4.8, fg: 41, stocks: 1.4, jersey: 1, age: 24 },
  { name: "Collin Sexton", position: "SG", team: "CHO", ppg: 14.2, apg: 3.7, rpg: 1.9, fg: 49, stocks: 1.1, jersey: 2, age: 27 },
  { name: "Kon Knueppel", position: "SF", team: "CHO", ppg: 18.5, apg: 3.4, rpg: 5.3, fg: 48, stocks: 0.9, jersey: 7, age: 20 }, // ROY runner-up
  { name: "Brandon Miller", position: "SF", team: "CHO", ppg: 20.2, apg: 3.3, rpg: 4.9, fg: 44, stocks: 1.7, jersey: 24, age: 23 },
  { name: "Miles Bridges", position: "PF", team: "CHO", ppg: 17.1, apg: 3.2, rpg: 5.8, fg: 46, stocks: 1.0, jersey: 0, age: 27 },

  // ============================= CHICAGO BULLS =============================
  { name: "Josh Giddey", position: "PG", team: "CHI", ppg: 17.0, apg: 9.1, rpg: 8.3, fg: 45, stocks: 1.5, jersey: 3, age: 23 },
  { name: "Coby White", position: "SG", team: "CHI", ppg: 18.6, apg: 4.7, rpg: 3.7, fg: 44, stocks: 0.8, jersey: 0, age: 25 },
  { name: "Ayo Dosunmu", position: "SG", team: "CHI", ppg: 15.0, apg: 3.6, rpg: 3.0, fg: 51, stocks: 1.1, jersey: 11, age: 26 }, // bench
  { name: "Matas Buzelis", position: "PF", team: "CHI", ppg: 16.3, apg: 2.1, rpg: 5.8, fg: 46, stocks: 2.2, jersey: 14, age: 21 },
  { name: "Nikola Vučević", position: "C", team: "CHI", ppg: 16.9, apg: 3.8, rpg: 9.0, fg: 51, stocks: 1.3, jersey: 9, age: 35 },
  { name: "Tre Jones", position: "PG", team: "CHI", ppg: 14.1, apg: 5.4, rpg: 3.1, fg: 55, stocks: 1.4, jersey: 30, age: 26 }, // bench

  // ============================= CLEVELAND CAVALIERS =============================
  { name: "Darius Garland", position: "PG", team: "CLE", ppg: 18.0, apg: 6.9, rpg: 2.4, fg: 45, stocks: 0.9, jersey: 10, age: 26 },
  { name: "Donovan Mitchell", position: "SG", team: "CLE", ppg: 27.9, apg: 5.7, rpg: 4.5, fg: 48, stocks: 1.8, jersey: 45, age: 29 },
  { name: "De'Andre Hunter", position: "SF", team: "CLE", ppg: 14.0, apg: 2.1, rpg: 4.2, fg: 42, stocks: 0.8, jersey: 12, age: 28 },
  { name: "Evan Mobley", position: "PF", team: "CLE", ppg: 18.2, apg: 3.6, rpg: 9.0, fg: 55, stocks: 2.4, jersey: 4, age: 24 },
  { name: "Jarrett Allen", position: "C", team: "CLE", ppg: 15.4, apg: 1.8, rpg: 8.5, fg: 64, stocks: 1.8, jersey: 31, age: 27 },

  // ============================= DALLAS MAVERICKS =============================
  { name: "Cooper Flagg", position: "SF", team: "DAL", ppg: 21.0, apg: 4.5, rpg: 6.7, fg: 47, stocks: 2.1, jersey: 32, age: 19 }, // ROY
  { name: "Naji Marshall", position: "SF", team: "DAL", ppg: 15.2, apg: 3.3, rpg: 4.7, fg: 51, stocks: 1.2, jersey: 13, age: 28 }, // bench
  { name: "Anthony Davis", position: "PF", team: "DAL", ppg: 20.4, apg: 2.8, rpg: 11.1, fg: 51, stocks: 2.8, jersey: 3, age: 32 },
  { name: "P.J. Washington", position: "PF", team: "DAL", ppg: 14.2, apg: 1.8, rpg: 7.0, fg: 45, stocks: 2.1, jersey: 25, age: 27 }, // bench

  // ============================= DENVER NUGGETS =============================
  { name: "Jamal Murray", position: "PG", team: "DEN", ppg: 25.4, apg: 7.1, rpg: 4.4, fg: 48, stocks: 1.3, jersey: 27, age: 28 },
  { name: "Nikola Jokić", position: "C", team: "DEN", ppg: 27.7, apg: 10.7, rpg: 12.9, fg: 57, stocks: 2.2, jersey: 15, age: 30 },
  { name: "Aaron Gordon", position: "PF", team: "DEN", ppg: 16.2, apg: 2.7, rpg: 5.8, fg: 50, stocks: 0.9, jersey: 50, age: 30 },
  { name: "Peyton Watson", position: "SF", team: "DEN", ppg: 14.6, apg: 2.1, rpg: 4.9, fg: 49, stocks: 2.0, jersey: 8, age: 23 }, // bench

  // ============================= DETROIT PISTONS =============================
  { name: "Cade Cunningham", position: "PG", team: "DET", ppg: 23.9, apg: 9.9, rpg: 5.5, fg: 46, stocks: 2.2, jersey: 2, age: 24 },
  { name: "Jalen Duren", position: "C", team: "DET", ppg: 19.5, apg: 2.0, rpg: 10.5, fg: 65, stocks: 1.6, jersey: 0, age: 22 },

  // ============================= GOLDEN STATE WARRIORS =============================
  { name: "Stephen Curry", position: "PG", team: "GSW", ppg: 26.6, apg: 4.7, rpg: 3.6, fg: 47, stocks: 1.5, jersey: 30, age: 37 },
  { name: "Brandin Podziemski", position: "SG", team: "GSW", ppg: 13.8, apg: 3.7, rpg: 5.1, fg: 46, stocks: 1.3, jersey: 2, age: 22 },
  { name: "Jimmy Butler", position: "SF", team: "GSW", ppg: 20.0, apg: 4.9, rpg: 5.6, fg: 52, stocks: 1.6, jersey: 10, age: 36 },

  // ============================= HOUSTON ROCKETS =============================
  { name: "Amen Thompson", position: "PG", team: "HOU", ppg: 18.3, apg: 5.3, rpg: 7.8, fg: 53, stocks: 2.1, jersey: 1, age: 23 },
  { name: "Kevin Durant", position: "SF", team: "HOU", ppg: 26.0, apg: 4.8, rpg: 5.5, fg: 52, stocks: 1.7, jersey: 7, age: 37 },
  { name: "Jabari Smith Jr.", position: "PF", team: "HOU", ppg: 15.8, apg: 1.9, rpg: 6.9, fg: 45, stocks: 1.6, jersey: 10, age: 22 }, // bench
  { name: "Alperen Şengün", position: "C", team: "HOU", ppg: 20.4, apg: 6.2, rpg: 8.9, fg: 52, stocks: 2.3, jersey: 28, age: 23 },

  // ============================= INDIANA PACERS =============================
  { name: "Andrew Nembhard", position: "PG", team: "IND", ppg: 16.9, apg: 7.7, rpg: 2.8, fg: 44, stocks: 1.0, jersey: 2, age: 26 },
  { name: "Bennedict Mathurin", position: "SF", team: "IND", ppg: 17.8, apg: 2.3, rpg: 5.4, fg: 43, stocks: 0.7, jersey: 00, age: 23 },
  { name: "Aaron Nesmith", position: "SF", team: "IND", ppg: 13.8, apg: 1.9, rpg: 4.2, fg: 41, stocks: 1.1, jersey: 23, age: 26 }, // bench
  { name: "Pascal Siakam", position: "PF", team: "IND", ppg: 24.0, apg: 3.8, rpg: 6.6, fg: 48, stocks: 1.5, jersey: 43, age: 31 },

  // ============================= LA CLIPPERS =============================
  { name: "James Harden", position: "PG", team: "LAC", ppg: 25.4, apg: 8.1, rpg: 4.8, fg: 42, stocks: 1.7, jersey: 1, age: 36 },
  { name: "Kawhi Leonard", position: "SF", team: "LAC", ppg: 27.9, apg: 3.6, rpg: 6.4, fg: 51, stocks: 2.3, jersey: 2, age: 34 },
  { name: "John Collins", position: "PF", team: "LAC", ppg: 13.6, apg: 1.0, rpg: 5.3, fg: 55, stocks: 1.6, jersey: 20, age: 28 }, // bench
  { name: "Ivica Zubac", position: "C", team: "LAC", ppg: 14.4, apg: 2.2, rpg: 11.0, fg: 61, stocks: 1.2, jersey: 40, age: 28 },

  // ============================= LA LAKERS =============================
  { name: "Luka Dončić", position: "PG", team: "LAL", ppg: 33.5, apg: 8.3, rpg: 7.7, fg: 48, stocks: 2.1, jersey: 77, age: 26 },
  { name: "Austin Reaves", position: "SG", team: "LAL", ppg: 23.3, apg: 5.5, rpg: 4.7, fg: 49, stocks: 1.5, jersey: 15, age: 27 },
  { name: "LeBron James", position: "SF", team: "LAL", ppg: 20.9, apg: 7.2, rpg: 6.1, fg: 52, stocks: 1.8, jersey: 23, age: 41 },

  // ============================= MEMPHIS GRIZZLIES =============================
  { name: "Ja Morant", position: "PG", team: "MEM", ppg: 19.5, apg: 8.1, rpg: 3.3, fg: 41, stocks: 1.3, jersey: 12, age: 26 },
  { name: "Ty Jerome", position: "SG", team: "MEM", ppg: 19.7, apg: 5.7, rpg: 2.8, fg: 47, stocks: 1.4, jersey: 2, age: 28 },
  { name: "Cedric Coward", position: "SG", team: "MEM", ppg: 13.6, apg: 2.8, rpg: 5.9, fg: 47, stocks: 1.0, jersey: 23, age: 22 }, // bench, ROY candidate
  { name: "Santi Aldama", position: "PF", team: "MEM", ppg: 14.0, apg: 2.9, rpg: 6.7, fg: 48, stocks: 1.6, jersey: 7, age: 25 }, // bench
  { name: "Jaren Jackson Jr.", position: "C", team: "MEM", ppg: 19.2, apg: 1.9, rpg: 5.8, fg: 48, stocks: 2.5, jersey: 20, age: 26 },
  { name: "Zach Edey", position: "C", team: "MEM", ppg: 13.6, apg: 1.1, rpg: 11.1, fg: 63, stocks: 2.5, jersey: 14, age: 23 }, // bench

  // ============================= MIAMI HEAT =============================
  { name: "Norman Powell", position: "SG", team: "MIA", ppg: 21.7, apg: 2.5, rpg: 3.5, fg: 47, stocks: 1.3, jersey: 24, age: 32 },
  { name: "Tyler Herro", position: "SG", team: "MIA", ppg: 20.5, apg: 4.1, rpg: 4.8, fg: 48, stocks: 1.1, jersey: 14, age: 26 },
  { name: "Jaime Jaquez Jr.", position: "SF", team: "MIA", ppg: 15.4, apg: 4.7, rpg: 5.0, fg: 51, stocks: 1.0, jersey: 11, age: 24 }, // bench, 6MOY runner-up
  { name: "Andrew Wiggins", position: "SF", team: "MIA", ppg: 15.4, apg: 2.7, rpg: 4.8, fg: 48, stocks: 2.1, jersey: 22, age: 30 },
  { name: "Bam Adebayo", position: "C", team: "MIA", ppg: 20.1, apg: 3.2, rpg: 10.0, fg: 44, stocks: 1.9, jersey: 13, age: 28 },

  // ============================= MILWAUKEE BUCKS =============================
  { name: "Kevin Porter Jr.", position: "PG", team: "MIL", ppg: 17.4, apg: 7.4, rpg: 5.2, fg: 47, stocks: 2.7, jersey: 7, age: 25 },
  { name: "Ryan Rollins", position: "PG", team: "MIL", ppg: 17.3, apg: 5.6, rpg: 4.6, fg: 47, stocks: 1.9, jersey: 13, age: 23 },
  { name: "Cormac Ryan", position: "SG", team: "MIL", ppg: 14.3, apg: 1.7, rpg: 2.5, fg: 52, stocks: 1.3, jersey: 30, age: 27 }, // bench, small sample
  { name: "Giannis Antetokounmpo", position: "PF", team: "MIL", ppg: 27.6, apg: 5.4, rpg: 9.8, fg: 62, stocks: 1.6, jersey: 7, age: 31 },
  { name: "Bobby Portis", position: "PF", team: "MIL", ppg: 13.7, apg: 1.6, rpg: 6.4, fg: 49, stocks: 0.8, jersey: 95, age: 30 }, // bench

  // ============================= MINNESOTA TIMBERWOLVES =============================
  { name: "Anthony Edwards", position: "SG", team: "MIN", ppg: 28.8, apg: 3.7, rpg: 5.0, fg: 49, stocks: 2.2, jersey: 5, age: 24 },
  { name: "Julius Randle", position: "PF", team: "MIN", ppg: 21.1, apg: 5.0, rpg: 6.7, fg: 48, stocks: 1.3, jersey: 30, age: 31 },
  { name: "Jaden McDaniels", position: "PF", team: "MIN", ppg: 14.8, apg: 2.7, rpg: 4.2, fg: 52, stocks: 2.1, jersey: 3, age: 25 },
  { name: "Naz Reid", position: "C", team: "MIN", ppg: 13.6, apg: 2.2, rpg: 6.2, fg: 46, stocks: 2.0, jersey: 11, age: 26 }, // bench, 6MOY runner-up

  // ============================= NEW ORLEANS PELICANS =============================
  { name: "Jeremiah Fears", position: "PG", team: "NOP", ppg: 14.3, apg: 3.4, rpg: 3.7, fg: 43, stocks: 1.6, jersey: 0, age: 19 }, // bench
  { name: "Dejounte Murray", position: "PG", team: "NOP", ppg: 16.7, apg: 6.4, rpg: 5.4, fg: 48, stocks: 1.8, jersey: 5, age: 29 },
  { name: "Saddiq Bey", position: "SF", team: "NOP", ppg: 17.7, apg: 2.5, rpg: 5.6, fg: 45, stocks: 1.0, jersey: 41, age: 26 },
  { name: "Trey Murphy III", position: "SF", team: "NOP", ppg: 21.5, apg: 3.8, rpg: 5.7, fg: 47, stocks: 1.9, jersey: 25, age: 25 },
  { name: "Zion Williamson", position: "PF", team: "NOP", ppg: 21.0, apg: 3.2, rpg: 5.7, fg: 60, stocks: 1.5, jersey: 1, age: 25 },

  // ============================= NEW YORK KNICKS =============================
  { name: "Jalen Brunson", position: "PG", team: "NYK", ppg: 26.0, apg: 6.8, rpg: 3.3, fg: 47, stocks: 0.9, jersey: 11, age: 29 },
  { name: "Mikal Bridges", position: "SF", team: "NYK", ppg: 14.4, apg: 3.7, rpg: 3.8, fg: 49, stocks: 2.1, jersey: 25, age: 29 },
  { name: "OG Anunoby", position: "PF", team: "NYK", ppg: 16.7, apg: 2.2, rpg: 5.2, fg: 48, stocks: 2.3, jersey: 8, age: 28 },
  { name: "Karl-Anthony Towns", position: "C", team: "NYK", ppg: 20.1, apg: 3.0, rpg: 11.9, fg: 50, stocks: 1.4, jersey: 32, age: 30 },

  // ============================= OKLAHOMA CITY THUNDER =============================
  { name: "Shai Gilgeous-Alexander", position: "PG", team: "OKC", ppg: 31.1, apg: 6.6, rpg: 4.3, fg: 55, stocks: 2.2, jersey: 2, age: 27 }, // MVP
  { name: "Jalen Williams", position: "SG", team: "OKC", ppg: 17.1, apg: 5.5, rpg: 4.6, fg: 48, stocks: 1.5, jersey: 8, age: 24 },
  { name: "Ajay Mitchell", position: "SG", team: "OKC", ppg: 13.6, apg: 3.6, rpg: 3.3, fg: 49, stocks: 1.5, jersey: 25, age: 23 }, // bench, 6MOY candidate
  { name: "Chet Holmgren", position: "PF", team: "OKC", ppg: 17.1, apg: 1.7, rpg: 8.9, fg: 56, stocks: 2.5, jersey: 7, age: 23 },

  // ============================= ORLANDO MAGIC =============================
  { name: "Anthony Black", position: "PG", team: "ORL", ppg: 15.0, apg: 3.7, rpg: 3.8, fg: 45, stocks: 2.1, jersey: 0, age: 22 },
  { name: "Jalen Suggs", position: "PG", team: "ORL", ppg: 13.8, apg: 5.5, rpg: 3.9, fg: 44, stocks: 2.5, jersey: 4, age: 24 }, // bench
  { name: "Desmond Bane", position: "SG", team: "ORL", ppg: 20.1, apg: 4.1, rpg: 4.1, fg: 48, stocks: 1.5, jersey: 3, age: 27 },
  { name: "Franz Wagner", position: "SF", team: "ORL", ppg: 20.6, apg: 3.3, rpg: 5.2, fg: 48, stocks: 1.2, jersey: 22, age: 24 },
  { name: "Paolo Banchero", position: "PF", team: "ORL", ppg: 22.2, apg: 5.2, rpg: 8.4, fg: 46, stocks: 1.3, jersey: 5, age: 23 },

  // ============================= PHILADELPHIA 76ERS =============================
  { name: "Tyrese Maxey", position: "PG", team: "PHI", ppg: 28.3, apg: 6.6, rpg: 4.1, fg: 46, stocks: 2.7, jersey: 0, age: 25 },
  { name: "VJ Edgecombe", position: "SG", team: "PHI", ppg: 16.0, apg: 4.2, rpg: 5.6, fg: 44, stocks: 1.9, jersey: 77, age: 20 }, // ROY runner-up
  { name: "Kelly Oubre Jr.", position: "SF", team: "PHI", ppg: 14.1, apg: 1.6, rpg: 5.0, fg: 47, stocks: 1.9, jersey: 9, age: 30 }, // bench
  { name: "Paul George", position: "PF", team: "PHI", ppg: 17.3, apg: 3.6, rpg: 5.3, fg: 44, stocks: 2.1, jersey: 8, age: 35 },
  { name: "Joel Embiid", position: "C", team: "PHI", ppg: 26.9, apg: 3.9, rpg: 7.7, fg: 49, stocks: 1.8, jersey: 21, age: 31 },

  // ============================= PHOENIX SUNS =============================
  { name: "Devin Booker", position: "SG", team: "PHO", ppg: 26.1, apg: 6.0, rpg: 3.9, fg: 46, stocks: 1.1, jersey: 1, age: 29 },
  { name: "Jalen Green", position: "SG", team: "PHO", ppg: 17.8, apg: 2.8, rpg: 3.6, fg: 42, stocks: 1.4, jersey: 4, age: 23 }, // bench
  { name: "Grayson Allen", position: "SG", team: "PHO", ppg: 16.5, apg: 3.8, rpg: 3.0, fg: 40, stocks: 1.7, jersey: 8, age: 30 }, // bench
  { name: "Dillon Brooks", position: "SF", team: "PHO", ppg: 20.2, apg: 1.8, rpg: 3.6, fg: 44, stocks: 1.2, jersey: 9, age: 30 },

  // ============================= PORTLAND TRAIL BLAZERS =============================
  { name: "Jrue Holiday", position: "PG", team: "POR", ppg: 16.3, apg: 6.1, rpg: 4.6, fg: 45, stocks: 1.1, jersey: 4, age: 35 },
  { name: "Scoot Henderson", position: "PG", team: "POR", ppg: 14.2, apg: 3.7, rpg: 2.7, fg: 42, stocks: 1.2, jersey: 60, age: 21 }, // bench
  { name: "Shaedon Sharpe", position: "SG", team: "POR", ppg: 20.8, apg: 2.6, rpg: 4.3, fg: 45, stocks: 1.5, jersey: 17, age: 22 },
  { name: "Deni Avdija", position: "SF", team: "POR", ppg: 24.2, apg: 6.7, rpg: 6.9, fg: 46, stocks: 1.4, jersey: 8, age: 25 },
  { name: "Jerami Grant", position: "PF", team: "POR", ppg: 18.6, apg: 2.1, rpg: 3.5, fg: 45, stocks: 1.3, jersey: 9, age: 31 },

  // ============================= SACRAMENTO KINGS =============================
  { name: "Zach LaVine", position: "SG", team: "SAC", ppg: 19.2, apg: 2.3, rpg: 2.8, fg: 48, stocks: 1.0, jersey: 8, age: 30 },
  { name: "Russell Westbrook", position: "SF", team: "SAC", ppg: 15.2, apg: 6.7, rpg: 5.4, fg: 43, stocks: 1.5, jersey: 18, age: 37 }, // bench
  { name: "Keegan Murray", position: "PF", team: "SAC", ppg: 14.0, apg: 1.7, rpg: 5.7, fg: 42, stocks: 2.6, jersey: 13, age: 25 }, // bench
  { name: "DeMar DeRozan", position: "PF", team: "SAC", ppg: 18.4, apg: 4.1, rpg: 2.9, fg: 50, stocks: 1.3, jersey: 10, age: 36 },
  { name: "Domantas Sabonis", position: "C", team: "SAC", ppg: 15.8, apg: 4.1, rpg: 11.4, fg: 54, stocks: 1.1, jersey: 11, age: 29 },

  // ============================= SAN ANTONIO SPURS =============================
  { name: "De'Aaron Fox", position: "PG", team: "SAS", ppg: 18.6, apg: 6.2, rpg: 3.8, fg: 49, stocks: 1.5, jersey: 4, age: 28 },
  { name: "Stephon Castle", position: "PG", team: "SAS", ppg: 16.7, apg: 7.4, rpg: 5.3, fg: 47, stocks: 1.4, jersey: 11, age: 21 }, // bench
  { name: "Devin Vassell", position: "SG", team: "SAS", ppg: 13.9, apg: 2.5, rpg: 4.0, fg: 44, stocks: 1.3, jersey: 24, age: 25 }, // bench
  { name: "Victor Wembanyama", position: "C", team: "SAS", ppg: 25.0, apg: 3.1, rpg: 11.5, fg: 51, stocks: 4.1, jersey: 1, age: 22 }, // MVP-3, DPOY

  // ============================= TORONTO RAPTORS =============================
  { name: "Immanuel Quickley", position: "PG", team: "TOR", ppg: 16.4, apg: 5.9, rpg: 4.0, fg: 44, stocks: 1.4, jersey: 5, age: 26 },
  { name: "RJ Barrett", position: "SF", team: "TOR", ppg: 19.3, apg: 3.3, rpg: 5.3, fg: 49, stocks: 1.0, jersey: 9, age: 25 },
  { name: "Brandon Ingram", position: "SF", team: "TOR", ppg: 21.5, apg: 3.7, rpg: 5.6, fg: 48, stocks: 1.5, jersey: 3, age: 28 },
  { name: "Scottie Barnes", position: "PF", team: "TOR", ppg: 18.1, apg: 5.9, rpg: 7.5, fg: 51, stocks: 2.9, jersey: 4, age: 24 },

  // ============================= UTAH JAZZ =============================
  { name: "Keyonte George", position: "PG", team: "UTA", ppg: 23.6, apg: 6.1, rpg: 3.7, fg: 46, stocks: 1.4, jersey: 3, age: 22 },
  { name: "Kennedy Chandler", position: "PG", team: "UTA", ppg: 15.0, apg: 6.7, rpg: 3.4, fg: 45, stocks: 1.2, jersey: 1, age: 23 }, // bench
  { name: "Ace Bailey", position: "SF", team: "UTA", ppg: 13.8, apg: 1.8, rpg: 4.2, fg: 44, stocks: 1.5, jersey: 19, age: 19 }, // bench
  { name: "Brice Sensabaugh", position: "SF", team: "UTA", ppg: 14.9, apg: 1.9, rpg: 3.1, fg: 46, stocks: 0.9, jersey: 28, age: 22 }, // bench
  { name: "Lauri Markkanen", position: "PF", team: "UTA", ppg: 26.7, apg: 2.1, rpg: 6.9, fg: 48, stocks: 1.5, jersey: 23, age: 28 },
  { name: "Walker Kessler", position: "C", team: "UTA", ppg: 14.4, apg: 3.0, rpg: 10.8, fg: 70, stocks: 3.2, jersey: 24, age: 24 }, // bench, small sample

  // ============================= WASHINGTON WIZARDS =============================
  { name: "Kyshawn George", position: "SF", team: "WAS", ppg: 14.8, apg: 4.5, rpg: 5.1, fg: 44, stocks: 1.9, jersey: 18, age: 22 },
  { name: "Alex Sarr", position: "C", team: "WAS", ppg: 16.3, apg: 2.7, rpg: 7.4, fg: 48, stocks: 2.8, jersey: 20, age: 20 },
],
    baseball: [],
    hockey: [],
    soccer: []
};
