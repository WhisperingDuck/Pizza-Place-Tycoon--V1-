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
        <button id="start-day-btn">Start Day</button>
        <span id="timer-display" style="margin-left: 1em; font-weight: bold;"></span>
        <button disabled>Make Dough</button>
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
        <div class="tab-pane">[Ingredients Table Placeholder]</div>
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
    // Add more upgrades as needed
  },

  // Log for business events
  log: [],

  // Staff (future, for now always 0)
  staff: 0,
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
  const maxDough = gameState.servingCapacity;
  let made = 0;
  for (let i = 0; i < units; i++) {
    if (gameState.inventory.flour < 1) {
      logEvent('Not enough flour to make more dough.');
      break;
    }
    if (gameState.inventory.dough >= maxDough) {
      logEvent('Cannot make more dough: storage is full (serving capacity limit).');
      break;
    }
    gameState.inventory.flour -= 1;
    gameState.inventory.dough += 1;
    made++;
  }
  if (made > 0) {
    logEvent(`Made ${made} dough (used ${made} flour).`);
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
  if (gameState.inventory.dough < 1) {
    logEvent('Out of dough! Cannot serve more customers.');
    return false;
  }
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

  // Game over check
  if (gameState.health <= 0) {
    logEvent('Game Over: You ran out of health!');
    // (MVP: No restart logic yet)
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
}

function updateStartDayButton() {
  const btn = document.getElementById('start-day-btn');
  // Enable only in management phase and if at least 1 dough
  btn.disabled = !(gameState.phase === 'management' && gameState.inventory.dough > 0);
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
  const qty = parseInt(document.getElementById('buy-flour-qty').value, 10) || 1;
  buyFlour(qty);
  updateStatsUI();
});

// --- Start Day Button Logic ---
document.getElementById('start-day-btn').addEventListener('click', () => {
  if (gameState.phase !== 'management' || gameState.inventory.dough < 1) return;
  toDayPhase();
  startDayTimer();
  updateStatsUI();
});

function startDayTimer() {
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
      updateStatsUI();
    }
  }, 1000);
}

// Update stats UI after any state-changing action (for now, call manually after actions)
// In a full implementation, you would call updateStatsUI after every relevant action. 