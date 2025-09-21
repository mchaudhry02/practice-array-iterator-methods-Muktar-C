//Task 1: Using forEach
// Create an array of favorite cities
let cities = ["Paris", "Tokyo", "New York", "Sydney", "Cape Town"];

// Use forEach to log each city in uppercase
cities.forEach(function(city) {
  console.log(city.toUpperCase());
});

// Output will be the cities all in uppercase

//Task 2: Transforming with map
// Create an array of numbers 1–5
let numbers = [1, 2, 3, 4, 5];

// Use map to square each number
let squared = numbers.map(function(num) {
  return num * num;
});

// Log arrays
console.log("Original:", numbers);   // [1, 2, 3, 4, 5]
console.log("Squared:", squared);   // [1, 4, 9, 16, 25]

//Task 3: Filtering with filter
// Create scores array
let scores = [85, 42, 90, 75, 30, 100];

// Use filter to keep scores ≥ 80
let highScores = scores.filter(function(score) {
  return score >= 80;
});

// Log arrays
console.log("Original Scores:", scores);
console.log("High Scores:", highScores); // [85, 90, 100]

//Task 4: Finding with find and findIndex
// Array of favorite foods
let foods = ["Pizza", "Sushi", "Taco", "Pasta", "Curry", "Pie"];

// Use find to locate first food with name < 4 letters
let shortFood = foods.find(function(food) {
  return food.length < 4;
});

// Use findIndex to locate its index
let shortFoodIndex = foods.findIndex(function(food) {
  return food.length < 4;
});

// Log results
console.log("Foods:", foods);
console.log("First short food:", shortFood);        // "Pie"
console.log("Index of short food:", shortFoodIndex); // e.g. 5
