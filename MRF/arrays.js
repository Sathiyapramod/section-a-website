// MuthuPandi
// HariniSri

var marks = [85, 95, 67, 60, 100, 45, 90];
// used to print the length of the array
l = marks.length;

console.log(l);

console.log(marks[3]); //60
console.log(marks[l - 1]); //100

console.log("marks are shown below");
for (let i = 0; i <= l; i++) {
  console.log(marks[i]);
}

console.log("marks printed in reverse");
for (let i = l - 1; i >= 0; i--) {
  console.log(marks[i]);
}

console.log("marks in odd spaces");
// start 0
// end 6
// each step -> jump 2

for (let i = 0; i < l; i = i + 2) {
  console.log(marks[i]);
}

marks.push(25);
marks.push(35);

console.log(marks);
marks.pop();
console.log(marks);
