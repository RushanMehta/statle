let currentSport = "football";
let secretPlayer = null;
let currentGuesses = 0;
const maxGuesses = 8;

const sportInstructions = {
    football: "Welcome to Statle Football! Guess the mystery NFL skill player (QB, RB, WR, TE) from the 2025-2026 season.\n\n💡 Yellow indicators mean:\nYards: Within 250\nTDs: Within 2\nJersey #: Within 2\nAge: Within 2",
    basketball: "Welcome to Statle Basketball!\n\n💡 Yellow indicators mean:\nJersey #: Within 2\nAge: Within 2",
    baseball: "Welcome to Statle Baseball!\n\n💡 Yellow indicators mean:\nJersey #: Within 2\nAge: Within 2",
    hockey: "Welcome to Statle Hockey!\n\n💡 Yellow indicators mean:\nJersey #: Within 2\nAge: Within 2",
    soccer: "Welcome to Statle Soccer!\n\n💡 Yellow indicators mean:\nJersey #: Within 2\nAge: Within 2"
};

const searchInput = document.getElementById("player-search");
const autocompleteList = document.getElementById("autocomplete-list");
const submitBtn = document.getElementById("submit-guess");
const guessesRows = document.getElementById("guesses-rows");
const counterDisplay = document.getElementById("guess-counter");
const helpBtn = document.getElementById("rules-toggle-btn");

const modal = document.getElementById("instructions-modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeModalBtn = document.getElementById("close-modal-btn");

function showInstructions() {
    modalTitle.textContent = currentSport.toUpperCase() + " RULES";
    modalText.innerText = sportInstructions[currentSport];
    modal.style.display = "flex";
}
closeModalBtn.onclick = () => modal.style.display = "none";
helpBtn.onclick = () => showInstructions();

function updateThemeAndState() {
    document.body.className = `${currentSport}-theme`;
    counterDisplay.textContent = `Guesses: ${currentGuesses} / ${maxGuesses}`;
}

function setDailyPlayer() {
    const today = new Date();
    const dayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const dayIdentifier = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    
    guessesRows.innerHTML = "";
    currentGuesses = 0;
    searchInput.disabled = false;
    submitBtn.disabled = false;

    const sportPool = playersDatabase[currentSport];
    if (!sportPool || sportPool.length === 0) {
        secretPlayer = null;
        updateThemeAndState();
        return;
    }

    const playerIndex = dayIdentifier % sportPool.length;
    secretPlayer = sportPool[playerIndex];
    
    updateThemeAndState();

    const savedState = localStorage.getItem(`statle_${currentSport}_${dayKey}`);
    if (savedState) {
        const gameHistory = JSON.parse(savedState);
        gameHistory.guesses.forEach(guessName => {
            renderGuessRow(guessName, false); 
        });
        if (gameHistory.gameOver) {
            lockInputSystem();
            // If they lost previously, make sure the red reveal stays on reload
            if (currentGuesses >= maxGuesses && !gameHistory.won) {
                revealCorrectPlayerRow();
            }
        }
    } else {
        showInstructions();
    }
}

function saveGameStateToStorage(wonGame = false) {
    const today = new Date();
    const dayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const currentRows = Array.from(guessesRows.children)
        .filter(row => !row.classList.contains('reveal-fail-row')) // don't save the red row itself
        .map(row => row.children[0].textContent.replace(/[↑↓]/g, '').trim());
    
    const isLoss = currentGuesses >= maxGuesses && !wonGame;

    const stateToSave = {
        guesses: currentRows,
        gameOver: wonGame || isLoss,
        won: wonGame
    };
    localStorage.setItem(`statle_${currentSport}_${dayKey}`, JSON.stringify(stateToSave));
}

searchInput.addEventListener("input", function() {
    const val = this.value.trim().toUpperCase();
    autocompleteList.innerHTML = "";
    if (!val) return false;

    const sportPool = playersDatabase[currentSport];
    if (!sportPool) return;

    sportPool.forEach(player => {
        const names = player.name.toUpperCase().split(" ");
        const matchFound = names.some(part => part.startsWith(val));

        if (matchFound) {
            const item = document.createElement("div");
            item.innerHTML = `<strong>${player.name}</strong> (${player.position})`;
            item.addEventListener("click", function() {
                searchInput.value = player.name;
                autocompleteList.innerHTML = "";
            });
            autocompleteList.appendChild(item);
        }
    });
});

document.addEventListener("click", (e) => { if (e.target !== searchInput) autocompleteList.innerHTML = ""; });

function handleGuessSubmit() {
    renderGuessRow(searchInput.value, true);
}

function renderGuessRow(guessedPlayerName, triggerAlerts) {
    const sportPool = playersDatabase[currentSport];
    const guessedPlayer = sportPool.find(p => p.name.toUpperCase() === guessedPlayerName.toUpperCase());

    if (!guessedPlayer) {
        if (triggerAlerts) alert("Player not found in database.");
        return;
    }

    currentGuesses++;
    counterDisplay.textContent = `Guesses: ${currentGuesses} / ${maxGuesses}`;
    if (triggerAlerts) {
        autocompleteList.innerHTML = "";
        searchInput.value = "";
    }

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

                // Dynamic Proximity Checking Matrix
                if (currentSport === "football" && category.key === "yards" && Math.abs(guessVal - secretVal) <= 250) {
                    cell.classList.add("partial");
                } else if (currentSport === "football" && category.key === "tds" && Math.abs(guessVal - secretVal) <= 2) {
                    cell.classList.add("partial");
                } else if (category.key === "jersey" && Math.abs(guessVal - secretVal) <= 2) {
                    cell.classList.add("partial");
                } else if (category.key === "age" && Math.abs(guessVal - secretVal) <= 2) {
                    cell.classList.add("partial");
                } else {
                    cell.classList.add("wrong");
                }
            }
        }
        row.appendChild(cell);
    });

    guessesRows.appendChild(row);

    const won = guessedPlayer.name === secretPlayer.name;
    if (triggerAlerts) saveGameStateToStorage(won);

    if (triggerAlerts) {
        setTimeout(() => {
            if (won) {
                alert("🎉 Spectacular! You matched the target player!");
                lockInputSystem();
            } else if (currentGuesses >= maxGuesses) {
                revealCorrectPlayerRow();
                alert(`Out of options! The secret target was: ${secretPlayer.name}`);
                lockInputSystem();
            }
        }, 150);
    }
}

// Generates the Red Final Reveal row on game losses
function revealCorrectPlayerRow() {
    const row = document.createElement("div");
    row.className = "row reveal-fail-row";

    const categories = ['name', 'position', 'yards', 'tds', 'jersey', 'age'];
    categories.forEach(key => {
        const cell = document.createElement("div");
        cell.className = "cell revealed-fail";
        cell.textContent = secretPlayer[key] !== undefined ? secretPlayer[key] : "N/A";
        row.appendChild(cell);
    });
    guessesRows.appendChild(row);
}

function lockInputSystem() {
    searchInput.disabled = true;
    submitBtn.disabled = true;
}

submitBtn.addEventListener("click", handleGuessSubmit);
searchInput.addEventListener("keypress", (e) => { if (e.key === "Enter") handleGuessSubmit(); });

setDailyPlayer();

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
