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