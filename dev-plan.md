# Pizza Place Tycoon – Step-by-Step Development Plan

This plan breaks down the project into small, self-contained tasks. Each step is designed to be implemented and reviewed independently, supporting the Vibe Code approach.

---

## 0. Project Initialization
- [x] Create GitHub repository and set up version control
- [x] Add README with project vision and setup instructions
- [x] Set up .gitignore and basic directory structure

## 1. Tooling & Foundations
- [x] Set up build tools (npm, linter, formatter)
- [x] Add minimal HTML entry point and link to main JS file
- [x] Add base CSS file with color palette and font setup

## 2. Static UI Skeleton
- [x] Implement static header bar (title, meta controls, dev tools placeholder)
- [x] Lay out three main panels (Stats/Actions, Business Log, Tabbed Panel) using flex/grid
- [x] Add placeholder elements for all major UI components (no interactivity yet)
- [x] Add basic responsive styling for desktop and mobile

## 3. Core Game State & Loop
- [x] Define game state object (resources, day, phase, etc.)
- [x] Implement phase transitions: Management → Day → End-of-Day
- [x] Add state update logic for each phase

## 4. Core Resource Systems
- [x] Implement Cash and Health state and update logic
- [x] Add Inventory system for Flour and Dough
- [x] Implement Make Dough action (consumes Flour, produces Dough)
- [x] Add UI for buying Flour and showing inventory

## 5. Basic Customer & Day Cycle
- [x] Implement simple customer logic (random buy/no-buy outcome)
- [x] Add Reputation and Serving Capacity basics
- [x] Implement Start Day button and 20-second timer
- [x] Enforce ingredient requirements and serving capacity during Day phase

## 6. Upgrade System (MVP)
- [x] Implement single upgrade (“Clean Microwave”) and purchase logic
- [ ] Add UI for upgrade purchase and feedback

## 7. Business Log & Feedback
- [ ] Implement Business Log UI (scrollable, auto-scroll to latest)
- [ ] Add log entries for all major actions (sales, purchases, phase changes)
- [ ] Implement End-of-Day summary in the log

## 8. Game Over & Restart
- [ ] Implement Game Over condition (Health = 0 or can't afford ingredients)
- [ ] Add Game Over screen/modal and restart logic

## 9. UI Polish & Usability
- [ ] Add error handling and user feedback for invalid actions
- [ ] Refine UI styling for clarity and accessibility
- [ ] Ensure all controls are keyboard accessible

## 10. Manual Testing & Iteration
- [ ] Playtest each feature as it's added
- [ ] Refactor and fix bugs as needed
- [ ] Prepare for next feature chunk based on feedback

## UI/UX & Refactor TODOs

- Move “Buy Flour” button into the Ingredients Table (right panel) when implemented.
- Remove Flour and Dough from Stats panel once Ingredients Table is live.
- Increase or make flexible the width of the right panel to fit full ingredients/supplies tables.
- Refactor business log to support multiple message types (customer events, daily summary, game over, etc.) as components with unique styles.

---

Check off each step as you complete it. Each chunk should be small enough to be handled in a single prompt, with clear input and output. 