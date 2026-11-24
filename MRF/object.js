const data = {
  name: "john",
  age: 35,
  email: "john@example.com",
};

console.log(data);
data["address"] = "Perungudi Chennai";

console.log(data);
console.log(data["age"]);
console.log(data.name); // this line format won't work in python

// this line removes the address from data dict
delete data["address"];

console.log(data);

data.age = 36;
console.log(data);

// i want to print the keys alone
console.log(Object.keys(data)); // [ 'name', 'age', 'email' ]
console.log(Object.values(data));

for (let key in data) {
  console.log(key, data[key]);
}
