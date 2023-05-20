const coffeeMenu = require("./coffee_data");

// 2. Print an array of all the drinks on the menu.
const allDrinks = coffeeMenu.map((drink) => drink.name);
console.log("All Drinks:", allDrinks);

// 3. Print an array of drinks that cost 5 and under.
const affordableDrinks = coffeeMenu.filter((drink) => drink.price <= 5);
console.log("Affordable Drinks (5 and under):", affordableDrinks);

// 4. Print an array of drinks that are priced at an even number.
const evenPricedDrinks = coffeeMenu.filter((drink) => drink.price % 2 === 0);
console.log("Even Priced Drinks:", evenPricedDrinks);

// 5. Print the total if you were to order one of every drink.
const totalOrder = coffeeMenu.reduce((total, drink) => total + drink.price, 0);
console.log("Total Order:", totalOrder);

// 6. Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal);
console.log("Seasonal Drinks:", seasonalDrinks);

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name.
const seasonalDrinksWithBeans = seasonalDrinks.map(
  (drink) => `${drink.name} with imported beans`
);
console.log("Seasonal Drinks with Imported Beans:", seasonalDrinksWithBeans);
