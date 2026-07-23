let currentSport = "home";
let secretPlayer = null;
let currentGuesses = 0;
const maxGuesses = 8;
let hintsUsedCount = 0;
let unlockedHintTier = 0;

const sportConfigs = {
    football: {
        instructions: "Welcome to Statle Football!\n\n📅 STAT NOTE:\nAll stats are from the 2025-2026 NFL season.\n\n💡 Yellow indicators mean:\nYards: Within 250 | TDs, Jersey, Age: Within 2\n\n🔑 HINT SYSTEM:\n• Conference: Unlocks at Guess 2\n• Division: Unlocks at Guess 4\n• Team: Unlocks at Guess 6",
        headers: ["Player", "Pos", "Yds", "TDs", "#", "Age"],
        categories: [
            { key: 'name', type: 'match' },
            { key: 'position', type: 'position' },
            { key: 'yards', type: 'number', thresh: 250 },
            { key: 'tds', type: 'number', thresh: 2 },
            { key: 'jersey', type: 'number', thresh: 2 },
            { key: 'age', type: 'number', thresh: 2 }
        ],
        gridCss: "130px 52px 65px 60px 52px 52px"
    },
    basketball: {
        instructions: "Welcome to Statle Basketball!\n\n📅 STAT NOTE:\nAll stats are from the 2025-2026 NBA season.\n\n📌 Stat Abbreviation:\n'Stx' = Stocks (Steals + Blocks)\n\n🏀 POSITION RULE:\nYellow position means the guessed position is adjacent to the target player's position:\n• PG ↔ SG ↔ SF ↔ PF ↔ C\n\n💡 Yellow indicators mean:\nPPG, APG, RPG, Stx: Within 2.0 | FG%: Within 5% | Jersey, Age: Within 2\n\n🔑 HINT SYSTEM:\n• Conference: Unlocks at Guess 2\n• Division: Unlocks at Guess 4\n• Team: Unlocks at Guess 6",
        headers: ["Player", "Pos", "PPG", "APG", "RPG", "FG%", "Stx", "#", "Age"],
        categories: [
            { key: 'name', type: 'match' },
            { key: 'position', type: 'position' },
            { key: 'ppg', type: 'number', thresh: 2 },
            { key: 'apg', type: 'number', thresh: 2 },
            { key: 'rpg', type: 'number', thresh: 2 },
            { key: 'fg', type: 'number', thresh: 5 },
            { key: 'stocks', type: 'number', thresh: 2 },
            { key: 'jersey', type: 'number', thresh: 2 },
            { key: 'age', type: 'number', thresh: 2 }
        ],
        gridCss: "130px 48px 52px 52px 52px 52px 52px 48px 48px"
    },
    baseball: {
        instructions: "Welcome to Statle Baseball!\n\n📅 STAT NOTE:\nAll stats are from the 2025 MLB season.\n\n⚾ POSITION RULE:\nYellow position means you guessed an Infield position when the secret player is Infield (or Outfield for Outfield).\n• Infield: C, 1B, 2B, 3B, SS, DH\n• Outfield: LF, CF, RF, OF\n*(Pitchers are excluded)\n\n💡 Yellow indicators mean:\n• BA: Within .015 | HR, RBI, SB: Within 5\n• Hits: Within 15 | Jersey, Age: Within 2\n\n🔑 HINT SYSTEM:\n• League (AL/NL): Unlocks at Guess 2\n• Division: Unlocks at Guess 4\n• Team: Unlocks at Guess 6",
        headers: ["Player", "Pos", "BA", "HR", "RBI", "Hits", "SB", "#", "Age"],
        categories: [
            { key: 'name', type: 'match' },
            { key: 'position', type: 'position' },
            { key: 'ba', type: 'number', thresh: 0.015 },
            { key: 'hr', type: 'number', thresh: 5 },
            { key: 'rbi', type: 'number', thresh: 5 },
            { key: 'hits', type: 'number', thresh: 15 },
            { key: 'sb', type: 'number', thresh: 5 },
            { key: 'jersey', type: 'number', thresh: 2 },
            { key: 'age', type: 'number', thresh: 2 }
        ],
        gridCss: "130px 48px 52px 48px 48px 52px 48px 48px 48px"
    }
};

