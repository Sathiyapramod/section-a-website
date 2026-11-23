// filter using arrays
const data = [11, 24, 37, 42, 55, 68, 73];

// filter out only EVEN Numbers

result = data.filter((x) => {
  if (x % 2 == 0) {
    console.log(x);
    return x;
  }
});

console.log("result is =", result);

const scores = [34, 78, 49, 92, 50, 28, 65];

result = scores.filter((y) => {
  if (y >= 50) {
    return y;
  }
});

console.log(result);


