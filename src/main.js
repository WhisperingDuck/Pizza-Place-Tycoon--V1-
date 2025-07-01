// Render the static header bar
const appRoot = document.getElementById('app-root');

appRoot.innerHTML = `
  <header class="header-bar">
    <div class="header-title">Pizza Place Tycoon</div>
    <nav class="header-controls">
      <button class="header-btn" aria-label="Menu">Menu</button>
      <button class="header-btn" aria-label="Settings">Settings</button>
      <button class="header-btn" aria-label="Help">Help</button>
      <button class="header-btn" aria-label="Debug Panel">Debug</button>
      <button class="header-btn" aria-label="Balance Panel">Balance</button>
    </nav>
  </header>
  <main class="main-content panels-row">
    <section class="panel panel-stats">
      <div class="stats-block">
        <h2>Stats</h2>
        <ul id="stats-list">
          <li>Cash: $<span id="stat-cash">___</span></li>
          <li>Health: <span id="stat-health">___</span></li>
          <li>Reputation: <span id="stat-rep">___</span></li>
          <li>Day: <span id="stat-day">___</span></li>
          <li>Serving Capacity: <span id="stat-capacity">___</span></li>
          <li>Flour: <span id="stat-flour">___</span></li>
          <li>Dough: <span id="stat-dough">___</span></li>
        </ul>
      </div>
      <div class="actions-block">
        <h2>Actions</h2>
        <div style="margin-bottom: 0.5rem;">
          <input id="buy-flour-qty" type="number" min="1" value="1" style="width: 3em;"> 
          <button id="buy-flour-btn">Buy Flour ($5 each)</button>
        </div>
        <button id="make-dough-btn">Make Dough</button>
        <button id="start-day-btn">Start Day</button>
        <span id="timer-display" style="margin-left: 1em; font-weight: bold;"></span>
        <button disabled>Recycle</button>
        <button disabled>Order Pizza</button>
        <button disabled>Lift Weights</button>
      </div>
      <div class="staff-block">
        <h2>Staff</h2>
        <div>Staff Count: ___</div>
        <button disabled>Hire Staff</button>
        <button disabled>Fire Staff</button>
      </div>
    </section>
    <section class="panel panel-log">
      <h2>Business Log</h2>
      <div class="log-scroll-area">
        <div class="log-entry">[Log entries will appear here]</div>
      </div>
      <div class="daily-summary-placeholder">
        <h3>Daily Summary</h3>
        <div>[Summary will appear here]</div>
      </div>
    </section>
    <section class="panel panel-tabs">
      <div class="tabs-header">
        <button class="tab-btn" disabled>Ingredients</button>
        <button class="tab-btn" disabled>Upgrades</button>
        <button class="tab-btn" disabled>Perks</button>
        <button class="tab-btn" disabled>Recipes</button>
      </div>
      <div class="tab-content">
        <div class="tab-pane" id="upgrades-pane">
          <h3>Upgrades</h3>
          <div id="upgrade-used-microwave" style="margin-bottom: 1em;">
            <span><strong>Used Microwave</strong> ($20)</span>
            <button id="buy-used-microwave-btn">Buy</button>
            <span id="used-microwave-owned" style="color: green; display: none;">Owned</span>
          </div>
          <div id="upgrade-microwave" style="margin-bottom: 1em;">
            <span><strong>Clean Microwave</strong> ($50)</span>
            <button id="buy-microwave-btn">Buy</button>
            <span id="microwave-owned" style="color: green; display: none;">Owned</span>
          </div>
        </div>
        <div class="tab-pane">[Upgrades List Placeholder]</div>
        <div class="tab-pane">[Perks List Placeholder]</div>
        <div class="tab-pane">[Recipes List Placeholder]</div>
      </div>
    </section>
  </main>
`;

// --- Core Game State Object ---
// This object holds all core resources and state for the MVP loop.
const gameState = {
  // Player resources
  cash: 112,            // Starting cash after recycling tutorial
  health: 50,           // Player health (0-100)
  reputation: 0,        // Reputation score
  day: 1,               // Current day number
  phase: 'management',  // 'management' | 'day' | 'endOfDay'

  // Inventory
  inventory: {
    flour: 0,           // Units of flour
    dough: 0,           // Units of dough (each makes 8 slices)
    // Add more ingredients as needed
  },

  // Business stats
  servingCapacity: 6,   // Calculated from health (for now, 50-59 = 6)
  disgust: 100,         // Disgust score (starts at 100 due to full recycling meter)
  recycling: 100,       // Recycling units (starts full for tutorial)

  // Upgrades (MVP: only Clean Microwave)
  upgrades: {
    cleanMicrowave: false, // Has the player purchased the Clean Microwave?
    usedMicrowave: false,   // Has the player purchased the Used Microwave?
    // Add more upgrades as needed
  },

  // Log for business events
  log: [],

  // Staff (future, for now always 0)
  staff: 0,

  // Game Over flag
  isGameOver: false,
};

