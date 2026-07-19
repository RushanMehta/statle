// Master Player Database (2025-2026 Season Stats)
const playersDatabase = {
    football: [
        {
            name: "Patrick Mahomes",
            position: "QB",
            team: "KC",
            yards: 3735, // 3587 passing + 148 rushing
            tds: 22,
            jersey: 15,
            age: 30
        },
        {
            name: "Lamar Jackson",
            position: "QB",
            team: "BAL",
            yards: 2898, // 2549 passing + 349 rushing
            tds: 23, // 21 passing + 2 rushing
            jersey: 8,
            age: 29
        },
        {
            name: "Christian McCaffrey",
            position: "RB",
            team: "SF",
            yards: 2126, // 1202 rushing + 924 receiving
            tds: 17, // 10 rushing + 7 receiving
            jersey: 23,
            age: 30
        }
    ],
    basketball: [],
    baseball: [],
    hockey: [],
    soccer: []
};

let currentSport = "football";
let secretPlayer = null;
let currentGuesses = 0;
const maxGuesses = 5;

// Elements
const searchInput = document.getElementById("player-search");
const autocompleteList = document.getElementById("autocomplete-list");
const submitBtn = document.getElementById("submit-guess");
const guessesRows = document.getElementById("guesses-rows");

// 1. SELECT DAILY SECRET PLAYER (Changes every calendar day)
function setDailyPlayer() {
    const today = new Date();
    // Creates a unique number sequence based on Year, Month, and Day
    const dayIdentifier = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const sportPool = playersDatabase[currentSport];
    
    // Selects a player predictably based on the day sequence
    const playerIndex = dayIdentifier % sportPool.length;
    secretPlayer = sportPool[playerIndex];
    
    // Reset game state for new tab
    guessesRows.innerHTML = "";
    currentGuesses = 0;
    searchInput.disabled = false;
    submitBtn.disabled = false;
}

// 2. AUTOCOMPLETE SEARCH LOGIC
searchInput.addEventListener("input", function() {
    const val = this.value.toUpperCase();
    autocompleteList.innerHTML = "";
    if (!val) return false;

    const sportPool = playersDatabase[currentSport];
    sportPool.forEach(player => {
        if (player.name.toUpperCase().includes(val)) {
            const item = document.createElement("div");
            item.innerHTML = `<strong>${player.name.substr(0, val.length)}</strong>${player.name.substr(val.length)} (${player.position})`;
            item.addEventListener("click", function() {
                searchInput.value = player.name;
                autocompleteList.innerHTML = "";
            });
            autocompleteList.appendChild(item);
        }
    });
});

// Close dropdown if user clicks away
document.addEventListener("click", function (e) {
    if (e.target !== searchInput) {
        autocompleteList.innerHTML = "";
    }
});

// 3. COMPARE GUESS AND GENERATE FEEDBACK ROW
function handleGuess(guessedPlayerName) {
    const sportPool = playersDatabase[currentSport];
    const guessedPlayer = sportPool.find(p => p.name.toUpperCase() === guessedPlayerName.toUpperCase());

    if (!guessedPlayer) {
        alert("Player not found in database. Please choose from the dropdown list!");
        return;
    }

    currentGuesses++;
    autocompleteList.innerHTML = "";
    searchInput.value = "";

    // Create Row Element
    const row = document.createElement("div");
    row.className = "row";

    // Column Config Setup
    const statsToCompare = [
        { key: 'name', type: 'match' },
        { key: 'position', type: 'match' },
        { key: 'yards', type: 'number' },
        { key: 'tds', type: 'number' },
        { key: 'jersey', type: 'number' },
        { key: 'age', type: 'number' }
    ];

    statsToCompare.forEach(stat => {
        const cell = document.createElement("div");
        cell.className = "cell";
        
        let guessVal = guessedPlayer[stat.key];
        let secretVal = secretPlayer[stat.key];

        // Label Match Conditions (Green/Gray)
        if (stat.type === 'match') {
            cell.textContent = guessVal;
            if (guessVal === secretVal) {
                cell.classList.add("correct");
            } else {
                cell.classList.add("wrong");
            }
        } 
        // Numeric Conditions with Arrow Tracking (Green/Gray + Higher/Lower Arrow)
        else if (stat.type === 'number') {
            if (guessVal === secretVal) {
                cell.textContent = guessVal;
                cell.classList.add("correct");
            } else {
                const arrow = guessVal < secretVal ? " ↑" : " ↓";
                cell.textContent = guessVal + arrow;
                cell.classList.add("wrong");
            }
        }
        row.appendChild(cell);
    });

    guessesRows.appendChild(row);

    // Win/Loss Checks
    if (guessedPlayer.name === secretPlayer.name) {
        alert("🎉 Incredible! You guessed the player of the day!");
        endGame();
    } else if (currentGuesses >= maxGuesses) {
        alert(`Game Over! Today's player was: ${secretPlayer.name}`);
        endGame();
    }
}

function endGame() {
    searchInput.disabled = true;
    submitBtn.disabled = true;
}

// Action Button triggers
submitBtn.addEventListener("click", () => handleGuess(searchInput.value));
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleGuess(searchInput.value);
});

// Initialize on Load
setDailyPlayer();

// Tab switching integration
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentSport = e.target.getAttribute('data-sport');
        document.getElementById('player-search').placeholder = `Type a ${currentSport} player's name...`;
        setDailyPlayer(); // Re-selects target based on new sport criteria
    });
});