const searchInput = document.getElementById("player-search");
const autocompleteList = document.getElementById("autocomplete-list");
const submitBtn = document.getElementById("submit-guess");
const guessesRows = document.getElementById("guesses-rows");
const counterDisplay = document.getElementById("guess-counter");
const helpBtn = document.getElementById("rules-toggle-btn");
const dynamicHeader = document.getElementById("dynamic-header");

const homeView = document.getElementById("home-view");
const gameplayArea = document.getElementById("game-play-area");
const gameActionBar = document.getElementById("game-action-bar");
const shareBottomContainer = document.getElementById("share-bottom-container");
const bottomShareBtn = document.getElementById("bottom-share-btn");

const modal = document.getElementById("instructions-modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalExtra = document.getElementById("modal-extra-content");
const closeModalBtn = document.getElementById("close-modal-btn");

const hintConfBtn = document.getElementById("hint-conf-btn");
const hintDivBtn = document.getElementById("hint-div-btn");
const hintTeamBtn = document.getElementById("hint-team-btn");
const activeHintDisplay = document.getElementById("active-hint-display");

function showInstructions() {
    if (currentSport === "home" || !sportConfigs[currentSport]) return;

    modalTitle.textContent = currentSport.toUpperCase() + " RULES & HINTS";
    modalText.innerText = sportConfigs[currentSport].instructions;

    let hintsHtml = `<div style="margin-top:15px; padding:10px; background:#272729; border-radius:6px; text-align:left;">`;
    hintsHtml += `<strong style="color:#ffd700;">Unlocked Hints:</strong><br>`;
    
    const leagueOrConfLabel = currentSport === "baseball" ? "League" : "Conference";
    const leagueOrConfVal = secretPlayer.league || secretPlayer.conf || secretPlayer.conference || "N/A";

    if (unlockedHintTier >= 1) hintsHtml += `• ${leagueOrConfLabel}: <strong>${leagueOrConfVal}</strong><br>`;
    else hintsHtml += `• ${leagueOrConfLabel}: <em style="color:#777;">(Unlocks after 2 guesses)</em><br>`;

    if (unlockedHintTier >= 2) hintsHtml += `• Division: <strong>${secretPlayer.div || secretPlayer.division || "N/A"}</strong><br>`;
    else hintsHtml += `• Division: <em style="color:#777;">(Unlocks after 4 guesses)</em><br>`;

    if (unlockedHintTier >= 3) hintsHtml += `• Team: <strong>${secretPlayer.team || "N/A"}</strong><br>`;
    else hintsHtml += `• Team: <em style="color:#777;">(Unlocks after 6 guesses)</em><br>`;

    hintsHtml += `</div>`;
    
    modalExtra.innerHTML = hintsHtml;
    modal.style.display = "flex";
}

closeModalBtn.onclick = () => modal.style.display = "none";
helpBtn.onclick = () => showInstructions();

function switchTab(sportKey) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => {
        if (t.getAttribute('data-sport') === sportKey) t.classList.add('active');
        else t.classList.remove('active');
    });

    currentSport = sportKey;
// Hash function to turn the date string into a scrambled index
function getDailyRandomIndex(dateStr, poolLength) {
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        // Simple polynomial hash to scatter adjacent dates randomly across the array
        hash = (hash << 5) - hash + dateStr.charCodeAt(i);
        hash |= 0; 
    }
    return Math.abs(hash) % poolLength;
}

function setDailyPlayer() {
    const today = new Date();
    const dayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    
    guessesRows.innerHTML = "";
    currentGuesses = 0;
    hintsUsedCount = 0;
    unlockedHintTier = 0;
    activeHintDisplay.style.display = "none";
    shareBottomContainer.style.display = "none";
    searchInput.disabled = false;
    submitBtn.disabled = false;

    const sportPool = playersDatabase[currentSport];
    if (!sportPool || sportPool.length === 0) {
        secretPlayer = null;
        updateThemeAndState();
        return;
    }

    // Pick a pseudo-random index based on the date string
    const playerIndex = getDailyRandomIndex(dayKey, sportPool.length);
    secretPlayer = sportPool[playerIndex];
    
    updateThemeAndState();

    const savedState = localStorage.getItem(`statle_${currentSport}_${dayKey}`);
    if (savedState) {
        const gameHistory = JSON.parse(savedState);
        hintsUsedCount = gameHistory.hintsUsed || 0;
        gameHistory.guesses.forEach(guessName => {
            renderGuessRow(guessName, false); 
        });
        if (gameHistory.gameOver) {
            lockInputSystem();
            if (currentGuesses >= maxGuesses && !gameHistory.won) {
                revealCorrectPlayerRow();
            }
            showBottomShareButton(gameHistory.won);
        }
    }
}
    if (currentSport === "home") {
        document.body.className = "home-theme";
        homeView.style.display = "flex";
        gameplayArea.style.display = "none";
        gameActionBar.style.display = "none";
    } else {
        homeView.style.display = "none";
        gameplayArea.style.display = "block";
        gameActionBar.style.display = "flex";
        searchInput.placeholder = `Type a ${currentSport} player's name...`;
        setDailyPlayer();
    }
}

