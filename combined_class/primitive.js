const market = [
  { id: 1, name: "mango", stock: 500 },
  { id: 2, name: "apple", stock: 1500 },
  { id: 3, name: "banana", stock: 200 },
];

// expected output is ["mango","apple","banana"]

let result = market.map((x) => {
  let temp = x.name;
  return temp; // this is very important
});

console.log(result);

// get only id and name
const output = market.map((x) => {
  let id = x.id;
  let name = x.name;
  return {
    my_id: id,
    my_name: name,
  };
});

console.log(output);

const balances = [1200, -450, 0, 3400, -120, 850];
result = balances.filter((x) => {
  if (x > 0) {
    return x;
  }
});

console.log(result);

const inventory = [
  { item: "Pen", price: 20, inStock: true },
  { item: "Notebook", price: 80, inStock: false },
  { item: "Marker", price: 45, inStock: true },
  { item: "Eraser", price: 10, inStock: false },
  { item: "Stapler", price: 120, inStock: true },
];

const availableStocks = inventory
  .filter((x) => {
    if (x.inStock == true) {
      return x;
    }
  })
  .map((y) => {
    return y.item;
  });

console.log(availableStocks);