// --- Core Resource System: Cash & Health ---

function addCash(amount) {
  const prev = gameState.cash;
  gameState.cash += amount;
  if (gameState.cash < 0) gameState.cash = 0; // No debt for MVP
  logEvent(`Cash: ${prev} → ${gameState.cash} (${amount >= 0 ? '+' : ''}${amount})`);
}

function addHealth(amount) {
  const prev = gameState.health;
  gameState.health += amount;
  if (gameState.health > 100) gameState.health = 100;
  if (gameState.health < 0) gameState.health = 0;
  logEvent(`Health: ${prev} → ${gameState.health} (${amount >= 0 ? '+' : ''}${amount})`);
  recalculateServingCapacity();
}

// Order Pizza: Spend $22 to restore 10 health (up to max 100)
function orderPizza() {
  const pizzaCost = 22;
  const healthRestore = 10;
  if (gameState.cash < pizzaCost) {
    logEvent('Not enough cash to order pizza.');
    return false;
  }
  addCash(-pizzaCost);
  addHealth(healthRestore);
  logEvent('Ordered pizza for self. Restored 10 health.');
  return true;
}

// --- Phase Transition & State Update Logic ---

// Helper: Add a message to the business log
function logEvent(message) {
  gameState.log.push(`[Day ${gameState.day}] ${message}`);
}

// Transition to Management Phase
function toManagementPhase() {
  gameState.phase = 'management';
  recalculateServingCapacity();
  logEvent('Entered Management Phase. Plan your next day!');
  // (Future: enable management actions, update UI, etc.)
  // If you can't afford flour, trigger game over
  if (gameState.cash < 5) {
    triggerGameOver('You cannot afford flour to continue your business.');
  }
}

// Transition to Day Phase
function toDayPhase() {
  gameState.phase = 'day';
  logEvent('Day Cycle started! Customers are arriving...');
  // (Future: start 20s timer, process customer events, etc.)
}

// Transition to End-of-Day Phase
function toEndOfDayPhase() {
  gameState.phase = 'endOfDay';
  logEvent('End of Day. Calculating results...');
  // (Future: process summary, expenses, spoilage, health drop, etc.)
}

// Example: Start in Management Phase
// (In future, this will be triggered by UI or game start logic)
toManagementPhase();

// --- Management Phase Actions (MVP) ---

// Buy Flour (MVP: fixed price, e.g., $5 per unit)
function buyFlour(units = 1) {
  const flourPrice = 5;
  const totalCost = flourPrice * units;
  if (gameState.cash < totalCost) {
    logEvent(`Not enough cash to buy ${units} flour.`);
    return false;
  }
  addCash(-totalCost);
  gameState.inventory.flour += units;
  logEvent(`Bought ${units} flour for $${totalCost}.`);
  return true;
}

// Make Dough (1 flour -> 1 dough, up to serving capacity)
function makeDough(units = 1) {
  let made = 0;
  for (let i = 0; i < units; i++) {
    if (gameState.inventory.flour < 1) {
      logEvent('Not enough flour to make more dough.');
      break;
    }
    gameState.inventory.flour -= 1;
    gameState.inventory.dough += 1;
    made++;
  }
  if (made > 0) {
    logEvent(`Made ${made} dough (used ${made} flour).`);
    // Warn if dough exceeds what can be used in a day (servingCapacity * 1 dough = 8 slices per dough)
    const maxUsefulDough = gameState.servingCapacity; // 1 dough = 8 slices, but servingCapacity is in slices, so this is a simplification for MVP
    if (gameState.inventory.dough > maxUsefulDough) {
      logEvent(`Warning: You have more dough than you can serve today. Some will be wasted!`);
    }
  }
  return made;
}

