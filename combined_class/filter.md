1.1 Keep Only Even Numbers

Given an array of numbers, use .filter() to keep only the even numbers:
const nums = [11, 24, 37, 42, 55, 68, 73];
// Expected Output: [24, 42, 68]




1.2 Given exam scores, use .filter() to keep only scores that are 50 or above:
const scores = [34, 78, 49, 92, 50, 28, 65];
// Expected Output: [78, 92, 50, 65]






1.3 Given an array of words, use .filter() to return only words with more than 5 letters (.length > 5)

const words = ["code", "javascript", "html", "python", "react", "database"];
// Expected Output: ["javascript", "python", "database"]







1.4 Given account balances, use .filter() to keep only positive balances greater than 0:
const balances = [1200, -450, 0, 3400, -120, 850];
// Expected Output: [1200, 3400, 850]








1.5  Given an inventory list, use .filter() to return only the items where inStock is true:

const inventory = [
  { item: "Pen", price: 20, inStock: true },
  { item: "Notebook", price: 80, inStock: false },
  { item: "Marker", price: 45, inStock: true },
  { item: "Eraser", price: 10, inStock: false },
  { item: "Stapler", price: 120, inStock: true }
];


// Expected Output: [{ item: "Pen", ... }, { item: "Marker", ... }, { item: "Stapler", ... }]   



1.6 Given the scores, find and make new list containing scores at odd indices
const scores = [34, 78, 49, 92, 50, 28, 65];
// Expected Output: [78, 92, 28, 65]
<!-- Explanation: 78, 92, 28, 65 are available at index position 1,3,5,7 -->
