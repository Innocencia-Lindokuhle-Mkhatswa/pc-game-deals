// ===== THE DATA =====
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

// ===== HELPERS =====
function isOnSale(game) {
  return game.salePrice < game.normalPrice;
}

function formatPrice(price) {
  return "R" + price.toFixed(2);
}

// ===== SHOW THE GAMES ON THE PAGE =====
function showGames(games) {
  const list = document.getElementById("game-list");
  list.innerHTML = "";

  for (const game of games) {
    let html = "<div class='game-card'>";
    html += "<h2>" + game.title + "</h2>";
    html += "<p>Store: " + game.store + "</p>";

    if (isOnSale(game)) {
      html += "<span class='sale-tag'>ON SALE</span>";
      html += "<p>Normal price: <s>" + formatPrice(game.normalPrice) + "</s></p>";
      html += "<p class='sale-price'>Sale price: " + formatPrice(game.salePrice) + "</p>";
    } else {
      html += "<p>Normal price: " + formatPrice(game.normalPrice) + "</p>";
    }

    html += "</div>";
    list.innerHTML += html;
  }
}

showGames(deals);