// --- Serving Capacity Calculation (MVP) ---
function recalculateServingCapacity() {
  const h = gameState.health;
  let cap = 1;
  if (h >= 90) cap = 10;
  else if (h >= 80) cap = 9;
  else if (h >= 70) cap = 8;
  else if (h >= 60) cap = 7;
  else if (h >= 50) cap = 6;
  else if (h >= 40) cap = 5;
  else if (h >= 30) cap = 4;
  else if (h >= 20) cap = 3;
  else if (h >= 10) cap = 2;
  else if (h >= 1) cap = 1;
  else cap = 0;
  gameState.servingCapacity = cap;
  updateStatsUI();
}

// --- Simple Customer Logic (MVP) ---
function processCustomerEvent(customerNumber) {
  // Ingredient requirements (MVP: only dough required)
  if (gameState.inventory.dough < 1) {
    logEvent(`Customer ${customerNumber}: Could not buy (not enough dough).`);
    return false;
  }
  // (Future: add checks for sauce, cheese, toppings here)

  // MVP: 50% chance customer buys a slice
  const buys = Math.random() < 0.5;
  if (buys) {
    gameState.inventory.dough -= 1;
    addCash(10); // MVP: fixed price per slice
    gameState.reputation = Math.max(0, gameState.reputation + 1); // +1 rep per sale
    updateStatsUI();
    logEvent(`Customer ${customerNumber}: Bought a slice! (+$10, +1 Rep)`);
    return true;
  } else {
    logEvent(`Customer ${customerNumber}: Did not buy.`);
    return false;
  }
}

// Refactor runDayPhase to use processCustomerEvent
function runDayPhase() {
  if (gameState.phase !== 'day') {
    logEvent('Cannot run Day Phase: not in day phase.');
    return;
  }
  const maxCustomers = gameState.servingCapacity;
  let customersServed = 0;
  let slicesSold = 0;
  for (let i = 0; i < maxCustomers; i++) {
    if (gameState.inventory.dough < 1) {
      logEvent('Out of dough! Cannot serve more customers.');
      break;
    }
    if (processCustomerEvent(i + 1)) {
      slicesSold++;
    }
    customersServed++;
  }
  logEvent(`Day ended: Served ${customersServed} customers, sold ${slicesSold} slices.`);
  toEndOfDayPhase();
}

// --- End-of-Day Phase Logic (MVP) ---

function runEndOfDayPhase() {
  if (gameState.phase !== 'endOfDay') {
    logEvent('Cannot run End-of-Day Phase: not in endOfDay phase.');
    return;
  }

  // Track stats for summary
  const prevHealth = gameState.health;
  const prevRep = gameState.reputation;
  const prevCash = gameState.cash;
  const prevDough = gameState.inventory.dough;

  // Health loss
  addHealth(-1);
  logEvent('Lost 1 health from daily grind.');

  // Dough spoilage
  const wastedDough = gameState.inventory.dough;
  gameState.inventory.dough = 0;
  if (wastedDough > 0) {
    logEvent(`Wasted ${wastedDough} dough (spoiled overnight).`);
  }

  // Advance day
  gameState.day += 1;
  logEvent('A new day begins!');

  // Calculate summary stats
  // Find last day summary in log (from runDayPhase)
  let customersServed = 0, slicesSold = 0, cashEarned = 0;
  for (let i = gameState.log.length - 1; i >= 0; i--) {
    const entry = gameState.log[i];
    if (entry.includes('Day ended:')) {
      // Example: Day ended: Served 6 customers, sold 3 slices.
      const match = entry.match(/Served (\d+) customers, sold (\d+) slices/);
      if (match) {
        customersServed = parseInt(match[1], 10);
        slicesSold = parseInt(match[2], 10);
      }
      break;
    }
  }
  cashEarned = gameState.cash - prevCash;
  const healthLost = prevHealth - gameState.health;
  const repChange = gameState.reputation - prevRep;

  // Log End-of-Day summary
  logEvent(
    `<b>End-of-Day Summary:</b> ` +
    `Customers served: <b>${customersServed}</b>, Slices sold: <b>${slicesSold}</b>, ` +
    `Cash change: <b>${cashEarned >= 0 ? '+' : ''}${cashEarned}</b>, ` +
    `Dough wasted: <b>${wastedDough}</b>, Health lost: <b>${healthLost}</b>, ` +
    `Reputation change: <b>${repChange >= 0 ? '+' : ''}${repChange}</b>`
  );

  // Game over check
  if (gameState.health <= 0) {
    triggerGameOver('You ran out of health!');
    return;
  }

  // Transition to Management Phase
  toManagementPhase();
}

