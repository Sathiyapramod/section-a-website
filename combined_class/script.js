console.log("hello world");

// normal function

// function add(a, b) {
//   let result = a + b;
//   return result;
// }

// function expression

// const add = function (a, b) {
//   let result = a + b;
//   return result;
// };

// arrow function
const add = (p, q) => {
  let result = p + q;
  return result;
};

console.log(add(40, 30));

// IIFE function

// hello -> print "welcome to academy"

var nums = [10, 15, 30, 20, 25];
console.log(nums);

let result = nums.map((x) => {
  let temp = x + 2;
  return temp;
});

console.log(result);

const prices = [100, 250, 400, 150, 300];
const pricesIndex = prices.map((el, idx) => {
  //   console.log(idx);
  return idx;
});

console.log(pricesIndex);