function updateThemeAndState() {
    document.body.className = `${currentSport}-theme`;
    counterDisplay.textContent = `Guesses: ${currentGuesses} / ${maxGuesses}`;
    
    dynamicHeader.innerHTML = "";
    const config = sportConfigs[currentSport];
    if (!config) return;

    dynamicHeader.style.gridTemplateColumns = config.gridCss;

    config.headers.forEach(headerText => {
        const span = document.createElement("span");
        span.textContent = headerText;
        dynamicHeader.appendChild(span);
    });

    updateHintButtons();
}

function updateHintButtons() {
    if (currentGuesses >= 2) hintConfBtn.classList.add("unlocked");
    else hintConfBtn.classList.remove("unlocked");

    if (currentGuesses >= 4) hintDivBtn.classList.add("unlocked");
    else hintDivBtn.classList.remove("unlocked");

    if (currentGuesses >= 6) hintTeamBtn.classList.add("unlocked");
    else hintTeamBtn.classList.remove("unlocked");
}

function handleHintClick(requestedLevel) {
    let unlockThreshold = requestedLevel * 2;
    if (currentGuesses < unlockThreshold) return;

    let hintText = "";
    const leagueOrConfLabel = currentSport === "baseball" ? "League" : "Conference";
    const leagueOrConfVal = secretPlayer.league || secretPlayer.conf || secretPlayer.conference || "N/A";

    if (requestedLevel === 1) hintText = `${leagueOrConfLabel}: ${leagueOrConfVal}`;
    if (requestedLevel === 2) hintText = `Division: ${secretPlayer.div || secretPlayer.division || "N/A"}`;
    if (requestedLevel === 3) hintText = `Team: ${secretPlayer.team || "N/A"}`;

    activeHintDisplay.textContent = `💡 HINT #${requestedLevel}: ${hintText}`;
    activeHintDisplay.style.display = "block";

    // Set hints used to whichever is higher: current count or requested level
    hintsUsedCount = Math.max(hintsUsedCount, requestedLevel);

    if (requestedLevel > unlockedHintTier) {
        unlockedHintTier = requestedLevel;
    }
}

hintConfBtn.onclick = () => handleHintClick(1);
hintDivBtn.onclick = () => handleHintClick(2);
hintTeamBtn.onclick = () => handleHintClick(3);

function setDailyPlayer() {
    const today = new Date();
    const dayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const dayIdentifier = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    
    guessesRows.innerHTML = "";
    currentGuesses = 0;
    hintsUsedCount = 0;
    unlockedHintTier = 0;
    activeHintDisplay.style.display = "none";
    shareBottomContainer.style.display = "none";
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
        hintsUsedCount = gameHistory.hintsUsed || 0;
        gameHistory.guesses.forEach(guessName => {
            renderGuessRow(guessName, false); 
        });
        if (gameHistory.gameOver) {
            lockInputSystem();
            if (currentGuesses >= maxGuesses && !gameHistory.won) {
                revealCorrectPlayerRow();
            }
            showBottomShareButton(gameHistory.won);
        }
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
        won: wonGame,
        hintsUsed: hintsUsedCount
    };
    localStorage.setItem(`statle_${currentSport}_${dayKey}`, JSON.stringify(stateToSave));
}

// Custom Basketball Position Check (Adjacent Positions = Yellow)
function checkBasketballPosition(guessedPos, secretPos) {
    if (guessedPos === secretPos) return "correct";

    const adjacencyMap = {
        'PG': ['SG'],
        'SG': ['PG', 'SF'],
        'SF': ['SG', 'PF'],
        'PF': ['SF', 'C'],
        'C':  ['PF']
    };

    if (adjacencyMap[guessedPos] && adjacencyMap[guessedPos].includes(secretPos)) {
        return "partial";
    }
    return "wrong";
}

