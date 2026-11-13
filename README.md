 PC Game Deals 

 Setup – how to run it
Part A (terminal):
1. Install Node.js from nodejs.org (LTS version).
2. Open the project folder in VS Code.
3. Open the terminal (Terminal → New Terminal).
4. Type `node partA.js` and press Enter. The results print in the terminal.

Part B (web page):
1. Open the project folder.
2. Double-click `index.html` to open it in a web browser.
   (I used the Live Server extension in VS Code, but double-clicking also works.)

 Files
- `partA.js` – the four Part A functions and their tests
- `index.html` – the structure of the web page
- `style.css` – the colours and layout
- `script.js` – puts the game cards on the page
- `notes.txt` – my assumptions

Choices
- I used JavaScript for both parts so I only had to learn one language.
- I used plain HTML, CSS and JavaScript with no framework, as the brief allowed.
- I kept functions small, each doing one job (e.g. `isOnSale`, `formatPrice`),
  so they are easier to read, test and reuse.
- I used simple `for` loops because they were easier for me to understand
  step by step.
- I put the 3 web files side by side so `index.html` can find them easily.

Obstacles
- Node.js wasn't installed. The terminal said "node is not recognized".
  I installed it from nodejs.org and restarted VS Code.
- My project was inside Program Files, which can block saving.
  I moved it to my Documents folder.
- Functions were confusing at first. Thinking of a function as a "machine"
  (put something in → get something out) helped me understand them.
- My page once showed 9 games instead of 8 because a line had been duplicated.
  I compared my data to the brief and fixed it.
- 
 Resources
- Claude (an AI assistant): it gave me insight and direction oh how to tackle the project
  
- nodejs.org for installing Node.js.


Time
About 4 hours in total.

Next time
If I had another full day I would:
- Add a live search box that filters games as you type (Part C).
- Add a checkbox to show only games on sale (Part C).
- Show the discount percentage on each card (e.g. "-50%").
- Keep the data in one shared file so I don't have two copies of the list.
- Learn Git and put the project on GitHub.

 Assumptions
- A game whose sale price equals its normal price is NOT on sale.
- Discounts are rounded to the nearest whole number.
- If no game matches a search, an empty list is returned.
- If two games tie for cheapest, the first one in the list is returned.
- Prices are shown in Rand with 2 decimal places (e.g. R7.49).
- On sale games show the normal price crossed out, so the saving is clear.