// --- Expose core functions and state for console testing ---
window.buyFlour = buyFlour;
window.makeDough = makeDough;
window.orderPizza = orderPizza;
window.toDayPhase = toDayPhase;
window.runDayPhase = runDayPhase;
window.runEndOfDayPhase = runEndOfDayPhase;
window.toManagementPhase = toManagementPhase;
window.gameState = gameState;
window.updateStatsUI = updateStatsUI;
window.recalculateServingCapacity = recalculateServingCapacity;
window.startDayTimer = startDayTimer;
window.updateMakeDoughButton = updateMakeDoughButton;
window.updateStartDayButton = updateStartDayButton;
window.updateTimerDisplay = updateTimerDisplay;

// --- Timer State ---
let dayTimerInterval = null;
let dayTimerSeconds = 0;

// --- UI Update Helpers ---
function updateStatsUI() {
  document.getElementById('stat-cash').textContent = gameState.cash;
  document.getElementById('stat-health').textContent = gameState.health;
  document.getElementById('stat-rep').textContent = gameState.reputation;
  document.getElementById('stat-day').textContent = gameState.day;
  document.getElementById('stat-capacity').textContent = gameState.servingCapacity;
  document.getElementById('stat-flour').textContent = gameState.inventory.flour;
  document.getElementById('stat-dough').textContent = gameState.inventory.dough;
  updateStartDayButton();
  updateMakeDoughButton();
  updateUpgradeUI();
  updateLogUI();
}

function updateStartDayButton() {
  const btn = document.getElementById('start-day-btn');
  // MVP: Only allow if dough > 0 and used microwave is owned
  const canStart = gameState.inventory.dough > 0 && gameState.upgrades.usedMicrowave;
  btn.disabled = !canStart;
  if (btn.disabled) {
    if (!gameState.upgrades.usedMicrowave) {
      btn.title = 'Requires Used Microwave';
    } else if (gameState.inventory.dough <= 0) {
      btn.title = 'No dough available';
    } else {
      btn.title = 'Unavailable';
    }
  } else {
    btn.title = '';
  }
}

function updateMakeDoughButton() {
  const btn = document.getElementById('make-dough-btn');
  const flour = gameState.inventory.flour;
  const dough = gameState.inventory.dough;
  // MVP: Only allow if flour > 0
  btn.disabled = flour <= 0;
  if (btn.disabled) {
    btn.title = 'No flour available';
  } else {
    btn.title = '';
  }
}

function updateTimerDisplay(seconds) {
  const el = document.getElementById('timer-display');
  if (seconds > 0) {
    el.textContent = `Day in progress: ${seconds}s left...`;
  } else {
    el.textContent = '';
  }
}

// Initial UI update
updateStatsUI();

// --- Buy Flour Button Logic ---
document.getElementById('buy-flour-btn').addEventListener('click', () => {
  try {
    const qty = parseInt(document.getElementById('buy-flour-qty').value, 10) || 1;
    const before = gameState.inventory.flour;
    const success = buyFlour(qty);
    updateStatsUI();
    if (success) {
      logEvent(`Purchased ${qty} flour. (Flour: ${before} → ${gameState.inventory.flour})`);
    }
  } catch (e) {
    logEvent(`<span style='color:#FF6347;'><b>Error: ${e.message}</b></span>`);
    showErrorToast('Error: ' + e.message);
  }
});

// --- Start Day Button Logic ---
document.getElementById('start-day-btn').addEventListener('click', () => {
  try {
    if (gameState.phase !== 'management' || gameState.inventory.dough < 1 || !gameState.upgrades.usedMicrowave) return;
    logEvent('Day started!');
    toDayPhase();
    startDayTimer();
    updateStatsUI();
  } catch (e) {
    logEvent(`<span style='color:#FF6347;'><b>Error: ${e.message}</b></span>`);
    showErrorToast('Error: ' + e.message);
  }
});

function startDayTimer() {
  if (gameState.inventory.dough < 1) {
    logEvent('Cannot start day: not enough dough.');
    updateStatsUI();
    return;
  }
  dayTimerSeconds = 20;
  updateTimerDisplay(dayTimerSeconds);
  document.getElementById('start-day-btn').disabled = true;
  dayTimerInterval = setInterval(() => {
    dayTimerSeconds--;
    updateTimerDisplay(dayTimerSeconds);
    if (dayTimerSeconds <= 0) {
      clearInterval(dayTimerInterval);
      dayTimerInterval = null;
      updateTimerDisplay(0);
      runDayPhase();
      runEndOfDayPhase();
      updateStatsUI();
    }
  }, 1000);
}

