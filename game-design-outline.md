# Pizza Place Tycoon - Game Design Outline

## 1. CORE CONCEPT & VISION

### 1.1 Game Overview
- **What is the core experience?**
A satisfying incremental business simulation that captures the addictive appeal of classic games like Lemonade Stand Tycoon, Universal Paperclips, Cookie Clicker, and Game Dev Tycoon. The game focuses on building a pizza business from humble beginnings (a microwave in a stand built from used pizza boxes) to a respected local establishment through strategic resource management and business decisions.

- **What makes this game unique?**
- **Accessible & Minimalist**: Easy to understand, hard to master "one more day" gameplay that keeps players engaged in short, satisfying cycles
- **Addictive Loop**: Combines idle game satisfaction with active management decisions  
- **Roguelike Elements**: Meta-progression across runs with permanent upgrades
- **Realistic Economics**: Reflects the genuine challenges of running a small food business
- **Nostalgic Appeal**: Captures the spirit of classic business simulation games

- **What's the emotional journey for players?**
Players experience the rewarding progression from struggling with a makeshift pizza stand to building a beloved local institution. The journey emphasizes the satisfaction of honest work, community building, and overcoming financial challenges through smart business decisions and a passion for the work the player do.

- **How does this reflect the player's personal experiences?**
This game reflects a personal journey from tech industry disillusionment to seeking meaningful work that creates genuine value. The financial struggles and business challenges in the game mirror real-world economic realities - the difficulty of making a living while paying fair wages and maintaining quality. The game serves as both a nostalgic tribute to childhood business simulation games and a personal project that represents the ideal of honest, community-focused work.

### 1.2 Target Audience
- **Who is this game for?**
Primary audience includes players who enjoy addictive, satisfying gameplay loops and have nostalgia for classic business simulation games. The game appeals to both experienced incremental game players and newcomers to the genre, with broad age appeal. Players are drawn to games that offer escape, strategic decision-making, and a sense of progression and accomplishment.

- **What other games do they enjoy?**
- **Business Simulations**: Lemonade Stand (old school PC browser style), Game Dev Tycoon (rewarding business game), Coffee Shop (Cool Math Games - similar gameplay loop)
- **Incremental Games**: Universal Paperclips (minimalist browser style), Adventure Capitalist (strategic incremental decisions), Cookie Clicker (addictive, good for players looking to escape and feel a sense of satisfaction)
- **Roguelikes**: Luck Be a Landlord (combination of the thrill of playing random odds and using personalized strategies), Slay the Spire (ultimate addictive roguelike with engaging perks and upgrade system)
- **Tycoon Games**: RollerCoaster Tycoon, SimCity 2000
- **Strategy Simulations**: Civilization (ultimate addictive gameplay loop), RimWorld (engaging simulation, rewarding and difficult)

- **What's their typical play session length?**
Highly variable - players may engage in quick 1-minute sessions to fill short time gaps, but the addictive nature of incremental games often leads to extended play sessions of several hours. The game design supports both casual and deep engagement patterns.


---

## 2. GAME LOOPS & PROGRESSION

### 2.1 Core Game Loop
- **What's the main cycle players repeat?**
The main loop is a hustle with three distinct phases:

**Management Phase**: Players prep for the day by buying ingredients, making dough, hiring staff, and purchasing upgrades. This phase is untimed, allowing strategic planning.

**Day Cycle Phase**: A fast-paced 20-second window where players serve customers and sell pizza slices. This is the core action phase with real-time customer events.

**End-of-Day Phase**: Players see their results, pay staff wages, handle random events, and prepare for the next cycle. This phase processes all daily calculations and events.

- **How long should each cycle take?**
The **Day Cycle Phase** is exactly 20 seconds of active gameplay. The **Management Phase** is untimed, allowing players to strategize as needed. The **End-of-Day Phase** is brief and automated. Total cycle time varies based on player planning, but the core action is consistently 20 seconds.

- **What's the primary goal of each cycle?**
Each cycle focuses on growing the pizza business from humble beginnings to a successful empire. Players must:
- **Earn money** by serving customers efficiently during the 20-second day cycle
- **Reinvest earnings** into ingredients, upgrades, and staff during the management phase
- **Manage resources** (health, reputation, cash) to survive and thrive across multiple cycles
- **Build reputation** to attract more customers and increase daily traffic
- **Improve quality** to increase the odds of customers buying a slice and becoming repeat customers
- **Expand capacity** to serve more customers per day and maximize revenue potential


### 2.2 Meta-Progression Loop
- **How do players get stronger over multiple runs?**
Even when the player fail, the player get stronger. If the player's run ends in a **Game Over**, the player get a permanent discount on flour, which stacks up with every attempt. the player's **Skill level**, which makes the player faster at making dough, also carries over forever.

The real power move is to **Prestige**. When the player hit $10,000 cash, the player can choose to reset. When the player do, the player pick one topping to permanently boost, making it more popular with customers in all future runs. That topping also stays unlocked for the player from the start of the player's next game. On top of that, the player's base price per slice gets a permanent bump, and the player get another big discount on flour.

- **What persists between runs?**
- **Skill Level**: All the gains from making dough and lifting weights are permanent
- **Flour Price Discount**: Every run contributes to a stacking discount on flour, making the player's base ingredient cheaper over time
- **Prestige Bonuses**: Any toppings the player've boosted and the permanent increases to the player's slice price stick with the player forever

- **What's the long-term goal?**
The long-term goal is to build a legendary pizza empire. the player do this by prestiging multiple times. Each time the player prestige, the player're making the player's next run a little easier and more powerful, allowing the player to build bigger and faster until the player've created the ultimate pizza place.

### 2.3 Progression Systems
- **What are the main ways players progress?**
Players progress through several interconnected systems that track their growth both within a single run and across multiple playthroughs:

- **Player Level**: This is the main short-term progression. By selling slices, players gain experience and level up. Leveling up is the primary way to unlock new toppings and make more advanced upgrades available for purchase.

- **Upgrades & Perks**: Players spend cash to buy upgrades for their kitchen and restaurant. These provide direct bonuses like reducing the "Disgust" score, boosting Reputation, or increasing efficiency. Perks are special upgrades that can unlock major new gameplay mechanics, like the entire Delivery system.

- **Reputation**: This score determines how many potential customers show up each day. It increases when the player get "delighted" customers and decreases with "disgusted" ones. Higher reputation tiers can also grant passive bonuses, like preventing the negative "Busted" event.

- **Quality Score**: This is a five-star rating that represents the overall appeal of the player's pizza. It's the new name for what was formerly called "BuyRate" in concept.md. This score is a calculation of all the positive things about the player's business—like unlocked recipes, purchased upgrades, and having supplies in stock. A higher Quality Score directly increases the chances of having "Delighted" or "Satisfied" customers who buy the player's pizza. However, this score can be negatively impacted by a high "Disgust" score, which can override the player's quality and drive customers away.

- **Recipes**: When players unlock the right combination of toppings, they discover a new Recipe. Unlocked recipes provide a boost to the player's Quality Score, making customers more likely to buy.

- **Skill**: What is skill? How do players gain it? What does it do?
Skill is a meta-progression stat that represents the player's character's physical efficiency at manual tasks, especially making dough. When the player get a skill point, the game tells the player, "Skill +1. I'm getting good at this." The best part is that the player's Skill level is permanent; it persists across all the player's runs, even after a Game Over or a Prestige.

**How the player gain it:**
- **Making Dough:** Each completion gives +1 action point towards the player's next skill level
- **Lifting Weights:** Each completion gives +1 action point (or +2 with the "Gym Membership" perk)

**Progression tiers:**
- **Skill Level 1:** 10 total actions
- **Skill Level 2:** 50 total actions  
- **Skill Level 3:** 100 total actions
- *Note: These tiers will be defined in the code and require playtesting to balance*

**What it does:**
- **Dough Speed:** Reduces dough-making time by 1 second per skill level (base: 10 seconds, minimum: 1 second)

- **How do different systems interact?**
The progression systems are designed to create a powerful feedback loop where improvement in one area drives progress in others:

**Selling Slices** is the engine. Every sale provides **Cash** and grants XP towards the player's **Player Level**.

This **Player Level** unlocks new, more valuable **Toppings** and more powerful **Upgrades**.

Unlocking the right **Toppings** automatically discovers new **Recipes**.

These **Recipes** and **Upgrades** improve the player's **Quality Score**, making customers more likely to be "Delighted".

"Delighted" customers increase the player's **Reputation**.

Higher **Reputation** attracts more "Potential Customers" each day.

More customers lead to more slices sold, which accelerates the entire loop.

- **What creates meaningful choices?**
Meaningful choices arise from balancing competing priorities and managing risk versus reward:

- **Cash Management**: The most constant choice is how to spend the player's limited cash. Do the player invest in an expensive **Upgrade** for a long-term benefit, or do the player spend it on ingredients to simply survive the next day?

- **Risk vs. Reward**: The Recycling system provides a clear strategic choice. the player can let recyclable waste pile up, increasing the player's Disgust score (which hurts sales), in the hopes of cashing in big during the "Recyclethon" random event. Or, the player can play it safe and recycle immediately to keep the player's Disgust low.

- **Time Investment**: Players must choose how to spend their time. Manually making dough or lifting weights feels like a grind, but it's the only way to build the permanent **Skill** stat that makes all future runs easier.

- **Prestige Strategy**: The decision to Prestige is the ultimate long-term choice. the player give up a successful run to grant a permanent popularity boost to a single topping of the player's choice. This choice shapes the player's strategy for all subsequent playthroughs.


---

## 3. CORE CONCEPTS & FEATURES

### 3.1 Resources & Economy
- **Cash**: How does money work? How do players earn/spend it?
Cash is the lifeblood of the pizza place. It's what the player use to operate, survive, and grow the player's business from the ground up. the player start the game with $112, which the player get from recycling a pile of old pizza boxes during the tutorial.

**How the player earn it:**
- **Selling Pizza**: the player's main hustle is selling pizza slices to customers
- **Extras**: the player also make money from selling extra toppings and pop
- **Recycling**: Cashing in the player's accumulated recyclable waste provides a steady income stream
- **Events**: Random and scheduled events can give the player cash infusions, like winning on a scratch ticket or getting a bonus on "Boss Appreciation Day"

