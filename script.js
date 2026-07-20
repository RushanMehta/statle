let currentSport = "football";
let secretPlayer = null;
let currentGuesses = 0;
const maxGuesses = 8;

// Define sport configurations dynamically
const sportConfigs = {
    football: {
        instructions: "Welcome to Statle Football! Guess the mystery NFL skill player from the 2025-2026 season.\n\n💡 Yellow means:\nYards: Within 250 | TDs, Jersey, Age: Within 2",
        headers: ["Player", "Pos", "Yds", "TDs", "#", "Age"],
        categories: [
            { key: 'name', type: 'match' },
            { key: 'position', type: 'match' },
            { key: 'yards', type: 'number', thresh: 250 },
            { key: 'tds', type: 'number', thresh: 2 },
            { key: 'jersey', type: 'number', thresh: 2 },
            { key: 'age', type: 'number', thresh: 2 }
        ]
    },
    basketball: {
        instructions: "Welcome to Statle Basketball! Guess the mystery NBA player from the 2025-2026 season.\n\n💡 Yellow means:\nPPG, APG, RPG, Stocks: Within 2.0 | FG%: Within 5% | Jersey, Age: Within 2",
        headers: ["Player", "Pos", "PPG", "APG", "RPG", "FG%", "Stx", "#", "Age"],
        categories: [
            { key: 'name', type: 'match' },
            { key: 'position', type: 'match' },
            { key: 'ppg', type: 'number', thresh: 2 },
            { key: 'apg', type: 'number', thresh: 2 },
            { key: 'rpg', type: 'number', thresh: 2 },
            { key: 'fg', type: 'number', thresh: 5 }, // Thresh set to 5%
            { key: 'stocks', type: 'number', thresh: 2 },
            { key: 'jersey', type: 'number', thresh: 2 },
            { key: 'age', type: 'number', thresh: 2 }
        ]
    }
};

const searchInput = document.getElementById("player-search");
const autocompleteList = document.getElementById("autocomplete-list");
const submitBtn = document.getElementById("submit-guess");
const guessesRows = document.getElementById("guesses-rows");
const counterDisplay = document.getElementById("guess-counter");
const helpBtn = document.getElementById("rules-toggle-btn");
const dynamicHeader = document.getElementById("dynamic-header");

const modal = document.getElementById("instructions-modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeModalBtn = document.getElementById("close-modal-btn");

function showInstructions() {
    modalTitle.textContent = currentSport.toUpperCase() + " RULES";
    modalText.innerText = sportConfigs[currentSport].instructions;
    modal.style.display = "flex";
}
closeModalBtn.onclick = () => modal.style.display = "none";
helpBtn.onclick = () => showInstructions();

function updateThemeAndState() {
    document.body.className = `${currentSport}-theme`;
    counterDisplay.textContent = `Guesses: ${currentGuesses} / ${maxGuesses}`;
    
    // Generate dynamic grid columns based on the selected sport config
    dynamicHeader.innerHTML = "";
    const config = sportConfigs[currentSport];
    
    // Adjust grid CSS automatically for Basketball's 7 columns vs Football's 6 columns
    const columnsCss = config.categories.length === 7 ? "1.8fr 0.8fr 0.9fr 0.9fr 0.9fr 0.8fr 0.9fr" : "1.8fr 0.9fr 1.1fr 1.1fr 0.9fr 1fr";
    dynamicHeader.style.gridTemplateColumns = columnsCss;
    guessesRows.style.setProperty('--grid-cols', columnsCss);

    config.headers.forEach(headerText => {
        const span = document.createElement("span");
        span.textContent = headerText;
        dynamicHeader.appendChild(span);
    });
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
        .filter(row => !row.classList.contains('reveal-fail-row'))
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
    row.style.gridTemplateColumns = sportConfigs[currentSport].categories.length === 7 ? "1.8fr 0.8fr 0.9fr 0.9fr 0.9fr 0.8fr 0.9fr" : "1.8fr 0.9fr 1.1fr 1.1fr 0.9fr 1fr";

    const config = sportConfigs[currentSport];

    config.categories.forEach(category => {
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

                // Generalized Proximity Check using Thresh config values
                if (Math.abs(guessVal - secretVal) <= category.thresh) {
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

function revealCorrectPlayerRow() {
    const row = document.createElement("div");
    row.className = "row reveal-fail-row";
    row.style.gridTemplateColumns = sportConfigs[currentSport].categories.length === 7 ? "1.8fr 0.8fr 0.9fr 0.9fr 0.9fr 0.8fr 0.9fr" : "1.8fr 0.9fr 1.1fr 1.1fr 0.9fr 1fr";

    const config = sportConfigs[currentSport];
    config.categories.forEach(category => {
        const cell = document.createElement("div");
        cell.className = "cell revealed-fail";
        cell.textContent = secretPlayer[category.key] !== undefined ? secretPlayer[category.key] : "N/A";
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
