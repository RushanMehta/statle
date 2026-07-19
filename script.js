let currentSport = "football";
let secretPlayer = null;
let currentGuesses = 0;
const maxGuesses = 8; // Max limit fixed to 8

// Sport Specific Modal Text Configuration Objects
const sportInstructions = {
    football: "Welcome to Statle Football! Guess the mystery NFL skill position athlete (QB, RB, WR, TE) using regular season metrics. \n\n💡 YELLOW indicators pop up if your guess falls within 250 Yards or within 2 TDs of the target!",
    basketball: "Welcome to Statle Basketball! Find the hidden NBA star based on points, assists, and rebounds.",
    baseball: "Welcome to Statle Baseball! Track down the MLB player using home runs, batting average, and position clues.",
    hockey: "Welcome to Statle Hockey! Uncover the NHL star through goals, points, and team dynamics.",
    soccer: "Welcome to Statle Soccer! Pinpoint the global football athlete using metrics across leagues."
};

// UI DOM Targets
const searchInput = document.getElementById("player-search");
const autocompleteList = document.getElementById("autocomplete-list");
const submitBtn = document.getElementById("submit-guess");
const guessesRows = document.getElementById("guesses-rows");
const counterDisplay = document.getElementById("guess-counter");

const modal = document.getElementById("instructions-modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeModalBtn = document.getElementById("close-modal-btn");

// Handle Modals Trigger Alerts
function showInstructions() {
    modalTitle.textContent = currentSport.toUpperCase() + " RULES";
    modalText.innerText = sportInstructions[currentSport];
    modal.style.display = "flex";
}
closeModalBtn.onclick = () => modal.style.display = "none";

function updateThemeAndState() {
    // Re-skin system backgrounds dynamically
    document.body.className = `${currentSport}-theme`;
    counterDisplay.textContent = `Guesses: ${currentGuesses} / ${maxGuesses}`;
}

function setDailyPlayer() {
    const today = new Date();
    const dayIdentifier = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const sportPool = playersDatabase[currentSport];
    
    if (!sportPool || sportPool.length === 0) {
        secretPlayer = null;
        return;
    }

    const playerIndex = dayIdentifier % sportPool.length;
    secretPlayer = sportPool[playerIndex];
    
    guessesRows.innerHTML = "";
    currentGuesses = 0;
    searchInput.disabled = false;
    submitBtn.disabled = false;
    
    updateThemeAndState();
    showInstructions(); // Triggers the rule summary instantly on change
}

// AUTOCOMPLETE DROPDOWN FILTER
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

document.addEventListener("click", (e) => { if (e.target !== searchInput) autocompleteList.innerHTML = ""; });

// COMPARISON MATCH ENGINE
function handleGuess(guessedPlayerName) {
    const sportPool = playersDatabase[currentSport];
    const guessedPlayer = sportPool.find(p => p.name.toUpperCase() === guessedPlayerName.toUpperCase());

    if (!guessedPlayer) {
        alert("Player not found in database.");
        return;
    }

    currentGuesses++;
    counterDisplay.textContent = `Guesses: ${currentGuesses} / ${maxGuesses}`;
    autocompleteList.innerHTML = "";
    searchInput.value = "";

    const row = document.createElement("div");
    row.className = "row";

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

        if (category.type === 'match') {
            cell.textContent = guessVal;
            cell.classList.add(guessVal === secretVal ? "correct" : "wrong");
        } 
        else if (category.type === 'number') {
            if (guessVal === secretVal) {
                cell.textContent = guessVal;
                cell.classList.add("correct");
            } else {
                const arrow = guessVal < secretVal ? " ↑" : " ↓";
                cell.textContent = guessVal + arrow;

                // Yellow Condition Check Logic Evaluation Blocks
                if (currentSport === "football" && category.key === "yards" && Math.abs(guessVal - secretVal) <= 250) {
                    cell.classList.add("partial");
                } else if (currentSport === "football" && category.key === "tds" && Math.abs(guessVal - secretVal) <= 2) {
                    cell.classList.add("partial");
                } else {
                    cell.classList.add("wrong");
                }
            }
        }
        row.appendChild(cell);
    });

    guessesRows.appendChild(row);

    if (guessedPlayer.name === secretPlayer.name) {
        alert("🎉 Spectacular! You matched the target player!");
        searchInput.disabled = true; submitBtn.disabled = true;
    } else if (currentGuesses >= maxGuesses) {
        alert(`Out of options! The secret target was: ${secretPlayer.name}`);
        searchInput.disabled = true; submitBtn.disabled = true;
    }
}

submitBtn.addEventListener("click", () => handleGuess(searchInput.value));
searchInput.addEventListener("keypress", (e) => { if (e.key === "Enter") handleGuess(searchInput.value); });

// Initialize System Board
setDailyPlayer();

// Navigation Tabs Triggers
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentSport = e.target.getAttribute('data-sport');
        document.getElementById('player-search').placeholder = `Type a ${currentSport} player's name...`;
        setDailyPlayer();
    });
});
