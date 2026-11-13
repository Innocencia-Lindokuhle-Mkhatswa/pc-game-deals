// ===== THE DATA I WAS GIVEN =====
const deals = [
  { id: 1, title: "Hollow Knight", normalPrice: 14.99, salePrice: 7.49, store: "Steam" },
  { id: 2, title: "Stardew Valley", normalPrice: 13.99, salePrice: 13.99, store: "GOG" },
  { id: 3, title: "Celeste", normalPrice: 19.99, salePrice: 4.99, store: "Steam" },
  { id: 4, title: "Hades", normalPrice: 24.99, salePrice: 12.49, store: "Epic Games" },
  { id: 5, title: "Portal 2", normalPrice: 9.99, salePrice: 0.99, store: "Steam" },
  { id: 6, title: "Terraria", normalPrice: 9.99, salePrice: 9.99, store: "GOG" },
  { id: 7, title: "Disco Elysium", normalPrice: 39.99, salePrice: 9.99, store: "GOG" },
  { id: 8, title: "Cuphead", normalPrice: 19.99, salePrice: 14.99, store: "Steam" }
];

// ===== PART A1: games on sale =====
function getOnSaleGames(games) {
  const onSale = [];
  for (const game of games) {
    if (game.salePrice < game.normalPrice) {
      onSale.push(game);
    }
  }
  return onSale;
}

// ===== PART A2: discount percentage =====
function getDiscountPercent(game) {
  const percent = (game.normalPrice - game.salePrice) / game.normalPrice * 100;
  return Math.round(percent);
}

// ===== PART A3: search by title =====
function searchGames(games, searchWord) {
  const results = [];
  const word = searchWord.toLowerCase();
  for (const game of games) {
    const title = game.title.toLowerCase();
    if (title.includes(word)) {
      results.push(game);
    }
  }
  return results;
}

// ===== PART A4: cheapest game =====

function getCurrentPrice(game) {
  if (game.salePrice < game.normalPrice) {
    return game.salePrice;
  } else {
    return game.normalPrice;
  }
}

function getCheapestGame(games) {
  let cheapest = games[0];
  for (const game of games) {
    if (getCurrentPrice(game) < getCurrentPrice(cheapest)) {
      cheapest = game;
    }
  }
  return cheapest;
}


// TESTS
const saleGames = getOnSaleGames(deals);
console.log("Games on sale:", saleGames.length);
console.log(saleGames.map(game => game.title));

console.log("Hollow Knight discount:", getDiscountPercent(deals[0]) + "%");
console.log("Portal 2 discount:", getDiscountPercent(deals[4]) + "%");
console.log("Stardew Valley discount:", getDiscountPercent(deals[1]) + "%");


console.log("Search 'hol':", searchGames(deals, "hol").map(game => game.title));
console.log("Search 'PORTAL':", searchGames(deals, "PORTAL").map(game => game.title));
console.log("Search 'zzz':", searchGames(deals, "zzz").map(game => game.title));


const cheapest = getCheapestGame(deals);
console.log("Cheapest game:", cheapest.title, "at R" + getCurrentPrice(cheapest));
