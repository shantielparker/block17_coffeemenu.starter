// Prompt 1. Clean the coffee_data.js file.
const coffeeMenu = require("./data.js");

console.log(coffeeMenu);

// Prompt 2. Print an array of all the drinks on the coffeeMenu.
// Print an array of arrays of all the items with their prices.
// For example: [["cappuccino", 8], ["espresso", 5]];
const coffeeMenu = require("./data.js");

const printName = (item) => {
  return item.name;
};
console.log(coffeeMenu.map(printName));

const priceArray = coffeeMenu.map((item) => {
  return item.price;
});
console.log(priceArray);

// Prompt 3. Print an array of all the drinks that are priced under 5.
const underFive = (item) => {
  return item.price <= 5;
};
const itemsUnderFive = coffeeMenu.filter(underFive);
console.table(itemsUnderFive);


// Prompt 4. Print an array of drinks that are priced at an even number.
// Print the even price for the drinks.
const numberOfItems = coffeeMenu.length;
const evenPrice = totalPrice / numberOfItems;
console.log(evenPrice);

// Prompt 5. Print the total if you were to order one of every drink.
//Print the total cost of the coffeeMenu array.
const sumTotalCost = (accumulator, currentValue) => {
  return accumulator + currentValue;
};
const totalPrice = priceArray.reduce(sumTotalCost);
console.log(totalPrice);
// Prompt 6. Print an array with all the drinks that are seasonal.
// Print an array of all the items whose condition are "seasonal."
const isseasonal = (item) => {
  return item.condition === "seasonal";
};
const usedItems = coffeeMenu.filter(isseasonal);
console.table(seasonalItems);

// Prompt 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const seasonalItems = coffeeMenu.filter((item) => {
  return item.condition === "seasonal" && item.name.includes("with imported beans");
});
console.table(seasonalItems);

import { getCoffeeMenu } from "./data.js"

const coffeeMenu = getCoffeeMenu();

console.log(coffeeMenu);
