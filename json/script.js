// var p = document.getElementById("myParagraph");
// console.log(p.innerText);

var form = document.getElementById("myForm");
var errorBlock = document.getElementById("error-block");

form.addEventListener("submit", (event) => {
  errorBlock.innerText = "";
  event.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  username = username.value;
  password = password.value;

  console.log({ username, password });

  let output = JSON.stringify({
    username: username,
    password: password,
  });

  console.log(output);

  if (username == "") {
    errorBlock.innerText = "Username is Missing\n";
  }
  if (password == "") {
    errorBlock.innerText += "Password is missing\n";
  }

  // if (!username.validity.valid) {
  //   errorBlock.textContent = "Username is missing\n";
  //   event.preventDefault();
  // }
});

const shoeList = `[
  {
    "ProductURL": "https://picsum.photos/seed/shoe1/300/200",
    "productName": "Bata Power Running Shoes",
    "CompanyName": "Bata India",
    "qty": 1,
    "price": 1499
  },
  {
    "ProductURL": "https://picsum.photos/seed/shoe2/300/200",
    "productName": "Relaxo Sparx Sports Sneakers",
    "CompanyName": "Relaxo Footwears",
    "qty": 1,
    "price": 1199
  },
  {
    "ProductURL": "https://picsum.photos/seed/shoe3/300/200",
    "productName": "Liberty Force 10 Walking Shoes",
    "CompanyName": "Liberty Shoes",
    "qty": 1,
    "price": 1299
  },
  {
    "ProductURL": "https://picsum.photos/seed/shoe4/300/200",
    "productName": "Campus First Casual Sneakers",
    "CompanyName": "Campus Activewear",
    "qty": 1,
    "price": 1699
  },
  {
    "ProductURL": "https://picsum.photos/seed/shoe5/300/200",
    "productName": "Metro Classic Leather Loafers",
    "CompanyName": "Metro Brands",
    "qty": 1,
    "price": 2499
  }
]`;

console.log(shoeList);
console.log(typeof shoeList);

var finalData = JSON.parse(shoeList);
console.log(finalData);

// container
const shoeContainer = document.getElementById("shoe-container");

finalData.forEach((shoe) => {
  let productName = shoe.productName;
  let url = shoe.ProductURL;
  let company = shoe.CompanyName;
  let price = shoe.price;
  let qty = shoe.qty;

  let temp = `<div class='card'>
  <img src='${url}'/>
  <div class='special-div'>
    <span>${productName}</span>
    <button class='button'>+</button>
  </div>
  <div class='company'>${company}</div>
  <span class='price'>${price}</span>
  <span>Items: ${qty}</span>
  </div>`;

  console.log(temp);

  shoeContainer.innerHTML = shoeContainer.innerHTML + temp;
});
