console.log("Hello World!");
let team = "Sky";
let jersey = 88;
let hasWonChampionship = false;
let stadiumLocation = null;
let nextGame;
console.log(team);
console.log(jersey);
console.log(hasWonChampionship);
console.log(stadiumLocation);
console.log(nextGame);

// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["spaghetti","Fried Chicken","Cicken fired rice","Ruben","jambalaya","pergogi" ]
console.log(favoriteFoods);
console.log(favoriteFoods.length, "favorite foods");


// 2. Loop through the list and print: "One of my favorite foods is ______."
function foodlist() {for (let i = 0; i < favoriteFoods.length; i++) {
  console.log("One of my favorite foods is", favoriteFoods[i]);
}}
console.log(foodlist());





// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
function rankedFoods(favoriteFoods) {for (let i=1; i <=6; i++) {
console.log("My", i, "favorite food is", favoriteFoods[i-1])
 }
}

rankedFoods(favoriteFoods)

// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."




// 4b. Call the function at least 3 times



// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Donuts" would be.
function foodfilter(friendFavorites) {
  let FoodswithA = [];

  for (i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].toLowerCase().includes("a")) {
      console.log(friendFavorites[i]);
      FoodswithA.push(friendFavorites[i]);
    }
  }
return FoodswithA;
}



// 6. Store the result in an array called foodsWithA. Print out the array.
let foodresult = foodfilter(friendFavorites);
console.log(foodresult)


// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = ["Burger", "Lasagna", "Empenadas"];


// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = ["Taco","Gyro","Rice"];


// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log(longFoodNames);
console.log(shortFoodNames);

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
