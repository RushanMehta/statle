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
    { name: "Victor Wembanyama", position: "C", ppg: 23.5, apg: 3.8, rpg: 11.2, fg: 47, stocks: 4.8, jersey: 1, age: 22 },
    { name: "Shai Gilgeous-Alexander", position: "PG", ppg: 30.1, apg: 6.4, rpg: 5.6, fg: 54, stocks: 2.9, jersey: 2, age: 28 },
],
    baseball: [],
    hockey: [],
    soccer: []
};
