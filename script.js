// Master Player Database
const playersDatabase = {
    football: [
        {
            name: "Patrick Mahomes",
            position: "QB",
            team: "KC",
            conference: "AFC",
            division: "West",
            stat1: 3587, // 2025 Regular Season Passing Yards
            stat2: 22,   // 2025 Regular Season Passing TDs
            age: 30
        },
        {
            name: "Lamar Jackson",
            position: "QB",
            team: "BAL",
            conference: "AFC",
            division: "North",
            stat1: 2549, // 2025 Regular Season Passing Yards
            stat2: 21,   // 2025 Regular Season Passing TDs
            age: 29
        },
        {
            name: "Christian McCaffrey",
            position: "RB",
            team: "SF",
            conference: "NFC",
            division: "West",
            stat1: 1202, // 2025 Regular Season Rushing Yards
            stat2: 10,   // 2025 Regular Season Rushing TDs
            age: 30
        }
    ],
    basketball: [],
    baseball: [],
    hockey: [],
    soccer: []
};

let currentSport = "football";
let secretPlayer = playersDatabase.football[0]; // Temporary hardcode for testing

// Handle switching sports tabs
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentSport = e.target.getAttribute('data-sport');
        
        // Update input placeholder based on sport
        document.getElementById('player-search').placeholder = `Type a ${currentSport} player's name...`;
    });
});
