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
    baseball: [// 2025 MLB regular-season stats (from Baseball-Reference)
// World Series Champion: Los Angeles Dodgers (def. Toronto Blue Jays)
// For players traded mid-season, team = whichever club they played the most games for.

  // ============================= AL EAST =============================
  // --- Baltimore Orioles ---
  { name: "Gunnar Henderson", position: "SS", ba: 0.274, hr: 17, rbi: 68, hits: 158, sb: 30, jersey: 2, age: 24, league: "AL", div: "AL East", team: "Baltimore Orioles" },
  { name: "Jackson Holliday", position: "2B", ba: 0.242, hr: 17, rbi: 55, hits: 142, sb: 17, jersey: 7, age: 21, league: "AL", div: "AL East", team: "Baltimore Orioles" },
  { name: "Ryan O'Hearn", position: "1B", ba: 0.283, hr: 13, rbi: 43, hits: 88, sb: 3, jersey: 32, age: 31, league: "AL", div: "AL East", team: "Baltimore Orioles" },
  { name: "Ramón Laureano", position: "RF", ba: 0.290, hr: 15, rbi: 46, hits: 75, sb: 4, jersey: 27, age: 30, league: "AL", div: "AL East", team: "Baltimore Orioles" },
  { name: "Colton Cowser", position: "LF", ba: 0.196, hr: 16, rbi: 40, hits: 64, sb: 14, jersey: 17, age: 25, league: "AL", div: "AL East", team: "Baltimore Orioles" },
  { name: "Adley Rutschman", position: "C", ba: 0.220, hr: 9, rbi: 29, hits: 71, sb: 0, jersey: 35, age: 27, league: "AL", div: "AL East", team: "Baltimore Orioles" },
  { name: "Jordan Westburg", position: "3B", ba: 0.265, hr: 17, rbi: 41, hits: 87, sb: 1, jersey: 11, age: 26, league: "AL", div: "AL East", team: "Baltimore Orioles" },

  // --- Boston Red Sox ---
  { name: "Jarren Duran", position: "CF", ba: 0.256, hr: 16, rbi: 84, hits: 159, sb: 24, jersey: 16, age: 28, league: "AL", div: "AL East", team: "Boston Red Sox" },
  { name: "Alex Bregman", position: "3B", ba: 0.273, hr: 18, rbi: 62, hits: 118, sb: 1, jersey: 2, age: 31, league: "AL", div: "AL East", team: "Boston Red Sox" },
  { name: "Trevor Story", position: "SS", ba: 0.263, hr: 25, rbi: 96, hits: 161, sb: 31, jersey: 10, age: 32, league: "AL", div: "AL East", team: "Boston Red Sox" },
  { name: "Wilyer Abreu", position: "RF", ba: 0.247, hr: 22, rbi: 69, hits: 92, sb: 6, jersey: 52, age: 26, league: "AL", div: "AL East", team: "Boston Red Sox" },
  { name: "Carlos Narváez", position: "C", ba: 0.241, hr: 15, rbi: 50, hits: 97, sb: 1, jersey: 94, age: 26, league: "AL", div: "AL East", team: "Boston Red Sox" },
  { name: "Roman Anthony", position: "RF", ba: 0.292, hr: 8, rbi: 32, hits: 75, sb: 4, jersey: 19, age: 21, league: "AL", div: "AL East", team: "Boston Red Sox" },
  { name: "Ceddanne Rafaela", position: "CF", ba: 0.249, hr: 16, rbi: 63, hits: 136, sb: 20, jersey: 43, age: 24, league: "AL", div: "AL East", team: "Boston Red Sox" },

  // --- New York Yankees ---
  { name: "Aaron Judge", position: "RF", ba: 0.331, hr: 53, rbi: 114, hits: 179, sb: 12, jersey: 99, age: 33, league: "AL", div: "AL East", team: "New York Yankees" },
  { name: "Cody Bellinger", position: "CF", ba: 0.272, hr: 29, rbi: 98, hits: 160, sb: 13, jersey: 35, age: 29, league: "AL", div: "AL East", team: "New York Yankees" },
  { name: "Jazz Chisholm Jr.", position: "3B", ba: 0.242, hr: 31, rbi: 80, hits: 112, sb: 31, jersey: 13, age: 27, league: "AL", div: "AL East", team: "New York Yankees" },
  { name: "Ben Rice", position: "1B", ba: 0.255, hr: 26, rbi: 65, hits: 119, sb: 3, jersey: 93, age: 26, league: "AL", div: "AL East", team: "New York Yankees" },
  { name: "Trent Grisham", position: "CF", ba: 0.235, hr: 34, rbi: 74, hits: 116, sb: 3, jersey: 12, age: 28, league: "AL", div: "AL East", team: "New York Yankees" },
  { name: "Paul Goldschmidt", position: "1B", ba: 0.274, hr: 10, rbi: 45, hits: 134, sb: 5, jersey: 46, age: 37, league: "AL", div: "AL East", team: "New York Yankees" },
  { name: "Austin Wells", position: "C", ba: 0.219, hr: 21, rbi: 71, hits: 88, sb: 5, jersey: 28, age: 25, league: "AL", div: "AL East", team: "New York Yankees" },

  // --- Tampa Bay Rays ---
  { name: "Yandy Díaz", position: "1B", ba: 0.300, hr: 25, rbi: 83, hits: 175, sb: 3, jersey: 2, age: 33, league: "AL", div: "AL East", team: "Tampa Bay Rays" },
  { name: "Junior Caminero", position: "3B", ba: 0.264, hr: 45, rbi: 110, hits: 159, sb: 7, jersey: 1, age: 21, league: "AL", div: "AL East", team: "Tampa Bay Rays" },
  { name: "Jonathan Aranda", position: "1B", ba: 0.316, hr: 14, rbi: 59, hits: 117, sb: 0, jersey: 62, age: 27, league: "AL", div: "AL East", team: "Tampa Bay Rays" },
  { name: "Brandon Lowe", position: "2B", ba: 0.256, hr: 31, rbi: 83, hits: 130, sb: 3, jersey: 8, age: 30, league: "AL", div: "AL East", team: "Tampa Bay Rays" },
  { name: "Chandler Simpson", position: "CF", ba: 0.295, hr: 0, rbi: 26, hits: 122, sb: 44, jersey: 21, age: 24, league: "AL", div: "AL East", team: "Tampa Bay Rays" },
  { name: "Josh Lowe", position: "RF", ba: 0.220, hr: 11, rbi: 40, hits: 87, sb: 18, jersey: 15, age: 27, league: "AL", div: "AL East", team: "Tampa Bay Rays" },

  // --- Toronto Blue Jays ---
  { name: "Vladimir Guerrero Jr.", position: "1B", ba: 0.292, hr: 23, rbi: 84, hits: 172, sb: 6, jersey: 27, age: 26, league: "AL", div: "AL East", team: "Toronto Blue Jays" },
  { name: "Bo Bichette", position: "SS", ba: 0.311, hr: 18, rbi: 94, hits: 181, sb: 4, jersey: 11, age: 27, league: "AL", div: "AL East", team: "Toronto Blue Jays" },
  { name: "Andrés Giménez", position: "2B", ba: 0.210, hr: 7, rbi: 35, hits: 69, sb: 12, jersey: 0, age: 26, league: "AL", div: "AL East", team: "Toronto Blue Jays" },
  { name: "George Springer", position: "DH", ba: 0.309, hr: 32, rbi: 84, hits: 154, sb: 18, jersey: 4, age: 35, league: "AL", div: "AL East", team: "Toronto Blue Jays" },
  { name: "Alejandro Kirk", position: "C", ba: 0.282, hr: 15, rbi: 76, hits: 127, sb: 1, jersey: 30, age: 26, league: "AL", div: "AL East", team: "Toronto Blue Jays" },
  { name: "Ernie Clement", position: "3B", ba: 0.277, hr: 9, rbi: 50, hits: 151, sb: 6, jersey: 28, age: 29, league: "AL", div: "AL East", team: "Toronto Blue Jays" },
  { name: "Daulton Varsho", position: "CF", ba: 0.238, hr: 20, rbi: 55, hits: 59, sb: 2, jersey: 25, age: 28, league: "AL", div: "AL East", team: "Toronto Blue Jays" },

  // ============================= AL CENTRAL =============================
  // --- Chicago White Sox ---
  { name: "Miguel Vargas", position: "3B", ba: 0.234, hr: 16, rbi: 60, hits: 118, sb: 6, jersey: 18, age: 25, league: "AL", div: "AL Central", team: "Chicago White Sox" },
  { name: "Lenyn Sosa", position: "2B", ba: 0.264, hr: 22, rbi: 75, hits: 137, sb: 2, jersey: 10, age: 25, league: "AL", div: "AL Central", team: "Chicago White Sox" },
  { name: "Edgar Quero", position: "C", ba: 0.268, hr: 5, rbi: 36, hits: 98, sb: 0, jersey: 36, age: 22, league: "AL", div: "AL Central", team: "Chicago White Sox" },
  { name: "Andrew Benintendi", position: "LF", ba: 0.240, hr: 20, rbi: 63, hits: 101, sb: 1, jersey: 23, age: 30, league: "AL", div: "AL Central", team: "Chicago White Sox" },
  { name: "Chase Meidroth", position: "2B", ba: 0.253, hr: 5, rbi: 23, hits: 114, sb: 14, jersey: 20, age: 23, league: "AL", div: "AL Central", team: "Chicago White Sox" },
  { name: "Colson Montgomery", position: "SS", ba: 0.239, hr: 21, rbi: 55, hits: 61, sb: 0, jersey: 7, age: 23, league: "AL", div: "AL Central", team: "Chicago White Sox" },

  // --- Cleveland Guardians ---
  { name: "José Ramírez", position: "3B", ba: 0.283, hr: 30, rbi: 85, hits: 168, sb: 44, jersey: 11, age: 32, league: "AL", div: "AL Central", team: "Cleveland Guardians" },
  { name: "Steven Kwan", position: "LF", ba: 0.272, hr: 11, rbi: 56, hits: 170, sb: 21, jersey: 38, age: 27, league: "AL", div: "AL Central", team: "Cleveland Guardians" },
  { name: "Kyle Manzardo", position: "1B", ba: 0.234, hr: 27, rbi: 70, hits: 110, sb: 2, jersey: 9, age: 24, league: "AL", div: "AL Central", team: "Cleveland Guardians" },
  { name: "Gabriel Arias", position: "SS", ba: 0.220, hr: 11, rbi: 54, hits: 95, sb: 8, jersey: 2, age: 25, league: "AL", div: "AL Central", team: "Cleveland Guardians" },
  { name: "Bo Naylor", position: "C", ba: 0.195, hr: 14, rbi: 47, hits: 70, sb: 1, jersey: 23, age: 25, league: "AL", div: "AL Central", team: "Cleveland Guardians" },
  { name: "Daniel Schneemann", position: "2B", ba: 0.206, hr: 12, rbi: 41, hits: 78, sb: 9, jersey: 10, age: 28, league: "AL", div: "AL Central", team: "Cleveland Guardians" },

  // --- Detroit Tigers ---
  { name: "Riley Greene", position: "LF", ba: 0.258, hr: 36, rbi: 111, hits: 155, sb: 2, jersey: 31, age: 24, league: "AL", div: "AL Central", team: "Detroit Tigers" },
  { name: "Spencer Torkelson", position: "1B", ba: 0.240, hr: 31, rbi: 78, hits: 135, sb: 2, jersey: 20, age: 25, league: "AL", div: "AL Central", team: "Detroit Tigers" },
  { name: "Gleyber Torres", position: "2B", ba: 0.256, hr: 16, rbi: 74, hits: 136, sb: 4, jersey: 25, age: 28, league: "AL", div: "AL Central", team: "Detroit Tigers" },
  { name: "Kerry Carpenter", position: "DH", ba: 0.252, hr: 26, rbi: 62, hits: 109, sb: 1, jersey: 30, age: 27, league: "AL", div: "AL Central", team: "Detroit Tigers" },
  { name: "Dillon Dingler", position: "C", ba: 0.278, hr: 13, rbi: 57, hits: 121, sb: 0, jersey: 12, age: 26, league: "AL", div: "AL Central", team: "Detroit Tigers" },
  { name: "Zach McKinstry", position: "3B", ba: 0.259, hr: 12, rbi: 49, hits: 117, sb: 19, jersey: 39, age: 30, league: "AL", div: "AL Central", team: "Detroit Tigers" },
  { name: "Colt Keith", position: "3B", ba: 0.256, hr: 13, rbi: 45, hits: 106, sb: 1, jersey: 33, age: 23, league: "AL", div: "AL Central", team: "Detroit Tigers" },

  // --- Kansas City Royals ---
  { name: "Bobby Witt Jr.", position: "SS", ba: 0.295, hr: 23, rbi: 88, hits: 184, sb: 38, jersey: 7, age: 25, league: "AL", div: "AL Central", team: "Kansas City Royals" },
  { name: "Vinnie Pasquantino", position: "1B", ba: 0.264, hr: 32, rbi: 113, hits: 164, sb: 1, jersey: 9, age: 27, league: "AL", div: "AL Central", team: "Kansas City Royals" },
  { name: "Maikel Garcia", position: "3B", ba: 0.286, hr: 16, rbi: 74, hits: 170, sb: 23, jersey: 11, age: 25, league: "AL", div: "AL Central", team: "Kansas City Royals" },
  { name: "Salvador Perez", position: "C", ba: 0.236, hr: 30, rbi: 100, hits: 141, sb: 0, jersey: 13, age: 35, league: "AL", div: "AL Central", team: "Kansas City Royals" },
  { name: "Jonathan India", position: "2B", ba: 0.233, hr: 9, rbi: 45, hits: 116, sb: 0, jersey: 6, age: 28, league: "AL", div: "AL Central", team: "Kansas City Royals" },

  // --- Minnesota Twins ---
  { name: "Byron Buxton", position: "CF", ba: 0.264, hr: 35, rbi: 83, hits: 129, sb: 24, jersey: 25, age: 31, league: "AL", div: "AL Central", team: "Minnesota Twins" },
  { name: "Trevor Larnach", position: "LF", ba: 0.250, hr: 17, rbi: 60, hits: 126, sb: 4, jersey: 9, age: 28, league: "AL", div: "AL Central", team: "Minnesota Twins" },
  { name: "Ryan Jeffers", position: "C", ba: 0.266, hr: 9, rbi: 47, hits: 108, sb: 1, jersey: 27, age: 28, league: "AL", div: "AL Central", team: "Minnesota Twins" },
  { name: "Royce Lewis", position: "3B", ba: 0.237, hr: 13, rbi: 52, hits: 89, sb: 12, jersey: 23, age: 26, league: "AL", div: "AL Central", team: "Minnesota Twins" },
  { name: "Brooks Lee", position: "SS", ba: 0.236, hr: 16, rbi: 64, hits: 115, sb: 3, jersey: 72, age: 24, league: "AL", div: "AL Central", team: "Minnesota Twins" },

  // ============================= AL WEST =============================
  // --- Houston Astros ---
  { name: "Jeremy Peña", position: "SS", ba: 0.304, hr: 17, rbi: 62, hits: 150, sb: 20, jersey: 3, age: 27, league: "AL", div: "AL West", team: "Houston Astros" },
  { name: "Isaac Paredes", position: "3B", ba: 0.254, hr: 20, rbi: 53, hits: 96, sb: 0, jersey: 17, age: 26, league: "AL", div: "AL West", team: "Houston Astros" },
  { name: "Yainer Diaz", position: "C", ba: 0.256, hr: 20, rbi: 70, hits: 139, sb: 1, jersey: 21, age: 26, league: "AL", div: "AL West", team: "Houston Astros" },
  { name: "Jose Altuve", position: "2B", ba: 0.265, hr: 26, rbi: 77, hits: 156, sb: 10, jersey: 27, age: 35, league: "AL", div: "AL West", team: "Houston Astros" },
  { name: "Christian Walker", position: "1B", ba: 0.238, hr: 27, rbi: 88, hits: 139, sb: 2, jersey: 53, age: 34, league: "AL", div: "AL West", team: "Houston Astros" },
  { name: "Cam Smith", position: "RF", ba: 0.236, hr: 9, rbi: 51, hits: 104, sb: 8, jersey: 14, age: 22, league: "AL", div: "AL West", team: "Houston Astros" },
  { name: "Jake Meyers", position: "CF", ba: 0.292, hr: 3, rbi: 24, hits: 100, sb: 16, jersey: 6, age: 29, league: "AL", div: "AL West", team: "Houston Astros" },

  // --- Los Angeles Angels ---
  { name: "Taylor Ward", position: "RF", ba: 0.228, hr: 36, rbi: 103, hits: 132, sb: 4, jersey: 3, age: 31, league: "AL", div: "AL West", team: "Los Angeles Angels" },
  { name: "Mike Trout", position: "DH", ba: 0.232, hr: 26, rbi: 64, hits: 106, sb: 2, jersey: 27, age: 33, league: "AL", div: "AL West", team: "Los Angeles Angels" },
  { name: "Zach Neto", position: "SS", ba: 0.257, hr: 26, rbi: 62, hits: 129, sb: 26, jersey: 9, age: 24, league: "AL", div: "AL West", team: "Los Angeles Angels" },
  { name: "Jo Adell", position: "LF", ba: 0.236, hr: 37, rbi: 98, hits: 124, sb: 5, jersey: 7, age: 26, league: "AL", div: "AL West", team: "Los Angeles Angels" },
  { name: "Nolan Schanuel", position: "1B", ba: 0.264, hr: 12, rbi: 53, hits: 129, sb: 5, jersey: 18, age: 23, league: "AL", div: "AL West", team: "Los Angeles Angels" },
  { name: "Luis Rengifo", position: "2B", ba: 0.238, hr: 9, rbi: 43, hits: 119, sb: 10, jersey: 2, age: 28, league: "AL", div: "AL West", team: "Los Angeles Angels" },

  // --- Athletics ---
  { name: "Nick Kurtz", position: "1B", ba: 0.290, hr: 36, rbi: 86, hits: 122, sb: 2, jersey: 19, age: 22, league: "AL", div: "AL West", team: "Athletics" },
  { name: "Brent Rooker", position: "DH", ba: 0.262, hr: 30, rbi: 89, hits: 164, sb: 6, jersey: 25, age: 30, league: "AL", div: "AL West", team: "Athletics" },
  { name: "Shea Langeliers", position: "C", ba: 0.277, hr: 31, rbi: 72, hits: 133, sb: 7, jersey: 23, age: 27, league: "AL", div: "AL West", team: "Athletics" },
  { name: "Jacob Wilson", position: "SS", ba: 0.311, hr: 13, rbi: 63, hits: 151, sb: 5, jersey: 10, age: 23, league: "AL", div: "AL West", team: "Athletics" },
  { name: "Tyler Soderstrom", position: "1B", ba: 0.276, hr: 25, rbi: 93, hits: 155, sb: 8, jersey: 21, age: 23, league: "AL", div: "AL West", team: "Athletics" },
  { name: "Lawrence Butler", position: "RF", ba: 0.234, hr: 21, rbi: 63, hits: 133, sb: 22, jersey: 4, age: 24, league: "AL", div: "AL West", team: "Athletics" },

  // --- Seattle Mariners ---
  { name: "Julio Rodríguez", position: "CF", ba: 0.267, hr: 32, rbi: 95, hits: 174, sb: 30, jersey: 44, age: 24, league: "AL", div: "AL West", team: "Seattle Mariners" },
  { name: "Cal Raleigh", position: "C", ba: 0.247, hr: 60, rbi: 125, hits: 147, sb: 14, jersey: 29, age: 28, league: "AL", div: "AL West", team: "Seattle Mariners" },
  { name: "Randy Arozarena", position: "LF", ba: 0.238, hr: 27, rbi: 76, hits: 146, sb: 31, jersey: 56, age: 30, league: "AL", div: "AL West", team: "Seattle Mariners" },
  { name: "J.P. Crawford", position: "SS", ba: 0.265, hr: 12, rbi: 58, hits: 151, sb: 8, jersey: 3, age: 30, league: "AL", div: "AL West", team: "Seattle Mariners" },
  { name: "Jorge Polanco", position: "DH", ba: 0.265, hr: 26, rbi: 78, hits: 125, sb: 6, jersey: 7, age: 31, league: "AL", div: "AL West", team: "Seattle Mariners" },
  { name: "Josh Naylor", position: "1B", ba: 0.299, hr: 9, rbi: 33, hits: 58, sb: 19, jersey: 22, age: 28, league: "AL", div: "AL West", team: "Seattle Mariners" },
  { name: "Eugenio Suárez", position: "3B", ba: 0.189, hr: 13, rbi: 31, hits: 38, sb: 3, jersey: 28, age: 33, league: "AL", div: "AL West", team: "Seattle Mariners" },

  // --- Texas Rangers ---
  { name: "Marcus Semien", position: "2B", ba: 0.230, hr: 15, rbi: 62, hits: 108, sb: 11, jersey: 2, age: 34, league: "AL", div: "AL West", team: "Texas Rangers" },
  { name: "Corey Seager", position: "SS", ba: 0.271, hr: 21, rbi: 50, hits: 103, sb: 3, jersey: 5, age: 31, league: "AL", div: "AL West", team: "Texas Rangers" },
  { name: "Wyatt Langford", position: "LF", ba: 0.241, hr: 22, rbi: 62, hits: 118, sb: 22, jersey: 36, age: 23, league: "AL", div: "AL West", team: "Texas Rangers" },
  { name: "Josh Jung", position: "3B", ba: 0.251, hr: 14, rbi: 61, hits: 121, sb: 4, jersey: 6, age: 27, league: "AL", div: "AL West", team: "Texas Rangers" },
  { name: "Jonah Heim", position: "C", ba: 0.213, hr: 11, rbi: 43, hits: 84, sb: 3, jersey: 28, age: 30, league: "AL", div: "AL West", team: "Texas Rangers" },
  { name: "Adolis García", position: "RF", ba: 0.227, hr: 19, rbi: 75, hits: 115, sb: 13, jersey: 53, age: 32, league: "AL", div: "AL West", team: "Texas Rangers" },

  // ============================= NL EAST =============================
  // --- Atlanta Braves ---
  { name: "Matt Olson", position: "1B", ba: 0.272, hr: 29, rbi: 95, hits: 170, sb: 1, jersey: 28, age: 31, league: "NL", div: "NL East", team: "Atlanta Braves" },
  { name: "Ozzie Albies", position: "2B", ba: 0.240, hr: 16, rbi: 74, hits: 145, sb: 14, jersey: 1, age: 28, league: "NL", div: "NL East", team: "Atlanta Braves" },
  { name: "Michael Harris II", position: "CF", ba: 0.249, hr: 20, rbi: 86, hits: 152, sb: 20, jersey: 23, age: 24, league: "NL", div: "NL East", team: "Atlanta Braves" },
  { name: "Austin Riley", position: "3B", ba: 0.260, hr: 16, rbi: 54, hits: 108, sb: 2, jersey: 27, age: 28, league: "NL", div: "NL East", team: "Atlanta Braves" },
  { name: "Ronald Acuña Jr.", position: "RF", ba: 0.290, hr: 21, rbi: 42, hits: 98, sb: 9, jersey: 13, age: 27, league: "NL", div: "NL East", team: "Atlanta Braves" },
  { name: "Marcell Ozuna", position: "DH", ba: 0.232, hr: 21, rbi: 68, hits: 113, sb: 0, jersey: 20, age: 34, league: "NL", div: "NL East", team: "Atlanta Braves" },
  { name: "Drake Baldwin", position: "C", ba: 0.274, hr: 19, rbi: 80, hits: 111, sb: 0, jersey: 84, age: 24, league: "NL", div: "NL East", team: "Atlanta Braves" },

  // --- Miami Marlins ---
  { name: "Xavier Edwards", position: "SS", ba: 0.283, hr: 3, rbi: 43, hits: 159, sb: 27, jersey: 63, age: 25, league: "NL", div: "NL East", team: "Miami Marlins" },
  { name: "Agustín Ramírez", position: "C", ba: 0.231, hr: 21, rbi: 67, hits: 124, sb: 16, jersey: 17, age: 23, league: "NL", div: "NL East", team: "Miami Marlins" },
  { name: "Otto Lopez", position: "2B", ba: 0.246, hr: 15, rbi: 77, hits: 134, sb: 15, jersey: 61, age: 26, league: "NL", div: "NL East", team: "Miami Marlins" },
  { name: "Kyle Stowers", position: "RF", ba: 0.288, hr: 25, rbi: 73, hits: 115, sb: 5, jersey: 22, age: 27, league: "NL", div: "NL East", team: "Miami Marlins" },
  { name: "Jesús Sánchez", position: "LF", ba: 0.256, hr: 10, rbi: 36, hits: 78, sb: 9, jersey: 7, age: 27, league: "NL", div: "NL East", team: "Miami Marlins" },
  { name: "Jakob Marsee", position: "CF", ba: 0.292, hr: 5, rbi: 33, hits: 61, sb: 14, jersey: 24, age: 24, league: "NL", div: "NL East", team: "Miami Marlins" },
  { name: "Liam Hicks", position: "C", ba: 0.247, hr: 6, rbi: 45, hits: 82, sb: 2, jersey: 88, age: 26, league: "NL", div: "NL East", team: "Miami Marlins" },

  // --- New York Mets ---
  { name: "Francisco Lindor", position: "SS", ba: 0.267, hr: 31, rbi: 86, hits: 172, sb: 31, jersey: 12, age: 31, league: "NL", div: "NL East", team: "New York Mets" },
  { name: "Juan Soto", position: "RF", ba: 0.263, hr: 43, rbi: 105, hits: 152, sb: 38, jersey: 22, age: 26, league: "NL", div: "NL East", team: "New York Mets" },
  { name: "Pete Alonso", position: "1B", ba: 0.272, hr: 38, rbi: 126, hits: 170, sb: 1, jersey: 20, age: 30, league: "NL", div: "NL East", team: "New York Mets" },
  { name: "Brandon Nimmo", position: "LF", ba: 0.262, hr: 25, rbi: 92, hits: 154, sb: 13, jersey: 9, age: 32, league: "NL", div: "NL East", team: "New York Mets" },
  { name: "Mark Vientos", position: "3B", ba: 0.233, hr: 17, rbi: 61, hits: 99, sb: 1, jersey: 27, age: 25, league: "NL", div: "NL East", team: "New York Mets" },
  { name: "Jeff McNeil", position: "2B", ba: 0.243, hr: 12, rbi: 54, hits: 97, sb: 3, jersey: 1, age: 33, league: "NL", div: "NL East", team: "New York Mets" },

  // --- Philadelphia Phillies ---
  { name: "Kyle Schwarber", position: "DH", ba: 0.240, hr: 56, rbi: 132, hits: 145, sb: 10, jersey: 12, age: 32, league: "NL", div: "NL East", team: "Philadelphia Phillies" },
  { name: "Trea Turner", position: "SS", ba: 0.304, hr: 15, rbi: 69, hits: 179, sb: 36, jersey: 7, age: 32, league: "NL", div: "NL East", team: "Philadelphia Phillies" },
  { name: "Bryce Harper", position: "1B", ba: 0.261, hr: 27, rbi: 75, hits: 131, sb: 12, jersey: 3, age: 32, league: "NL", div: "NL East", team: "Philadelphia Phillies" },
  { name: "Bryson Stott", position: "2B", ba: 0.257, hr: 13, rbi: 66, hits: 128, sb: 24, jersey: 5, age: 27, league: "NL", div: "NL East", team: "Philadelphia Phillies" },
  { name: "J.T. Realmuto", position: "C", ba: 0.257, hr: 12, rbi: 52, hits: 129, sb: 8, jersey: 10, age: 34, league: "NL", div: "NL East", team: "Philadelphia Phillies" },
  { name: "Alec Bohm", position: "3B", ba: 0.287, hr: 11, rbi: 59, hits: 133, sb: 2, jersey: 28, age: 28, league: "NL", div: "NL East", team: "Philadelphia Phillies" },
  { name: "Nick Castellanos", position: "RF", ba: 0.250, hr: 17, rbi: 72, hits: 137, sb: 4, jersey: 8, age: 33, league: "NL", div: "NL East", team: "Philadelphia Phillies" },

  // --- Washington Nationals ---
  { name: "James Wood", position: "LF", ba: 0.256, hr: 31, rbi: 94, hits: 153, sb: 15, jersey: 29, age: 22, league: "NL", div: "NL East", team: "Washington Nationals" },
  { name: "CJ Abrams", position: "SS", ba: 0.257, hr: 19, rbi: 60, hits: 149, sb: 31, jersey: 5, age: 24, league: "NL", div: "NL East", team: "Washington Nationals" },
  { name: "Josh Bell", position: "1B", ba: 0.237, hr: 22, rbi: 63, hits: 111, sb: 0, jersey: 19, age: 32, league: "NL", div: "NL East", team: "Washington Nationals" },
  { name: "Luis García Jr.", position: "2B", ba: 0.252, hr: 16, rbi: 66, hits: 123, sb: 14, jersey: 2, age: 25, league: "NL", div: "NL East", team: "Washington Nationals" },
  { name: "Daylen Lile", position: "RF", ba: 0.299, hr: 9, rbi: 41, hits: 96, sb: 8, jersey: 10, age: 22, league: "NL", div: "NL East", team: "Washington Nationals" },
  { name: "Keibert Ruiz", position: "C", ba: 0.247, hr: 2, rbi: 25, hits: 63, sb: 0, jersey: 8, age: 26, league: "NL", div: "NL East", team: "Washington Nationals" },

  // ============================= NL CENTRAL =============================
  // --- Chicago Cubs ---
  { name: "Nico Hoerner", position: "2B", ba: 0.297, hr: 7, rbi: 61, hits: 178, sb: 29, jersey: 2, age: 28, league: "NL", div: "NL Central", team: "Chicago Cubs" },
  { name: "Kyle Tucker", position: "RF", ba: 0.266, hr: 22, rbi: 73, hits: 133, sb: 25, jersey: 30, age: 28, league: "NL", div: "NL Central", team: "Chicago Cubs" },
  { name: "Pete Crow-Armstrong", position: "CF", ba: 0.247, hr: 31, rbi: 95, hits: 146, sb: 35, jersey: 52, age: 23, league: "NL", div: "NL Central", team: "Chicago Cubs" },
  { name: "Michael Busch", position: "1B", ba: 0.261, hr: 34, rbi: 90, hits: 137, sb: 4, jersey: 29, age: 27, league: "NL", div: "NL Central", team: "Chicago Cubs" },
  { name: "Seiya Suzuki", position: "RF", ba: 0.245, hr: 32, rbi: 103, hits: 140, sb: 5, jersey: 27, age: 30, league: "NL", div: "NL Central", team: "Chicago Cubs" },
  { name: "Ian Happ", position: "LF", ba: 0.243, hr: 23, rbi: 79, hits: 138, sb: 6, jersey: 8, age: 30, league: "NL", div: "NL Central", team: "Chicago Cubs" },
  { name: "Dansby Swanson", position: "SS", ba: 0.244, hr: 24, rbi: 77, hits: 144, sb: 20, jersey: 7, age: 31, league: "NL", div: "NL Central", team: "Chicago Cubs" },

  // --- Cincinnati Reds ---
  { name: "Elly De La Cruz", position: "SS", ba: 0.264, hr: 22, rbi: 86, hits: 166, sb: 37, jersey: 44, age: 23, league: "NL", div: "NL Central", team: "Cincinnati Reds" },
  { name: "TJ Friedl", position: "CF", ba: 0.261, hr: 14, rbi: 53, hits: 151, sb: 12, jersey: 29, age: 29, league: "NL", div: "NL Central", team: "Cincinnati Reds" },
  { name: "Noelvi Marté", position: "3B", ba: 0.263, hr: 14, rbi: 51, hits: 89, sb: 10, jersey: 16, age: 23, league: "NL", div: "NL Central", team: "Cincinnati Reds" },
  { name: "Spencer Steer", position: "1B", ba: 0.238, hr: 21, rbi: 75, hits: 121, sb: 7, jersey: 7, age: 27, league: "NL", div: "NL Central", team: "Cincinnati Reds" },
  { name: "Austin Hays", position: "RF", ba: 0.266, hr: 15, rbi: 64, hits: 101, sb: 7, jersey: 12, age: 29, league: "NL", div: "NL Central", team: "Cincinnati Reds" },
  { name: "Tyler Stephenson", position: "C", ba: 0.231, hr: 13, rbi: 50, hits: 69, sb: 0, jersey: 37, age: 28, league: "NL", div: "NL Central", team: "Cincinnati Reds" },
  { name: "Matt McLain", position: "2B", ba: 0.220, hr: 15, rbi: 50, hits: 112, sb: 18, jersey: 9, age: 25, league: "NL", div: "NL Central", team: "Cincinnati Reds" },

  // --- Milwaukee Brewers ---
  { name: "Brice Turang", position: "2B", ba: 0.288, hr: 18, rbi: 81, hits: 168, sb: 24, jersey: 2, age: 25, league: "NL", div: "NL Central", team: "Milwaukee Brewers" },
  { name: "Jackson Chourio", position: "LF", ba: 0.270, hr: 21, rbi: 78, hits: 148, sb: 21, jersey: 11, age: 21, league: "NL", div: "NL Central", team: "Milwaukee Brewers" },
  { name: "William Contreras", position: "C", ba: 0.260, hr: 17, rbi: 76, hits: 147, sb: 6, jersey: 24, age: 27, league: "NL", div: "NL Central", team: "Milwaukee Brewers" },
  { name: "Christian Yelich", position: "DH", ba: 0.264, hr: 29, rbi: 103, hits: 151, sb: 16, jersey: 22, age: 33, league: "NL", div: "NL Central", team: "Milwaukee Brewers" },
  { name: "Caleb Durbin", position: "3B", ba: 0.256, hr: 11, rbi: 53, hits: 114, sb: 18, jersey: 15, age: 25, league: "NL", div: "NL Central", team: "Milwaukee Brewers" },
  { name: "Isaac Collins", position: "OF", ba: 0.263, hr: 9, rbi: 54, hits: 98, sb: 16, jersey: 32, age: 27, league: "NL", div: "NL Central", team: "Milwaukee Brewers" },
  { name: "Sal Frelick", position: "RF", ba: 0.288, hr: 12, rbi: 63, hits: 152, sb: 19, jersey: 10, age: 25, league: "NL", div: "NL Central", team: "Milwaukee Brewers" },

  // --- Pittsburgh Pirates ---
  { name: "Bryan Reynolds", position: "CF", ba: 0.245, hr: 16, rbi: 73, hits: 144, sb: 3, jersey: 10, age: 30, league: "NL", div: "NL Central", team: "Pittsburgh Pirates" },
  { name: "Oneil Cruz", position: "SS", ba: 0.200, hr: 20, rbi: 61, hits: 94, sb: 38, jersey: 15, age: 26, league: "NL", div: "NL Central", team: "Pittsburgh Pirates" },
  { name: "Ke'Bryan Hayes", position: "3B", ba: 0.236, hr: 2, rbi: 36, hits: 87, sb: 10, jersey: 13, age: 28, league: "NL", div: "NL Central", team: "Pittsburgh Pirates" },
  { name: "Andrew McCutchen", position: "DH", ba: 0.239, hr: 13, rbi: 57, hits: 114, sb: 1, jersey: 22, age: 38, league: "NL", div: "NL Central", team: "Pittsburgh Pirates" },
  { name: "Spencer Horwitz", position: "1B", ba: 0.272, hr: 11, rbi: 51, hits: 99, sb: 0, jersey: 18, age: 27, league: "NL", div: "NL Central", team: "Pittsburgh Pirates" },
  { name: "Nick Gonzales", position: "2B", ba: 0.260, hr: 5, rbi: 30, hits: 99, sb: 0, jersey: 3, age: 26, league: "NL", div: "NL Central", team: "Pittsburgh Pirates" },

  // --- St. Louis Cardinals ---
  { name: "Nolan Arenado", position: "3B", ba: 0.237, hr: 12, rbi: 52, hits: 95, sb: 3, jersey: 28, age: 34, league: "NL", div: "NL Central", team: "St. Louis Cardinals" },
  { name: "Willson Contreras", position: "C", ba: 0.257, hr: 20, rbi: 80, hits: 126, sb: 5, jersey: 40, age: 33, league: "NL", div: "NL Central", team: "St. Louis Cardinals" },
  { name: "Brendan Donovan", position: "2B", ba: 0.287, hr: 10, rbi: 50, hits: 132, sb: 3, jersey: 33, age: 28, league: "NL", div: "NL Central", team: "St. Louis Cardinals" },
  { name: "Masyn Winn", position: "SS", ba: 0.253, hr: 9, rbi: 51, hits: 124, sb: 9, jersey: 0, age: 23, league: "NL", div: "NL Central", team: "St. Louis Cardinals" },
  { name: "Alec Burleson", position: "RF", ba: 0.290, hr: 18, rbi: 69, hits: 144, sb: 5, jersey: 41, age: 26, league: "NL", div: "NL Central", team: "St. Louis Cardinals" },
  { name: "Iván Herrera", position: "C", ba: 0.284, hr: 19, rbi: 66, hits: 110, sb: 8, jersey: 48, age: 25, league: "NL", div: "NL Central", team: "St. Louis Cardinals" },

  // ============================= NL WEST =============================
  // --- Arizona Diamondbacks ---
  { name: "Geraldo Perdomo", position: "SS", ba: 0.290, hr: 20, rbi: 100, hits: 173, sb: 27, jersey: 2, age: 25, league: "NL", div: "NL West", team: "Arizona Diamondbacks" },
  { name: "Ketel Marte", position: "2B", ba: 0.283, hr: 28, rbi: 72, hits: 136, sb: 4, jersey: 4, age: 31, league: "NL", div: "NL West", team: "Arizona Diamondbacks" },
  { name: "Corbin Carroll", position: "LF", ba: 0.259, hr: 31, rbi: 84, hits: 146, sb: 32, jersey: 7, age: 24, league: "NL", div: "NL West", team: "Arizona Diamondbacks" },
  { name: "Eugenio Suárez", position: "3B", ba: 0.248, hr: 36, rbi: 87, hits: 96, sb: 1, jersey: 28, age: 33, league: "NL", div: "NL West", team: "Arizona Diamondbacks" },
  { name: "Gabriel Moreno", position: "C", ba: 0.285, hr: 9, rbi: 40, hits: 79, sb: 2, jersey: 14, age: 25, league: "NL", div: "NL West", team: "Arizona Diamondbacks" },
  { name: "Josh Naylor", position: "1B", ba: 0.292, hr: 11, rbi: 59, hits: 102, sb: 11, jersey: 22, age: 28, league: "NL", div: "NL West", team: "Arizona Diamondbacks" },

  // --- Colorado Rockies ---
  { name: "Hunter Goodman", position: "C", ba: 0.278, hr: 31, rbi: 91, hits: 150, sb: 1, jersey: 15, age: 25, league: "NL", div: "NL West", team: "Colorado Rockies" },
  { name: "Ezequiel Tovar", position: "SS", ba: 0.253, hr: 9, rbi: 33, hits: 91, sb: 5, jersey: 14, age: 23, league: "NL", div: "NL West", team: "Colorado Rockies" },
  { name: "Michael Toglia", position: "1B", ba: 0.190, hr: 11, rbi: 32, hits: 58, sb: 3, jersey: 4, age: 26, league: "NL", div: "NL West", team: "Colorado Rockies" },
  { name: "Mickey Moniak", position: "LF", ba: 0.270, hr: 24, rbi: 68, hits: 117, sb: 9, jersey: 16, age: 27, league: "NL", div: "NL West", team: "Colorado Rockies" },
  { name: "Jordan Beck", position: "RF", ba: 0.258, hr: 16, rbi: 53, hits: 139, sb: 19, jersey: 27, age: 24, league: "NL", div: "NL West", team: "Colorado Rockies" },
  { name: "Kyle Farmer", position: "3B", ba: 0.227, hr: 8, rbi: 31, hits: 63, sb: 0, jersey: 12, age: 34, league: "NL", div: "NL West", team: "Colorado Rockies" },
// --- Los Angeles Dodgers --- (World Series Champions)
  { name: "Shohei Ohtani", position: "DH", ba: 0.282, hr: 55, rbi: 102, hits: 172, sb: 20, jersey: 17, age: 30, league: "NL", div: "NL West", team: "Los Angeles Dodgers" },
  { name: "Freddie Freeman", position: "1B", ba: 0.295, hr: 24, rbi: 90, hits: 164, sb: 6, jersey: 5, age: 35, league: "NL", div: "NL West", team: "Los Angeles Dodgers" },
  { name: "Will Smith", position: "C", ba: 0.296, hr: 17, rbi: 61, hits: 107, sb: 2, jersey: 16, age: 30, league: "NL", div: "NL West", team: "Los Angeles Dodgers" },
  { name: "Mookie Betts", position: "SS", ba: 0.258, hr: 20, rbi: 82, hits: 152, sb: 8, jersey: 50, age: 32, league: "NL", div: "NL West", team: "Los Angeles Dodgers" },
  { name: "Teoscar Hernández", position: "RF", ba: 0.247, hr: 25, rbi: 89, hits: 126, sb: 5, jersey: 37, age: 32, league: "NL", div: "NL West", team: "Los Angeles Dodgers" },
  { name: "Andy Pages", position: "CF", ba: 0.272, hr: 27, rbi: 86, hits: 158, sb: 14, jersey: 84, age: 24, league: "NL", div: "NL West", team: "Los Angeles Dodgers" }, // bench
  { name: "Max Muncy", position: "3B", ba: 0.243, hr: 19, rbi: 67, hits: 76, sb: 4, jersey: 13, age: 34, league: "NL", div: "NL West", team: "Los Angeles Dodgers" }, // bench

  // --- San Diego Padres ---
  { name: "Fernando Tatis Jr.", position: "RF", ba: 0.268, hr: 25, rbi: 71, hits: 159, sb: 32, jersey: 23, age: 26, league: "NL", div: "NL West", team: "San Diego Padres" },
  { name: "Manny Machado", position: "3B", ba: 0.275, hr: 27, rbi: 95, hits: 169, sb: 14, jersey: 13, age: 32, league: "NL", div: "NL West", team: "San Diego Padres" },
  { name: "Luis Arraez", position: "1B", ba: 0.292, hr: 8, rbi: 61, hits: 181, sb: 11, jersey: 4, age: 28, league: "NL", div: "NL West", team: "San Diego Padres" },
  { name: "Xander Bogaerts", position: "SS", ba: 0.263, hr: 11, rbi: 53, hits: 129, sb: 20, jersey: 2, age: 32, league: "NL", div: "NL West", team: "San Diego Padres" },
  { name: "Gavin Sheets", position: "DH", ba: 0.252, hr: 19, rbi: 71, hits: 124, sb: 2, jersey: 32, age: 29, league: "NL", div: "NL West", team: "San Diego Padres" },
  { name: "Jake Cronenworth", position: "2B", ba: 0.246, hr: 11, rbi: 59, hits: 103, sb: 3, jersey: 9, age: 31, league: "NL", div: "NL West", team: "San Diego Padres" }, // bench

  // --- San Francisco Giants ---
  { name: "Willy Adames", position: "SS", ba: 0.225, hr: 30, rbi: 87, hits: 133, sb: 12, jersey: 27, age: 29, league: "NL", div: "NL West", team: "San Francisco Giants" },
  { name: "Heliot Ramos", position: "LF", ba: 0.256, hr: 21, rbi: 69, hits: 159, sb: 6, jersey: 17, age: 25, league: "NL", div: "NL West", team: "San Francisco Giants" },
  { name: "Matt Chapman", position: "3B", ba: 0.231, hr: 21, rbi: 61, hits: 105, sb: 9, jersey: 26, age: 32, league: "NL", div: "NL West", team: "San Francisco Giants" },
  { name: "Rafael Devers", position: "DH", ba: 0.236, hr: 20, rbi: 51, hits: 79, sb: 0, jersey: 11, age: 28, league: "NL", div: "NL West", team: "San Francisco Giants" }, // traded mid-season from BOS
  { name: "Jung Hoo Lee", position: "CF", ba: 0.266, hr: 8, rbi: 55, hits: 149, sb: 10, jersey: 51, age: 26, league: "NL", div: "NL West", team: "San Francisco Giants" },
  { name: "Wilmer Flores", position: "1B", ba: 0.241, hr: 16, rbi: 71, hits: 101, sb: 1, jersey: 41, age: 33, league: "NL", div: "NL West", team: "San Francisco Giants" }, // bench
],

    hockey: [],
    soccer: []
};