**How the player spend it:**
- **Ingredients & Supplies**: the player have to spend money to make money. This means constantly buying flour, sauce, cheese, toppings, and other supplies like napkins and plates
- **Staff Wages**: If the player hire staff, the player've got to pay their daily wages
- **Upgrades & Perks**: The main way to grow the player's business is by investing the player's cash into kitchen and restaurant upgrades, as well as powerful perks
- **Events**: Some events will require the player to spend cash
- **Self-Care**: the player can spend $22 to order a pizza for the player'sself, which is the main way to restore the player's health

- **Health**: What does health represent? How does it affect gameplay?
Health is the player's character's life force and survival stat. Think of it as a ticking clock; it starts at 50 out of 100 and drops by one point every single day, representing the physical toll of running the pizza shop. If the player's Health hits zero, it's game over.

It's not just about survival, though. the player's Health score directly impacts the player's personal **Serving Capacity**. The healthier the player are, the more customers the player can handle the player'sself before needing to hire staff. So, letting the player's health slide doesn't just risk ending the game—it also throttles the player's ability to make money. the player can get the player's health back up by ordering a pizza for the player'sself, or through certain upgrades and random events.

- **Reputation**: How does reputation work? What does it influence?
Reputation represents the pizzeria's public image and community standing. It's the primary driver of customer traffic and determines how many potential customers visit each day. The score starts at 0 and fluctuates based on customer satisfaction and business decisions.

**How players gain reputation:**
- **Delighted Customers**: Each delighted customer provides +1 reputation
- **Full Day Completion**: Completing a full 20-second day cycle grants +1 reputation
- **Upgrades & Events**: Restaurant upgrades and certain events provide reputation bonuses

**How players lose reputation:**
- **Disgusted Customers**: Each disgusted customer reduces reputation by -1
- **Early Day End**: Using the "End Day" button before the timer expires incurs a -1 penalty

**What reputation influences:**
- **Customer Traffic**: Daily potential customers = 3 + current reputation score
- **Reputation Tiers**: Higher reputation unlocks tier-based bonuses and prevents negative events
- **Business Growth**: More customers lead to increased sales and faster progression

- **Dough**: How does dough production work? What's the crafting loop?
Dough is the absolute foundation for making pizza. the player can't sell anything without it.

**The crafting loop:**
- **Get Flour:** First, the player need to have flour in the player's inventory, which the player buy. The crafting recipe is simple: 1 Flour equals 1 Dough
- **Make Dough Action:** the player click the "Make Dough" button. As soon as the player click it, 1 unit of Flour is consumed from the player's inventory
- **Wait for it:** The button then turns into a progress meter. It starts at a 10-second timer, but this gets faster as the player's Skill level increases. Every skill point shaves one second off the timer
- **the player made 1 Dough!:** Once the timer finishes, the player get +1 Dough in the player's inventory, and a message pops up in the log to confirm it

**Strategic considerations:**
- **Yield:** Each unit of dough the player make is enough for 8 pizza slices
- **Spoilage:** Any dough the player have left over at the end of the day spoils and resets to zero, so the player have to plan how much the player make versus how much the player think the player'll sell
- **Storage Limit:** the player's dough storage is also limited by the player's current Serving Capacity, so the player can't just stockpile an infinite amount

- **Recycling**: What is the recycling system? How does it work?
The recycling system is all about managing the waste the player's pizza shop generates. Every slice the player sell creates a little bit of recyclable trash, and if the player let it pile up, it makes the player's place gross and drives customers away.

**How it works:**
- **Accumulation:** For every single pizza slice the player sell, the player accumulate +0.125 units of recyclable waste. This waste is tracked on the "Recycling meter" in the UI, which has a maximum capacity of 100 units
- **The "Disgust" Penalty:** For every unit of waste the player have piled up, the player's shop's "Disgust" score increases by 1 point. A high Disgust score will scare away potential customers, directly hurting the player's sales. To get the player started, the game actually begins with 100 units of recycling already piled up, so the player have to deal with this problem right away
- **The "Recycle" Action:** To clean up, the player can click the "Recycle" button at any time. This action does two things: it instantly converts all the player's accumulated recycling units into cash at a rate of $1.12 per unit, and it resets the Disgust penalty from all that waste back to zero

**Strategic choice:**
- **Risk vs. Reward:** This system creates a cool risk-versus-reward choice. There's a random event called the "Recyclethon" that can multiply the value of the player's recycling by 10. This gives the player a reason to maybe let the trash pile up and endure a high Disgust score for a while, hoping to cash in for a huge payday later

### 3.2 Day Cycle System
- **Management Phase**: What can players do during this time?
The Management Phase is the player's strategic command center. It's the untimed period between the end of one  day and the start of the next where the player get to breathe, plan, and invest. This is where the player make all the player's key decisions to grow the business.

