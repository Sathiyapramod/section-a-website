// arrays

// three inbuilt methods

// 1. map
// 2. filter
// 3. reduce

// double each the number and store it inside a new array.
// 10 -> 20
// 40 -> 80

// const result = [];
// for (let i = 0; i < nums.length; i++) {
//   let temp = nums[i] * 2;
//   result.push(temp);
// }

// console.log(result);

const nums = [10, 20, 30, 40, 50, 60];
var result = nums.map((x) => {
  let temp = x * 2;
  return temp;
});

console.log(result); // [20,40,60,80,100,120]

// Example 1
var temperature = [25, 28, 30, 31, 32];
// add 2 degree to each temperatures
// new variable -> final

// Example 2
var prices = [15000, 25000, 2000, 4000, 250];
// add Rs.500 to all the prices
// new variable -> NewPrices

// Example 3
var engineSize = [15.3, 13.3, 12.9, 14.4, 13.5];
// decrease the size by 2.5
// new variable -> NewEngineSize
