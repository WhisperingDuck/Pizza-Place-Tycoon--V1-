1. Refactor for Extensibility (Foundational)
Goal: Make all game content (ingredients, upgrades, events, etc.) data-driven and easy to expand.
Tasks:
[x] Move all static content (ingredients, upgrades, events) into external JSON or JS data files.
[x] Refactor game logic to load and use this data at runtime.
[ ] Document the schema for each data file (fields, types, effects).
[ ] Ensure new content can be added without code changes.
Priority: Highest
Reason: All future features and content will be easier to implement, test, and balance if the game is data-driven from this point forward.

2. Expand Core Resources & Systems
Goal: Add depth and meaningful choices to the core loop.
2.1. Reputation System
[ ] Implement Reputation as a tracked resource.
[ ] Make daily customer count = 3 + Reputation.
[ ] Add logic for gaining/losing Reputation (e.g., delighted/disgusted customers, full day bonus, early end penalty).
2.2. Disgust System
[ ] Implement Disgust as a tracked resource.
[ ] Add Disgust gain from recycling/waste.
[ ] Make Disgust reduce customer buy rates or increase “Disgusted” customer chance.
2.3. Quality Score System
[ ] Implement Quality Score calculation (base + upgrades + supplies).
[ ] Use Quality Score to shift customer outcome probabilities.

2.4. Dough Spoilage
[ ] At end-of-day, spoil all unused dough and log the loss.
Priority: High
Reason: These systems are the backbone of the game’s strategic depth and player decision-making.

3. Expand Content Variety
Goal: Make the game feel like a real tycoon sim, not just a prototype.
3.1. Upgrades
[ ] Add at least two upgrades (one kitchen, one restaurant).
Example: “Bucket and Mop” (reduces Disgust), “Hand Made Sign” (boosts Reputation).
[ ] Implement upgrade effects via data-driven system.
3.2. Ingredients & Toppings
[ ] Add at least one new topping (e.g., Pepperoni).
[ ] Implement simple recipe logic: if player has topping, can sell “Pepperoni Slice” for higher price.
[ ] Make topping unlockable via level or upgrade.
Priority: Medium-High
Reason: More content = more choices, more replayability, and a more “real” game feel.

4. Customer System Enhancements
Goal: Make customer interactions more dynamic and strategic.
[ ] Implement customer types: Delighted, Satisfied, Neutral, Disgusted.
[ ] Use Quality Score and Disgust to determine outcome probabilities.
[ ] Add logic for customer outcome effects (buy, rep change, etc.).
[ ] Add simple “custom order” logic if recipes are not available.
Priority: Medium
Reason: This brings the customer system closer to the final vision and makes the day cycle more interesting.

5. Event System (Random Events)
Goal: Add unpredictability and replay value.
[ ] Implement a basic random event system (1 in 10 chance at end of day).
[ ] Store events in a data file (JSON/JS).
[ ] Add at least 3 sample events (e.g., “Scratch Ticket Win”, “Rainy Day”, “Napkin Sale”).
[ ] Make events affect cash, reputation, or resources.
Priority: Medium
Reason: Events add surprise and variety, and the data-driven system is a foundation for future content.

6. UI/UX Improvements
Goal: Make the game more readable, responsive, and satisfying to interact with.
[ ] Add tooltips for all buttons (especially when disabled).
[ ] Implement toast notifications for key events (upgrade purchased, new topping unlocked, event triggered).
[ ] Add a daily summary modal at end-of-day (customers served, cash earned, dough wasted, rep/disgust changes).
[ ] Ensure all new resources (Reputation, Disgust, Quality Score) are visible and clearly explained in the UI.
Priority: Medium
Reason: Good feedback and clarity are essential for playtesting and player engagement.

7. Polish & Playtesting
Goal: Ensure the vertical slice is fun, balanced, and extensible.
[ ] Playtest the new systems for balance and fun.
[ ] Adjust numbers/content in data files as needed.
[ ] Document how to add new content (for future devs or yourself).
[ ] Gather feedback and prioritize next steps (e.g., staff, meta-progression, more events).
Priority: Ongoing/Final
Reason: Iteration and polish are key to a successful vertical slice.