// --- Make Dough Button Logic ---
document.getElementById('make-dough-btn').addEventListener('click', () => {
  try {
    if (gameState.phase !== 'management' || gameState.inventory.flour < 1) return;
    const before = gameState.inventory.dough;
    const made = makeDough(1);
    updateStatsUI();
    if (made > 0) {
      logEvent(`Made 1 dough. (Dough: ${before} → ${gameState.inventory.dough})`);
    }
  } catch (e) {
    logEvent(`<span style='color:#FF6347;'><b>Error: ${e.message}</b></span>`);
    showErrorToast('Error: ' + e.message);
  }
});

// --- Upgrade UI Helpers ---
function updateUpgradeUI() {
  // Used Microwave
  const usedBtn = document.getElementById('buy-used-microwave-btn');
  const usedOwned = gameState.upgrades.usedMicrowave;
  const usedPrice = 20;
  usedBtn.disabled = usedOwned || gameState.cash < usedPrice;
  if (usedBtn.disabled) {
    if (usedOwned) {
      usedBtn.title = 'Already owned';
    } else if (gameState.cash < usedPrice) {
      usedBtn.title = 'Not enough cash';
    } else {
      usedBtn.title = 'Unavailable';
    }
  } else {
    usedBtn.title = '';
  }
  document.getElementById('used-microwave-owned').style.display = usedOwned ? '' : 'none';
  // Clean Microwave
  const btn = document.getElementById('buy-microwave-btn');
  const owned = gameState.upgrades.cleanMicrowave;
  const price = 50;
  btn.disabled = owned || gameState.cash < price;
  if (btn.disabled) {
    if (owned) {
      btn.title = 'Already owned';
    } else if (gameState.cash < price) {
      btn.title = 'Not enough cash';
    } else {
      btn.title = 'Unavailable';
    }
  } else {
    btn.title = '';
  }
  document.getElementById('microwave-owned').style.display = owned ? '' : 'none';
}

// --- Show Toast/Feedback for Upgrade Purchase ---
function showUpgradeToast(message) {
  let toast = document.getElementById('upgrade-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'upgrade-toast';
    toast.style.position = 'absolute';
    toast.style.right = '30px';
    toast.style.top = '120px';
    toast.style.background = '#FFEA61';
    toast.style.color = '#1E1E1E';
    toast.style.padding = '0.5em 1em';
    toast.style.borderRadius = '6px';
    toast.style.fontWeight = 'bold';
    toast.style.boxShadow = '0 2px 8px rgba(30,30,30,0.10)';
    toast.style.zIndex = 1000;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.display = '';
  // ARIA live region
  const liveRegion = document.getElementById('aria-live-region');
  if (liveRegion) liveRegion.textContent = message;
  setTimeout(() => {
    toast.style.transition = 'opacity 0.5s';
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.style.display = 'none';
      toast.style.transition = '';
      if (liveRegion) liveRegion.textContent = '';
    }, 500);
  }, 2000);
}

// --- Buy Used Microwave Button Logic ---
document.getElementById('buy-used-microwave-btn').addEventListener('click', () => {
  try {
    const price = 20;
    if (gameState.upgrades.usedMicrowave) return;
    if (gameState.cash < price) return;
    addCash(-price);
    gameState.upgrades.usedMicrowave = true;
    logEvent('Purchased upgrade: Used Microwave!');
    showUpgradeToast('Upgrade purchased: Used Microwave!');
    updateUpgradeUI();
    updateStatsUI();
  } catch (e) {
    logEvent(`<span style='color:#FF6347;'><b>Error: ${e.message}</b></span>`);
    showErrorToast('Error: ' + e.message);
  }
});

// --- Buy Clean Microwave Button Logic ---
document.getElementById('buy-microwave-btn').addEventListener('click', () => {
  try {
    const price = 50;
    if (gameState.upgrades.cleanMicrowave) return;
    if (gameState.cash < price) return;
    addCash(-price);
    gameState.upgrades.cleanMicrowave = true;
    logEvent('Purchased upgrade: Clean Microwave!');
    showUpgradeToast('Upgrade purchased: Clean Microwave!');
    updateUpgradeUI();
    updateStatsUI();
  } catch (e) {
    logEvent(`<span style='color:#FF6347;'><b>Error: ${e.message}</b></span>`);
    showErrorToast('Error: ' + e.message);
  }
});