// Custom Baseball Position Check (Infield vs Outfield = Yellow)
function checkBaseballPosition(guessedPos, secretPos) {
    if (guessedPos === secretPos) return "correct";

    const infield = ['C', '1B', '2B', '3B', 'SS', 'DH'];
    const outfield = ['LF', 'CF', 'RF', 'OF'];

    const guessedInfield = infield.includes(guessedPos);
    const secretInfield = infield.includes(secretPos);

    const guessedOutfield = outfield.includes(guessedPos);
    const secretOutfield = outfield.includes(secretPos);

    if ((guessedInfield && secretInfield) || (guessedOutfield && secretOutfield)) {
        return "partial";
    }
    return "wrong";
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
    updateHintButtons();

    if (triggerAlerts) {
        autocompleteList.innerHTML = "";
        searchInput.value = "";
    }

    const row = document.createElement("div");
    row.className = "row";
    row.style.gridTemplateColumns = sportConfigs[currentSport].gridCss;

    const config = sportConfigs[currentSport];

    config.categories.forEach(category => {
        const cell = document.createElement("div");
        cell.className = "cell";
        
        let guessVal = guessedPlayer[category.key];
        let secretVal = secretPlayer[category.key];

        if (category.key === 'name') {
            cell.classList.add('name-cell');
            if (guessVal.length > 18) cell.classList.add('name-extra-long');
            else if (guessVal.length > 13) cell.classList.add('name-long');
        }

        if (category.key === 'position') {
            cell.textContent = guessVal;
            if (currentSport === 'basketball') {
                cell.classList.add(checkBasketballPosition(guessVal, secretVal));
            } else if (currentSport === 'baseball') {
                cell.classList.add(checkBaseballPosition(guessVal, secretVal));
            } else {
                cell.classList.add(guessVal === secretVal ? "correct" : "wrong");
            }
        }
        else if (category.type === 'match') {
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
                lockInputSystem();
                showEndGameModal(true);
            } else if (currentGuesses >= maxGuesses) {
                revealCorrectPlayerRow();
                lockInputSystem();
                showEndGameModal(false);
            }
        }, 150);
    }
}

// Triggers system share sheet (Messages, WhatsApp, AirDrop, etc.) with fallback
async function triggerShareAction(resultSummary) {
    const shareText = `Statle (${currentSport.toUpperCase()}): ${resultSummary}\nhttps://statle.vercel.app`;
    
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Statle Result',
                text: shareText
            });
        } catch (err) {
            // User cancelled share
        }
    } else {
        navigator.clipboard.writeText(shareText);
        alert("Result copied to clipboard!");
    }
}

function getResultSummaryString(won) {
    const hintTextStr = `${hintsUsedCount} hint${hintsUsedCount === 1 ? '' : 's'}`;
    return won 
        ? `Solved in ${currentGuesses} guess${currentGuesses === 1 ? '' : 'es'} with ${hintTextStr}!`
        : `Unsuccessful today. The answer was ${secretPlayer.name}. Used ${hintTextStr}.`;
}

function showBottomShareButton(won) {
    const resultSummary = getResultSummaryString(won);
    shareBottomContainer.style.display = "block";
    bottomShareBtn.onclick = () => triggerShareAction(resultSummary);
}

function showEndGameModal(won) {
    modalTitle.textContent = won ? "VICTORY!" : "GAME OVER";
    modalText.textContent = getResultSummaryString(won);
    modalExtra.innerHTML = ""; 
    modal.style.display = "flex";

    showBottomShareButton(won);
}

function revealCorrectPlayerRow() {
    const row = document.createElement("div");
    row.className = "row reveal-fail-row";
    row.style.gridTemplateColumns = sportConfigs[currentSport].gridCss;

    const config = sportConfigs[currentSport];
    config.categories.forEach(category => {
        const cell = document.createElement("div");
        cell.className = "cell revealed-fail";
        if (category.key === 'name') {
            cell.classList.add('name-cell');
            if (secretPlayer.name.length > 18) cell.classList.add('name-extra-long');
            else if (secretPlayer.name.length > 13) cell.classList.add('name-long');
        }
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

// Set default landing tab to HOME
switchTab("home");

const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const sport = e.target.getAttribute('data-sport');
        switchTab(sport);
    });
});
