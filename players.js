const playersDatabase = {
    football: [
// 2025 NFL regular-season stats (corrected/expanded against Pro-Football-Reference)
// "yards" / "tds" are now TOTAL: passing+rushing for QBs, rushing+receiving for RBs/WRs/TEs
// jersey: null where I couldn't confirm the number with confidence

// ============================= QUARTERBACKS =============================
// yards/tds = passing + rushing combined // 2 games, injured
  { name: "Drake Maye", position: "QB", team: "Patriots", conf: "AFC", div: "AFC East", yards: 4844, tds: 35, jersey: 10, age: 23 },
  { name: "Dak Prescott", position: "QB", team: "Cowboys", conf: "NFC", div: "NFC East", yards: 4729, tds: 32, jersey: 4, age: 32 },
  { name: "Josh Allen", position: "QB", team: "Bills", conf: "AFC", div: "AFC East", yards: 4247, tds: 39, jersey: 17, age: 29 },
  { name: "Jared Goff", position: "QB", team: "Lions", conf: "NFC", div: "NFC North", yards: 4609, tds: 34, jersey: 16, age: 31 },
  { name: "Matthew Stafford", position: "QB", team: "Rams", conf: "NFC", div: "NFC West", yards: 4708, tds: 46, jersey: 9, age: 37 }, // AP MVP
  { name: "Trevor Lawrence", position: "QB", team: "Jaguars", conf: "AFC", div: "AFC South", yards: 4366, tds: 38, jersey: 16, age: 26 },
  { name: "Caleb Williams", position: "QB", team: "Bears", conf: "NFC", div: "NFC North", yards: 4330, tds: 30, jersey: 18, age: 24 },
  { name: "Bo Nix", position: "QB", team: "Broncos", conf: "AFC", div: "AFC West", yards: 4287, tds: 30, jersey: 10, age: 25 },
  { name: "Justin Herbert", position: "QB", team: "Chargers", conf: "AFC", div: "AFC West", yards: 4225, tds: 28, jersey: 10, age: 27 },
  { name: "Sam Darnold", position: "QB", team: "Seahawks", conf: "NFC", div: "NFC West", yards: 4143, tds: 25, jersey: 14, age: 28 }, // Super Bowl champs
  { name: "Baker Mayfield", position: "QB", team: "Buccaneers", conf: "NFC", div: "NFC South", yards: 4075, tds: 27, jersey: 6, age: 30 },
  { name: "Patrick Mahomes", position: "QB", team: "Chiefs", conf: "AFC", div: "AFC West", yards: 4009, tds: 27, jersey: 15, age: 30 },
  { name: "Jalen Hurts", position: "QB", team: "Eagles", conf: "NFC", div: "NFC East", yards: 3645, tds: 33, jersey: 1, age: 27 },
  { name: "Jordan Love", position: "QB", team: "Packers", conf: "NFC", div: "NFC North", yards: 3580, tds: 23, jersey: 10, age: 27 },
  { name: "Jacoby Brissett", position: "QB", team: "Cardinals", conf: "NFC", div: "NFC West", yards: 3534, tds: 24, jersey: 7, age: 33 },
  { name: "Aaron Rodgers", position: "QB", team: "Steelers", conf: "AFC", div: "AFC North", yards: 3383, tds: 25, jersey: 8, age: 42 },
  { name: "Cam Ward", position: "QB", team: "Titans", conf: "AFC", div: "AFC South", yards: 3328, tds: 17, jersey: 1, age: 23 },
  { name: "Daniel Jones", position: "QB", team: "Colts", conf: "AFC", div: "AFC South", yards: 3265, tds: 24, jersey: 17, age: 28 },
  { name: "C.J. Stroud", position: "QB", team: "Texans", conf: "AFC", div: "AFC South", yards: 3250, tds: 20, jersey: 7, age: 24 },
  { name: "Bryce Young", position: "QB", team: "Panthers", conf: "NFC", div: "NFC South", yards: 3227, tds: 25, jersey: 9, age: 24 },
  { name: "Geno Smith", position: "QB", team: "Raiders", conf: "AFC", div: "AFC West", yards: 3134, tds: 19, jersey: 7, age: 35 },
  { name: "Lamar Jackson", position: "QB", team: "Ravens", conf: "AFC", div: "AFC North", yards: 2898, tds: 23, jersey: 8, age: 28 },
  { name: "Tua Tagovailoa", position: "QB", team: "Dolphins", conf: "AFC", div: "AFC East", yards: 2703, tds: 20, jersey: 1, age: 27 },
  { name: "Jaxson Dart", position: "QB", team: "Giants", conf: "NFC", div: "NFC East", yards: 2759, tds: 24, jersey: 6, age: 22 },
  { name: "Joe Flacco", position: "QB", team: "Bengals", conf: "AFC", div: "AFC North", yards: 2514, tds: 16, jersey: 16, age: 40 },
  { name: "Tyler Shough", position: "QB", team: "Saints", conf: "NFC", div: "NFC South", yards: 2570, tds: 13, jersey: 6, age: 26 },
  { name: "Brock Purdy", position: "QB", team: "49ers", conf: "NFC", div: "NFC West", yards: 2314, tds: 23, jersey: 13, age: 26 },
  { name: "Mac Jones", position: "QB", team: "49ers", conf: "NFC", div: "NFC West", yards: 2211, tds: 13, jersey: 10, age: 27 },
  { name: "Marcus Mariota", position: "QB", team: "Commanders", conf: "NFC", div: "NFC East", yards: 1992, tds: 11, jersey: 8, age: 32 },
  { name: "Michael Penix Jr.", position: "QB", team: "Falcons", conf: "NFC", div: "NFC South", yards: 2052, tds: 10, jersey: 9, age: 25 },
  { name: "Joe Burrow", position: "QB", team: "Bengals", conf: "AFC", div: "AFC North", yards: 1850, tds: 17, jersey: 9, age: 29 }, // injury-shortened
  { name: "Kirk Cousins", position: "QB", team: "Falcons", conf: "NFC", div: "NFC South", yards: 1728, tds: 11, jersey: 18, age: 37 }, // now w/ Atlanta
  { name: "J.J. McCarthy", position: "QB", team: "Vikings", conf: "NFC", div: "NFC North", yards: 1813, tds: 15, jersey: 9, age: 22 },
  { name: "Justin Fields", position: "QB", team: "Jets", conf: "AFC", div: "AFC East", yards: 1642, tds: 11, jersey: 6, age: 26 },
  { name: "Spencer Rattler", position: "QB", team: "Saints", conf: "NFC", div: "NFC South", yards: 1753, tds: 8, jersey: 18, age: 25 },
  { name: "Jayden Daniels", position: "QB", team: "Commanders", conf: "NFC", div: "NFC East", yards: 1540, tds: 10, jersey: 5, age: 25 }, // injury-shortened
  { name: "Shedeur Sanders", position: "QB", team: "Browns", conf: "AFC", div: "AFC North", yards: 1569, tds: 8, jersey: 2, age: 23 },
  { name: "Carson Wentz", position: "QB", team: "Vikings", conf: "NFC", div: "NFC North", yards: 1273, tds: 6, jersey: 11, age: 33 },
  { name: "Dillon Gabriel", position: "QB", team: "Browns", conf: "AFC", div: "AFC North", yards: 1023, tds: 7, jersey: 6, age: 25 },
  { name: "Kyler Murray", position: "QB", team: "Cardinals", conf: "NFC", div: "NFC West", yards: 1135, tds: 7, jersey: 1, age: 28 }, // injury-shortened
  { name: "Davis Mills", position: "QB", team: "Texans", conf: "AFC", div: "AFC South", yards: 975, tds: 6, jersey: 10, age: 27 },
  { name: "Russell Wilson", position: "QB", team: "Giants", conf: "NFC", div: "NFC East", yards: 937, tds: 3, jersey: 3, age: 37 },
  { name: "Tyrod Taylor", position: "QB", team: "Jets", conf: "AFC", div: "AFC East", yards: 922, tds: 6, jersey: 6, age: 36 },
  { name: "Jake Browning", position: "QB", team: "Bengals", conf: "AFC", div: "AFC North", yards: 810, tds: 7, jersey: 5, age: 29 },
  { name: "Brady Cook", position: "QB", team: "Jets", conf: "AFC", div: "AFC East", yards: 788, tds: 2, jersey: 4, age: 24 },
  { name: "Malik Willis", position: "QB", team: "Packers", conf: "NFC", div: "NFC North", yards: 545, tds: 5, jersey: 2, age: 26 },
  { name: "Tyler Huntley", position: "QB", team: "Ravens", conf: "AFC", div: "AFC North", yards: 577, tds: 2, jersey: 5, age: 27 },
  { name: "Quinn Ewers", position: "QB", team: "Dolphins", conf: "AFC", div: "AFC East", yards: 641, tds: 3, jersey: 14, age: 22 },
  { name: "Jameis Winston", position: "QB", team: "Giants", conf: "NFC", div: "NFC East", yards: 567, tds: 2, jersey: 19, age: 31 },
  { name: "Philip Rivers", position: "QB", team: "Colts", conf: "AFC", div: "AFC South", yards: 544, tds: 4, jersey: 17, age: 44 },
  { name: "Riley Leonard", position: "QB", team: "Colts", conf: "AFC", div: "AFC South", yards: 415, tds: 2, jersey: 15, age: 23 },
  { name: "Anthony Richardson", position: "QB", team: "Colts", conf: "AFC", div: "AFC South", yards: 9, tds: 0, jersey: 5, age: 23 }, // 2 games, injured


// ============================= RUNNING BACKS =============================
// yards/tds = rushing + receiving combined
// injury-shortened
  { name: "Bijan Robinson", position: "RB", team: "Falcons", conf: "NFC", div: "NFC South", yards: 2298, tds: 11, jersey: 7, age: 23 },
  { name: "Christian McCaffrey", position: "RB", team: "49ers", conf: "NFC", div: "NFC West", yards: 2126, tds: 17, jersey: 23, age: 29 }, // AP-1, AP CPoY-1
  { name: "Jonathan Taylor", position: "RB", team: "Colts", conf: "AFC", div: "AFC South", yards: 1963, tds: 20, jersey: 28, age: 26 },
  { name: "James Cook", position: "RB", team: "Bills", conf: "AFC", div: "AFC East", yards: 1912, tds: 14, jersey: 4, age: 26 },
  { name: "Jahmyr Gibbs", position: "RB", team: "Lions", conf: "NFC", div: "NFC North", yards: 1839, tds: 18, jersey: 26, age: 23 },
  { name: "De'Von Achane", position: "RB", team: "Dolphins", conf: "AFC", div: "AFC East", yards: 1838, tds: 12, jersey: 28, age: 24 },
  { name: "Breece Hall", position: "RB", team: "Jets", conf: "AFC", div: "AFC East", yards: 1415, tds: 5, jersey: 20, age: 24 },
  { name: "Saquon Barkley", position: "RB", team: "Eagles", conf: "NFC", div: "NFC East", yards: 1413, tds: 9, jersey: 26, age: 28 },
  { name: "Derrick Henry", position: "RB", team: "Ravens", conf: "AFC", div: "AFC North", yards: 1595, tds: 16, jersey: 22, age: 31 }, // receiving total not confirmed
  { name: "Kyren Williams", position: "RB", team: "Rams", conf: "NFC", div: "NFC West", yards: 1533, tds: 13, jersey: 23, age: 25 },
  { name: "Chase Brown", position: "RB", team: "Bengals", conf: "AFC", div: "AFC North", yards: 1456, tds: 11, jersey: 30, age: 25 },
  { name: "Travis Etienne", position: "RB", team: "Jaguars", conf: "AFC", div: "AFC South", yards: 1399, tds: 13, jersey: 1, age: 26 },
  { name: "D'Andre Swift", position: "RB", team: "Bears", conf: "NFC", div: "NFC North", yards: 1386, tds: 10, jersey: 4, age: 26 },
  { name: "Rico Dowdle", position: "RB", team: "Panthers", conf: "NFC", div: "NFC South", yards: 1373, tds: 7, jersey: 23, age: 27 },
  { name: "Javonte Williams", position: "RB", team: "Cowboys", conf: "NFC", div: "NFC East", yards: 1338, tds: 13, jersey: 33, age: 25 },
  { name: "Ashton Jeanty", position: "RB", team: "Raiders", conf: "AFC", div: "AFC West", yards: 1321, tds: 10, jersey: 22, age: 22 },
  { name: "Jaylen Warren", position: "RB", team: "Steelers", conf: "AFC", div: "AFC North", yards: 1291, tds: 8, jersey: 30, age: 27 },
  { name: "Tony Pollard", position: "RB", team: "Titans", conf: "AFC", div: "AFC South", yards: 1288, tds: 5, jersey: 20, age: 28 },
  { name: "Kenneth Walker III", position: "RB", team: "Seahawks", conf: "NFC", div: "NFC West", yards: 1309, tds: 5, jersey: 9, age: 25 },
  { name: "Josh Jacobs", position: "RB", team: "Packers", conf: "NFC", div: "NFC North", yards: 1211, tds: 14, jersey: 8, age: 27 },
  { name: "TreVeyon Henderson", position: "RB", team: "Patriots", conf: "AFC", div: "AFC East", yards: 1132, tds: 10, jersey: 32, age: 23 },
  { name: "Tyrone Tracy Jr.", position: "RB", team: "Giants", conf: "NFC", div: "NFC East", yards: 1028, tds: 4, jersey: 29, age: 26 },
  { name: "Quinshon Judkins", position: "RB", team: "Browns", conf: "AFC", div: "AFC North", yards: 998, tds: 7, jersey: 4, age: 22 },
  { name: "Woody Marks", position: "RB", team: "Texans", conf: "AFC", div: "AFC South", yards: 911, tds: 5, jersey: 4, age: 25 },
  { name: "Rhamondre Stevenson", position: "RB", team: "Patriots", conf: "AFC", div: "AFC East", yards: 948, tds: 9, jersey: 38, age: 27 },
  { name: "RJ Harvey", position: "RB", team: "Broncos", conf: "AFC", div: "AFC West", yards: 896, tds: 12, jersey: 12, age: 24 },
  { name: "Alvin Kamara", position: "RB", team: "Saints", conf: "NFC", div: "NFC South", yards: 657, tds: 1, jersey: 41, age: 30 },
  { name: "David Montgomery", position: "RB", team: "Lions", conf: "NFC", div: "NFC North", yards: 908, tds: 8, jersey: 5, age: 28 },
  { name: "Zach Charbonnet", position: "RB", team: "Seahawks", conf: "NFC", div: "NFC West", yards: 730, tds: 12, jersey: 26, age: 24 }, // receiving not confirmed
  { name: "Omarion Hampton", position: "RB", team: "Chargers", conf: "AFC", div: "AFC West", yards: 737, tds: 5, jersey: 28, age: 22 },
// ============================= WIDE RECEIVERS =============================
// yards/tds = receiving + rushing combined
 { name: "Puka Nacua", position: "WR", team: "Rams", conf: "NFC", div: "NFC West", yards: 1820, tds: 11, jersey: 17, age: 24 }, // AP-1
  { name: "Jaxon Smith-Njigba", position: "WR", team: "Seahawks", conf: "NFC", div: "NFC West", yards: 1793, tds: 10, jersey: 11, age: 23 }, // AP OPoY
  { name: "George Pickens", position: "WR", team: "Cowboys", conf: "NFC", div: "NFC East", yards: 1429, tds: 9, jersey: 3, age: 24 },
  { name: "Ja'Marr Chase", position: "WR", team: "Bengals", conf: "AFC", div: "AFC North", yards: 1412, tds: 8, jersey: 1, age: 25 },
  { name: "Amon-Ra St. Brown", position: "WR", team: "Lions", conf: "NFC", div: "NFC North", yards: 1401, tds: 11, jersey: 14, age: 26 },
  { name: "Zay Flowers", position: "WR", team: "Ravens", conf: "AFC", div: "AFC North", yards: 1273, tds: 6, jersey: 4, age: 25 },
  { name: "Nico Collins", position: "WR", team: "Texans", conf: "AFC", div: "AFC South", yards: 1117, tds: 6, jersey: 12, age: 26 },
  { name: "Jameson Williams", position: "WR", team: "Lions", conf: "NFC", div: "NFC North", yards: 1117, tds: 7, jersey: 9, age: 24 },
  { name: "Chris Olave", position: "WR", team: "Saints", conf: "NFC", div: "NFC South", yards: 1163, tds: 9, jersey: 12, age: 25 },
  { name: "CeeDee Lamb", position: "WR", team: "Cowboys", conf: "NFC", div: "NFC East", yards: 1077, tds: 3, jersey: 88, age: 26 },
  { name: "Michael Wilson", position: "WR", team: "Cardinals", conf: "NFC", div: "NFC West", yards: 1006, tds: 7, jersey: 14, age: 25 },
  { name: "DeVonta Smith", position: "WR", team: "Eagles", conf: "NFC", div: "NFC East", yards: 1008, tds: 4, jersey: 6, age: 27 },
  { name: "Courtland Sutton", position: "WR", team: "Broncos", conf: "AFC", div: "AFC West", yards: 1017, tds: 7, jersey: 14, age: 30 },
  { name: "Justin Jefferson", position: "WR", team: "Vikings", conf: "NFC", div: "NFC North", yards: 1048, tds: 2, jersey: 18, age: 26 },
  { name: "A.J. Brown", position: "WR", team: "Eagles", conf: "NFC", div: "NFC East", yards: 1003, tds: 7, jersey: 11, age: 28 },
  { name: "Wan'Dale Robinson", position: "WR", team: "Giants", conf: "NFC", div: "NFC East", yards: 1014, tds: 4, jersey: 17, age: 24 },
  { name: "Tetairoa McMillan", position: "WR", team: "Panthers", conf: "NFC", div: "NFC South", yards: 1014, tds: 7, jersey: 4, age: 22 }, // AP OROY
  { name: "Stefon Diggs", position: "WR", team: "Patriots", conf: "AFC", div: "AFC East", yards: 1013, tds: 4, jersey: 8, age: 32 },
  { name: "Drake London", position: "WR", team: "Falcons", conf: "NFC", div: "NFC South", yards: 919, tds: 7, jersey: 5, age: 24 },
  { name: "Jaylen Waddle", position: "WR", team: "Dolphins", conf: "AFC", div: "AFC East", yards: 918, tds: 6, jersey: 17, age: 27 },
  { name: "Emeka Egbuka", position: "WR", team: "Buccaneers", conf: "NFC", div: "NFC South", yards: 938, tds: 6, jersey: 1, age: 23 },
  { name: "Ladd McConkey", position: "WR", team: "Chargers", conf: "AFC", div: "AFC West", yards: 789, tds: 6, jersey: 15, age: 24 },
  { name: "Davante Adams", position: "WR", team: "Rams", conf: "NFC", div: "NFC West", yards: 789, tds: 14, jersey: 17, age: 33 }, // league-leading rec TDs
  { name: "Tee Higgins", position: "WR", team: "Bengals", conf: "AFC", div: "AFC North", yards: 846, tds: 11, jersey: 5, age: 26 },
  { name: "Michael Pittman Jr.", position: "WR", team: "Colts", conf: "AFC", div: "AFC South", yards: 784, tds: 7, jersey: 11, age: 28 },
  { name: "Keenan Allen", position: "WR", team: "Chargers", conf: "AFC", div: "AFC West", yards: 777, tds: 4, jersey: 13, age: 33 },
  { name: "Deebo Samuel", position: "WR", team: "Commanders", conf: "NFC", div: "NFC East", yards: 802, tds: 6, jersey: 1, age: 29 },
  { name: "Troy Franklin", position: "WR", team: "Broncos", conf: "AFC", div: "AFC West", yards: 709, tds: 6, jersey: 11, age: 22 },
  { name: "Khalil Shakir", position: "WR", team: "Bills", conf: "AFC", div: "AFC East", yards: 719, tds: 4, jersey: 10, age: 25 },
  { name: "Jakobi Meyers", position: "WR", team: "Jaguars", conf: "AFC", div: "AFC South", yards: 835, tds: 3, jersey: 3, age: 29 },


// ============================= TIGHT ENDS =============================
// yards/tds = receiving + rushing combined
  { name: "Trey McBride", position: "TE", team: "Cardinals", conf: "NFC", div: "NFC West", yards: 1239, tds: 11, jersey: 85, age: 26 }, // AP-1
  { name: "Kyle Pitts", position: "TE", team: "Falcons", conf: "NFC", div: "NFC South", yards: 928, tds: 5, jersey: 8, age: 25 },
  { name: "Juwan Johnson", position: "TE", team: "Saints", conf: "NFC", div: "NFC South", yards: 889, tds: 3, jersey: 83, age: 29 },
  { name: "Travis Kelce", position: "TE", team: "Chiefs", conf: "AFC", div: "AFC West", yards: 851, tds: 5, jersey: 87, age: 36 },
  { name: "Tyler Warren", position: "TE", team: "Colts", conf: "AFC", div: "AFC South", yards: 817, tds: 4, jersey: 12, age: 23 },
  { name: "Hunter Henry", position: "TE", team: "Patriots", conf: "AFC", div: "AFC East", yards: 768, tds: 7, jersey: 85, age: 31 },
  { name: "Dalton Schultz", position: "TE", team: "Texans", conf: "AFC", div: "AFC South", yards: 777, tds: 3, jersey: 86, age: 29 },
  { name: "Harold Fannin", position: "TE", team: "Browns", conf: "AFC", div: "AFC North", yards: 731, tds: 6, jersey: 88, age: 21 },
  { name: "Brock Bowers", position: "TE", team: "Raiders", conf: "AFC", div: "AFC West", yards: 680, tds: 7, jersey: 89, age: 23 }, // injury-shortened
  { name: "George Kittle", position: "TE", team: "49ers", conf: "NFC", div: "NFC West", yards: 628, tds: 7, jersey: 85, age: 32 }, // injury-shortened
  { name: "Jake Ferguson", position: "TE", team: "Cowboys", conf: "NFC", div: "NFC East", yards: 600, tds: 8, jersey: 87, age: 26 },
  { name: "Colston Loveland", position: "TE", team: "Bears", conf: "NFC", div: "NFC North", yards: 713, tds: 6, jersey: 18, age: 21 },
  { name: "Oronde Gadsden II", position: "TE", team: "Chargers", conf: "AFC", div: "AFC West", yards: 664, tds: 3, jersey: 86, age: 22 },
  { name: "Chig Okonkwo", position: "TE", team: "Titans", conf: "AFC", div: "AFC South", yards: 560, tds: 2, jersey: 85, age: 26 },
  { name: "Cade Otton", position: "TE", team: "Buccaneers", conf: "NFC", div: "NFC South", yards: 572, tds: 1, jersey: 88, age: 26 },
  { name: "Dallas Goedert", position: "TE", team: "Eagles", conf: "NFC", div: "NFC East", yards: 591, tds: 11, jersey: 88, age: 30 },
  { name: "AJ Barner", position: "TE", team: "Seahawks", conf: "NFC", div: "NFC West", yards: 533, tds: 7, jersey: 88, age: 23 },
  { name: "Evan Engram", position: "TE", team: "Broncos", conf: "AFC", div: "AFC West", yards: 461, tds: 1, jersey: 1, age: 31 },
  { name: "T.J. Hockenson", position: "TE", team: "Vikings", conf: "NFC", div: "NFC North", yards: 438, tds: 3, jersey: 87, age: 28 },
  { name: "Mark Andrews", position: "TE", team: "Ravens", conf: "AFC", div: "AFC North", yards: 470, tds: 6, jersey: 89, age: 30 },
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
 // 2025-26 NBA regular-season stats (from Basketball-Reference per-game leaders)
// stocks = steals + blocks combined, per game
// fg = field goal % as a whole number
// jersey numbers filled in per user-provided roster data
// For players traded mid-season, team = whichever team they played the most games for.
// Bench depth below is limited to players who register at or above ~13.5 PPG in the
// source table — deeper rotation/bench players under that threshold aren't included.
// A few teams (BRK, DET, LAL) are thin here for that reason — let me know if you want
// me to dig up their full rosters specifically.
  // ============================= ATLANTA HAWKS =============================
  { name: "Trae Young", position: "PG", team: "Hawks", conf: "Eastern", div: "Southeast", ppg: 19.3, apg: 8.9, rpg: 1.5, fg: 42, stocks: 1.1, jersey: 3, age: 27 },
  { name: "Nickeil Alexander-Walker", position: "SG", team: "Hawks", conf: "Eastern", div: "Southeast", ppg: 20.8, apg: 3.7, rpg: 3.4, fg: 46, stocks: 1.8, jersey: 7, age: 27 },
  { name: "Jalen Johnson", position: "SF", team: "Hawks", conf: "Eastern", div: "Southeast", ppg: 22.5, apg: 7.9, rpg: 10.3, fg: 49, stocks: 1.6, jersey: 1, age: 24 },
  { name: "Kristaps Porziņģis", position: "PF", team: "Hawks", conf: "Eastern", div: "Southeast", ppg: 17.1, apg: 2.7, rpg: 5.1, fg: 46, stocks: 1.8, jersey: 8, age: 30 },
  { name: "Onyeka Okongwu", position: "C", team: "Hawks", conf: "Eastern", div: "Southeast", ppg: 15.2, apg: 3.1, rpg: 7.6, fg: 48, stocks: 2.2, jersey: 17, age: 25 },
  { name: "CJ McCollum", position: "PG", team: "Hawks", conf: "Eastern", div: "Southeast", ppg: 18.7, apg: 4.1, rpg: 3.1, fg: 46, stocks: 1.6, jersey: 3, age: 34 }, // bench

  // ============================= BOSTON CELTICS =============================
  { name: "Payton Pritchard", position: "PG", team: "Celtics", conf: "Eastern", div: "Atlantic", ppg: 17.0, apg: 5.2, rpg: 3.9, fg: 46, stocks: 0.8, jersey: 11, age: 28 },
  { name: "Derrick White", position: "SG", team: "Celtics", conf: "Eastern", div: "Atlantic", ppg: 16.5, apg: 5.4, rpg: 4.4, fg: 39, stocks: 2.4, jersey: 9, age: 31 },
  { name: "Jaylen Brown", position: "SF", team: "Celtics", conf: "Eastern", div: "Atlantic", ppg: 28.7, apg: 5.1, rpg: 6.9, fg: 48, stocks: 1.4, jersey: 7, age: 29 },
  { name: "Jayson Tatum", position: "PF", team: "Celtics", conf: "Eastern", div: "Atlantic", ppg: 21.8, apg: 5.3, rpg: 10.0, fg: 41, stocks: 1.6, jersey: 0, age: 27 },
  { name: "Anfernee Simons", position: "SG", team: "Celtics", conf: "Eastern", div: "Atlantic", ppg: 14.2, apg: 2.4, rpg: 2.4, fg: 44, stocks: 0.7, jersey: 1, age: 26 }, // bench

  // ============================= BROOKLYN NETS =============================
  { name: "Michael Porter Jr.", position: "SF", team: "Nets", conf: "Eastern", div: "Atlantic", ppg: 24.2, apg: 3.0, rpg: 7.1, fg: 46, stocks: 1.4, jersey: 1, age: 27 },
  { name: "Cam Thomas", position: "SG", team: "Nets", conf: "Eastern", div: "Atlantic", ppg: 13.5, apg: 2.6, rpg: 1.7, fg: 41, stocks: 0.3, jersey: 24, age: 24 },

  // ============================= CHARLOTTE HORNETS =============================
  { name: "LaMelo Ball", position: "PG", team: "Hornets", conf: "Eastern", div: "Southeast", ppg: 20.1, apg: 7.1, rpg: 4.8, fg: 41, stocks: 1.4, jersey: 1, age: 24 },
  { name: "Collin Sexton", position: "SG", team: "Hornets", conf: "Eastern", div: "Southeast", ppg: 14.2, apg: 3.7, rpg: 1.9, fg: 49, stocks: 1.1, jersey: 2, age: 27 },
  { name: "Kon Knueppel", position: "SF", team: "Hornets", conf: "Eastern", div: "Southeast", ppg: 18.5, apg: 3.4, rpg: 5.3, fg: 48, stocks: 0.9, jersey: 7, age: 20 }, // ROY runner-up
  { name: "Brandon Miller", position: "SF", team: "Hornets", conf: "Eastern", div: "Southeast", ppg: 20.2, apg: 3.3, rpg: 4.9, fg: 44, stocks: 1.7, jersey: 24, age: 23 },
  { name: "Miles Bridges", position: "PF", team: "Hornets", conf: "Eastern", div: "Southeast", ppg: 17.1, apg: 3.2, rpg: 5.8, fg: 46, stocks: 1.0, jersey: 0, age: 27 },

  // ============================= CHICAGO BULLS =============================
  { name: "Josh Giddey", position: "PG", team: "Bulls", conf: "Eastern", div: "Central", ppg: 17.0, apg: 9.1, rpg: 8.3, fg: 45, stocks: 1.5, jersey: 3, age: 23 },
  { name: "Coby White", position: "SG", team: "Bulls", conf: "Eastern", div: "Central", ppg: 18.6, apg: 4.7, rpg: 3.7, fg: 44, stocks: 0.8, jersey: 0, age: 25 },
  { name: "Ayo Dosunmu", position: "SG", team: "Bulls", conf: "Eastern", div: "Central", ppg: 15.0, apg: 3.6, rpg: 3.0, fg: 51, stocks: 1.1, jersey: 11, age: 26 }, // bench
  { name: "Matas Buzelis", position: "PF", team: "Bulls", conf: "Eastern", div: "Central", ppg: 16.3, apg: 2.1, rpg: 5.8, fg: 46, stocks: 2.2, jersey: 14, age: 21 },
  { name: "Nikola Vučević", position: "C", team: "Bulls", conf: "Eastern", div: "Central", ppg: 16.9, apg: 3.8, rpg: 9.0, fg: 51, stocks: 1.3, jersey: 9, age: 35 },
  { name: "Tre Jones", position: "PG", team: "Bulls", conf: "Eastern", div: "Central", ppg: 14.1, apg: 5.4, rpg: 3.1, fg: 55, stocks: 1.4, jersey: 30, age: 26 }, // bench

  // ============================= CLEVELAND CAVALIERS =============================
  { name: "Darius Garland", position: "PG", team: "Cavaliers", conf: "Eastern", div: "Central", ppg: 18.0, apg: 6.9, rpg: 2.4, fg: 45, stocks: 0.9, jersey: 10, age: 26 },
  { name: "Donovan Mitchell", position: "SG", team: "Cavaliers", conf: "Eastern", div: "Central", ppg: 27.9, apg: 5.7, rpg: 4.5, fg: 48, stocks: 1.8, jersey: 45, age: 29 },
  { name: "De'Andre Hunter", position: "SF", team: "Cavaliers", conf: "Eastern", div: "Central", ppg: 14.0, apg: 2.1, rpg: 4.2, fg: 42, stocks: 0.8, jersey: 12, age: 28 },
  { name: "Evan Mobley", position: "PF", team: "Cavaliers", conf: "Eastern", div: "Central", ppg: 18.2, apg: 3.6, rpg: 9.0, fg: 55, stocks: 2.4, jersey: 4, age: 24 },
  { name: "Jarrett Allen", position: "C", team: "Cavaliers", conf: "Eastern", div: "Central", ppg: 15.4, apg: 1.8, rpg: 8.5, fg: 64, stocks: 1.8, jersey: 31, age: 27 },

  // ============================= DALLAS MAVERICKS =============================
  { name: "Cooper Flagg", position: "SF", team: "Mavericks", conf: "Western", div: "Southwest", ppg: 21.0, apg: 4.5, rpg: 6.7, fg: 47, stocks: 2.1, jersey: 32, age: 19 }, // ROY
  { name: "Naji Marshall", position: "SF", team: "Mavericks", conf: "Western", div: "Southwest", ppg: 15.2, apg: 3.3, rpg: 4.7, fg: 51, stocks: 1.2, jersey: 13, age: 28 }, // bench
  { name: "Anthony Davis", position: "PF", team: "Mavericks", conf: "Western", div: "Southwest", ppg: 20.4, apg: 2.8, rpg: 11.1, fg: 51, stocks: 2.8, jersey: 3, age: 32 },
  { name: "P.J. Washington", position: "PF", team: "Mavericks", conf: "Western", div: "Southwest", ppg: 14.2, apg: 1.8, rpg: 7.0, fg: 45, stocks: 2.1, jersey: 25, age: 27 }, // bench

  // ============================= DENVER NUGGETS =============================
  { name: "Jamal Murray", position: "PG", team: "Nuggets", conf: "Western", div: "Northwest", ppg: 25.4, apg: 7.1, rpg: 4.4, fg: 48, stocks: 1.3, jersey: 27, age: 28 },
  { name: "Nikola Jokić", position: "C", team: "Nuggets", conf: "Western", div: "Northwest", ppg: 27.7, apg: 10.7, rpg: 12.9, fg: 57, stocks: 2.2, jersey: 15, age: 30 },
  { name: "Aaron Gordon", position: "PF", team: "Nuggets", conf: "Western", div: "Northwest", ppg: 16.2, apg: 2.7, rpg: 5.8, fg: 50, stocks: 0.9, jersey: 50, age: 30 },
  { name: "Peyton Watson", position: "SF", team: "Nuggets", conf: "Western", div: "Northwest", ppg: 14.6, apg: 2.1, rpg: 4.9, fg: 49, stocks: 2.0, jersey: 8, age: 23 }, // bench

  // ============================= DETROIT PISTONS =============================
  { name: "Cade Cunningham", position: "PG", team: "Pistons", conf: "Eastern", div: "Central", ppg: 23.9, apg: 9.9, rpg: 5.5, fg: 46, stocks: 2.2, jersey: 2, age: 24 },
  { name: "Jalen Duren", position: "C", team: "Pistons", conf: "Eastern", div: "Central", ppg: 19.5, apg: 2.0, rpg: 10.5, fg: 65, stocks: 1.6, jersey: 0, age: 22 },

  // ============================= GOLDEN STATE WARRIORS =============================
  { name: "Stephen Curry", position: "PG", team: "Warriors", conf: "Western", div: "Pacific", ppg: 26.6, apg: 4.7, rpg: 3.6, fg: 47, stocks: 1.5, jersey: 30, age: 37 },
  { name: "Brandin Podziemski", position: "SG", team: "Warriors", conf: "Western", div: "Pacific", ppg: 13.8, apg: 3.7, rpg: 5.1, fg: 46, stocks: 1.3, jersey: 2, age: 22 },
  { name: "Jimmy Butler", position: "SF", team: "Warriors", conf: "Western", div: "Pacific", ppg: 20.0, apg: 4.9, rpg: 5.6, fg: 52, stocks: 1.6, jersey: 10, age: 36 },

  // ============================= HOUSTON ROCKETS =============================
  { name: "Amen Thompson", position: "PG", team: "Rockets", conf: "Western", div: "Southwest", ppg: 18.3, apg: 5.3, rpg: 7.8, fg: 53, stocks: 2.1, jersey: 1, age: 23 },
  { name: "Kevin Durant", position: "SF", team: "Rockets", conf: "Western", div: "Southwest", ppg: 26.0, apg: 4.8, rpg: 5.5, fg: 52, stocks: 1.7, jersey: 7, age: 37 },
  { name: "Jabari Smith Jr.", position: "PF", team: "Rockets", conf: "Western", div: "Southwest", ppg: 15.8, apg: 1.9, rpg: 6.9, fg: 45, stocks: 1.6, jersey: 10, age: 22 }, // bench
  { name: "Alperen Şengün", position: "C", team: "Rockets", conf: "Western", div: "Southwest", ppg: 20.4, apg: 6.2, rpg: 8.9, fg: 52, stocks: 2.3, jersey: 28, age: 23 },

  // ============================= INDIANA PACERS =============================
  { name: "Andrew Nembhard", position: "PG", team: "Pacers", conf: "Eastern", div: "Central", ppg: 16.9, apg: 7.7, rpg: 2.8, fg: 44, stocks: 1.0, jersey: 2, age: 26 },
  { name: "Bennedict Mathurin", position: "SF", team: "Pacers", conf: "Eastern", div: "Central", ppg: 17.8, apg: 2.3, rpg: 5.4, fg: 43, stocks: 0.7, jersey: 0, age: 23 },
  { name: "Aaron Nesmith", position: "SF", team: "Pacers", conf: "Eastern", div: "Central", ppg: 13.8, apg: 1.9, rpg: 4.2, fg: 41, stocks: 1.1, jersey: 23, age: 26 }, // bench
  { name: "Pascal Siakam", position: "PF", team: "Pacers", conf: "Eastern", div: "Central", ppg: 24.0, apg: 3.8, rpg: 6.6, fg: 48, stocks: 1.5, jersey: 43, age: 31 },

  // ============================= LA CLIPPERS =============================
  { name: "James Harden", position: "PG", team: "Clippers", conf: "Western", div: "Pacific", ppg: 25.4, apg: 8.1, rpg: 4.8, fg: 42, stocks: 1.7, jersey: 1, age: 36 },
  { name: "Kawhi Leonard", position: "SF", team: "Clippers", conf: "Western", div: "Pacific", ppg: 27.9, apg: 3.6, rpg: 6.4, fg: 51, stocks: 2.3, jersey: 2, age: 34 },
  { name: "John Collins", position: "PF", team: "Clippers", conf: "Western", div: "Pacific", ppg: 13.6, apg: 1.0, rpg: 5.3, fg: 55, stocks: 1.6, jersey: 20, age: 28 }, // bench
  { name: "Ivica Zubac", position: "C", team: "Clippers", conf: "Western", div: "Pacific", ppg: 14.4, apg: 2.2, rpg: 11.0, fg: 61, stocks: 1.2, jersey: 40, age: 28 },

  // ============================= LA LAKERS =============================
  { name: "Luka Dončić", position: "PG", team: "Lakers", conf: "Western", div: "Pacific", ppg: 33.5, apg: 8.3, rpg: 7.7, fg: 48, stocks: 2.1, jersey: 77, age: 26 },
  { name: "Austin Reaves", position: "SG", team: "Lakers", conf: "Western", div: "Pacific", ppg: 23.3, apg: 5.5, rpg: 4.7, fg: 49, stocks: 1.5, jersey: 15, age: 27 },
  { name: "LeBron James", position: "SF", team: "Lakers", conf: "Western", div: "Pacific", ppg: 20.9, apg: 7.2, rpg: 6.1, fg: 52, stocks: 1.8, jersey: 23, age: 41 },

  // ============================= MEMPHIS GRIZZLIES =============================
  { name: "Ja Morant", position: "PG", team: "Grizzlies", conf: "Western", div: "Southwest", ppg: 19.5, apg: 8.1, rpg: 3.3, fg: 41, stocks: 1.3, jersey: 12, age: 26 },
  { name: "Ty Jerome", position: "SG", team: "Grizzlies", conf: "Western", div: "Southwest", ppg: 19.7, apg: 5.7, rpg: 2.8, fg: 47, stocks: 1.4, jersey: 2, age: 28 },
  { name: "Cedric Coward", position: "SG", team: "Grizzlies", conf: "Western", div: "Southwest", ppg: 13.6, apg: 2.8, rpg: 5.9, fg: 47, stocks: 1.0, jersey: 23, age: 22 }, // bench, ROY candidate
  { name: "Santi Aldama", position: "PF", team: "Grizzlies", conf: "Western", div: "Southwest", ppg: 14.0, apg: 2.9, rpg: 6.7, fg: 48, stocks: 1.6, jersey: 7, age: 25 }, // bench
  { name: "Jaren Jackson Jr.", position: "C", team: "Grizzlies", conf: "Western", div: "Southwest", ppg: 19.2, apg: 1.9, rpg: 5.8, fg: 48, stocks: 2.5, jersey: 20, age: 26 },
  { name: "Zach Edey", position: "C", team: "Grizzlies", conf: "Western", div: "Southwest", ppg: 13.6, apg: 1.1, rpg: 11.1, fg: 63, stocks: 2.5, jersey: 14, age: 23 }, // bench

  // ============================= MIAMI HEAT =============================
  { name: "Norman Powell", position: "SG", team: "Heat", conf: "Eastern", div: "Southeast", ppg: 21.7, apg: 2.5, rpg: 3.5, fg: 47, stocks: 1.3, jersey: 24, age: 32 },
  { name: "Tyler Herro", position: "SG", team: "Heat", conf: "Eastern", div: "Southeast", ppg: 20.5, apg: 4.1, rpg: 4.8, fg: 48, stocks: 1.1, jersey: 14, age: 26 },
  { name: "Jaime Jaquez Jr.", position: "SF", team: "Heat", conf: "Eastern", div: "Southeast", ppg: 15.4, apg: 4.7, rpg: 5.0, fg: 51, stocks: 1.0, jersey: 11, age: 24 }, // bench, 6MOY runner-up
  { name: "Andrew Wiggins", position: "SF", team: "Heat", conf: "Eastern", div: "Southeast", ppg: 15.4, apg: 2.7, rpg: 4.8, fg: 48, stocks: 2.1, jersey: 22, age: 30 },
  { name: "Bam Adebayo", position: "C", team: "Heat", conf: "Eastern", div: "Southeast", ppg: 20.1, apg: 3.2, rpg: 10.0, fg: 44, stocks: 1.9, jersey: 13, age: 28 },

  // ============================= MILWAUKEE BUCKS =============================
  { name: "Kevin Porter Jr.", position: "PG", team: "Bucks", conf: "Eastern", div: "Central", ppg: 17.4, apg: 7.4, rpg: 5.2, fg: 47, stocks: 2.7, jersey: 7, age: 25 },
  { name: "Ryan Rollins", position: "PG", team: "Bucks", conf: "Eastern", div: "Central", ppg: 17.3, apg: 5.6, rpg: 4.6, fg: 47, stocks: 1.9, jersey: 13, age: 23 },
  { name: "Cormac Ryan", position: "SG", team: "Bucks", conf: "Eastern", div: "Central", ppg: 14.3, apg: 1.7, rpg: 2.5, fg: 52, stocks: 1.3, jersey: 30, age: 27 }, // bench, small sample
  { name: "Giannis Antetokounmpo", position: "PF", team: "Bucks", conf: "Eastern", div: "Central", ppg: 27.6, apg: 5.4, rpg: 9.8, fg: 62, stocks: 1.6, jersey: 7, age: 31 },
  { name: "Bobby Portis", position: "PF", team: "Bucks", conf: "Eastern", div: "Central", ppg: 13.7, apg: 1.6, rpg: 6.4, fg: 49, stocks: 0.8, jersey: 95, age: 30 }, // bench

  // ============================= MINNESOTA TIMBERWOLVES =============================
  { name: "Anthony Edwards", position: "SG", team: "Timberwolves", conf: "Western", div: "Northwest", ppg: 28.8, apg: 3.7, rpg: 5.0, fg: 49, stocks: 2.2, jersey: 5, age: 24 },
  { name: "Julius Randle", position: "PF", team: "Timberwolves", conf: "Western", div: "Northwest", ppg: 21.1, apg: 5.0, rpg: 6.7, fg: 48, stocks: 1.3, jersey: 30, age: 31 },
  { name: "Jaden McDaniels", position: "PF", team: "Timberwolves", conf: "Western", div: "Northwest", ppg: 14.8, apg: 2.7, rpg: 4.2, fg: 52, stocks: 2.1, jersey: 3, age: 25 },
  { name: "Naz Reid", position: "C", team: "Timberwolves", conf: "Western", div: "Northwest", ppg: 13.6, apg: 2.2, rpg: 6.2, fg: 46, stocks: 2.0, jersey: 11, age: 26 }, // bench, 6MOY runner-up

  // ============================= NEW ORLEANS PELICANS =============================
  { name: "Jeremiah Fears", position: "PG", team: "Pelicans", conf: "Western", div: "Southwest", ppg: 14.3, apg: 3.4, rpg: 3.7, fg: 43, stocks: 1.6, jersey: 0, age: 19 }, // bench
  { name: "Dejounte Murray", position: "PG", team: "Pelicans", conf: "Western", div: "Southwest", ppg: 16.7, apg: 6.4, rpg: 5.4, fg: 48, stocks: 1.8, jersey: 5, age: 29 },
  { name: "Saddiq Bey", position: "SF", team: "Pelicans", conf: "Western", div: "Southwest", ppg: 17.7, apg: 2.5, rpg: 5.6, fg: 45, stocks: 1.0, jersey: 41, age: 26 },
  { name: "Trey Murphy III", position: "SF", team: "Pelicans", conf: "Western", div: "Southwest", ppg: 21.5, apg: 3.8, rpg: 5.7, fg: 47, stocks: 1.9, jersey: 25, age: 25 },
  { name: "Zion Williamson", position: "PF", team: "Pelicans", conf: "Western", div: "Southwest", ppg: 21.0, apg: 3.2, rpg: 5.7, fg: 60, stocks: 1.5, jersey: 1, age: 25 },

  // ============================= NEW YORK KNICKS =============================
  { name: "Jalen Brunson", position: "PG", team: "Knicks", conf: "Eastern", div: "Atlantic", ppg: 26.0, apg: 6.8, rpg: 3.3, fg: 47, stocks: 0.9, jersey: 11, age: 29 },
  { name: "Mikal Bridges", position: "SF", team: "Knicks", conf: "Eastern", div: "Atlantic", ppg: 14.4, apg: 3.7, rpg: 3.8, fg: 49, stocks: 2.1, jersey: 25, age: 29 },
  { name: "OG Anunoby", position: "PF", team: "Knicks", conf: "Eastern", div: "Atlantic", ppg: 16.7, apg: 2.2, rpg: 5.2, fg: 48, stocks: 2.3, jersey: 8, age: 28 },
  { name: "Karl-Anthony Towns", position: "C", team: "Knicks", conf: "Eastern", div: "Atlantic", ppg: 20.1, apg: 3.0, rpg: 11.9, fg: 50, stocks: 1.4, jersey: 32, age: 30 },

  // ============================= OKLAHOMA CITY THUNDER =============================
  { name: "Shai Gilgeous-Alexander", position: "PG", team: "Thunder", conf: "Western", div: "Northwest", ppg: 31.1, apg: 6.6, rpg: 4.3, fg: 55, stocks: 2.2, jersey: 2, age: 27 }, // MVP
  { name: "Jalen Williams", position: "SG", team: "Thunder", conf: "Western", div: "Northwest", ppg: 17.1, apg: 5.5, rpg: 4.6, fg: 48, stocks: 1.5, jersey: 8, age: 24 },
  { name: "Ajay Mitchell", position: "SG", team: "Thunder", conf: "Western", div: "Northwest", ppg: 13.6, apg: 3.6, rpg: 3.3, fg: 49, stocks: 1.5, jersey: 25, age: 23 }, // bench, 6MOY candidate
  { name: "Chet Holmgren", position: "PF", team: "Thunder", conf: "Western", div: "Northwest", ppg: 17.1, apg: 1.7, rpg: 8.9, fg: 56, stocks: 2.5, jersey: 7, age: 23 },

  // ============================= ORLANDO MAGIC =============================
  { name: "Anthony Black", position: "PG", team: "Magic", conf: "Eastern", div: "Southeast", ppg: 15.0, apg: 3.7, rpg: 3.8, fg: 45, stocks: 2.1, jersey: 0, age: 22 },
  { name: "Jalen Suggs", position: "PG", team: "Magic", conf: "Eastern", div: "Southeast", ppg: 13.8, apg: 5.5, rpg: 3.9, fg: 44, stocks: 2.5, jersey: 4, age: 24 }, // bench
  { name: "Desmond Bane", position: "SG", team: "Magic", conf: "Eastern", div: "Southeast", ppg: 20.1, apg: 4.1, rpg: 4.1, fg: 48, stocks: 1.5, jersey: 3, age: 27 },
  { name: "Franz Wagner", position: "SF", team: "Magic", conf: "Eastern", div: "Southeast", ppg: 20.6, apg: 3.3, rpg: 5.2, fg: 48, stocks: 1.2, jersey: 22, age: 24 },
  { name: "Paolo Banchero", position: "PF", team: "Magic", conf: "Eastern", div: "Southeast", ppg: 22.2, apg: 5.2, rpg: 8.4, fg: 46, stocks: 1.3, jersey: 5, age: 23 },

  // ============================= PHILADELPHIA 76ERS =============================
  { name: "Tyrese Maxey", position: "PG", team: "76ers", conf: "Eastern", div: "Atlantic", ppg: 28.3, apg: 6.6, rpg: 4.1, fg: 46, stocks: 2.7, jersey: 0, age: 25 },
  { name: "VJ Edgecombe", position: "SG", team: "76ers", conf: "Eastern", div: "Atlantic", ppg: 16.0, apg: 4.2, rpg: 5.6, fg: 44, stocks: 1.9, jersey: 77, age: 20 }, // ROY runner-up
  { name: "Kelly Oubre Jr.", position: "SF", team: "76ers", conf: "Eastern", div: "Atlantic", ppg: 14.1, apg: 1.6, rpg: 5.0, fg: 47, stocks: 1.9, jersey: 9, age: 30 }, // bench
  { name: "Paul George", position: "PF", team: "76ers", conf: "Eastern", div: "Atlantic", ppg: 17.3, apg: 3.6, rpg: 5.3, fg: 44, stocks: 2.1, jersey: 8, age: 35 },
  { name: "Joel Embiid", position: "C", team: "76ers", conf: "Eastern", div: "Atlantic", ppg: 26.9, apg: 3.9, rpg: 7.7, fg: 49, stocks: 1.8, jersey: 21, age: 31 },

  // ============================= PHOENIX SUNS =============================
  { name: "Devin Booker", position: "SG", team: "Suns", conf: "Western", div: "Pacific", ppg: 26.1, apg: 6.0, rpg: 3.9, fg: 46, stocks: 1.1, jersey: 1, age: 29 },
  { name: "Jalen Green", position: "SG", team: "Suns", conf: "Western", div: "Pacific", ppg: 17.8, apg: 2.8, rpg: 3.6, fg: 42, stocks: 1.4, jersey: 4, age: 23 }, // bench
  { name: "Grayson Allen", position: "SG", team: "Suns", conf: "Western", div: "Pacific", ppg: 16.5, apg: 3.8, rpg: 3.0, fg: 40, stocks: 1.7, jersey: 8, age: 30 }, // bench
  { name: "Dillon Brooks", position: "SF", team: "Suns", conf: "Western", div: "Pacific", ppg: 20.2, apg: 1.8, rpg: 3.6, fg: 44, stocks: 1.2, jersey: 9, age: 30 },

  // ============================= PORTLAND TRAIL BLAZERS =============================
  { name: "Jrue Holiday", position: "PG", team: "Trail Blazers", conf: "Western", div: "Northwest", ppg: 16.3, apg: 6.1, rpg: 4.6, fg: 45, stocks: 1.1, jersey: 4, age: 35 },
  { name: "Scoot Henderson", position: "PG", team: "Trail Blazers", conf: "Western", div: "Northwest", ppg: 14.2, apg: 3.7, rpg: 2.7, fg: 42, stocks: 1.2, jersey: 60, age: 21 }, // bench
  { name: "Shaedon Sharpe", position: "SG", team: "Trail Blazers", conf: "Western", div: "Northwest", ppg: 20.8, apg: 2.6, rpg: 4.3, fg: 45, stocks: 1.5, jersey: 17, age: 22 },
  { name: "Deni Avdija", position: "SF", team: "Trail Blazers", conf: "Western", div: "Northwest", ppg: 24.2, apg: 6.7, rpg: 6.9, fg: 46, stocks: 1.4, jersey: 8, age: 25 },
  { name: "Jerami Grant", position: "PF", team: "Trail Blazers", conf: "Western", div: "Northwest", ppg: 18.6, apg: 2.1, rpg: 3.5, fg: 45, stocks: 1.3, jersey: 9, age: 31 },

  // ============================= SACRAMENTO KINGS =============================
  { name: "Zach LaVine", position: "SG", team: "Kings", conf: "Western", div: "Pacific", ppg: 19.2, apg: 2.3, rpg: 2.8, fg: 48, stocks: 1.0, jersey: 8, age: 30 },
  { name: "Russell Westbrook", position: "SF", team: "Kings", conf: "Western", div: "Pacific", ppg: 15.2, apg: 6.7, rpg: 5.4, fg: 43, stocks: 1.5, jersey: 18, age: 37 }, // bench
  { name: "Keegan Murray", position: "PF", team: "Kings", conf: "Western", div: "Pacific", ppg: 14.0, apg: 1.7, rpg: 5.7, fg: 42, stocks: 2.6, jersey: 13, age: 25 }, // bench
  { name: "DeMar DeRozan", position: "PF", team: "Kings", conf: "Western", div: "Pacific", ppg: 18.4, apg: 4.1, rpg: 2.9, fg: 50, stocks: 1.3, jersey: 10, age: 36 },
  { name: "Domantas Sabonis", position: "C", team: "Kings", conf: "Western", div: "Pacific", ppg: 15.8, apg: 4.1, rpg: 11.4, fg: 54, stocks: 1.1, jersey: 11, age: 29 },

  // ============================= SAN ANTONIO SPURS =============================
  { name: "De'Aaron Fox", position: "PG", team: "Spurs", conf: "Western", div: "Southwest", ppg: 18.6, apg: 6.2, rpg: 3.8, fg: 49, stocks: 1.5, jersey: 4, age: 28 },
  { name: "Stephon Castle", position: "PG", team: "Spurs", conf: "Western", div: "Southwest", ppg: 16.7, apg: 7.4, rpg: 5.3, fg: 47, stocks: 1.4, jersey: 11, age: 21 }, // bench
  { name: "Devin Vassell", position: "SG", team: "Spurs", conf: "Western", div: "Southwest", ppg: 13.9, apg: 2.5, rpg: 4.0, fg: 44, stocks: 1.3, jersey: 24, age: 25 }, // bench
  { name: "Victor Wembanyama", position: "C", team: "Spurs", conf: "Western", div: "Southwest", ppg: 25.0, apg: 3.1, rpg: 11.5, fg: 51, stocks: 4.1, jersey: 1, age: 22 }, // MVP-3, DPOY

  // ============================= TORONTO RAPTORS =============================
  { name: "Immanuel Quickley", position: "PG", team: "Raptors", conf: "Eastern", div: "Atlantic", ppg: 16.4, apg: 5.9, rpg: 4.0, fg: 44, stocks: 1.4, jersey: 5, age: 26 },
  { name: "RJ Barrett", position: "SF", team: "Raptors", conf: "Eastern", div: "Atlantic", ppg: 19.3, apg: 3.3, rpg: 5.3, fg: 49, stocks: 1.0, jersey: 9, age: 25 },
  { name: "Brandon Ingram", position: "SF", team: "Raptors", conf: "Eastern", div: "Atlantic", ppg: 21.5, apg: 3.7, rpg: 5.6, fg: 48, stocks: 1.5, jersey: 3, age: 28 },
  { name: "Scottie Barnes", position: "PF", team: "Raptors", conf: "Eastern", div: "Atlantic", ppg: 18.1, apg: 5.9, rpg: 7.5, fg: 51, stocks: 2.9, jersey: 4, age: 24 },

  // ============================= UTAH JAZZ =============================
  { name: "Keyonte George", position: "PG", team: "Jazz", conf: "Western", div: "Northwest", ppg: 23.6, apg: 6.1, rpg: 3.7, fg: 46, stocks: 1.4, jersey: 3, age: 22 },
  { name: "Kennedy Chandler", position: "PG", team: "Jazz", conf: "Western", div: "Northwest", ppg: 15.0, apg: 6.7, rpg: 3.4, fg: 45, stocks: 1.2, jersey: 1, age: 23 }, // bench
  { name: "Ace Bailey", position: "SF", team: "Jazz", conf: "Western", div: "Northwest", ppg: 13.8, apg: 1.8, rpg: 4.2, fg: 44, stocks: 1.5, jersey: 19, age: 19 }, // bench
  { name: "Brice Sensabaugh", position: "SF", team: "Jazz", conf: "Western", div: "Northwest", ppg: 14.9, apg: 1.9, rpg: 3.1, fg: 46, stocks: 0.9, jersey: 28, age: 22 }, // bench
  { name: "Lauri Markkanen", position: "PF", team: "Jazz", conf: "Western", div: "Northwest", ppg: 26.7, apg: 2.1, rpg: 6.9, fg: 48, stocks: 1.5, jersey: 23, age: 28 },
  { name: "Walker Kessler", position: "C", team: "Jazz", conf: "Western", div: "Northwest", ppg: 14.4, apg: 3.0, rpg: 10.8, fg: 70, stocks: 3.2, jersey: 24, age: 24 }, // bench, small sample

  // ============================= WASHINGTON WIZARDS =============================
  { name: "Kyshawn George", position: "SF", team: "Wizards", conf: "Eastern", div: "Southeast", ppg: 14.8, apg: 4.5, rpg: 5.1, fg: 44, stocks: 1.9, jersey: 18, age: 22 },
  { name: "Alex Sarr", position: "C", team: "Wizards", conf: "Eastern", div: "Southeast", ppg: 16.3, apg: 2.7, rpg: 7.4, fg: 48, stocks: 2.8, jersey: 20, age: 20 },
],
    baseball: [],
    hockey: [],
    soccer: []
};
