/**
 * def <function_name>(param1, param2,...):
 *      return output
 *
 *
 */
var content = "hello world";

// normal function
function add(a, b) {
  // use either let or const
  let output = a + b;
  console.log(output);
  return output;
}

function sayHello() {
  return "Hello how are you !!!";
}

// function expression
const subtract = function (b, d) {
  let output = b - d;
  return output;
};

console.log(subtract(5, 2)); // 3

// arrow function
// area of a rectangle
const areaOfRectangle = (l, b) => {
  let area = l * b;
  console.log(area);
};

areaOfRectangle(10, 15); //150

// area of a circle
const areaOfCircle = (radius) => {
  let area = 3.14 * radius * radius;
  console.log(area);
};

console.log(typeof areaOfCircle)

areaOfCircle(10);