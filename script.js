// Game State Parameters
let currentSport = "football";
let secretPlayer = null;
let currentGuesses = 0;
const maxGuesses = 5;

// DOM Target Elements
const searchInput = document.getElementById("player-search");
const autocompleteList = document.getElementById("autocomplete-list");
const submitBtn = document.getElementById("submit-guess");
const guessesRows = document.getElementById("guesses-rows");

// 1. SELECT DAILY SECRET PLAYER (Predictable daily selection matching date)
function setDailyPlayer() {
    const today = new Date();
    // Unique signature integer for each unique calendar day
    const dayIdentifier = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const sportPool = playersDatabase[currentSport];
    
    if (!sportPool || sportPool.length === 0) {
        secretPlayer = null;
        return;
    }

    const playerIndex = dayIdentifier % sportPool.length;
    secretPlayer = sportPool[playerIndex];
    
    // Clear screen UI boards for a fresh round
    guessesRows.innerHTML = "";
    currentGuesses = 0;
    searchInput.disabled = false;
    submitBtn.disabled = false;
}

// 2. AUTOCOMPLETE DROPDOWN FILTER LOGIC
searchInput.addEventListener("input", function() {
    const val = this.value.toUpperCase();
    autocompleteList.innerHTML = "";
    if (!val) return false;

    const sportPool = playersDatabase[currentSport];
    sportPool.forEach(player => {
        if (player.name.toUpperCase().includes(val)) {
            const item = document.createElement("div");
            item.innerHTML = `<strong>${player.name.substr(0, val.length)}</strong>${player.name.substr(val.length)} (${player.position} - ${player.team})`;
            
            item.addEventListener("click", function() {
                searchInput.value = player.name;
                autocompleteList.innerHTML = "";
            });
            autocompleteList.appendChild(item);
        }
    });
});

// Close search selection menu when clicking outside of it
document.addEventListener("click", function (e) {
    if (e.target !== searchInput) {
        autocompleteList.innerHTML = "";
    }
});

// 3. CORE STAT COMPARISON & DYNAMIC BLIND GENERATOR
function handleGuess(guessedPlayerName) {
    const sportPool = playersDatabase[currentSport];
    const guessedPlayer = sportPool.find(p => p.name.toUpperCase() === guessedPlayerName.toUpperCase());

    if (!guessedPlayer) {
        alert("Player not found! Please select an option from the dropdown menu.");
        return;
    }

    currentGuesses++;
    autocompleteList.innerHTML = "";
    searchInput.value = "";

    // Insert grid-styled container for new guess
    const row = document.createElement("div");
    row.className = "row";

    // Column structure breakdown matrix
    const categories = [
        { key: 'name', type: 'match' },
        { key: 'position', type: 'match' },
        { key: 'yards', type: 'number' },
        { key: 'tds', type: 'number' },
        { key: 'jersey', type: 'number' },
        { key: 'age', type: 'number' }
    ];

    categories.forEach(category => {
        const cell = document.createElement("div");
        cell.className = "cell";
        
        let guessVal = guessedPlayer[category.key];
        let secretVal = secretPlayer[category.key];

        // Label Match handling logic (Green / Gray match states)
        if (category.type === 'match') {
            cell.textContent = guessVal;
            if (guessVal === secretVal) {
                cell.classList.add("correct");
            } else {
                cell.classList.add("wrong");
            }
        } 
        // Numeric delta handling logic (Appends ↑/↓ indicators)
        else if (category.type === 'number') {
            if (guessVal === secretVal) {
                cell.textContent = guessVal;
                cell.classList.add("correct");
            } else {
                const directionalArrow = guessVal < secretVal ? " ↑" : " ↓";
                cell.textContent = guessVal + directionalArrow;
                cell.classList.add("wrong");
            }
        }
        row.appendChild(cell);
    });

    guessesRows.appendChild(row);

    // End state logic filters
    if (guessedPlayer.name === secretPlayer.name) {
        alert("🎉 Boom! You figured out today's secret athlete!");
        lockInputSystem();
    } else if (currentGuesses >= maxGuesses) {
        alert(`Out of guesses! Today's answer was: ${secretPlayer.name}`);
        lockInputSystem();
    }
}

function lockInputSystem() {
    searchInput.disabled = true;
    submitBtn.disabled = true;
}

// 4. ACTION INTERACTION LISTENERS
submitBtn.addEventListener("click", () => handleGuess(searchInput.value));
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleGuess(searchInput.value);
});

// Boot Sequence initialization 
setDailyPlayer();

// Multi-Tab switching engine handler
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentSport = e.target.getAttribute('data-sport');
        document.getElementById('player-search').placeholder = `Type a ${currentSport} player's name...`;
        setDailyPlayer(); // Reselects secret data parameter seamlessly 
    });
});