**Available actions:**
- **Stock up:** Buy all the player's essential ingredients like Flour, Sauce, and Cheese, restock the player's toppings, and grab supplies like napkins and pop cans
- **Prep for the Day:** This is the player's only chance to use the "Make Dough" action to get the player's pizza base ready for the next cycle
- **Manage the player's Staff:** the player can hire new staff to increase the player's serving capacity or fire existing staff if the player need to cut costs (though it'll cost the player 1 reputation point per person fired)
- **Improve the Pizza Place:** Spend the player's hard-earned cash on Kitchen and Restaurant upgrades or buy powerful Perks that give the player unique advantages
- **Clean up:** Use the "Recycle" action to clear out accumulated waste, which lowers the player's Disgust score and gives the player some cash back
- **Indulge:** the player can "Order Pizza" to restore the player's health or "Lift Weights" to permanently increase the player's Skill level

- **Day Cycle**: How does the active period work? How long is it?
The Day Cycle is the main action phase of the game where the player actually sell the player's pizza and make money. It's a quick and intense period.

**How it works:**
- **Duration:** The Day Cycle is a timed, 20-second phase. The "Start Day" button turns into a meter that visually counts down these 20 seconds
- **Starting the Cycle:** To begin, the player have to click the "Start Day" button during the Management Phase. the player can only do this if the player've met the minimum requirements: the player have enough dough, sauce, and cheese for at least one slice, and the player've purchased the "Microwave" upgrade
- **What Happens:** Once the cycle starts, potential customers begin to arrive in scheduled batches or individually. Each arriving customer is an "event" where they might buy a slice (if they're "Delighted" or "Satisfied") or just leave. This is where the player's Quality Score and Disgust levels really matter
- **Player Actions:** During these 20 seconds, the player's actions are limited. the player cannot buy ingredients, purchase upgrades, or make dough. However, the player can still perform quick actions like "Lift Weights," "Recycle," and "Order Pizza" to manage the player's stats in real-time
- **Ending the Cycle:** The cycle ends automatically when the 20-second timer runs out. Alternatively, the player can click the "End Day" button to finish early, but the player'll take a -1 Reputation penalty for doing so. After the cycle ends, the game moves into the automated End-of-Day Phase, where the player's daily summary is shown and costs are deducted

- **End-of-Day**: What happens when the day ends? What calculations occur?
The End-of-Day phase is an automatic, quick transition that wraps everything up after the 20-second Day Cycle finishes. It's like the books closing on the day's business.

**Sequence of events:**
- **Daily Summary:** A Daily Summary pops up in the player's business log showing performance: customers visited, slices sold, total income, dough wasted, and changes to health and reputation
- **Pay Expenses:** The game automatically deducts daily wages for all hired staff from the player's cash
- **Health Decline:** The player's health drops by 1 point, representing the daily grind
- **Dough Spoilage:** Any unused dough spoils overnight. The dough meter resets to zero, and the amount lost is noted in the summary as "Wasted Dough"

**Reputation calculation:**
- **Full Day Completion:** +1 Reputation bonus for completing the full 20-second day
- **Early End:** -1 Reputation penalty if the player ended the day early

**Event triggers:**
- **Scheduled Events:** The game checks if any Scheduled Events (like "Weekend!" or "Jingle Royalties") should happen
- **Random Events:** Rolls for a Random Event, which has a 1 in 10 chance of occurring if it's been at least 5 days since the last one

**Final checks:**
- **Game Over Check:** Verifies if the player has hit a Game Over state (health at zero or running out of money)
- **Prestige Check:** Checks if the player has met the Prestige condition by having $10,000 or more in cash

**Transition:** After all calculations, the game returns to the Management Phase, and the player is free to start prepping for the next day

### 3.3 Customer System
- **Customer Types**: What different types of customers exist?
There are five types of customer events that can occur during the Day Cycle, each with a different outcome for the business. The likelihood of each type is determined by the player's Quality Score and Disgust score.

**Delighted Customer**: This is a rare but highly valuable customer.
- **Effect**: Purchases a slice and grants +1 Reputation. (odds can be easily tweaked in the codebase)
- **Base Probability**: Very uncommon (starting at 1% chance).

**Satisfied Customer**: The standard positive outcome.
- **Effect**: Purchases a slice with no change to Reputation.
- **Base Probability**: Somewhat uncommon (starting at 12.5% chance).

**Neutral Customer**: The most common outcome, especially early in the game.
- **Effect**: Does not make a purchase and has no effect on Reputation.

**Disgusted Customer**: A negative outcome that directly harms Reputation.
- **Effect**: Does not make a purchase and causes a -1 Reputation penalty.
- **Probability**: The chance of this event is primarily driven by the "Disgust Score." A higher disgust score can override all other factors and dramatically increase the likelihood of disgusted customers.

**Impatient Customer**: This event occurs when the shop's Serving Capacity is full.
- **Effect**: The customer is turned away, resulting in no purchase and no change to Reputation. This represents a lost sales opportunity.

- **Quality Score**: How do we determine if customers buy?
The decision for a customer to buy a slice is determined by the Quality Score, a dynamic calculation that happens for every single customer event. This system calculates the real-time probability of a customer being "Delighted," "Satisfied," "Neutral," or "Disgusted." A purchase only occurs if the outcome is "Delighted" or "Satisfied."

The system works in four main steps:

**1. Start with Base Probabilities**
Every customer event begins with a set of baseline probabilities, representing a brand new shop with no upgrades or bonuses.
- **Delighted Customer** (Buys, +1 Rep): 1% chance
- **Satisfied Customer** (Buys, No Rep Change): 12.5% chance
- **Neutral Customer** (No Purchase): 60% chance
- **Disgusted Customer** (No Purchase, -1 Rep): 26.5% chance

**2. Calculate the "Quality Score Influence"**
This is a cumulative score of all positive factors that encourage a customer to buy. It's calculated by adding up several bonuses:
- **Upgrades**: Certain upgrades, like the "Dough Fermentation Bin" or "Real Knife Set," provide a direct additive bonus to this score
- **Unlocked Recipes**: Every discovered recipe adds its own qualityScoreEffect value to the score, making recipe discovery a powerful way to improve quality
- **Unlocked Toppings**: Each unlocked topping contributes a small amount based on its "Base Popularity" score, rewarding players for expanding their menu
- **Supplies Multiplier**: After all additive bonuses are summed, the total score is multiplied by 1.15 if the player has both napkins and plates in stock, or by 1.10 if they have only one of them. This rewards good stock management
- **Event Bonuses**: Certain rare events, like getting the "Lucky Coin," can provide powerful temporary multipliers to this score

**3. Shift Probabilities Based on Quality Score**
The final "Quality Score Influence" is used to shift probability away from the negative outcomes ("Neutral" and "Disgusted") and toward the positive, purchasing outcomes ("Delighted" and "Satisfied").

For example, 80% of the influence score might be used to increase the chance of a "Satisfied" customer, while 20% goes toward increasing the "Delighted" chance. This makes it more likely for a purchase to occur as the player's quality improves.

**4. Apply the "Disgust Score" Override**
This is the final and most critical step. After all the positive quality calculations are done, the game checks the shop's "Disgust Score." A high Disgust score can completely override the Quality Score.

The system has defined thresholds where high Disgust forces a specific, high probability of getting a "Disgusted Customer," regardless of how high the Quality Score is. For instance, if the Disgust score is over 90, there is a 50% chance the customer will be disgusted, and if it's over 99, it's a 100% chance. This makes managing waste and cleanliness a top priority for maintaining sales.

- **Serving Capacity**: How many customers can be served?
Serving Capacity represents the total number of pizza slice sales that can be made during a single 20-second Day Cycle. It is a critical metric that directly limits the player's daily sales potential. If more customers arrive than the Serving Capacity allows, they become Impatient Customers and are turned away, resulting in lost sales.

**How it's calculated:**
The total Serving Capacity is the sum of two components: the player's personal capacity and bonuses from hired staff.

**Base Serving Capacity (from Health)**: The player's own ability to serve customers is determined by their current Health level. A healthier player can handle more orders.
- **Health 90-100**: 10 Base Serving Capacity
- **Health 80-89**: 9 Base Serving Capacity
- **Health 70-79**: 8 Base Serving Capacity
- **Health 60-69**: 7 Base Serving Capacity
- **Health 50-59**: 6 Base Serving Capacity
- **Health 40-49**: 5 Base Serving Capacity
- **Health 30-39**: 4 Base Serving Capacity
- **Health 20-29**: 3 Base Serving Capacity
- **Health 10-19**: 2 Base Serving Capacity
- **Health 1-9**: 1 Base Serving Capacity

**Staff Bonus**: Each staff member the player hires adds a flat +9 to the total Serving Capacity.

**Maximum Capacity**: The total Serving Capacity is capped at 100 slices per day. This is typically achieved with a combination of high health and a full staff of 10 employees.

- **Customer Events**: What happens when customers arrive?
When a potential customer arrives during the Day Cycle, it triggers a multi-step event to determine the outcome. This process happens for every individual customer event scheduled for that day.

**1. Serving Capacity Check**
The very first check is to see if the business's Serving Capacity has been reached for the day.

If the capacity is full, the customer becomes an Impatient Customer and is turned away. This results in no sale and no change to reputation.

**2. Customer Type Determination**
If there is available capacity, the game runs the Quality Score calculation to determine the real-time probability of the customer being Delighted, Satisfied, Neutral, or Disgusted.

A random roll then determines the specific outcome for that customer.

**3. Outcome Processing**
- **If Neutral or Disgusted**: The event ends. There is no purchase. If the customer was "Disgusted," the player's Reputation is reduced by 1.
- **If Delighted or Satisfied**: A purchase occurs, and the game proceeds to the "Order Fulfillment" step.

**4. Order Fulfillment (The Sale)**
- **Order Composition**: The system first tries to sell the customer a slice of an unlocked, makeable Recipe. If no recipes can be made from the current inventory, it generates a custom slice with a random number of extra toppings.

- **Topping Selection**: For custom orders, the number of toppings is determined by a probability distribution (e.g., 1/3 chance for no extras, 1/4 for one, etc.). The specific toppings chosen are weighted by their "Base Popularity" score.

- **Order Total Calculation**: The final price is calculated by adding the base slice price, the price of each added topping, and the price of a pop can if the 25% purchase chance succeeds.

- **Resource Consumption**: The system deducts all required ingredients (dough, sauce, cheese, toppings) and supplies (one napkin, one plate) from the player's inventory. For each slice sold, +0.125 units are added to the recycling meter.

- **Finalization**: The player's cash is increased by the order total, sales counters are updated, and a message detailing the sale is added to the business log.

### 3.4 Production & Crafting
- **Dough Making**: How do players create dough?
Dough is the absolute foundation for making pizza; players cannot sell anything without it. The creation process is a manual action that players must strategically manage.

**The Crafting Loop:**
- **Get Flour**: First, the player must purchase flour from the inventory. The crafting recipe is a simple one-to-one conversion: 1 unit of Flour creates 1 unit of Dough.

- **Make Dough Action**: The player clicks the "Make Dough" button in the Actions panel. The moment the button is clicked, 1 unit of Flour is consumed from the player's inventory.

- **Wait for it**: The button transforms into a progress meter, disabling the action while it runs. The base crafting time is 10 seconds, but this duration is reduced by 1 second for every Skill level the player has gained.

- **Dough is made**: Once the timer completes, +1 Dough is added to the player's inventory, and a confirmation message appears in the business log.

**Strategic Considerations:**
- **Yield**: Each unit of dough the player makes is enough for 8 pizza slices.

- **Spoilage**: Any dough left over at the end of the day spoils and is completely lost. The dough meter resets to zero, forcing players to carefully plan their daily production against their expected sales.

- **Storage Limit**: The player's ability to stockpile dough is limited by their current Serving Capacity. Players cannot create more dough than they can theoretically use in a single day, preventing them from preparing too far in advance.

- **Ingredient Management**: How do ingredients work?
Ingredient management is a core part of the game's economy and progression. Ingredients are divided into three main categories—Base Ingredients, Toppings, and Supplies—all of which are purchased from the inventory panel during the Management Phase. The system is designed for easy modification, with all ingredient attributes (price, unlock levels, effects, etc.) defined in external data tables that a developer can easily tweak for balancing.

**How they work:**

**Base Ingredients**: These are the foundational items required to make any pizza.
- **Types**: Flour, Sauce, and Cheese.
- **Usage**: They are always unlocked from the start of the game. A specific amount of each is required to start a Day Cycle, and a smaller amount is consumed for every single slice sold.

**Toppings**: These are the primary drivers of variety and value.
- **Unlocking**: Toppings are unlocked as the player's Player Level increases. Each topping has a specific level requirement.
- **Pricing**: The purchase price for each topping is listed in its data table. Some premium toppings also have an "Ingredient Price Premium" that adds to the final sale price of a slice.
- **Consumption**: A fixed amount of each topping is consumed per slice, as defined in the data tables.
- **Popularity**: Each topping has a "Base Popularity" score. This score is used in the Quality Score calculation and also influences the probability that a customer will choose that specific topping for a custom order. This makes popular toppings more valuable for driving sales.
- **Recipes**: Unlocking the right combination of toppings automatically discovers new Recipes, which provide significant bonuses.

**Supplies**: These are consumable items that provide passive bonuses or are required for certain actions.
- **Types**: Includes items like Napkins, Paper Plates, Pop Cans, and Pizza Boxes.
- **Effects**: Supplies like napkins and plates provide a multiplier to the Quality Score Influence when in stock but add to the Disgust Score if they run out. Pop cans offer an additional revenue opportunity, and Pizza Boxes are required for the delivery system.

- **Recipe System**: How do recipes work? How are they unlocked?
The Recipe System rewards players for discovering specific combinations of toppings, providing significant bonuses to their business. The system is designed to be easily managed by a developer, with all recipe data and mechanics defined in an external file that can be tweaked for balancing.

**How they are unlocked:**

**Automatic Discovery**: Recipes are not purchased or researched directly. Instead, a recipe is automatically discovered and unlocked the moment the player has all of its required toppings available in their unlockedToppings list.

**Triggered by Progression**: This check for new recipes is triggered every time the player unlocks a new topping, which typically happens when they gain a Player Level. This creates a satisfying cascade effect where leveling up can lead to unlocking a new topping, which in turn discovers a new recipe, providing immediate bonuses.

**Player Notification**: When a new recipe is discovered, the player is notified with a toast notification (e.g., "New Recipe Discovered!") and a message in the business log.

**How they work:**

**Quality Score Boost**: The primary function of a recipe is to provide a significant, permanent boost to the player's Quality Score. Each unlocked recipe has a qualityScoreEffect value (e.g., +0.12, +0.15) which is added to the "Quality Score Influence" calculation, making customers more likely to buy a slice.

**Reputation Bonus**: Some recipes also provide a direct bonus to the player's Reputation score.

**Influence Customer Choice**: Once a recipe is unlocked, customers become more likely to order a slice with that specific combination of ingredients. This is often more profitable than custom orders, as recipes are guaranteed to include multiple toppings.

**Unlocks Delivery Options**: The Delivery system, a major late-game feature, relies exclusively on recipes. All whole pizzas sold for delivery must be of a specific, unlocked recipe.

---

## 4. UPGRADES & IMPROVEMENTS

### 4.1 Kitchen Upgrades
- **What do Kitchen Upgrades do? How do they differ?**
Kitchen Upgrades are improvements focused on the operational and food production aspects of the Pizza Place. They are essential for enhancing efficiency, ensuring food safety, and improving the quality of the pizza itself. These upgrades are purchased with cash and become available sequentially as the player gains levels.

Like other game elements, the specific attributes for each upgrade (e.g., price, effects, unlock level) are managed in an external data file, allowing a developer to easily tweak and balance them.

**Key Effects of Kitchen Upgrades:**

**Disgust Reduction**: Many kitchen upgrades, such as the "Clean Microwave" or "Grease Trap," directly reduce the shop's "Disgust" score, improving the cleanliness of the operation.

**Reputation Boost**: Some upgrades, like the "Actual Oven" or "Health Inspector Poster," provide a bonus to Reputation, helping to attract more customers.

**Efficiency Gains**: Upgrades like the "Secondhand Mixer" or "Rolling Dough Cart" increase the speed of manual dough crafting, saving the player valuable time.

**Health & Safety Improvements**: Certain items, such as the "Oven Thermometer" or "Commercial Sink," can increase the player's Health or reduce the rate of daily health loss.

**Quality Score & Sales Boost**: A few key upgrades, like the "Real Knife Set" or "Dough Fermentation Bin," provide a direct bonus to the Quality Score, increasing the chance that a customer will buy a slice.

**Capacity Increases**: Some upgrades can increase the player's Serving Capacity or Pop Capacity, allowing them to serve more customers or hold more supplies.

**Current Upgrades are in @upgrades.md**

### 4.2 Restaurant Upgrades
- **What do Restaurant Upgrades do? How do they differ?**
Restaurant Upgrades are focused on the customer-facing environment of the Pizza Place. Unlike Kitchen Upgrades which improve back-of-house operations, these enhancements are all about improving the shop's ambiance, appearance, and public image to directly influence customer perception and foot traffic.

As with other game elements, the specific attributes for each upgrade (e.g., price, effects, unlock level) are managed in an external data file, allowing a developer to easily tweak and balance them.

**Key Effects of Restaurant Upgrades:**

**Reputation & Traffic Boost**: The primary purpose of most restaurant upgrades is to directly boost Reputation, which in turn attracts more Potential Customers. Examples include the "Hand Made Sign" or the "Pizza Place Banner."

**Disgust Reduction**: Improving the look of the restaurant, for example by getting a "Repaired Roof" or "Tiled Floor," can reduce the overall "Disgust" score.

**Health & Morale Boost**: Some upgrades that improve the environment, like fixing the roof or installing proper lighting, can provide a bonus to the player's Health.

**Passive Bonuses**: Certain upgrades provide unique passive effects, such as the "Pop Display Cooler" increasing the chance a customer buys a pop, or the "Community Tip Jar" increasing the chance of receiving tips.

### 4.3 Perks
- **What are perks? How do they work?**
Perks are a special category of upgrade that provide powerful, unique abilities that can significantly alter gameplay strategy. Unlike the incremental improvements from most Kitchen and Restaurant upgrades, Perks often unlock entirely new game mechanics or provide substantial, game-changing bonuses.

They are purchased with cash from the "Perks" tab in the Improvements panel and become available as the player reaches specific levels. Like other upgrades, they are lost when the player Prestiges, making them a key strategic choice for each individual run.

**Examples of Perks:**

**Gym Membership**: Increases the effect of the "Lift Weights" action, doubling the rate at which the player gains permanent Skill points.

**Delivery Drivers**: Unlocks the entire Pizza Delivery system, allowing the player to sell whole pizzas for much higher revenue. This also increases the daily wage cost for all staff members.

**Accounting Software**: Adds more detailed financial information to the Daily Summary, including a profit breakdown (revenue minus expenses) and a list of the day's top 5 most popular toppings.

**Perks are also stored in a file where the dev can easily make tweaks.**

### 4.4 Upgrade Effects
- **What do upgrades actually do?**
Upgrades are permanent improvements purchased with cash that provide direct, tangible bonuses to the business. They are the primary way players invest their earnings to scale their operation and overcome challenges within a single run. The effects of upgrades are diverse and target specific aspects of the game's core systems.

**Key types of effects:**

**Economic Bonuses**: Directly impact the player's bottom line by increasing income or reducing costs. Examples include the "Pop Display Cooler," which increases the chance of a pop sale, or the "Oven Thermometer," which reduces the rate of daily health loss, saving money on "Order Pizza" actions.

**Efficiency Gains**: Improve the speed or output of player actions. Upgrades like the "Secondhand Mixer" or "Rolling Dough Cart" increase the speed of dough crafting, allowing the player to prepare more efficiently.

**Quality & Reputation Boosts**: Enhance the customer-facing aspects of the business. Upgrades like the "Hand Made Sign" provide a direct boost to Reputation, while items like the "Dough Fermentation Bin" improve the Quality Score, increasing the likelihood of a sale.

**Disgust Reduction**: Improve the cleanliness and presentation of the shop. Upgrades like the "Grease Trap," "Bucket and Mop," or "Tiled Floor" directly subtract points from the "Disgust Score," making the business more appealing to customers.

**Capacity Increases**: Expand the operational limits of the business. The "Reclaimed Prep Table" adds to the player's Serving Capacity, while the "Repurposed Mini Fridge" increases Pop Capacity.

- **How do they change gameplay?**
Upgrades fundamentally change gameplay by altering the player's strategic priorities and alleviating core pressures.

**Shifting Focus**: Early-game upgrades focus on survival and basic functionality, like reducing Disgust and gaining small Reputation boosts. Mid- and late-game upgrades shift the focus towards efficiency, scaling, and maximizing revenue through powerful bonuses to the Quality Score and Serving Capacity.

**Automating or Reducing Grinding**: Efficiency upgrades, particularly those that speed up dough making, directly reduce the amount of time players must spend on manual, repetitive tasks. This frees up the player's attention for more strategic decisions.

**Unlocking New Strategies**: Purchasing a series of related upgrades can enable new, more effective strategies. For example, investing heavily in Reputation-boosting restaurant upgrades allows for a high-traffic strategy that relies on serving a large volume of customers.

- **What makes upgrades feel meaningful?**
The upgrade system is designed to make each purchase a meaningful choice through several key factors:

**Clear Problem-Solving**: Upgrades are designed to be direct solutions to the player's current problems. If the player is constantly being penalized by a high "Disgust Score," buying a "Bucket and Mop" provides an immediate and satisfying fix. If sales are slow, an upgrade that boosts the Quality Score offers a clear path to improvement.

**Strategic Trade-Offs**: Because cash is a limited resource, every upgrade purchase is a trade-off. The player must constantly decide between investing in a long-term, expensive upgrade that will provide future benefits versus buying cheaper ingredients needed to survive the next few days. This creates constant tension and requires strategic planning.

**Visible Progression**: The effects of upgrades are immediately visible to the player. A Reputation boost results in more customers the very next day. A Disgust reduction changes the odds of customer outcomes in real-time. This direct feedback makes the investment feel impactful and rewarding.

**Synergistic Effects**: Upgrades are designed to work together. Combining a Kitchen Upgrade that improves the Quality Score with a Restaurant Upgrade that boosts Reputation creates a powerful synergy that leads to more customers who are also more likely to buy, accelerating the player's progress significantly.

### 4.5 Upgrade Balance
- **How do we price upgrades?**
Upgrade pricing is based on a combination of their immediate impact, their position in the progression curve, and their strategic value. The goal is to make every purchase feel like a significant, calculated investment.

**Unlock Level as a Baseline**: The primary factor determining price is the Player Level at which an upgrade unlocks. Early-game upgrades that solve immediate problems (e.g., the first "Clean Microwave" to reduce Disgust) are inexpensive to ensure the player can overcome initial hurdles. Late-game upgrades that provide powerful, scaling bonuses are significantly more expensive, acting as major cash sinks for an established business.

**Impact vs. Cost**: The price of an upgrade is directly proportional to the magnitude of its effect. A simple +1 Reputation boost will be cheap, while an upgrade that adds +10 to Serving Capacity or unlocks a new system will carry a premium price tag.

**Strategic Value**: Upgrades that enable new strategies or provide unique passive bonuses (like Perks) are priced based on their potential to fundamentally change how the player approaches the game, rather than just their raw numerical bonus. For example, "Accounting Software" is priced not just for the information it provides, but for its value in enabling more informed strategic decisions.

- **What creates interesting choices?**
Interesting choices are created by forcing players to make strategic trade-offs based on their current situation and long-term goals. The upgrade system avoids having a single "best" path and instead encourages situational decision-making.

**Competing Priorities**: Players must constantly choose between solving different problems. Do they spend cash on a Kitchen Upgrade to reduce their rising "Disgust Score," or a Restaurant Upgrade to boost their "Reputation" and attract more customers? One choice improves conversion with existing traffic, while the other increases traffic, creating a meaningful strategic dilemma.

**Opportunity Cost**: Since cash is limited, every purchase has an opportunity cost. Investing in an expensive, long-term efficiency upgrade like the "Secondhand Mixer" means forgoing several cheaper, short-term upgrades that could provide immediate relief. This forces players to commit to a strategy, whether it's slow-and-steady growth or aggressive expansion.

**Synergistic Pathways**: Upgrades are designed to have synergistic effects. A player might choose to invest heavily in a "Quality Score" pathway by combining the "Dough Fermentation Bin" with the "Real Knife Set." Another player might focus on a "High Traffic" strategy by combining the "Pizza Place Banner" with other reputation-boosting upgrades. This allows for different viable playstyles to emerge.

- **How do we prevent power creep?**
Power creep is managed through a system of scaling costs, systemic pressures, and hard resets that ensure the game remains challenging and engaging even as the player becomes more powerful.

**Scaling Costs and New Challenges**: As the player's business grows, new systems introduce new costs. Hiring staff is essential for increasing Serving Capacity, but it also introduces the recurring daily expense of Staff Wages. Unlocking the powerful Delivery system via a Perk also permanently increases the cost of all staff members, creating a natural economic check on this power boost.

**Constant Systemic Pressure**: Core mechanics act as a constant drain on resources, preventing the player from becoming too comfortable. Health depletes daily, requiring cash to restore. The Disgust Score constantly threatens to rise from unsold recyclables and lack of supplies. These systems ensure that the player must continue to invest in maintenance and not just pure growth.

**The Prestige Reset**: The ultimate defense against power creep is the Prestige system. It allows a player to reset a successful run in exchange for very specific, limited permanent bonuses (like a boost to one topping). By resetting most of the player's progress—upgrades, cash, level—it ensures the core challenge of building the business from the ground up remains intact on subsequent playthroughs.

**Hard Caps**: The game includes hard caps on key metrics to prevent infinite scaling. There is a maximum of 10 staff members, and the number of potential customers is capped at 100 per day. These limits ensure that no single strategy can be exploited to break the game's economic balance.

---

## 5. EVENTS & CONTENT

### 5.1 Event Types
- **Random Events**: What kinds exist? How do they trigger?
Random Events are spontaneous occurrences designed to keep gameplay fresh and unpredictable. They introduce temporary challenges or opportunities that the player must adapt to.

**How they trigger:**

**Trigger Chance**: Random events have a 1 in 10 chance of occurring at the end of a day.

**Cooldown Period**: To prevent them from happening too frequently, a random event can only trigger if at least 5 days have passed since the last one.

**Likelihood Ranking**: Events are ranked by likelihood from 1 (most likely) to 3 (least likely) to control the frequency of more impactful events.

**What kinds exist:**
Random events fall into several categories based on their effects:

**Economic Events**: These directly impact the player's finances or the cost of goods.
Examples: "Scratch Ticket Win" (+45 cash), "Napkin Sale" (reduces napkin price by half), "Boss Appreciation Day" (+$25 cash for each staff member).

**Customer Traffic Events**: These temporarily alter the number of potential customers for the next day.
Examples: "Marathon Passing By" (+10 potential customers), "Rain Day" (potential customers halved), "Big Game Day" (+10 potential customers).

**Reputation Events**: These provide a one-time boost or penalty to the player's Reputation score.
Examples: "Internet Buzz" (+1 Reputation), "Good TV Interview" (+5 Reputation), "Free Pizza Day" (-5 Reputation).

**Quality Score Events**: These events can provide temporary boosts to the player's Quality Score.
Examples: "Lucky Coin" (doubles the Quality Score influence for the next day), "Viral Ingredient" (boosts the popularity of a random ingredient).

**Resource Events**: These can grant or remove resources and supplies.
Examples: "Munchies" (lose 50% of a random ingredient), "Limited Edition Pop" (+12 Pop and doubles pop buy chance for a day), "Bathroom Discovery" (+10 cash).

**Health & Disgust Events**: These affect the player's core stats.
Examples: "Napkin Poem" (+10 Health), "Vaccine Regret" (-10 Health), "Plumbing Mishap" (+3 Disgust).

**See @events-random.md for list of events**

- **Scheduled Events**: What are these? When do they happen?
- **Customer Events**: How do these work during day cycles?
Customer Events are the core gameplay interactions during the 20-second Day Cycle Phase. Each event represents a potential customer visiting the shop and follows a precise sequence to determine the outcome.

**1. Customer Spawning**

**Determine Volume**: At the start of the day, the game calculates the total number of Potential Customers who will visit. This number is primarily determined by the formula: 3 + current Reputation score, plus any temporary bonuses from events.

**Schedule Arrivals**: The game schedules these customer events to occur at random intervals throughout the 20-second cycle, ensuring a minimum time gap between each arrival to feel natural.

**2. The Arrival Sequence**

When a scheduled customer event triggers, it proceeds through the following checks:

**Serving Capacity Check**: The first and most important check is against the business's Serving Capacity. If the number of slices already sold that day has reached the capacity limit, the event ends immediately. The customer becomes an Impatient Customer and is turned away, resulting in a lost sale.

**Quality Score Calculation**: If there is capacity, the game performs the full Quality Score calculation to determine the real-time probabilities of the customer being Delighted, Satisfied, Neutral, or Disgusted.

**Outcome Determination**: Based on those probabilities, a random roll determines the customer's final type.

**3. Finalizing the Event**

**No Purchase**: If the outcome is "Neutral" or "Disgusted," the event concludes with no sale. A "Disgusted" customer will also reduce the player's Reputation by 1.

**Purchase Occurs**: If the outcome is "Delighted" or "Satisfied," the game proceeds to the "Order Fulfillment" step.

**4. Order Fulfillment (The Sale)**
- **Order Composition**: The system first tries to sell the customer a slice of an unlocked, makeable Recipe. If no recipes can be made from the current inventory, it generates a custom slice with a random number of extra toppings.

- **Topping Selection**: For custom orders, the number of toppings is determined by a probability distribution (e.g., 1/3 chance for no extras, 1/4 for one, etc.). The specific toppings chosen are weighted by their "Base Popularity" score.

- **Order Total Calculation**: The final price is calculated by adding the base slice price, the price of each added topping, and the price of a pop can if the 25% purchase chance succeeds.

- **Resource Consumption**: The system deducts all required ingredients (dough, sauce, cheese, toppings) and supplies (one napkin, one plate) from the player's inventory. For each slice sold, +0.125 units are added to the recycling meter.

- **Finalization**: The player's cash is increased by the order total, sales counters are updated, and a message is logged detailing the successful sale.

**See @events-scheduled.md for events list**

### 5.2 Content Variety
- **What creates replayability?**
Replayability is driven by a combination of roguelike meta-progression and the inherent variability of each run. No two playthroughs will be exactly the same, encouraging players to try new strategies and goals.

**Meta-Progression**: The core of long-term replayability lies in the systems that make the player permanently stronger with each run.

**Prestige**: This is the primary replayability driver. Resetting a successful run allows the player to permanently boost a single topping's popularity and unlock it from the start of all future runs. This choice fundamentally alters the optimal strategy for subsequent playthroughs, encouraging players to experiment with different boosted toppings.

**Skill Level**: As a persistent stat that carries over through all resets, the player's investment in manual tasks like "Make Dough" and "Lift Weights" provides a permanent and satisfying reduction in grind, making each new run feel faster and more efficient.

**Game Over Bonus**: Even failure is rewarded. The stacking flour price discount gained from Game Overs ensures that even unsuccessful runs contribute to making the next attempt slightly easier, reducing frustration and encouraging another try.

**Per-Run Variability**: Each individual run feels unique due to procedural and strategic elements.

**Random Events**: The large pool of random events ensures that players will face different challenges and opportunities each time they play. One run might be defined by a lucky "Scratch Ticket Win," while another is hampered by an early "Plumbing Mishap."

**Strategic Choices**: The player must adapt their strategy based on the events that occur and their own financial situation. The choice of which upgrades to prioritize, when to hire staff, and whether to risk high Disgust for a "Recyclethon" bonus creates a different narrative arc for each playthrough.

- **How do we keep things fresh?**
The game is designed to stay fresh over long play periods through systems of discovery, surprise, and expanding choice.

**Event Systems**: The combination of a deep pool of Random Events and story-driven Scheduled Events ensures a constant stream of new narrative moments and gameplay modifiers. Players will not see every event in a single run, and the random nature of their appearance keeps the day-to-day experience from becoming monotonous.

**Discovery and Unlocking**:

**Recipe System**: The process of discovering new recipes by unlocking the right combination of toppings feels like solving a puzzle. Each new recipe provides an immediate, tangible reward and a new option for high-value sales.

**Staggered Upgrades**: Upgrades and toppings are unlocked sequentially as the player gains levels. This drip-feed of new content ensures there is always a new tool, strategy, or goal just around the corner, preventing the player from feeling like they have seen everything too quickly.

- **What's the content pipeline?**
The game is architected to make adding new content straightforward, allowing for easy expansion and balancing by a developer. The content pipeline is built around modular, external data files.

**Data-Driven Design**: Nearly all game content is defined in tables within easily modifiable files (like .js or .json files), rather than being hard-coded into the game logic. This includes:

**Upgrades and Perks**: A new upgrade can be added simply by creating a new entry in the upgrades table with its name, description, price, unlock level, and effects.

**Toppings and Ingredients**: New ingredients can be added to the game by defining their properties in the corresponding data tables.

**Recipes**: New recipes can be created by defining a new combination of existing ingredients in the recipes table.

**Events**: Both random and scheduled events are defined in data tables. A developer can add a new event by specifying its message, trigger condition, effect, and other parameters, without needing to alter the core event system logic. This makes it simple to add dozens of new events to increase variety over time.

**Hidden Strategy**: Players will discover that some toppings/recipes are much more valuable than others. For example, unlocking Mushroom and Pepperoni is the easiest first recipe to unlock, and both pepperoni and mushroom are already popular, so figuring out which ingredients hold more value and contribute to recipes is a hidden strategy that adds depth to the progression system.

### 5.3 Story & Theme
- **What's the narrative/theme?**
The core narrative follows a journey of personal and professional redemption. The player character begins at a low point, waking from a "deep food coma" surrounded by pizza boxes, and decides to turn this rock-bottom moment into an opportunity by building a pizza business from the literal scraps around them.

The central theme is about finding meaning and success through honest work and creating something of value for a community. It contrasts the often-impersonal nature of large-scale industry with the tangible, rewarding experience of running a small, honest business within the confines of an oppressive capitalist system. It's a story of making something from nothing, or recognizing the potential in oneself even if the economy at large sees you as just another cog in the machine—from a single used microwave and a cardboard stand to a beloved local institution.

- **How does it enhance gameplay?**
The narrative provides a strong context and motivation for the core gameplay loops.

**Initial Struggle**: The starting scenario, where the player is broke and must recycle pizza boxes to get their initial cash, immediately grounds the resource management mechanics in a story of survival. Every dollar earned feels crucial because the narrative establishes the player is starting from nothing.

**Sense of Accomplishment**: The journey from a "shack of greasy boxes" to a "Regional Treasure" or "UNESCO Slice Site" gives the progression systems a meaningful narrative arc. Upgrading from a cardboard sign to a neon one isn't just a stat boost; it's a visible symbol of the player's success story.

**Emotional Investment**: The small story beats, like writing a jingle that goes viral or getting a shoutout on a local podcast, make the world feel alive and reactive to the player's actions, fostering a deeper emotional connection to their business.

- **What's the tone/style?**
The tone is a blend of nostalgic, minimalist, and slightly dark, quirky humor, inspired by classic PC business simulation games.

**Aesthetic**: The UI is designed with a retro, "haptic" aesthetic, using pixel-style fonts like VT323 to evoke a sense of classic PC gaming.

**Humor**: The writing often has a dry, witty, and sometimes bleakly humorous tone. Events like finding a banjo in the bathroom, a customer getting a tattoo of the pizza place, or local kids starting urban legends about the dough give the game a unique and memorable personality.

**Minimalist**: The game focuses on core mechanics and avoids overly complex visuals, letting the text-based events and the player's imagination drive the narrative.

- **How does this reflect the "system is rigged" theme?**
The game reflects this theme by embedding systemic challenges into the gameplay that represent the external, often unfair, pressures faced by individuals who recognize their internal value and the value of their community in face of a capitalist system that seeks to degrade these things.

**Uncontrollable Setbacks**: Events like the "Rats" suddenly destroying the player's entire cheese inventory, or a "Plumbing Mishap" increasing the Disgust score for reasons outside the player's control, mirror real-world disasters that can cripple a business overnight, and due to the game over mechanic, they very well might. The system is harsh.

**Predatory Systems**: The "Pay Debt" scheduled event, which forces the player to pay $200 as soon as they become remotely successful, represents inescapable financial burdens like credit card debt or predatory loans that can punish early growth.

**Bureaucratic Obstacles**: The "Busted" event, where police fine the player for "selling pizza out of a box on the corner," reflects the regulatory hurdles and systemic biases that can target small, unconventional businesses. This event notably stops occurring once the player achieves a high enough "Reputation," suggesting that success brings a level of legitimacy that protects them from such harassment.

---

## 6. USER INTERFACE & EXPERIENCE

### 6.1 Visual Design & Aesthetic
- **What's the visual style?**
The visual style is a minimalist, retro, "haptic" aesthetic inspired by classic PC browser and tycoon games. The design uses hard-edged buttons, flat colors, and specific pixel-style fonts (VT323 for main text, and other for headers) to create a nostalgic, clean, and highly readable interface. The focus is on clear communication through UI components and text rather than complex graphics or animations.

- **What are the visual inspirations?** (other games, art styles, etc.)
The visual and experiential inspirations are drawn directly from classic business simulation and incremental games:

**Business Simulations**: Lemonade Stand (old-school PC browser style)

**Incremental/Idle Games**: Universal Paperclips for its minimalist browser-based style

**UI Panel Components**: The interface is organized into several key panels:
- **Status Panel**: Displays cash, reputation, price per slice, level, quality score, disgust score
- **Upgrades Panel**: Kitchen, restaurant, and perks sections with tabbed interface
- **Inventory Panel**: Base ingredients, toppings, and supplies tables
- **Operations Panel**: Day start/end control, progress bar, action buttons, hire/fire staff
- **Progress Panel**: Meter bars for next level, dough, health, recycling
- **Recipes Panel**: Recipe discovery and management
- **Business Log**: Real-time event feed and daily summaries

- **How do we communicate the scrappy, struggling business feel?**
The "bootstrapping" theme is communicated through the narrative and the specific content of early-game upgrades.

**Opening Narrative**: The game starts with the player character at a low point, deciding to build a Pizza Place out of literal garbage—a pile of empty pizza boxes.

**Early Upgrades**: The initial upgrades reflect this makeshift, DIY ethos. Players don't start by buying professional equipment, but by "Reinforcing Cardboard with Duct Tape" or creating a "Hand Made Sign". The first major kitchen appliance is a "Clean Microwave," not an oven.

**Progression as Narrative**: The visual journey of the upgrades tells the story. Players progress from a "Folding Table" and "upside-down buckets" for chairs to "Real Chairs" and an "Honest-To-God Prep Counter". This progression from junk to professional equipment makes the player's success feel earned and visually reinforces their journey from a scrappy underdog to a legitimate business owner.

- **What's the colour palette?**
The colour palette is designed to evoke a nostalgic, warm, and slightly quirky aesthetic that matches the game's retro business simulation theme. The palette uses pizza-themed naming conventions to maintain thematic consistency.

**Core Colours:**

**Background Ivory (#F8F8F8)**: Soft, off-white canvas for main backgrounds, providing a warm, non-harsh base that's easy on the eyes during extended play sessions.

**Panel White (#FFFFFF)**: Clean, pure white for card and panel backgrounds, creating clear visual separation and maintaining readability.

**Text Dark Charcoal (#1E1E1E)**: High-contrast dark grey for all text content, ensuring excellent readability with the VT323 pixel font while maintaining the retro aesthetic.

**Crust Light Beige (#FFF1E0)**: Neutral, warm beige for buttons, meters, and subtle backgrounds. This colour provides a natural, earthy feel that complements the pizza theme.

**Accent Colours:**

**Sauce Soft Red (#FF6347)**: A warm, tomato-inspired red for alerts, active buttons, and error states. This colour draws attention without being harsh or aggressive.

**Cheese Soft Yellow (#FFEA61)**: A cheerful, golden yellow for progress fills, highlights, and success indicators. This colour conveys positivity and achievement.

**Pepperoni Rosy (#D87093)**: A muted, sophisticated pink for secondary accents, notifications, and selected states. This colour adds personality without being overwhelming.

**Basil Soft Green (#6AAA64)**: A natural, calming green for positive indicators and success messages. This colour reinforces the theme of growth and improvement.

**Usage Guidelines:**

**Layout Structure**: Background Ivory for main backgrounds, Panel White for UI cards, and Text Dark Charcoal for all content.

**Interactive Elements**: Crust Light Beige for default buttons, Sauce Soft Red for active/hover states, with appropriate text contrast.

**Progress & Meters**: Different accent colours for various progress types—Crust Beige for dough, Cheese Yellow for success, Pepperoni Rosy for health, and Basil Green for positive actions.

**Feedback & States**: Sauce Red for errors/alerts, Basil Green for success, Cheese Yellow for highlights, and Pepperoni Rosy for secondary information.

This palette creates a cohesive, warm, and accessible visual experience that supports both the nostalgic aesthetic and the game's functional requirements.



### 6.2 Information Architecture
- **What information do players need to see?**
Players need access to several categories of information to make informed decisions and track their progress:

**Core Status Information**: Cash, reputation, level, and price per slice are the most critical metrics that determine immediate gameplay decisions. These should be prominently displayed and easily readable at all times.

**Resource Management**: Current inventory levels for ingredients and supplies, dough production status, and recycling accumulation are essential for planning the next day cycle.

**Progress Tracking**: Health, skill level, and progress toward the next level help players understand their long-term advancement and survival status.

**Business Performance**: Quality score and disgust score directly impact customer behavior and should be visible to help players understand why sales are succeeding or failing.

**Operational Controls**: Day cycle status, available actions, and staff management options need to be easily accessible during both management and active phases.

- **How do we organize the UI?**
The UI is organized around the core gameplay loop and the player's decision-making process:

**Status Panel**: Contains the most critical information players need at a glance—financial status, reputation, and key metrics that affect immediate decisions.

**Operations Panel**: Houses all active controls and actions, organized by when they're available (management phase vs. day cycle). This includes the day start/end controls, action buttons, and staff management.

**Progress Panel**: Displays meter bars and progress indicators that show the player's advancement and resource status. These provide immediate visual feedback on the current state of the business.

**Inventory Panel**: Organizes all purchasable and craftable items into logical categories (base ingredients, toppings, supplies) with clear pricing and quantity information.

**Upgrades Panel**: Separates improvements by their function (kitchen operations, restaurant appearance, special perks) to help players understand what each upgrade affects.

**Business Log**: Provides a chronological feed of events, decisions, and outcomes that helps players understand the consequences of their actions and the narrative progression.

**Recipes Modal**: Shows discovered recipes and their requirements, helping players plan their ingredient purchases and understand the value of different topping combinations.

- **What's the priority hierarchy of information?**
Information is prioritized based on frequency of use and critical decision-making needs:

**Tier 1 (Always Visible)**: Cash, reputation, level, day cycle status, and health. These are the most frequently referenced metrics that affect nearly every decision.

**Tier 2 (Frequently Accessed)**: Inventory levels, quality score, disgust score, and available actions. Players check these regularly to plan their next moves and understand current performance.

**Tier 3 (Contextual)**: Upgrade details, recipe information, and detailed progress bars. These are accessed when making specific decisions about investments or long-term planning.

**Tier 4 (Historical)**: Business log entries and detailed statistics. These provide context and narrative but aren't needed for immediate decision-making.

This hierarchy ensures that the most critical information is always accessible while keeping the interface clean and preventing information overload.

### 6.3 Interaction Design
- **How do players interact with the game?**
Players interact with the game primarily through a point-and-click interface, making direct decisions that influence the simulation. The interaction model is centered on clear, discrete actions rather than complex real-time control.

**Core Interaction**: The main interaction is through clicking buttons within the UI panels to perform actions like buying ingredients, making dough, hiring staff, starting the day, and purchasing upgrades.

**Phase-Based Interaction**: The type of interaction changes based on the game phase. The Management Phase allows for deep, untimed strategic interaction with inventory and upgrades. The Day Cycle limits interaction to a few quick, real-time actions like "Lift Weights" or "Recycle," shifting the player's role from manager to observer/reactor.

**Indirect Control**: Players exercise indirect control by setting up the conditions for success. They choose the upgrades and stock the ingredients, then witness the consequences during the automated Day Cycle, influencing outcomes through their preparation.

- **What should feel responsive?**
The interface must provide immediate and satisfying feedback to make the player feel connected to the cause-and-effect of their actions.

**Button States**: All buttons must have distinct and instant visual states for default, hover, active, and disabled. Disabled buttons should include tooltips explaining why they are unavailable (e.g., "Not enough cash").

**Progress Meters**: Actions that take time, like "Make Dough" or "Start Day," must feature smoothly animated progress bars on the buttons themselves, providing clear visual feedback on the remaining duration.

**Live Data Updates**: All core stats in the UI (Cash, Health, Reputation, etc.) must update instantly in response to game events.

**Notifications**: The game should use "toast" notifications for non-critical, positive feedback like "Game Saved" or "New Recipe Discovered," which appear and fade out smoothly.

- **How do we make the interface intuitive?**
The interface is made intuitive by prioritizing clarity, consistency, and guided discovery.

**Clear Information Hierarchy**: The UI is organized into logical panels, and information is prioritized into tiers. Critical, always-needed information (Cash, Health) is permanently displayed, while secondary information is neatly organized in context-specific panels, preventing information overload.

**Logical Grouping**: Related functions are grouped together. All purchasable items are in the Inventory and Upgrades panels, while all primary actions are in the Operations Panel. This consistent structure helps players build a mental map of the interface quickly.

**Guided Onboarding**: The tutorial sequence uses a "Call to Attention" state (a glowing or pulsing effect) to visually guide new players to the next required action, teaching the core loop organically without overwhelming text boxes.

**Descriptive Tooltips**: Tooltips are used to provide contextual information on hover, explaining what a stat means or why an action is unavailable. This allows players to learn at their own pace without cluttering the main interface.

### 6.4 Player & Navigation
- **How is the game screen organized?**

The game screen is organized into a compact, three-panel layout designed for clarity, efficiency, and playtesting convenience. The structure ensures all critical information and controls are always visible, with no vertical scrolling required on standard desktop resolutions.

**Header Bar (Meta & Dev Controls Only):**
- Contains only non-diegetic controls: [Menu], [Settings], [Help], and (in dev/playtest mode) [Debug Panel] and [Balance Panel].
- Debug and Balance open as modal overlays for playtesting and balancing, never disrupting the main UI.
- The game title is displayed at the left; all controls are right-aligned.

**Main Game UI (Three-Panel Layout):**

1. **Left Panel: Stats & Actions**
   - All core stats and player actions are grouped for quick reference and access.
   - **Stats Block:** Cash, Reputation, Level, Health, Disgust, Quality Score, Day Number, Price per Slice, Serving Capacity (arranged compactly in a grid or column).
   - **Actions Block:** Start/End Day, Make Dough, Recycle, Lift Weights, Order Pizza (buttons, phase-dependent).
   - **Staff Management:** Staff count, [Hire] and [Fire] buttons.
   - No scrolling required; all elements are visible at a glance.

2. **Center Panel: Business Log (Primary Focus)**
   - The Business Log is the visual and cognitive center of the UI, where the player's eyes naturally rest, especially during day cycles.
   - **Business Log:** Large, non-scrolling (shows most recent events, auto-scrolls to latest). Option to expand (modal or overlay) for reviewing full history or daily summaries. During Day Cycle, the log is visually emphasized (e.g., subtle highlight or border).
   - **Daily Summary:** Appears at the top or as a sticky entry after each day.

3. **Right Panel: Ingredients, Upgrades, Recipes (Tabbed)**
   - All management and exploration panels are here, with tabs for quick switching: Ingredients | Upgrades | Perks | Recipes.
   - **Ingredients Tab:** Compact, paginated or collapsible table for all ingredients/toppings (no vertical scroll needed). Columns: Name, Stock, Price, Buy (x1, x5, x10, custom).
   - **Upgrades/Perks/Recipes Tabs:** Compact lists, collapsible sections, or paginated if needed.

**Layout & Compactness Principles:**
- No vertical scrolling in the main game view on standard desktop resolutions (e.g., 1080p).
- Business Log is the central, eye-level panel—player's attention is always on the action.
- Stats & Actions are grouped and always visible, never hidden or collapsed.
- Ingredients/Upgrades/Recipes are accessible but secondary, in a right-side tabbed panel.
- Header is reserved for meta and dev controls only.

**Wireframe (Textual, Compact):**
```
+---------------------------------------------------------------+
| Pizza Place Tycoon   [Menu][Settings][Help][Debug][Balance]   |
+---------------------------------------------------------------+
| [Stats & Actions] |      [Business Log]      | [Tabbed Panel] |
|-------------------+-------------------------+----------------|
| Cash: $___        | [Recent events here]    | [Ingredients]  |
| Rep: ___          | [Auto-scrolls to latest]| [Upgrades]     |
| Level: ___        | [Sticky daily summary?] | [Perks]        |
| Health: ___       |                         | [Recipes]      |
| Disgust: ___      |                         |                |
| Quality: ___      |                         |                |
| Day: ___          |                         |                |
| Price/Slice: ___  |                         |                |
| Capacity: ___     |                         |                |
|-------------------|-------------------------|----------------|
| [Start/End Day]   |                         |                |
| [Make Dough]      |                         |                |
| [Recycle]         |                         |                |
| [Lift Weights]    |                         |                |
| [Order Pizza]     |                         |                |
| Staff: __         |                         |                |
| [Hire] [Fire]     |                         |                |
+---------------------------------------------------------------+
```

**Key Features for Playtesting & Usability:**
- Debug/Balance Panels: Open as modals from the header, never disrupt main UI.
- No vertical scroll: Use compact tables, pagination, or collapsible sections for large lists.
- Business Log as focal point: Centered, large, and visually distinct.
- All actions and stats always visible: No hidden or collapsed controls.
- No emojis in the UI.

---

## 7. TECHNICAL CONSIDERATIONS

### 7.1 Performance
- **What are the performance requirements?**
Game should perform on all most common desktop web browsers. Focus on simplicity so that it runs as smoothly as any standard web page.

  - The game must load quickly and remain responsive, even on lower-end hardware and older browsers.
  - Avoid heavy frameworks or unnecessary dependencies; prioritize lightweight, vanilla JavaScript/TypeScript and efficient DOM updates.
  - All UI updates (stats, logs, tables) should be instant and smooth, with no perceptible lag.
  - Animations and transitions should be subtle and never impact performance.
  - Asset sizes (images, fonts, etc.) should be minimized and optimized for fast loading.
  - The game should degrade gracefully if advanced browser features are unavailable.

- **How do we handle save data?**
  - Save data should be stored locally in the player's browser using LocalStorage or IndexedDB for persistence between sessions.
  - Saving should be automatic (at the end of each day cycle) and require no user intervention.
  - Save data should be compact, human-readable (JSON), and versioned to allow for future migrations.
  - No server-side account or login is required; privacy and simplicity are prioritized.

- **What's the target platform?** (browser, mobile, etc.)
  - The primary target is desktop web browsers (Chrome, Firefox, Edge, Safari, etc.).
  - The UI must be fully responsive, adapting to different screen sizes and orientations for a smooth experience on tablets and mobile browsers.
  - Touch controls and larger tap targets should be supported for mobile usability.
  - All features and panels must remain accessible and usable without horizontal or vertical scrolling on standard devices.
  - Future ports to native mobile apps (using wrappers like Cordova or Capacitor) should be considered in the code structure, but are not a priority for v1.

### 7.2 Scalability
- **How do we add new content?**
  - All game content (Events, Recipes, Toppings, Upgrades, Perks, etc.) should be defined in external, human-readable data files (preferably JSON, but YAML or CSV are also acceptable if more convenient for editing).
  - Each content type should have its own dedicated file or directory (e.g., `events.json`, `recipes.json`, `toppings.json`, `upgrades.json`).
  - The game engine should load and parse these files at startup, allowing for hot-reloading or easy replacement during development.
  - Content files should be well-documented with comments or a separate schema/README to explain each field and its effect.
  - Adding new content should not require changes to core game logic—just update or add to the relevant data file.
  - Maintain a `roadmap.md` or similar file in the codebase to track future feature ideas, planned expansions, and content backlog. This helps ensure the codebase is built with extensibility in mind.

- **How do we balance the game?**
  - Implement an in-game Balance panel (accessible from the header in dev/playtest mode) that exposes all key balance parameters for live tweaking.
  - The Balance panel should allow editing of values such as: item prices, upgrade costs, level XP requirements, customer event probabilities, ingredient effects, and other tunable numbers.
  - Changes made in the Balance panel should update the game state in real time, without requiring a page reload.
  - Optionally, allow exporting/importing balance presets as JSON for sharing or backup.
  - All balance parameters should be stored in a central, versioned config file (e.g., `balance.json`) that is loaded at runtime and can be overridden by the Balance panel.
  - Document all tunable parameters and their effects to make balancing transparent and efficient for both developers and playtesters.
  - Consider logging all balance changes made during a session for later review and analysis.

### 7.3 Accessibility
- **How do we make the game accessible?**
  - Use high-contrast color schemes and ensure all UI elements meet or exceed WCAG AA standards for color contrast.
  - Choose clear, legible fonts (such as VT323 for retro style, with a fallback to a highly readable sans-serif) and ensure font sizes are large enough for comfortable reading on all devices.
  - All interactive elements (buttons, tabs, inputs) must be fully navigable via keyboard (Tab, Enter, Arrow keys) with visible focus indicators.
  - Provide descriptive alt text for all icons and non-text UI elements, and use ARIA labels/roles to support screen readers.
  - Ensure all critical information (stats, log entries, notifications) is accessible to screen readers and not conveyed by color alone.
  - Allow users to scale the UI (zoom in/out) without breaking layout or hiding content; support browser zoom and OS-level accessibility features.
  - Touch targets (buttons, toggles) should be large enough for comfortable use on mobile and tablet devices.
  - Avoid rapid flashing, excessive animation, or visual effects that could trigger photosensitivity issues.
  - Provide an "Accessibility" section in Settings where users can:
    - Toggle high-contrast mode
    - Adjust font size
    - Enable/disable animations
    - View keyboard shortcuts
  - Regularly test the game with accessibility tools (e.g., screen readers, keyboard-only navigation, colorblind simulators) to ensure compliance and usability.

- **What are the minimum requirements?**
  - The game must be playable and all features accessible using only a keyboard and screen reader.
  - All text must be readable at 125% browser zoom without loss of content or functionality.
  - The UI must remain usable and legible on small screens (mobile phones) and large screens (desktops/monitors).

- **How do we handle different devices?**
  - The UI must be responsive and adapt to different screen sizes and orientations.
  - Touch controls must be fully supported for all interactive elements.
  - Test on a range of devices (desktop, tablet, mobile) to ensure consistent accessibility and usability.

---

## 8. BALANCING & TUNING

### 8.1 Early Game
- **What's the onboarding experience?**
  The onboarding experience is a narrative-driven, interactive tutorial that blends story and mechanics seamlessly. The game opens with a strong thematic hook: the player character wakes up in a "deep food coma," surrounded by pizza boxes, and decides to build a business from this rock-bottom moment. This sequence immediately establishes the game's quirky, humorous tone and the core "scrappy underdog" theme. The initial state is intentionally challenging—the player has no cash and a full recycling meter—creating an immediate, solvable problem that introduces the core gameplay loop.

- **How do we teach mechanics?**
  Mechanics are taught organically through guided, interactive steps rather than passive text boxes or pop-ups.

  - **Guided Actions:** The tutorial uses a "Call to Attention" UI state (e.g., glowing or pulsing effect) to direct the player's focus to the next required action. It first prompts the player to Recycle to get their starting cash, then guides them to Order Pizza to understand health management, and finally directs them to purchase their first critical Upgrade (the microwave).
  - **Learning by Doing:** Players learn the core loop by performing actions and seeing immediate results—recycling gives cash, ordering pizza restores health, buying an upgrade unlocks new capabilities.
  - **Contextual Introduction:** Each mechanic is introduced with a brief narrative justification. The player recycles to "tidy up," orders pizza to "treat" themselves, and buys a microwave to "get serious" about pizza making. This ties the "why" of the story to the "how" of the gameplay.

- **What creates early engagement?**
  Early engagement is created by providing a clear initial problem, immediate and satisfying rewards, and a compelling narrative hook.

  - **Immediate, Solvable Problem:** Starting with zero cash but 100 recycling units creates an instant, clear goal: click the Recycle button. The large cash reward ($112) for this first action provides a powerful sense of accomplishment and immediately empowers the player.
  - **Rapid Progression Loop:** The first few day cycles are designed to be rewarding and fast-paced. The player quickly learns that surviving the 20-second day yields a reputation bonus, which brings more customers. This rapid feedback loop makes the "one more day" cycle addictive from the start.
  - **Narrative Hook and Humor:** The story of building a business from literal garbage, combined with the quirky humor of the event system (e.g., finding a banjo in the bathroom), creates an engaging and memorable world that encourages continued play.

### 8.2 Mid Game
- **What's the core gameplay loop?**  
  The core gameplay loop remains the Manage → Day → End-of-Day cycle, but the player's focus shifts from pure survival to strategic expansion and optimization. In the mid-game, players have established a stable cash flow and have unlocked a significant portion of the available toppings and upgrades. The loop is no longer about scraping by, but about maximizing efficiency, scaling the business, and making impactful decisions. Key actions include reinvesting profits into high-impact upgrades, hiring staff to increase serving capacity, and fine-tuning the menu by discovering and leveraging more valuable recipes.

- **How do we maintain engagement?**  
  Engagement in the mid-game is maintained by introducing new systems, increasing complexity, and providing ongoing rewards:
  - **Unlocking New Systems:** Players typically unlock major perks like Pizza Delivery, which introduces new revenue streams and challenges (e.g., managing pizza box inventory, fulfilling larger recipe-based orders), fundamentally altering daily strategy.
  - **Recipe Discovery:** With more toppings unlocked, players are constantly on the verge of discovering new, more complex, and more profitable recipes. The pursuit of powerful recipe combinations becomes a primary motivator.
  - **Scaling Challenge:** As the business grows, so do the challenges. Players must manage higher staff wages, increased and more demanding customer traffic, and a more complex economy. This prevents the game from becoming a passive "numbers go up" experience and keeps the player actively problem-solving.
  - **Dynamic Events:** The frequency and impact of random and scheduled events increase, requiring players to adapt their strategies and keeping gameplay fresh.

- **What creates strategic depth?**  
  Strategic depth in the mid-game emerges from the interplay between multiple interconnected systems, requiring players to make complex trade-offs with long-term consequences:
  - **Specialization vs. Diversification:** Players must decide whether to specialize in a few high-value recipes and toppings or diversify to appeal to a broader range of customers. This choice impacts inventory management, Quality Score effectiveness, and overall strategy.
  - **Economic Balancing Act:** Players face significant financial decisions—whether to invest in powerful, late-game upgrades for long-term payoff or hire more staff for immediate gains in serving capacity and reputation.
  - **Synergistic Upgrade Paths:** The choice of upgrades becomes more critical. Players can pursue synergistic strategies, such as combining upgrades that boost Quality Score with those that increase the chance of "Delighted" customers, creating feedback loops that drive reputation and sales growth.
  - **Resource Management Complexity:** With more ingredients, recipes, and staff, players must manage a more intricate supply chain and balance short-term needs with long-term investments, deepening the strategic challenge.

### 8.3 Late Game
- **What's the endgame content?**  
  The endgame content centers on achieving mastery over the game's systems to build a highly optimized business engine. The primary goal is to reach the Prestige condition (e.g., earning $10,000 cash, subject to tuning). At this stage, the player's focus shifts from growth to maximizing efficiency, leveraging meta-progression bonuses, and preparing for a strategic reset. The endgame is not a static state but a culmination of a successful run, leading directly into the meta-progression loop.  
  - **Prestige System:** The player can choose to Prestige, resetting their progress in exchange for permanent bonuses (e.g., boosting a topping's popularity, increasing base slice price, stacking flour discounts).  
  - **Optimization Challenge:** Players are encouraged to fine-tune their upgrade paths, recipe choices, and staff management to reach the Prestige threshold as efficiently as possible.  
  - **Unlocking All Content:** The late game provides opportunities to unlock every recipe, topping, and upgrade, encouraging completionist play.

- **How do we prevent boredom?**  
  Boredom is prevented by ensuring the late-game remains dynamic, challenging, and rewarding:
  - **Prestige Loop:** The Prestige system is the primary defense against stagnation. Each reset introduces a new strategic puzzle, as the player's permanent bonuses and unlocked content change the optimal path for the next run.
  - **Variable Challenges:** The Random Event system continues to introduce unpredictable challenges and opportunities, requiring adaptation even in a well-optimized business.
  - **Player-Driven Goals:** Players can set their own late-game challenges, such as speedrunning to Prestige, maximizing profits with a difficult topping, or unlocking every recipe in a single run.
  - **Scaling Difficulty:** As the player approaches endgame, costs, customer expectations, and operational complexity increase, ensuring the player must continue to engage with all systems.

- **What creates long-term goals?**  
  Long-term goals are created by the meta-progression systems and the drive for mastery:
  - **Permanent Collection & Unlocks:**  
    - **Prestiging with Every Topping:** Permanently boosting every available topping is a significant long-term objective, requiring many successful runs and strategic planning.
    - **Maximizing Meta-Bonuses:** Achieving the maximum flour price discount and slice price bonus through repeated Game Overs and Prestiges provides clear, incremental goals.
    - **Unlocking All Content:** Discovering every recipe, topping, and upgrade encourages replayability and experimentation.
  - **Strategic Mastery:**  
    - Players are incentivized to find the most mathematically optimal upgrade and recipe paths for each Prestige bonus, and to discover hidden synergies between events, upgrades, and business strategies.
  - **Community and Self-Competition:**  
    - For dedicated players, long-term goals include self-improvement and community participation—sharing strategies, comparing high scores, and showcasing unique or challenging completed runs.

---

## 9. DEVELOPMENT APPROACH

### 9.1 MVP Features

**What's the minimum viable product?**  
A playable version of the core gameplay loop that allows a player to experience the fundamental cycle of preparing for a day, selling pizza, and seeing the results. The MVP should successfully demonstrate the core challenge of balancing resources (Cash, Health) to survive and grow, even if the content and strategic options are limited.

**What features are essential for the core experience?**  
To achieve a playable core loop, the following systems are essential:

- **Core Loop Engine:**  
  - The game must cycle through the Management, Day, and End-of-Day phases, with clear transitions and state management.
- **Core Resources:**  
  - Cash and Health systems are non-negotiable, as they are the primary win/loss conditions.
- **Basic Production:**  
  - The ability to buy Flour and use the Make Dough action. Dough is required for all sales.
- **Basic Customer System:**  
  - A simplified Quality Score and Disgust Score system that can influence a sale.
  - At least two customer outcomes: one that Buys and one that Doesn't Buy.
  - A basic Reputation score that increases customer traffic (3 + Rep).
- **Day Cycle Essentials:**  
  - A functioning Start Day button that requires base ingredients.
  - A 20-second timer for the Day phase.
  - A basic Serving Capacity to limit daily sales.
- **Single Upgrade Path:**  
  - The player must be able to purchase the "Clean Microwave" upgrade, as it is a requirement to start the day cycle. This establishes the upgrade system's foundation.
- **Game Over Condition:**  
  - The game must end when Health reaches 0 or when the player cannot afford the ingredients to start a new day.
- **Core UI:**  
  - Status Panel to show Cash and Health.
  - Operations Panel with buttons for "Make Dough" and "Start Day."
  - Inventory Panel to buy Flour.
  - Business Log to provide feedback on sales and events.

**What can we cut for v1?**  
To streamline development and focus on the core experience, the following features should be cut from the initial MVP release:

- **All Meta-Progression:**  
  - The Skill, Prestige, and stacking Game Over bonuses should be excluded. The game will be a self-contained run.
- **Most Content:**  
  - Upgrades & Perks: All upgrades and perks should be cut except for the single "Clean Microwave" required for progression.
  - Toppings & Recipes: The full topping and recipe discovery systems are not needed. The MVP can function with just a single type of pizza slice.
  - Events: Both the Random and Scheduled event systems should be completely removed to simplify the loop.
  - Staff System: Hiring and managing staff will be excluded.
  - Advanced Systems: The Delivery system and detailed financial tracking from "Accounting Software" are not core to the initial loop.
- **Non-Essential UI:**  
  - The Recipes tab, detailed stats panels, and any cosmetic UI elements can be cut.
- **Balancing & Dev Tools:**  
  - The in-game Balance and Debug panels are not needed for the player-facing MVP.

---

**Developer Guidance & Suggestions:**

- This MVP is focused on validating the core gameplay loop and player experience. It should be built with extensibility in mind, so that additional systems (upgrades, events, meta-progression, etc.) can be layered in after the core is proven fun and functional.
- Use placeholder data and minimal art/UI to keep the scope tight.
- Prioritize clear, immediate feedback for player actions (especially in the Business Log).
- Keep the code modular, even for the MVP, to avoid rework when adding features later.

**Summary:**  
This MVP is focused on validating the core gameplay loop and player experience. The only additions are a bit more specificity for the developer (state management, extensibility, feedback), and a reminder to keep the codebase modular from the start. This will make future expansion much easier and keep the project on track.



---

## NOTES & IDEAS

### Random Thoughts
- [Space for any random ideas or inspirations]
- I want to store all events, ingredients, upgrades, perks, etc. in files that I can easily edit the copy and other factors associated with each item
- consider adding a game balance panel for playtesting purposes. allows dev to make tweaks to elements that affect game balance.

### References & Inspiration
- [Games, mechanics, or concepts that inspire this project]

### Questions & Concerns
- [Things we're unsure about or need to figure out]

### Personal Vision Notes
- [the player's thoughts on how this game reflects the player's experiences and what the player want players to take away] 
- [the player's thoughts on how this game reflects the player's experiences and what the player want players to take away] 
- [the player's thoughts on how this game reflects the player's experiences and what the player want players to take away] 