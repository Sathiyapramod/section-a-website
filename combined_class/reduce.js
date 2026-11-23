const marks = [88, 91, 96, 98, 92];

// reduce
// 1st one is arrow function
// 2nd parameter is Initial Value;

// 88 + 91+ 96 + 98 + 94

// 0

// 0 + 88 => 88 -> L1
// 88 + 91 => 179 -> L2
// 179 + 96 => 275 -> L3
// 275 + 98 => 373 -> L4
// 373 + 94 => 467 -> L5

const total = marks.reduce((acc, val) => {
  let temp = acc + val;
  return temp;
}, 0);

console.log(total);