// --- Business Log UI ---
function updateLogUI() {
  const logArea = document.querySelector('.log-scroll-area');
  if (!logArea) return;
  logArea.innerHTML = gameState.log
    .map(entry => `<div class="log-entry">${entry}</div>`)
    .join('');
  // Auto-scroll to latest
  logArea.scrollTop = logArea.scrollHeight;
}
window.updateLogUI = updateLogUI;

// Update log after every stats update
const prevUpdateStatsUI2 = updateStatsUI;
updateStatsUI = function() {
  prevUpdateStatsUI2();
  updateLogUI();
};
window.updateStatsUI = updateStatsUI;

// Update log after every logEvent
const prevLogEvent = logEvent;
logEvent = function(message) {
  prevLogEvent(message);
  updateLogUI();
};
window.logEvent = logEvent;

// --- Game Over Modal & Logic ---
function triggerGameOver(reason) {
  // Log Game Over if not already logged
  if (!gameState.isGameOver) {
    logEvent(`Game Over: ${reason}`);
  }
  gameState.isGameOver = true;
  // Disable all action buttons
  [
    'buy-flour-btn',
    'make-dough-btn',
    'start-day-btn',
    'buy-used-microwave-btn',
    'buy-microwave-btn'
  ].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.disabled = true;
  });
  // Show modal
  let modal = document.getElementById('gameover-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'gameover-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(30,30,30,0.85)';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = 2000;
    modal.innerHTML = `
      <div style="background: #fff; color: #1E1E1E; padding: 2em 3em; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.2); text-align: center;">
        <h2 style="margin-top:0;">Game Over</h2>
        <div id="gameover-reason" style="margin-bottom: 1em;"></div>
        <button id="restart-btn" style="font-size: 1.2em; padding: 0.5em 2em;">Restart</button>
      </div>
    `;
    document.body.appendChild(modal);
  }
  document.getElementById('gameover-reason').textContent = reason;
  modal.style.display = 'flex';
  // Restart button logic
  document.getElementById('restart-btn').onclick = function() {
    modal.style.display = 'none';
    restartGame();
  };
}

function restartGame() {
  // Reset all game state to initial values
  gameState.cash = 112;
  gameState.health = 50;
  gameState.reputation = 0;
  gameState.day = 1;
  gameState.phase = 'management';
  gameState.inventory.flour = 0;
  gameState.inventory.dough = 0;
  gameState.servingCapacity = 6;
  gameState.disgust = 100;
  gameState.recycling = 100;
  gameState.upgrades.cleanMicrowave = false;
  gameState.upgrades.usedMicrowave = false;
  gameState.log = [];
  gameState.staff = 0;
  gameState.isGameOver = false;
  updateStatsUI();
  updateUpgradeUI();
  updateMakeDoughButton();
  updateStartDayButton();
  updateLogUI();
  logEvent('Game restarted!');
}

// --- Management Phase: Check for Game Over (cannot afford ingredients) ---
const prevToManagementPhase = toManagementPhase;
toManagementPhase = function() {
  prevToManagementPhase();
  // If you can't afford flour, trigger game over
  if (gameState.cash < 5) {
    triggerGameOver('You cannot afford flour to continue your business.');
  }
};
window.toManagementPhase = toManagementPhase;

// --- Error Toast/Modal for Unexpected Errors ---
function showErrorToast(message) {
  let toast = document.getElementById('error-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'error-toast';
    toast.style.position = 'absolute';
    toast.style.right = '30px';
    toast.style.top = '180px';
    toast.style.background = '#FF6347';
    toast.style.color = '#fff';
    toast.style.padding = '0.5em 1em';
    toast.style.borderRadius = '6px';
    toast.style.fontWeight = 'bold';
    toast.style.boxShadow = '0 2px 8px rgba(30,30,30,0.10)';
    toast.style.zIndex = 1001;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.display = '';
  // ARIA live region
  const liveRegion = document.getElementById('aria-live-region');
  if (liveRegion) liveRegion.textContent = message;
  setTimeout(() => {
    toast.style.transition = 'opacity 0.5s';
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.style.display = 'none';
      toast.style.transition = '';
      if (liveRegion) liveRegion.textContent = '';
    }, 2000);
  }, 2500);
}

// --- Global Error Handler ---
window.onerror = function(message, source, lineno, colno, error) {
  const errMsg = `Unexpected error: ${message} (${source}:${lineno}:${colno})`;
  logEvent(`<span style='color:#FF6347;'><b>${errMsg}</b></span>`);
  showErrorToast('An unexpected error occurred. See log for details.');
  return false; // Let browser log as well
}; 