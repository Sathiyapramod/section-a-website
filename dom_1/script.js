// getElementById
const test = document.getElementById("welcom");
console.log(test); // no content

// getElementsByClassname

const cards = document.getElementsByClassName("content");
console.log(cards);

// querySelector -> I want to read specific ID
const welcomeToSectionA = document.querySelector("#test");
console.log(welcomeToSectionA);

// I will insert my content
welcomeToSectionA.innerText = "Welcome to Section-A";

// querySelectorAll -> all classlist -> I want to react
const mySquads = document.querySelectorAll(".content");
console.log(mySquads);

// forEach

// mySquads.forEach((x) => {
//   // add my border as 1px solid black;
//   x.style.border = "1px solid black";

//   // add font color as red
//   x.style.color = "red";

//   // add background color as light blue
//   x.style.backgroundColor = "lightblue";

//   // change the width here
//   x.style.width = "fit-content";
//   x.style.padding = "15px";
// });

mySquads.forEach((x) => {
  x.classList.add("section-a-squads");
});
