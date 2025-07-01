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
        <ul>
          <li>Cash: $___</li>
          <li>Health: ___</li>
          <li>Reputation: ___</li>
          <li>Day: ___</li>
          <li>Serving Capacity: ___</li>
        </ul>
      </div>
      <div class="actions-block">
        <h2>Actions</h2>
        <button disabled>Make Dough</button>
        <button disabled>Start Day</button>
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

// --- Day Phase Logic (MVP) ---

// Simulate the Day Phase: serve up to servingCapacity customers
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
    // MVP: 50% chance customer buys a slice
    const buys = Math.random() < 0.5;
    if (buys) {
      gameState.inventory.dough -= 1;
      addCash(10); // MVP: fixed price per slice
      slicesSold++;
      logEvent(`Customer ${i + 1}: Bought a slice! (+$10)`);
    } else {
      logEvent(`Customer ${i + 1}: Did not buy.`);
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